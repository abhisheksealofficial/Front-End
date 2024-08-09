import React from 'react';

export default function SignUp() {
  const handleGoogleSignUp = () => {
    // Redirect to Google sign-up API
    window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <button
          onClick={handleGoogleSignUp}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}
