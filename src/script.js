
function getData() {
    var fullName = document.querySelector('input[name="full_name"]').value;
    var dob = document.querySelector('input[name="dob"]').value;
    var rollNo = document.querySelector('input[name="roll_no"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var mobileNumber = document.querySelector('input[name="mobile_number"]').value;
    var gender = document.querySelector('select[name="gender"]').value;

    // Identity Details
    var idType = document.querySelector('input[name="id_type"]').value;
    var idNumber = document.querySelector('input[name="id_number"]').value;

    // Address Details
    var addressType = document.querySelector('input[name="address_type"]').value;
    var district = document.querySelector('input[name="district"]').value;
    var state = document.querySelector('input[name="state"]').value;
    var nationality = document.querySelector('input[name="nationality"]').value;
    var postalCode = document.querySelector('input[name="postal_code"]').value;

    // Family Details
    var fatherName = document.querySelector('input[name="father_name"]').value;
    var motherName = document.querySelector('input[name="mother_name"]').value;

    // Log the retrieved data (you can perform any other actions here)
    console.log("Full Name:", fullName);
    console.log("Date of Birth:", dob);
    console.log("Roll No:", rollNo);
    console.log("Email:", email);
    console.log("Mobile Number:", mobileNumber);
    console.log("Gender:", gender);
    console.log("ID Type:", idType);
    console.log("ID Number:", idNumber);
    console.log("Address Type:", addressType);
    console.log("District:", district);
    console.log("State:", state);
    console.log("Nationality:", nationality);
    console.log("Postal Code:", postalCode);
    console.log("Father's Name:", fatherName);
    console.log("Mother's Name:", motherName);
}

// Event listener to trigger the getData function when the form is submitted
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the getData function to retrieve data from the form
    getData();
});
