import { Column, Table, Model } from 'sequelize-typescript';

@Table({
    tableName: 'users',
})
export class User extends Model {
    @Column
    forename: string;

    @Column
    surname: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    role: 'User' | 'Admin';
}