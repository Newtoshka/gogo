<?php
// Register styles
wp_enqueue_style('main-styles', get_stylesheet_directory_uri().'/dist/app.css');
wp_enqueue_style('slick-css', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css');

// Register scripts
wp_enqueue_script('jquery', '//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js', '', '', true);
wp_enqueue_script('slick-js', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', '', '', true);
wp_enqueue_script('main-script', get_stylesheet_directory_uri().'/dist/app.js', '', '', true);

// Register custom logo
add_theme_support( 'custom-logo' );

function themename_custom_logo_setup() {
    $defaults = array(
        'height'               => 38,
        'width'                => 160,
        'flex-height'          => true,
        'flex-width'           => true,
        'header-text'          => array( 'Gogo', 'Test exercise' ),
        'unlink-homepage-logo' => true, 
    );
 
    add_theme_support( 'custom-logo', $defaults );
}


add_action('acf/init', 'slider_block_init');
function slider_block_init() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a testimonial block.
        acf_register_block_type(array(
            'name'              => 'Slider section',
            'title'             => __('Slider section'),
            'description'       => __('Section with title, description and inner for slider'),
            'render_template'   => 'template-parts/blocks/slider-block.php',
            'category'		    => 'formatting',
            'mode'			    => 'auto',
            'icon'              => 'format-gallery',
            'keywords'          => array( 'custom', 'slide' ),
        ));
    }
}


add_action('acf/init', 'under_slider_section');
function under_slider_section() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a testimonial block.
        acf_register_block_type(array(
            'name'              => 'Section under slider',
            'title'             => __('Section under slider'),
            'description'       => __('Section with title, description and list of blocks'),
            'render_template'   => 'template-parts/blocks/custom-list.php',
            'category'		=> 'formatting',
            'icon'			=> 'schedule',
            'mode'			=> 'auto',
            'keywords'          => array( 'custom', 'section' ),
        ));
    }
}