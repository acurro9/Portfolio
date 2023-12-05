<?php 
    include("connection.php");

    $db=connectDB();

    $projects = [];
    $project = [];
    //Projects
    $queryP = "SELECT * from projects;";
    $resultP = mysqli_query($db,$queryP);
    
    while($rowP = mysqli_fetch_array($resultP)){
        for($y=0; $y<6; $y++){
            array_push($project, $rowP[$y]);
        }
        array_push($projects, $project);
        $project=[];
    }



?>