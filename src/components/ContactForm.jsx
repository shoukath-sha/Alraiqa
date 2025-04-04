// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully!");
//     setFormData({ name: "", phone: "", email: "", message: "" });
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FAF8F5] px-6 py-12">
//       {/* Left - Contact Info */}
//       <div className="md:w-1/3 w-full p-8 bg-transparent flex flex-col justify-center md:min-h-[500px]">
//         <h2 className="text-3xl font-semibold text-green-900 mb-4">Contact Us</h2>
//         <p className="text-lg font-semibold text-gray-800">Al Raiqa</p>
//         <p className="text-gray-600">United Arab Emirates – Ajman</p>
//         <p className="text-gray-600">P.O BOX: 35907</p>

//         <div className="mt-4">
//           <p className="font-semibold text-gray-800">Within the UAE:</p>
//           <p className="text-green-700 flex items-center">
//             📞 <span className="ml-2"> +971 55 814 6706</span>
//           </p>
//         </div>

//         <div className="mt-4">
//           <p className="font-semibold text-gray-800">From outside the UAE:</p>
//           <p className="text-green-700 flex items-center">
//             📞 <span className="ml-2"> +971 55 814 6706</span>
//           </p>
//           <p className="text-green-700 flex items-center">
//             📞 <span className="ml-2"> +971 55 814 6706</span>
//           </p>
//         </div>

//         <div className="mt-4">
//           <p className="text-green-700 flex items-center">
//             📧 <span className="ml-2">info@alraiqa.ae</span>
//           </p>
//         </div>
//       </div>

//       {/* Right - Contact Form */}
//       <div className="md:w-1/2 w-full bg-white shadow-lg rounded-xl p-8 md:ml-12 flex flex-col justify-center md:min-h-[500px]">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex space-x-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name*"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-1/2 p-3 border-b focus:outline-none focus:border-green-600"
//               required
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone No*"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-1/2 p-3 border-b focus:outline-none focus:border-green-600"
//               required
//             />
//           </div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email*"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 border-b focus:outline-none focus:border-green-600"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Message*"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-3 border-b focus:outline-none focus:border-green-600"
//             rows="4"
//             required
//           />
//           <button
//             type="submit"
//             className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition"
//           >
//             Submit →
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        "service_3r8wmi7", // Replace with your EmailJS service ID
        "template_1544mzf", // Replace with your EmailJS template ID
        formData,
        "nRJNpNRFK7OSn5Zc9" // Replace with your EmailJS user ID (public key)
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
  
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message, please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
  
          console.error("EmailJS Error:", error);
        }
      );
  };
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FAF8F5] px-6 py-12">
      {/* Left - Contact Info */}
      <div className="md:w-1/3 w-full p-8 bg-transparent flex flex-col justify-center md:min-h-[500px]">
        <h2 className="text-3xl font-semibold text-green-900 mb-4">Contact Us</h2>
        <p className="text-lg font-semibold text-gray-800">Al Raiqa</p>
        <p className="text-gray-600">United Arab Emirates – Ajman</p>
        <p className="text-gray-600">P.O BOX: 35907</p>

        <div className="mt-4">
          <p className="font-semibold text-gray-800">Within the UAE:</p>
          <p className="text-green-700 flex items-center">📞 <span className="ml-2"> +971 55 814 6706</span></p>
        </div>

        <div className="mt-4">
          <p className="font-semibold text-gray-800">From outside the UAE:</p>
          <p className="text-green-700 flex items-center">📞 <span className="ml-2"> +971 55 814 6706</span></p>
          <p className="text-green-700 flex items-center">📞 <span className="ml-2"> +971 55 814 6706</span></p>
        </div>

        <div className="mt-4">
          <p className="text-green-700 flex items-center">📧 <span className="ml-2">info@alraiqa.ae</span></p>
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="md:w-1/2 w-full bg-white shadow-lg rounded-xl p-8 md:ml-12 flex flex-col justify-center md:min-h-[500px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2 p-3 border-b focus:outline-none focus:border-green-600"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No*"
              value={formData.phone}
              onChange={handleChange}
              className="w-1/2 p-3 border-b focus:outline-none focus:border-green-600"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-b focus:outline-none focus:border-green-600"
            required
          />
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border-b focus:outline-none focus:border-green-600"
            rows="4"
            required
          />
          <button
            type="submit"
            className="border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;




