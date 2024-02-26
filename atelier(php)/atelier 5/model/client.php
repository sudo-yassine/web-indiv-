<?php
class client
{
    private $lastName;
    private $firstName;
    private $passWord;
    private $phone;
    private $address;
    private $dob;
    public function show() 
    {
        echo '<table border= "2">';
        echo '<tr>';
        echo '<td>last name</td>';
        echo '<td>first name</td>';
        echo '<td>phone</td>';
        echo '<td>address</td>';
        echo '<td>date of birth</td>';
        echo '<tr>';
        echo '<td>'.$this->lastName.'</td>';
        echo '<td>'.$this->firstName.'</td>';
        echo '<td>'.$this->phone.'</td>';
        echo '<td>'.$this->address.'</td>';    
        echo '<td>'.$this->dob.'</td>'; 
        echo '</tr>';
    }

    public function __construct(string $lastName, string $firstName, string $phone, string $address, string $dob)
    {
        $this->lastName = $lastName;
        $this->firstName = $firstName;
        $this->phone = $phone;
        $this->address = $address;
        $this->dob= $dob;
    }
}
?>