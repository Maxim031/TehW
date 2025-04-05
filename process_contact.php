<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Colectează datele din formular
    $nume = htmlspecialchars($_POST['nume']);
    $email = htmlspecialchars($_POST['email']);
    $mesaj = htmlspecialchars($_POST['mesaj']);

    // Creează un string pentru a salva datele
    $data = "Nume: $nume\nEmail: $email\nMesaj: $mesaj\n\n";
    
    // Salvăm mesajul într-un fișier text (sau poți salva într-o bază de date)
    file_put_contents("mesaje_contact.txt", $data, FILE_APPEND);
    
    // Redirecționăm utilizatorul la o pagină de confirmare
    header("Location: contact_confirmat.php");
    exit();
}
?>
