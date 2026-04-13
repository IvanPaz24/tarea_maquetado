import { Routes } from '@angular/router';
// import { Bienvenida } from './pages/bienvenida/bienvenida';
// // import { Login } from './pages/login/login';
// import { Registro } from './pages/registro/registro';
// import { SobreMi } from './pages/sobre-mi/sobre-mi';

export const routes: Routes = [
    {
        path: "bienvenida",
        loadComponent: () => import('./pages/bienvenida/bienvenida').then((m) => m.Bienvenida ) 
    },
    {
        path: "",
        redirectTo: "bienvenida",
        pathMatch: "full"
    },
    {
        path: "login",
        loadComponent: () => import('./pages/login/login').then((m) => m.Login ) 
    },
    {
        path: "registro",
         loadComponent: () => import('./pages/registro/registro').then((m) => m.Registro ) 
    },
    {
        path: "sobre-mi",
         loadComponent: () => import('./pages/sobre-mi/sobre-mi').then((m) => m.SobreMi ) 
    },
    {
        path: "perfil",
        loadComponent: () => import('./pages/perfil/perfil').then((m) => m.Perfil )
    },
    { 
        path: "error",
        loadComponent: () => import('./pages/error/error').then((m) => m.Error )
    },
    {
        path: "**",
         loadComponent: () => import('./pages/error/error').then((m) => m.Error ) 
    }
];
