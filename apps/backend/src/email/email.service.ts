import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: NestMailerService) {}

  async sendEmail(to: string, subject: string, text: string) {
    await this.mailerService.sendMail({
      to,
      subject,
      text,
    });
  }
}
