import { BaseRepository } from "../../lib/baseRepository";
import { UserEntity } from "./entities/user.entity";
import { IUserRepository } from "./interfaces/user.repository";

class UserRepository extends BaseRepository implements IUserRepository {
  async create(
    id:string,
    fullName: string,
    email: string,
    password: string,
    age:number
  ): Promise<UserEntity | undefined> {
    return await this.single<UserEntity, any>(
      `INSERT INTO users (id, email, fullname, password, age) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      id,
      email,
      fullName,
      password,
      age
    );
  }

  async findAll(): Promise<Array<UserEntity>> {
    return await this.multiple<UserEntity, any>(`SELECT * FROM users`);
  }


  async update(
    fullName: string,
    email: string,
    password: string,
    age: number,
    id: string,
  ): Promise<UserEntity | undefined> {
    return await this.single<UserEntity, any>(
      `UPDATE users SET email = $1, fullname = $2, password = $3, age = $4 WHERE id = $5 RETURNING *`,
      email,
      fullName,
      password,
      age,
      id
    );
  }





  async delete(id: string): Promise<null> {
    await this.single(`DELETE FROM users WHERE id = $1`, id);
    return null;
  }



    async findById(id: string): Promise<UserEntity | undefined> {
      return await this.single<UserEntity, string>(
        `SELECT * FROM users WHERE id = $1`,
        id
      );
    }


}


export const userRepository = new UserRepository();

