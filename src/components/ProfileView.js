import React from "react";
import { Plus } from "lucide-react";
import CustomButton from "./Buttons/CustomButton";
import ProfileTable from "./ProfileTable";
import Heading from "./Heading";

const ProfileView = () => {
  const personalDetails = [
    { label: "First Name", value: "Paul" },
    { label: "Last Name", value: "Iroribulor" },
    { label: "Gender", value: "Male" },
    { label: "DOB", value: "28/10/2000" },
    { label: "Marital Status", value: "Single" },
    { label: "Nationality", value: "Nigeria" },
    { label: "Email Address", value: "Pauliroribulor@gmail.com" },
    { label: "Home Address", value: "25 Providence Street, Lekki, Lagos" },
    { label: "Contact Number", value: "+234 9038299205" },
    { label: "Emergency Number", value: "+234 8163651276" },
  ];

  const jobDetails = [
    { label: "Employee I.D", value: "BD6789DD" },
    { label: "Job Title", value: "Product Designer" },
    { label: "Department", value: "Design and Marketing" },
    { label: "Manager", value: "Moses Daniel" },
    { label: "Employment Type", value: "Full Type" },
    { label: "Date of Joining", value: "2nd April 2024" },
    { label: "Work Email", value: "Pauliroribulor@etihuku.com" },
    { label: "Work Location", value: "Remotely" },
  ];

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <Heading
            title="Profile"
            subtitle="Manage your personal information and account settings."
            // position={true}
          />
        </div>
        <CustomButton
          to="/profile/edit"
          icon={<Plus size={18} />}
          text="Edit Profile"
        />
      </div>

      <ProfileTable
        profilePicture={{
          changeText: "Change Picture",
          image: "/profilepic.png",
        }}
        personalDetails={personalDetails}
        jobDetails={jobDetails}
        editable={false} // Set to true when you want editing enabled
        theme={{
          primaryColor: "indigo-700",
          labelColor: "gray-600",
          borderColor: "gray-300",
        }}
      />
    </div>
  );
};

export default ProfileView;
