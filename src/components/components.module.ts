import { NgModule } from '@angular/core';
import { FormComponent } from './form/form';
import { RecommendResonComponent } from './recommend-reson/recommend-reson';
@NgModule({
	declarations: [FormComponent,
    RecommendResonComponent],
	imports: [],
	exports: [FormComponent,
    RecommendResonComponent]
})
export class ComponentsModule {}
