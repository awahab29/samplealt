<?php 

require 'vendor/autoload.php';

$app = new Slim\App();


$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});

//mock data
const locations = array(
	array('id' => 0, 'name'=> 'karachi'),
	array('id' => 1, 'name'=> 'hyderabad'),
	array('id' => 2, 'name'=> 'multan'),
	array('id' => 3, 'name'=> 'lahore'),
	array('id' => 4, 'name'=> 'islamabad')
);

$app->get('/getLocations', function ($request, $response, $args) {
	header("Content-Type: application/json");

    echo json_encode(locations);
	exit;
});

$app->get('/getLocation/{locationId}', function ($request, $response, $args) {
	header("Content-Type: application/json");

	$id =$request->getAttribute('locationId');
	$location = array();

	//finding location
	foreach(locations as $l){
		if ($l['id'] == $id){
			$location = $l;
			break;
		}
	}

    echo json_encode($location);
	exit;
});

$app->get('/hello[/{name}]', function ($request, $response, $args) {
    $response->write("Hello, " . $args['name']);
    return $response;
})->setArgument('name', 'World!');


$app->run();

