import { MongooseRepository } from '@devseeder/nestjs-microservices-commons';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Anime } from 'src/domain/model/anime.model';
import { AnimeDocument } from 'src/domain/schema/anime.schema';

@Injectable()
export class AnimeRepository extends MongooseRepository<Anime, AnimeDocument> {
  constructor(
    @InjectModel(Anime.name)
    model: Model<AnimeDocument>,
  ) {
    super(model);
  }

  async insert(anime: Anime): Promise<void> {
    this.logger.log(`Criando anime "${anime.nome}"...`);
    await this.model.create(anime);
    this.logger.log(`Anime criado com sucesso!`);
  }
}
