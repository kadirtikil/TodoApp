import './HomeBody.scss'

import BodyDescription from '../../../assets/BodyDescription.svg';
import BodyDescriptionAddition from '../../../assets/BodyDescriptionAddition.svg';


export default function HomeBodyComponent() {


    return (
        <>
            <div className="homebodycomponentcontainer">
                <div className="unfunnyjoke">
                    <img src={BodyDescription} width={600} alt="" />
                    <img src={BodyDescriptionAddition} width={600} alt="" />
                </div>
            </div>
        </>
    )
}