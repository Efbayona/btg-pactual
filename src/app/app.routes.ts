import { Routes } from '@angular/router';
import {FoundsComponent} from '@app/modules/founds/founds.component';
import {TableComponent} from '@app/shared/layouts/table/table.component';

export const routes: Routes = [
  { path: '', redirectTo: 'founds', pathMatch: 'full' },
  { path: 'founds', component: FoundsComponent },
  { path: 'history', component: TableComponent },
];
