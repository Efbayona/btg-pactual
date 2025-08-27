import {Component, OnInit} from '@angular/core';
import {AlertService} from '@app/core/services/alert/alert.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

 constructor(private _alert: AlertService) {
 }

  ngOnInit() {
    this._alert.warning('Error');
  }
}
