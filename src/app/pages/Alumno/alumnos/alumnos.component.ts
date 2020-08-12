import { Component, OnInit } from '@angular/core';
import {AlumnosService} from '../../../service/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [AlumnosService]
})
export class AlumnosComponent implements OnInit {
  public alumnos:Array<any> = []

  constructor(private alumnosService: AlumnosService) {

  }

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((resp:any) => {
      console.log(resp)
      this.alumnos = resp;
    })
  }

}
