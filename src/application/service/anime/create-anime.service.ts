import { Injectable } from '@nestjs/common';
import { AnimeReviewRepository } from 'src/adapter/repository/anime-review.repository';
import { AnimeRepository } from 'src/adapter/repository/anime.repository';
import { Anime } from 'src/domain/model/anime.model';
import { AnimeReview } from 'src/domain/schema/anime-reviews.schema';
import { GetAnimeService } from './get-anime.service';
import { GetUserService } from '../user/get-user.service';

@Injectable()
export class CreateAnimeService {
  constructor(
    private readonly animeRepository: AnimeRepository,
    private readonly validateUserService: GetUserService,
    private readonly animeReviewRepository: AnimeReviewRepository,
    private readonly validateService: GetAnimeService,
  ) {}

  async createAnime(anime: Anime): Promise<void> {
    await this.validateService.validateAnimeByCodeIfAlreadyExists(anime.code);
    await this.validateService.validateAnimeByNameIfAlreadyExists(anime.nome);
    await this.animeRepository.insert(anime);
  }

  async createAnimeReview(anime: AnimeReview): Promise<void> {
    await this.validateService.validateAnimeByCode(anime.codAnime);
    await this.validateUserService.validateUserById(anime.idUsuario);
    await this.animeReviewRepository.insert(anime);
  }
}
