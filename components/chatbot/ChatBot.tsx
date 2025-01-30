"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { AnimatedModalDemo } from "@/components/Previews/PatientButton";

const Chatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAppointmentClick = () => {
    window.location.href = "/pages/patientcare";
  };

  const handleSatisfactionClick = () => {
    alert("Thank you for your feedback!");
    window.location.href = "/";
  };

  // Function to handle Gemini API call
  const fetchChatbotResponse = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const API_KEY = "AIzaSyCQlMNoah042u7hIvMlJLR97gjL-gAAB1Y"; // Replace with your actual API key
      const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";

      const requestBody = {
        prompt: {
          text: input,
        },
      };

      const response = await axios.post(`${endpoint}?key=${API_KEY}`, requestBody, {
        headers: { "Content-Type": "application/json" },
      });

      setResponse(response.data.candidates[0]?.output || "Sorry, I couldn't understand.");
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="heading p-10">
        Ask <span className="text-purple">The AI About Your Health Issue</span>
      </h1>

      <div style={styles.container}>
        <input
          type="text"
          placeholder="Type your health question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 w-full border border-gray-300 rounded"
        />
        <Button 
          onClick={fetchChatbotResponse} 
          className="mt-4 bg-purple-600 text-white p-3 rounded"
          disabled={loading}
        >
          {loading ? "Processing..." : "Ask AI"}
        </Button>

        {response && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <strong>Response:</strong> {response}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 pt-10 pb-10 items-center">
        <div className="flex justify-center">
          <Button
            variant="secondary"
            className="bg-slate-400 p-4 items-center justify-center"
            onClick={handleSatisfactionClick}
          >
            Return to Home Page
          </Button>
        </div>
        <div className="flex justify-center">
          <AnimatedModalDemo />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "90%",
    margin: "0 auto",
    paddingTop: "10px",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#000000",
    color: "#ffffff",
  },
};

export default Chatbot;
