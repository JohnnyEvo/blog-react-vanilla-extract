import * as base from "@/styles/index.css";
import {FunctionComponent, ReactNode} from "react";
import {lightTheme, darkTheme} from "@/styles/index.css";
import {onlyDesktop} from "@/styles/components/helpers.css";

type Props = {
    children: ReactNode,
}
const Layout: FunctionComponent<Props> = ({children}) => {
    return (
        <>
            <main className={`${lightTheme} ${base.index}`}>
                <div className={onlyDesktop}></div>
                {children}
                <div></div>
            </main>
        </>
    )
}

export default Layout;
