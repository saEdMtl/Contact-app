export const validate = (data) => {

    const errors = {};

    if (!data.name) {
        errors.name = "Enter name"
    } else {
        delete errors.name;
    }

    if (!data.lastName) {
        errors.lastName = "Enter lastname"
    } else {
        delete errors.lastName;
    }

    if (!data.phoneNumber) {
        errors.phoneNumber = "Enter phonenumber"
    // } else if (data.phoneNumber.lenght < 11) {
    //     errors.phoneNumber = "Invalid phonenumber"
    } else {
        delete errors.phoneNumber;
    }

    if (!data.email) {
        errors.email = "Enter email"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid"
    }
    else {
        delete errors.email;
    }

    if (!data.age) {
        errors.age = "Enter your age"
    } else {
        delete errors.age;
    }

    if (!data.adress) {
        errors.adress = "Enter your adress"
    } else {
        delete errors.adress;
    }

    return errors;


}