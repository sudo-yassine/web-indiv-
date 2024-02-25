<?php

include 'user.php';

$user = new User('john', 'doe','jane.doe@gmail.com','testing123','jd'); 

// $user->lastName = 'John';
// $user->firstName = 'Doe';
// $user->Email = 'jane.doe@gmail.com';
// $user->passWord = 'testing123';
// $user->username = 'JD';

var_dump($user);

$user->afficher();

?>