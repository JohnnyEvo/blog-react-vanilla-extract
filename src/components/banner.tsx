import {FunctionComponent, ReactNode} from "react";
import {banner, separator} from "@/styles/components/banner.css";

type Props = {
    children: ReactNode,
}

const Banner: FunctionComponent<Props> = ({children}) => {
    return (
        <div className={banner}>
            <hr className={`${separator}`}/>
            {children}
            <hr className={`${separator}`}/>
        </div>
    )
}

export default Banner;
