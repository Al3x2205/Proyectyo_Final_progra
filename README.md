# 🇧🇴 Sistema Multiescenario de Simulación Económica y Social

Este repositorio contiene el desarrollo del **Desafío Final de Programación Web I**, enfocado en la creación de herramientas digitales interactivas y educativas para modelar y comprender problemáticas del contexto actual socioeconómico en Bolivia.

---

## 👤 Información del Estudiante y Entregables
* **Nombre del Estudiante:** [Alexander Eleazar Conde Ordoñez]
* **Materia:** Programación Web I 
* **Enlace del Repositorio Git:** [https://github.com/Al3x2205/Proyectyo_Final_progra]
* **Enlace de la Página Publicada:** [(https://al3x2205.github.io/Proyectyo_Final_progra/Proyecto%201/HTML/index1.html
https://al3x2205.github.io/Proyectyo_Final_progra/Proyecto%202/HTML/index2.html
https://al3x2205.github.io/Proyectyo_Final_progra/Proyecto%203/HTML/index3.html
https://al3x2205.github.io/Proyectyo_Final_progra/Proyecto%204/HTML/index4.html]

---

## 📌 1. Contexto del Problema Real
La actual coyuntura socioeconómica del país presenta retos complejos que repercuten de forma directa en el día a día de la población. Este proyecto modela numéricamente fenómenos críticos tales como:
* **Crisis de Carburantes:** Filas prolongadas en estaciones de servicio y disminución de reservas logísticas.
* **Presión Inflacionaria:** Incremento constante en los insumos esenciales de la canasta básica familiar.
* **Conflictos Sociales y Bloqueos:** Interrupción de rutas troncales que obligan al transporte a tomar desvíos costosos.
* **Poder Adquisitivo:** El impacto directo sobre los presupuestos familiares al mantener ingresos estables frente a costos en ascenso.

*Nota: La aplicación carece de posicionamiento político; su naturaleza es estrictamente académica, interactiva y educativa.*

---

## 🧮 2. Algoritmos y Modelos Matemáticos Implementados 
Cada módulo interactivo procesa los datos ingresados en formularios mediante funciones JavaScript estructuradas:

1. **Simulador de Combustible (Escenario A):** Determina la tasa de decrecimiento de las reservas basándose en la ecuación: 
   `Reserva Final = Reserva Inicial + Reabastecimiento - Consumo`. Lanza alertas si la reserva desciende del límite crítico fijado.
2. **Simulador de Canasta Alimentaria (Escenario B):** Mide el aumento porcentual del costo de vida usando la relación del cambio de precios: 
   `Porcentaje = ((Precio Actual - Precio Anterior) / Precio Anterior) * 100`.
3. **Simulador de Costos de Transporte (Escenario C):** Calcula el impacto financiero semanal y mensual provocado por los desvíos en carreteras nacionales.
4. **Gestor de Presupuesto Familiar (Escenario D):** Realiza un balance matemático entre ingresos/fondos disponibles y el costo total acumulado en el carrito de compras, detectando déficits monetarios.
5. **Simulador de Especulación y Rumores (Escenario E):** Evalúa el estrés de stock en almacenes cuando las compras de pánico inflan artificialmente la demanda diaria en un porcentaje determinado.
6. **Módulo de Pérdida del Poder Adquisitivo (Escenario F):** Cuantifica matemáticamente la reducción real del valor del dinero frente a un ingreso salarial fijo.

---

## 🧬 3. Extensión Lógica Fundamental: Serie de Fibonacci
En cumplimiento estricto de los requisitos lógicos avanzados exigidos en la evaluación de la materia, se ha incorporado un componente de computación pura en el simulador matemático (`Tab Matemáticas` / `Proyecto 4`):
* **Algoritmo:** Implementación iterativa controlada en JavaScript para computar y desplegar de manera dinámica la sucesión matemática de Fibonacci basada en un número entero $N$ provisto por el usuario a través del DOM.
* **Propósito:** Validar destrezas en lógica de bucles, control de desbordamiento de memoria en el navegador y renderizado eficiente de arreglos dinámicos en la interfaz.

---

## 🛠️ 4. Tecnologías y Cumplimiento Técnico
* **HTML5 Semántico:** Uso riguroso de contenedores limpios como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>`.
* **CSS3 Externo y Responsivo:** Modularización visual mediante archivos `.css` independientes[cite: 371]. [cite_start]Estilos construidos bajo principios de diseño elástico con *Media Queries* para asegurar adaptabilidad óptima en smartphones, tablets y ordenadores.
* **JavaScript y Manipulación Eficiente del DOM:** Captura de datos de formularios web empleando estrictamente selectores nativos (`document.getElementById`). Inyección dinámica de respuestas y estados críticos directo en el árbol HTML a través de propiedades seguras (`innerHTML`, `textContent`) evitando alertas intrusivas o volcados planos exclusivamente en la consola web.

---

## 📂 5. Arquitectura del Repositorio y Links Directos
El proyecto se encuentra organizado meticulosamente en directorios independientes para facilitar su auditoría técnica:
```text
├── README.md               # Documentación general del repositorio (Este archivo) 
├── Proyecto 1/             # Código fuente del Maquetado Base (Estructura Inicial)
   |---CSS
   |---HTML
         |---INDEX1.HTML
   |---IMG
   |---JAVASRIPT
├── Proyecto 2/             # Módulos de Simulación Base (Combustibles y Precios)
   |---CSS
   |---HTML
         |---INDEX2.HTML
   |---JAVASRIPT
├── Proyecto 3/             # Interfaz Unificada Completa (Escenarios A al F)
   |---CSS
   |---HTML
         |---INDEX3.HTML
   |---JAVASRIPT
└── Proyecto 4/             # Módulo Avanzado (Simuladores Integrados + Algoritmo Fibonacci)
 |---CSS
   |---HTML
         |---INDEX4.HTML
   |---JAVASRIPT
HICE MAS PROYECTOS PARA AUMENTAR MI NOTA JEJEJEJE GRACIAS.
