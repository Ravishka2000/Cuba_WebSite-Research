import React from 'react';

const ContactUs = () => {
    return (
        <div className="py-20 px-6 w-full" id="contact">
            <h1 className="heading">
                Contact <span className="text-purple">Us</span>
            </h1>

            <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0 p-20">
                {/* Left Section: Contact Form */}
                <div className="w-full md:w-1/2">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                id="name"
                                type="text"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                id="message"
                                rows={5}
                                placeholder="Type your message..."
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section: Contact Details */}
                <div className="w-full md:w-1/2 border-t md:border-l border-gray-600 md:border-t-0 pt-8 md:pt-0 pl-0 md:pl-8">
                    <h2 className="text-2xl font-bold mb-6 text-green-400">Get in Touch</h2>
                    <p className="text-gray-300 mb-6">
                        Feel free to contact us for any queries. We are here to assist you!
                    </p>
                    <p className="text-gray-300 mb-6">
                        You can also reach us at <br />
                        <a href="mailto:researchcuba@gmail.com" className="text-green-400 underline">
                            researchcuba@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-300 mb-6">
                        Thank you for visiting our site. We hope you found everything you were looking for!
                    </p>
                    <p className="text-gray-100 font-bold">- Team Cuba</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
