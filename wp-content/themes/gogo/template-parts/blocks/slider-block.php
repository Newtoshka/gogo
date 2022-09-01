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

</section>
<?php
