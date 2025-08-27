export interface Select {
  value: string | boolean,
  label: string
}

export const FUNDS_BASIC = [
  { id: "1", name: 'FPV BTG Pactual Recaudadora' },
  { id: "2", name: 'FPV BTG Pactual Ecopetrol' },
  { id: "3", name: 'Deuda Privada' },
  { id: "4", name: 'Fondo de Acciones' },
  { id: "5", name: 'FPV BTG Pactual Dinámica' }
] as const;
