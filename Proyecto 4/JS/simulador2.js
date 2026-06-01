/**
 * ==========================================================================
 * LÓGICA DE SIMULACIÓN: CRISIS CAMBIARIA EN IMPORTACIONES (BOLIVIA)
 * ==========================================================================
 */
function simularDolar() {
    // Captura de datos desde el DOM
    const montoDolares = parseFloat(document.getElementById('valor-dolar').value);
    const tipoOficial = parseFloat(document.getElementById('oficial').value);
    const tipoParalelo = parseFloat(document.getElementById('paralelo').value);
    const resBox = document.getElementById('res-dolar');

    // Validación de seguridad para cálculo matemático
    if (isNaN(montoDolares) || isNaN(tipoOficial) || isNaN(tipoParalelo) || montoDolares <= 0 || tipoParalelo <= 0) {
        resBox.style.display = 'block';
        resBox.className = "resultado-box estilo-alerta";
        resBox.innerHTML = "⚠️ <strong>Error:</strong> Por favor ingresa valores válidos y positivos en los campos de dinero.";
        return;
    }

    resBox.style.display = 'block';

    // Operaciones aritméticas financieras
    const gastoOficialBs = montoDolares * tipoOficial;
    const gastoParaleloBs = montoDolares * tipoParalelo;
    const sobrecostoBrechaBs = gastoParaleloBs - gastoOficialBs;
    const porcentajeDesviacion = ((tipoParalelo - tipoOficial) / tipoOficial * 100).toFixed(1);

    // Condicional de alerta según la brecha del mercado informal
    if (tipoParalelo > tipoOficial) {
        resBox.className = "resultado-box estilo-alerta";
        resBox.innerHTML = `
            <strong>📉 ANALÍTICA DE SOBRECOSTO CAMBIARIO:</strong><br>
            • Costo teórico regulado por el BCB: <strong>${gastoOficialBs.toFixed(2)} Bs.</strong><br>
            • Gasto real en el mercado paralelo: <strong>${gastoParaleloBs.toFixed(2)} Bs.</strong><br>
            • Incremento de la brecha de divisas: <span style="color:var(--color-danger)"><strong>+${porcentajeDesviacion}%</strong></span><br>
            <hr style="border-color:var(--border-color); margin: 0.75rem 0;">
            ⚠️ <strong>Pérdida por Devaluación:</strong> Estás gastando <strong style="color:var(--color-danger)">+${sobrecostoBrechaBs.toFixed(2)} Bs. extra</strong> para conseguir los mismos $us ${montoDolares}. <br><br>
            <em>💡 Impacto Comercial: Para evitar pérdidas operativas, este sobrecosto deberá ser transferido al precio final de los productos en los mercados minoristas locales.</em>
        `;
    } else {
        resBox.className = "resultado-box estilo-ok";
        resBox.innerHTML = `
            <strong>✅ EQUILIBRIO CAMBIARIO:</strong><br>
            • El tipo de cambio ingresado no supera la tasa oficial fija de 6.96 Bs.<br>
            • No se registran pérdidas de capital ni sobrecostos inflacionarios en la compra de insumos importados.
        `;
    }
}