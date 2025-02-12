import React, { useState } from "react";
import { motion } from "framer-motion";

const CareersPage = () => {
  // Local job listings JSON
  const jobListings = [
    {
      id: 1,
      title: "Software Engineer",
      company: "TechCorp",
      location: "New York, NY",
      category: "Experienced Professionals",
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "DataSoft",
      location: "San Francisco, CA",
      category: "Internships",
    },
    {
      id: 3,
      title: "Marketing Associate",
      company: "Brandify",
      location: "Chicago, IL",
      category: "Graduate Roles",
    },
    {
      id: 4,
      title: "AI Researcher",
      company: "Innovate AI",
      location: "Boston, MA",
      category: "Experienced Professionals",
    },
    {
      id: 5,
      title: "Business Analyst",
      company: "InfoObjects Pvt. Ltd.",
      location: "Los Angeles, CA",
      category: "Internships",
    },
    {
      id: 6,
      title: "Data Analyst Intern",
      company: "Mahan Analytics",
      location: "Jaipur, India",
      category: "Internships",
    },
    {
      id: 7,
      title: "Sales Associate",
      company: "Salesforce",
      location: "Bangalore, India",
      category: "Internships",
    },
    {
      id: 8,
      title: "Sales and Business Development Associate",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Experienced Professionals",
    },
    {
      id: 9,
      title: "Electrical Engineer",
      company: "MetaCube",
      location: "Jaipur, India",
      category: "Internships",
    },
    {
      id: 10,
      title: "Backend Developer",
      company: "InfoSoft Pvt. Ltd.",
      location: "Gurgaon, India",
      category: "Internships",
    },
    {
      id: 11,
      title: "Associate Engineer",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Internships",
    },
    {
      id: 12,
      title: "ML Engineer",
      company: "Creative Designs",
      location: "Delhi, India",
      category: "Experienced Professionals",
    },
    {
      id: 13,
      title: "Marketing Associate",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Experienced Professionals",
    },
    {
      id: 14,
      title: "SWE Designer",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Internships",
    },
    {
      id: 15,
      title: "Robot Designer",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Internships",
    },
    {
      id: 16,
      title: "Engineer Designer",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Internships",
    },
    {
      id: 17,
      title: "Backend Developer",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Internships",
    },
    {
      id: 18,
      title: "Software Engineer",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Internships",
    },
    {
      id: 19,
      title: "IntraDay Trader",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Internships",
    },
    {
      id: 20,
      title: "WordPress Developer",
      company: "Creative Designs",
      location: "Los Angeles, CA",
      category: "Internships",
    },
  ];

  // State for filtering jobs and modal handling
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState(null);

  // Filter jobs based on category
  const filteredJobs =
    selectedCategory === "All"
      ? jobListings
      : jobListings.filter((job) => job.category === selectedCategory);

  // Handle file upload
  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  // Handle job application submission
  const [applicantName, setApplicantName] = useState("");
const [applicantEmail, setApplicantEmail] = useState("");
const [applicantPhone, setApplicantPhone] = useState("");

const handleApply = async () => {
  if (!resume || !applicantName || !applicantEmail || !applicantPhone) {
    alert("Please fill all fields and upload a resume before applying!");
    return;
  }

  const formData = new FormData();
  formData.append("name", applicantName);
  formData.append("email", applicantEmail);
  formData.append("phone", applicantPhone);
  formData.append("jobId", selectedJob.id); // Assuming ID matches backend Job ID
  formData.append("resume", resume);

  try {
    const response = await fetch("http://localhost:8000/api/apply", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert(`Application submitted successfully for ${selectedJob.title}!`);
      setSelectedJob(null);
      setResume(null);
      setApplicantName("");
      setApplicantEmail("");
      setApplicantPhone("");
    } else {
      alert("Failed to submit application. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting application:", error);
    alert("An error occurred while submitting your application.");
  }
};

// const handleApply = async () => {
//   if (!resume || !applicantName || !applicantEmail || !applicantPhone) {
//     alert("Please fill all fields and upload a resume before applying!");
//     return;
//   }

//   const formData = new FormData();
//   formData.append("name", applicantName);
//   formData.append("email", applicantEmail);
//   formData.append("phone", applicantPhone);
//   formData.append("jobId", selectedJob.id); // Ensure job ID exists
//   formData.append("resume", resume);

//   try {
//     const response = await fetch("http://localhost:6000/api/apply", {
//       method: "POST",
//       body: formData,
//     });

//     if (response.ok) {
//       alert(`Application submitted successfully for ${selectedJob.title}!`);
//       setSelectedJob(null);
//       setResume(null);
//       setApplicantName("");
//       setApplicantEmail("");
//       setApplicantPhone("");
//     } else {
//       alert("Failed to submit application. Please try again.");
//     }
//   } catch (error) {
//     console.error("Error submitting application:", error);
//     alert("An error occurred while submitting your application.");
//   }
// };



    return (
    <div className="min-h-screen bg-gradient-to-r from-red-200 to-gray-100 p-8">
      <motion.h1
        className="text-5xl font-extrabold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Careers at Our Company
      </motion.h1>
      <p className="text-lg text-center text-gray-700 mb-10">
        Explore exciting job opportunities across different categories.
      </p>

      {/* Job Categories */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Internships", "Graduate Roles", "Experienced Professionals"].map(
          (category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-lg ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="text-blue-500 mt-2 font-semibold">{job.category}</p>
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-blue-700 shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No jobs available</p>
        )}
      </div>

      {/* Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-800">{selectedJob.title}</h2>
            <p className="text-gray-600">{selectedJob.company}</p>

            <input
              type="text"
              placeholder="Full Name"
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              className="mt-4 block w-full border p-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email"
              value={applicantEmail}
              onChange={(e) => setApplicantEmail(e.target.value)}
              className="mt-2 block w-full border p-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={applicantPhone}
              onChange={(e) => setApplicantPhone(e.target.value)}
              className="mt-2 block w-full border p-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            />
            <input
              type="file"
              className="mt-2 block w-full border p-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              onChange={handleFileChange}
            />

            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedJob(null)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={handleApply}
              >
                Submit Application
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};


export default CareersPage;
