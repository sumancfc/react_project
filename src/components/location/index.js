import React from 'react';


const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.424060377229!2d85.30458425101283!3d27.70419033215226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18561aa35c89%3A0xcf3388483ba8f375!2sKathmandu+Durbar+Square!5e0!3m2!1sen!2snp!4v1543424919831"
            width="100%" 
            titel="location_title"
            height="500px" 
            frameBorder="0" 
            allowFullScreen></iframe>
            

            <div className="location_tag">
                <div>
                    Location
                </div>
        </div>

        </div>

        
    );
};

export default Location;