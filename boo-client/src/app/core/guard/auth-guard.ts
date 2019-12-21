import { Injectable } from "@angular/core";
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      this.authService.isLoggedIn
        if (localStorage.getItem("token")) {
         /*   const role =this.authService.decode().role[0];
            const allowedRole = route.data.role;
            if(role == allowedRole)
          */    return true
           /* else{
              if (role == "ROLE_PARTNER" && allowedRole == "ROLE_PARTNER")
              
            }*/
            /*console.log("role "+role);
            console.log("allowed Rolewed "+route.data.role)
            return true;*/
        }
        this.router.navigate(["/login"], {
            queryParams: { returnUrl: state.url }
        });
        return false;
        /* console.log(localStorage.getItem('currentUser'))
    console.log(route.data.role) 
   // console.log(localStorage.getItem('role'))
      if (localStorage.getItem('currentUser')) {
          // logged in so return true
          if(localStorage.getItem('role') == 'ADMIN'){
            return true;
          }
          else{
            if(route.data.role=='ADMIN'){
              this.router.navigate(['/admin/'], { queryParams: { returnUrl: state.url }});
              return false;
            }
            return true
          }
          
          
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
      return false;*/
    }
}
