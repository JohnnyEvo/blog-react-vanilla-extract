import * as base from "@/styles/index.css";
import Container from "@/components/container";
import {FunctionComponent, ReactNode} from "react";

type Props = {
    children: ReactNode
}
const Layout: FunctionComponent<Props> = ({children}) => {
    return (
        <>
            <main className={`${base.theme} ${base.index}`}>
                <Container>{children}</Container>
            </main>
        </>
    )
}

export default Layout;
