# 🌍 Huella Cero - Plataforma de Gestión Ambiental
## 📖 Descripción del Proyecto
Huella Cero es una aplicación web interactiva diseñada para concientizar y empoderar a individuos y empresas en la lucha contra el cambio climático. La plataforma permite a los usuarios medir su impacto ambiental (huella de carbono e hídrica), monitorear sus hábitos de consumo, aprender sobre reciclaje y sostenibilidad, y participar activamente en proyectos comunitarios.

El objetivo principal es transformar la conciencia ambiental en acción tangible mediante herramientas digitales accesibles, educativas y gamificadas.

## 🚀 Tecnologías Utilizadas
El proyecto ha sido desarrollado utilizando tecnologías web estándar, asegurando compatibilidad y rendimiento sin necesidad de frameworks pesados:

- HTML5 (Lenguaje de Marcado): Estructura semántica sólida para todas las páginas, optimizada para SEO y accesibilidad.
- CSS3 (Hojas de Estilo):
  - Diseño Responsivo (Responsive Design) que se adapta a móviles, tablets y escritorio.
  - Uso de Flexbox y Grid para la maquetación.
  - Animaciones CSS para transiciones suaves (ej. en el login y menús).
  - Variables CSS para mantener una paleta de colores consistente.
- JavaScript (Vanilla JS):
  - Lógica del lado del cliente sin dependencias externas.
  - Manipulación del DOM para crear una experiencia de "Single Page Application" (SPA) en el panel de control.
  - Cálculos matemáticos para la calculadora de huella.
  - Simulación de autenticación y redireccionamiento.
- Recursos Externos:
  - FontAwesome: Para iconografía vectorial escalable.
  - Google Fonts: Tipografías modernas (Nunito y Roboto) para mejorar la legibilidad y estética.
## 📂 Estructura del Proyecto
El proyecto está organizado en una arquitectura plana y modular para facilitar su mantenimiento. A continuación, se detalla la función de los archivos principales:

### 1. Vistas Principales (HTML)
- index.html (Landing Page):
  - Es la cara pública del proyecto.
  - Contiene: Sección "Hero" de bienvenida, explicación de la misión, descripción de los roles de usuario (Estándar, Avanzado, Empresa, Voluntario), testimonios con slider interactivo, sección de preguntas frecuentes (FAQ) tipo acordeón y pie de página con contacto.
- login.html (Autenticación):
  - Interfaz de acceso y registro.
  - Cuenta con un diseño de "doble panel" deslizante que alterna entre el formulario de inicio de sesión y el de registro mediante animaciones CSS y JS.
- inicio.html (Dashboard / Aplicación):
  - Es el núcleo funcional de la plataforma (disponible tras "iniciar sesión").
  - Cuenta con una barra lateral de navegación (Sidebar).
  - Contiene múltiples secciones ocultas que se muestran dinámicamente según la selección del usuario (Home, Calculadora, Monitoreo, Guía, Proyectos, etc.).
### 2. Estilos (CSS)
- estilos.css : Estilos generales para la Landing Page ( index.html ). Define la identidad visual, colores y tipografías.
- estiloslog.css : Estilos específicos para la página de Login, incluyendo las animaciones de transición entre formularios y el fondo con efecto de desenfoque.
- estilos_inicio.css : Estilos para el Dashboard ( inicio.html ), controlando el layout de la barra lateral y la visualización de las diferentes herramientas.
- nomalize.css : Archivo para "resetear" los estilos por defecto de los navegadores y asegurar que la web se vea igual en Chrome, Firefox, Edge, etc.
### 3. Lógica y Funcionalidad (JavaScript)
- login.js : Controla la animación del formulario de Login/Registro y maneja la simulación de inicio de sesión, redirigiendo al usuario a inicio.html .
- home.js : Gestiona la navegación dentro del Dashboard. Se encarga de ocultar y mostrar las secciones (Calculadora, Recursos, etc.) sin recargar la página.
- cal_huella.js : Contiene el algoritmo para calcular la huella de carbono basado en los inputs del usuario (energía, agua, transporte) y renderiza la barra de progreso visual.
- menuinicio.js : Controla la apertura y cierre del menú lateral en dispositivos móviles (hamburguesa).
- slider.js : Lógica para el carrusel de testimonios en la página principal.
- questions.js : Controla el despliegue de las respuestas en la sección de Preguntas Frecuentes.
## 🌟 Funcionalidades Clave
1. Calculadora de Huella:
   - Permite ingresar datos de consumo mensual.
   - Aplica factores de emisión para estimar el impacto en kg de CO2.
   - Muestra el resultado con una barra de color semántica (Verde=Bien, Rojo=Alto).
2. Sistema de Roles:
   - Información diferenciada para distintos tipos de usuarios (desde individuos hasta grandes empresas).
3. Educación Ambiental:
   - Módulo integrado con guías de reciclaje y videos educativos.
4. Proyectos y Voluntariado:
   - Sección para inscribirse en actividades reales como limpieza de playas o reforestación.
5. Gamificación (Recompensas):
   - Sistema visual para canjear puntos por beneficios ecológicos (simulado).
