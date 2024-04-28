import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeButtonIndex: number = 0; // Initialize with the index of the default active button

  onTabClick(index: number) {
    this.activeButtonIndex = index;
    // Add any other logic you need when a button is clicked
  }
}
