function validation() {
  try {
    let errors = [];
    let errorMSG;
    const regMail = /^\w+@[a-zA-Z]+\.(com|es|org)$/;
    const regNumber = /\d{3}\s?\d{3}\s?\d{3}/;
    const regName = /^[a-zA-Z-' ]+$/;

    let subject = document.getElementById("contact_subject").value;
    let msg = document.getElementById("contact_msg").value;
    let resultName;
    let resultMail;
    let resultNumber;

    if (document.getElementById("contact_name").value == "") {
      errors.push("You have to include a name!");
    } else {
      resultName = regName.test(document.getElementById("contact_name").value);
      if (!resultName) {
        errors.push("The name is not valid!");
      }
    }
    if (document.getElementById("contact_mail").value == "") {
      errors.push("You have to include an email!");
    } else {
      resultMail = regMail.test(document.getElementById("contact_mail").value);
      if (!resultMail) {
        errors.push("The email is not valid!");
      }
    }
    if (document.getElementById("contact_tlf").value == "") {
      errors.push("You have to include a phone number!");
    } else {
      resultNumber = regNumber.test(
        document.getElementById("contact_tlf").value
      );
      if (!resultNumber) {
        errors.push("The phone number is not valid!");
      }
    }

    if (document.getElementById("contact_msg").value == "") {
      errors.push("You have to include a message!");
    }
    if (document.getElementById("contact_subject").value == "") {
      errors.push("You have to include a subject!");
    }

    errorMSG = errors.join("\n");
    if (errors.length === 0) {
      let contactMSG = {
        name: document.getElementById("contact_name").value,
        email: document.getElementById("contact_mail").value,
        tlf: document.getElementById("contact_tlf").value,
        subject: document.getElementById("contact_subject").value,
        msg: document.getElementById("contact_msg").value,
      };
      let contactAlert = JSON.stringify(contactMSG, null, 2);
      let result = confirm(
        "Do you want to send this information?\n" + contactAlert
      );
      if (result) {
        alert("Message send successfully!");
      } else {
        alert("Message deleted");
      }
    } else {
      alert(errorMSG);
    }
    console.log(errorMSG);
  } catch (err) {
    console.log("Error: " + err);
  }
}
