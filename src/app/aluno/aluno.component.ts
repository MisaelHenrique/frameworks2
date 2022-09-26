import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from  '@angular/material/dialog' ;
import { from } from 'rxjs';
import { Aluno } from './aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
@Component ({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector : 'dialog-animations-example' ,
  styleUrls : [ 'dialog-animations-example.css' ],
  templateUrl : 'dialog-animations-example.html' ,
})

export class AlunoComponent  {
  constructor( public dialog: MatDialog ){}

  displayedColumns: string[] = ['demo-id', 'demo-name', 'demo-adress', 'demo-age', 'demo-status', 'demo-media', 'demo-details'];
  dataSource = ELEMENT_DATA;
}
  const ELEMENT_DATA: Aluno[] = [
    {id: 1, name: 'Maria Joaquina', adress: 'Rua da flores numero 0', age: 25, grade1: 5, grade2: 8, status: 'matriculado'},
    {id: 2, name: 'Cirilo', adress: 'Rua da flores numero 0', age: 25, grade1: 3, grade2: 8, status: 'RED'},
    {id: 3, name: 'Laura', adress: 'Rua da flores numero 0', age: 25, grade1: 7, grade2: 8, status: 'trancado'},
    {id: 4, name: 'Débora', adress: 'Rua da flores numero 0', age: 25, grade1: 6, grade2: 8, status: 'afastado'},
    {id: 5, name: 'Gustavo', adress: 'Rua da flores numero 0', age: 25, grade1: 2, grade2: 8, status: 'matriculado'},
    {id: 6, name: 'Misael', adress: 'Rua da flores numero 0', age: 25, grade1: 1, grade2: 8, status: 'afastado'},
    {id: 7, name: 'Vitor', adress: 'Rua da flores numero 0', age: 25, grade1: 0, grade2: 8, status: 'RED'},
    {id: 8, name: 'Bruno Falkatrua', adress: 'Rua da flores numero 0', age: 25, grade1: 10, grade2: 8, status: 'matriculado'},
    {id: 9, name: 'Logan José', adress: 'Rua da flores numero 0', age: 25, grade1: 8, grade2: 8, status: 'trancado'},
    {id: 10, name: 'Dead Pool', adress: 'Rua da flores numero 0', age: 25, grade1: 1, grade2: 8, status: 'RED'},
  ];

  function media(grade1:number, grade2:number){
    var media = (grade1 + grade2)/2;
    return media;

  }
