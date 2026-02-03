import { Component, OnInit, ViewChild } from '@angular/core';
import { JavatechieCovid19 } from '../javatechie-covid19';
import { CountryReports } from '../../countryReports';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-covid19',
  imports: [
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
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

  @ViewChild(MatPaginator, {static: true}) paginator! : MatPaginator;
  @ViewChild(MatSort, {static: true}) sort! : MatSort; // sort! means it will always have a non null value

  constructor(private service: JavatechieCovid19) {}
  ngOnInit(): void {
    this.getAllReports(); // on application load call this method and get all reports of covid patients country wise
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public getAllReports(){
    let resp = this.service.covid19Reports();
    resp.subscribe(report => {
      this.dataSource.data=report as CountryReports[] // i want to represent report as CountryReports[] array
    });
  }

  // method to filter based on name of country
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
