import { Module } from '@nestjs/common';
import { CreateAnimeService } from '../../application/service/anime/create-anime.service';
import { AnimeRepository } from '../repository/anime.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Anime } from 'src/domain/model/anime.model';
import { AnimeSchema } from 'src/domain/schema/anime.schema';
import { AnimeReviewModule } from './anime-review.module';
import { GetAnimeService } from 'src/application/service/anime/get-anime.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Anime.name, schema: AnimeSchema }]),
    AnimeReviewModule,
  ],
  controllers: [],
  providers: [CreateAnimeService, GetAnimeService, AnimeRepository],
  exports: [CreateAnimeService, AnimeRepository, GetAnimeService],
})
export class AnimeModule {}
