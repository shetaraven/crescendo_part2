function toggle_menu_func() {
    let element = document.getElementsByClassName("mobile_toggle_menu");
    element[0].classList.toggle("navbar_mobile--checked");
    document.getElementsByClassName("dimmer")[0].classList.toggle("dimmer--show");
}