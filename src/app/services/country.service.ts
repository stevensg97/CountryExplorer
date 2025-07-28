import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountriesList(country: string): Observable<Country[]> {
    const url = `${environment.apiUrlBase}translation/${country}?fields=name,flags`;
    //const url = `https://restcountries.com/v3.1/translation/${country}?fields=name,flags`
    return this.http.get<Country[]>(url);
  }
}