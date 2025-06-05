import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExamplemiddlewareMiddleware } from './middlewares/examplemiddleware/examplemiddleware.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(ExamplemiddlewareMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.GET
      },
         {
        path: 'users/create',
        method: RequestMethod.POST
      }
    )
  }
}
