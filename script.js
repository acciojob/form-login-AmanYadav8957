function getFormvalue(event) {  
    // Prevent default form submission behavior  
    event.preventDefault();  

    // Get the form elements  
    const firstName = document.forms['form1'].elements['fname'].value;  
    const lastName = document.forms['form1'].elements['lname'].value;  

    // Create the full name string  
    const fullName = `${firstName} ${lastName}`;  

    // Display the full name in an alert  
    alert(fullName);  
}