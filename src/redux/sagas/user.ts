import usersService from "../../services/usersService";
import { put, takeEvery } from 'redux-saga/effects';
import { addUser, deleteUser, getUsers, updateUser } from "../slice/users";
import { ResponseGenerator, User } from "../../interfaces";
import { setUser } from "../slice/user";
import { CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USER_BY_ID } from '../types/index';

interface payload {
    type: string;
    data?: User
};

export function* getUsersSaga() {
    const users: ResponseGenerator = yield usersService.getUsers()
    yield put(getUsers(users.data))
}

export function* getUserByIdSaga(id: string) {
    const user: ResponseGenerator = yield usersService.getUserById(id)
    yield put(setUser(user.data))
}

export function* createUserSaga(payload: payload) {
    if (payload.data) {
        yield usersService.createUser(payload.data)
        yield put(addUser(payload.data))
    }
}

export function* updateUserSaga(payload: payload) {
    if (payload.data) {
        yield usersService.updateUser(payload.data.id, payload.data)
        yield put(updateUser(payload.data))
    }
}

export function* deleteUserByIdSaga(payload: payload) {
    if (payload.data) {
        yield usersService.deleteUser(payload.data?.id)
        yield put(deleteUser(payload.data?.id))
    }
}

export function* watchUserAsync() {
    yield takeEvery<any>(GET_USERS, getUsersSaga)
    yield takeEvery<any>(GET_USER_BY_ID, getUserByIdSaga)
    yield takeEvery<any>(CREATE_USER, createUserSaga)
    yield takeEvery<any>(DELETE_USER_BY_ID, deleteUserByIdSaga)
}