/**
 * 1. CONTROL DE PESTAÑAS (TABS INTERACTIVAS)
 */
function cambiarPestaña(idObjetivo) {
    // Buscar todos los contenidos de pestañas y remover clase active
    const contenidos = document.querySelectorAll('.tab-content');
    contenidos.forEach(content => content.classList.remove('active'));

    // Buscar todos los botones de las pestañas y remover clase active
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));

    // Activar el contenido seleccionado
    document.getElementById(idObjetivo).classList.add('active');

    // Activar el botón correspondiente comparando el texto o evento
    event.currentTarget.classList.add('active');
}

/**
 * FUNCIÓN AUXILIAR: Renderizar y validar datos en pantalla
 */
function desplegarResultado(nodo, mensaje, esCritico) {
    nodo.innerHTML = mensaje;
    nodo.style.display = "block";
    nodo.className = esCritico ? "resultado-box estilo-alerta" : "resultado-box estilo-ok";
}

/**
 * 2. ESCENARIO A: CARBURANTE (SURTIDORES BOLIVIA)
 */
function simularCarburante() {
    let reserva = parseFloat(document.getElementById('carb-reserva').value);
    let consumo = parseFloat(document.getElementById('carb-consumo').value);
    let reabasto = parseFloat(document.getElementById('carb-reabasto').value);
    let critico = parseFloat(document.getElementById('carb-critico').value);
    let resBox = document.getElementById('res-carburante');

    if(isNaN(reserva) || isNaN(consumo) || isNaN(reabasto) || isNaN(critico)) {
        desplegarResultado(resBox, "<strong>Error:</strong> Complete todos los campos numéricos.", true);
        return;
    }

    let deficitDiario = consumo - reabasto;
    if(deficitDiario <= 0) {
        desplegarResultado(resBox, "La estación se mantiene estable. Las cisternas de YPFB cubren la demanda diaria boliviana.", false);
        return;
    }

    let diasUtiles = (reserva - critico) / deficitDiario;

    if(diasUtiles <= 0) {
        desplegarResultado(resBox, "⚠️ ¡ALERTA CRÍTICA! El surtidor ya se encuentra por debajo del nivel de reserva mínimo. Filas kilométricas reportadas.", true);
    } else {
        desplegarResultado(resBox, `<strong>Resultado:</strong> El suministro durará aproximadamente <b>${diasUtiles.toFixed(2)} días</b> antes de entrar en estado crítico de desabastecimiento.`, diasUtiles < 3);
    }
}

/**
 * 3. ESCENARIO B: ALIMENTOS (MERCADOS CENTRALES)
 */
function simularAlimentos() {
    let pAnterior = parseFloat(document.getElementById('ali-anterior').value);
    let pActual = parseFloat(document.getElementById('ali-actual').value);
    let cantidad = parseFloat(document.getElementById('ali-cantidad').value);
    let semanas = parseFloat(document.getElementById('ali-semanas').value);
    let resBox = document.getElementById('res-alimentos');

    if(isNaN(pAnterior) || isNaN(pActual) || isNaN(cantidad) || isNaN(semanas)) {
        desplegarResultado(resBox, "<strong>Error:</strong> Ingrese valores válidos.", true);
        return;
    }

    let incremento = pActual - pAnterior;
    let porcentaje = (incremento / pAnterior) * 100;
    let gastoMensualExtra = incremento * cantidad * semanas;

    let msg = `<strong>Incremento por Unidad:</strong> ${incremento.toFixed(2)} Bs.<br>
               <strong>Porcentaje de Inflación:</strong> ${porcentaje.toFixed(2)}%<br>
               <strong>Gasto Adicional Total:</strong> El impacto extra en el presupuesto familiar es de <b>${gastoMensualExtra.toFixed(2)} Bs.</b>`;
    
    desplegarResultado(resBox, msg, porcentaje > 15);
}

/**
 * 4. ESCENARIO C: TRANSPORTE (BLOQUEOS Y DESVÍOS)
 */
function simularTransporte() {
    let normal = parseFloat(document.getElementById('trans-normal').value);
    let desvio = parseFloat(document.getElementById('trans-desvio').value);
    let costoKm = parseFloat(document.getElementById('trans-costo-km').value);
    let viajes = parseFloat(document.getElementById('trans-viajes').value);
    let resBox = document.getElementById('res-transporte');

    if(isNaN(normal) || isNaN(desvio) || costoKm <= 0) {
        desplegarResultado(resBox, "Complete campos con coherencia lógica.", true);
        return;
    }

    let costoAdicionalSemanal = (desvio - normal) * costoKm * viajes;
    desplegarResultado(resBox, `<strong>Impacto del Bloqueo:</strong> Tomar desvíos alternos representa un costo operativo adicional de <b>${costoAdicionalSemanal.toFixed(2)} Bs. por semana</b> para el transportista.`, costoAdicionalSemanal > 50);
}

/**
 * 5. ESCENARIO D: COMPRAS Y PRESUPUESTO
 */
function simularCompras() {
    let presupuesto = parseFloat(document.getElementById('comp-presupuesto').value);
    let total = parseFloat(document.getElementById('comp-total').value);
    let resBox = document.getElementById('res-compras');

    let diferencia = presupuesto - total;
    if(diferencia >= 0) {
        desplegarResultado(resBox, `<strong>Presupuesto Suficiente:</strong> Compra aprobada. Le resta un saldo de <b>${diferencia.toFixed(2)} Bs.</b>`, false);
    } else {
        desplegarResultado(resBox, `<strong>Presupuesto Insuficiente:</strong> Faltan <b>${Math.abs(diferencia).toFixed(2)} Bs.</b> para cubrir la lista básica del mercado actual.`, true);
    }
}

/**
 * 6. ESCENARIO E: RUMOR DE ESCASEZ (PSICOSIS COLECTIVA)
 */
function simularRumor() {
    let dNormal = parseFloat(document.getElementById('rum-demanda').value);
    let porcentaje = parseFloat(document.getElementById('rum-porcentaje').value);
    let stock = parseFloat(document.getElementById('rum-stock').value);
    let resBox = document.getElementById('res-rumor');

    let nuevaDemanda = dNormal + (dNormal * (porcentaje / 100));
    let stockRestante = stock - nuevaDemanda;

    if(stockRestante >= 0) {
        desplegarResultado(resBox, `<strong>Análisis:</strong> La nueva demanda es de ${nuevaDemanda} unidades. El stock resiste, quedando ${stockRestante} unidades disponibles.`, false);
    } else {
        desplegarResultado(resBox, `<strong>⚠️ ALERTA DE AGOTAMIENTO:</strong> La psicosis y compras por pánico elevaron la demanda a ${nuevaDemanda} unidades, superando el stock por <b>${Math.abs(stockRestante)} unidades</b>. Tiendas desabastecidas.`, true);
    }
}

/**
 * 7. ESCENARIO F: PÉRDIDA DEL PODER ADQUISITIVO
 */
function simularPoderAdquisitivo() {
    let ingreso = parseFloat(document.getElementById('pod-ingreso').value);
    let gastoAnt = parseFloat(document.getElementById('pod-gasto-ant').value);
    let gastoAct = parseFloat(document.getElementById('pod-gasto-act').value);
    let resBox = document.getElementById('res-poder');

    let incrementoGasto = gastoAct - gastoAnt;
    let perdidaPoder = (incrementoGasto / ingreso) * 100;

    desplegarResultado(resBox, `<strong>Afectación Directa:</strong> El costo de vida se incrementó en ${incrementoGasto} Bs. Esto representa una <b>pérdida del ${perdidaPoder.toFixed(2)}% del poder adquisitivo</b> familiar con el mismo salario fijo.`, perdidaPoder > 10);
}

/**
 * 8. ALGORITMO ESTRUCTURAL: SERIE DE FIBONACCI
 */
function generarFibonacci() {
    let limite = parseInt(document.getElementById('fibo-limite').value);
    let resBox = document.getElementById('res-fibo');

    if (isNaN(limite) || limite < 1) {
        desplegarResultado(resBox, "Por favor introduzca un término válido mayor a 0.", true);
        return;
    }

    let secuencia = [0, 1];
    for (let i = 2; i < limite; i++) {
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }

    if (limite === 1) secuencia = [0];

    desplegarResultado(resBox, `<strong>Secuencia Procesada (${limite} elementos):</strong> <br><span style="word-break: break-all;">${secuencia.join(' → ')}</span>`, false);
}