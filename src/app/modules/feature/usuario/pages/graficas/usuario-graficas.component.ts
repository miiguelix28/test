import { Label } from 'ng2-charts';
import { Component, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-usuario-graficas',
  templateUrl: './usuario-graficas.component.html',
  styleUrls: ['./usuario-graficas.component.scss']
})
export class UsuarioGraficasComponent  {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['	mojombo', 'defunkt', 'pjhyett', '	wycats', 'ezmobius', '	ivey', '	evanphx','		vanpelt','	wayneeseguin','		brynary'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [30, 30, 30, 30, 30, 30, 30,30, 30, 30], label: 'Seguidores' }
  ];


  constructor(
  ) {}

  ngOnInit(): void {
    let a =localStorage.getItem('data');
    console.log(a)
  }

}