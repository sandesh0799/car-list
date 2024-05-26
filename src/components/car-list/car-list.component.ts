import { Component } from '@angular/core';
import { CarListService } from '../../services/car-list.service';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Car } from '../../model/car-list';
@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})

export class CarListComponent {
  cars: Car[] = [];
  filteredCars: Car[] = [];
  form: FormGroup;

  constructor(private carListService: CarListService, private fb: FormBuilder) {
    this.form = this.fb.group({
      year: [null],
      brand: [null],
      model: [null],
      price: [null],
    });
  }

  ngOnInit(): void {
    this.carListService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
      this.filteredCars = data
    });
  }

  public filterCars() {
    const formValue = this.form?.value;
    if (formValue?.year || formValue?.brand || formValue?.model || formValue?.price)
      this.filteredCars = this.cars.filter(car =>
        (formValue?.year && +car?.year === (+formValue.year)) ||
        (formValue?.brand && car?.brand.toLowerCase().includes(formValue.brand.toLowerCase())) ||
        (formValue?.model && car?.model.toLowerCase().includes(formValue.model.toLowerCase())) ||
        (formValue?.price && +car?.price === (+formValue.price))
      );
    else {
      this.filteredCars = this.cars
    }
  }

  public reset() {
    this.form.reset();
    this.filteredCars = this.cars
  }
}
