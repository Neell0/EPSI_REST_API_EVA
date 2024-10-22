import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginData: { username: string; password: string }) {
    const user = await this.userService.authenticate(loginData.username, loginData.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return { message: 'Login successful', user };
  }

  @Post('register')
  async register(@Body() userData: User) {
    const user = await this.userService.create(userData);
    return { message: 'User registered', user };
  }
}
