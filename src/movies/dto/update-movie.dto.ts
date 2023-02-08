import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNumber } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) {

    // PartialType -> 형식은 같은데, 필수사항은 아님

    // @IsString()
    // readonly title?: string;

    // @IsNumber()
    // readonly year?: number;

    // @IsString({ each: true })
    // readonly genres?: string[];
}