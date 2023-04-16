import { Injectable } from '@nestjs/common';
import { AnimeRepository } from 'src/adapter/repository/anime.repository';
import { Anime } from 'src/domain/model/anime.model';

@Injectable()
export class CreateAnimeService {
  constructor(private readonly animeRepository: AnimeRepository) {}

  async createAnime(anime: Anime): Promise<void> {
    await this.animeRepository.insert(anime);
  }
}
