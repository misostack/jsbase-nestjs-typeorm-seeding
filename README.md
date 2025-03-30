# NestJS TypeORM Seeding

## Usage

```sh
npm i jsbase-nestjs-typeorm-seeding
```

```ts
@Module({
  imports: [TypeOrmSeedingModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Local development

```sh
npm run build
npm link
```
