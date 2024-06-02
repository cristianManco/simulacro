import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SaleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const currentHour = new Date().getHours();
    if (currentHour >= 18 || currentHour < 6) {
      throw new ForbiddenException('Sales cannot be processed between 6pm and 6am');
    }
    return true;
  }
}
