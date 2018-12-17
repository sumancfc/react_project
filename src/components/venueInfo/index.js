import React from 'react';
import Zoom from "react-reveal/Zoom";

import icon_calender from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className='vn_wrapper'>

                    {/* For Event and Date */}
                 <Zoom duration={400}>
                    <div className="vn_item">
                    <div className="vn_outer">
                    <div className="vn_inner">
                        <div className="vn_icon_square bck_red">

                        </div>
                        <div className="vn_icon"
                        style={{background: `url(${icon_calender})`}}
                        > </div>

                        <div className="vn_title">
                            Event and Time
                        </div>

                        <div className="vn_desc">
                            Jan 1, 2019 @ 4 p.m
                        </div>
                    </div>
                    </div>
                    </div>
                </Zoom>


                    {/* For Event location */}
                    <Zoom duration={400} delay={400}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow">

                                    </div>
                                    <div className="vn_icon"
                                        style={{ background: `url(${icon_location})` }}
                                    > </div>

                                    <div className="vn_title">
                                        Event Location
                        </div>

                                    <div className="vn_desc">
                                        Basantapur, Kathmandu, Nepal
                        </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                
                </div>
            </div>     
        </div>
    );
};

export default VenueInfo;