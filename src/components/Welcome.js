import React from 'react';

class Welcome extends React.Component{
    
    render (){
        return( 
            <section className="sec welcome">
                <div className="inner-wrapper">
                    <h1>Welcome to Home page</h1>
                    <p>Nullam rutrum lacus odio, eu sagittis arcu tristique id. Class aptent taciti 
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Nam sed enim vitae dui suscipit auctor. Donec nec orci ut lorem bibendum 
                    feugiat vel vel lorem. Fusce risus nisi, lacinia nec sapien vitae, aliquet 
                    iaculis urna. Donec in lorem arcu. Phasellus condimentum, elit at imperdiet 
                    euismod, sem nisi convallis justo, at luctus sem mauris vel sem. Phasellus 
                    iaculis mauris accumsan, cursus nisi a, efficitur velit. Donec felis dui, 
                    pretium non nisi id, laoreet elementum metus. Duis sem erat, mollis ultrices 
                    elit non, rutrum tempor orci.</p> 
                    <p>Cras lectus purus, gravida et sollicitudin a, 
                    tempus nec leo. Nulla ac scelerisque eros, vitae auctor massa</p>
                </div>
            </section>
         );       
    }
}
export default Welcome;