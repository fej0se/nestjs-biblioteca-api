import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  codigo: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  preco: number;
}
