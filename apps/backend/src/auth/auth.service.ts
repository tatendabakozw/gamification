import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUser = [
  { id: 1, username: 'tatendaZw', password: 'password' },
  { id: 1, username: 'tatendaZw1', password: 'password123' },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  valdateUser({ username, password }: AuthPayloadDto) {
    const userExists = fakeUser.find((user) => user.username === username); // replace with database query
    if (userExists) return null;
    if (password === userExists.password) {
      // do login auth
      const { password, ...user } = userExists;
      return this.jwtService.sign(user);
    }
  }
}
