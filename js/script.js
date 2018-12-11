// Deactivate all list items and activate the clicked item with its content.
selectFunc = (event) => {
    let items = Array.from(document.getElementsByClassName("mdc-list-item"));
    
    // Activate an route.
    items.map(it => it.classList.remove("mdc-list-item--activated"));
    event.target.classList.add("mdc-list-item--activated");

    // Turn content invisible.
    Array.from(document
                    .getElementsByClassName("principal-content"))
                    .map(it => it.style.setProperty("display", "none"));
    
    let routeName = event.target.hash.substr("2");

    // Turn route's content visible.
    document
        .getElementById(routeName)
        .style
        .setProperty("display", "block");

    // Choose correct title to the active route.
    document
        .getElementById("top-app-bar-title")
        .innerHTML = routeName.charAt(0).toUpperCase() + routeName.slice(1);

}

// Control the selection of a route at the sidebar.
let list = Array.from(document.getElementsByClassName("mdc-list-item"));
list.map(it => it.addEventListener("click", selectFunc));

// Change drawer's visibility.
changeDrawerVisibility = () => {
    const drawerStyleDisplay = getComputedStyle(document.getElementsByClassName("mdc-drawer")
                                                                                            [0],
                                                                                            null).display
    let drawer = document.getElementsByClassName("mdc-drawer")[0];

    drawerStyleDisplay === "none" ?
        drawer.style.setProperty("display", "flex", "important") :
        drawer.style.setProperty("display", "none", "important")

}

// Add opening event to the drawer.
document
    .getElementById("navigation-icon")
    .addEventListener("click", changeDrawerVisibility);

// Add closing event to the drawer.
document
    .getElementById("navigation-icon-close")
    .addEventListener("click", changeDrawerVisibility);

// Handle images' rotation.
handleRotation = (event) => {
    let { classList } = event.target;
    classList.contains("rotation") ?
        classList.remove("rotation") :
        classList.add("rotation");
}

// Adds rotation handler to card's images.
let imgs = Array.from(document.getElementsByClassName("my-card-img"));
imgs.map(img => img.addEventListener("click", handleRotation))
