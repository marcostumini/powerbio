<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>POWERBIO</title>
	<!-- BOOTSTRAP -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<!-- FONTAWSOME -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
	<!--ICONO PESTAÑA -->
	<link rel="icon" href="../assets/img/logo.ico" />
	<!--CSS -->
	<link rel="stylesheet" href="../assets/css/personalizado.css">
	<!--Jquery -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

	<script src='https://www.google.com/recaptcha/api.js?render=6Lelke4ZAAAAAKoPu75Ps9s5zqtP5SqC0FK_QKVy'> 
    </script>
    <script>
    grecaptcha.ready(function() {
    grecaptcha.execute('CLAVE_SITIO_WEB', {action: 'formulario'})
    .then(function(token) {
    var recaptchaResponse = document.getElementById('recaptchaResponse');
    recaptchaResponse.value = token;
    });});
    </script>
</head>