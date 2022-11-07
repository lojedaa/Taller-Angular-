import { Component, OnInit } from '@angular/core';
import { Serie } from './series';
import { dataSeries } from './series.data';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  prom: Number = 0
  constructor() { }
    getSerieList(): Array<Serie> {
      return dataSeries;
    }
    mostrarPromedio(series: Array<Serie>):Number
    {
    let prom: number = 0;
    for(let index = 0; index < series.length; index++)
    {
        let serieAct: Serie = series[index];
        prom += serieAct.seasons;
    }
    prom = prom/series.length;
    return prom
  }
    ngOnInit() {
      this.series = this.getSerieList();
      this.prom = this.mostrarPromedio(this.getSerieList());

    }



}
