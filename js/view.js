const view = {
    lastComponent: '',
}

//Validate all result
function isAllPassed(validateResult) {
    for (let result of validateResult) {
        if (!result) {
            return false;
        }
    }
    return true;
}

const validator = {
    requireTypeRoom(str) {
        return str != 'Loại phòng'
    },
    requireSex(str) {
        return str != 'Giới tính'
    },
    requireCity(str) {
        return str != 'Thành phố'
    },
    require(str) {
        return str;
    },

    requireNumber(Number) {
        return Number;
    },

    phoneNumber(Number) {
        return Number.length >= 10;
    },

    email(str) {
        return str.includes('@');
    },

    password(str) {
        return str.length >= 6;
    },

    describe(str) {
        return str.length <= 150;
    }
}

//Set text below input forms
view.setText = function (id, text) {
    document.getElementById(id).innerHTML = text;
}

view.validate = function (value, validator, idErrorMessage, errorMessage) {

    document.getElementById(idErrorMessage).innerHTML = errorMessage;

    if (validator(value)) {
        view.setText(idErrorMessage, '');
        return true;
    }

    else {
        view.setText(idErrorMessage, errorMessage);
        return false;
    }

}

view.showComponent = function (key, data) {
    let app = document.getElementById('app');
    view.lastComponent = key;

    switch (key) {

        case 'loading': {
            app.innerHTML = components.loading;
            break;
        }
        case 'register-page': {
            app.innerHTML = components.logRegisNav + components.registerPage;

            //Homepage link

            let homePageUsersLink = document.getElementById("logo-visitor-link");
            homePageUsersLink.onclick = homePageUsersClickHandler;
            function homePageUsersClickHandler() {
                view.showComponent("home-page-visitor");
            }

            let homePageLink = document.getElementById("home-page-link");
            homePageLink.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-visitor");
            }
            //

            //Login page link

            let loginLinkBtn = document.getElementById("login-link-btn");
            loginLinkBtn.onclick = loginBtnClickHandler;
            function loginBtnClickHandler() {
                view.showComponent("login-page");
            }

            let loginLink = document.getElementById("login-link");
            loginLink.onclick = loginClickHandler;
            function loginClickHandler() {
                view.showComponent("login-page");
            }

            //Register

            let form = document.getElementById("register-form");
            form.onsubmit = formSubmitHandler;

            function formSubmitHandler(event) {
                event.preventDefault();
                //1. Get all info
                //2. Validate info
                //3. Submit info
                let registerInfo = {
                    firstname: form.firstname.value,
                    lastname: form.lastname.value,
                    email: form.email.value,
                    phoneNumber: form.phoneNumber.value,
                    password: form.password.value.trim(),  //trim() delete whitespace
                    confirmPassword: form.confirmPassword.value,
                }

                let validateResult = [
                    view.validate(registerInfo.firstname, validator.require, 'firstname-error', 'Tên bạn nhập không hợp lệ !'),
                    view.validate(registerInfo.lastname, validator.require, 'lastname-error', 'Họ và tên đệm bạn nhập không hợp lệ !'),
                    view.validate(registerInfo.email, validator.email, 'email-error', 'Email bạn nhập không hợp lệ !'),
                    view.validate(registerInfo.password, validator.password, 'password-error', 'Mật khẩu bạn nhập không hợp lệ !'),
                    view.validate(registerInfo.phoneNumber, validator.phoneNumber, 'phone-number-error', 'Số điện thoại bạn nhập không hợp lệ !'),
                    view.validate(registerInfo.confirmPassword,
                        function (str) {
                            return str && str === registerInfo.password;
                        }
                        , 'confirmPassword-error', 'Mật khẩu bạn nhập không hợp lệ !'),
                ]

                if (isAllPassed(validateResult)) {
                    controller.register(registerInfo);
                }
            }
            break;
        }

        case 'login-page': {
            app.innerHTML = components.logRegisNav + components.loginPage;

            //Homepage link

            let homePageUsersLink = document.getElementById("logo-visitor-link");
            homePageUsersLink.onclick = homePageUsersClickHandler;
            function homePageUsersClickHandler() {
                view.showComponent("home-page-visitor");
            }

            let homePageLink = document.getElementById("home-page-link");
            homePageLink.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-visitor");
            }

            //Register

            let loginLinkBtn = document.getElementById("register-btn");
            loginLinkBtn.onclick = loginBtnClickHandler;
            function loginBtnClickHandler() {
                view.showComponent("register-page");
            }

            let registerLink = document.getElementById("register-link");
            registerLink.onclick = registerClickHandler;

            function registerClickHandler() {
                view.showComponent("register-page");
            }

            let form = document.getElementById("login-form");
            form.onsubmit = formSubmitHandler

            function formSubmitHandler(event) {
                event.preventDefault();
                //1. Get all info
                //2. Validate info
                //3. Submit info
                let loginInfo = {
                    email: form.email.value,
                    password: form.password.value,
                }
                let validateResult = [

                    view.validate(loginInfo.email, validator.email, 'email-error', 'Email không hợp lệ !'),
                    view.validate(loginInfo.password, validator.password, 'password-error', 'Mật khẩu không đúng !'),
                ]

                if (isAllPassed(validateResult)) {
                    controller.login(loginInfo);
                }
            }
            break;
        }

        case 'home-page-visitor': {
            app.innerHTML = components.visitorNav + components.homePage;
            controller.showApartments();

            //Register and login
            let register = document.getElementById("register-btn");
            register.onclick = registerClickHandler;
            let login = document.getElementById("login-link-btn")
            login.onclick = loginClickHandler;
            function loginClickHandler() {
                view.showComponent("login-page");
            }
            function registerClickHandler() {
                view.showComponent("register-page");
            }

            break;
        }

        case 'home-page-user': {
            app.innerHTML = components.userNav + components.homePage;
            controller.showApartments();

            //Display user name
            let userName = document.getElementById("user-display-name");
            userName.innerText = firebase.auth().currentUser.displayName;

            //Sign out
            let btnSignOut = document.getElementById("sign-out-btn");
            btnSignOut.onclick = signOutHandler;
            function signOutHandler() {
                firebase.auth().signOut();  // onAuthStateChanged => show login
            }

            //Posting
            let btnPost = document.getElementById("add-post-btn");
            btnPost.onclick = postHandler;
            function postHandler() {
                view.showComponent("posting-page-user");
            }

            break;
        }

        case 'home-page-admin': {
            app.innerHTML = components.adminNav + components.homePage
            controller.showApartments();

            //Display user name
            let userName = document.getElementById("user-display-name");
            userName.innerText = firebase.auth().currentUser.displayName;


            //Sign out
            let btnSignOut = document.getElementById("sign-out-btn");
            btnSignOut.onclick = signOutHandler;
            function signOutHandler() {
                firebase.auth().signOut();  // onAuthStateChanged => show login
            }

            //Posting
            let btnPost = document.getElementById("add-post-btn");
            btnPost.onclick = postHandler;
            function postHandler() {
                view.showComponent("posting-page-admin");
            }

            //Management page
            let btnManage = document.getElementById("manage-link");
            btnManage.onclick = manageHandler;
            function manageHandler() {
                view.showComponent("management-page");
            }

            break;
        }

        case 'posting-page-user': {
            app.innerHTML = components.userNav + components.postingPage;

            //Homepage link
            let homePageUsersLink = document.getElementById("logo-user-link");
            homePageUsersLink.onclick = homePageUsersClickHandler;
            function homePageUsersClickHandler() {
                view.showComponent("home-page-user");
            }

            let homePageLink = document.getElementById("home-page-link");
            homePageLink.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-user");
            }

            //Display user name
            let userName = document.getElementById("user-display-name");
            userName.innerText = firebase.auth().currentUser.displayName;

            //Sign out
            let btnSignOut = document.getElementById("sign-out-btn");
            btnSignOut.onclick = signOutHandler;
            function signOutHandler() {
                firebase.auth().signOut();  // onAuthStateChanged => show login
            }

            let submitPost = document.getElementById("posting-form");
            submitPost.onsubmit = submitPostHandler;

            function submitPostHandler(event) {
                event.preventDefault();

                let apartmentDetails = {
                    city: submitPost.city.value,
                    sex: submitPost.sex.value,
                    typeRoom: submitPost.typeRoom.value,
                    price: submitPost.price.value,
                    acreage: submitPost.acreage.value,
                    deposit: submitPost.deposit.value,
                    capacity: submitPost.capacity.value,
                    address: submitPost.address.value,
                    owner: submitPost.owner.value,
                    phoneNumber: submitPost.phoneNumber.value,
                    describe: submitPost.describe.value,
                }


                let validateResult = [

                    view.validate(apartmentDetails.city, validator.requireCity, 'city-error', 'Bạn chưa chọn thành phố'),
                    view.validate(apartmentDetails.sex, validator.requireSex, 'sex-error', 'Bạn chưa chọn giới tính'),
                    view.validate(apartmentDetails.typeRoom, validator.requireTypeRoom, 'type-room-error', 'Bạn chưa chọn loại phòng'),
                    view.validate(apartmentDetails.price, validator.requireNumber, 'price-error', 'Bạn chưa nhập giá phòng'),
                    view.validate(apartmentDetails.acreage, validator.requireNumber, 'acreage-error', 'Bạn chưa nhập diện tích'),
                    view.validate(apartmentDetails.deposit, validator.requireNumber, 'deposit-error', 'Bạn chưa nhập số tiền cọc'),
                    view.validate(apartmentDetails.capacity, validator.requireNumber, 'capacity-error', 'Bạn chưa nhập sức chứa'),
                    view.validate(apartmentDetails.address, validator.require, 'address-error', 'Bạn chưa nhập địa chỉ'),
                    view.validate(apartmentDetails.owner, validator.require, 'owner-error', 'Bạn chưa nhập tên chủ phòng'),
                    view.validate(apartmentDetails.phoneNumber, validator.phoneNumber, 'phone-number-error', 'Bạn chưa nhập số điện thoại chủ phòng'),
                    view.validate(apartmentDetails.describe, validator.describe, 'describe-error', 'Thông tin không hợp lệ'),
                ]

                if (isAllPassed(validateResult)) {
                    let apartment = {
                        city: apartmentDetails.city,
                        sex: apartmentDetails.sex,
                        typeRoom: apartmentDetails.typeRoom,
                        address: apartmentDetails.address,
                        price: Number(apartmentDetails.price),
                        acreage: Number(apartmentDetails.acreage),
                        deposit: Number(apartmentDetails.deposit),
                        capacity: Number(apartmentDetails.capacity),
                        owner: apartmentDetails.owner,
                        phoneNumber: apartmentDetails.phoneNumber,
                        describe: apartmentDetails.describe,
                        submittedAt: new Date().toISOString(),
                        poster: firebase.auth().currentUser.email,
                        verified: false,
                    }
                    controller.addApartment(apartment);
                    view.setText("post-result-success-message", "Đăng bài thành công!")
                }
                else {
                    view.setText("post-result-message", "Đăng bài không thành công!")
                }
            }

            break;
        }

        case 'posting-page-admin': {
            app.innerHTML = components.adminNav + components.postingPage;

            //Homepage link
            let homePageLinkUp = document.getElementById("logo-admin-link");
            homePageLinkUp.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-admin");
            }

            let homePageLinkDown = document.getElementById("home-page-link");
            homePageLinkDown.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-admin");
            }

            //Display Name
            let userName = document.getElementById("user-display-name");
            userName.innerText = firebase.auth().currentUser.displayName;

            //Sign Out
            let btnSignOut = document.getElementById("sign-out-btn");
            btnSignOut.onclick = signOutHandler;
            function signOutHandler() {
                firebase.auth().signOut()  // onAuthStateChanged => show login
            }

            //Management page
            let btnManage = document.getElementById("manage-link");
            btnManage.onclick = manageHandler;
            function manageHandler() {
                view.showComponent("management-page");
            }

            let submitPost = document.getElementById("posting-form");
            submitPost.onsubmit = submitPostHandler;

            function submitPostHandler(event) {
                event.preventDefault();

                let apartmentDetails = {
                    city: submitPost.city.value,
                    sex: submitPost.sex.value,
                    typeRoom: submitPost.typeRoom.value,
                    price: submitPost.price.value,
                    acreage: submitPost.acreage.value,
                    deposit: submitPost.deposit.value,
                    capacity: submitPost.capacity.value,
                    address: submitPost.address.value,
                    owner: submitPost.owner.value,
                    phoneNumber: submitPost.phoneNumber.value,
                    describe: submitPost.describe.value,
                }

                let validateResult = [
                    view.validate(apartmentDetails.city, validator.requireCity, 'city-error', 'Bạn chưa chọn thành phố'),
                    view.validate(apartmentDetails.sex, validator.requireSex, 'sex-error', 'Bạn chưa chọn giới tính'),
                    view.validate(apartmentDetails.typeRoom, validator.requireTypeRoom, 'type-room-error', 'Bạn chưa chọn loại phòng'),
                    view.validate(apartmentDetails.price, validator.requireNumber, 'price-error', 'Bạn chưa nhập giá phòng'),
                    view.validate(apartmentDetails.acreage, validator.requireNumber, 'acreage-error', 'Bạn chưa nhập diện tích'),
                    view.validate(apartmentDetails.deposit, validator.requireNumber, 'deposit-error', 'Bạn chưa nhập số tiền cọc'),
                    view.validate(apartmentDetails.capacity, validator.requireNumber, 'capacity-error', 'Bạn chưa nhập sức chứa'),
                    view.validate(apartmentDetails.address, validator.require, 'address-error', 'Bạn chưa nhập địa chỉ'),
                    view.validate(apartmentDetails.owner, validator.require, 'owner-error', 'Bạn chưa nhập tên chủ phòng'),
                    view.validate(apartmentDetails.phoneNumber, validator.phoneNumber, 'phone-number-error', 'Bạn chưa nhập số điện thoại chủ phòng'),
                    view.validate(apartmentDetails.describe, validator.describe, 'describe-error', 'Thông tin không hợp lệ'),
                ]

                if (isAllPassed(validateResult)) {
                    let apartment = {
                        city: apartmentDetails.city,
                        sex: apartmentDetails.sex,
                        typeRoom: apartmentDetails.typeRoom,
                        address: apartmentDetails.address,
                        price: Number(apartmentDetails.price),
                        acreage: Number(apartmentDetails.acreage),
                        deposit: Number(apartmentDetails.deposit),
                        capacity: Number(apartmentDetails.capacity),
                        owner: apartmentDetails.owner,
                        phoneNumber: apartmentDetails.phoneNumber,
                        describe: apartmentDetails.describe,
                        submittedAt: new Date().toISOString(),
                        poster: firebase.auth().currentUser.email,
                        verified: true,
                    }
                    controller.addApartment(apartment);
                    view.setText("post-result-success-message", "Đăng bài thành công!")
                }
                else {
                    view.setText("post-result-message", "Đăng bài không thành công!")
                }
            }
            break;
        }

        case 'details-visitor': {
            app.innerHTML = components.visitorNav + components.details;

            //Homepage link
            let homePageUsersLink = document.getElementById("logo-visitor-link");
            homePageUsersLink.onclick = homePageUsersClickHandler;
            function homePageUsersClickHandler() {
                view.showComponent("home-page-visitor")
            }

            let homePageLink = document.getElementById("logo-bottom-details");
            homePageLink.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-visitor")
            }

            //Register and login
            let register = document.getElementById("register-btn");
            register.onclick = registerClickHandler;
            let login = document.getElementById("login-link-btn")
            login.onclick = loginClickHandler;
            function loginClickHandler() {
                view.showComponent("login-page");
            }
            function registerClickHandler() {
                view.showComponent("register-page");
            }

            //Set link for apartments by id
            let id = data.id
            console.log(id);
            for (let i = 0; i < model.apartments.length; i++) {
                if (id == model.apartments[i].id) {
                    return controller.showDetailApartment(model.apartments[i]);
                }
            }

            break;
        }

        case 'details-user': {

            app.innerHTML = components.userNav + components.details;

            //Homepage link
            let homePageUsersLink = document.getElementById("logo-user-link");
            homePageUsersLink.onclick = homePageUsersClickHandler;
            function homePageUsersClickHandler() {
                view.showComponent("home-page-user")
            }

            let homePageLink = document.getElementById("logo-bottom-details");
            homePageLink.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-user")
            }

            //Display user name
            let userName = document.getElementById("user-display-name");
            userName.innerText = firebase.auth().currentUser.displayName;

            //Sign out
            let btnSignOut = document.getElementById("sign-out-btn");
            btnSignOut.onclick = signOutHandler;
            function signOutHandler() {
                firebase.auth().signOut()  // onAuthStateChanged => show login
            }

            //Posting
            let btnPost = document.getElementById("add-post-btn");
            btnPost.onclick = postHandler;
            function postHandler() {
                view.showComponent("posting-page-user");
            }


            let id = data.id
            console.log(id);
            for (let i = 0; i < model.apartments.length; i++) {
                if (id == model.apartments[i].id) {
                    return controller.showDetailApartment(model.apartments[i]);

                }
            }

            break;
        }

        case 'details-admin': {
            app.innerHTML = components.adminNav + components.details;

            //Homepage link
            let homePageLinkUp = document.getElementById("logo-admin-link");
            homePageLinkUp.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-admin")
            }

            let homePageLinkDown = document.getElementById("logo-bottom-details");
            homePageLinkDown.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-admin")
            }

            //Display user name
            let userName = document.getElementById("user-display-name");
            userName.innerText = firebase.auth().currentUser.displayName;


            //Sign out
            let btnSignOut = document.getElementById("sign-out-btn");
            btnSignOut.onclick = signOutHandler;
            function signOutHandler() {
                firebase.auth().signOut()  // onAuthStateChanged => show login
            }

            //Posting
            let btnPost = document.getElementById("add-post-btn");
            btnPost.onclick = postHandler;
            function postHandler() {
                view.showComponent("posting-page-admin");
            }

            //Management page
            let btnManage = document.getElementById("manage-link");
            btnManage.onclick = manageHandler;
            function manageHandler() {
                view.showComponent("management-page");
            }

            let id = data.id
            console.log(id);
            for (let i = 0; i < model.apartments.length; i++) {
                if (id == model.apartments[i].id) {
                    return controller.showDetailApartment(model.apartments[i]);
                }
            }

            break;
        }

        case 'management-page': {
            app.innerHTML = components.adminNav + components.managementPage;
            view.showListApartmentsAdminPage();

            //Homepage link
            let homePageLinkUp = document.getElementById("logo-admin-link");
            homePageLinkUp.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-admin")
            }

            let homePageLinkDown = document.getElementById("home-page-link");
            homePageLinkDown.onclick = homePageClickHandler;
            function homePageClickHandler() {
                view.showComponent("home-page-admin")
            }

            //Sign out
            let btnSignOut = document.getElementById("sign-out-btn");
            btnSignOut.onclick = signOutHandler;
            function signOutHandler() {
                firebase.auth().signOut()  // onAuthStateChanged => show login
            }

            //Posting
            let btnPost = document.getElementById("add-post-btn");
            btnPost.onclick = postHandler;
            function postHandler() {
                view.showComponent("posting-page-admin");
            }

            let userName = document.getElementById("user-display-name");
            userName.innerText = firebase.auth().currentUser.displayName;

            break;
        }

    }
}

view.showListApartments = function () {

    if (model.apartments) {
        let listApartments = document.getElementById("list-apartments");
        let listVerifiedApartments = document.getElementById("list-verified-apartments");
        // listApartments.innerHTML = '';


        for (let apartment of model.apartments) {
            let apartmentCity = apartment.city
            let apartmentID = apartment.id
            let apartmentPrice = apartment.price
            let apartmentAddress = apartment.address
            let apartmentType = apartment.typeRoom
            let apartmentAcreage = apartment.acreage
            let apartmentSubmittedAt = apartment.submittedAt
            let apartmentDate = new Date(apartmentSubmittedAt)
            // let apartmentRealTime = apartmentDate.toLocaleString()
            let apartmentSex = apartment.sex
            // let apartmentPoster = apartment.poster
            let isVerified = apartment.verified

            if (isVerified == false) {
                let html = `
        <div id="${apartmentID}" class="room">
                <img src="image/11739efa7bbb92e5cbaa.jpg" alt="" class="home-photowrap">  
            <div class="detail-room">
                <a href="#" id="link-apartment-${apartmentID}">
                <h4 id="title-address">${apartmentAddress} ${apartmentCity}</h4>
                </a>
                <div class="roomType">
                    <span><i class="fas fa-home"></i> Loại phòng:</span>
                    <span id="">${apartmentType}</span>
                </div>
                <div class="acreage">
                    <span><i class="fas fa-pen"></i> Diện tích:</span>
                    <span id="">${apartmentAcreage} m2</span>
                </div>
                <div class="date">
                    <span><i class="far fa-clock"></i> Ngày đăng:</span>
                    <span id="">${apartmentDate.toLocaleString()}</span>
                </div>
                <div class="gender">
                    <span><i class="fas fa-user-friends"></i> Giới tính:</span>
                    <span id="">${apartmentSex}</span>
                </div>
            </div>
            <div class="price-room">
                <div id="price-room">${apartmentPrice}</div>
                 <span class="price-tilte">triệu/phòng</span>
            </div>
        </div>`

                listApartments.innerHTML += html;
            }

            if (isVerified == true) {
                let html = `
        <div class="room-verified">
            <img src="image/11739efa7bbb92e5cbaa.jpg" alt="" class="home-photowrap">
            <div class="detail-room-verified-group">
                <div class="detail-room-verified">
                <a href="#" id="link-apartment-${apartmentID}">
                <h5 id="title-address">${apartmentAddress} ${apartmentCity}</h5>
                </a>
                <div class="price-type-room">                
                    <div class="typeRoom">
                        <span>${apartmentType}</span>
                    </div>
                    <div class="price-room-verified">
                <h5 id="price-room">${apartmentPrice} triệu/phòng</h5>
            </div>
                    </div>  
                </div>
            </div>
        </div>`

                listVerifiedApartments.innerHTML += html;
            }

        }

        //Set link by id to all apartment
        for (let apartment of model.apartments) {
            let id = `link-apartment-${apartment.id}`
            let a = document.getElementById(id)

            if (firebase.auth().currentUser == null) {
                a.onclick = function () {
                    view.showComponent('details-visitor', { id: apartment.id })
                }
            }
            if (firebase.auth().currentUser) {
                if (firebase.auth().currentUser.email == 'ducnghiem2411@gmail.com') {
                    a.onclick = function () {
                        view.showComponent('details-admin', { id: apartment.id })
                    }
                }
                else {
                    a.onclick = function () {
                        view.showComponent('details-user', { id: apartment.id })
                    }
                }
            }


        }

    }
}


view.showListApartmentsAdminPage = function () {

    if (model.apartments) {
        let listApartmentsAdminPage = document.getElementById("list-apartments-admin-page");

        listApartmentsAdminPage.innerHTML = "";

        for (let apartment of model.apartments) {
            let apartmentCity = apartment.city
            var apartmentID = apartment.id
            let apartmentAddress = apartment.address
            let apartmentSubmittedAt = apartment.submittedAt
            let apartmentPoster = apartment.poster
            let isVerified = apartment.verified
            if (isVerified == true) {
                var status = "Đã xác thực"
            }
            if (isVerified == false) {
                var status = "Chưa xác thực"
            }

            let html = `
            <td>${apartmentAddress} ${apartmentCity}</td>
            <td>${apartmentPoster}</td>
            <td>${apartmentSubmittedAt}</td>
            <td class="btn-fnc">
                <button id="verify${apartmentID}" class="btn btn-dark" data-toggle="tooltip" data-placement="top" title="Xác Thực Phòng"><i class="fas fa-user-check"></i></button>
                <button id="delete${apartmentID}" class="btn btn-dark" data-toggle="tooltip" data-placement="top" title="Xóa Phòng"><i class="fas fa-trash-alt"></i></button>
            </td>
            <td>${status}</td>`

            listApartmentsAdminPage.innerHTML += html;
        }

        //Add id of button to function
        for (let apartment of model.apartments) {
            let id = apartment.id
            let idBtnDelete = `delete${id}`
            let idBtnVerify = `verify${id}`
            let btnDelete = document.getElementById(idBtnDelete)
            let btnVerify = document.getElementById(idBtnVerify);

            btnDelete.onclick = function () {
                let confirmDelete = confirm("Đồng ý xóa ? Tác vụ này không thể hoàn tác");
                if (confirmDelete == true) {
                    controller.deleteApartment(id);
                }
            }
            // btnDelete.onclick = controller.addApartment(id); =>>>> xóa
            btnVerify.onclick = function () {
                let confirmVerify = confirm("Đồng ý xác nhận ?");
                if (confirmVerify == true) {
                    controller.verify(id);
                }
            }

        }

    }
}

view.showDetail = function () {

    if (model.apartments) {
        let listApartments = document.getElementById("detail-apartment");
        // listApartments.innerHTML = '';

        for (let apartment of model.apartments) {
            let apartmentCity = apartment.city
            let apartmentPrice = apartment.price
            let apartmentAddress = apartment.address
            let apartmentType = apartment.typeRoom
            let apartmentAcreage = apartment.acreage
            let apartmentSubmittedAt = apartment.submittedAt
            let apartmentDate = new Date(apartmentSubmittedAt)
            let apartmentPoster = apartment.poster
            let apartmentOwner = apartment.owner
            let apartmentPhoneNumber = apartment.phoneNumber
            let apartmentCapacity = apartment.capacity
            let apartmentDeposit = apartment.deposit
            let apartmentDescribe = apartment.describe
            let apartmentSex = apartment.sex

            let html = `
            <div class="body-wrap-details-room">
            <div class="container-fluid">
                <div class="row img-room-wrap">
                    <div class="col-md-1"></div>
                    <div class="col-md-5 col-xs-12">
                        <div class="img-room-group">
                            <div class="img-room-details"></div>
                            <div class="img-room-details"></div>
                        </div>
                    </div>
                    <div class="col-md-5 col-xs-6">
    
                            <div class="img-room-group">
                                <div class="img-room-details"></div>
                                <div class="img-room-details"></div>
                            </div>
      
                    </div>
                    <div class="col-md-1"></div>
                </div>
                <div class="row room-title-wrap">
                    <div class="col-md-6">
                        <h3 class="room-title">${apartmentType} ${apartmentAddress} ${apartmentCity}</h3>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div  class="row room-info-wrap">
                    <div class="col-md-7 col-xs-8">
                        <div class="room-info">
                            <div class="room-users-group">
                                <div class="room-h4 users">
                                    <h4><i class="fas fa-user-tie"></i> Thông tin chủ phòng</h4>
                                </div>
                                <div class="room-users-wrap">
                                    <div class="users-details">
                                        <label>Tên:</label>
                                        <span>${apartmentOwner}</span>
                                    </div>
                                    <div class="users-details">
                                        <label>SĐT:</label>
                                        <span>${apartmentPhoneNumber}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="room-details-group">
                                <div class="room-h4 details">
                                    <h4><i class="fas fa-home"></i> Thông tin phòng</h4>
                                </div>
                                <div class="room-details-wrap">
                                    <div class="room-details">
                                        <label>Loại Phòng:</label>
                                        <span>${apartmentType}</span>
                                    </div>
                                    <div class="room-details">
                                        <label>Diện tích:</label>
                                        <span>${apartmentAcreage} m2</span>
                                    </div>
                                    <div class="room-details">
                                        <label>Giới tính:</label>
                                        <span>${apartmentSex}</span>
                                    </div>
                                    <div class="room-details">
                                        <label>Sức chứa:</label>
                                        <span>${apartmentCapacity} người/phòng</span>
                                    </div>
                                    <div class="room-details">
                                        <label>Địa chỉ:</label>
                                        <span>${apartmentAddress}</span>
                                    </div>
                                    <div class="room-details">
                                        <label>Đặt cọc:</label>
                                        <span>${apartmentDeposit} triệu/phòng</span>
                                    </div>
                                    <div class="room-details">
                                        <label>Giá thuê:</label>
                                        <span>${apartmentPrice} triệu/phòng</span>
                                    </div>
      
      
                                </div>
      
                            </div>
                            <div class="note-group">
                                <div class="room-h4 note">
                                    <h4><i class="fas fa-exclamation-triangle"></i> Mô tả thêm</h4>
                                </div>
                                <div class="note-wrap">
                                    <p>${apartmentDescribe}
                                    </p>
                                </div>
                            </div>
                        </div>
      
                    </div>
                    <div class="col-md-4 col-xs-4">
                        <div class="user-info">
                            <div class="users-group">
                                <div class="room-h4 users-posting">
                                    <h4><i class="fas fa-user"></i> Người đăng</h4>
                                </div>
                                <div class="users-wrap">
                                    <div class="users-details">
                                        <label>Email:</label>
                                        <span>${apartmentPoster}</span>
                                    </div>
                                    <div class="users-details">
                                        <label>Ngày đăng:</label>
                                        <span>${apartmentDate.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        </div>
        </div>`

            listApartments.innerHTML += html;
        }


    }
}

