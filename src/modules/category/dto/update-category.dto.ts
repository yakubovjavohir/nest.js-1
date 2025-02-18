import * as Joi from "joi";
import { ICategoryCreateDto } from "./create-category.dto";

export interface ICategoryUpdateDto extends Partial<ICategoryCreateDto> {
    name:string
}

export const categoryUpdateDto = Joi.object<ICategoryUpdateDto, true>({
  name: Joi.string().required()
});
