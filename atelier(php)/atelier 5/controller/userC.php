<?php
class UserC 
{
    public $lastName;
    public $firstName;
    public $passWord;
    public $Email;
    public $username;

    public function __construct($firstName ,$lastName,$passWord ,$Email ,$username) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->passWord = $passWord;
        $this->Email = $Email;
        $this->username = $username;    
    } 

    public function afficherUser($user) {
        echo "Nom : " . $user->lastName . "<br>";
        echo "Prénom : " . $user->firstName . "<br>";
        echo "Mot de passe : " . $user->passWord . "<br>";
        echo "Email : " . $user->Email . "<br>";
        echo "Nom d'utilisateur : " . $user->username . "<br>";   
    }
}

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$password = $_POST["password"];
$email = $_POST["email"];
$username = $_POST["username"];

$user1 = new UserC($firstname, $lastname, $password, $email, $username);
$user1->afficherUser($user1);
?>
