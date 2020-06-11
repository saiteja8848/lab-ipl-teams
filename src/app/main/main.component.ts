import { Component, OnInit } from '@angular/core';
import { TeamData } from './TeamData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  temp1: TeamData = new TeamData("Chennai Super Kings", "https://www.chennaisuperkings.com/", "965 - 144 - 6018", "../../assets/csk.png");
  temp2: TeamData = new TeamData("Mumbai Indians", "https://www.mumbaiindians.com/", "965 - 144 - 6018", "../../assets/MI.png");
  temp3: TeamData = new TeamData("Rajasthan Royals", "https://www.rajsthanroyals.com/", "965 - 144 - 6018", "../../assets/RR.png");
  temp4: TeamData = new TeamData("Delhi capitals", "https://www.delhicapitals.com/", "965 - 144 - 6018", "../../assets/Delhi.png");
  temp5: TeamData = new TeamData("Royal Challengers Bangalore", "https://www.royalchallengersbangolre.com/", "965 - 144 - 6018", "../../assets/RCB.png");
  temp6: TeamData = new TeamData("Kolkata Knight Riders", "https://www.kolkataknightriders.com/", "965 - 144 - 6018", "../../assets/SRH.png");

  // teams: TeamData[] = [this.temp1, this.temp2, this.temp3, this.temp4, this.temp5, this.temp6];


}
