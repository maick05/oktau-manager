import { Module } from '@nestjs/common';
import { CreateAnimeService } from '../../application/service/app.service';
import { AnimeRepository } from '../repository/anime.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Anime } from 'src/domain/model/anime.model';
import { AnimeSchema } from 'src/domain/schema/anime.schema';
import { AnimeReviewModule } from './anime-review.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Anime.name, schema: AnimeSchema }]),
    AnimeReviewModule,
  ],
  controllers: [],
  providers: [CreateAnimeService, AnimeRepository],
  exports: [CreateAnimeService, AnimeRepository],
})
export class AnimeModule {}
