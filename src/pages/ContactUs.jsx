import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    toast.success("We Will Contact You Shortly", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // 3 seconds
    });

    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
    });
    event.preventDefault();
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="p-4 my-4 md:my-10 mx-4 md:mx-auto md:w-2/3 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center border-2 border-pink-500 rounded-lg p-4">
            <span className="text-2xl mr-2">
              <FiMail color="black" />
            </span>
            <p className="text-sm flex-grow">decencyconstruction05@gmail.com</p>
          </div>

          <div className="flex items-center border-2 border-pink-500 rounded-lg p-4">
            <span className="text-2xl mr-2">
              <FiPhone color="black" />
            </span>
            <p className="text-lg flex-grow">+91 90082 67805</p>
          </div>
          <div className="flex items-center border-2 border-pink-500 rounded-lg p-4">
            <span className="text-2xl mr-2">
              <FiMapPin color="black" />
            </span>
            <p className="text-lg flex-grow">
              Kadarkoppa Road, Near SBI Bank, Mudol
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 text-left">
          <input
            type="text"
            placeholder="Name"
            className="bg-white border-2 border-pink-500 border-opacity-100 rounded-md px-4 py-2 w-full mb-4"
            value={formData.name}
            onChange={handleInputChange("name")}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-white border-2 border-pink-500 border-opacity-100 rounded-md px-4 py-2 w-full mb-4"
            value={formData.phoneNumber}
            onChange={handleInputChange("phoneNumber")}
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-white border-2 border-pink-500 border-opacity-100 rounded-md px-4 py-2 w-full mb-4"
            value={formData.email}
            onChange={handleInputChange("email")}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
        <div className="w-full md:w-1/2 text-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3832.167685686567!2d75.37109187513776!3d16.160300684532498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDA5JzM3LjEiTiA3NcKwMjInMjUuMiJF!5e0!3m2!1sen!2sin!4v1703673391711!5m2!1sen!2sin"
            width="450"
            height="250"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ContactUs;
