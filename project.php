<?php
include_once('common.php');
include_once('database/db_content.php');

setLastPage('project');

$project  = getProjectById($_GET['id']);
$description = getProjectDescription($_GET['id']);
$credits = getProjectCredits($_GET['id']);
$images = getProjectImages($_GET['id']);

drawHead(); ?>
<div class="project_page">
    <?php drawHeader(); ?>
    <div class="project_sections">  

        <header class="responsive_project_header">
            <span class="year"><?=$project['year']?></span>
            <h2 class="title"><?=$project['tabletTitle']?></h2>
        </header>

        <div class="project_page_slider">
            <div>
            <div class="project_slider_track">
                <?php foreach($images as $img){
                    if(($project['projectId'] == 3) || (($project['projectId'] == 2) && ($img['imageOrder'] >= 9))){ ?>
                        <video class="project_page_slide" loop autoplay muted>
                            <source src="images/projects/project<?=$project['projectId']?>/video<?=$img['imageOrder']?>.m4v">
                        </video>
                    <?php }
                    else{ ?>
                        <div style="background-image: url('images/projects/project<?=$project['projectId']?>/image<?=$img['imageOrder']?>.jpg');" class="project_page_slide"></div>
                <?php } 
                } ?>
            </div>
            </div>

            <div class="arrows">
                <img alt="plus icon" src="items/arrow.png">
                <img alt="plus icon" src="items/arrow.png">
            </div>

            <form class="dots">
                <?php for($i=0; $i < count($images)-1; $i++){?>
                    <input type="radio" data-slide="<?=$i?>" id="trigger<?=$i?>" name="dot" <?php if($i === 0){echo 'checked';}?>>
                    <label for="trigger<?=$i?>"></label>
                <?php } ?>
            </form>
        </div>

        <div class="project_content">
            <div>
                <header>
                    <span class="year"><?=$project['year']?></span>
                    <h2 class="title"><?=$project['shortTitle']?></h2>
                </header>

                <div class="project_description">
                    <?php foreach($description as $paragraph){?>
                        <p><?=$paragraph['content']?></p>
                    <?php } ?>
                </div>
            </div>

            <div>
                <header>
                    <ul class="keywords">
                        <?php
                            $keywords = explode(",", $project['keywords']);
                            foreach($keywords as $keyword){?>
                                <li><?=$keyword?></li>
                            <?php }
                        ?>
                    </ul>
                </header>
                
                <div class="project_info">
                    <?php foreach($credits as $credit){?>
                        <section>
                            <h2><?=$credit['title']?></h2>
                            <?php 
                                $names = explode(",", $credit['content']);
                                foreach($names as $name){
                                    if(strcasecmp($credit['title'],'Texts')){?>
                                        <p><?=$name?></p>
                                    <?php }
                                    else {
                                        $splitFont= explode("-", $name);
                                        if(count($splitFont) === 1){?>
                                            <p><?=$name?></p>
                                        <?php } 
                                        else {?>
                                            <p><span class="textAuthor italic"><?=$splitFont[0]?></span><?=$splitFont[1]?></p>
                                        <?php }
                                    }
                                } ?>
                        </section>
                    <?php } 

                    if($project['details'] !== NULL){
                        $details = explode(",", $project['details']);
                        foreach($details as $detail){ ?>
                            <p><?=$detail?></p>
                        <?php }
                    } ?>
                </div>
            </div>

        </div>

        <div class="project_page_line"></div>
        <div class="project_page_description">
            <p><?=$project['title']?><br>
            <span class="italic"><?=$project['projectType'] ? $project['projectType']:null?></span></p>
            <span class="icon_plus"><img alt="plus icon" src="items/plus.png"></span>
        </div>
    </div>
    <?php drawFooter(); ?>
</div>


<?php 
drawEnd();
?>