<?php
$slider_title = get_field('slider_title');
$slider_subtitle = get_field('slider_subtitle');
$list_of_slides = get_field('list_of_slides');
?>
<section class="slider blue-bg relative">
    <div class="slider-heading white text-align-center">
        <h1 class="slider-heading_title h1 ">
            <?php echo $slider_title; ?>
        </h1>

        <p class="slider-heading_subtitle body-text--big">
             <?php echo $slider_subtitle; ?>
        </p>
    </div>
    
    <div class="slider-inner container--small mx-auto">
        <?php
        foreach ($list_of_slides as $key => $slide) {
            $slide_title = $slide['title'];
            $slide_description = $slide['description'];
            $slide_image_url = $slide['image']['url'];
            $slide_image_title = $slide['image']['name'];
            $slide_image_alt = $slide['image']['alt'];
            ?>
                <div class="slide white-bg text-align-center">
                    <h3 class="slide-title h3 light-black">
                        <?php echo $slide_title; ?>
                    </h3>

                    <p class="slide-description body-text gray">
                        <?php echo $slide_description; ?>
                    </p>

                    <div class="slide-image_wrapper">
                        <img class='mx-auto'src="<?php echo $slide_image_url; ?>" title='<?php echo $slide_image_title; ?>' alt="<?php echo $slide_image_alt; ?>">
                    </div>
                </div>
            <?php
        }
        ?>
    </div>

    <div class="slider-loader container--small mx-auto">
    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate"
                dur="1s" 
                from="0 50 50"
                to="360 50 50" 
                repeatCount="indefinite" />
        </path>
    </svg>
    </div>
</section>
<?php
