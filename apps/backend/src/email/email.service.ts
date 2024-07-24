import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { getVerificationEmailTemplate } from '../utils/email-templates/verification';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: NestMailerService) {}

  async sendVerificationEmail(
    email: string,
    verificationCode: string
  ): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Verify your email address',
      html: getVerificationEmailTemplate(verificationCode),
    });
  }

  async sendEmail(to: string, subject: string, code: any) {
    await this.mailerService.sendMail({
      to,
      subject,
      html: getVerificationEmailTemplate(code),
    });
  }
}
