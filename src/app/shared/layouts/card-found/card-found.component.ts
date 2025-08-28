import {Component, Input, OnInit} from '@angular/core';
import {Found} from '@app/shared/interfaces/found.interfaces';
import {DecimalPipe} from '@angular/common';
import {SubscribeComponent} from '@app/shared/layouts/subscribe/subscribe.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-card-found',
  imports: [
    DecimalPipe
  ],
  templateUrl: './card-found.component.html',
  standalone: true,
  styleUrl: './card-found.component.scss'
})
export class CardFoundComponent implements OnInit {

  @Input() found!: Found;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log(this.found);
  }

  subscription(found: Found): void {
    console.log(found)
    this.dialog.open(SubscribeComponent, {
      width: '580px',
      data: this.found.id
    })
  }

}
