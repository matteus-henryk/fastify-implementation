import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./dtos/IUser";
import { Exclude } from "class-transformer";

@Entity()
class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  username: string;

  @Column("varchar")
  address: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @CreateDateColumn()
  @Exclude()
  updated_at: Date;

}

export { User };