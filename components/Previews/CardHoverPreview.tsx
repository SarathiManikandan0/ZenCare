import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        title: "Personalized Patient Care Plans",
        description:
          "Utilize AI to analyze patient data and create personalized care plans for improved health outcomes.",
        link: "/pages/survey",
      },
      {
        title: "Predictive Maintenance for Medical Equipment",
        description:
          "Predict maintenance needs of medical equipment using AI analysis to minimize downtime and ensure efficient operations.",
        link: "#",
      },
      {
        title: "Telemedicine Integration",
        description:
          "Enable remote consultations and virtual care delivery with AI-driven real-time symptom analysis and triage.",
        link: "#",
      },
      {
        title: "Health Monitoring Wearables Integration",
        description:
          "Integrate wearable devices for continuous health monitoring and early detection of health issues using AI analytics.",
        link: "#",
      },
      {
        title: "Social Determinants of Health Analysis",
        description:
          "Analyze social determinants of health data to provide personalized interventions and collaborate with community organizations for support programs.",
        link: "#",
      },
      {
        title: "Health Behavior Prediction and Intervention",
        description:
          "Predict health behaviors using AI models and integrate behavioral nudges for promoting healthy habits.",
        link: "#",
      },
     
    ];