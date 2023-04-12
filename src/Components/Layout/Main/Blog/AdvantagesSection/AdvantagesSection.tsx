import "./AdvantagesSection.css";
import advantage1image from "./advantage1image.jpg";
import advantage2image from "./advantage2image.jpg";
import advantage3image from "./advantage3image.jpg";
import advantage4image from "./advantage4image.jpg";

function AdvantagesSection(): JSX.Element {

    return (
        <div className="AdvantagesSection">
			      <div className="advantages_container">
                    <h3 className="advantages_title">היתרונות בשפה האנגלית</h3>
                    <div className="advantages_boxes">
                        <div className="advantage_box">
                            <img src={advantage1image} alt="" />
                            
                        </div>
                        <div className="advantage_box">
                            <img src={advantage2image} alt="" />
                            
                        </div>
                        <div className="advantage_box">
                            <img src={advantage3image} alt="" />
                            
                        </div>
                        <div className="advantage_box">
                            <img src={advantage4image} alt="" />
                            
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default AdvantagesSection;
