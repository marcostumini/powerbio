<!-- INICIO HTML -->
<?php include '../include/todo-base-inicio.php' ?>
	
<body>
	<!-- BARRA DE NAVEGACION -->
	<div class="container">
		<?php include '../include/todo-nav.php' ?>
		<img src="../assets/img/contacto/banner.jpg" class="d-block w-100" alt="...">
	</div>
		<?php
			if (!isset($_POST["submit"])) { ?>

<div class="container">
	<div class="container" id="contenedorC">
		<div class="row" style="text-align: center;">	
			<div class="col 12" style="margin-top: 40px;margin-bottom: 20px">
					<p class="titulos" style="font-size: 2em"><b>FORMULARIO DE CONTACTO</b></p>
			</div>
		</div>	
		<div class="row">
			<div id="contenedorContacto">
				<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>" >
					<div class="form-group col">
				  		<div class="form-row cuerpo">
						    <div class="col">
						    	<label>Nombre:</label>
						      	<input type="text" name="nombre" id="nombre" class="form-control">
						    </div>
						    <div class="col">
						    	<label>Email:</label>
						    	<input name="email" id="email" type="text" class="form-control" placeholder="">
						    </div>
						</div>
				  		<div class="form-group">
				    		<label>Mensaje:</label>
				    		<textarea type="text" name="mensaje" id="mensaje" rows="3" class="form-control"></textarea>
				  		</div>
				  		<center>
							<div class="form-group">
							  	<button type="submit" name="submit" value="Enviar" class="btn btn-success botones" disabled style="font-size: 1.5em">Enviar</button>
							</div>
						</center>
					</div>
				</form>
			</div>
			<div id="contenedorMapa">
				<center>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.269878580547!2d-63.24422588527157!3d-32.43871025368498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc4251a71affdd%3A0x173f16ec918eac14!2sAv.%20Carranza%20150%2C%20Villa%20Nueva%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1605628081718!5m2!1ses-419!2sar"  frameborder="0" style="border:0; width: 100%; height: 400px;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
				</center>
			</div>
		</div>
	</div>	
</div>
<br><br><br>
 <!--BOOTSTRAP -->
		<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
<!-- FOOTER -->
		<?php include '../include/todo-footer.php' ?>
	</body>
<!-- CIERRE HTML -->
<?php include '../include/todo-base-fin.php' ?> 




  <?php 
}else{    
		include("class.phpmailer.php"); 
		//*********************************************************DATOS SENSIBLES  NO TOCAR*****************************************************************!
		
		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->SMTPAuth = true;
		$mail->Host = ""; // 
		$mail->Username = ""; //
		$mail->Password = ""; // 
		$mail->Port = 8889; 
		$mail->From = "";
		$mail->AddAddress("");//MAIL 
		
		//******************************************************************************************************************************************************

		$mail->FromName = "Mensaje desde la Pagina de Powerbio";
		$mail->Subject = "Contacto";
		$mail->Body ='<html>'.
			
			'<body>
			
			<h3>Este mensaje lo envia:</h3><h2>'.
			$_POST['nombre'].
			'</h2><h3>con Email:</h3><h2>'.
			$_POST['email'].
			'</h2><h3>Y dice:</h3><h2>'.
			$_POST['mensaje'].
		
			'</h2></body>'.
			'</html>';
		





		$mail->WordWrap = 50;
		$mail->IsHTML(true);
		$str1= "gmail.com";
		$str2=strtolower($_POST["email"]);
		If(strstr($str2,$str1)){
			$mail->Port = 8889;
				if(!$mail->Send()) {
					echo   "<script language='javascript'>
	 		      	alert('El mensaje se envio correctamente');
	 		      	location.href='../index.php'
	 			</script>";
				}else{
				echo   "<script language='javascript'>
	 		      	alert('El mensaje se envio correctamente');
	 		      	location.href='../index.php'
	 			</script>";
					}
		}else{
			$mail->Port = 8889;
			if(!$mail->Send()) {
					echo "Mailer Error: " . $mail->ErrorInfo;
					echo   "<script language='javascript'>
	 		      	alert('El mensaje no se envio correctamente');
	 		      	location.href='../index.php'
	 			</script>";
			}else{
					echo   "<script language='javascript'>
	 		      	alert('El mensaje se envio correctamente');
	 		      	location.href='../index.php'
	 			</script>";
				}
			}  
	}
?>



