<?php
// Citește conținutul fișierului care conține mesajele trimise
$mesaje = file_get_contents('mesaje_contact.txt');
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mesaje Contact - Fotbal Shop</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>Mesaje Contact - Fotbal Shop</h1>
        <nav>
            <ul>
                <li><a href="lab1 index.html">Acasă</a></li>
                <li><a href="produse.html">Produse</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Mesaje trimise:</h2>
            <pre><?php echo $mesaje; ?></pre> <!-- Afișează mesajele citite din fișier -->
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Fotbal Shop. Toate drepturile rezervate.</p>
    </footer>
</body>
</html>
