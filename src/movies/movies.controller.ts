import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // URL의 entry point를 컨트롤
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    // @Get("search")
    // search(@Query("year") searchingYear: string) {
    //     return `We are searching for a movie made after: ${searchingYear}`;
    // }

    @Get('/:id')
    getOne(@Param('id') movieId: string): Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        // console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return this.moviesService.deleteOne(movieId);
    }

    // UPDATE
    // put -> 전체 업데이트
    // patch -> 일부 업데이트
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updateMovie: movieId,
            ...updateData,
        }
    }


}
