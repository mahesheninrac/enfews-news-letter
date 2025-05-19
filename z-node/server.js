const { table } = require('console');
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Path to your .txt file
const filePath = path.join(__dirname, 'emailextractor.txt');
// Regular expression to match emails
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Read the file content
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    } else {
        // Match all emails in the file content
        const matches = data.match(emailRegex) || [];
        const uniqueMatches = Array.from(new Set(matches))

        if (uniqueMatches.length === 0) {
            console.log('No emails found.');
            return;
        }

        console.log('Emails found:', uniqueMatches);

        // Prepare data for Excel: convert array to array of objects
        const emailData = uniqueMatches.map(email => ({ Email: email }));

        // Create a worksheet and workbook
        const worksheet = xlsx.utils.json_to_sheet(emailData);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Emails');

        // Write to Excel file
        const d = new Date()
        let dd = d.getFullYear()
        let mm = d.getMinutes();
        let hh = d.getHours()
        let ss = d.getSeconds()
        let finalDate = `${dd}-${hh}-${mm}-${ss}`
        let excelfilename = `extracted_emails_${finalDate}.csv`
        const excelFilePath = path.join(__dirname, excelfilename);
        xlsx.writeFile(workbook, excelFilePath, { bookType: 'csv' });
        console.log(`Emails saved to ${excelFilePath}`);
    }
});
