const controller = {};

controller.initAuth = function () {

    firebase.auth().onAuthStateChanged(onAuthStateChangedHandler);

    function onAuthStateChangedHandler(user) {
        if(view.lastComponent == 'register-page') {
            return;
        }
        if (user && user.emailVerified) {
            if (firebase.auth().currentUser.email === "ducnghiem2411@gmail.com") {
                view.showComponent('home-page-admin');
            }
            else {
                view.showComponent('home-page-user');
            }
        }
        else {
            view.showComponent('home-page-visitor');
        }
    }
    
}

controller.register = async function (registerInfo) {

    //Validated data from register page
    let email = registerInfo.email
    let password = registerInfo.password
    let displayName = registerInfo.firstname + " " + registerInfo.lastname;

    //Disable submit button when submit
    let button = document.getElementById("register-submit-button");
    button.setAttribute('disable', true);

    view.setText('register-error', '');
    view.setText('register-success', '');

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await firebase.auth().currentUser.updateProfile({ displayName: displayName });
        await firebase.auth().currentUser.sendEmailVerification();
        view.setText('register-success', 'Một mã xác thực đã được gửi đến email của bạn !');
    } catch (error) {
        view.setText('register-error', error.message);
    }
    
    //Enable button
    button.removeAttribute('disabled');
}

controller.login = async function (loginInfo) {
    let email = loginInfo.email;
    let password = loginInfo.password;
    view.setText('login-error', '');
    view.setText('login-success', '');

    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        if (!result.user || !result.user.emailVerified) {
            throw new Error('Bạn phải xác thực email trước khi đăng nhập !');
        }
    }
    catch (error) {
        view.setText('login-error', error.message)
        // button.removeAttribute()
    }
}

controller.showApartments = async function () {

    let apartments = [];
    
    //Get data from database firestore
    let result = await firebase.firestore()
    .collection('apartments')
    .get()
    
    for (let doc of result.docs) {
        let apartment = doc.data()
        apartment.id = doc.id
        apartments.push(apartment)
    }

    console.log(apartments);
    model.saveApartments(apartments);

    view.showListApartments();

}

controller.addApartment = async function (apartment) {
    

    //Disable submit button when submit
    let button = document.getElementById("submit-post-btn");
    button.setAttribute('disable', true);

    view.setText('post-result-message', '');


    //Add apartment to apartments collection in firestore
    if (firebase.auth().currentUser.email) {
        await firebase.firestore().collection('apartments').add(apartment);
    }

    //Clear input after submit
    document.getElementById("price-input").value = '';
    document.getElementById("acreage-input").value = '';
    document.getElementById("deposit-input").value = '';
    document.getElementById("capacity-input").value = '';
    document.getElementById("address-input").value = '';
    document.getElementById("owner-input").value = '';
    document.getElementById("phone-number-input").value = '';
    document.getElementById("describe-input").value = '';

    //Enable button
    button.removeAttribute('disabled');
}

controller.deleteApartment = async function (apartmentID) {
    //Delete data in database
    await firebase.firestore()
        .collection('apartments')
        .doc(apartmentID)
        .delete()
    console.log("deleted in db");

    //Delete data in model and show
    model.deleteApartment(apartmentID);
    view.showListApartmentsAdminPage();
}

controller.verify = async function (apartmentID) {
    //Update data in database
    await firebase.firestore()
    .collection('apartments')
    .doc(apartmentID)
    .update({verified: true});
    console.log("verified");
    //Update data in model and show
    model.verifyApartment(apartmentID)
    view.showListApartmentsAdminPage();
}

controller.showDetailApartment = async function (apartment) {
    console.log(apartment)
    let apartments = [];
    
    //Get data from database firestore
    let result = await firebase.firestore()
    .collection('apartments')
    .get()
    
    // for (let doc of result.docs) {
    //     let apartment = doc.data()
    //     apartment.id = doc.id
    //     apartments.push(apartment)
    // }
    apartments.push(apartment)
    // console.log(apartments);
    model.saveApartments(apartments);
    view.showDetail();
}