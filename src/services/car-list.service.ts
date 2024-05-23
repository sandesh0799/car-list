import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../model/car-list';

@Injectable({
  providedIn: 'root'
})
export class CarListService {

  constructor() { }

  getCars(): Observable<Car[]> {
    const cars = [
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
        "brand": "Mazda MX-5",
        "year": 1989,
        "model": "Sports car Roadster",
        "price": 500000
      },
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
        "brand": "Volkswagen Kübelwagen",
        "year": 1989,
        "model": "Military vehicle",
        "price": 2000000
      },
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
        "brand": "Porsche Cayenne",
        "year": 2002,
        "model": "Mid-size luxury crossover SUV"
        , "price": 4000000
      },
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
        "brand": "Vauxhall Chevette",
        "year": 1975,
        "model": "Supermini"
        , "price": 3000000
      },
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
        "brand": "Dymaxion car",
        "year": 1933,
        "model": "Concept car"
        , "price": 2500000
      },
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
        "brand": "Ford Crown Victoria",
        "year": 1955,
        "model": "Full-size Ford"
        , "price": 600000
      },
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
        "brand": "Plymouth Superbird",
        "year": 1970,
        "model": "Muscle car(today) and Race car(Past)"
        , "price": 3000000
      },
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
        "brand": "Saab 9000",
        "year": 1984,
        "model": "Executive car"
        , "price": 250000
      },
      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
        "brand": "Pontiac Sunfire",
        "year": 1994,
        "model": "Compact"
        , "price": 250000
      },

      {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
        "brand": "Jaguar X-Type",
        "year": 2001,
        "model": "Compact executive car"
        , "price": 3000000
      },
    ];

    return of(cars);
  }
}
