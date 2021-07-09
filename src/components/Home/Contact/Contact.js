import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="title">
                    <h5>Contact us</h5>
                    <h3>Always Connect with us</h3>
                </div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-2 mx-auto">
                        <form action="#">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email (Required)" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-btn">
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;