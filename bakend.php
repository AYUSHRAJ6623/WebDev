<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['my_name'];
    $email = $_POST['my_email'];
    $dob = $_POST['my_dob'];
    $bonus_point = $_POST['bonus_point'];
    $eligible = isset($_POST['eligible']) ? 'Yes' : 'No';
    $gender = $_POST['my_gender'];
    $about = $_POST['my_text'];

    // Display form data
    echo "Name: $name <br>";
    echo "Email: $email <br>";
    echo "Date of Birth: $dob <br>";
    echo "Bonus Point: $bonus_point <br>";
    echo "Eligible: $eligible <br>";
    echo "Gender: $gender <br>";
    echo "About Me: $about <br>";
}
?>
