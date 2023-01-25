import {container} from "@/styles/components/nav.css";
import Pill from "@/components/pill";

const Nav = () => {
    return (
        <nav className={container}>
            <Pill variant={"primary"} />
            <Pill variant={"secondary"} />
            <Pill variant={"alternative"}/>
        </nav>
    )
}

export default Nav;
