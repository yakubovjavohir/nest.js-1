  import { CategoryEntity } from "../entities/category.entity";

  export interface ICategoryRepository {
    create(
      id:string,
      name:string
    ): Promise<CategoryEntity | undefined>;

    findAll(): Promise<Array<CategoryEntity>>;
    update(
      name:string,
      id:string
    ): Promise<CategoryEntity | undefined>;

    delete(id: string): Promise<null>;

    findById(id:string):Promise<CategoryEntity | undefined>
  }
