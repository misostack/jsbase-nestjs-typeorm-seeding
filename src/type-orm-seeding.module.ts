import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmSeedingService } from './type-orm-seeding.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TypeOrmSeedingService],
})
export class TypeOrmSeedingModule {
  static forRoot(): DynamicModule {
    return {
      module: TypeOrmSeedingModule,
      providers: [TypeOrmSeedingService],
      exports: [TypeOrmSeedingService],
    };
  }
}
