const components ={}


components.visitorNav=`
<div class="head-wrap">
        <div class="container-fluid">
            <div class="row header-menu">
                <div class="col-md-2 col-xs-12">
                    <a href="#" id="logo-visitor-link" class="logo">
                        <img src="image/Logo1.png" alt="" class="logo-header">
        
                    </a>
                </div>

                <div class="col-md-5 col-xs-12">
                    <div class="search-menu">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <button class="btn btn-dark" type="button" data-toggle="dropdown">Thành phố
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" >Hà Nội</a>
                                <a class="dropdown-item" >Đà Nẵng</a>
                                <a class="dropdown-item" >Hồ Chí Minh</a>
                              </div>
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Tìm kiếm theo địa điểm, quận, tên đường,... ">
                          </div>
                    </div>
                </div>

                <div class="col-md-5 col-xs-12">
                    <div class="menu">
                        <span class="hotline">
                            <span><i class="fas fa-mobile-alt"></i> Hotline: 0869.672.231</span>
                        </span>
                        <a id="login-link-btn" class="register-header-btn"><span>Đăng nhập</span></a>
                        <button id="register-btn" class="register-header-btn" type="submit">Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
`

components.userNav =`
    <div class="head-wrap">
        <div class="container-fluid">
            <div class="row header-menu">
                <div class="col-md-2 col-xs-12">
                    <a id="logo-user-link" class="logo">
                        <img src="image/Logo1.png" alt="" class="logo-header">
        
                    </a>
                </div>
                <div class="col-md-5 col-xs-12">
                    <div class="search-menu">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <button class="btn btn-dark" type="button" data-toggle="dropdown">Thành phố
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" >Hà Nội</a>
                                <a class="dropdown-item" >Đà Nẵng</a>
                                <a class="dropdown-item" >Hồ Chí Minh</a>
                              </div>
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Tìm kiếm theo địa điểm, quận, tên đường,... ">
                          </div>
                    </div>
                </div>
                <div class="col-md-5 col-xs-12">
                    <ul class="menu-users-display">
                        <li class="createRoom">
                            <a href="#" id="add-post-btn" class="register-header-btn">Đăng phòng</a>
                        </li>
            
                        <li class="log-out-btn">
                            <button id="sign-out-btn" class="register-header-btn log-out-btn" type="submit">
                                <span id="user-display-name"></span>
                                <i class="fas fa-sign-out-alt"></i>
                            </button></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>     
`

components.adminNav =`
<div class="head-wrap">
<div class="container-fluid">
    <div class="row header-menu">
        <div class="col-md-6 col-xs-12">
            <a id="logo-admin-link" class="logo">
                <img src="image/Logo1.png" alt="" class="logo-header">

            </a>
        </div>
        <div class="col-md-6 col-xs-12 text-right">
            <ul class="menu-users-display">
                <li class="createRoom">
                    <a href="#" id="add-post-btn" class="register-header-btn">Đăng phòng</a>
                </li>
                <li  class="managementPost">
                    <a href="#" id="manage-link">Quản Lý Bài Đăng</a>
                </li>
                <li class="log-out-btn">
                    <button id="sign-out-btn" class="register-header-btn log-out-btn" type="submit">
                        <span id="user-display-name"></span>
                        <i class="fas fa-sign-out-alt"></i>
                    </button></li>
            </ul>
        </div>
    </div>
</div>
</div>
`
components.logRegisNav =`
<div class="head-wrap">
        <div class="container-fluid">
            <div class="row header-menu">
                <div class="col-md-2 col-xs-12">
                    <a href="#" id="logo-visitor-link" class="logo">
                        <img src="image/Logo1.png" alt="" class="logo-header">
        
                    </a>
                </div>

                <div class="col-md-5 col-xs-12"></div>
                <div class="col-md-5 col-xs-12">
                    <div class="menu">
                        <span class="hotline">
                            <span><i class="fas fa-mobile-alt"></i> Hotline: 0869.672.231</span>
                        </span>
                        <a id="login-link-btn" class="register-header-btn"><span>Đăng nhập</span></a>
                        <button id="register-btn" class="register-header-btn" type="submit">Đăng ký</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

`

components.registerPage =`

<nav class="nav-wrap nav-regis">
<div class="nav-detail">
    <div class="container-fluid">
        <div class="row special-offers">
            <span class="col-md-12 col-xs-12 offer-1">Đăng kí thành viên Home X - Tích điểm thưởng và nhận
                ưu đãi</span>
            <span class="col-md-12 col-xs-12 offer-2">Nhanh chóng,tiện lợi và an toàn. Đăng ký liền tay rinh
                ngay quyền lời</span>
        </div>
    </div>
</div>
</nav>
<div class="body-wrap-register">
<div class="container-fluid">
    <div class="row body-background">
        <div class="col-md-2"></div>
        <div class="col-md-4 col-xs-12 logo-white-background">
        <img src="image/Logo2.png">
        </div>
        
        <div class="col-md-2"></div>
        <div class="col-md-4 col-xs-12 register-form">
            <form id="register-form" class="register-form-detail">
                <div class="name-wrapper-register">
                    <div class="h3-register">
                        <h3>Đăng ký thành viên</h3>
                    </div>
                    <div class="input-wrapper-register">
                        <label>Địa chỉ email</label>
                        <div class="search">
                            <input id="inputEmail" type="text" name="email" placeholder="   Nhập email...">
                            <span class="input-icon-email"><i class="far fa-envelope"></i></span>

                        </div>
                        <div id="email-error" class="message-error"></div>

                    </div>
                    <div class="input-wrapper-register">
                        <label>Số điện thoại</label>
                        <div class="search">
                            <input id="inputPhoneNumber" type="text" name="phoneNumber"
                                placeholder="   Nhập số điện thoại...">

                        </div>
                        <div id="phone-number-error" class="message-error"></div>

                    </div>
                    <div class="input-wrapper-register">
                        <label>Tên</label>
                        <div class="search">
                            <input id="inputFirstName" type="text" name="firstname"
                                placeholder="   Nhập tên...">

                        </div>
                        <div id="firstname-error" class="message-error"></div>

                    </div>
                    <div class="input-wrapper-register">
                        <label>Họ và tên đệm</label>
                        <div class="search">
                            <input id="inputLastName" type="text" name="lastname"
                                placeholder="   Nhập họ và tên đệm...">

                        </div>
                        <div id="lastname-error" class="message-error"></div>

                    </div>
                    <div class="input-wrapper-register">
                        <div class="lable-password">
                            <label>Mật khẩu</label>
                            <span>(tối thiểu 6 kí tự)</span>
                        </div>
                        <div class="search">
                            <input id="inputPassword" type="password" name="password"
                                placeholder="   Nhập mật khẩu...">
                            <span class="input-icon-password"><i class="fas fa-lock"></i></span>
                        </div>
                        <div id="password-error" class="message-error"></div>


                    </div>
                    <div class="input-wrapper-register">
                        <label>Xác nhận mật khẩu</label>
                        <div class="search">
                            <input id="inputConfirmPassword" type="password" name="confirmPassword"
                                placeholder="   Xác nhận mật khẩu...">
                            <span class="input-icon-confirmPassword"><i class="fas fa-lock"></i></span>
                        </div>
                        <div id="confirmPassword-error" class="message-error"></div>


                    </div>

                    <div class="register-form-btn">
                        <button id="register-submit-button" type=" submit">Đăng ký</button>
                    </div>
                    <div id="register-error" class="message-error" style="text-align: center;font-size: 20px;"></div>
                    <div id="register-success" class="message-success" style="text-align: center;font-size: 20px;"></div>

                    <div class="form-register-footer">
                        <a id="login-link" class="link-login">Bạn đã có tài khoản Home X?
                        <span style="color: #ff0000;">Đăng nhập</span></a>
                    </div>
                </div>
            </form>

        </div>
        <div class="col-md-1"></div>
    </div>
</div>
</div>
<div class="foot-wrap">
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 col-xs-12 footer-logo-info-link">
            <a id="home-page-link" class="logo">
                <img class="logo-footer" src="./image/Logo1.png">

            </a>
        </div>
        <div class="col-md-6 info-home-X">
            <div class="hotline-info">
                <span><i class="fas fa-mobile-alt"></i></span>
                <span>Hotline: 0869.672.231</span>
            </div>
            <div class="email-info">
                <span><i class="fas fa-envelope"></i></span>
                <span>homeX@gmail.com</span>
            </div>
            <div class="address-info">
                <span><i class="fas fa-globe"></i></span>
                <span>VP Hà Nội: 22 Thành Công, HN</span>
            </div>
        </div>
        <div class="col-md-4 link-info">
            <a href="#" class="link-social">
                <span><i class="fab fa-facebook-square"></i></span>

            </a>
            <a href="#" class="link-social">
                <span><i class="fab fa-twitter-square"></i></span>

            </a>
            <a href="#" class="link-social">
                <span><i class="fab fa-instagram"></i></span>

            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 copyright-home-X">
            <span>2019<i class="far fa-copyright"></i>Home X. Bản quyền thuộc về công ty TNHH Home X Việt
                Nam. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng
                tôi</span>
        </div>
    </div>
</div>
</div>
`

components.loginPage =`

<nav class="nav-wrap nav-login">
<div class="nav-detail">
    <div class="container-fluid">
        <div class="row special-offers">
            <span class="col-md-12 col-xs-12 offer-1">Đăng kí thành viên Home X - Tích điểm thưởng và nhận
                ưu đãi</span>
            <span class="col-md-12 col-xs-12 offer-2">Nhanh chóng,tiện lợi và an toàn. Đăng ký liền tay rinh
                ngay quyền lời</span>
        </div>
    </div>
</div>
</nav>
<div class="body-wrap-login">
<div class="container-fluid">
    <div class="row body-background">
        <div class="col-md-2"></div>
        <div class="col-md-4 col-xs-12 logo-white-background" >
        <img src="image/Logo2.png">
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-3 col-xs-12 register-form">
            <form id="login-form" class="login-form-detail">
                <div class="name-wrapper-register">
                    <div class="h3-register">
                        <h3>Đăng nhập</h3>
                    </div>
                    <div class="input-wrapper-register">
                        <label>Địa chỉ email</label>
                        <div class="search">
                            <input id="inputEmail" type="text" name="email" placeholder="   Nhập email...">
                            <span class="input-icon-email"><i class="far fa-envelope"></i></span>
                        </div>
                        <div id="email-error" class="message-error"></div>


                    </div>

                    <div class="input-wrapper-register">
                        <div class="lable-password">
                            <label>Mật khẩu</label>
                            <span></span>
                        </div>
                        <div class="search">
                            <input id="inputPassword" type="password" name="password"
                                placeholder="   Nhập mật khẩu...">
                            <span class="input-icon-password"><i class="fas fa-lock"></i></span>
                        </div>
                        <div id="password-error" class="message-error"></div>


                    </div>
 
                    <div class="login-form-btn">
                        <button type="submit">Đăng nhập</button>
                    </div>
                    <div id="login-error" class="message-error" style="text-align: center;font-size: 20px;"></div>
                    <div id="login-success" class="message-success" style="text-align: center;font-size: 20px;"></div>

                </div>
                <div class="form-login-footer">
                    <a id="register-link" class="link-login">Bạn chưa có tài khoản Home X?
                    <span style="color: #ff0000;">Đăng ký</span></a>
                </div>
            </form>

        </div>
        <div class="col-md-1"></div>
    </div>
</div>
</div>
<div class="foot-wrap">
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 col-xs-12 footer-logo-info-link">
            <a id="home-page-link" class="logo">
                <img class="logo-footer" src="./image/Logo1.png">

            </a>
        </div>
        <div class="col-md-6 info-home-X">
            <div class="hotline-info">
                <span><i class="fas fa-mobile-alt"></i></span>
                <span>Hotline: 0869.672.231</span>
            </div>
            <div class="email-info">
                <span><i class="fas fa-envelope"></i></span>
                <span>homeX@gmail.com</span>
            </div>
            <div class="address-info">
                <span><i class="fas fa-globe"></i></span>
                <span>VP Hà Nội: 22 Thành Công, HN</span>
            </div>
        </div>
        <div class="col-md-4 link-info">
            <a href="#" class="link-social">
                <span><i class="fab fa-facebook-square"></i></span>

            </a>
            <a href="#" class="link-social">
                <span><i class="fab fa-twitter-square"></i></span>

            </a>
            <a href="#" class="link-social">
                <span><i class="fab fa-instagram"></i></span>

            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 copyright-home-X">
            <span>2019<i class="far fa-copyright"></i>Home X. Bản quyền thuộc về công ty TNHH Home X Việt
                Nam. Mọi hành vi sao chép đều là phạm pháp nếu không có sự cho phép bằng văn bản của chúng
                tôi</span>
        </div>
    </div>
</div>
</div>

`

components.homePage =`
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="image/slide-1.jpg" alt="..." width="100%" height="500px">
                <div class="carousel-caption d-none d-md-block">
                  <h1>Home X</h1>
                  <h4>Website đăng tin cho thuê phòng hàng đầu Việt Nam</h4>
                </div>
              </div>
              <div class="carousel-item">
                <img src="image/slide-2.PNG" alt="..." width="100%" height="500px">
                <div class="carousel-caption d-none d-md-block">
                  <h1>Home X</h1>
                  <h4>Website đăng tin cho thuê phòng hàng đầu Việt Nam</h4>
                </div>
              </div>
              <div class="carousel-item">
                <img src="image/slide-3.PNG" alt="..." width="100%" height="500px">
                <div class="carousel-caption d-none d-md-block">
                  <h1>Home X</h1>
                  <h4>Website đăng tin cho thuê phòng hàng đầu Việt Nam</h4>
                </div>
              </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        </div>
        
            <div class="body-wrap-homepage">
                <div class="container-fluid">
                    
                    <div class="row">
        
                        <div class="col-md-8 col-xs-12">
                            <div class="typeRoomName">
                                <h2><i class="fas fa-home"></i> Phòng mới nhất</h2>
                            </div>
                            <div id="list-apartments" class="row-list">
                            
                            
                                <!-- INNER COMPONENTS APARTMENTS HERE -->
                                    
                                </div>
                        </div>
                        <div class="col-md-1"></div>
                        
                        <div class="col-md-3 col-xs-12">
                                <div class="typeRoomName">
                                        <h2><i class="fas fa-check"></i> Đã xác thực</h2>
                                    </div>
                            <div id="list-verified-apartments" class="row-verified-list">
                            
        
                                <!-- INNER COMPONENTS APARTMENTS HERE -->
            
                            </div>
                        </div>
                        <div class="col-md-1"></div>
        
                        
        
                    </div>
                </div>
        
            </div>
        
        
        
        
            <div class="foot-wrap">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 col-xs-12 footer-logo-info-link">
                            <a href="#" id="home-page-link" class="logo">
                                <img class="logo-footer" src="./image/Logo1.png">
        
                            </a>
                        </div>
                        <div class="col-md-6 info-home-X">
                            <div class="hotline-info">
                                <span><i class="fas fa-mobile-alt"></i></span>
                                <span>Hotline: 0869.672.231</span>
                            </div>
                            <div class="email-info">
                                <span><i class="fas fa-envelope"></i></span>
                                <span>homeX@gmail.com</span>
                            </div>
                            <div class="address-info">
                                <span><i class="fas fa-globe"></i></span>
                                <span>VP Hà Nội: 22 Thành Công, HN</span>
                            </div>
                        </div>
                        <div class="col-md-4 link-info">
                            <a href="#" class="link-social">    
                                <span><i class="fab fa-facebook-square"></i></span>
        
                            </a>
                            <a href="#" class="link-social">
                                <span><i class="fab fa-twitter-square"></i></span>
        
                            </a>
                            <a href="#" class="link-social">
                                <span><i class="fab fa-instagram"></i></span>
        
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 copyright-home-X">
                            <span>2019<i class="far fa-copyright"></i>Home X. Bản quyền thuộc về công ty TNHH Home X Việt Nam. Mọi hành vi sao chép đều là
                                phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi</span>
                        </div>
                    </div>
                </div>
            </div
`



components.postingPage = `

<nav class="nav-wrap">
<div class="nav-detail">
    <div class="container-fluid">
        <div class="row special-offers">
            <span class="col-md-12 col-xs-12 offer-1">Đăng kí thành viên Home X - Tích điểm thưởng và nhận
                ưu đãi</span>
            <span class="col-md-12 col-xs-12 offer-2">Nhanh chóng,tiện lợi và an toàn. Đăng ký liền tay rinh
                ngay quyền lời</span>
        </div>
    </div>
</div>
</nav>
<div class="body-wrap-room-create">
<h2 class="h2-create">
    Đăng Phòng
</h2>
<form id="posting-form" class="posting-room-wrap">
    <div class="container-fluid">
        <div class="row">
            <h5 class="h5-create"><i class="fas fa-images"></i> Ảnh phòng</h5>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="file-image-room">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01"><i
                                    class="fas fa-image"></i></span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Chọn ảnh</label>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01"><i
                                    class="fas fa-image"></i></span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Chọn ảnh</label>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-4 col-xs-12">
                <div class="file-image-room">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01"><i
                                    class="fas fa-image"></i></span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Chọn ảnh</label>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01"><i
                                    class="fas fa-image"></i></span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Chọn ảnh</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h5 class="h5-create"><i class="fas fa-user-tie"></i> Thông tin chủ phòng</h5>

        </div>
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="user-room">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Tên</span>
                        </div>
                        <input id="owner-input" name ="owner" type="text" class="form-control" aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default">
                    </div>
                    <div id="owner-error" class="message-error"></div>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">SĐT</span>
                    </div>
                    <input id="phone-number-input" name="phoneNumber" type="text" class="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default">
                </div>
                <div id="phone-number-error" class="message-error"></div>
            </div>

        </div>
        <div class="row">
            <h5 class="h5-create"><i class="fas fa-home"></i> Thông tin phòng</h5>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="room-posting-details">
                    <div class="room-posting-details-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Thành
                                    Phố</label>
                            </div>
                            <select id="city-select" name="city" class="custom-select" id="inputGroupSelect01">
                                <option value="Thành phố">Thành phố</option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Đà Nẵng">Đà Nẵng</option>
                                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            </select>
                            </div>
                            <div id="city-error" class="message-error"></div>

                    </div>
                    <div class="room-posting-details-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Diện
                                    tích</span>
                            </div>
                            <input id="acreage-input" name="acreage" type="number" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default">
                                <span class="note-input">m2/phòng</span>
                        </div>
                        <div id="acreage-error" class="message-error"></div>
                    </div>
                    <div class="room-posting-details-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Địa
                                    chỉ</span>
                            </div>
                            <input id="address-input" name="address" type="text" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default">
                        </div>
                        <div id="address-error" class="message-error"></div>
                    </div>

                    <div class="room-posting-details-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Đặt cọc</span>
                            </div>
                            <input id="deposit-input" name="deposit" type="number" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default">
                                <span class="note-input">triệu/phòng</span>
                        </div>
                        <div id="deposit-error" class="message-error"></div>
                    </div>

                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="room-posting-details">
                    <div class="room-posting-details-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Loại
                                    Phòng</label>
                            </div>
                            <select name="typeRoom" class="custom-select" id="inputGroupSelect01">
                                <option value="Loại phòng">Loại phòng</option>
                                <option value="Phòng cho thuê">Phòng cho thuê</option>
                                <option value="Phòng ở ghép">Phòng ở ghép</option>
                                <option value="Kí túc xá">Kí túc xá</option>
                                <option value="Nhà nguyên căn">Nhà nguyên căn</option>
                                <option value="Căn hộ">Căn hộ</option>
                            </select>
                        </div>
                        <div id="type-room-error" class="message-error"></div>
                    </div>

                    <div class="room-posting-details-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Sức
                                    chứa</span>
                            </div>
                            <input id="capacity-input" name="capacity" type="number" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default">
                                <span class="note-input">người/phòng</span>
                        </div>
                        <div id="capacity-error" class="message-error"></div>
                    </div>
                    <div class="room-posting-details-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Giới tính</label>
                            </div>
                            <select name="sex" class="custom-select" id="inputGroupSelect01">
                                <option value="Giới tính">Giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Nam & Nữ">Nam & Nữ</option>
                            </select>
                        </div>
                        <div id="sex-error" class="message-error"></div>
                    </div>
                    <div class="room-posting-details-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Giá
                                    phòng</span>
                            </div>
                            <input id="price-input" name="price" type="number" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default">
                                <span class="note-input">triệu/phòng</span>
                        </div>
                        <div id="price-error" class="message-error"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h5 class="h5-create"><i class="fas fa-exclamation-triangle"></i> Mô tả thêm</h5>
        </div>
        <div class="row">
            <div class="col-md-8 col-xs-12">
                <div class="room-note">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Mô tả</span>
                        </div>
                        <textarea name="describe" class="form-control" aria-label="With textarea" rows="4"></textarea>
                    </div>
                    <div id="describe-error" class="message-error"></div>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-md-4 col-xs-12">
                <div class="create-room-btn">
                    <button id="submit-post-btn" type="submit">Đăng phòng</button>
                </div>
                <div id="post-result-message" class="message-error" style="font-size: 20px;"></div>
                <div id="post-result-success-message" class="message-success" style="font-size: 20px;"></div>

            </div>
            
        </div>
    </div>
</form>

</div>
<div class="foot-wrap">
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 col-xs-12 footer-logo-info-link">
            <a href="#" id="home-page-link" class="logo">
                <img class="logo-footer" src="./image/Logo1.png">

            </a>
        </div>
        <div class="col-md-6 info-home-X">
            <div class="hotline-info">
                <span><i class="fas fa-mobile-alt"></i></span>
                <span>Hotline: 0869.672.231</span>
            </div>
            <div class="email-info">
                <span><i class="fas fa-envelope"></i></span>
                <span>homeX@gmail.com</span>
            </div>
            <div class="address-info">
                <span><i class="fas fa-globe"></i></span>
                <span>VP Hà Nội: 22 Thành Công, HN</span>
            </div>
        </div>
        <div class="col-md-4 link-info">
            <a href="#" class="link-social">
                <span><i class="fab fa-facebook-square"></i></span>

            </a>
            <a href="#" class="link-social">
                <span><i class="fab fa-twitter-square"></i></span>

            </a>
            <a href="#" class="link-social">
                <span><i class="fab fa-instagram"></i></span>

            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 copyright-home-X">
            <span>2019<i class="far fa-copyright"></i>Home X. Bản quyền thuộc về công ty TNHH Home X Việt Nam.
                Mọi hành vi sao chép đều là
                phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi</span>
        </div>
    </div>
</div>
`

components.details = `
    <nav class="nav-wrap">
        <div class="nav-detail">
            <div class="container-fluid">
                <div class="row special-offers">
                    <span class="col-md-12 col-xs-12 offer-1">Đăng kí thành viên Home X - Tích điểm thưởng và nhận
                        ưu đãi</span>
                    <span class="col-md-12 col-xs-12 offer-2">Nhanh chóng,tiện lợi và an toàn. Đăng ký liền tay rinh
                        ngay quyền lời</span>
                </div>
            </div>
        </div>
    </nav>
        <div class="wrap">
            <div id="detail-apartment"></div>
        </div>


    <div class="foot-wrap">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 col-xs-12 footer-logo-info-link">
                    <a id="logo-bottom-details" class="logo">
                        <img class="logo-footer" src="./image/Logo1.png">

                    </a>
                </div>
                <div class="col-md-6 info-home-X">
                    <div class="hotline-info">
                        <span><i class="fas fa-mobile-alt"></i></span>
                        <span>Hotline: 0869.672.231</span>
                    </div>
                    <div class="email-info">
                        <span><i class="fas fa-envelope"></i></span>
                        <span>homeX@gmail.com</span>
                    </div>
                    <div class="address-info">
                        <span><i class="fas fa-globe"></i></span>
                        <span>VP Hà Nội: 22 Thành Công, HN</span>
                    </div>
                </div>
                <div class="col-md-4 link-info">
                    <a href="#" class="link-social">
                        <span><i class="fab fa-facebook-square"></i></span>

                    </a>
                    <a href="#" class="link-social">
                        <span><i class="fab fa-twitter-square"></i></span>

                    </a>
                    <a href="#" class="link-social">
                        <span><i class="fab fa-instagram"></i></span>

                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 copyright-home-X">
                    <span>2019<i class="far fa-copyright"></i>Home X. Bản quyền thuộc về công ty TNHH Home X Việt Nam.
                        Mọi hành vi sao chép đều là
                        phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi</span>
                </div>
            </div>
        </div>

`
components.managementPage =`
<div class="body-admin-wrap">
<div class="container-fluid">
    <div class="row">
        <h2>Quản lý bài đăng</h2>
    </div>
    <div class="row table-responsive">
        <table class="table table-striped table-dark">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Tiêu Đề</th>
                    <th scope="col">Email người đăng</th>
                    <th scope="col">Ngày đăng</th>
                    <th scope="col">Chức năng</th>
                    <th scope="col">Trạng thái</th>
                </tr>
            </thead>
            <tbody id="list-apartments-admin-page">
                <tr>

                <!---- INNER COMPONENTS HERE ---->

                <!---- EXAMPLE COMPONENTS
                    <td>1175 Giải Phóng,Hai Bà Trưng</td>
                    <td>thanhvipro8874@gmail.com</td>
                    <td>24/10/2019</td>
                    <td class="btn-fnc">
                        <button id="approved"><i class="fas fa-user-check"></i></button>
                        <button id="deleted"><i class="fas fa-trash-alt"></i></button>
                    </td>
                    <td></td> ---->

                </tr>
            </tbody>
        </table>

    </div>
</div>

</div>
<div class="foot-wrap">
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 col-xs-12 footer-logo-info-link">
            <a href="#" id="home-page-link" class="logo">
                <img class="logo-footer" src="./image/Logo1.png">

            </a>
        </div>
        <div class="col-md-6 info-home-X">
            <div class="hotline-info">
                <span><i class="fas fa-mobile-alt"></i></span>
                <span>Hotline: 0869.672.231</span>
            </div>
            <div class="email-info">
                <span><i class="fas fa-envelope"></i></span>
                <span>homeX@gmail.com</span>
            </div>
            <div class="address-info">
                <span><i class="fas fa-globe"></i></span>
                <span>VP Hà Nội: 22 Thành Công, HN</span>
            </div>
        </div>
        <div class="col-md-4 link-info">
            <a href="#" class="link-social">
                <span><i class="fab fa-facebook-square"></i></span>

            </a>
            <a href="#" class="link-social">
                <span><i class="fab fa-twitter-square"></i></span>

            </a>
            <a href="#" class="link-social">
                <span><i class="fab fa-instagram"></i></span>

            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 copyright-home-X">
            <span>2019<i class="far fa-copyright"></i>Home X. Bản quyền thuộc về công ty TNHH Home X Việt Nam.
                Mọi hành vi sao chép đều là
                phạm pháp nếu không có sự cho phép bằng văn bản của chúng tôi</span>
        </div>
    </div>
</div>


`
