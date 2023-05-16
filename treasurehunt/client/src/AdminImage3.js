import React from "react";
import wonders from "./sevenwonders.PNG";
function AdminImage3()
{
    return(
        <div className="row justify-content-center">
        <div className="col-12 col-md-6">
            <img src={wonders} alt="sevenwonders" className="w-100" usemap="#image-map"/>
            <map name="image-map">
                <area target="_blank" alt="taj" title="I can cause love, but that’s not the ideal outcome. I’m always happy to serve. who am I?" href="http://link1.com" coords="5,7,150,150" shape="rect"/>
                <area target="_blank" alt="colloseum" title="Ancient Egyptians wrote me upside down, creating a symbol that resembled a steer with horns. Whom am I?" href="http://link2.com" coords="440,170,597,320" shape="rect"/>
                <area target="_blank" alt="petra" title="Hurray you won the treasure" href="http://link3.com" coords="160,7,290,150" shape="rect"/>
                <area target="_blank" alt="seven" title="I am always running, but never get tired or hot. What am I?" href="http://link4.com" coords="160,170,230,200" shape="rect"/>
                <area target="_blank" alt="electricity" title="You bury me when I am alive,and dig me up when I die.What am I?" href="http://link5.com" coords="760,68,75" shape="circle"/>
                <area target="_blank" alt="goc" title="I have a plug but I’m not a sink,I can be mounted but I’m not a horse,I’m found in the living room but I’m not a sofa,I have a screen but I’m not a laptop,I have a remote control but I’m not a drone" href="http://link6.com" coords="5,170,150,330" shape="rect"/>
            </map>
        </div>
        </div>
    );
}
export default AdminImage3;