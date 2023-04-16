import { MongooseRepository } from '@devseeder/nestjs-microservices-commons';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AnimeReview,
  AnimeReviewDocument,
} from 'src/domain/schema/anime-reviews.schema';

@Injectable()
export class AnimeReviewRepository extends MongooseRepository<
  AnimeReview,
  AnimeReviewDocument
> {
  constructor(
    @InjectModel(AnimeReview.name)
    model: Model<AnimeReviewDocument>,
  ) {
    super(model);
  }

  async insert(animeReview: AnimeReview): Promise<void> {
    this.logger.log(`Criando AnimeReview "${animeReview.codAnime}"...`);
    await this.model.create(animeReview);
    this.logger.log(`AnimeReview criado com sucesso!`);
  }
}
