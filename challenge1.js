
        
    

    


     
    
    

function calculateGrade() {
    // Prompt user for input
    let marks = prompt("Enter student marks (0-100):");
    
    // Convert input to a number
    marks = Number(marks);
    
    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        return;
    }
    
    // Determine grade based on marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    // Output the grade
    console.log(`Marks: ${marks}, Grade: ${grade}`);
}

// Call the function to test
calculateGrade();
