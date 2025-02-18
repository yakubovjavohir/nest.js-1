import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { categoryCreateDto, ICategoryCreateDto } from './dto/create-category.dto';
import { categoryUpdateDto, ICategoryUpdateDto } from './dto/update-category.dto';
import { validator } from 'src/lib/validator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() dto: ICategoryCreateDto) {
    validator<ICategoryCreateDto>(categoryCreateDto, dto)
    const resdata = await this.categoryService.create(dto)
    return resdata
  }

  @Get()
  async findAll() {
    const resdata = await this.categoryService.findAll()
    return resdata
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const resdata = await this.categoryService.findOne(id)
    return resdata
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: ICategoryUpdateDto) {
    validator<ICategoryUpdateDto>(categoryUpdateDto, dto)
    const resdata = await this.categoryService.update(id, dto)
    return resdata
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const resdata = await this.categoryService.delete(id)
    return resdata
  }
}
