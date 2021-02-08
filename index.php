<?php 
include_once('common.php');
include_once('database/db_content.php');

$projects  = getProjects();

drawHead(); ?>

<div id="wrapper">
    <?php 
    if (!isset($_SESSION['lastPage']) || ($_SESSION['lastPage'] === '')) { ?> 
        <div id="canvas">
            <canvas></canvas>
        </div>
    <?php }
    unset($_SESSION['lastPage']);
    ?>

    <div id="canvas_under">
        <?php drawHeader(); ?>
        <div id="content">
            <div id="projects">
                <?php for($i = 0; $i < count($projects); $i+=2){?>
                    <div class="pair">
                        <div class="pair_left">
                            <?php drawProjectPreview($projects[$i])?>
                        </div>      
                        <div class="pair_right">
                            <?php drawProjectPreview($projects[$i+1])?>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <div id="about"> 
                <div id="about_content">
                    <?php drawAbout(); ?>
                </div>
            </div> 
        </div>    
        <?php drawFooter(); ?>
    </div>
</div>

<?php 
drawEnd();
?>
