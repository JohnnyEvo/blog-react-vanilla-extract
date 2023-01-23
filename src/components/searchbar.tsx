import {FunctionComponent} from "react";
import SearchIcon from '@/assets/icons/search.svg';
import {group, icon, border, field, image} from "@/styles/components/input.css";
import Image from "next/image";

const Searchbar: FunctionComponent = () => {
    return (
        <form>
            <div className={`${group} ${border}`}>
                <i className={icon}><Image src={SearchIcon} alt={'Rechercher'} className={image} /></i>
                <input type="text" className={field} placeholder={"rechercher"}/>
            </div>
        </form>
    )
}

export default Searchbar;
