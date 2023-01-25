import {FunctionComponent} from "react";
import {aside, card, image, title} from "@/styles/components/card.css";

const Card: FunctionComponent = () => {
    return (
        <figure className={card}>
            <div className={image}>
            </div>
            <h2 className={title}>De STUPID à SOLID</h2>
            <div className={aside}>
                <div>12/03/2023</div>
                <div>
                    -
                </div>
            </div>
        </figure>
    )
}

export default Card;
