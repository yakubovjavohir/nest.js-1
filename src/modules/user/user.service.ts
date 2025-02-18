import { Injectable } from '@nestjs/common';
import { IUserCreateDto } from './dto/create-user.dto';
import { IUserUpdateDto } from './dto/update-user.dto';
import { userRepository } from './user.repository';
import { ResData } from 'src/lib/resData';
import {v4} from "uuid"

@Injectable()
export class UserService {
  async create(dto: IUserCreateDto) {
    const data = await userRepository.create(
      v4(),
      dto.fullName,
      dto.email,
      dto.password,
      dto.age
    )
    const resdata = new ResData(201, "created", data)
    return resdata
  }

  async findAll() {
    const data = await userRepository.findAll()
    const resdata = new ResData(200, "success", data)
    return resdata
  }

  async findOne(id: string) {
    const data = await userRepository.findById(id)
    const resdata = new ResData(200, "success", data)
    return resdata
  }

  async updateData(id: string, dto: IUserUpdateDto) {
    const data = await userRepository.update(
      dto.fullName,
      dto.email,
      dto.password,
      dto.age,
      id,
    )
    console.log("data", data);

    const resdata = new ResData(200, "update", data)
    return resdata
  }

  async delete(id: string) {
    const data = await userRepository.delete(id)
    const resdata = new ResData(200, "delete", data)
    return resdata
  }
}

