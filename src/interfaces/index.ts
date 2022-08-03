export interface User {
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: Date | string
};

export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}