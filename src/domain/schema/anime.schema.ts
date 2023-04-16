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

@Schema({ timestamps: true, collection: 'animes' })
export class Anime {
  @Prop({ required: true })
  idUsuario: number;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: false })
  descricao?: string;

  @Prop({ required: true })
  status: Status;

  @Prop({ required: true })
  finalizado: boolean;

  @Prop({ required: true })
  dataInicio: Date;

  @Prop({ required: false })
  dataUltimaVisualizacao?: Date;

  @Prop({ required: true })
  categorias: Categoria[];

  @Prop({ required: false, type: Object })
  avaliacao?: Avaliacao;

  @Prop({ required: false, type: Object })
  ultimoEpisodio?: UltimoEpisodio;
}

const schema = SchemaFactory.createForClass(Anime);

schema.index({ name: 1 }, { unique: true });

export const AnimeSchema = schema;
