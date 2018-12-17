import React, { Component } from 'react'

import MyButton from '../ui/MyButton';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {
                 state = { prices: [100, 200, 300], positions: ["Balcony", "Medium", "Star"], desc: ["Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."], linkto: ["http://google.com", "http://google.com", "http://google.com"],
                delay:[500, 0, 500] };

                 showBoxes = () => this.state.prices.map(
                     (box, i) => (
                  <Zoom delay={this.state.delay[i]} key={i}>
                  <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                      <div className="pricing_title">
                        <span>Rs.{this.state.prices[i]}</span>
                        <span>
                          {this.state.positions[i]}
                        </span>
                      </div>
                      <div className="pricing_description">
                        {this.state.desc[i]}
                      </div>
                      <div className="pricing_buttons">
                        <MyButton
                          text="Purches"
                          bck="#ffa800"
                          color="#ffffff"
                          link={this.state.linkto[i]}
                        />
                      </div>
                    </div>
                  </div>
                  </Zoom>
                     )
                   );

                 render() {
                   return <div className="bck_black">
                       <div className="center_wrapper pricing_section">
                         <h2>Pricing</h2>

                         <div className="pricing_wrapper">
                           {this.showBoxes()}
                         </div>
                       </div>
                     </div>;
                 }
               }
