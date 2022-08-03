import React from "react";
import { Button, Input } from "@mui/material";
import styles from './styles';
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CREATE_USER } from "../../redux/types";

type Inputs = {
    name: string,
    email: string,
    password: string,
};

const MyForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch({ type: CREATE_USER, data });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input style={styles} error={errors.name ? true : false} placeholder="Enter Name" fullWidth {...register("name", { required: 'Name is required!' })} />
            <Input style={styles} error={errors.email ? true : false} placeholder="Enter Email" fullWidth {...register("email", { required: 'Email is required!' })} />
            <Input style={styles} error={errors.password ? true : false} placeholder="Enter Password" fullWidth {...register("password", { required: 'Password is required!' })} />
            <Button type="submit" style={styles} fullWidth variant="contained">Thêm</Button>
        </form>
    )
};

export default MyForm;