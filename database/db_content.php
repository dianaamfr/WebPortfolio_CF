<?php
include_once('database/db_connection.php');

function getProjects($offset, $limit){
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT projectId, title, projectType, tabletTitle 
                          FROM Project
                          LIMIT ?
                          OFFSET ?");
    $stmt->execute([$limit, $offset]);
    return $stmt->fetchAll();
}

function getProjectFirstImages($projectId){
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT imageOrder, description 
                          FROM Image 
                          WHERE projectId = ? 
                          ORDER BY imageOrder ASC 
                          LIMIT 3");
    $stmt->execute(array($projectId));
    return $stmt->fetchAll();
}

function getMechaImages(){
    $projectId = 3;
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT imageOrder, description 
                          FROM Image 
                          WHERE projectId = ? AND (imageOrder = 1 OR imageOrder >= 4)
                          ORDER BY imageOrder ASC");
    $stmt->execute(array($projectId));
    return $stmt->fetchAll();
}

function getProjectById($projectId){
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT * 
                          FROM Project
                          WHERE projectId = ?");
    $stmt->execute(array($projectId));
    return $stmt->fetch();
}

function getProjectDescription($projectId){
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT content
                          FROM Project JOIN Description USING(projectId)
                          WHERE projectId = ? 
                          ORDER BY descriptionId ASC");
    $stmt->execute(array($projectId));
    return $stmt->fetchAll();
}

function getProjectCredits($projectId){
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT Credits.title, content
                          FROM Project JOIN Credits USING(projectId)
                          WHERE projectId = ? 
                          ORDER BY creditsId ASC");
    $stmt->execute(array($projectId));
    return $stmt->fetchAll();
}

function getProjectImages($projectId){
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT imageOrder, description 
                          FROM Image 
                          WHERE projectId = ? 
                          ORDER BY imageOrder ASC");
    $stmt->execute(array($projectId));
    return $stmt->fetchAll();
}

?>