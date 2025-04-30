<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nume = htmlspecialchars($_POST["nume"]);
    $email = htmlspecialchars($_POST["email"]);
    $mesaj = htmlspecialchars($_POST["mesaj"]);

    $data = date("Y-m-d H:i:s");
    $linie = "$data | $nume | $email | $mesaj" . PHP_EOL;
    file_put_contents("mesaje_contact.txt", $linie, FILE_APPEND);

    http_response_code(200);
    echo "Mesaj salvat cu succes!";
} else {
    http_response_code(405);
    echo "Metodă invalidă.";
}
?>
