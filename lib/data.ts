// Single source of truth for site content. Keep in sync with public/resume.pdf.

export const profile = {
  name: "Ege Kaya",
  role: "M.Sc. Student, Computer Science",
  affiliation: "University of British Columbia",
  labs: ["UBC HCI-NLP Lab", "Nunez Lab for Computational Mental Health and Cancer Care"],
  location: "Vancouver, BC",
  email: "egekaya360@gmail.com",
  links: {
    scholar: "https://scholar.google.ca/citations?user=6oLyRogAAAAJ&hl=en",
    github: "https://github.com/egekaya1",
    linkedin: "https://www.linkedin.com/in/ege-kaya/",
    cv: "/resume.pdf",
  },
  description:
    "Ege Kaya is an M.Sc. Computer Science student at UBC working on NLP interpretability, explainable and human-centred AI, and low-level systems engineering.",
}

export const interests = [
  "LLM analysis & interpretability",
  "Hidden-state probing & activation patching",
  "Evaluation of language models",
  "Retrieval-augmented generation",
  "Explainable AI",
  "Human–AI interaction",
]

export const news = [
  { date: "Nov 2026", text: "Upcoming: stakeholder workshop on explainable cancer-care chatbots at the BC Cancer Summit (19 Nov)." },
  { date: "Sep 2026", text: "Started my M.Sc. at UBC, supervised by Prof. Cristina Conati and working with Dr. John-Jose Nunez." },
  { date: "Sep 2026", text: "Graduated from Politecnico di Torino with a B.Sc. in Computer Engineering (101/110)." },
  { date: "Sep 2026", text: "Wrapped up Google Summer of Code on the Swift Concurrency runtime." },
]

export type ResearchItem = {
  title: string
  status: string
  period: string
  collaborators?: string
  summary: string
}

export const research: ResearchItem[] = [
  {
    title: "Explainable AI for Cancer Care Navigation",
    status: "Manuscript in preparation",
    period: "2026 – present",
    collaborators: "UBC × BC Cancer",
    summary:
      "What explanations should a cancer-navigation assistant give, and in what form? Informed by a 16-paper review of healthcare XAI, trust, empathy and personalised explanations, plus participant data from the BC Cancer Summit 2026. Compares why / how / no-explanation options, text, visual and conversational formats, and direct versus supportive-resource recommendations.",
  },
  {
    title: "LLM Forgetting: Hidden-State Probing and Activation Patching",
    status: "In progress",
    period: "2026 – present",
    collaborators: "with Finn Vamosi",
    summary:
      "How do language models behave when instructed to forget information? We use hidden-state probing and activation patching to test how interventions at selected activations relate to later behaviour.",
  },
  {
    title: "Subliminal Learning from Weight-Finetuned Teachers",
    status: "In progress",
    period: "2026 – present",
    collaborators: "with Finn Vamosi, Erell Boutin and Zung Nguyen",
    summary:
      "Can behavioural traits of a fine-tuned teacher model emerge in a student? We study how weight updates and LoRA configurations relate to that transfer.",
  },
  {
    title: "Analysis of AI Usage in University-Level Lecturing",
    status: "Public report",
    period: "2026",
    collaborators: "with A. Kale and B. Demirtola",
    summary:
      "Evaluated AI systems for lecturing and instructional-material generation, including a full Computer Architecture lecture.",
  },
  {
    title: "AI-Based Anomaly Detection in Network Security",
    status: "Course report",
    period: "2026",
    collaborators: "with A. Kale and D. E. Bulte",
    summary: "Investigated machine-learning approaches to detecting anomalous activity in network-security data.",
  },
]

export type ExperienceItem = {
  role: string
  org: string
  place: string
  period: string
  kind: "Research" | "Engineering"
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: "Graduate Research Assistant",
    org: "UBC & BC Cancer",
    place: "Vancouver, BC",
    period: "Sep 2026 – Present",
    kind: "Research",
    points: [
      "Contribute to an LLM- and RAG-based cancer-care navigation assistant connecting users with oncology and supportive-care information.",
      "Study how recommendations should communicate evidence: why a recommendation was made, how it is grounded, and when to suggest further resources in sensitive situations.",
      "Helped design a two-hour stakeholder workshop for the BC Cancer Summit combining hands-on chatbot sessions with round-table discussion among patients, caregivers, clinicians and researchers.",
    ],
  },
  {
    role: "Google Summer of Code Contributor",
    org: "Swift · Concurrency Runtime",
    place: "Remote",
    period: "May 2026 – Sep 2026",
    kind: "Engineering",
    points: [
      "Implemented a 64-shard global task registry in the Swift Concurrency runtime so suspended async tasks are discoverable by debuggers and crash-analysis tools.",
      "Designed concurrent C++ data structures and synchronization paths, keeping overhead below 5% on the Swift benchmark suite.",
      "Extended LLDB Python tooling for live task enumeration and contributed to signal-safe crash-backtrace integration.",
    ],
  },
  {
    role: "Student ML Engineer & Researcher",
    org: "Politecnico di Torino",
    place: "Turin, Italy",
    period: "Feb 2026 – Jul 2026",
    kind: "Research",
    points: [
      "Developed models predicting student academic trajectories from institutional data, from feature engineering and cohort analysis to evaluation.",
      "Built data-processing and evaluation pipelines for large tabular datasets and supported integration of AI class-support tools.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Parma Calcio 1913",
    place: "Parma, Italy",
    period: "Sep 2025 – Feb 2026",
    kind: "Engineering",
    points: [
      "Built production React/TypeScript applications for medical-staff workflow management and operational tooling.",
      "Implemented AWS S3/CDN asset delivery and real-time data pipelines, cutting load times by 80% with Lighthouse scores above 99.",
    ],
  },
  {
    role: "Embedded Software Engineer",
    org: "PoliTO Rocket Team",
    place: "Turin, Italy",
    period: "Feb 2025 – Feb 2026",
    kind: "Engineering",
    points: [
      "Wrote STM32 flight software in C/C++: peripheral drivers, watchdogs, fault handling and SWD debugging under real-time constraints.",
      "Built internal tools used by 150+ team members, reducing administrative overhead by 95%.",
    ],
  },
]

export type Project = {
  title: string
  description: string
  highlight?: string
  tags: string[]
  github?: string
}

export const projects: Project[] = [
  {
    title: "Gravitational Lens Detection",
    description: "ResNet-18 models for strong-lens detection under 100:1 class imbalance, for ML4SCI / DeepLense.",
    highlight: "0.9877 AUC · 96.9% sensitivity · 0.9919 AUC on substructure classification",
    tags: ["Python", "PyTorch"],
  },
  {
    title: "GitSimulator",
    description: "DAG-based simulation engine for merge, rebase, reset and cherry-pick with a live commit-graph view. Published on PyPI.",
    highlight: "135+ integration tests · 3rd place, GitKraken Game Jam",
    tags: ["Python", "CI/CD", "PyPI"],
    github: "https://github.com/egekaya1/GitSimulator",
  },
  {
    title: "CoreMetric",
    description: "Privacy-first macOS system monitor that runs a reconstruction autoencoder on the Apple Neural Engine to flag memory leaks.",
    tags: ["Swift", "Core ML"],
    github: "https://github.com/egekaya1/CoreMetric",
  },
  {
    title: "NIOChatServer",
    description: "Real-time WebSocket chat server built on SwiftNIO, focused on high-performance async networking.",
    tags: ["Swift", "SwiftNIO"],
    github: "https://github.com/egekaya1/NIOChatServer",
  },
]

export const education = [
  {
    school: "University of British Columbia",
    degree: "M.Sc. in Computer Science (thesis-based)",
    place: "Vancouver, BC",
    period: "Sep 2026 – Jun 2028",
    details: [
      "Supervised by Prof. Cristina Conati; also working with Dr. John-Jose Nunez.",
      "Coursework: Analysis of NLP Models, Open Questions in NLP, Machine Learning Theory, AI Evaluation, Reinforcement Learning, Human-Computer Interaction.",
    ],
  },
  {
    school: "Politecnico di Torino",
    degree: "B.Sc. in Computer Engineering",
    place: "Turin, Italy",
    period: "Sep 2023 – Sep 2026",
    details: [
      "GPA 3.7/4.0 (27.5/30), final mark 101/110. Full merit scholarship.",
      "Highlights: Computer Architecture (30L), Cybersecurity and National Defence (30L), Object-Oriented Programming, Linear Algebra and Geometry.",
    ],
  },
]

export const honours = [
  "Top 0.34% nationwide, Turkish University Entrance Examination (~1.5M candidates)",
  "Top 9 finalist, Amazon Robotics Hackathon",
  "3rd place, GitKraken Game Jam (GitSimulator)",
  "KU Leuven CS Scholarship, selected among the top ten incoming students",
]

export const skills = [
  { label: "ML & Research", items: "PyTorch, scikit-learn, LLM evaluation, probing & activation patching, RAG, XAI, computer vision" },
  { label: "Languages", items: "Python, C, C++, Swift, TypeScript, Java, SQL" },
  { label: "Systems & Tools", items: "Linux, LLDB, STM32, React, Next.js, PostgreSQL, AWS, Docker, CI/CD" },
]
