# 🇧🇴 Sistema Multiescenario de Simulación Económica y Social

[cite_start]Este repositorio contiene el desarrollo del **Desafío Final de Programación Web I**, enfocado en la creación de herramientas digitales interactivas y educativas para modelar y comprender problemáticas del contexto actual socioeconómico en Bolivia[cite: 210, 215].

---

## 👤 Información del Estudiante y Entregables
* **Nombre del Estudiante:** [Alexander Eleazar Conde Ordoñez]
* [cite_start]**Materia:** Programación Web I [cite: 409]
* **Enlace del Repositorio Git:** [Pega aquí el enlace de este repositorio]
* **Enlace de la Página Publicada:** [Pega aquí tu enlace principal de GitHub Pages]

---

## 📌 1. Contexto del Problema Real (6/6 pts)
[cite_start]La actual coyuntura socioeconómica del país presenta retos complejos que repercuten de forma directa en el día a día de la población[cite: 213]. Este proyecto modela numéricamente fenómenos críticos tales como:
* [cite_start]**Crisis de Carburantes:** Filas prolongadas en estaciones de servicio y disminución de reservas logísticas[cite: 213, 250].
* [cite_start]**Presión Inflacionaria:** Incremento constante en los insumos esenciales de la canasta básica familiar[cite: 213, 267].
* [cite_start]**Conflictos Sociales y Bloqueos:** Interrupción de rutas troncales que obligan al transporte a tomar desvíos costosos[cite: 213, 285].
* [cite_start]**Poder Adquisitivo:** El impacto directo sobre los presupuestos familiares al mantener ingresos estables frente a costos en ascenso[cite: 213, 332].

[cite_start]*Nota: La aplicación carece de posicionamiento político; su naturaleza es estrictamente académica, interactiva y educativa[cite: 215].*

---

## 🧮 2. Algoritmos y Modelos Matemáticos Implementados (5/5 pts)
[cite_start]Cada módulo interactivo procesa los datos ingresados en formularios mediante funciones JavaScript estructuradas[cite: 223, 226]:

1. **Simulador de Combustible (Escenario A):** Determina la tasa de decrecimiento de las reservas basándose en la ecuación: 
   [cite_start]`Reserva Final = Reserva Inicial + Reabastecimiento - Consumo`[cite: 396]. [cite_start]Lanza alertas si la reserva desciende del límite crítico fijado[cite: 261].
2. **Simulador de Canasta Alimentaria (Escenario B):** Mide el aumento porcentual del costo de vida usando la relación del cambio de precios: 
   [cite_start]`Porcentaje = ((Precio Actual - Precio Anterior) / Precio Anterior) * 100`[cite: 398].
3. [cite_start]**Simulador de Costos de Transporte (Escenario C):** Calcula el impacto financiero semanal y mensual provocado por los desvíos en carreteras nacionales[cite: 296, 402].
4. [cite_start]**Gestor de Presupuesto Familiar (Escenario D):** Realiza un balance matemático entre ingresos/fondos disponibles y el costo total acumulado en el carrito de compras, detectando déficits monetarios[cite: 309, 311].
5. [cite_start]**Simulador de Especulación y Rumores (Escenario E):** Evalúa el estrés de stock en almacenes cuando las compras de pánico inflan artificialmente la demanda diaria en un porcentaje determinado[cite: 317, 404].
6. [cite_start]**Módulo de Pérdida del Poder Adquisitivo (Escenario F):** Cuantifica matemáticamente la reducción real del valor del dinero frente a un ingreso salarial fijo[cite: 332, 340].

---

## 🧬 3. Extensión Lógica Fundamental: Serie de Fibonacci (5/5 pts)
En cumplimiento estricto de los requisitos lógicos avanzados exigidos en la evaluación de la materia, se ha incorporado un componente de computación pura en el simulador matemático (`Tab Matemáticas` / `Proyecto 4`):
* **Algoritmo:** Implementación iterativa controlada en JavaScript para computar y desplegar de manera dinámica la sucesión matemática de Fibonacci basada en un número entero $N$ provisto por el usuario a través del DOM.
* [cite_start]**Propósito:** Validar destrezas en lógica de bucles, control de desbordamiento de memoria en el navegador y renderizado eficiente de arreglos dinámicos en la interfaz[cite: 418].

---

## 🛠️ 4. Tecnologías y Cumplimiento Técnico (28/28 pts)
* [cite_start]**HTML5 Semántico:** Uso riguroso de contenedores limpios como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>`[cite: 371].
* [cite_start]**CSS3 Externo y Responsivo:** Modularización visual mediante archivos `.css` independientes[cite: 371]. [cite_start]Estilos construidos bajo principios de diseño elástico con *Media Queries* para asegurar adaptabilidad óptima en smartphones, tablets y ordenadores[cite: 371, 387].
* **JavaScript y Manipulación Eficiente del DOM:** Captura de datos de formularios web empleando estrictamente selectores nativos (`document.getElementById`). [cite_start]Inyección dinámica de respuestas y estados críticos directo en el árbol HTML a través de propiedades seguras (`innerHTML`, `textContent`) evitando alertas intrusivas o volcados planos exclusivamente en la consola web[cite: 392].

---

## 📂 5. Arquitectura del Repositorio y Links Directos (8/8 pts)
[cite_start]El proyecto se encuentra organizado meticulosamente en directorios independientes para facilitar su auditoría técnica[cite: 225, 371]:

```text
├── README.md               # Documentación general del repositorio (Este archivo) [cite: 374]
├── Proyecto 1/             # Código fuente del Maquetado Base (Estructura Inicial)
├── Proyecto 2/             # Módulos de Simulación Base (Combustibles y Precios)
├── Proyecto 3/             # Interfaz Unificada Completa (Escenarios A al F)
└── Proyecto 4/             # Módulo Avanzado (Simuladores Integrados + Algoritmo Fibonacci)
