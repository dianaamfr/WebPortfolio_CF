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
            <div id="about" class="<?php if(isset($_GET['about'])){echo 'slide_in';}?>"> 
                <div id="about_content">
                    <div id="work_areas">
                        <p>Graphic Design</p>
                        <p>Photography</p>
                        <p>Visual Communication</p>
                        <p>Education</p>
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
                                <p>Portuguese: C1</p>
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
                                <p>Óscar Maia</p> 
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
                </div>
            </div> 
        </div>    
        <?php drawFooter(); ?>
    </div>
</div>

<?php 
drawEnd();
?>
