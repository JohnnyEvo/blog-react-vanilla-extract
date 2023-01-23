import {FunctionComponent} from "react";
import {subtitle as subtitleName, title as titleName} from "@/config";
import {header, title, mainTitle, subTitle, separator} from "@/styles/components/header.css";
import Searchbar from "@/components/searchbar";

const Header: FunctionComponent = () => {
    return (
        <header className={header}>
            <div className={title}>
                <h1 className={mainTitle}>{titleName}</h1>
                <span className={separator}>·</span>
                <span className={subTitle}>{subtitleName}</span>
            </div>
            <div>
                <Searchbar></Searchbar>
            </div>
        </header>
    )
}

export default Header;
