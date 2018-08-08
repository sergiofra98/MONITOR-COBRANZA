$(function () {
    getCobranza();
});

function getCobranza() {
    $.getJSON(linkCobranza + "/inactividad_atraso", {},
        function (dataTablas) {
            console.log(dataTablas)
            var append = "";


            $('.tituloTabla').append('<th colspan="13"> Inactividad y Atraso - ' + generarMesString() + '/' + ano + '</th>')
            var i = 0;
            

            for (i; i < dataTablas.datos.length; i++) {
                switch (i) {
                    case 0: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].actual + '</span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_30 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_60 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_90 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_120 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_150 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_180 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_210 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_240 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_mas_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    case 1: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].actual + '</span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_30 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_60 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_90 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_120 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_150 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_180 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_210 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_240 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="verde"><span class="num">' + dataTablas.datos[i].atraso_mas_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    case 2: case 3: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].actual + '</span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_30 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_60 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_90 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_120 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_150 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_180 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_210 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_240 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_mas_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    case 11: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].actual + '</span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_30 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_60 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_90 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_120 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_150 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_180 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_210 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_240 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="negro"><span class="num">' + dataTablas.datos[i].atraso_mas_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    case 12: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].actual + '</span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_30 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_60 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_90 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_120 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_150 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_180 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_210 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_240 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td ><span class="num">' + dataTablas.datos[i].atraso_mas_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
                        append += '<td class="num obscuro">' + dataTablas.datos[i].total + '</td></tr>'
                        break;
                    }
                    default: {
                        append += '<tr><td>' + dataTablas.datos[i].nombre + '</td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].actual + '</span><span class="prc">' + dataTablas.porcentajes[i].actual + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_30 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_30 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_60 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_60 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_90 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_90 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_120 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_120 + '</span></td>'
                        append += '<td class="amarillo"><span class="num">' + dataTablas.datos[i].atraso_150 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_150 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_180 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_180 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_210 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_210 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_240 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_240 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_270 + '</span></td>'
                        append += '<td class="rojo"><span class="num">' + dataTablas.datos[i].atraso_mas_270 + '</span><span class="prc">' + dataTablas.porcentajes[i].atraso_mas_270 + '</span></td>'
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
