import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'app',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class Pages {
  constructor(private _menuService: BaMenuService,) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
