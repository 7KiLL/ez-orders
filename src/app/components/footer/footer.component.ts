import { Component } from '@angular/core';
import {HomeComponent} from "../icons/home/home.component";
import {SearchComponent} from "../icons/search/search.component";
import {CartComponent} from "../icons/cart/cart.component";
import {ProfileComponent} from "../icons/profile/profile.component";
import {ShopComponent} from "../icons/shop/shop.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    HomeComponent,
    SearchComponent,
    CartComponent,
    ProfileComponent,
    ShopComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
