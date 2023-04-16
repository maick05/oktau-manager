import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/domain/schema/user.schema';
import { UserRepository } from '../repository/user.repository';
import { GetUserService } from 'src/application/service/user/get-user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [GetUserService, UserRepository],
  exports: [UserRepository, GetUserService],
})
export class UserModule {}
