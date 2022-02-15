import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  names: string[] = [];

  getHello(name: string): string {
    this.names.push(name);
    return 'Hello, ' + name;
  }

  getNames(): string[] {
    return this.names;
  }

  deleteNames() {
    this.names = [];
  }
}
