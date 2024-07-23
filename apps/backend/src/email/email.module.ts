import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('EMAIL_HOST'),
          port: config.get('EMAIL_PORT'),
          auth: {
            user: config.get('EMAIL_USERNAME'),
            pass: config.get('EMAIL_PASSWORD'),
          },
        },
        defaults: {
          from: '"No Reply" <tatendabakozw@gmail.com>',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [EmailService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
