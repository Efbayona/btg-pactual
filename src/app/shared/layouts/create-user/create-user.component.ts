import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Select} from '@app/core/utils/consts';
import {MatDialogRef} from '@angular/material/dialog';
import {MessageErrorsDirective} from '@app/shared/directives/field-errors/directive/message-errors.directive';
import {UserService} from '@app/shared/services/user-service/user.service';
import {AlertService} from '@app/core/services/alert/alert.service';
import {CreateUserRequest} from '@app/shared/interfaces/user.interfaces';
import {LoadingService} from '@app/core/services/loading/loading.service';
import {StorageService} from '@app/core/services/storage/storage.service';

@Component({
  selector: 'app-create-user',
  imports: [
    FormsModule,
    MessageErrorsDirective,
    ReactiveFormsModule
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit {

  public formCreateUser: FormGroup = new FormGroup({});
  title: string = 'Creación de Usuario';
  subtitle: string = 'Registra tu información personal para acceder a la plataforma y gestionar tus inversiones de forma rápida y segura. Completa los datos obligatorios y recibe confirmación en tu correo electrónico.';

  found: Select[] = [
    {label: 'FPV BTG Pactual Recaudadora', value: 'FPV_BTG_PACTUAL_RECAUDADORA'},
    {label: 'FPV BTG Pactual Ecopetrol', value: 'FPV_BTG_PACTUAL_ECOPETROL'},
    {label: 'Deuda Privada', value: 'DEUDAPRIVADA'},
    {label: 'Fondo de Acciones', value: 'FDO-ACCIONES'},
    {label: 'FPV BTG Pactual Dinámica', value: 'FPV_BTG_PACTUAL_DINAMICA'}
  ];

  constructor(private dialogRef: MatDialogRef<CreateUserComponent>,
              private userService: UserService,
              private loader: LoadingService,
              private alert: AlertService,) {
  }

  ngOnInit() {
    this.initFormCreateUser();
  }

  initFormCreateUser(): void {
    this.formCreateUser = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      documentNumber: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
    });
  }

  createUser() {
    this.loader.show();

    if (this.formCreateUser.invalid) {
      this.formCreateUser.markAllAsTouched();
      this.loader.hide();
      return;
    }

    const user: CreateUserRequest = {
      name: this.formCreateUser.get('name')?.value,
      lastName: this.formCreateUser.get('lastName')?.value,
      email: this.formCreateUser.get('email')?.value,
      document_number: this.formCreateUser.get('documentNumber')?.value,
      phone_number: this.formCreateUser.get('phoneNumber')?.value,
      amount: 500000
    };

    this.userService.createUser(user).subscribe({
      next: (data) => {
        this.loader.hide();
        this.destroyModal();
        this.alert.success('Usuario Creado Correctamente');
      },
      error: (err) => {
        this.loader.hide();
        this.alert.error('Error Creando el Usuario');
      }
    });
  }


  destroyModal(): void {
    this.dialogRef.close();
  }

}
