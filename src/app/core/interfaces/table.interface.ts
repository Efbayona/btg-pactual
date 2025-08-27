export interface TableColumn {
  name: string;
  key: string;
  table?: string;
  isSortable?: boolean;
  isFilterable?: boolean;
  dataType: 'specialCharacter' | 'text' | 'status' | 'statusName' | 'dateTime' | 'currency' | 'requestType' | 'payments' | 'date' | 'statusLoadComponent' | 'date-military' | 'progress';
}

export interface TableActions {
  add: boolean
}

export interface Action {
  can: boolean,
  key?: string,
  can_when_status?: string[]
}

export interface OptionsTable<T = any> {
  type: string,
  options: T;
}
