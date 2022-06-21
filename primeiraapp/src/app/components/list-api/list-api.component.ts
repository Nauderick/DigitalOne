import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'spa-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  personagens: Array<any> = []

  constructor(private ListService: ListService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.ListService.getList().subscribe(result => {
      this.personagens = result?.results
    })
  }

}
