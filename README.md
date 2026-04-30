# ParcialWeb1 - Evaluación Práctica Angular

Este proyecto fue generado usando Angular CLI versión 19.2.22 y corresponde al desarrollo de la evaluación práctica del curso MISW-4104.

## 📌 Descripción

La aplicación consiste en una interfaz desarrollada en Angular que permite visualizar información de usuarios de GitHub y sus repositorios, implementando conceptos como módulos, servicios HTTP, componentes y patrones de diseño maestro-detalle.

La interfaz gráfica se creó usando Stitch

---

## 🚀 Servidor de desarrollo

Para iniciar el servidor local de desarrollo, ejecuta:

```bash
ng serve
```

Luego abre tu navegador en:

http://localhost:4200/

La aplicación se recargará automáticamente cada vez que modifiques el código fuente.

---

## ⚙️ Generación de código

Angular CLI permite generar componentes, servicios y otros elementos fácilmente. Por ejemplo:

```bash
ng generate component nombre-del-componente
```

Para ver todas las opciones disponibles:

```bash
ng generate --help
```

---

## 🏗️ Construcción del proyecto

Para compilar el proyecto:

```bash
ng build
```

Los archivos generados se almacenarán en el directorio `dist/`. La compilación en modo producción optimiza el rendimiento.

---

## 🧪 Pruebas

### Pruebas unitarias

```bash
ng test
```

### Pruebas end-to-end (e2e)

```bash
ng e2e
```
Aunque para este ejercicio no corresponden.

---

## 📚 Enunciado de la Evaluación

### 🔹 Punto 1 (30%) - Usuarios

- Crear un módulo de Usuarios  
- Implementar una clase `Usuario` con sus atributos  
- Crear un servicio HTTP para consumir los datos desde:  
  https://gist.githubusercontent.com/caev03/.../users.json  
- Crear un componente para listar usuarios (UI de calidad tipo mockup)

---

### 🔹 Punto 2 (20%) - Detalle de Usuario

- Implementar vista de detalle usando patrón maestro-detalle  
- Debe hacerse usando componentes (no URLs)

---

### 🔹 Punto 3 (30%) - Repositorios

- Crear un módulo de Repositorios  
- Implementar una clase `Repositorio`  
- Crear un servicio HTTP para consumir los datos desde:  
  https://gist.githubusercontent.com/caev03/.../repositories.json  
- Crear un componente para listar repositorios (UI de calidad tipo mockup)

---

### 🔹 Punto 4 (20%) - Detalle de Repositorio

- Implementar vista de detalle usando patrón maestro-detalle  
- Debe hacerse usando URLs (no componentes)

---

## 📦 Entrega

1. Realizar commit y push al repositorio personal  
2. Crear un release con:
   - Tag: 1.0.0  
   - Título: ParcialMISW4104  
3. Entregar:
   - Archivo .zip del release  
   - URL del repositorio  
4. No se permiten cambios después de la entrega

---

## 📖 Recursos adicionales

https://angular.dev/tools/cli
