<?php
session_start();

function setLastPage($lastPage) {
  $_SESSION['lastPage'] = $lastPage;
}
?>

<?php
function drawHead(){?>
    <!DOCTYPE html>
    <html lang="en-US">
        <head>
            <title>Catarina Freitas - Portfolio</title>
            <link href="styles.css" rel="stylesheet" type="text/css">
            <meta charset="utf-8">
            <meta name="author" content="Diana Freitas">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="script.js" defer></script>
        </head>
        <body>
<?php } ?>

<?php
function drawEnd(){?>
    </body>
</html>
<?php } ?>

<?php
function drawFooter(){?>
    <footer>
        <div id="footer_slider">
            <div id="footer_slide_track">
                <?php for($i = 0; $i < 2; $i++){
                    drawFooterSlide();
                }?>
            </div>
        </div>
    </footer>
<?php } ?>

<?php 
function drawHeader(){ ?>
    <header>
        <div id="header_slider">
            <div id="header_slide_track">
                <?php for($i = 0; $i < 2; $i++){
                    drawHeaderSlide();
                }?>
            </div>
        </div>
    </header>
    <nav class="menu_responsive">
        <ul>
            <li><a <?php if(!active('education.php') && !active('about.php')){echo 'active_page';} ?>" href="index.php">Projects</a></li>
            <li><a <?php if(active('about.php')){echo 'active_page';}?>" href="about.php">About</a></li>
            <li><a <?php if(active('education.php')){echo 'active_page';} ?>" href="education.php">Education</a></li>
        </ul>
    </nav>
<?php } ?>

<?php
function drawHeaderSlide(){ ?>
    <div class="header_slide">
        <div class="header_text">
            <a class="page_title home_btn" href="index.php">Catarina Freitas</a>
            <h2 class="page_description">A selection of projects and collaborations</h2>
            <nav class="menu_desktop">
                <ul>
                    <li><a class="project_btn <?php if(!isset($_GET['about']) && !isset($_GET['credits']) && !active('education.php')){echo 'active_page';} ?>" href="index.php">Projects</a></li>
                    <li><a class="about_btn <?php if(isset($_GET['about'])){echo 'active_page';}?>" href="index.php?about=">About</a></li>
                    <li><a class="education_btn <?php if(!isset($_GET['credits']) && !isset($_GET['about']) && active('education.php')){echo 'active_page';} ?>" href="education.php">Education</a></li>
                    <li><a class="credits_btn <?php if(isset($_GET['credits'])){echo 'active_page';}?>" href="education.php?credits=">Credits</a></li>
                </ul>
            </nav>

            <div id="burger_container">
                <div id="burger">
                    <div id="topBar" class="bar"></div>
                    <div id="btmBar" class="bar"></div>
                </div>
            </div>
        </div>  
    </div>
<?php } ?>

<?php 
function drawFooterSlide(){ ?>
    <div class="footer_slide">
        <div class="footer_content">
            <div class="social_media">
                <h2>Email:</h2>
                <a href="mailto:a.catarina.a.freitas@gmail.com" target="_blank">a.catarina.a.freitas@gmail.com</a>
            </div>
            <div class="social_media">
                <h2>Instagram:</h2>
                <a href="https://www.instagram.com/catarinamoranalua/" target="_blank">@catarinamoranalua</a>
            </div>
            <div class="social_media">
                <h2>Mobile:</h2>
                <a href="tel:+351916666380" target="_blank">+351 916 666 380</a>
            </div>
            <div class="social_media">
                <h2>Behance:</h2>
                <a href="https://www.behance.net/catarinaafreitas" target="_blank">behance.net/catarinaafreitas</a>
            </div>
        </div>
        <div class="social_media_mobile">
            <a href="mailto:a.catarina.a.freitas@gmail.com" target="_blank"><img src="items/email.png" alt="email"></a>
            <a href="https://www.instagram.com/catarinamoranalua/" target="_blank"><img src="items/instagram.png" alt="instagram"></a>
            <a href="tel:+351916666380" target="_blank"><img src="items/mobile.png" alt="mobile"></a>
            <a href="https://www.behance.net/catarinaafreitas" target="_blank"><img src="items/behance.png" alt="behance"></a>
        </div>
    </div>

<?php } ?>

<?php
function active($currect_page){
    $url_array =  explode('/', $_SERVER['REQUEST_URI']) ;
    $url = end($url_array);  
    return $currect_page == $url;
}
?>

<?php
function drawProjectPreview($project){ ?>
    <div class="project_slider">
        <?php 
        $images1 = $project['projectId'] == 3 ? getMechaImages() : getProjectFirstImages($project['projectId']);
        foreach($images1 as $img){
            if($project['projectId'] == 3){ ?>
                <video class="project_slide" loop autoplay muted>
                    <source src="images/projects/project<?=$project['projectId']?>/video<?=$img['imageOrder']?>.m4v">
                </video>
            <?php }
            else{ ?>
                <div style="background-image: url('images/projects/project<?=$project['projectId']?>/image<?=$img['imageOrder']?>.jpg');" class="project_slide"></div>
            <?php } 
        } ?>
    </div>
    <div class="line"></div>
    <div class="description">
        <p><?=$project['title']?><br>
        <span class="italic"><?=$project['projectType'] ? $project['projectType']:null?></span></p>
        <a class="icon_plus" href="project.php?id=<?=$project['projectId']?>"><img alt="plus icon" src="items/plus.png"></a>
    </div>
<?php } ?>
