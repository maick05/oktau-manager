import { Injectable } from '@nestjs/common';
import { AnimeReviewRepository } from 'src/adapter/repository/anime-review.repository';
import { AnimeRepository } from 'src/adapter/repository/anime.repository';
import { Anime } from 'src/domain/model/anime.model';
import { AnimeReview } from 'src/domain/schema/anime-reviews.schema';

@Injectable()
export class CreateAnimeService {
  constructor(
    private readonly animeRepository: AnimeRepository,
    private readonly animeReviewRepository: AnimeReviewRepository,
  ) {}

  async createAnime(anime: Anime): Promise<void> {
    await this.animeRepository.insert(anime);
  }

  async createAnimeReview(anime: AnimeReview): Promise<void> {
    await this.animeReviewRepository.insert(anime);
  }
}
