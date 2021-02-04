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
            <?php if(isset($_GET['about'])){ ?>
            <script defer>
                window.addEventListener('load', function(){
                    if(document.getElementById('about'))
                        document.getElementById('about').classList.add('slide_in'); 
                })
            </script>
            <?php }
            else if(isset($_GET['credits'])){ ?>
            <script defer>
                window.addEventListener('load', function(){
                    if(document.getElementById('education'))
                        document.getElementById('education').classList.add('slide_out'); 
                })
            </script>
            <?php } ?>
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
        <nav class="menu_responsive">
            <ul>
                <li><a <?php if(!active('education.php') && !active('about.php')){echo 'active_page';} ?>" href="index.php">Projects</a></li>
                <li><a <?php if(active('about.php')){echo 'active_page';}?>" href="about.php">About</a></li>
                <li><a <?php if(active('education.php')){echo 'active_page';} ?>" href="education.php">Education</a></li>
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

            <div id="burger_container">
                <div id="burger">
                <span></span>
                <span></span>
                <span></span>
                </div>
                <div id="cross">
                <span></span>
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
                        <p>My name is <span class="highlight">Catarina</span>,</p>
                        <p>I like plants, but I do not know much about any of them. Currently working on a self initiated project to discover some more about those wonderful beings. I don´t like pizza, as I do not like flavour that much. I love vegetables and yogurt is my favourite food of all the time. I always drink orange juice in the morning, ice cream is amazing, and I´ve recently discovered avocato. I made myself a club (“ColorClub”), and I am a dedicated member.</p>
                        <p>In other subjects, I love my job. I’m interested in <span class="highlight">Graphic Design</span>, <span class="highlight"></span>Visual Culture, <span class="highlight">Education</span> and <span class="highlight">Values</span>, as well as <span class="highlight">Analog Photography</span> and Travelling. I have the opinion that our knowledge of the world has no value, except when we act to transform it. </p>
                        <p>Beyond this, I believe in genuine and engaged creation, not falling into cynicism or arrogance, and I wonder if our over-saturation of knowledge has made us feel less. I hope not. Also, I am addicted to books.</p>
                        <p>Thank you so much for taking the time to get to know me.</p>
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
                                <h2>2017/2020</h2>
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
                        </div>
                        <div>
                            <h2>Featured</h2>
                            <div class="details_block">
                                <h2>01</h2>
                                <p>Graphic Fearless Woman</p>
                            </div>
                            <div class="details_block">
                                <h2>02</h2>
                                <p>States of Change,</p>
                                <p class="italic">Exhibition in Hoxton (UK)</p>
                            </div>
                            <div class="details_block">
                                <h2>03</h2>
                                <p>6 Faces da mesma Moeda</p>
                                <p class="italic">Gerador Magazine</p>
                            </div>
                            <div class="details_block">
                                <h2>04</h2>
                                <p>Student Show, Editorial, Indesign Gallery</p>
                                <p class="italic">Behance</p>
                            </div>
                            <div class="details_block">
                                <h2>05</h2>
                                <p>womenofksa.com</p>
                            </div>
                            <div class="details_block">
                                <h2>06</h2>
                                <p>Brand Magazine Issue 39</p>
                            </div>
                            <div class="details_block">
                                <h2>07</h2>
                                <p>Risography Exhibition</p>
                                <p class="italic">Universidade de Aveiro</p>
                            </div>
                            <div class="details_block">
                                <h2>08</h2>
                                <p>Stunning Books</p>
                            </div>
                            <div class="details_block">
                                <h2>09</h2>
                                <p>anothergraphic.org</p>
                            </div>
                            <div class="details_block">
                                <h2>10</h2>
                                <p>Edições Um Por Um</p>
                            </div>
                            <div class="details_block">
                                <h2>11</h2>
                                <p>“Be My Quarantine” 2021</p>
                                <p class="italic">Museu Nogueira Da Silva Exhibition</p>
                            </div>
                            <div class="details_block">
                                <h2>12</h2>
                                <p>Risography Exhibition</p>
                            </div>
                        </div>
                    </div> 
<?php } ?>
