import {Injectable} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';
import {Observable} from 'rxjs';
import { StorageService } from '../_services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private storageService: StorageService
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
            console.log("Inside AuthGuard canActivate [isLoggedIn] = ", this.storageService.isLoggedIn());

            if(this.storageService.isLoggedIn()) {
                return this.getProfile();
                

                if(this.router.url === "/home") {
                    this.router.navigate(['/home']);
                } else if(this.router.url === "/org-list") {
                    this.router.navigate(['/org-list']);
                } else {
                    this.router.navigate(['/home']);
                }
            }
            // return 
            this.router.navigate(['/login']);
            return false;  
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
            console.log("Inside AuthGuard canActivateChild  [isLoggedIn] = ", this.storageService.isLoggedIn());
        return this.canActivate(next, state);
    }

    async getProfile() {
        if (this.storageService.isLoggedIn()) {
            return this.storageService.getUser();
        }

        try {
            await this.storageService.getUser();
            return true;
        } catch (error) {
            return false;
        }
    }
}
