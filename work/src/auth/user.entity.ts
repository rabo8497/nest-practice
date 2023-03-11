import Sche from "src/schedule/schedule.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    
    @Column()
    select1: string;
    
    @Column()
    select2: string;
    
    @Column()
    select3: string;

    @OneToMany(type => Sche, sche => sche.user, {eager:true})
    sche: Sche[];
}