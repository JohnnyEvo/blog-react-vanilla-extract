import {FunctionComponent, ReactNode} from "react";
import {container} from "@/styles/components/container.css";
import {footer} from "@/styles/components/footer.css";

const Footer: FunctionComponent = () => {
    return (
     <>
         <div className={footer}>
             <p>copyright © - 2023</p>
         </div>
     </>
    )
}

export default Footer;