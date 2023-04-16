/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true, collection: 'Users' })
export class User {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  active: boolean;
}

const schema = SchemaFactory.createForClass(User);

schema.index({ id: 1 }, { unique: true });

export const UserSchema = schema;
