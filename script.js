// function FullView(ImageLink) {
//     alert(ImageLink);
// }

 // Function to show the full image
 function showFullImage(imageSrc) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");

    fullImage.src = imageSrc; // Set the full image source
    modal.style.display = "block"; // Show the modal
}

// Function to close the full image modal
function closeImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}

/*========================================================
   contact us page validation section and Email sendind
==========================================================*/
(function(){
    emailjs.init("CT8P1ERcQR7IykxLN");
   })();
  
  function validateContactusForm() {
      // Clear previous error messages
      document.getElementById('fullnameError').textContent = '';
      document.getElementById('mobilenumberError').textContent = '';
      document.getElementById('emailError').textContent = '';
    //   document.getElementById('subjectError').textContent = '';
      document.getElementById('messageError').textContent = '';
  
  
      let isValid = true;
  
      // Regular expression for a number with at least 10 digits
      let numberPattern = /^[0-9]{10,}$/;
  
      // Regular expression for a valid email address
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Validate Full Name
      let fullname = document.getElementById('fullname').value;
      if (!fullname) {
          document.getElementById('fullnameError').textContent = "Your name is required.";
          isValid = false;
      } else if (!/^[a-zA-Z\s]+$/.test(fullname)) {
          document.getElementById('fullnameError').textContent = "can only contain letters and spaces.";
          isValid = false;
      }
  
      // Validate mobile Number
      let mobilenumber = document.getElementById('mobilenumber').value;
      if (!mobilenumber) {
          document.getElementById('mobilenumberError').textContent = "Mobile Number is required.";
          isValid = false;
      } else if (!numberPattern.test(mobilenumber)) {
          document.getElementById('mobilenumberError').textContent = "must be a valid number with at least 10 digits.";
          isValid = false;
      }
  
      // Validate Email
      let email = document.getElementById('email').value;
      if (!email) {
          document.getElementById('emailError').textContent = "Email is required.";
          isValid = false;
      } else if (!emailPattern.test(email)) {
          document.getElementById('emailError').textContent = "Invalid email address.";
          isValid = false;
      }
  
      // Validate subject
    //   let subject = document.getElementById('subject').value;
    //   if (!subject) {
    //       document.getElementById('subjectError').textContent = "Your subject is required.";
    //       isValid = false;
    //   } else if (!/^[a-zA-Z\s]+$/.test(subject)) {
    //       document.getElementById('subjectError').textContent = "can only contain letters and spaces.";
    //       isValid = false;
    //   }
  
      // Validate message 
      let message = document.getElementById('message').value;
      if (!message) {
          document.getElementById('messageError').textContent = "Message is required.";
          isValid = false;
      }
  
      if (isValid) {
        //Send email via Emailjs
        let templateParams={
          from_name:fullname,
          email:email,
          number:mobilenumber,
        //   subject:subject,
          message:message,
        };
  
        emailjs.send("service_nj5jc9t","template_p77f4f6",templateParams)
          .then((response)=>{
              alert('Email sent successfully!', response.status, response.text);
              // Reset the form
              document.getElementById('contactusForm').reset();
          },(error)=>{
              alert('Failed to send email. Please try again later.', error);
          });
      }
  }

// function validateContactusForm() {
//     // Clear previous error messages
//     document.getElementById('fullnameError').textContent = '';
//     document.getElementById('mobilenumberError').textContent = '';
//     document.getElementById('emailError').textContent = '';
//     // document.getElementById('subjectError').textContent = '';
//     document.getElementById('messageError').textContent = '';

//     let isValid = true;

//     // Regular expression for a number with at least 10 digits
//     let numberPattern = /^[0-9]{10,}$/;

//     // Regular expression for a valid email address
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Validate Full Name
//     let fullname = document.getElementById('fullname').value;
//     if (!fullname) {
//         document.getElementById('fullnameError').textContent = "Your name is required.";
//         isValid = false;
//     } else if (!/^[a-zA-Z\s]+$/.test(fullname)) {
//         document.getElementById('fullnameError').textContent = "Can only contain letters and spaces.";
//         isValid = false;
//     }

//     // Validate Mobile Number
//     let mobilenumber = document.getElementById('mobilenumber').value;
//     if (!mobilenumber) {
//         document.getElementById('mobilenumberError').textContent = "Mobile Number is required.";
//         isValid = false;
//     } else if (!numberPattern.test(mobilenumber)) {
//         document.getElementById('mobilenumberError').textContent = "Must be a valid number with at least 10 digits.";
//         isValid = false;
//     }

//     // Validate Email
//     let email = document.getElementById('email').value;
//     if (!email) {
//         document.getElementById('emailError').textContent = "Email is required.";
//         isValid = false;
//     } else if (!emailPattern.test(email)) {
//         document.getElementById('emailError').textContent = "Invalid email address.";
//         isValid = false;
//     }

//     // Validate Subject
//     // let subject = document.getElementById('subject').value;
//     // if (!subject) {
//     //     document.getElementById('subjectError').textContent = "Your subject is required.";
//     //     isValid = false;
//     // } else if (!/^[a-zA-Z\s]+$/.test(subject)) {
//     //     document.getElementById('subjectError').textContent = "Can only contain letters and spaces.";
//     //     isValid = false;
//     // }

//     // Validate Message
//     let message = document.getElementById('message').value;
//     if (!message) {
//         document.getElementById('messageError').textContent = "Message is required.";
//         isValid = false;
//     }

//     // You may perform any other actions here if validation is successful
//     if (isValid) {
//         alert("Form validation passed!");
//         // Optionally reset the form after validation
//         document.getElementById('contactusForm').reset();
//     }
// }
