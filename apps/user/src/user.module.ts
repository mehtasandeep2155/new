import { Module } from '@nestjs/common';
import { ModuleModule } from '../../module/src/module.module';
import { ModuleService } from '../../module/src/module.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../../shared/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { CompanyService } from '../../company/src/company.service';
import { SubcompanyService } from '../../company/src/subcompany/subcompany.service';

@Module({
  imports: [
    ModuleModule,
    PrismaModule,
    AuthModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        service: 'gmail',
        port: 587,
        ignoreTLS: false,
        auth: {
          user: process.env.SENDERMAIL,
          pass: process.env.MAILPASS,
        },
      },
      defaults: {
        from: process.env.SENDERMAIL,
        subject: 'Password Reset',
      },
    }),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ModuleService,
    CompanyService,
    SubcompanyService,
  ],
  exports: [ModuleService],
})
export class UserModule {}
