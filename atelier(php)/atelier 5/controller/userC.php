<?php
class UserC 
{
    public $lastName;
    public $firstName;
    public $passWord;
    public $Email;
    public $username;
    public function afficherUser($user) 
    {
        echo "Nom : " . $user->lastName . "<br>";
        echo "Prénom : " . $user->firstName . "<br>";
        echo "Mot de passe : " . $user->passWord . "<br>";
        echo "Email : " . $user->email . "<br>";
        echo "Nom d'utilisateur : " . $user->username . "<br>";
        
    }
}
?>