import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDataStorage {
    saveUserData(projects: any) {
        sessionStorage.setItem('projects', JSON.stringify(projects));
      }

      getUserData(): any {
        const projects = sessionStorage.getItem('projects');
        if (projects) {
          return JSON.parse(projects);
        }
        return null;
      }

      saveConstants(projects: any) {
          sessionStorage.setItem('constants', JSON.stringify(projects));
        }

        getConstants(): any {
          const projects = sessionStorage.getItem('constants');
          if (projects) {
            return JSON.parse(projects);
          }
          return null;
        }
  constructor() {
  }
}
