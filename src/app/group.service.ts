import { Injectable } from '@angular/core';
import { Group } from './group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl = '/api';

  async getGroups(): Promise<Group[]> {
    const data = await fetch(this.baseUrl + '/groups');
    return (await data.json()) ?? [];
  }

  async getGroup(id: string): Promise<Group | undefined> {
    const data = await fetch(this.baseUrl + '/groups/' + id);
    return (await data.json()) ?? undefined;
  }

}
