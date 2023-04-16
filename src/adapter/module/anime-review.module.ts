import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeReviewRepository } from '../repository/anime-review.repository';
import {
  AnimeReview,
  AnimeReviewSchema,
} from 'src/domain/schema/anime-reviews.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AnimeReview.name, schema: AnimeReviewSchema },
    ]),
  ],
  controllers: [],
  providers: [AnimeReviewRepository],
  exports: [AnimeReviewRepository],
})
export class AnimeReviewModule {}
