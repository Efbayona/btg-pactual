import {Component, Input} from '@angular/core';
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
import {AsyncPipe, NgClass} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {CancellationsComponent} from '@app/shared/layouts/cancellations/cancellations.component';
import {CreateUserComponent} from '@app/shared/layouts/create-user/create-user.component';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {LoadingService} from '@app/core/services/loading/loading.service';
import {Observable} from 'rxjs';

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
    MatButton,
    MatCellDef,
    NgClass,
    ReactiveFormsModule,
    MatProgressSpinner,
    AsyncPipe,
  ],
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public loadingTable: Observable<boolean>;

  constructor(private dialog: MatDialog,
              private _loader: LoadingService) {
    this.loadingTable = this._loader.loadingTable$;
  }

  searchFilter: FormControl = new FormControl('', [Validators.maxLength(30)]);

  @Input() set tableData(data: Fondo[]) {
    this.tableDataSource = new MatTableDataSource(
      data && data.length > 0 ? data : this.defaultFondos
    );
  }

  defaultFondos: Fondo[] = [
    {id: '1', nombre: 'Fondo de Inversión A', montoMinimo: 100000, estado: 'Disponible'},
    {id: '2', nombre: 'Fondo Premium B', montoMinimo: 500000, estado: 'Suscrito'},
    {id: '3', nombre: 'Fondo Renta Fija C', montoMinimo: 250000, estado: 'Disponible'}
  ];

  tableDataSource = new MatTableDataSource<Fondo>(this.defaultFondos);
  displayedColumns: string[] = ['nombre', 'montoMinimo', 'estado', 'acciones'];

  applyFilterSearch(search: string) {
    if (this.searchFilter.invalid) {
      return;
    }
  }

  cancel(element: any) {
    this.dialog.open(CancellationsComponent, {
      width: '580px'
    })
  }

  createUser() {
    this.dialog.open(CreateUserComponent, {
      width: '580px'
    })
  }

}
