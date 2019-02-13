import { NgModule } from '@angular/core';

import { StockinfoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StockinfoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StockinfoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StockinfoSharedCommonModule {}
