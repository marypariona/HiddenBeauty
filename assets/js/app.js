import {OpenModalSearch,InputPlaceholder} from "./components/Search";
import hamburgerMenu from "./components/Hamburger-menu";

// Some convenient tools to get you started…
import ReplaceObfuscatedEmailAddresses from "./components/ReplaceObfuscatedEmailAddresses";
import AnimateOnPageLinks from "./components/AnimateOnPageLinks";

document.addEventListener('DOMContentLoaded',(e)=>{
    OpenModalSearch('#btn_modal_search','#search_modal','#btn_close_modal');
    InputPlaceholder('#s');
    hamburgerMenu('#btn_open_nav','#navbar_primary');
});
