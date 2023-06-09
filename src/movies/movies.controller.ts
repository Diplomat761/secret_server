import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { Roles } from "src/auth/utils/roles-auth.decorator";
import { RolesGuard } from "src/auth/utils/guards/roles.guard";
import { createMovieDto } from "./dto/create-movie.dto";
import { updateMovieDto } from "./dto/update-movie.dto";
import { MoviesService } from "./movies.service";

interface IFilter {
  genre: number;
  country: number;
  years: string;
  rating: number;
  sort: string;
  minRatingCount: number;
  maxRatingCount: number;
  page: number;
  directorName: string;
  actorName: string;
}

@Controller("movies")
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Put("/update/:id")
  update(@Param("id") id: number, @Body() dto: updateMovieDto) {
    return this.movieService.update(id, dto);
  }

  @Get("/actor/:id")
  getMovieByActor(@Param("id") id: number) {
    return this.movieService.getMovieByActor(id);
  }

  @Get("/director/:id")
  getMovieByDirector(@Param("id") id: number) {
    return this.movieService.getMovieByDirector(id);
  }

  @Get("/film/:id")
  getById(@Param("id") id: number) {
    return this.movieService.getMoviesById(id);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  createMovie(@Body() movieDataList: any[]) {
    return this.movieService.createMovie(movieDataList);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("/movpers")
  createMoviePerson(@Body() moviePersonDataList: any[]) {
    return this.movieService.createMoviePerson(moviePersonDataList);
  }

  // ДИНАМИЧЕСКИЙ ПОИСК --------------------------
  @Get()
  async searchMovies(
    @Query()
    {
      genre,
      country,
      years,
      rating,
      sort,
      minRatingCount,
      maxRatingCount,
      page,
      directorName,
      actorName,
    }: IFilter
  ) {
    const genreIds = genre ? genre.toString().split(",").map(Number) : [];
    const countryIds = country ? country.toString().split(",").map(Number) : [];

    return this.movieService.searchMovies(
      genreIds,
      countryIds,
      years,
      rating,
      sort,
      minRatingCount,
      maxRatingCount,
      page,
      directorName,
      actorName
    );
  }

  // БАНЕР ---------------------------------------
  @Get("/promo")
  getСarousel() {
    return this.movieService.getPromoMovie();
  }
  // ЛУЧШЕЕ --------------------------------------
  @Get("/weeklyTop")
  getRec() {
    return this.movieService.getRecMovie();
  }

  @Get("/collection/favorite")
  getFavorite() {
    return this.movieService.getFavoriteMovie();
  }
}
