import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/title";
import SingleTestimonial from "../../../components/testimonial";

const TestimonialArea = ({ data }) => {
    return (
        <section className="latest-blog-section bg-secondary-90 pt-16 pb-24  md:pt-28 md:pb-28 relative">
            <span className=" absolute w-2/6 h-2 right-0 top-24 xs:block sm:hidden md:block md:top-48 bg-primary"></span>

            <div className="container px-4">
                {data?.section_title && (
                    <div className="section-title mb-15">
                        <SectionTitle
                            heading={data?.section_title.heading}
                            {...data.section_title}
                        />
                    </div>
                )}
                <div className="flex flex-wrap -mt-8">
                    {data?.items &&
                        data?.items.map((item) => (
                            <div
                                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 px-4"
                                key={`blog-post-${item.title}`}
                            >
                                <SingleTestimonial
                                    date={item?.date}
                                    image={item?.images[0].src}
                                    alt={item?.images[0].alt}
                                    title={item?.title}
                                    description={item?.description}
                                    name={item?.name}
                                    designation={item?.designation}
                                    socials={item?.socials}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};
TestimonialArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};

export default TestimonialArea;
