import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'product/:id',
        component: Product
    },

    {
        path: 'contact',
        component: Contact
    }
];
