import { Injectable } from '@nestjs/common';
import { ICategoryCreateDto } from './dto/create-category.dto';
import { ICategoryUpdateDto } from './dto/update-category.dto';
import { categoryRepository } from './user.repository';
import { v4 } from 'uuid';
import { ResData } from 'src/lib/resData';
@Injectable()
export class CategoryService {
  async create(dto: ICategoryCreateDto) {
    const data = await categoryRepository.create(
      v4(),
      dto.name
    )
    const resdata = new ResData(201, "created", data)
    return resdata
  }

  async findAll() {
    const data = await categoryRepository.findAll()
        const resdata = new ResData(200, "success", data)
        return resdata
  }

  async findOne(id: string) {
    const data = await categoryRepository.findById(id)
        const resdata = new ResData(200, "success", data)
        return resdata
  }

  async update(id: string, dto: ICategoryUpdateDto) {
    const data = await categoryRepository.update(
          dto.name,
          id,
        )
        const resdata = new ResData(200, "update", data)
        return resdata
  }

  async delete(id: string) {
      const data = await categoryRepository.delete(id)
        const resdata = new ResData(200, "delete", data)
        return resdata
  }
}
