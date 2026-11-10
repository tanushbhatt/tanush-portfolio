// Projects shown in the Projects section.
//
// - `image` is a path inside /public. The files in public/images/projects are
//   labelled placeholders: replace them with real screenshots (same file names).
// - Add a `demo: "https://..."` field only when a real live demo exists.
//   The "Live Demo" button appears automatically when `demo` is set.
// - `highlights` is optional and shows a "Key areas" list on the card.

export const projects = [
  {
    id: "agriyield-ai",
    featured: true,
    title: "AgriYield AI",
    summary:
      "An AI-powered crop yield prediction platform that analyzes agricultural data to provide yield predictions, soil insights, weather information, and data-driven recommendations.",
    role: "AI/ML & Backend Developer",
    stack: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "Gemini AI",
      "JavaScript",
    ],
    highlights: [
      "Agricultural data analysis",
      "Data processing",
      "Machine Learning",
      "Predictive modeling",
      "Crop yield prediction",
      "Model evaluation",
      "AI-powered assistance",
    ],
    github: "https://github.com/tanushbhatt/Team-Axis",
    demo: null,
    image: "images/projects/agriyield-ai.png",
    imageAlt: "AgriYield AI project preview",
  },
  {
    id: "spark-ai-assistant",
    featured: false,
    title: "SPARK AI Assistant",
    summary:
      "An AI-powered virtual assistant built with Python and Flask that processes commands, automates tasks, and generates intelligent responses.",
    role: "Python & AI Developer",
    stack: ["Python", "Flask", "HTML", "AI Integration"],
    highlights: null,
    github: "https://github.com/tanushbhatt/SPARK-AI-Assistant",
    demo: null,
    image: "images/projects/spark-ai-assistant.png",
    imageAlt: "SPARK AI Assistant project preview",
  },
  {
    id: "ai-reel-generator",
    featured: false,
    title: "AI Reel Generator",
    summary:
      "An AI-powered application that automates script generation, AI voiceovers, and content creation for social media videos.",
    role: "Python & AI Developer",
    stack: ["Python", "Flask", "Gemini AI", "ElevenLabs", "Cloud Deployment"],
    highlights: null,
    github: "https://github.com/tanushbhatt/VidSnap_AI",
    demo: null,
    image: "images/projects/ai-reel-generator.png",
    imageAlt: "AI Reel Generator project preview",
  },
];
