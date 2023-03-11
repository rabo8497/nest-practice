import User from "src/auth/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Sche extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeBoxName: string;

    @Column()
    userName: string;

    @ManyToOne(type => User, user => user.sche, {eager:false})
    user: User;
}