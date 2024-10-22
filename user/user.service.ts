import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async authenticate(username: string, password: string): Promise<User> {
    return this.userRepository.findOneBy({ username, password });
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
