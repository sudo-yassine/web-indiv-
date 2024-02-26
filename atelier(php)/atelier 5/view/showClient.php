<?php

include 'C:\xampp\htdocs\vs\web-indiv-\atelier(php)\atelier 5\model\client.php';

$client1 = new client('nada1','hsayri','123546','asdf','asd'); 



// $client1->lastName = 'John';
// $client1->firstName = 'Doe';
// $client1->phone = '123456879';
// $client1->address = 'asd';
// $client1->dob= 'asdf';


var_dump($client1);

$client1->show();

?>