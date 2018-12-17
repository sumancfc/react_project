import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../ui/MyButton';

export default class Discount extends Component {

    state = {
        discountStart : 0,
        discountEnd : 30
    }

    percentage = () => {
         if(this.state.discountStart < this.state.discountEnd) {
            this.setState ({
                discountStart: this.state.discountStart + 1
            })
         }        
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage();
        },50);
    }

  render() {
    return (
       
      <div className="center_wrapper">
          <div className="discount_wrapper">

                <Fade
                onReveal={()=>this.percentage()}
                >
                    <div className='discount_percentage'>
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
            
            <Slide right>
                    <div className="discount_description">
                       <h3>Purchase tickets before 31 December</h3>
                       <p>
                         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>


             <MyButton 
                text="Purched Tickets"
                bck="#ffa800"
                color="#ffffff"
                link="Http://google.com"
             />
            </div>

            </Slide>
             
          </div>
        
      </div>
    );
  }
}
