import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  private codigo: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  private nome: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  private preco: number;
}
