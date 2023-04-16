/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Categoria } from '../model/anime.model';

export type AnimeDocument = Anime & Document;

@Schema({ timestamps: true, collection: 'animes' })
export class Anime {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: false })
  descricao?: string;

  @Prop({ required: true })
  finalizado: boolean;

  @Prop({ required: true })
  categorias: Categoria[];
}

const schema = SchemaFactory.createForClass(Anime);

schema.index({ name: 1 }, { unique: true });
schema.index({ code: 1 }, { unique: true });

export const AnimeSchema = schema;
