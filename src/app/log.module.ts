import {NgModule, Optional, SkipSelf} from '@angular/core';
@NgModule({
})
export class LogModule {
  constructor(@Optional() @SkipSelf() parentModule: LogModule|null) {
    if (parentModule !== null) {
      throw new Error('LogModule is already loaded. Import it in the AppModule only');
    }
  }
}
