import {Injectable} from "@angular/core";

export interface StorageSchema {
  location?: {};
}

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private keyLocalStorage = '__storage_1';

  store(schema: StorageSchema): void {
    localStorage.setItem(this.keyLocalStorage, JSON.stringify(schema));
  }

  getItem(key: string, defaultValue = null) {
    if (!localStorage.getItem(this.keyLocalStorage)) {
      return defaultValue;
    }

    // @ts-ignore
    const json = JSON.parse(localStorage.getItem(this.keyLocalStorage));
    if (json && json[key]) {
      return json[key];
    }

    return defaultValue;
  }

  clear(): void {
    localStorage.removeItem(this.keyLocalStorage);
  }
}
