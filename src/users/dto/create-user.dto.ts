import { IsEmail, IsString, IsUUID, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsUUID()
    id: string;

    @IsEmail()
    @MinLength(3)
    @MaxLength(100)
    email: string;

    @IsString()
    username: string;
    
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{
        message: 'password too weak',
    })
    password: string;
}
