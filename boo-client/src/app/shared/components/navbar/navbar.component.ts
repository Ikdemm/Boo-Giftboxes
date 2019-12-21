import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private _authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this._authService.isLoggedIn;
    this.isLoggedIn$.subscribe(data=>{console.log(data)})
  }
  onLogout(){
    console.log("monta")
    this._authService.logout();     
    this.router.navigate(['/login']);                
  }

}
