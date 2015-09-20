<?php 
    $file_name = 'CV-dave-garwacke-2014.pdf';
    header('Content-Type: application/pdf');
    header("Content-Transfer-Encoding: Binary"); 
    header("Content-disposition: attachment; filename=\"".$file_name."\""); 
    readfile($file_name);
  ?>