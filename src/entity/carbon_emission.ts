import { AutoIncrement, Column, CreatedAt, DataType, UpdatedAt } from "sequelize-typescript";

export class carbon_emission{
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id: number;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}