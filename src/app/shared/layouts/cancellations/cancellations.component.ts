import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {CancellationsService} from '@app/shared/services/cancellation-service/cancellations.service';
import {LoadingService} from '@app/core/services/loading/loading.service';
import {AlertService} from '@app/core/services/alert/alert.service';

@Component({
  selector: 'app-cancellations',
  imports: [],
  templateUrl: './cancellations.component.html',
  styleUrl: './cancellations.component.scss'
})
export class CancellationsComponent {

  title: string = 'Cancelación de Fondos de Inversión.';
  subtitle: string = 'Solicita el retiro de tus fondos de manera ágil y segura. Selecciona el fondo a cancelar, indica el monto o la totalidad de tu inversión y recibe la confirmación de la transacción directamente en tu correo electrónico.';

  constructor(private dialogRef: MatDialogRef<CancellationsComponent>,
              private loader: LoadingService,
              private alert: AlertService,
              private cancelService: CancellationsService) { }


  cancelFound() {
    this.loader.show();

    this.cancelService.cancelFound("subscribe").subscribe({
      next: (data) => {
        this.loader.hide();
        this.alert.success('Subscripcion al fondo cancelada correctamente');
      },
      error: (err) => {
        this.loader.hide();
        this.alert.error('Error Cancelando la subscripcion');
      }
    })
  }

  destroyModal(): void {
    this.dialogRef.close();
  }


}
