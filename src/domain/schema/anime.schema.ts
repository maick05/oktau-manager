/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Avaliacao,
  Categoria,
  Status,
  UltimoEpisodio,
} from '../model/anime.model';

export type AnimeDocument = Anime & Document;

@Schema({ timestamps: true, collection: 'features' })
export class Anime {
  @Prop({ required: false })
  nome: string;

  @Prop({ required: false })
  descricao?: string;

  @Prop({ required: false })
  status: Status;

  @Prop({ required: false })
  finalizado: boolean;

  @Prop({ required: false })
  dataInicio: Date;

  @Prop({ required: false })
  dataUltimaVisualizacao?: Date;

  @Prop({ required: false })
  categorias: Categoria[];

  @Prop({ required: false })
  avaliacao?: Avaliacao;

  @Prop({ required: false })
  ultimoEpisodio?: UltimoEpisodio;
}

const schema = SchemaFactory.createForClass(Anime);

schema.index({ name: 1 }, { unique: true });

export const AnimeSchema = schema;
