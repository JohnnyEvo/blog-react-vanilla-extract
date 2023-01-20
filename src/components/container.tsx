import {FunctionComponent, ReactNode} from "react";
import {c} from "@/styles/index.css";

type Props = {
    children: ReactNode
}
const Container: FunctionComponent<Props> = ({children}) => {
    return (
     <>
         <div className={c.container}>
             {children}
         </div>
     </>
    )
}

export default Container;