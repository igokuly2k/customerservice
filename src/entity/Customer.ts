import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('Customer')
export class Customer {
    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column({
        length: 50
    })
    name: string;

    @Column("integer")
    age: number;

    @Column("integer")
    location_id: number;
}