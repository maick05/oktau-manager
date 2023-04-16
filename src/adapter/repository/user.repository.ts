import { MongooseRepository } from '@devseeder/nestjs-microservices-commons';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/domain/schema/user.schema';

@Injectable()
export class UserRepository extends MongooseRepository<User, UserDocument> {
  constructor(
    @InjectModel(User.name)
    model: Model<UserDocument>,
  ) {
    super(model);
  }
}
