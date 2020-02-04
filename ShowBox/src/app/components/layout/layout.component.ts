import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  query: string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

   onSubmit(){
     console.log(this.query);
     this.router.navigate(['/search'], {queryParams: {searchQuery: this.query}});
     this.query = null;
   }
}
