import { Injectable } from '@nestjs/common';
import { AnimeReviewRepository } from 'src/adapter/repository/anime-review.repository';
import { AnimeRepository } from 'src/adapter/repository/anime.repository';
import { Anime } from 'src/domain/model/anime.model';
import { AnimeReview } from 'src/domain/schema/anime-reviews.schema';
import { GetAnimeService } from './get-anime.service';

@Injectable()
export class CreateAnimeService {
  constructor(
    private readonly animeRepository: AnimeRepository,
    private readonly animeReviewRepository: AnimeReviewRepository,
    private readonly validateService: GetAnimeService,
  ) {}

  async createAnime(anime: Anime): Promise<void> {
    await this.validateService.validateAnimeByCode(anime.code);
    await this.validateService.validateAnimeByName(anime.nome);
    await this.animeRepository.insert(anime);
  }

  async createAnimeReview(anime: AnimeReview): Promise<void> {
    await this.animeReviewRepository.insert(anime);
  }
}
