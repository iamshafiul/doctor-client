import React from 'react';
import './Exceptional.scss';
import exceptional from '../../../images/exceptional.png';

const Exceptional = () => {
    return (
        <section className="exceptional">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-sm-12">
                        <div className="img">
                            <img src={exceptional} alt="exceptional" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 align-self-center">
                        <div className="content">
                            <h2>Exceptional Dental Care,<br/>On Your Terms</h2>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem doloribus aspernatur iste ipsum unde ullam officia ab possimus, soluta id vero fugiat ipsam quasi molestias ducimus, quos voluptas harum! Quae voluptatum quam aliquam tempora debitis praesentium exercitationem corporis, at amet libero, nisi rem quia odio quidem suscipit fuga obcaecati?</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exceptional;