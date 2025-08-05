let reg_form = document.getElementById("reg_form");

reg_form.addEventListener("submit", (event) => {
    event.preventDefault();

    let fname = event.target.fname.value.trim();
    let lname = event.target.lname.value.trim();
    let email = event.target.email.value.trim();
    let phone = event.target.phone.value.trim();
    let age = event.target.age.value.trim();
    let pass = event.target.pass.value.trim();
    let cpass = event.target.cpass.value.trim();

    if (fname === "") {
        alert("Please Fill First Name");
        return;
    }

    if (lname === "") {
        alert("Please Fill Last Name");
        return;
    }

    if (email === "") {
        alert("Please Fill Email");
        return;
    }

    if (phone === "") {
        alert("Please Fill Phone Number");
        return;
    }

    if (age === "") {
        alert("Please Fill Age");
        return;
    }

    if (pass === "") {
        alert("Please Fill Password");
        return;
    }

    if (cpass === "") {
        alert("Please Fill Confirm Password");
        return;
    }

    if (pass.length < 6 || pass.length > 12) {
        alert("Please fill Password of character between 6 to 12");
        return;
    }

    if (pass !== cpass) {
        alert("Password is not Matching");
        return;
    }

    if (!Number(age)) {
        alert("Age must be a number");
        return;
    }

    if (Number(age) < 18) {
        alert("Age must be greater than or equal to 18");
        return;
    }

    alert("Form submitted successfully.");

    let user = {
        name: fname + " " + lname,
        email: email,
        password: pass,
        age: age
    };

    console.log(JSON.stringify(user));

    reg_form.reset();
});
