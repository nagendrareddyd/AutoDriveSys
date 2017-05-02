import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InstructorListComponent } from '../instructor/instructor-list.component';

@NgModule({
    imports: [        
        RouterModule.forChild([
            { path: 'instructors', component: InstructorListComponent }
        ])
    ],
    declarations: [
        InstructorListComponent
    ]
})
export class InstructorModule { }