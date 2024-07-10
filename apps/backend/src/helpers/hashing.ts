import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';

export async function hashPassword(text: string) {
  try {
    const hash = await argon2.hash(text);
    return hash;
  } catch (err) {
    throw new BadRequestException('Could not hash password');
  }
}

export async function comparePasswords(hash: string, password: string) {
  try {
    if (await argon2.verify(hash, password)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}
