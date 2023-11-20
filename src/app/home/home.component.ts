import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';
import { OpenDialogReturnValue } from 'electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private electronService: ElectronService
  ) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  async test() {
    const result: OpenDialogReturnValue = await this.electronService.ipcRenderer.invoke('test', 'test');
    console.log(result);
  }

}
