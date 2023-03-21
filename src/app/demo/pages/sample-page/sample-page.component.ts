import { Component, OnInit } from '@angular/core';
import {SeoAnalyticChart1} from './chart/seo-analytic-chart-1';
import {SeoAnalyticChart2} from './chart/seo-analytic-chart-2';
import {SeoAnalyticChart3} from './chart/seo-analytic-chart-3';
import {SeoAnalyticChart4} from './chart/seo-analytic-chart-4';

@Component({

  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {

  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public seoChartData4: any;

  public amountProcessedChartData: any;
  public amountSpentChartData: any;
  public profitProcessedChartData: any;

  
  constructor() {
    this.seoChartData1 = SeoAnalyticChart1.seoChartData;
    this.seoChartData2 = SeoAnalyticChart2.seoChartData;
    this.seoChartData3 = SeoAnalyticChart3.seoChartData;
    this.seoChartData4 = SeoAnalyticChart4.seoChartData;
   
  }

  ngOnInit() {
  }

}
