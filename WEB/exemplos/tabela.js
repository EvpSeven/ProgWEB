function tab(angi, angf, adelta){
                var anginicial= parseInt(angi);
                var angfinal = parseInt(angf);
                var delta = parseInt(adelta);
                var ang=0;

                var resultado = "<table border='1'><tr><td>graus</td><td>seno</td><td>coseno</td></tr>";
                for (ang=anginicial;ang <= angfinal; ang = ang + delta){
                    resultado = resultado +"<tr><td>"+ang.toString()+"</td><td>"+Math.sin(ang/180.*Math.PI).toPrecision(4)+"</td><td>"+Math.cos(ang/180.*Math.PI).toPrecision(4)+"</td></tr>";
                }
                resultado = resultado + "</table>";
                return resultado;
            }
			