/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/users/users.model";
import { UsersService } from "src/users/users.service";
import { AuthService } from "../auth.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: UsersService
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.userService.getUserByEmail(payload.email);
    return user ? done(null, user) : done(null, null);
  }
}
