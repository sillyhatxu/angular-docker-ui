import { Component, OnInit } from '@angular/core';
import { DockerStats } from 'src/app/dto/DockerStats';
import { DockerService } from 'src/app/services/docker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public updateTime = Date.now();

  public dockerStatsArray: Array<DockerStats> = [];

  constructor(private dockerService: DockerService) {
    this.refresh();
    setInterval(() => { this.refresh(); }, 1000 * 60);
  }

  ngOnInit() {

  }

  refresh() {
    console.log("refresh");
    const that = this;
    this.dockerService.stats().subscribe(function (data) {
      that.dockerStatsArray = data.data;
      that.updateTime = Date.now();
      console.log(that.dockerStatsArray);
    });
  }

}
