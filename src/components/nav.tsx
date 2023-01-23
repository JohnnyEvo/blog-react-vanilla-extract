import {FunctionComponent} from "react";
import {nav, separator, container} from "@/styles/components/nav.css";
import Pill from "@/components/pill";

const Nav: FunctionComponent = () => {
    return (
        <nav className={nav}>
            <hr className={`${separator}`}/>
            <div className={container}>
                <Pill variant={"primary"} />
                <Pill variant={"secondary"} />
                <Pill variant={"alternative"}/>
            </div>
            <hr className={`${separator}`}/>
        </nav>
    )
}

export default Nav;
