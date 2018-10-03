import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { CanActivate,  RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router) { }
 canActivate(route,state:RouterStateSnapshot){

    return this.auth.user$.pipe(map(user=>{
if(user){console.log(user);return true;} 
console.log('/login');
this.router.navigate(['/login'],{ queryParams:{ returnUrl:state.url }});
console.log('after/login');
return false;
}));
  }
}
