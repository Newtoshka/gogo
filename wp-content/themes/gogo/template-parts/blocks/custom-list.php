<?php
$list_title = get_field('list_title');
$list_text = get_field('list_text');
$list_subtitle = get_field('list_subtitle');
$list_of_blocks = get_field('list_of_blocks');
?>

<section class="list light-blue-bg relative" data-aos="fade-in">
    <div class="list-heading light-black text-align-center">
        <h1 class="list-heading_title h1 ">
            <?php echo $list_title; ?>
        </h1>

        <p class="list-heading_text body-text--big">
             <?php echo $list_text; ?>
        </p>

        <h2 class="list-heading_subtitle h2 ">
            <?php echo $list_subtitle; ?>
        </h2>

    </div>
    
    <div class="list-inner grid container--small mx-auto">
        <?php
        foreach ($list_of_blocks as $key => $block_item) {
            $block_item_title = $block_item['title'];
            $block_item_description = $block_item['description'];

            if($block_item['image']){
                $block_item_image_url = $block_item['image']['url'];
                $block_item_image_title = $block_item['image']['name'];
                $block_item_image_alt = $block_item['image']['alt'];
            }
            ?>
                <div class="block white-bg text-align-center">
                    <h3 class="block-title h3 light-black">
                        <?php echo $block_item_title; ?>
                    </h3>

                    <p class="block-description body-text gray">
                        <?php echo $block_item_description; ?>
                    </p>

                    <?php if($block_item['image']):?>
                    <div class="block-image_wrapper">
                        <img class='mx-auto'src="<?php echo $block_item_image_url; ?>"
                             title="<?php echo $block_item_image_title; ?>"
                             alt="<?php echo $block_item_image_alt; ?>">
                    </div>
                    <?php endif;?>
                </div>
            <?php
        }
        ?>
    </div>

</section>
<?php
