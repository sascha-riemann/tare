import { ActionReducer, MetaReducer } from '@ngrx/store';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  let onInit = true;

  return (state: any, action: any): any => {
    // Reducer ausführen, um den neuen State zu erhalten
    const nextState = reducer(state, action);

    // Beim Initialisieren zuerst den State aus dem LocalStorage laden
    if (onInit) {
      onInit = false;
      const savedState = localStorage.getItem('yourStateKey');
      return savedState ? JSON.parse(savedState) : nextState;
    }

    // Den neuen State im LocalStorage speichern
    localStorage.setItem('yourStateKey', JSON.stringify(nextState));
    return nextState;
  };
}

// Verknüpfe deinen Haupt-Reducer mit dem localStorageSyncReducer
export function getMetaReducers(): MetaReducer<any, any>[] {
  return [localStorageSyncReducer];
}
