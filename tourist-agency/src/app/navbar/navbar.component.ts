import { Component, OnInit } from "@angular/core";

@Component({
	selector: "navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.sass"],
})
export class NavbarComponent implements OnInit {
	name: string;
	constructor() {
		this.name = "Travel Agency";
	}

	ngOnInit(): void {}
}
