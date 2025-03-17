import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get('check')
  healthCheck() {
    return { status: 'API está ativa' };
  }
}