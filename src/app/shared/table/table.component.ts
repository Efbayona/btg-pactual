import {Component, inject, Input} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { CurrencyPipe, NgClass, NgForOf } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {SubscribeComponent} from '@app/shared/subscribe/subscribe.component';
import {MatDialog} from '@angular/material/dialog';

export interface Fondo {
  id: string;
  nombre: string;
  montoMinimo: number;
  estado: 'Disponible' | 'Suscrito';
}

@Component({
  selector: 'app-table',
  imports: [
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatColumnDef,
    MatTable,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatNoDataRow,
    NgForOf,
    MatButton,
    MatCellDef,
    MatIconButton,
    CurrencyPipe,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.scss'
})
export class TableComponent {

  constructor( public dialog: MatDialog) {
  }

  searchFilter: FormControl = new FormControl('', [Validators.maxLength(30)]);

  @Input() set tableData(data: Fondo[]) {
    this.tableDataSource = new MatTableDataSource(
      data && data.length > 0 ? data : this.defaultFondos
    );
  }

  // ✅ Datos de prueba iniciales
  defaultFondos: Fondo[] = [
    { id: '1', nombre: 'Fondo de Inversión A', montoMinimo: 100000, estado: 'Disponible' },
    { id: '2', nombre: 'Fondo Premium B', montoMinimo: 500000, estado: 'Suscrito' },
    { id: '3', nombre: 'Fondo Renta Fija C', montoMinimo: 250000, estado: 'Disponible' }
  ];

  tableDataSource = new MatTableDataSource<Fondo>(this.defaultFondos);
  displayedColumns: string[] = ['nombre', 'montoMinimo', 'estado', 'acciones'];

  applyFilterSearch(search: string) {
    if (this.searchFilter.invalid) {
      return;
    }

  }

  suscribir(fondo: Fondo) {
    console.log('Suscribir a fondo:', fondo);
  }

  cancelar(fondo: Fondo) {
    console.log('Cancelar suscripción a fondo:', fondo);
  }

  verHistorial(fondo: Fondo) {
    console.log('Ver historial del fondo:', fondo);
  }

  notificar(fondo: Fondo) {
    console.log('Enviar notificación de fondo:', fondo);
  }

  subscription(){
    this.dialog.open(SubscribeComponent, {
      width: '580px'
      })
  }

}
