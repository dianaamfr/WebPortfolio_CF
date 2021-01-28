<?php
include_once('database/db_connection.php');

function getProjects(){
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT projectId, title, projectType 
                          FROM Project");
    $stmt->execute();
    return $stmt->fetchAll();
}

function getProjectFirstImages($projectId){
    $db = Database::instance()->db();
    $stmt = $db->prepare("SELECT imageOrder, description FROM Image 
                          WHERE projectId = ? 
                          ORDER BY imageOrder ASC 
                          LIMIT 3");
    $stmt->execute(array($projectId));
    return $stmt->fetchAll();
}

?>