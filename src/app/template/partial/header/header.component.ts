import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface MenuData{
	url: string;
	title: string;
	isActive: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	menuData: Array<MenuData> = [
		{url:'', title:'Home', isActive:false},
		{url:'about', title:'About', isActive:false},
		{url:'faq', title:'Faq', isActive:false},
		{url:'contact-us', title:'Contact Us', isActive:false},
	];
	constructor(private activeRoute: ActivatedRoute) {
		this.setActivePath();
	}

	ngOnInit() {
	}

	setActivePath(){
		let currentPath = this.activeRoute.routeConfig.path;
		for(let i=0; i< this.menuData.length;i++){
			if(this.menuData[i].url == currentPath){
				this.menuData[i].isActive = true;
			}
		}
	}

}
