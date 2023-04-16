/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Avaliacao, Status, UltimoEpisodio } from '../model/anime-review.model';

export type AnimeReviewDocument = AnimeReview & Document;

@Schema({ timestamps: true, collection: 'animesReviews' })
export class AnimeReview {
  @Prop({ required: true })
  idUsuario: number;

  @Prop({ required: true })
  status: Status;

  @Prop({ required: true })
  codAnime: string;

  @Prop({ required: true })
  dataInicio: Date;

  @Prop({ required: false })
  dataUltimaVisualizacao?: Date;

  @Prop({ required: false, type: Object })
  avaliacao?: Avaliacao;

  @Prop({ required: false, type: Object })
  ultimoEpisodio?: UltimoEpisodio;
}

const schema = SchemaFactory.createForClass(AnimeReview);

schema.index({ idUsuario: 1, codAnime: 1 }, { unique: true });

export const AnimeReviewSchema = schema;
