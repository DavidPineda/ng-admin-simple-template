import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgUploaderModule } from 'ngx-uploader';
import { AppTranslationModule } from '../app.translation.module';
import { Ng2MDFValidationMessagesModule } from 'ng2-cli-validation-messages/ng2-fmv';

import {
  BaThemeConfig
} from './theme.config';

import {
  BaThemeConfigProvider
} from './theme.configProvider';

import {
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaPageTop,
  BaSidebar,
  BaCard
} from './components';

import {
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun
} from './directives';

import { BaCardBlur } from './components/baCard/baCardBlur.directive';

import {
  BaProfilePicturePipe
} from './pipes';

import {
  BaImageLoaderService,
  BaMenuService,
  BaThemePreloader,
  BaThemeSpinner
} from './services';

import {
  EmailValidator,
  EqualPasswordsValidator
} from './validators';

const NGA_COMPONENTS = [
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaPageTop,
  BaSidebar,
  BaCard
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
  BaCardBlur
];

const NGA_PIPES = [
  BaProfilePicturePipe
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner,
  BaMenuService
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
    NgUploaderModule,
    Ng2MDFValidationMessagesModule.globalConfig({
      class: 'has-error',
      defaultErrorMessages: {
        required: 'Este campo es obligatorio.',
        pattern: 'Por favor introduzca un formato válido.',
        email: 'Por favor, introduce una dirección de correo electrónico válida.',
        minLength: 'Por favor, introduzca al menos {0} caracteres.',
        maxLength: 'Por favor, introduzca no más de {0} caracteres.',
        minNumber: 'Por favor, introduzca un valor mayor o igual a {0}.',
        maxNumber: 'Por favor, introduzca un valor menor o igual a {0}.',
        noEmpty: 'Espacios en blanco no permitidos',
        rangeLength: 'or favor, introduzca un valor entre {0} y {1} caracteres.',
        range: 'Por favor, introduzca un valor entre {0} y {1}.',
        digit: 'Por favor ingrese solo dígitos.',
        equal: 'Por favor, introduzca el mismo valor de nuevo.',
        url: 'Por favor introduzca un URL válido.',
        date: 'Por favor introduzca una fecha valida.',
        areEqual: 'Los valores en el grupo deben coincidir.',
        passwords: 'Ambos campos "Contraseña" y "Confirmar contraseña" deben coincidir.',
        unknownError: 'Error desconocido.',
      }
    })
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
    Ng2MDFValidationMessagesModule
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
