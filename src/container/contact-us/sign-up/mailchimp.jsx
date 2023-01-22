import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import Button from "../../../components/shared/button";

function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { result, msg } = await addToMailchimp(email);
        result === "success" && setEmail("");
        // Removes the HTML returned in some response messages in case of error
        setMessage(msg.split("<")[0]);
        setStatus(result);
    };

    const handleChange = (event) => setEmail(event.target.value);

    return (
        <form className="grid gap-x-8 grid-cols-1 right">
            <span className="subscribe-form__title">
                Subscribe for latest updates
            </span>
            <div className="single-fild">
                <input
                    className="px-6 h-14 mb-3 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                    type="email"
                    onChange={handleChange}
                    value={email}
                    placeholder="example@domain.com"
                    required
                />
                <span
                    status={status}
                    className={
                        status === "success"
                            ? "subscribe-form__message_success"
                            : "subscribe-form__message_failure"
                    }
                >
                    {message}
                </span>
            </div>

            <div className="right">
                <button
                    className="border-secondary-90 h-12 md:h-12 sm:h-12 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-btn focus:outline-none"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Subscribe
                </button>
            </div>
        </form>
    );
}

export default SubscribeForm;
