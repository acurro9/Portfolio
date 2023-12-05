<?php
    function connectDB(): mysqli{
        $db= new mysqli('localhost', 'root', '', 'portfolio');
        if (!$db){
            echo "Error: could not connect to the database";
            echo "error of debugging" . mysqli_connect_error();
            exit;
        }
        return $db;
    }
?>