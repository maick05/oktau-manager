import { Body, Controller, Post } from '@nestjs/common';
import { CreateAnimeService } from '../../application/service/app.service';
import { Anime } from 'src/domain/model/anime.model';
import { AnimeReview } from 'src/domain/schema/anime-reviews.schema';

@Controller()
export class AppController {
  constructor(private readonly createAnimeService: CreateAnimeService) {}

  @Post('/anime')
  async createAnime(@Body() anime: Anime): Promise<void> {
    await this.createAnimeService.createAnime(anime);
  }

  @Post('/anime/review')
  async createAnimeReview(@Body() anime: AnimeReview): Promise<void> {
    await this.createAnimeService.createAnimeReview(anime);
  }
}
