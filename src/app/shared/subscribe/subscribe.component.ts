import {Component, OnInit} from '@angular/core';
import {LoadingModalComponent} from '@app/shared/loading-modal/loading-modal.component';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgSelectComponent} from '@ng-select/ng-select';
import {MessageErrorsDirective} from '@app/shared/directives/field-errors/directive/message-errors.directive';
import {Select} from '@app/core/utils/consts';

@Component({
  selector: 'app-subscribe',
  imports: [
    LoadingModalComponent,
    ReactiveFormsModule,
    NgSelectComponent,
    MessageErrorsDirective
  ],
  templateUrl: './subscribe.component.html',
  standalone: true,
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent implements OnInit {

  public formRegisterSubscribeFund: FormGroup = new FormGroup({});
  loader: boolean = false;
  title: string = 'Suscripción a Fondos de Inversión.';
  subtitle: string = 'Gestiona la apertura de tus fondos voluntarios y colectivos de manera fácil y rápida. Selecciona el fondo de tu interés, cumple con el monto mínimo requerido y recibe confirmación inmediata por correo electrónico.';

  found: Select[] = [
    {label: 'FPV BTG Pactual Recaudadora', value: 'FPV_BTG_PACTUAL_RECAUDADORA'},
    {label: 'FPV BTG Pactual Ecopetrol', value: 'FPV_BTG_PACTUAL_ECOPETROL'},
    {label: 'Deuda Privada', value: 'DEUDAPRIVADA'},
    {label: 'Fondo de Acciones', value: 'FDO-ACCIONES'},
    {label: 'FPV BTG Pactual Dinámica', value: 'FPV_BTG_PACTUAL_DINAMICA'}
  ];

  constructor(private dialogRef: MatDialogRef<SubscribeComponent>) {
  }

  ngOnInit() {
    this.initFormSubscribeFund();
  }

  initFormSubscribeFund(): void {
    this.formRegisterSubscribeFund = new FormGroup({
      user: new FormControl('', [Validators.required]),
      found: new FormControl(null, [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    });
  }

  subscribeFund() {

  }

  destroyModal(): void {
    this.dialogRef.close();
  }

}
