import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'impulse',
      password: 'chernoisevule',
      database: 'impulse',
      autoLoadEntities: true, 
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
