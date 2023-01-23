import {FunctionComponent} from "react";
import {pill, background} from "@/styles/components/pill.css";

interface Props {
    variant?: 'primary'|'secondary'|'alternative'
}

const Pill: FunctionComponent<Props> = ({variant='primary'}) => {
    let b = background[variant];
    return (
        <figure className={`${pill} ${b}`}>
            Refacto
        </figure>
    )
}

export default Pill;
