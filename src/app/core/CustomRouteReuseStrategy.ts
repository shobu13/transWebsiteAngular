import {DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';

export class CustomRouteReuseStrategy extends RouteReuseStrategy {
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return undefined;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    let name = future.component && (<any> future.component).name;
    return false;
  }
}
