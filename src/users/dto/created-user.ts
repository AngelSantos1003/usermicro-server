import { IsString, IsNotEmpty, IsEmail} from 'class-validator';

export class CrearUser {

    @IsString()
    @IsNotEmpty()
    Name: string;

    @IsEmail()
    @IsNotEmpty()
    Email: string;

}