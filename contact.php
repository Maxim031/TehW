<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Fotbal Shop</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/contact.css">
</head>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="contact.js" defer></script>

<body>
    <header>
        <h1>Fotbal Shop - Contact</h1>
        <nav>
            <ul>
                <li><a href="index.php">Acasă</a></li>
                <li><a href="produse.php">Produse</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
        </nav>
    </header>
  
    <main>
    <section id="contact">
    <h2>Contactează-ne</h2>
    <form id="contactForm">
        <label for="nume">Nume:</label>
        <input type="text" id="nume" name="nume" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="mesaj">Mesaj:</label>
        <textarea id="mesaj" name="mesaj" required></textarea>

        <button type="submit">Trimite</button>
    </form>
    <div id="raspuns"></div>
</section>
    </main>

    <footer>
        <p>&copy; 2025 Fotbal Shop. Toate drepturile rezervate.</p>
    </footer>
</body>
</html>
