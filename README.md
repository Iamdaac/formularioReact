# 📝 Formulario de Registro de Usuarios

---

## 🚀 Características Principales

- ✅ **Validaciones completas** en todos los campos
- 💾 **Persistencia de datos** con `sessionStorage`
- 🎨 **Diseño moderno y responsive**
- ⚡ **Validaciones en tiempo real**
- 📱 **Interfaz optimizada para dispositivos móviles**

---

## 🛠️ Tecnologías Utilizadas

| Tecnología                | Descripción                              |
| ------------------------- | ---------------------------------------- |
| ⚛️ **React 18**           | Biblioteca principal para la interfaz    |
| 📅 **date-fns**           | Manipulación y validación de fechas      |
| 🎨 **CSS3**               | Estilos, animaciones y diseño responsive |
| 💾 **SessionStorage API** | Persistencia de datos en el navegador    |

---

## 🎯 Funcionalidades

### 📋 Formulario de Registro

- **Nombre completo:** Validación de caracteres alfabéticos, espacios y tildes.
- **Fecha de nacimiento:** Rango permitido entre `1900-01-01` y la fecha actual.
- **Comentarios:** Campo opcional con validación de caracteres especiales permitidos.

---

## ✅ Validaciones Implementadas

### 🧍 Nombre Completo

- Campo obligatorio
- Solo caracteres A–Z, espacios y tildes
- No se permiten números ni símbolos especiales

### 📅 Fecha de Nacimiento

- Campo obligatorio
- Rango: `1900-01-01` → fecha actual
- No se permiten fechas futuras

### 💬 Comentarios

- Campo opcional
- Caracteres permitidos:  
  `A-Z a-z 0-9 . , " ' & @ $ * ( ) - ; ? ¿ ¡ !`

---

## 💾 Persistencia de Datos

Los registros se guardan automáticamente en `sessionStorage`, permitiendo que los datos **persistan incluso al recargar la página**.

---

## 📱 Diseño Responsive

- Adaptado a **móviles y tablets**
- **Grid flexible** para visualización de tarjetas
- Navegación táctil fluida y optimizada

---

## 📂 Estructura del Proyecto

src/
├── components/
│ └── cardUsuario.js # Componente para mostrar tarjetas de usuarios
├── pages/
│ └── formUsuario.js # Componente del formulario principal
├── App.js # Componente raíz de la aplicación
└── App.css # Estilos globales y diseño principal

## 🧪 Pruebas (Pendiente)

Se planifica la implementación de pruebas unitarias y de integración utilizando **Jest** para validar el correcto funcionamiento de los componentes y las funciones de validación.

## 📚 Referencias

- [Documentación oficial de React](https://react.dev/)
- [date-fns Documentation](https://date-fns.org/docs/)
- [MDN Web Docs - SessionStorage](https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage)
- [Guía de validaciones en formularios HTML5](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation)
- [Save Javascript objects in sessionStorage](https://stackoverflow.com/questions/6193574/save-javascript-objects-in-sessionstorage)
