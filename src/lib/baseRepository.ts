import { Pool } from "pg";
import { CustomError } from "./customError";

const pool: Pool = new Pool({
  connectionString: 'postgres://postgres:ok@127.0.0.1:5432/olma',
});

export abstract class BaseRepository {
  protected async multiple<TData, TArgs>(
    query: string,
    ...arg: Array<TArgs>
  ): Promise<Array<TData>> {
    const connection = await pool.connect();

    try {
      const { rows } = await connection.query(query, arg);
      return rows;
    } catch (error: unknown | Error) {
      const message =
        error instanceof Error ? error.message : "INTERNAL SERVER ERROR";

      throw new CustomError(500, message);
    } finally {
      connection.release();
    }
  }

  protected async single<TData, TArgs>(
    query: string,
    ...arg: Array<TArgs>
  ): Promise<TData | undefined> {
    const connection = await pool.connect();

    try {
      const { rows } = await connection.query(query, arg);
      return rows[0];
    } catch (error: unknown | Error) {
      const message =
        error instanceof Error ? error.message : "INTERNAL SERVER ERROR";

      throw new CustomError(500, message);
    } finally {
      connection.release();
    }
  }
}
