import { Component, OnInit, ViewChild } from '@angular/core';
import { JavatechieCovid19 } from '../javatechie-covid19';
import { CountryReports } from '../../countryReports';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-covid19',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './covid19.html',
  styleUrl: './covid19.css',
})
export class Covid19 implements OnInit{

  ELEMENT_DATA : CountryReports[] = [];
  displayedColumns: string[] = [
    'country',
    'cases',
    'todayCases',
    'deaths',
    'todayDeaths',
    'recovered',
    'active',
    'critical',
    'casesPerOneMillion',
    'deathsPerOneMillion',
    'tests',
    'testsPerOneMillion'
  ];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator : MatPaginator | undefined;

  constructor(private service: JavatechieCovid19) {}
  ngOnInit(): void {
    this.getAllReports(); // on application load call this method and get all reports of covid patients country wise
    this.dataSource.paginator = this.paginator;

  }

  public getAllReports(){
    let resp = this.service.covid19Reports();
    resp.subscribe(report => {
      this.dataSource.data=report as CountryReports[] // i want to represent report as CountryReports[] array
    });
  }



}
