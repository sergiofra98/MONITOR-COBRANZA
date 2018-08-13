var graficaCartera = 0;

$(function () {
    getCobranza();
    generarCharts();
});

var cantidadEnum = ['cien', 'noventa', 'sesenta', 'treinta', 'uno', 'porInstalar', 'cero', 'bajasRecuperacion', 'bajas', 'defunciones', 'fraudes'];
var tipoEnum = ['vigente', 'vencida', 'castigoContable', 'castigoFiscal'];

function generarStringDetalle(i, j) {
    return "'" + tipoEnum[i] + "' , '" + cantidadEnum[j] + "'"
}

function getCobranza() {
    $.getJSON(linkCobranza + "/general", {},
        function (dataTablas) {
            console.log(dataTablas)
            var append = ""
            var i = 0;
            var j = 0;

            //CARTERA
            for (i; i < 4; i++) {
                append += '<th>' + dataTablas.cartera_datos[0][i] + '</th>'
            }
            $('#tablaColocacionHead').append(append)
            $('#tablaColocacionPrcHead').append(append)
            $('#tablaColocacionPrcHead').append('<th></th>')

            append = "";

            for (i = 1; i < dataTablas.cartera_datos.length; i++) {
                if (i === dataTablas.cartera_datos.length - 1) {
                    append += '<tr class="obscuro">'
                }
                else {
                    append += '<tr>'
                }

                for (j = 0; j < 4; j++) {
                    append += '<td>' + dataTablas.cartera_datos[i][j] + '</td>'
                }
                append += '</tr>'
            }

            $('#tablaColocacionBody').append(append)

            append = "";

            for (i = 1; i < dataTablas.cartera_datos_pct.length; i++) {
                append += '<tr>'
                for (j = 0; j < 5; j++) {
                    if (j < 4) {
                        append += '<td>' + dataTablas.cartera_datos_pct[i][j] + '</td>'
                    }
                    else {
                        append += '<td class="' + dataTablas.cartera_datos_pct[i][j] + '"></td>'
                    }
                }
                append += '</tr>'
            }

            append += '<tr class="obscuro"><td></td><td>100%</td><td>100%</td><td>100%</td><tr>'


            $('#tablaColocacionPrcBody').append(append)

            append = "";
            append += '<tr> <th>Cartera Contable</th>'

            for (i = 0; i < 3; i++) {
                append += '<td class="obscuro">' + dataTablas.cartera_datos_vigente[i] + '</td>'

            }
            append += '</tr>'

            $('#tablaCarteraContable').append(append)

            append = "";
            append += '<tr><td>' + dataTablas.pct_vs.ACA + '</td><td>' + dataTablas.pct_vs.MA + '</td></tr>'

            $('#VSBody').append(append)

            //CARTERA POR BUCKET
            append = "<th></th>";
            for (i = 0; i < 3; i++) {
                append += '<th>' + dataTablas.cartera_datos_bucket[0][i] + '</th>'
            }
            $('#CarteraHead').append(append)

            append = "";

            for (i = 1; i < dataTablas.cartera_datos_bucket.length; i++) {
                if (i === dataTablas.cartera_datos_bucket.length - 1) {
                    append += '<tr class="obscuro">'
                }
                else {
                    append += '<tr>'
                }
                for (j = 0; j < 4; j++) {
                    append += '<td>' + dataTablas.cartera_datos_bucket[i][j] + '</td>'
                }
                append += '</tr>'
            }

            $('#CarteerBody').append(append)

            //CARTERA POR BUCKET PORCENTAJE
            append = "";
            for (i = 0; i < 3; i++) {
                append += '<th>' + dataTablas.cartera_datos_pct_bucket[0][i] + '</th>'
            }
            append += "<th></th>";
            $('#CarteraPctHead').append(append)

            append = "";

            for (i = 1; i < dataTablas.cartera_datos_pct_bucket.length; i++) {
                append += '<tr>'
                for (j = 1; j < 5; j++) {
                    if (j < 4) {
                        append += '<td>' + dataTablas.cartera_datos_pct_bucket[i][j] + '</td>'
                    }
                    else {
                        append += '<td class="' + dataTablas.cartera_datos_pct_bucket[i][j] + '"></td>'
                    }
                }
                append += '</tr>'
            }
            append += '<tr class="obscuro"><td>100%</td><td>100%</td><td>100%</td><tr>'
            $('#CarteerPctBody').append(append)

            //CARTERA OPERATIVA
            append = ""



            for (i = 0; i < 12; i++) {
                append += "<tr>";

                if (i === 11) {
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa[i].nombre + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa[i].VIGENTE + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa[i].VENCIDA + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa[i].CASTIGO_CONTABLE + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa[i].CASTIGO_FISCAL + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa[i].TOTAL + '</td>'
                }
                else {
                    if (i === 4) {
                        append += '<td class="margenAbajo">' + dataTablas.cartera_datos_operativa[i].nombre + '</td>'
                        append += '<td class="margenAbajo"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa[i].VIGENTE + '</button></td>'
                        append += '<td class="margenAbajo"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(1, i) + ')">' + dataTablas.cartera_datos_operativa[i].CASTIGO_CONTABLE + '</button></td>'
                        append += '<td class="margenAbajo"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(2, i) + ')">' + dataTablas.cartera_datos_operativa[i].CASTIGO_FISCAL + '</button></td>'
                        append += '<td class="margenAbajo"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(3, i) + ')">' + dataTablas.cartera_datos_operativa[i].TOTAL + '</button></td>'
                        append += '<td class="margenAbajo">' + dataTablas.cartera_datos_operativa[i].VIGENTE + '</td>'
                    }
                    else {
                        append += '<td>' + dataTablas.cartera_datos_operativa[i].nombre + '</td>'
                        append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa[i].VIGENTE + '</button></td>'
                        append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(1, i) + ')">' + dataTablas.cartera_datos_operativa[i].VENCIDA + '</button></td>'
                        append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(2, i) + ')">' + dataTablas.cartera_datos_operativa[i].CASTIGO_CONTABLE + '</button></td>'
                        append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(3, i) + ')">' + dataTablas.cartera_datos_operativa[i].CASTIGO_FISCAL + '</button></td>'
                        append += '<td>' + dataTablas.cartera_datos_operativa[i].TOTAL + '</td>'
                    }

                }

                switch (i) {
                    case 0: {
                        append += '<td rowspan="5" style="padding-top: 98px;" class="verde margenAbajo">' + dataTablas.cartera_datos_operativa_totales.pcts + '</td>'
                        append += '<td rowspan="5" style="padding-top: 98px;" class="verde margenAbajo">' + dataTablas.cartera_datos_operativa_totales.pcts_pct + '</td>'
                        break;
                    }
                    case 5: {
                        append += '<td class="amarillo">' + dataTablas.cartera_datos_operativa_totales.instalar + '</td>'
                        append += '<td class="amarillo">' + dataTablas.cartera_datos_operativa_totales.instalar_pct + '</td>'
                        break;
                    }
                    case 6: {
                        append += '<td class="rojo">' + dataTablas.cartera_datos_operativa_totales.cero + '</td>'
                        append += '<td class="rojo">' + dataTablas.cartera_datos_operativa_totales.cero_pct + '</td>'
                        break;
                    }
                    case 7: {
                        append += '<td rowspan="2" style="padding-top: 32px;" class="amarillo">' + dataTablas.cartera_datos_operativa_totales.bajas + '</td>'
                        append += '<td rowspan="2" style="padding-top: 32px;" class="amarillo">' + dataTablas.cartera_datos_operativa_totales.bajas_pct + '</td>'
                        break;
                    }
                    case 9: {
                        append += '<td rowspan="2" style="padding-top: 32px;" class="obscuro">' + dataTablas.cartera_datos_operativa_totales.fraudes_defunciones + '</td>'
                        append += '<td rowspan="2" style="padding-top: 32px;" class="obscuro">' + dataTablas.cartera_datos_operativa_totales.fraudes_defunciones_pct + '</td>'
                        break;
                    }
                    case 11: {
                        append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa[i].TOTAL + '</td>'
                        append += '<td class="obscuro">100%</td>'
                        break;
                    }
                }
                append += "</tr>";
            }

            $('#CarteraOperativaBody').append(append)

            //CARTERA OPERATIVA POR COBRAR
            append = ""

            for (i = 0; i < 12; i++) {
                append += "<tr>";

                if (i === 11) {
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa_cobrar[i].nombre + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa_cobrar[i].VIGENTE + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa_cobrar[i].VENCIDA + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_CONTABLE + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_FISCAL + '</td>'
                    append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa_cobrar[i].TOTAL + '</td>'
                }
                else {
                    if (i === 4) {
                        append += '<td class="margenAbajo">' + dataTablas.cartera_datos_operativa_cobrar[i].nombre + '</td>'
                        append += '<td class="margenAbajo"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].VIGENTE + '</button></td>'
                        append += '<td class="margenAbajo"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].VENCIDA + '</button></td>'
                        append += '<td class="margenAbajo"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_CONTABLE + '</button></td>'
                        append += '<td class="margenAbajo"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_FISCAL + '</button></td>'
                        append += '<td class="margenAbajo">' + dataTablas.cartera_datos_operativa_cobrar[i].TOTAL + '</td>'
                    }
                    else {
                        append += '<td>' + dataTablas.cartera_datos_operativa_cobrar[i].nombre + '</td>'
                        append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].VIGENTE + '</button></td>'
                        append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(1, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].VENCIDA + '</button></td>'
                        append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(2, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_CONTABLE + '</button></td>'
                        append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(3, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_FISCAL + '</button></td>'
                        append += '<td>' + dataTablas.cartera_datos_operativa_cobrar[i].TOTAL + '</td>'
                    }

                }

                switch (i) {
                    case 0: {
                        append += '<td rowspan="5" style="padding-top: 98px;" class="verde margenAbajo">' + dataTablas.cartera_datos_operativa_totales_cobrar.pcts + '</td>'
                        append += '<td rowspan="5" style="padding-top: 98px;" class="verde margenAbajo">' + dataTablas.cartera_datos_operativa_totales_cobrar.pcts_pct + '</td>'
                        break;
                    }
                    case 5: {
                        append += '<td class="amarillo">' + dataTablas.cartera_datos_operativa_totales_cobrar.instalar + '</td>'
                        append += '<td class="amarillo">' + dataTablas.cartera_datos_operativa_totales_cobrar.instalar_pct + '</td>'
                        break;
                    }
                    case 6: {
                        append += '<td class="rojo">' + dataTablas.cartera_datos_operativa_totales_cobrar.cero + '</td>'
                        append += '<td class="rojo">' + dataTablas.cartera_datos_operativa_totales_cobrar.cero_pct + '</td>'
                        break;
                    }
                    case 7: {
                        append += '<td rowspan="2" style="padding-top: 32px;" class="amarillo">' + dataTablas.cartera_datos_operativa_totales_cobrar.bajas + '</td>'
                        append += '<td rowspan="2" style="padding-top: 32px;" class="amarillo">' + dataTablas.cartera_datos_operativa_totales_cobrar.bajas_pct + '</td>'
                        break;
                    }
                    case 9: {
                        append += '<td rowspan="2" style="padding-top: 32px;" class="obscuro">' + dataTablas.cartera_datos_operativa_totales_cobrar.fraudes_defunciones + '</td>'
                        append += '<td rowspan="2" style="padding-top: 32px;" class="obscuro">' + dataTablas.cartera_datos_operativa_totales_cobrar.fraudes_defunciones_pct + '</td>'
                        break;
                    }
                    case 11: {
                        append += '<td class="obscuro">' + dataTablas.cartera_datos_operativa[i].TOTAL + '</td>'
                        append += '<td class="obscuro">100%</td>'
                        break;
                    }
                }
                append += "</tr>";
            }

            $('#CarteraOperativaCobrarBody').append(append)

            //NEVER PAID

            append = "<th></th>"

            for (i = 1; i < 4; i++) {
                append += '<th>' + dataTablas.cartera_datos_never_paid[0][i] + '</th>'
            }

            $('#NeverPaidHead').append(append)
            $('#NeverPaidCredHead').append(append)

            append = ""

            for (i = 1; i < 11; i++) {
                if (i === 10) {
                    append += '<tr class="obscuro">'
                }
                else {
                    append += '<tr>'
                }

                for (j = 0; j < 4; j++) {
                    append += '<td>' + dataTablas.cartera_datos_never_paid[i][j] + '</td>'
                }
                append += '</tr>'
            }
            $('#NeverPaidBody').append(append)

            append = ""
            for (i = 1; i < 11; i++) {
                if (i === 10) {
                    append += '<tr class="obscuro">'
                }
                else {
                    append += '<tr>'
                }

                for (j = 0; j < 4; j++) {
                    append += '<td>' + dataTablas.cartera_datos_never_paid_creditos[i][j] + '</td>'
                }
                append += '</tr>'
            }
            $('#NeverPaidCredBody').append(append)

            generarCharts(
                [dataTablas.cartera_datos[0][1], dataTablas.cartera_datos[0][2], dataTablas.cartera_datos[0][3]],
                [parseFloat(dataTablas.cartera_datos_pct[1][1].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[2][1].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[3][1].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[4][1].replace(/%/g, ''))],
                [parseFloat(dataTablas.cartera_datos_pct[1][2].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[2][2].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[3][2].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[4][2].replace(/%/g, ''))],
                [parseFloat(dataTablas.cartera_datos_pct[1][3].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[2][3].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[3][3].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[4][3].replace(/%/g, ''))]
            )

        })
        .done(function () {
            $('#body, #titulo').css("display", "flex");
            $('#loading').css("display", "none");
        })
        .fail(function (textStatus) {
            $('#loading').css("display", "none");
        });
}

function modalDetalle(tipo, tiempo) {
    $('#inactividad_atraso_detalle').html('');

    $.getJSON(linkCobranza + "/general", {},
        function (data) {
            append = "";
            for (let i = 0; i < data.length; i++) {
                append += '<tr>'
                append += '<td>' + data[i].fechaDisp + '</td>'
                append += '<td>' + data[i].credito + '</td>'
                append += '<td>' + data[i].corresponsal + '</td>'
                append += '<td>' + data[i].diasVencidos + '</td>'
                append += '<td>' + data[i].estatusContable + '</td>'
                append += '<td>' + data[i].estatusOperativo + '</td>'
                append += '<td>' + data[i].saldo + '</td>'
                append += '<td>' + data[i].signoInt + '</td>'
                append += '<td>' + data[i].fechaUltimoPago + '</td>'
                append += '</tr>'

            }
        })
        .done(function () {
            $('#tablaModalDetalle').append(append);
            $("#modalDetalle").modal()

            $('#body, #titulo').css("display", "flex");
            $('#loading').css("display", "none");
        })
        .fail(function (textStatus) {
            $('#loading').css("display", "none");
        });


}

function generarCharts(meses, mes1, mes2, mes3) {
    console.log(mes1)
    console.log(mes2)
    console.log(mes3)
    graficaCartera = new Chart($("#canvasCartera"), {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [
                {
                    backgroundColor: ["#a50000", "#ff0000", "#f8f879", "#55c555"],
                    data: [mes1[0], mes1[1], mes1[2], mes1[3]]
                },
                {
                    backgroundColor: ["#a50000", "#ff0000", "#f8f879", "#55c555"],
                    data: [mes2[0], mes2[1], mes2[2], mes2[3]]
                },
                {
                    backgroundColor: ["#a50000", "#ff0000", "#f8f879", "#55c555"],
                    data: [mes3[0], mes3[1], mes3[2], mes3[3]]
                },
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Cartera'
            },
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]

            }
        }
    });

    console.log(graficaCartera)
}

function descargarDetalle() {

}