import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AlertService} from '@app/core/services/alert/alert.service';
import {RouterOutlet} from '@angular/router';
import {MainComponent} from '@app/modules/main/main.component';
import {LoadingComponent} from '@app/shared/layouts/loading/loading.component';
import {BehaviorSubject} from 'rxjs';
import {LoadingService} from '@app/core/services/loading/loading.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MainComponent, LoadingComponent, AsyncPipe],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App implements OnInit , AfterViewChecked {
  loading: BehaviorSubject<boolean>;

  constructor(
    private _loader: LoadingService,
    private cdr: ChangeDetectorRef,
  ) {
    this.loading = this._loader.loading$;
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {

  }

}
