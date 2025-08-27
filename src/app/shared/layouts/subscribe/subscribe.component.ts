import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MessageErrorsDirective} from '@app/shared/directives/field-errors/directive/message-errors.directive';
import {Select} from '@app/core/utils/consts';
import {Found, SubscribeFundRequest} from '@app/shared/interfaces/found.interfaces';
import {LoadingService} from '@app/core/services/loading/loading.service';
import {AlertService} from '@app/core/services/alert/alert.service';
import {SubscribeService} from '@app/shared/services/subscription-service/subscribe.service';

@Component({
  selector: 'app-subscribe',
  imports: [
    ReactiveFormsModule,
    MessageErrorsDirective
  ],
  templateUrl: './subscribe.component.html',
  standalone: true,
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit {

  public formRegisterSubscribeFund: FormGroup = new FormGroup({});
  title: string = 'Suscripción a Fondos de Inversión.';
  subtitle: string = 'Gestiona la apertura de tus fondos voluntarios y colectivos de manera fácil y rápida. Selecciona el fondo de tu interés, cumple con el monto mínimo requerido y recibe confirmación inmediata por correo electrónico.';

  found: Select[] = [
    {label: 'FPV BTG Pactual Recaudadora', value: 'FPV_BTG_PACTUAL_RECAUDADORA'},
    {label: 'FPV BTG Pactual Ecopetrol', value: 'FPV_BTG_PACTUAL_ECOPETROL'},
    {label: 'Deuda Privada', value: 'DEUDAPRIVADA'},
    {label: 'Fondo de Acciones', value: 'FDO-ACCIONES'},
    {label: 'FPV BTG Pactual Dinámica', value: 'FPV_BTG_PACTUAL_DINAMICA'}
  ];

  constructor(private loader: LoadingService,
              private alert: AlertService,
              private subscribeService: SubscribeService,
              private dialogRef: MatDialogRef<SubscribeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Found ) {
  }

  ngOnInit() {
    this.initFormSubscribeFund();
  }

  initFormSubscribeFund(): void {
    this.formRegisterSubscribeFund = new FormGroup({
      user: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    });
  }

  subscribeFund() {
      this.loader.show();

      if (this.formRegisterSubscribeFund.invalid) {
        this.formRegisterSubscribeFund.markAllAsTouched();
        return;
      }

      const subscribe: SubscribeFundRequest = {
        user: this.formRegisterSubscribeFund.get('user')?.value,
        found: this.data.id,
        amount: this.formRegisterSubscribeFund.get('amount')?.value,
      };

    console.log(subscribe)
      this.subscribeService.subscribeFound(subscribe).subscribe({
        next: (data) => {
          this.loader.hide();
          this.alert.success('Usuario Creado Correctamente');
        },
        error: (err) => {
          this.loader.hide();
          this.alert.error('Error Creando el Usuario');
        }
      })
    }

  destroyModal(): void {
    this.dialogRef.close();
  }

}
