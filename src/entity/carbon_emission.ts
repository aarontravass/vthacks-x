import { AutoIncrement, Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

@Table
export class carbon_emission extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    title: string;

    @CreatedAt
    created_at: Date;

    @UpdatedAt
    updated_at: Date;
}