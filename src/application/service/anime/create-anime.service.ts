import { BadRequestException, Injectable } from '@nestjs/common';
import { AnimeReviewRepository } from 'src/adapter/repository/anime-review.repository';
import { AnimeRepository } from 'src/adapter/repository/anime.repository';
import { Anime, Categoria } from 'src/domain/model/anime.model';
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
    this.isValidCategory(anime.categorias);
    await this.validateService.validateAnimeByCodeIfAlreadyExists(anime.code);
    await this.validateService.validateAnimeByNameIfAlreadyExists(anime.nome);
    await this.animeRepository.insert(anime);
  }

  async createAnimeReview(anime: AnimeReview): Promise<void> {
    await this.validateService.validateAnimeByCode(anime.codAnime);
    await this.validateUserService.validateUserById(anime.idUsuario);
    await this.animeReviewRepository.insert(anime);
  }

  private isValidCategory(values: Categoria[]): void {
    for (const value of values) {
      const catValue = value.charAt(0).toUpperCase() + value.slice(1);
      if (!Object.values(Categoria).includes(catValue as Categoria)) {
        throw new BadRequestException(`Categoria "${value}" inválida`);
      }
    }
  }
}
