/**
 * ==========================================================================
 * LÓGICA DE SIMULACIÓN: ESTADO DE SITIO Y TOQUE DE QUEDA EN BOLIVIA
 * ==========================================================================
 */
function simularSitio() {
    // Captura de datos desde el DOM
    const inicio = parseInt(document.getElementById('hora-inicio').value);
    const calle = parseInt(document.getElementById('hora-calle').value);
    const pase = parseInt(document.getElementById('pase').value);
    const multaPorHora = parseFloat(document.getElementById('multa-hora').value);
    const resBox = document.getElementById('res-sitio');

    // Validación de entradas
    if (isNaN(inicio) || isNaN(calle) || isNaN(multaPorHora) || inicio < 0 || inicio > 23 || calle < 0 || calle > 23 || multaPorHora < 0) {
        resBox.style.display = 'block';
        resBox.className = "resultado-box estilo-alerta";
        resBox.innerHTML = "⚠️ <strong>Error:</strong> Por favor introduce horarios válidos (de 0 a 23 horas) y un monto de multa positivo.";
        return;
    }

    resBox.style.display = 'block';

    // Caso 1: El ciudadano cuenta con Pase Excepcional de Circulación (Min. de Gobierno)
    if (pase === 1) {
        resBox.className = "resultado-box estilo-ok";
        resBox.innerHTML = `
            <strong>✅ CIRCULACIÓN AUTORIZADA (CON SALVOCONDUCTO):</strong><br>
            • Posees un pase estratégico activo (médico, prensa o servicios esenciales).<br>
            • Puedes circular durante el Toque de Queda, pero es obligatorio portar tu cédula de identidad y credencial física para presentarla ante los controles de las <strong>Fuerzas Armadas y la Policía Boliviana</strong>.
        `;
        return;
    }

    // Lógica de cálculo de horarios de infracción (Asumiendo que el toque de queda termina a las 5:00 AM)
    const finToqueQueda = 5;
    let enInfraccion = false;
    let horasInfraccion = 0;

    if (inicio > finToqueQueda) { 
        // Toque de queda nocturno (Ej. de 22:00 a 05:00)
        if (calle >= inicio || calle < finToqueQueda) {
            enInfraccion = true;
            horasInfraccion = calle >= inicio ? (calle - inicio + 1) : (calle + (24 - inicio) + 1);
        }
    } else {
        // Toque de queda continuo o diurno extraordinario
        if (calle >= inicio && calle < finToqueQueda) {
            enInfraccion = true;
            horasInfraccion = (calle - inicio) + 1;
        }
    }

    // Renderizado de respuestas según el estado de restricción
    if (enInfraccion) {
        const totalMulta = horasInfraccion * multaPorHora;
        resBox.className = "resultado-box estilo-alerta";
        resBox.innerHTML = `
            <strong>🚨 DETENCIÓN POR INFRACCIÓN AL DECRETO DE EXCEPCIÓN:</strong><br>
            • Estás circulando en vía pública sin autorización durante el horario restringido.<br>
            • Tiempo estimado de retención preventiva: <strong>${horasInfraccion} hora(s)</strong>.<br>
            • Sanción económica estipulada: <span style="color:var(--color-danger)"><strong>${totalMulta.toFixed(2)} Bs.</strong></span><br><br>
            ⚠️ <em>Riesgo de Seguridad: Las patrullas militares tienen la potestad de trasladarte a dependencias policiales hasta que concluya el Toque de Queda.</em>
        `;
    } else {
        resBox.className = "resultado-box estilo-ok";
        resBox.innerHTML = `
            <strong>✅ HORARIO PERMITIDO:</strong><br>
            • Te encuentras fuera del rango de restricción del Estado de Sitio.<br>
            • Puedes transitar libremente por el territorio nacional sin riesgo de sanciones económicas o arrestos civiles.
        `;
    }
}