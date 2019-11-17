import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";
import { AuthenticationService } from "app/core/_services/authentication.service";
import { first } from "rxjs/operators";
import {
    LayoutUtilsService,
    MessageType
} from "app/core/_utils/layout-utils.service";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { navigation } from "app/navigation/navigation";
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;
    navigation: any;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private _fuseNavigationService: FuseNavigationService,
        private authenticationService: AuthenticationService,
        private layoutUtilsService: LayoutUtilsService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    }
    onFormSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        console.log(this.loginForm.get("email").value);
        console.log(this.loginForm.get("password").value);
        this.authenticationService
            .login(
                this.loginForm.get("email").value,
                this.loginForm.get("password").value
            )
            .pipe(first())
            .subscribe(
                data => {
                    this.navigation = navigation;
                    // UnRegister the ùain navigation

                    this._fuseNavigationService.unregister("main");

                    console.log(this.authenticationService.decode());
                    if (
                        this.authenticationService.decode().role[0] ==
                        "ROLE_ADMIN"
                    ) {
                        // Register the navigation to the service
                        this._fuseNavigationService.register("main", [
                            this.navigation[0]
                        ]);
                        // Set the main navigation as our current navigation
                        this._fuseNavigationService.setCurrentNavigation(
                            "main"
                        );
                        this.router.navigate(["admin"]);
                    } else {
                        if (
                            this.authenticationService.decode().role[0] ==
                            "ROLE_PARTNER"
                        ) {
                            this._fuseNavigationService.register("main", [
                                this.navigation[1]
                            ]);
                            this._fuseNavigationService.setCurrentNavigation(
                                "main"
                            );

                            this.router.navigate(["partner"]);
                        } else {
                            this.layoutUtilsService.showActionNotification(
                                "CHECK EMAIL AND PASSWORD",
                                MessageType.Error
                            );
                        }
                    }
                },
                error => {
                    console.log(error);
                    this.layoutUtilsService.showActionNotification(
                        error.error.message,
                        MessageType.Delete
                    );
                }
            );
        // this.router.navigate(["apps/chaincode-manipulation"])
    }
}
