# ParcialWeb1 - Evaluación Práctica Angular

Este proyecto fue generado usando Angular CLI versión 19.2.22 y corresponde al desarrollo de la evaluación práctica del curso MISW-4104.

## Descripción

Aplicación en Angular que permite visualizar usuarios de GitHub y sus repositorios. Implementa una arquitectura basada en **NgModules** con servicios HTTP, patrones maestro-detalle por componente y por URL, y una interfaz gráfica creada con Stitch.

---

## Arquitectura del proyecto

El proyecto usa arquitectura basada en **NgModules** (no standalone). El bootstrap se realiza desde `AppModule` a través de `platformBrowserDynamic`.

```
src/
└── app/
    ├── app.module.ts          # Módulo raíz — declara AppComponent, Header, Footer
    ├── app.routes.ts          # Definición de rutas de la aplicación
    ├── app.component.*        # Componente raíz con <router-outlet>
    ├── header/                # Componente de navegación (no-standalone)
    ├── footer/                # Componente de pie de página (no-standalone)
    │
    ├── Users/                 # Módulo de Usuarios
    │   ├── users.module.ts
    │   ├── models/
    │   │   └── usuarios-model.ts      # Interface User
    │   ├── services/
    │   │   └── usuarios.service.ts    # HTTP — users.json
    │   └── components/
    │       ├── users-list/            # Lista de usuarios (maestro)
    │       └── usuario-detalle/       # Detalle por componente (Punto 2)
    │
    └── Repositorios/          # Módulo de Repositorios
        ├── repos.module.ts
        ├── models/
        │   └── repositorios.ts        # Interface Repo
        ├── services/
        │   └── repositorios.service.ts  # HTTP — repositories.json
        └── components/
            ├── repos-list/            # Lista de repositorios (maestro)
            └── repos-detail/          # Detalle por URL (Punto 4)
```

### Módulos

**AppModule** (`app.module.ts`)
Módulo raíz. Declara `AppComponent`, `HeaderComponent` y `FooterComponent`. Importa `BrowserModule`, `HttpClientModule`, `RouterModule.forRoot(routes)`, `UsersModule` y `RepositoriosModule`.

**UsersModule** (`Users/users.module.ts`)
Declara `UsersListComponent` y `UsuarioDetalleComponent`. Importa `CommonModule` y `RouterModule`.

**RepositoriosModule** (`Repositorios/repos.module.ts`)
Declara `ReposListComponent` y `ReposDetailComponent`. Importa `CommonModule` y `RouterModule`.

---

### Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `UsersListComponent` | Lista de usuarios |
| `/usuarios` | `UsersListComponent` | Lista de usuarios |
| `/repositorios` | `ReposListComponent` | Lista de repositorios |
| `/repositorios/:id` | `ReposDetailComponent` | Detalle de repositorio por URL |

El detalle de **usuario** se maneja con el patrón maestro-detalle por **componente** (`<app-usuario-detalle>` dentro de `users-list`). El detalle de **repositorio** se maneja por **URL** (`/repositorios/:id`), donde `ReposDetailComponent` lee el `id` desde `ActivatedRoute`.

---

### Servicios HTTP

**UsersService** — `Users/services/usuarios.service.ts`
Consume `users.json` desde el gist del curso. Métodos: `getUsers()` y `getUserById(id)`.

**RepositoriosService** — `Repositorios/services/repositorios.service.ts`
Consume `repositories.json` desde el gist del curso. Métodos: `getRepos()`, `getReposByIds(ids)`.

---

### Modelos

**User** (`Users/models/usuarios-model.ts`)
```ts
export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
  location: string;
  repoIds: number[];
}
```

**Repo** (`Repositorios/models/repositorios.ts`)
```ts
export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  createdAt: string;
  ownerId: number;
}
```

---

## Desarrollo local

```bash
ng serve
```

Abre `http://localhost:4200/` en el navegador. La aplicación se recarga automáticamente al modificar el código.

## Compilación

```bash
ng build
```

Los archivos generados se almacenan en `dist/`. La compilación en modo producción optimiza el rendimiento.

## Pruebas unitarias

```bash
ng test
```

---
