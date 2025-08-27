import {Component, Input, OnInit} from '@angular/core';
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
import {TransactionsService} from '@app/shared/services/transactions-service/transactions.service';
import {Transaction} from '@app/shared/interfaces/transactions.interfaces';

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
export class TableComponent implements OnInit {
  public loadingTable: Observable<boolean>;
  dataTable: Transaction[] = [];

  constructor(private dialog: MatDialog,
              private transactions: TransactionsService,
              private _loader: LoadingService) {
    this.loadingTable = this._loader.loadingTable$;
  }

  searchFilter: FormControl = new FormControl('', [Validators.maxLength(30)]);

  tableDataSource = new MatTableDataSource<Transaction>(this.dataTable);
  displayedColumns: string[] = ['nombre', 'montoMinimo', 'estado', 'acciones'];

  applyFilterSearch(search: string) {
    if (this.searchFilter.invalid) {
      return;
    }
  }

  cancel(transaction: Transaction) {
    let dialogRef =  this.dialog.open(CancellationsComponent, {
      width: '580px',
      data: transaction
    })
    dialogRef.afterClosed().subscribe(() => {
      this.consultTable();
    });

  }

  createUser() {
    let dialogRef =  this.dialog.open(CreateUserComponent, {
      width: '580px'
    })
    dialogRef.afterClosed().subscribe(() => {
      this.consultTable();
    });
  }

  ngOnInit(): void {
    this.consultTable();
  }

  consultTable() {
    this._loader.showLoaderTable();
    this.transactions.getTransactions().subscribe({
      next: (data) => {
        this.dataTable = data;
        this.tableDataSource.data = this.dataTable;
        this._loader.hideLoaderTable();
      }
    })
  }

}
