<?php 
include_once('database/db_content.php');

$offset= $_GET['offset'];
$limit = $_GET['limit'];

$projects = getProjects($offset,$limit);
if(empty($projects)) die(json_encode([]));

$images1 = $projects[0]['projectId'] == 3 ? getMechaImages() : getProjectFirstImages($projects[0]['projectId']);
$images2 = $projects[1]['projectId'] == 3 ? getMechaImages() : getProjectFirstImages($projects[1]['projectId']);

$proj1 = ['data'=> $projects[0], 'images'=> $images1];
$proj2 = ['data'=> $projects[1], 'images'=> $images2];
die(json_encode([$proj1, $proj2])); 
?>