import Joi from "joi";
import { IUserCreateDto } from "./create-user.dto";

export interface IUserUpdateDto extends Partial<IUserCreateDto> {
    fullName: string;
    email: string;
    password: string;
    age: number;
}

export const userUpdateDto = Joi.object<IUserUpdateDto, true>({
  email: Joi.string().optional().email(),
  password: Joi.string().optional().min(6).max(20),
  fullName: Joi.string().optional().min(2).max(36),
  age: Joi.number().max(90).required()
});
