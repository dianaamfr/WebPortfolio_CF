<?php
include_once('common.php');
include_once('database/db_content.php');

$project  = getProjectById($_GET['id']);
$description = getProjectDescription($_GET['id']);
$credits = getProjectCredits($_GET['id']);
$images = getProjectImages($_GET['id']);

drawHead(); ?>
<div class="project_page">
    <?php drawHeader(); ?>
    <div class="project_page_slider">
        <div class="project_slider_track" style="width:<?=count($images)*100?>%">
            <?php foreach($images as $img){?>
                <div style="background-image: url('images/projects/project<?=$project['projectId']?>/image<?=$img['imageOrder']?>.jpg');" class="project_page_slide"></div>
            <?php } ?>
        </div>
    </div>
    <div class="project_page_line"></div>
    <div class="project_page_description">
        <p><?=$project['title']?><br>
        <span class="italic"><?=$project['projectType'] ? $project['projectType']:null?></span></p>
        <a class="icon_plus" href="project.php?id=<?=$project['projectId']?>"><img alt="plus icon" src="items/plus.png"></a>
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
    <?php drawFooter(); ?>
</div>


<?php 
drawEnd();
?>