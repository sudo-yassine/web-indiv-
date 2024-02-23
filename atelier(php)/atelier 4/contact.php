    <?php
        if ( isset($_GET["Nom"])  && isset($_GET["Prenom"])
         && isset($_GET["Email"]) && isset($_GET["Telephone"]) &&
         isset($_GET["Adresse"]) && isset($_GET["code"])){
    
    echo '<table border= "2">';
    echo '<tr>';
    echo '<td>nom</td>';
    echo '<td>prenom</td>';
    echo '<td>email</td>';
    echo '<td>Tel </td>';
    echo '<td>address</td>';
    echo '<td>code postal</td>';


    $nom = $_GET['Nom'];
    $prenom = $_GET['Prenom'];
    $email = $_GET['Email'];
    $telephone = $_GET['Telephone'];
    $adresse = $_GET['Adresse'];
    $codepostal = $_GET['code'];

    echo '<tr>';
    echo '<td>'.$nom.'</td>';
    echo '<td>'.$prenom.'</td>';
    echo '<td>'.$email.'</td>';
    echo '<td>'.$telephone.'</td>';
    echo '<td>'.$adresse.'</td>';
    echo '<td>'.$codepostal.'</td>';
    echo '</tr>';

    }
    else{
        echo '<h1>erreur</h1>';
    }

    ?>