import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../user.service';
import { User } from '../interface/user.entity';

@Controller()
export class MessageController {
  constructor(private readonly userService: UserService) {}

  get(): string {
   return 'hello';
  }
}