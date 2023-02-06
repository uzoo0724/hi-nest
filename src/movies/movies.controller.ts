import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies') // URL의 entry point를 컨트롤
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    // UPDATE
    // put -> 전체 업데이트
    // patch -> 일부 업데이트
    @Patch('/:id')
    patch(@Param('id') movieId: string) {
        return `This will patch a movie with the id: ${movieId}`
    }
}
