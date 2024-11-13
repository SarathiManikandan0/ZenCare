"use client";

import React, { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi'; // Import chat icon from react-icons

export function PlaceholdersAndVanishInputDemo() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // Track chatbot visibility

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask ZenCare AI Anything
      </h2>

      {/* Icon button to open the chatbot */}
      <button
        onClick={toggleChatbot}
        className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 focus:outline-none"
        title="Open Chatbot"
      >
        <FiMessageCircle size={24} /> {/* Chat icon */}
      </button>

      {/* Chatbot iframe that appears in the corner when `isChatbotOpen` is true */}
      {isChatbotOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "300px",
            height: "400px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#ffffff",
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/3lHXnbX0uz2VJANU8X5IW"
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "8px" }}
            frameBorder="0"
            title="ZenCare AI Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default PlaceholdersAndVanishInputDemo;
