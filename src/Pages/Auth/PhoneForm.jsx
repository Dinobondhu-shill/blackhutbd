import { useState } from "react";

export default function PhoneForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for Bangladesh phone number
    // Normalize phone number to always include +880
    const formattedNumber = phoneNumber.startsWith("+880")
      ? phoneNumber
      : phoneNumber.startsWith("0")
      ? `+880${phoneNumber.slice(1)}`
      : `+880${phoneNumber}`;

    // Regular expression for validating Bangladeshi phone numbers
    const phoneRegex = /^\+880[0-9]{10}$/;

    if (!phoneRegex.test(formattedNumber)) {
      setError("Please enter a valid Bangladesh phone number");
      return;
    }

    // Handle successful submission
    setError(""); // Clear any previous errors
    console.log("Phone number submitted:", formattedNumber);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-bold">Let's Get Started</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <div className="mt-1">
              <input
                id="phone"
                type="tel"
                placeholder="BD +880"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setError("");
                }}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Next
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <button
            type="button"
            className="text-pink-600 hover:text-pink-500 font-medium"
            onClick={() => {
              // Handle login navigation
              console.log("Navigate to login");
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
