import { DataSource } from "typeorm";
import { User } from "./src/entity/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgre",
    password: "postgre",
    database: "yourdatabase",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
    migrationsTableName: "custom_migration_table",
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });
