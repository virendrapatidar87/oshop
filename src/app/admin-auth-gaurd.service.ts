import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurd {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> { 
    return this.auth.appUser$
      .pipe(map(appUser => appUser.isAdmin));
  }
}
