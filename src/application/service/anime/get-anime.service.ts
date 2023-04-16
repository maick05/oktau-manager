import { BadRequestException, Injectable } from '@nestjs/common';
import { AnimeReviewRepository } from 'src/adapter/repository/anime-review.repository';
import { AnimeRepository } from 'src/adapter/repository/anime.repository';

@Injectable()
export class GetAnimeService {
  constructor(
    private readonly animeRepository: AnimeRepository,
    private readonly animeReviewRepository: AnimeReviewRepository,
  ) {}

  async validateAnimeByCodeIfAlreadyExists(code: string): Promise<void> {
    const anime = await this.animeRepository.find({ code });
    if (anime.length > 0) {
      throw new BadRequestException('Esse código de anime já existe!');
    }
  }

  async validateAnimeByCode(code: string): Promise<void> {
    const anime = await this.animeRepository.find({ code });
    if (anime.length === 0) {
      throw new BadRequestException('Esse código de anime não existe!');
    }
  }

  async validateAnimeByNameIfAlreadyExists(name: string): Promise<void> {
    const anime = await this.animeRepository.find({
      $or: [{ name }, { alias: name }],
    });
    if (anime.length > 0) {
      throw new BadRequestException('Esse nome de anime já existe!');
    }
  }
}
