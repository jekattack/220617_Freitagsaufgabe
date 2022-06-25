import '../Components.css';
import './Menu.css';
import { ReactComponent as CGLogoWort } from '../../images/CGLogoWort.svg';

export default function Menu(){

    return(
        <div className={"wrapper"}>
            <div id={"menu-wrapper"}>
                <CGLogoWort className={"logo"}/>
                <h1>Menu</h1>
            </div>
        </div>
    )
}