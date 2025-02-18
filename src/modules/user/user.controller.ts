import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { IUserCreateDto, userCreateDto } from './dto/create-user.dto';
import { IUserUpdateDto, userUpdateDto } from './dto/update-user.dto';
import { validator } from 'src/lib/validator';

@Controller('user')
export class UserController {
  constructor(
    @Inject("IUserService") private readonly userService: UserService) {}

  @Post()
  async create(@Body() dto: IUserCreateDto) {
    validator<IUserCreateDto>(userCreateDto, dto)
    const resdata = await this.userService.create(dto)
    return resdata
  }

  @Get()
  async findAll() {
    const resdata = await this.userService.findAll()
    return resdata
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const resdata = await this.userService.findOne(id)
    return resdata
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: IUserUpdateDto) {
    validator<IUserUpdateDto>(userUpdateDto, dto)
    const resdata = await this.userService.updateData(id, dto)
    return resdata
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const resdata = await this.userService.delete(id)
    return resdata
  }
}
