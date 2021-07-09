import React from 'react';
import './Blog.scss';
import testimonialOne from '../../../images/testimonial-1.png';
import testimonialTwo from '../../../images/testimonial-2.png';
import testimonialThree from '../../../images/testimonial-3.png';
import BlogCard from '../BlogCard/BlogCard';


const BloglData = [
    {
        image: testimonialOne,
        title: 'Winson',
        subTitle: 'California',
        heading: '2 Times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },
    {
        image: testimonialTwo,
        title: 'Herry',
        subTitle: 'California',
        heading: '2 Times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },
    {
        image: testimonialThree,
        title: 'Jerry',
        subTitle: 'California',
        heading: '2 Times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus repudiandae eligendi nisi, ipsam fugit dolor delectus harum eius quos?',
    },

]

const Blog = () => {
    return (
        <section className="blog">
             <div className="container">
             <div className="title">
                    <h5>Our Blogs</h5>
                    <h3>From Our Blog News</h3>
                </div>
                <div className="row">
                    {
                        BloglData.map(info => <BlogCard info={info}></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;