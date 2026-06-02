# 🇧🇴 Simulador Multiescenario de Crisis y Desabastecimiento

**Materia:** Programación Web I  
**Desafío Final:** “Página web interactiva para simular problemas reales del contexto actual”  

## 📌 Contexto y Descripción del Proyecto
Este proyecto es una aplicación web interactiva de carácter educativo y neutral. Su objetivo es representar, calcular y visualizar el impacto de la actual coyuntura socioeconómica en Bolivia mediante modelos matemáticos sencillos. 

A través de la simulación de escenarios reales, la herramienta permite comprender cómo factores como la escasez de dólares, la falta de carburantes, los bloqueos de carreteras y la inflación afectan la economía familiar y la toma de decisiones cotidianas.

## 🚀 Escenarios y Algoritmos Implementados
El simulador cuenta con múltiples módulos interactivos calculados mediante JavaScript:

1. **Abastecimiento de Carburantes:** Calcula la duración de las reservas de YPFB en surtidores considerando el consumo y el reabastecimiento diario, emitiendo alertas en niveles críticos.
2. **Precios de Alimentos (Inflación):** Evalúa el incremento porcentual y monetario en los productos de la canasta básica familiar.
3. **Costo de Transporte:** Mide el impacto económico (gasto extra) que sufren los transportistas debido a desvíos por bloqueos en carreteras troncales.
4. **Compras Familiares:** Valida presupuestos frente a listas de compras, verificando saldos o déficits.
5. **Rumor y Compras por Pánico:** Simula cómo un rumor de escasez dispara la demanda porcentualmente, provocando el quiebre de stock en almacenes.
6. **Pérdida del Poder Adquisitivo:** Compara el gasto mensual anterior frente al actual con un ingreso fijo para determinar la pérdida del poder de compra.
7. **Algoritmo Lógico - Serie de Fibonacci:** Implementación de cálculo matemático iterativo puro para validar los procesos de programación estructurada requeridos en la rúbrica.

## 🛠️ Tecnologías y Requisitos Cumplidos
El proyecto fue desarrollado cumpliendo el 100% de los criterios técnicos exigidos:
- **HTML5:** Estructura semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS3:** Hoja de estilos externa con diseño visual moderno, paleta de colores coherente (modo oscuro) y **diseño totalmente responsivo** adaptable a PC, tablets y celulares.
- **JavaScript (Vanilla JS):** Lógica matemática separada en archivo externo, validación de datos, y **manipulación del DOM** (`getElementById`, `innerHTML`, etc.) para captura y renderizado dinámico de resultados sin recargar la página.
- **Control de Versiones y Despliegue:** Uso de Git, alojado en GitHub y desplegado en la web.

## 📂 Estructura de Carpetas
```text
proyecto-web-crisis/
│
├── index.html          # Estructura principal y maquetado de la web
├── CSS/
│   └── estilo.css      # Estilos visuales y responsividad
├── JAVASCRIPT/
│   └── 1.js            # Lógica de simuladores y manipulación del DOM
├── IMG/                # Recursos gráficos optimizados
│   └── (imágenes del proyecto)
└── README.md           # Documentación del proyecto
