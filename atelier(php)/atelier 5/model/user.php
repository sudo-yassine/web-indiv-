<?php
class User 
{
    private $lastName;
    private $firstName;
    private $passWord;
    private $Email;
    private $username;
    public function afficher() 
    {
        echo '<table border= "2">';
        echo '<tr>';
        echo '<td>prenom</td>';
        echo '<td>nom</td>';
        echo '<td>email</td>';
        echo '<td>username</td>';
        echo '<td>password</td>';
        echo '<tr>';
        echo '<td>'.$this->lastName.'</td>';
        echo '<td>'.$this->firstName.'</td>';
        echo '<td>'.$this->Email.'</td>';
        echo '<td>'.$this->username.'</td>';    
        echo '<td>'.$this->passWord.'</td>'; 
        echo '</tr>';
    }

    public function __construct(string $lastName, string $firstName, string $email, string $username, string $passWord)
    {
        $this->lastName = $lastName;
        $this->firstName = $firstName;
        $this->Email = $email;
        $this->username = $username;
        $this->passWord = $passWord;
    }
}
?>