import { Component } from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {FormControlComponent} from "../form-control/form-control.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        LogoComponent,
        FormControlComponent
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
