# SingUp Form
### **challenge for FrontEndMentor**

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## **Table of contents**

- [SingUp Form](#singup-form)
    - [**challenge for FrontEndMentor**](#challenge-for-frontendmentor)
  - [**Table of contents**](#table-of-contents)
  - [**Overview**](#overview)
    - [**The challenge**](#the-challenge)
    - [**Screenshot**](#screenshot)
  - [**My Process**](#my-process)
    - [**What I learned**](#what-i-learned)
    - [Useful resources](#useful-resources)
    - [**Built with**](#built-with)
  - [Author](#author)

## **Overview**

### **The challenge**

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*.


### **Screenshot**
<br>

<h3> <strong> Desktop

![Challege](assets/images/design/desktop-design.jpg)

<h3> <strong> Mobile

![Challege](assets/images/design/mobile-design.jpg)

<br>

## **My Process**
### **What I learned**
 
by completing this challenge you can learn a code to perform input validation using JavaScript and a smart way to use functions, which I'm sure I'll use in future code


```js
setError = (index) => {
    SignUp[index].style.border = '1px solid #ff7a7a'
    ErrorMSG[index].style.display = 'block'
}

removeError = (index) => {
    SignUp[index].style.border = '1px solid #b9b6d3'
    ErrorMSG[index].style.display = 'none'
}

function nameValidate(){
    if(input[0].value.length < 3){
        setError(0)
    }else{
        removeError(0)
    }
}  

```
### Useful resources

- [Form Validation Video ](https://youtu.be/YcTkoIAi0Bg) - this helped me a lot to create validation of user inputs
- [Email Validation Video](https://youtu.be/0EHlU55ZfbA) - this helped me a lot to create validation of email 	




### **Built with**


- Mobile-first concept
- Semantic HTML5 
- Flexbox
- CSS custom properties

## Author

- Frontend Mentor - [Dinizim](https://www.frontendmentor.io/profile/Dinizim)
- Github - [Dinizim](https://github.com/Dinizim)
