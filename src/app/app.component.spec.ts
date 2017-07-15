import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaThemeConfig } from './theme/theme.config';
import { BaThemeConfigProvider } from './theme/theme.configProvider';
import { GlobalState } from './services';
import { BaImageLoaderService, BaMenuService, BaThemePreloader, BaThemeSpinner } from './theme/services';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        BaThemeConfig,
        BaThemeConfigProvider,
        GlobalState,
        BaImageLoaderService,
        BaMenuService,
        BaThemePreloader,
        BaThemeSpinner
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
