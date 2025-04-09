<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>CRM User Signup</title>
</head>

<body>
    <h2>CRM Signup Form</h2>
    <form action="signup.php" method="POST">
        <label>Name:</label><br>
        <input type="text" name="name" required><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required><br><br>

        <label>Password:</label><br>
        <input type="password" name="password" required><br><br>

        <label>Role:</label><br>
        <select name="role">
            <option value="employee" selected>Employee</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
        </select><br><br>

        <button type="submit">Sign Up</button>
    </form>
</body>

</html>

<?php
// Database configuration
$host = "localhost";
$user = "root";
$password = ""; // Change as per your local setup
$dbname = "crm";

// Create DB connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize & collect input
$name = htmlspecialchars(trim($_POST['name']));
$email = htmlspecialchars(trim($_POST['email']));
$plainPassword = $_POST['password'];
$role = $_POST['role'];
$status = 1;

// Generate a 32-character private key
$privatekey = bin2hex(random_bytes(16));

// Hash the password
$hashedPassword = password_hash($plainPassword, PASSWORD_BCRYPT);

// Prepare SQL query
$sql = "INSERT INTO crm_users (privatekey, name, email, password, role, status) VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $privatekey, $name, $email, $hashedPassword, $role, $status);

// Execute and check
if ($stmt->execute()) {
    echo "Signup successful! You can now login.";
} else {
    if ($conn->errno == 1062) {
        echo "Email already exists. Try using a different email.";
    } else {
        echo "Error: " . $conn->error;
    }
}

$stmt->close();
$conn->close();
?>