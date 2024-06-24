import { Inject, Injectable, Scope } from '@nestjs/common';
import { Request } from 'express';
import { REQUEST } from '../../../../packages/core';

@Injectable({ scope: Scope.REQUEST, durable: false })
export class HelloService {
  worldType: string;
  constructor(
    @Inject(REQUEST) private readonly req: Request,
    @Inject('META') private readonly meta,
  ) {
    this.worldType = req.headers['x-my-world-type'] as string;
  }

  greeting(): string {
    return `Hello world!`;
  }

  getWorldType(): string {
    return this.worldType;
  }
}
