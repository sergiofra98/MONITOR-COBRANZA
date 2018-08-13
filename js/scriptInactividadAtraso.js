$(function () {
    getInactividadAtrazo();
});

function getInactividadAtrazo() {

    $('.tituloTabla').html('');
    $('#tablaAtraso').html('');

    $.getJSON(linkCobranza + "/inactividad_atraso", {},
        function (dataTablas) {
            let append = "";

            $('.tituloTabla').append('<th colspan="13"> Inactividad y Atraso - ' + generarMesString() + '/' + ano + '</th>')
            let i = 0;


            for (i; i < dataTablas.datos.length; i++) {
                switch (i) {
                    case 0: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].actual + '</button></span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 1) + ')">' + dataTablas.datos[i].atraso_30 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 2) + ')">' + dataTablas.datos[i].atraso_60 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 3) + ')">' + dataTablas.datos[i].atraso_90 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 4) + ')">' + dataTablas.datos[i].atraso_120 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 5) + ')">' + dataTablas.datos[i].atraso_150 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 6) + ')">' + dataTablas.datos[i].atraso_180 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 7) + ')">' + dataTablas.datos[i].atraso_210 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 8) + ')">' + dataTablas.datos[i].atraso_240 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 9) + ')">' + dataTablas.datos[i].atraso_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 10) + ')">' + dataTablas.datos[i].atraso_mas_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    case 1: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].actual + '</button></span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 1) + ')">' + dataTablas.datos[i].atraso_30 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 2) + ')">' + dataTablas.datos[i].atraso_60 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 3) + ')">' + dataTablas.datos[i].atraso_90 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 4) + ')">' + dataTablas.datos[i].atraso_120 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 5) + ')">' + dataTablas.datos[i].atraso_150 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 6) + ')">' + dataTablas.datos[i].atraso_180 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 7) + ')">' + dataTablas.datos[i].atraso_210 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 8) + ')">' + dataTablas.datos[i].atraso_240 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 9) + ')">' + dataTablas.datos[i].atraso_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="verde"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 10) + ')">' + dataTablas.datos[i].atraso_mas_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    case 2: case 3: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].actual + '</button></span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 1) + ')">' + dataTablas.datos[i].atraso_30 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 2) + ')">' + dataTablas.datos[i].atraso_60 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 3) + ')">' + dataTablas.datos[i].atraso_90 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 4) + ')">' + dataTablas.datos[i].atraso_120 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 5) + ')">' + dataTablas.datos[i].atraso_150 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 6) + ')">' + dataTablas.datos[i].atraso_180 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 7) + ')">' + dataTablas.datos[i].atraso_210 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 8) + ')">' + dataTablas.datos[i].atraso_240 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 9) + ')">' + dataTablas.datos[i].atraso_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 10) + ')">' + dataTablas.datos[i].atraso_mas_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    case 11: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].actual + '</button></span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 1) + ')">' + dataTablas.datos[i].atraso_30 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 2) + ')">' + dataTablas.datos[i].atraso_60 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 3) + ')">' + dataTablas.datos[i].atraso_90 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 4) + ')">' + dataTablas.datos[i].atraso_120 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 5) + ')">' + dataTablas.datos[i].atraso_150 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 6) + ')">' + dataTablas.datos[i].atraso_180 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 7) + ')">' + dataTablas.datos[i].atraso_210 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 8) + ')">' + dataTablas.datos[i].atraso_240 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 9) + ')">' + dataTablas.datos[i].atraso_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="negro"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 10) + ')">' + dataTablas.datos[i].atraso_mas_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    case 12: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].actual + '</button></span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_30 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_60 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_90 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_120 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_150 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_180 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_210 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_240 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td><span class="num">' + dataTablas.datos[i].atraso_mas_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    default: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].actual + '</button></span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 1) + ')">' + dataTablas.datos[i].atraso_30 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 2) + ')">' + dataTablas.datos[i].atraso_60 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 3) + ')">' + dataTablas.datos[i].atraso_90 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 4) + ')">' + dataTablas.datos[i].atraso_120 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="amarillo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 5) + ')">' + dataTablas.datos[i].atraso_150 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 6) + ')">' + dataTablas.datos[i].atraso_180 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 7) + ')">' + dataTablas.datos[i].atraso_210 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 8) + ')">' + dataTablas.datos[i].atraso_240 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 9) + ')">' + dataTablas.datos[i].atraso_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="rojo"><span class="num"><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 10) + ')">' + dataTablas.datos[i].atraso_mas_270 + '</button></span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                }
            }

            $('#tablaAtraso').append(append)

        })
        .done(function () {
            $('#body, #titulo').css("display", "flex");
            $('#loading').css("display", "none");
        })
        .fail(function (textStatus) {
            $('#loading').css("display", "none");
        });
}

var inactividadEnum = ['actual', '1-29', '30-59', 'a90', 'a120', 'a150', 'a180', 'a210', 'a240', 'a270', 'mas270'];
var atrasoEnum = ['nuncaInstalados', 'conDescuento', 'sp30', 'sp60', 'sp90', 'sp120', 'sp150', 'sp180', 'sp210', 'sp240', 'sp270', 'sp300',];

function generarStringDetalle(i, j) {
    return "'" + atrasoEnum[i] + "' , '" + inactividadEnum[j] + "'"
}


function modalDetalle(tipo, tiempo) {
    $('#tablaModalDetalle').html('');
    $('#loadingDetalle').css("display", "flex");
    $('#tablaDetalle').css("display", "none");
    $("#modalDetalle").modal()
    $('#btnCSV').prop('disabled', true);

    $.getJSON(linkCobranza + "/inactividad_atraso_detalle", { 'tipo': tipo, 'tiempo': tiempo },
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
