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