import {animate, style, transition, trigger} from '@angular/animations';

export function routerTransition() {
  return trigger('routerTransition', [

    // route 'enter' transition
    transition('* <=> *', [

      // css styles at start of transition
      style({opacity: 0}),

      // animation and styles at end of transition
      animate('.6s', style({opacity: 1}))
    ]),
  ]);
}
