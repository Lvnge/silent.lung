<?php
    $name = $_POST['name'];
    $mailFrom = $_POST['mail-dir'];
    $message = $_POST['message'];

    $mailHeader = "From:".$name."<".$mailFrom.">\r\n";
    
    $recipient = "shade1799@gmail.com";
    $subject = "New contact request";

    $customBody = '
    <html> 
        <head> 
            <title>Prueba de envio de correo</title> 
        </head>

        <body> 
            <h1>Solicitud de contacto desde correo de prueba !  </h1>
            <p> 
                Contacto:  '.$name.'  <br>
                Mensaje: '.$message.' 
            </p> 
        </body>
    </html>
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF8\r\n"; 

//dirección del remitente

$headers .= "FROM: $name <$mailFrom>\r\n";

mail($recipient, $subject, $customBody, $headers);



echo'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="form-submitted.css" />
    <title>silent lung</title>
  </head>

  <body>
    <header>
      <h1 class="navbar-title">silent lung</h1>
      <nav>
        <ul class="navbar">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="foto.html">Fotos</a></li>
          <li><a href="arte.html">Arte</a></li>
          <li><a href="videos.html">Videos</a></li>
          <li><a href="#">Tienda</a></li>
          <li><a class="active" href="contacto.html">Contacto</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="media-container">
        <div class="border-container">
          <div class="contactme-container">
            <h2 class="title-text">Gracias por contactarme.</h2>
            <button onclick="location.href=\'index.html\'">Regresar</button>
          </div>
        </div>
      </div>
    </main>
    <footer>&copy; silent lung, 2024</footer>
  </body>
</html>
'


?>