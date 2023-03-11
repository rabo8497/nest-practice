import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LikePlay } from "./auth-status.enum";

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    play1: LikePlay;

    @Column()
    play2: LikePlay;
    
}