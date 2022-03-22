import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const LEARNINGS_SEARCH_TOKEN: InjectionToken<BehaviorSubject<string>> =
  new InjectionToken('Learnings search value token');

export const DELETED_LEARNING: InjectionToken<BehaviorSubject<string>> =
  new InjectionToken('Deleted learning id token');
