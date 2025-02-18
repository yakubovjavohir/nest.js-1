import { BaseRepository } from "../../lib/baseRepository";
import { CategoryEntity } from "./entities/category.entity";
import { ICategoryRepository } from "./interfaces/user.repository";

class CategoryRepository extends BaseRepository implements ICategoryRepository {
  async create(
    id:string,
    name:string
  ): Promise<CategoryEntity | undefined> {
    return await this.single<CategoryEntity, any>(
      `INSERT INTO category (id, name) VALUES ($1, $2) RETURNING *`,
      id,
      name
    );
  }

  async findAll(): Promise<Array<CategoryEntity>> {
    return await this.multiple<CategoryEntity, any>(`SELECT * FROM category`);
  }


  async update(
    name:string,
    id: string,
  ): Promise<CategoryEntity | undefined> {
    return await this.single<CategoryEntity, any>(
      `UPDATE category SET name = $1 WHERE id = $2 RETURNING *`,
      name,
      id
    );
  }





  async delete(id: string): Promise<null> {
    await this.single(`DELETE FROM category WHERE id = $1`, id);
    return null;
  }



    async findById(id: string): Promise<CategoryEntity | undefined> {
      return await this.single<CategoryEntity, string>(
        `SELECT * FROM category WHERE id = $1`,
        id
      );
    }


}


export const categoryRepository = new CategoryRepository();

