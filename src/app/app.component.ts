import { Component, OnInit } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GenAI';
  inputText: any;
  apiKey: any = 'AIzaSyDwzjDf4jHrcISoV3sHFeR2D9DWmt_lP90';
  genAI = new GoogleGenerativeAI(this.apiKey);
  responseText: any;
  model: any;
  progress:boolean=false;
  constructor(){}
  ngOnInit(): void {
    this.inputText = '';
  }

  async generateText() {
    debugger;
    this.progress=true;
    this.responseText = '';
    const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(this.inputText);
    const response = await result.response;
    this.progress=false;
    this.responseText = response.text();
    console.log('Response ' + this.responseText);
  }
}
