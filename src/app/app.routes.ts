import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CommentsComponent } from './pages/comments/comments.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'posts',
        component: PostsComponent

    },
    {
        path: 'comments',
        component: CommentsComponent

    },

    {
        path: '**',
        redirectTo: 'home'
    }
];