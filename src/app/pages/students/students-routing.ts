import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassCategoriesComponent } from './components/class-categories/class-categories.component';
import { SubjectCategoriesComponent } from './components/subject-categories/subject-categories.component';
import { EditClassCategoryComponent } from './components/edit-class-category/edit-class-category.component';
import { EditSubjectCategoryComponent } from './components/edit-subject-category/edit-subject-category.component';

const childRoutes: Routes = [
    {
        path: '',
        component: StudentComponent,
        children: [
            { path: '', redirectTo: 'students', pathMatch: 'full' },
            { path: 'students', component: StudentsComponent },
            { path: 'classcategories', component: ClassCategoriesComponent },
            { path: 'editclasscategories/:id', component: EditClassCategoryComponent },
            { path: 'subjectcategories', component: SubjectCategoriesComponent },
            { path: 'editsubjectcategories/:id', component: EditSubjectCategoryComponent }            
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);

