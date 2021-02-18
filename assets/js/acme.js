function toggle_menu_func() {
    let element = document.getElementById("toggle_menu");
    element.classList.toggle("navbar_mobile--checked");
    document.getElementById("dimmer").classList.toggle("dimmer--show");
}