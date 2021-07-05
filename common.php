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
            <title>Catarina Freitas</title>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
            <link rel="icon" href="favicon.ico" type="image/x-icon">
            <link href="styles.css" rel="stylesheet" type="text/css">
            <meta charset="utf-8">
            <meta name="author" content="Diana Freitas">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <?php if(isset($_GET['about'])){ ?>
            <script>
                if(window.screen.availWidth > 1199.98){
                    document.addEventListener('DOMContentLoaded', function(){
                        if(document.getElementById('about')){
                            setTimeout(function(){ 
                                document.getElementById('about').classList.add('slide_in'); }, 200); 
                        }
                    })
                }
            </script>
            <?php } ?>
            <script>
                let linkParts = window.location.pathname.split('/');
                if(window.screen.availWidth > 1199.98 && linkParts[linkParts.length-1] === 'about.php'){
                    window.location.href = "index.php?about=";
                }
            </script>
            <script src="shapes_script.js" defer></script>
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
    <header id="main_header">
        <div id="header_slider">
            <div id="header_slide_track">
                <?php for($i = 0; $i < 2; $i++){
                    drawHeaderSlide();
                }?>
            </div>
        </div>
        <nav class="menu_responsive">
            <ul>
                <li><a class="project_btn <?php if(!active('education.php') && !active('about.php')){echo 'active_page';} ?>" href="index.php">Projects</a></li>
                <li><a class="about_btn <?php if(active('about.php')){echo 'active_page';}?>" href="about.php">About</a></li>
                <li><a class="education_btn <?php if(active('education.php')){echo 'active_page';} ?>" href="education.php">Education</a></li>
            </ul>
        </nav>
    </header>
<?php } ?>

<?php
function drawHeaderSlide(){ ?>
    <div class="header_slide">
        <div class="header_text">
            <div class="page_title">
                <h2 class="page_description_mobile">Selection of projects</h2>
                <a class="home_btn" href="index.php">Catarina Freitas</a>
            </div>
            <h2 class="page_description">A selection of projects and collaborations</h2>
            <nav class="menu_desktop">
                <ul>
                    <li><a class="project_btn <?php if(!isset($_GET['about']) && !isset($_GET['credits']) && !active('education.php')){echo 'active_page';} ?>" href="index.php">Projects</a></li>
                    <li><a class="about_btn <?php if(isset($_GET['about'])){echo 'active_page';}?>" href="index.php?about=">About</a></li>
                    <li><a class="education_btn <?php if(!isset($_GET['credits']) && !isset($_GET['about']) && active('education.php')){echo 'active_page';} ?>" href="education.php">Education</a></li>
                    <li><a class="credits_btn <?php if(isset($_GET['credits'])){echo 'active_page';}?>" href="education.php?credits=">Credits</a></li>
                </ul>
            </nav>

            <div class="burger_container">
                <div class="burger">
                    <span></span>
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
                <a href="mailto:a.catarina.a.freitas@gmail.com" target="_blank"><h2>Email</h2></a>
                <a href="mailto:a.catarina.a.freitas@gmail.com" target="_blank">a.catarina.a.freitas@gmail.com</a>
            </div>
            <div class="social_media">
                <a href="https://www.instagram.com/catarinamoranalua/" target="_blank"><h2>Instagram</h2></a>
                <a href="https://www.instagram.com/catarinamoranalua/" target="_blank">@catarinamoranalua</a>
            </div>
            <div class="social_media">
                <a href="tel:+351916666380" target="_blank"><h2>Mobile</h2></a>
                <a href="tel:+351916666380" target="_blank">+351 916 666 380</a>
            </div>
            <div class="social_media">
                <a href="https://www.behance.net/catarinaafreitas" target="_blank"><h2>Behance</h2></a> 
                <a href="https://www.behance.net/catarinaafreitas" target="_blank">behance.net/catarinaafreitas</a>
            </div>
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
            if(($project['projectId'] == 3) ||(($project['projectId'] == 2) && ($img['imageOrder'] == 1))){ ?>
                <video class="project_slide" loop autoplay muted>
                    <source src="images/projects/project<?=$project['projectId']?>/video_prev<?=$img['imageOrder']?>.mp4">
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
        <span><?=$project['projectType'] ? $project['projectType']:null?></span></p>
        <p><?=$project['tabletTitle']?></p>
        <a class="icon_plus" href="project.php?id=<?=$project['projectId']?>"><img alt="plus icon" src="items/plus.png"></a>
    </div>
<?php } ?>

<?php
function drawAbout(){ ?>
    <div id="work_areas">
        <p>Graphic Design</p>
        <p>Photography</p>
        <p>Visual Communication</p>
        <p>Education</p>
        <span class="icon_plus"><img alt="plus icon" src="items/plus.png"></span>
    </div>
    <div id="catarina_description">
        <p>Catarina Freitas, born in 1996, is a Communication Designer and Art Director, that believes in genuine and engaged creation. For the last years, she has worked in <span class="highlight">ESAD—idea (PT)</span>, <span class="highlight">Mecha Studio (PT)</span>, <span class="highlight">Brutus Studio (NYC)</span>, <span class="highlight">Metyis (AMST)</span>, while also taking a side interest in the fiel of Education on Graphic Design and Critical Writing.</p>
        <p>She has a Master Degree on Graphic Design, currently works as a Freelancer for a variety of studios worldwide - <span class="highlight">The Normal Studio (Chicago)</span>, <span class="highlight">Non-Verbal Club (PT)</span>, <span class="highlight">BUCK (LA)</span>, among others - and has recently decided to start her own practice as a Studio, <span class="highlight">Yucca Studio</span>, yet to launch.</p>
        <p>Catarina has the opinion that our knowledge of the world has no value, except when we act to transform it.</p>
        <p>Beyond this, she believe in not falling into cynicism or arrogance, and wonders if our over-saturation of knowledge has made us feel less. She hopes not.</p>
        <p>She likes plants, but does not know much about them. She is one of those weird beings who do not like pizza. Açai is her favourite food, she always drinks orange juice in the morning, and she is a dedicate member of “Color Club”, as you can see, everywhere!</p>
    </div> 
    <img src="images/catarina.JPG" alt="Catarina's picture">      
    <div id="details">
        <div>
            <h2>Education</h2>
            <div class="details_block">
                <h3>High School</h3>
                <h2>2011/2014</h2>
                <p>ESSR</p>
            </div>
            <div class="details_block">
                <h3>Graduation</h3>
                <h2>2014/2017</h2>
                <p>BA—ESAD</p>
                <p>ERASMUS—Kingston University, London, UK</p>
            </div>
            <div class="details_block">
                <h3>2017/2020</h3>
                <p>MA at ESAD</p>
            </div>
            <div class="details_block" id="languages">
                <h3>Languages</h3>
                <p>PT: Mother Tongue</p>
                <p>English: C1</p>
                <p>Spanish: B1</p>
            </div>
        </div>
        <div>
            <h2>Work Experience</h2>
            <div class="details_block">
                <h2>2014</h2>
                <p>JOFEBAR</p>
                <p>Work-related Training</p>
            </div>
            <div class="details_block">
                <h2>2016</h2>
                <p>SONAE—Call for Summer</p>
            </div>
            <div class="details_block">
                <h2>2018/2019</h2>
                <p>SCIENCE OFFICE</p>
            </div>
            <div class="details_block">
                <h2>2017/2020</h2>
                <p>ESAD—IDEA</p>
                <p>Centro de Investigação em Arte e Design</p>
            </div>
            <div class="details_block">
                <h2>2020</h2>
                <p>FREELANCER</p>
                <p>Gráfica Saúde Sá</p>
                <p>Schwung Home USA</p>  
                <p>Super.Brand Consultants</p>
                <p>Brutus Studio</p>
                <p>Mecha Studio</p>
            </div>
            <div class="details_block">
                <h2>2021</h2>
                <section class="experience-with-title">
                    <h3>METYIS</h3>
                    <p>Partners for Impact</p>
                    <p>Mid-weight Graphic Designer</p>
                </section>
                <section class="experience-with-title">
                    <h3>The Normal Studio</h3>
                    <p>Freelancer Graphic Designer</p>
                </section>
                <section class="experience-with-title">
                    <h3>Buck</h3>
                    <p>Freelancer Graphic Designer</p>
                </section>
                <section class="experience-with-title">
                    <h3>Buck</h3>
                    <p>Freelancer Graphic Designer</p>
                </section>
                <section class="experience-with-title">
                    <h3>Non-Verbal Club</h3>
                    <p>Freelancer Graphic Designer</p>
                </section>
                <section class="experience-with-title">
                    <h3>Yucca Studio</h3>
                    <p>Founder</p>
                </section>
            </div>
        </div>
        <div>
            <h2>Selected Clients</h2>
            <div class="details_block">
                <p>Graphic Fearless Woman</p>
                <p>Grace Hartnett</p>
                <p>Leslie Tynik</p>
                <p>Betina Du Toit</p>
                <p>Lena Pogrebnaya</p>
                <p>PVH</p>
                <p>Hugo Boss</p>
                <p>Tommy Hilfiger</p>
                <p>Calvin Klein</p>
                <p>Paradise Productions</p>
                <p>WeTransfer</p>
            </div>
        </div>
    </div> 
<?php } ?>
