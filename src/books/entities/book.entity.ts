import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Author } from '../../author/entities/author.entity';
import { Sale } from '../../sales/entities/sale.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ type: 'date' })
  fecha_publicacion: Date;

  @Column({ type: 'decimal' })
  precio: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @ManyToMany(() => Author, (author) => author.books)
  autores: Author[];

  @OneToMany(() => Sale, (sale) => sale.libro)
  ventas: Sale[];
}
