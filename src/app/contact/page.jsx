import React from "react";

const ContactPage = () => {
  return (
    <div className="container">
      <section className="mt-10 mb-10 bg-gray-200 py-20 relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/hand-hold-icon-symbol-telephone-email-contact-website-page-contact-us-e-mail-marketing-concept-dark-beton-background_150455-12707.jpg?w=1380')",
          }}
        ></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white bg-opacity-75 shadow-lg rounded-lg px-8 py-10 md:p-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                Get in Touch
              </h2>
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
                    id="nameInput"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
                    id="emailInput"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-primary"
                    id="messageInput"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <input
                    type="checkbox"
                    id="copyCheckbox"
                    className="mr-2"
                    checked
                  />
                  <label htmlFor="copyCheckbox">
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="button"
                  className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-600 focus:outline-none focus:bg-primary-600"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-0"></div>
      </section>
    </div>
  );
};

export default ContactPage;
