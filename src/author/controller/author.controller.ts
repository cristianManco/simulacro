import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { AuthorService } from '../service/author.service';
import { CreateAuthorDto } from '../dtos/createAuthor.dto';
import { UpdateAuthorDto } from '../dtos/updateAuthor.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('authors')
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create an author' })
  @ApiResponse({ status: 201, description: 'The author has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all authors' })
  @ApiResponse({ status: 200, description: 'Return all authors.' })
  @ApiResponse({ status: 404, description: 'No authors found.' })
  async findAll() {
    const authors = await this.authorService.findAll();
    if (authors.length === 0) {
      throw new NotFoundException('No authors found');
    }
    return authors;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get an author by ID' })
  @ApiResponse({ status: 200, description: 'Return the author.' })
  @ApiResponse({ status: 404, description: 'Author not found.' })
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(+id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update an author' })
  @ApiResponse({ status: 200, description: 'The author has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Author not found.' })
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(+id, updateAuthorDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete an author' })
  @ApiResponse({ status: 204, description: 'The author has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Author not found.' })
  remove(@Param('id') id: string) {
    return this.authorService.remove(+id);
  }
}
