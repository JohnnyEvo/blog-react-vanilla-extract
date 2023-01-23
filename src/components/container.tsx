import {FunctionComponent, ReactNode} from "react";
import {container} from "@/styles/components/container.css";

type Props = {
    children: ReactNode
}
const Container: FunctionComponent<Props> = ({children}) => {
    return (
     <>
         <div className={container}>
             {children}
         </div>
     </>
    )
}

export default Container;