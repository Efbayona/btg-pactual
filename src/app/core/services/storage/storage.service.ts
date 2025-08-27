import {Injectable} from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private localStorage: LocalStorageService) {
  }

  setItem(key: string, value: any): void {
    this.localStorage.store(key, value);
  }

  getItem<T>(key: string): T {
    return this.localStorage.retrieve(key);
  }

  removeItem(key: string): void {
    this.localStorage.clear(key);
  }

  removeAll(): void {
    this.localStorage.clear();
  }

}
