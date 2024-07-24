import { Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { generateVerificationCode } from '../helpers/generateVerificationCode';

@Controller('mailer')
export class EmailController {
  constructor(private readonly mailerService: EmailService) {}

  @Post('send')
  async sendEmail() {
    try {
      console.log('Attempting to sent email...');
      await this.mailerService.sendEmail(
        'trewmane@gmail.com',
        'Verify Your email',
        generateVerificationCode()
      );
      console.log('email send successfullyy');
      return { message: 'Email sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new HttpException(
        'Failed to send email',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
