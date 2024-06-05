import { Matches, IsString, MinLength } from "class-validator";
export class CreateUserDto {

    @IsString()
    forename: string;

    @IsString()
    surname: string;

    @IsString()
    @Matches(/^[a-z]+[a-z\d.]+@[a-z\d]+[a-z]\.[a-z]+(?:\.([a-z]+))?$/i)
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    role: string;
}
