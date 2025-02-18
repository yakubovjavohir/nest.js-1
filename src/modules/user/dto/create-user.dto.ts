import * as Joi from 'joi';

export interface IUserCreateDto {
    fullName: string;
    email: string;
    password: string;
    age: number;
}

export const userCreateDto = Joi.object({
    fullName: Joi.string().required().min(2).max(36),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(20),
    age: Joi.number().required().max(90)
});
