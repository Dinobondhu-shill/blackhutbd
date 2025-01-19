import BackHome from "@/components/BackHome";
import React, { useState } from "react";


const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    retypePassword: ''
  })
  const [errors, setErrors] = useState({});

  const validateForm = () => {

    const newErrors = {};
    if(!passwords.oldPassword){
      newErrors.oldPassword = "Please Enter Old Password "
    }
    if(!passwords.newPassword){
      newErrors.newPassword = "Please Enter a New Password"    
    }
    if(!passwords.retypePassword){
      newErrors.retypePassword = "Please Re-enter Your New Password"
    }
    if (passwords.newPassword !== passwords.retypePassword) {
      newErrors.newPassword = 'New passwords do not match!';
    } else if (passwords.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful login here
      console.log("Form submitted:", passwords);
    }
  };

  return (
    <div className="py-10 relative top-12">
     <div className="max-w-xl mx-auto p-6 md:p-8">
      <BackHome />
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Change Password
        </h1>
        
        <div className="space-y-2">
          <label className="block text-sm text-gray-900">
            Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            value={passwords.oldPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, oldPassword: e.target.value })
            }
       
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.oldPassword ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
          />
          {errors.oldPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.oldPassword}</p>
            )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm text-gray-900">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
            />
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.newPassword}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-900">
              Retype New Password
            </label>
            <input
              type="password"
              name="retypePassword"
              value={passwords.retypePassword}
              onChange={(e) =>
                setPasswords({ ...passwords, retypePassword: e.target.value })
              }
              className={`mt-1 block w-full px-3 py-2 border ${
                errors.retypePassword ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500`}
            />
            {errors.retypePassword && (
              <p className="mt-1 text-sm text-red-500">{errors.retypePassword}</p>
            )}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-colors duration-200"
        >
          Change Password
        </button>
      </form>
    </div>
    </div>
  );
};

export default ChangePassword;