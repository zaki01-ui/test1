<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?? 'ZED_GH' ?></title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pO12..."
          crossorigin="anonymous"
          referrerpolicy="no-referrer">
</head>
<body>

<header id="main-header">
    <div class="logo-area">
        <button id="menu-btn" onclick="toggleSidebar()">☰</button>
        <img src="assets/logo.svg" alt="ZED_GH Logo" class="logo-img">
    </div>

    <div class="nav-controls">
        <nav class="header-nav">
            <a href="index.php" data-i18n="home">الرئيسية</a>
            <a href="about.php" data-i18n="about_us">من نحن</a>
            <a href="contact.php" data-i18n="contact_us">اتصل بنا</a>
        </nav>

        <div class="divider"></div>

        <button class="app-btn">
            <i class="fas fa-download"></i>
            <span data-i18n="download_app">حمل التطبيق</span>
        </button>

        <div class="divider"></div>

        <a href="#" class="header-social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="header-social"><i class="fab fa-instagram"></i></a>

        <button onclick="changeLanguage('en')" class="lang-btn">EN</button>
        <button onclick="changeLanguage('fr')" class="lang-btn">FR</button>
        <button onclick="changeLanguage('ar')" class="lang-btn lang-active">عربي</button>
    </div>
</header>
