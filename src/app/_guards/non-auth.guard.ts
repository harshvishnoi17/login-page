import {Injectable} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    Route,
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
export class NonAuthGuard implements CanActivate, CanActivateChild {
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
            console.log("Inside NonAuthGuard [isLoggedIn] ", this.storageService.isLoggedIn());
        if (!this.storageService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
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

            console.log("Inside NonAuthGuard  [isLoggedIn]", this.storageService.isLoggedIn());
        return this.canActivate(next, state);
    }
}
