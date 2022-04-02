import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl!: string;

  router!: Router;

  constructor(router: Router) {
    this.router = router;
  }

  login = (): void => {
    this.isLoggedIn = true;
    this.router.navigate([this.redirectUrl || 'protected']);
  };

  logout = (): void => {
    this.isLoggedIn = false;
  };
}
