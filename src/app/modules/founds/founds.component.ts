import {Component, OnInit} from '@angular/core';
import {CardFoundComponent} from '@app/shared/layouts/card-found/card-found.component';
import {Found} from '@app/shared/interfaces/found.interfaces';
import {CreateUserComponent} from '@app/shared/layouts/create-user/create-user.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-founds',
  imports: [
    CardFoundComponent
  ],
  templateUrl: './founds.component.html',
  styleUrl: './founds.component.scss'
})
export class FoundsComponent implements OnInit {

  constructor(private dialog: MatDialog,) {
  }

  founds: Found[] = [
    {
      id: "1",
      name: 'FPV BTG Pactual Recaudadora',
      description: 'Fondo voluntario de pensión con perfil conservador para recaudo.',
      minAmount: 75000,
      category: 'FPV'
    },
    {
      id: "2",
      name: 'FPV BTG Pactual Ecopetrol',
      description: 'Fondo voluntario de pensión ligado a activos de Ecopetrol.',
      minAmount: 125000,
      category: 'FPV'
    },
    {
      id: "3",
      name: 'Deuda Privada',
      description: 'Fondo de inversión colectiva enfocado en títulos de deuda privada.',
      minAmount: 50000,
      category: 'FIC'
    },
    {
      id: "4",
      name: 'Fondo de Acciones',
      description: 'Fondo de inversión colectiva con portafolio en acciones.',
      minAmount: 250000,
      category: 'FIC'
    },
    {
      id: "5",
      name: 'FPV BTG Pactual Dinámica',
      description: 'Fondo voluntario de pensión con estrategia dinámica de inversión.',
      minAmount: 100000,
      category: 'FPV'
    }
  ];

  createUser() {
    this.dialog.open(CreateUserComponent, {
      width: '580px'
    })
  }

  ngOnInit(): void {
  }

}
