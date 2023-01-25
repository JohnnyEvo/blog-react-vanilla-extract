import {FunctionComponent} from "react";
import {aside, close, image, text} from "@/styles/components/aside.css";
import Image from "next/image";
import Cross from "@/assets/icons/cross.svg";

const Aside: FunctionComponent = () => {
    return (
        <aside className={aside}>
            <i className={close}><Image src={Cross} alt={"Fermer"} className={image} /></i>
            <p className={text}>
                Hello ! Je suis Johnny, développeur full-stack et je partage ici ma pratique du développement. Vous êtes ici dans un espace de partage, n’hésitez pas à partager votre vision ou à posez vos questions. Tout le monde a à apprendre             </p>
        </aside>
    )
}

export default Aside;
