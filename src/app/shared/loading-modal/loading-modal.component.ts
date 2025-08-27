import { Component } from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-loading-modal',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './loading-modal.component.html',
  styleUrl: './loading-modal.component.scss'
})
export class LoadingModalComponent {

}
