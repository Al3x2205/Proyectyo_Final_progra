/**
 * ==========================================================================
 * LÓGICA DE SIMULACIÓN: LOGÍSTICA DE FILAS Y CUPOS DE COMBUSTIBLE
 * ==========================================================================
 */
function simularFila() {
    // Captura de datos desde el DOM
    const autosDelante = parseInt(document.getElementById('autos').value);
    const cupoMaximo = parseFloat(document.getElementById('cupo').value);
    const stockSurtidor = parseFloat(document.getElementById('stock').value);
    const tiempoAtencion = parseFloat(document.getElementById('tiempo').value);
    const resBox = document.getElementById('res-fila');

    // Validación de entradas numéricas
    if (isNaN(autosDelante) || isNaN(cupoMaximo) || isNaN(stockSurtidor) || isNaN(tiempoAtencion) || autosDelante < 0 || cupoMaximo <= 0 || stockSurtidor < 0 || tiempoAtencion <= 0) {
        resBox.style.display = 'block';
        resBox.className = "resultado-box estilo-alerta";
        resBox.innerHTML = "⚠️ <strong>Error:</strong> Por favor verifica que todos los datos ingresados sean mayores a cero.";
        return;
    }

    resBox.style.display = 'block';

    const litrosRequeridosFila = autosDelante * cupoMaximo;
    const tiempoEsperaMinutos = autosDelante * tiempoAtencion;
    const tiempoEsperaHoras = (tiempoEsperaMinutos / 60).toFixed(1);

    // Evaluación de abastecimiento
    if (litrosRequeridosFila >= stockSurtidor) {
        // Alerta: El combustible se acaba antes de llegar a su turno
        const autosQueLogranCargar = Math.floor(stockSurtidor / cupoMaximo);
        resBox.className = "resultado-box estilo-alerta";
        resBox.innerHTML = `
            <strong>📉 COMBUSTIBLE AGOTADO ANTES DE TU TURNO:</strong><br>
            • El volumen total en tanques del surtidor solo alcanzará para abastecer a los primeros <strong>${autosQueLogranCargar} autos</strong> de la fila.<br>
            • Tu posición actual es la número: <strong>${autosDelante + 1}</strong>.<br><br>
            🛑 <strong>Diagnóstico:</strong> No se recomienda continuar en la fila. El stock de YPFB se vaciará antes de que llegues a la bomba. Pérdida inútil de tiempo.
        `;
    } else {
        // Éxito: Hay combustible suficiente en reserva
        const litrosRestantes = stockSurtidor - litrosRequeridosFila;
        resBox.className = "resultado-box estilo-ok";
        resBox.innerHTML = `
            <strong>⛽ ABASTECIMIENTO PROBABLE Y EXITOSO:</strong><br>
            • Tiempo aproximado de espera en cola: <strong>${tiempoEsperaHoras} horas</strong> (${tiempoEsperaMinutos} minutos).<br>
            • Volumen estimado de holgura en el surtidor al llegar tu turno: <strong>${litrosRestantes.toFixed(1)} Litros</strong>.<br><br>
            💡 <em>Consejo: Es viable mantener la posición en la fila; el stock actual soporta la demanda del cupo/B-SISA de los vehículos que te preceden.</em>
        `;
    }
}