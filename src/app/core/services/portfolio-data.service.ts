
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private http = inject(HttpClient);

  private readonly baseUrl = 'assets/data';

  getProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile.json`);
  }

  getSkills(): Observable<any> {
    return this.http.get(`${this.baseUrl}/skills.json`);
  }

  getExperience(): Observable<any> {
    return this.http.get(`${this.baseUrl}/experience.json`);
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/projects.json`);
  }

  getEducation(): Observable<any> {
    return this.http.get(`${this.baseUrl}/education.json`);
  }

  getCertifications(): Observable<any> {
    return this.http.get(`${this.baseUrl}/certifications.json`);
  }
}
