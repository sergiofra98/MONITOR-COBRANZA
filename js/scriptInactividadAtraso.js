$(function () {
    getInactividadAtrazo();
});

function getInactividadAtrazo() {

    $('.tituloTabla').html('');
    $('#tablaAtraso').html('');

    $.getJSON(linkCobranza + "/inactividad_atraso", {},
        function (dataTablas) {
            var append = "";

            $('.tituloTabla').append('<th colspan="13"> Inactividad y Atraso - ' + generarMesString() + '/' + ano + '</th>')
            let i = 0;


            for (i; i < dataTablas.datos.length; i++) {

                if(i === 12){
                    append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_30 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_60 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_90 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_120 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_150 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_180 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_210 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_240 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_270 + '</td>'
                    append += '<td>' + dataTablas.datos[i].atraso_mas_270 + '</td>'
                    append += '<td>' + dataTablas.datos[i].total + '</td></tr>'
                }
                else{
                    append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].actual + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_30 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_60 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_90 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_120 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_150 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_180 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_210 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_240 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_270 + '</button></td>'
                    append += '<td><button class="btn btn-link" onclick="modalDetalle(' + generarStringDetalle(i, 0) + ')">' + dataTablas.datos[i].atraso_mas_270 + '</button></td>'
                    append += '<td>' + dataTablas.datos[i].total + '</td></tr>'    
                }
            }

            $('#tablaAtraso').append(append)

            append = ''

            for (i = 0; i < dataTablas.datos.length; i++) {
                append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].actual + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_30 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_60 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_90 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_120 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_150 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_180 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_210 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_240 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_270 + '</td>'
                append += '<td>' + dataTablas.porcentajes[i].atraso_mas_270 + '</td>'
                append += '<td>' + dataTablas.datos[i].total + '</td></tr>'
            }

            $('#tablaAtrasoPCT').append(append)

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
