<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

</head>

<body <?php body_class("gogo"); ?>>
    <?php wp_body_open(); ?>

    <header class='white-bg' data-aos="fade-in">
        <div class="header-logo container flex flex-left mx-auto">
            <?php echo the_custom_logo(); ?>
        </div>
    </header>

	<main id="main" class="mr_main">