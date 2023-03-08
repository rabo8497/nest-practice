import { IsString, Matches, MaxLength, maxLength, MinLength } from "class-validator";
import { LikePlay } from "../auth-status.enum";

export class AuthCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username : string;
    
    @IsString()
    @MinLength(4)
    @MaxLength(20)

    @Matches(/^[a-zA-Z0-9]*$/, {
        message: 'password only accepts english and number'
    })
    password: string;

    play1: LikePlay;
    play2: LikePlay;
}