import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

   onSubmit(query: string){
     console.log(query);
     this.router.navigateByUrl('/search', {state: {searchQuery: query}});
   }
}
