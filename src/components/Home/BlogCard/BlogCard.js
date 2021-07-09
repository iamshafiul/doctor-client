import React from 'react';

const BlogCard = ({info}) => {
    return (
        <div className="col-md-4 col-sm-12">
             <div class="card border-0 shadow bg-body rounded mb-3">
                <div class="card-body">
                    <div className="content d-flex align-items-center">
                        <div className="img mr-4">
                            <img src={info.image} alt="blog" />
                        </div>
                        <div className="text">
                            <h5 className="card-title">{info.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{info.subTitle}</h6>
                        </div>
                    </div>
                    <h4 className="card-title my-4">{info.heading}</h4>
                    <p className="card-text">{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;