import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmSeedingService {
  version(): string {
    return 'JSBase TypeOrm Seeding version 1.0.0';
  }
}
