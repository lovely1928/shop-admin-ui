import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/UI/header/header.component';
import { SidebarComponent } from './components/UI/sidebar/sidebar.component';
import { OrderComponent } from './features/order/order.component';
import { UserComponent } from './features/user/user.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    HeaderComponent,
    SidebarComponent,
    OrderComponent,
    UserComponent,
    DashboardComponent,
    MaterialModule,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myapp';
  name = 'lovaly';
  public blah: string | undefined;
}
