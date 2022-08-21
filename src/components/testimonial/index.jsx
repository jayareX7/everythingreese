import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const SingleTestimonial = ({
    image,
    description,
    name,
    date,
    dateSlug,
    socials,
    title,
}) => {
    return (
        <div className="single_blog flex sm:flex-row md:flex-row items-center mt-7">
            <div className="blog_thumb w-28 justify-center items-center sm:w-28 md:w-28 lg:w-48 flex-shrink-0">
                <div className="block">
                    {image ? (
                        <GatsbyImage
                            className="rounded-4xl"
                            image={getImage(image)}
                            alt={name}
                        />
                    ) : (
                        <StaticImage
                            className="rounded-4xl"
                            src="../../assets/images/placeholder-image.png"
                            alt={name}
                        />
                    )}
                </div>
            </div>

            <div className="blog_content ml-4 md:ml-4 lg:ml-9">
                <div className="text-blue">{name}</div>
                <Link to={`/date/${dateSlug}`} className="mb-2 block">
                    <i className="icofont-calendar text-primary mr-2"></i>
                    {dateSlug}
                </Link>
                <h3 className="font-bold truncate-text mb-1 md:mb-3 md:text-sm lg:text-sm">
                    <div className="hover:text-primary">
                        {description || "Blog Title"}
                    </div>
                </h3>
                <Link
                    to={name}
                    className="pl-11 text-sm font-medium sm:uppercase hover:text-primary relative 
                    text-white 
                    after:absolute
                    content-after
                  after:bg-primary
                    after:w-8 
                    after:h-0.5
                    after:z-0 
                    after:top-1/2 
                    after:left-0 
                    after:transform 
                    after:-translate-y-2/4 
                    after:transition 
                    after:opacity-100"
                >
                    more
                </Link>
            </div>
        </div>
    );
};
SingleTestimonial.propTypes = {
    image: PropTypes.object,
    name: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    dateSlug: PropTypes.string,
    socials: PropTypes.array,
    description: PropTypes.string,
};

export default SingleTestimonial;
