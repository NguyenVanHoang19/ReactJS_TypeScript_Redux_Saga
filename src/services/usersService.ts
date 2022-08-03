import axios from "axios";
import { GET_USERS } from "../constants/urlApi";
import { User } from "../interfaces";

const usersService = {
    getUsers: async () => {
        return axios({
            method: 'GET',
            url: `${GET_USERS}`,
        });
    },
    getUserById: async (id: string) => {
        return axios({
            method: 'GET',
            url: `${GET_USERS}${id}`,
        });
    },
    createUser: async (data: User) => {
        return axios({
            method: 'POST',
            url: `${GET_USERS}`,
            data
        });
    },
    updateUser: async (id: string, data: User) => {
        return axios({
            method: 'PUT',
            url: `${GET_USERS}${id}`,
            data
        });
    },
    deleteUser: async (id: string) => {
        return axios({
            method: 'DELETE',
            url: `${GET_USERS}${id}`,
        });
    },
};

export default usersService;