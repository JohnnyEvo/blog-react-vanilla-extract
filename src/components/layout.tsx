import * as base from "@/styles/index.css";
import Container from "@/components/container";
import {FunctionComponent, ReactNode} from "react";
import Header from "@/components/header";
import Nav from "@/components/nav";

type Props = {
    children: ReactNode
}
const Layout: FunctionComponent<Props> = ({children}) => {
    return (
        <>
            <main className={`${base.theme} ${base.index}`}>
                <Container>
                    <Header></Header>
                    <Nav />
                    {children}
                </Container>
            </main>
        </>
    )
}

export default Layout;
