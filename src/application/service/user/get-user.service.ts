import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/adapter/repository/user.repository';

@Injectable()
export class GetUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async validateUserById(id: number): Promise<void> {
    const anime = await this.userRepository.find({ id });
    if (anime.length === 0) {
      throw new BadRequestException('Esse id de user não existe!');
    }
  }
}
