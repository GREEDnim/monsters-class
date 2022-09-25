import { Component } from "react";
import Card from "../card/card";
import './cardlist.component.styles.css';
class CardList extends Component
{

    render()
    {
        return (
            <div className="card-list">
            {this.props.monsters.map( (monster)=>{
                    return (
                            <Card monster={monster}></Card>
                        
                    )
                                                    }             
                             )

            }
            </div>
           
            )
       
        
        
    }
}
export default CardList;