import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
            About Us
          </h1>
          <p className="text-center text-xl mb-12">
            Welcome to CharteredInfo, your trusted platform for connecting with
            highly qualified Chartered Accountants. Our mission is to empower
            individuals, entrepreneurs, and businesses with reliable financial
            solutions and expert advice.
          </p>

          {/* Single Column Layout */}
          <div className="flex flex-col gap-8 bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Our Vision
              </h2>
              <p className="text-lg mb-4">
                We aspire to create a future where accessing professional
                financial expertise is effortless, effective, and tailored to
                individual needs. By embracing innovation and dedication, we aim
                to promote financial empowerment and set new benchmarks in the
                field of accountancy.
              </p>

              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Our Mission
              </h2>
              <p className="text-lg mb-4">
                Our mission is to connect individuals, businesses, and
                organizations with expert Chartered Accountants who deliver
                reliable, accurate, and personalized financial services. We are
                committed to bridging the gap through trust, professionalism,
                and excellence in service delivery.
              </p>

              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Benefits at CharteredInfo?
              </h2>
              <ul className="list-disc list-inside text-lg">
                <li>
                  Gain access to a diverse network of licensed and skilled
                  Chartered Accountants.
                </li>
                <li>
                  Enjoy transparent pricing with clear and open communication
                  channels.
                </li>
                <li>
                  Benefit from end-to-end services in accounting, taxation,
                  auditing, and financial management.
                </li>
                <li>
                  Navigate your financial needs effortlessly on a user-friendly
                  and efficient platform.
                </li>
                <li>
                  Experience dedicated support designed to address your unique
                  requirements at every stage.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-8">
                What We Offer
              </h2>
              <p className="mb-4">
                Whether you're an entrepreneur, a freelancer, or managing
                corporate finances, we provide tailored solutions including:
              </p>
              <ul className="list-disc list-inside text-lg">
                <li>Taxation services: Filing, planning, and compliance.</li>
                <li>
                  Auditing and assurance to strengthen trust in your financial
                  statements.
                </li>
                <li>Financial advisory for long-term growth and stability.</li>
                <li>
                  Bookkeeping and account management for businesses of all
                  sizes.
                </li>
              </ul>
            </div>
          </div>

          {/* Dedicationt Section */}
          <div className="mt-12 text-center bg-white bg-opacity-50 p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Dedication to Excellence
            </h2>
            <p className="text-lg mb-4">
              At CharteredInfo, we strive to maintain the highest levels of
              trust, professionalism, and client satisfaction. Whether you need
              guidance for personal financial decisions or support with
              intricate business strategies, our experienced professionals are
              here to help every step of the way.{" "}
            </p>
            <p className="text-lg">
              Be part of a thriving network that prioritizes your financial
              success. Discover a platform where your goals are met with
              expertise, dedication, and a commitment to excellence.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
