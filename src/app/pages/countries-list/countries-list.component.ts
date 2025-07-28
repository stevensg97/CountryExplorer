import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { Observable, catchError, EMPTY, } from 'rxjs';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [FormsModule, AsyncPipe, ErrorMessageComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  //countries: Country[] = [];
  public countries$!: Observable<Country[]>;
  public errorMessage!: string;
  searchTerm: string = '';

  constructor(private countryService: CountryService) {}

  loadCountries(): void {
    this.errorMessage = ''; // Limpiar mensaje de error al inicio
    this.countries$ = this.countryService.getCountriesList(this.searchTerm).pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }
  
}
