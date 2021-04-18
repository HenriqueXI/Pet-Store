import { Parameters } from './../../interfaces/parameters';
import { ParametersService } from './../../services/parameters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private parametersService: ParametersService,
    private route: ActivatedRoute
  ) { }

  parameter: Parameters;

  ngOnInit(): void {
    this.getParameters();
  }

  getParameters(): void{
    this.parametersService.getParameters()
    .subscribe(parameter => this.parameter = parameter)
  }
}
