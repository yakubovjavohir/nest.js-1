  import { UserEntity } from "../entities/user.entity";

  export interface IUserRepository {
    create(
      id:string,
      email: string,
      fullname: string,
      password: string,
      age:number
    ): Promise<UserEntity | undefined>;

    findAll(): Promise<Array<UserEntity>>;
    update(
      fullname: string,
      email: string,
      password: string,
      age:number,
      id:string
    ): Promise<UserEntity | undefined>;

    delete(id: string): Promise<null>;

    findById(id:string):Promise<UserEntity | undefined>
  }
