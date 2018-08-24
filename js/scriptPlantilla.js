var graficaCartera = 0;
var graficaCarteraBuckets = 0;

$(function () {
    getCobranza();
    generarCharts();
});

var cantidadEnum = ['cien', 'noventa', 'sesenta', 'treinta', 'uno', 'porInstalar', 'cero', 'bajasRecuperacion', 'bajas', 'defunciones', 'fraudes'];
var tipoEnum = ['vigente', 'vencida', 'castigoContable', 'castigoFiscal'];

var mesEnum = ['mes01', 'mes02', 'mes03'];
var anioEnum = ['0', '1', '30', '60', '90', '120', '150', '180', '365']

function generarStringDetalle(i, j) {
    return "'" + tipoEnum[i] + "' , '" + cantidadEnum[j] + "'"
}

function generarStringDetalleNeverPaid(i, j) {
    return "'" + mesEnum[i] + "' , '" + anioEnum[j] + "'"
}

function getCobranza() {
    $.getJSON(linkCobranza + "/general", {},
        function (dataTablas) {
            var append = ""
            var i = 0;
            var j = 0;

            //CARTERA
            for (i; i < 4; i++) {
                append += '<th>' + dataTablas.cartera_datos[0][i] + '</th>'
            }
            for (i = 1; i < 4; i++) {
                append += '<th>' + dataTablas.cartera_datos[0][i] + '</th>'
            }
            append += '<th></th>'

            $('.tablaCarteraHead').append(append)

            append = "";

            for (i = 1; i < dataTablas.cartera_datos.length; i++) {
                append += '<tr>'

                for (j = 0; j < 4; j++) {
                    append += '<td>' + dataTablas.cartera_datos[i][j] + '</td>'
                }

                if (i === 5) {
                    append += '<td class="pct">100%</td><td class="pct"> 100%</td><td class="pct">100%</td></tr>';
                    break;
                }

                for (j = 1; j < 5; j++) {
                    if (j < 4) {
                        append += '<td class="pct">' + dataTablas.cartera_datos_pct[i][j] + '</td>'
                    }
                    else {
                        append += '<td class="pct ' + dataTablas.cartera_datos_pct[i][j] + '"></td>'
                    }
                }
                append += '</tr>'
            }

            $('#tablaColocacionBody').append(append)

            append = "";
            append += '<tr><th>Cartera Contable</th>'

            for (i = 0; i < 3; i++) {
                append += '<td>' + dataTablas.cartera_datos_vigente[i] + '</td>'

            }
            append += '</tr>'

            $('#tablaCarteraContable').append(append)

            //INSERTAR ICV
            append = ''

            append += '<tr><th></th>'
            for (j = 1; j < 4; j++) {
                append += '<th>' + dataTablas.icv[0][j] + '</th>'
            }
            append += '</tr>'


            $('#tablaICVHead').append(append)
            $('#tablaCarteraContableHead').append(append);

            append = ''

            for (i = 1; i < 3; i++) {
                append += '<tr>'
                append += '<th>' + dataTablas.icv[i][0] + '</th>'

                for (j = 1; j < 4; j++) {
                    append += '<td>' + dataTablas.icv[i][j] + '</td>'
                }
                append += '</tr>'
            }


            $('#tablaICV').append(append)

            append = "";
            append += '<tr><td>' + dataTablas.pct_vs.ACA + '</td><td>' + dataTablas.pct_vs.MA + '</td>/tr>'

            $('#VSBody').append(append)

            //CARTERA POR BUCKET
            append = "<th></th>";
            for (i = 0; i < 3; i++) {
                append += '<th >' + dataTablas.cartera_datos_bucket[0][i] + '</th>'
            }
            for (i = 0; i < 3; i++) {
                append += '<th>' + dataTablas.cartera_datos_pct_bucket[0][i] + '</th>'
            }
            append += "<th></th>";
            $('#CarteraHead').append(append)

            append = "";

            for (i = 1; i < dataTablas.cartera_datos_bucket.length; i++) {
                append += '<tr>'

                for (j = 0; j < 4; j++) {
                    append += '<td>' + dataTablas.cartera_datos_bucket[i][j] + '</td>'
                }

                if (i == 10) {
                    append += '<td class="pct">100%</td><td class="pct">100%</td><td class="pct">100%</td>'
                    break;
                }

                for (j = 1; j < 5; j++) {
                    if (j < 4) {
                        append += '<td class="pct">' + dataTablas.cartera_datos_pct_bucket[i][j] + '</td>'
                    }
                    else {
                        append += '<td class=" pct ' + dataTablas.cartera_datos_pct_bucket[i][j] + '"></td>'
                    }
                }

                append += '</tr>'
            }

            $('#CarteraBody').append(append)

            //CARTERA OPERATIVA
            append = ""

            for (i = 0; i < 12; i++) {
                append += "<tr>";

                if (i === 11) {
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].nombre + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].VIGENTE + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].VENCIDA + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].CASTIGO_CONTABLE + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].CASTIGO_FISCAL + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].TOTAL + '</td>'
                }
                else {
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].nombre + '</td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa[i].VIGENTE + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(1, i) + ')">' + dataTablas.cartera_datos_operativa[i].VENCIDA + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(2, i) + ')">' + dataTablas.cartera_datos_operativa[i].CASTIGO_CONTABLE + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(3, i) + ')">' + dataTablas.cartera_datos_operativa[i].CASTIGO_FISCAL + '</button></td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].TOTAL + '</td>'
                }

                switch (i) {
                    case 0: {
                        append += '<td rowspan="5" style="padding-top: 98px; border-bottom: #535353 3px solid !important;" class="verde">' + dataTablas.cartera_datos_operativa_totales.pcts + '</td>'
                        append += '<td rowspan="5" style="padding-top: 98px; border-bottom: #535353 3px solid !important;" class="verde">' + dataTablas.cartera_datos_operativa_totales.pcts_pct + '</td>'
                        break;
                    }
                    case 5: {
                        append += '<td class="amarillo">' + dataTablas.cartera_datos_operativa_totales.instalar + '</td>'
                        append += '<td class="amarillo">' + dataTablas.cartera_datos_operativa_totales.instalar_pct + '</td>'
                        break;
                    }
                    case 6: {
                        append += '<td style="padding-top: 32px;" rowspan="2" class="amarillo">' + dataTablas.cartera_datos_operativa_totales.cero + '</td>'
                        append += '<td style="padding-top: 32px;" rowspan="2" class="amarillo">' + dataTablas.cartera_datos_operativa_totales.cero_pct + '</td>'
                        break;
                    }
                    case 8: {
                        append += '<td class="rojo">' + dataTablas.cartera_datos_operativa_totales.bajas + '</td>'
                        append += '<td class="rojo">' + dataTablas.cartera_datos_operativa_totales.bajas_pct + '</td>'
                        break;
                    }
                    case 9: {
                        append += '<td rowspan="2" style="padding-top: 32px;" class="rojo">' + dataTablas.cartera_datos_operativa_totales.fraudes_defunciones + '</td>'
                        append += '<td rowspan="2" style="padding-top: 32px;" class="rojo">' + dataTablas.cartera_datos_operativa_totales.fraudes_defunciones_pct + '</td>'
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


            //CARTERA OPERATIVA
            append = ""

            for (i = 0; i < 12; i++) {
                append += "<tr>";


                if (i === 11) {
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].nombre + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa_cobrar[i].VIGENTE + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa_cobrar[i].VENCIDA + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_CONTABLE + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_FISCAL + '</td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa_cobrar[i].TOTAL + '</td>'
                }
                else {
                    append += '<td>' + dataTablas.cartera_datos_operativa[i].nombre + '</td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(0, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].VIGENTE + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(1, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].VENCIDA + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(2, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_CONTABLE + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(3, i) + ')">' + dataTablas.cartera_datos_operativa_cobrar[i].CASTIGO_FISCAL + '</button></td>'
                    append += '<td>' + dataTablas.cartera_datos_operativa_cobrar[i].TOTAL + '</td>'
                }

                switch (i) {
                    case 0: {
                        append += '<td rowspan="5" style="padding-top: 98px; border-bottom: #535353 3px solid !important;" class="verde">' + dataTablas.cartera_datos_operativa_totales_cobrar.pcts + '</td>'
                        append += '<td rowspan="5" style="padding-top: 98px; border-bottom: #535353 3px solid !important;" class="verde">' + dataTablas.cartera_datos_operativa_totales_cobrar.pcts_pct + '</td>'
                        break;
                    }
                    case 5: {
                        append += '<td class="amarillo">' + dataTablas.cartera_datos_operativa_totales_cobrar.instalar + '</td>'
                        append += '<td class="amarillo">' + dataTablas.cartera_datos_operativa_totales_cobrar.instalar_pct + '</td>'
                        break;
                    }
                    case 6: {
                        append += '<td style="padding-top: 32px;" rowspan="2" class="amarillo">' + dataTablas.cartera_datos_operativa_totales_cobrar.cero + '</td>'
                        append += '<td style="padding-top: 32px;" rowspan="2" class="amarillo">' + dataTablas.cartera_datos_operativa_totales_cobrar.cero_pct + '</td>'
                        break;
                    }
                    case 8: {
                        append += '<td class="rojo">' + dataTablas.cartera_datos_operativa_totales_cobrar.bajas + '</td>'
                        append += '<td class="rojo">' + dataTablas.cartera_datos_operativa_totales_cobrar.bajas_pct + '</td>'
                        break;
                    }
                    case 9: {
                        append += '<td rowspan="2" style="padding-top: 32px;" class="rojo">' + dataTablas.cartera_datos_operativa_totales_cobrar.fraudes_defunciones + '</td>'
                        append += '<td rowspan="2" style="padding-top: 32px;" class="rojo">' + dataTablas.cartera_datos_operativa_totales_cobrar.fraudes_defunciones_pct + '</td>'
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

                append += '<tr>'

                if (i === 10) {
                    for (j = 0; j < 4; j++) {
                        append += '<td>' + dataTablas.cartera_datos_never_paid[i][j] + '</td>'
                    }
                }
                else {
                    for (j = 0; j < 4; j++) {
                        if (j == 0) {
                            append += '<td>' + dataTablas.cartera_datos_never_paid[i][j] + '</td>'
                        }
                        else {
                            append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalleNeverPaid(j - 1, i - 1) + ')">' + dataTablas.cartera_datos_never_paid[i][j] + '</button></td>'
                        }
                    }
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

            append = "";

            for(i = 0; i < 4; i++){
                append += '<td>' + dataTablas.estimacion_preventiva[0][i] + '</td>'
            }

            $('#EstimacionPrevHead').append(append)

            append = '';

            for(i = 1; i < 5; i++){
                append += '<tr>'
                for(j = 0; j < 4; j++){
                    append += '<td>' + dataTablas.estimacion_preventiva[i][j] + '</td>'
                }
                append += '</tr>'
            }

            $('#EstimacionPrevBody').append(append)

            if (graficaCartera) {
                graficaCartera.destroy();
            }

            console.log(dataTablas);
            generarCharts(
                [dataTablas.cartera_datos[0][1], dataTablas.cartera_datos[0][2], dataTablas.cartera_datos[0][3]],
                [parseFloat(dataTablas.cartera_datos_pct[1][1].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[2][1].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[3][1].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[4][1].replace(/%/g, ''))],
                [parseFloat(dataTablas.cartera_datos_pct[1][2].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[2][2].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[3][2].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[4][2].replace(/%/g, ''))],
                [parseFloat(dataTablas.cartera_datos_pct[1][3].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[2][3].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[3][3].replace(/%/g, '')), parseFloat(dataTablas.cartera_datos_pct[4][3].replace(/%/g, ''))],
                '#canvasCartera',
                'CARTERA',
                ["CASTIGO FISCAL", "CASTIGO CONTABLE", "VENCIDA", "VIGENTE"],
                false
            );

            generarCharts(
                [dataTablas.cartera_datos[0][1], dataTablas.cartera_datos[0][2], dataTablas.cartera_datos[0][3]],
                [parseFloat(dataTablas.cartera_datos_pct_bucket[1][1].replace(/%/g, '')).toFixed(2) - 0.1, (parseFloat(dataTablas.cartera_datos_pct_bucket[2][1].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[3][1].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[4][1].replace(/%/g, ''))).toFixed(2), (parseFloat(dataTablas.cartera_datos_pct_bucket[5][1].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[6][1].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[7][1].replace(/%/g, ''))).toFixed(2), (parseFloat(dataTablas.cartera_datos_pct_bucket[8][1].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[9][1].replace(/%/g, ''))).toFixed(2)],
                [parseFloat(dataTablas.cartera_datos_pct_bucket[1][2].replace(/%/g, '')).toFixed(2) - 0.1, (parseFloat(dataTablas.cartera_datos_pct_bucket[2][2].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[3][2].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[4][2].replace(/%/g, ''))).toFixed(2), (parseFloat(dataTablas.cartera_datos_pct_bucket[5][2].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[6][2].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[7][2].replace(/%/g, ''))).toFixed(2), (parseFloat(dataTablas.cartera_datos_pct_bucket[8][2].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[9][2].replace(/%/g, ''))).toFixed(2)],
                [parseFloat(dataTablas.cartera_datos_pct_bucket[1][3].replace(/%/g, '')).toFixed(2) - 0.1, (parseFloat(dataTablas.cartera_datos_pct_bucket[2][3].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[3][3].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[4][3].replace(/%/g, ''))).toFixed(2), (parseFloat(dataTablas.cartera_datos_pct_bucket[5][3].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[6][3].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[7][3].replace(/%/g, ''))).toFixed(2), (parseFloat(dataTablas.cartera_datos_pct_bucket[8][3].replace(/%/g, '')) + parseFloat(dataTablas.cartera_datos_pct_bucket[9][3].replace(/%/g, ''))).toFixed(2)],
                '#canvasCarteraBuckets',
                'CARTERA POR BUCKETS',
                ["180+", "90-179", "1-89", "0"],
                true
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
    $('#tablaModalDetalle').html('');
    $('#loadingDetalle').css("display", "flex");
    $('#tablaDetalle').css("display", "none");
    $("#modalDetalle").modal()
    $('#btnCSV').prop('disabled', true);

    $.getJSON(linkCobranza + "/general_detalle", { 'tipo': tipo, 'tiempo': tiempo },
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

            $('#loadingDetalle').css("display", "none");
            $('#tablaDetalle').css("display", "flex");
            $('#btnCSV').prop('disabled', false);
        })
        .fail(function (textStatus) {
            $('#loading').css("display", "none");
        });


}

function generarCharts(meses, mes1, mes2, mes3, grafica, titulo, textos,buckets) {
    if(buckets){
        graficaCartera = new Chart($(grafica), {
            type: 'bar',
            data: {
                labels: meses,
                datasets: [
                    {
                        label: textos[3],
                        backgroundColor: ["#55c555", "#55c555", "#55c555"],
                        data: [mes1[0], mes2[0], mes3[0]],
                        stack: 4
                    },
                    {
                        label: textos[2],
                        backgroundColor: ["#ff9000", "#ff9000", "#ff9000"],
                        data: [mes1[1], mes2[1], mes3[1]],
                        stack: 4
                    },
                    {
                        label: textos[1],
                        backgroundColor: ["#ff0000", "#ff0000", "#ff0000"],
                        data: [mes1[2], mes2[2], mes3[2]],
                        stack: 4
                    },
                    {
                        label: textos[0],
                        backgroundColor: ["#a50000", "#a50000", "#a50000"],
                        data: [mes1[3], mes2[3], mes3[3]],
                        stack: 4
                    }           
                ]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: true,
                    text: titulo
                },
                legend: {
                    position: "bottom"
                },
                tooltips: {
                    mode: 'label',
                    label: 'mylabel',
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return tooltipItem.yLabel + '%';
                        },
                    }
                },
                scales: {
                    xAxes: [{
                        barPercentage: 0.6
                    }],
                    yAxes: [
                        {
                            ticks: {
                                callback: function (label) {
                                    return label + '%';
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Porcentaje'
                            },
                        }
                    ]
                }
            }
        });
        return;
    }
    graficaCartera = new Chart($(grafica), {
        type: 'bar',
        data: {
            labels: meses,
            datasets: [
                {
                    label: textos[0],
                    backgroundColor: ["#a50000", "#a50000", "#a50000"],
                    data: [mes1[3], mes2[3], mes3[3]],
                    stack: 4
                },
                {
                    label: textos[1],
                    backgroundColor: ["#ff0000", "#ff0000", "#ff0000"],
                    data: [mes1[2], mes2[2], mes3[2]],
                    stack: 4
                },
                {
                    label: textos[2],
                    backgroundColor: ["#ff9000", "#ff9000", "#ff9000"],
                    data: [mes1[1], mes2[1], mes3[1]],
                    stack: 4
                },
                {
                    label: textos[3],
                    backgroundColor: ["#55c555", "#55c555", "#55c555"],
                    data: [mes1[0], mes2[0], mes3[0]],
                    stack: 4
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
                display: true,
                text: titulo
            },
            legend: {
                position: "bottom"
            },
            tooltips: {
                mode: 'label',
                label: 'mylabel',
                callbacks: {
                    label: function (tooltipItem, data) {
                        return tooltipItem.yLabel + '%';
                    },
                }
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.6
                }],
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            steps: 10,
                            stepValue: 5,
                            max: 30,
                            callback: function (label) {
                                return label + '%';
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Porcentaje'
                        },
                    }
                ]
            }
        }
    });
}

function descargarDetalle() {

}