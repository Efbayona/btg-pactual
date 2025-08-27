import {Component, OnInit} from '@angular/core';
import {AlertService} from '@app/core/services/alert/alert.service';
import {RouterOutlet} from '@angular/router';
import {MainComponent} from '@app/modules/main/main.component';

@Component({
  selector: 'app-root',
  imports: [MainComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App implements OnInit {

 constructor(private _alert: AlertService) {
 }

  ngOnInit() {
    this._alert.warning('Error');
  }
}
