import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
//   animations:[
//     trigger('openClose', [
//       // ...
//       state(
//         'open',
//         style({
//           height: '200px',
//           opacity: 1,
//           backgroundColor: 'yellow',
//         }),
//       ),
//       state(
//         'closed',
//         style({
//           height: '100px',
//           opacity: 0.8,
//           backgroundColor: 'blue',
//         }),
//       ),
//       transition('open => closed', [animate('1s')]),
//       transition('closed => open', [animate('0.5s')]),
// ...
//     ]),
})
export class SidebarComponent {
  @Input('isOpen')
  public isCollapsed: boolean = true;
  public sideBarClass = this.isCollapsed
    ? 'path-item-closed'
    : 'path-item-open';
  // ngOnInit() {
  //   console.log({ propfromparent: this.isCollapsed });
  // }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isCollapsed']) {
      this.sideBarClass = this.isCollapsed
        ? 'path-item-closed'
        : 'path-item-open';
    }
  }
}
