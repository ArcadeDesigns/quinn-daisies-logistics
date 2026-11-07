import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
  StripeTapeVertical26,
  QuoteMarkPinkSvg,
  GreenTickSvg,
  QuinnProductModal,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const ArtificialIntelligencePage = () => {
  const containerRef = useRef(null);
  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [activeKitIndex, setActiveKitIndex] = useState(0);
  const [kitViewIndex, setKitViewIndex] = useState(0);

  const ITEMS_PER_VIEW = 3;

  const aiPillars = [
    {
      name: "Agentic AI & Orchestration",
      role: "Python LangGraph & C# Semantic Kernel",
      detail: "Build autonomous, tool-calling AI agents that query SQL databases, execute microservice APIs, parse RFPs, and automate complex enterprise workflows.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      bg: "#2b1600",
      fg: "#f9a144",
      modal: {
        eyebrow: "AGENTIC AI • PYTHON & C# SEMANTIC KERNEL",
        title: "Autonomous Multi-Agent Systems & Workflow Orchestration",
        description:
          "We engineer deterministic and autonomous AI agent swarms using Python (LangGraph, FastAPI, CrewAI) and C# (.NET 8 Semantic Kernel) with strict human-in-the-loop governance and RBAC permissions.",
        architecture:
          "Python 3.11+ FastAPI & LangGraph + .NET 8 Semantic Kernel + Redis State Store + OpenTelemetry Tracing.",
        deliverables: [
          "Tool-calling agents integrated with SQL Server, PostgreSQL, ERP, and customs/logistics APIs",
          "Automated RFP / Solicitation compliance matrix extraction for SAM.gov, Maryland eMMA & UNGM bids",
          "Role-based access control (RBAC), prompt-injection shields, and immutable audit logs",
          "Real-time token cost, latency, and accuracy evaluation dashboards",
        ],
        codebases: ["Python", "FastAPI", "C# Semantic Kernel", ".NET Core", "React", "PostgreSQL"],
      },
    },
    {
      name: "Enterprise RAG & Knowledge Graphs",
      role: "pgvector, Qdrant & Citation UI",
      detail: "Deploy zero-hallucination Retrieval-Augmented Generation (RAG) over millions of private PDFs, contracts, CAD specs, and SQL tables with citation-backed answers.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60",
      bg: "#fff4e6",
      fg: "#2b1600",
      modal: {
        eyebrow: "ENTERPRISE RAG & VECTOR SEARCH",
        title: "Citation-Verified RAG & Hybrid Vector Search Pipelines",
        description:
          "Unlock institutional knowledge without exposing sensitive data to public training sets. Our hybrid BM25 + dense vector + knowledge graph pipelines deliver sub-second, citation-linked answers.",
        architecture:
          "pgvector / Qdrant / Milvus + Python Ingestion Workers + Hybrid Reranking + React / Flet Citation UI.",
        deliverables: [
          "Automated chunking, OCR table extraction, and layout-aware parsing for PDFs, DOCX, and scanned manifests",
          "Document-level ACL security so users only retrieve records matching their Entra ID / Okta clearance",
          "Inline page-and-paragraph citation highlighting in React web portals and Python Flet desktop apps",
        ],
        codebases: ["Python", "pgvector", "FastAPI", "React", "Flet", "C# .NET"],
      },
    },
    {
      name: "Industrial Vision & OCR",
      role: "PyTorch, ONNX & Edge Kivy/Kotlin",
      detail: "Real-time visual inspection, barcode/pallet scanning, license plate recognition, and multi-modal document intelligence across warehouse HMIs and mobile fleets.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_vqyaewvqyaewvqya.jpg?alt=media&token=9f82c276-ae95-4e6b-9964-3c7b324fa358",
      bg: "#3d2000",
      fg: "#f9a144",
      modal: {
        eyebrow: "COMPUTER VISION & DOCUMENT AI",
        title: "Industrial Vision, OCR & Edge AI Inference",
        description:
          "From high-speed warehouse conveyor cameras to offline Android scanners, we deploy quantized vision and OCR models that turn physical operations into structured real-time telemetry.",
        architecture:
          "PyTorch / ONNX Runtime / TensorRT + Python Kivy Industrial HMIs + Kotlin Android Edge SDK.",
        deliverables: [
          "Automated Bill of Lading (BoL), commercial invoice, and customs declaration extraction (99.4% field accuracy)",
          "Real-time damage detection, dimensioning, and safety compliance monitoring on Python Kivy touch terminals",
          "On-device mobile inference in Kotlin Android & .NET MAUI apps for zero-connectivity environments",
        ],
        codebases: ["Python", "PyTorch", "ONNX", "Kivy", "Kotlin", ".NET MAUI"],
      },
    },
    {
      name: "Predictive ML & MLOps",
      role: "Forecasting & Kafka Streaming",
      detail: "Time-series demand forecasting, dynamic route optimization, anomaly detection, and automated ML retraining pipelines with data-drift monitoring.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ppcb8nppcb8nppcb.jpg?alt=media&token=559a6c92-8f13-49a7-a190-a8250d8b66d2",
      bg: "#f5efe8",
      fg: "#1e1e1e",
      modal: {
        eyebrow: "PREDICTIVE ML & MLOPS",
        title: "Forecasting, Optimization & Production MLOps",
        description:
          "Move from static spreadsheets to continuous predictive intelligence. We build end-to-end feature stores, model registries, and low-latency inference microservices.",
        architecture:
          "Python (scikit-learn, XGBoost, PyTorch) + MLflow + Kafka Streaming + Java Spring Boot / .NET Core APIs.",
        deliverables: [
          "Multi-horizon inventory, freight rate, and resource capacity forecasting models",
          "Real-time fraud, anomaly, and SLA breach detection over streaming telemetry",
          "Automated model retraining, A/B shadow deployment, and data-drift alerting",
        ],
        codebases: ["Python", "Java Spring Boot", ".NET Core", "Kafka", "Docker", "Kubernetes"],
      },
    },
    {
      name: "Sovereign & GovCloud AI",
      role: "Air-Gapped LLMs & NIST 800-171",
      detail: "Deploy private open-weight and commercial LLMs inside AWS GovCloud, Azure Government, or on-premise GPU clusters for federal, defense, and healthcare compliance.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ie5nmxie5nmxie5n.jpg?alt=media&token=23ffc884-cfe7-4505-91cf-3c23c8b8a0f4",
      bg: "#2b1600",
      fg: "#ffffff",
      modal: {
        eyebrow: "SOVEREIGN & GOVCLOUD AI",
        title: "Air-Gapped & Federal-Compliant AI Infrastructure",
        description:
          "Engineered for SAM.gov Federal agencies, Maryland state departments, defense contractors, and regulated healthcare/financial institutions requiring total data sovereignty.",
        architecture:
          "vLLM / TGI / Ollama on Dedicated GPU Clusters + Terraform IaC + NIST SP 800-171 / SOC 2 Controls.",
        deliverables: [
          "Private deployment of Gemini, Claude, GPT, and fine-tuned Llama/Mistral models with zero external egress",
          "PII/PHI redaction gateways, toxicity filters, and comprehensive compliance documentation",
          "Full integration with legacy C# WPF/WinUI desktop systems and Java enterprise backbones",
        ],
        codebases: ["Python", "vLLM", "Kubernetes", "Terraform", "C#", "Java"],
      },
    },
    {
      name: "GovCon Procurement AI",
      role: "SAM.gov, eMMA & UNGM Shredding",
      detail: "Automated solicitation shredder that extracts Section L/M requirements, drafts compliance matrices, and scores proposals against federal past performance.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa",
      bg: "#fff4e6",
      fg: "#2b1600",
      modal: {
        eyebrow: "GOVCON AI • SAM.GOV • MARYLAND eMMA",
        title: "GovCon Solicitation Shredding & Bid Automation",
        description: "Parse massive 200+ page government RFP packages instantly, map requirements to your core technical capabilities, and generate audit-proof Shipley matrices.",
        architecture: "Python LayoutLM + Custom Embeddings + React 19 Workspace.",
        deliverables: [
          "Section L & M automated requirements decomposition",
          "Past-performance vector similarity matching for proposal citations",
          "Compliance gap identification before final submission",
        ],
        codebases: ["Python", "FastAPI", "React", "GovCon"],
      },
    },
    {
      name: "Multi-Platform AI UI",
      role: "React, Kotlin, C# & Python Cockpits",
      detail: "Deliver streaming conversational, voice, and multimodal AI interfaces seamlessly across Web (React), Mobile (Kotlin), and Desktop (C# WPF / Python Flet).",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
      bg: "#f5efe8",
      fg: "#2b1600",
      modal: {
        eyebrow: "MULTIMODAL AI CLIENT ARCHITECTURE",
        title: "Cross-Platform Conversational & Generative UI",
        description: "From rugged warehouse touchscreen terminals to executive web dashboards, provide instantaneous AI copilots with local caching and offline resilience.",
        architecture: "React 19 + TypeScript, Kotlin Jetpack Compose, Python Flet (Flutter engine).",
        deliverables: [
          "Streaming token responses with code highlighting and interactive math/tables",
          "Push-to-talk voice capture with on-device speech-to-text",
          "Secure OAuth 2.0 / Entra ID token propagation to AI gateways",
        ],
        codebases: ["React", "Kotlin", "Python Flet", "C# WPF"],
      },
    },
    {
      name: "LLM Guardrails & Observability",
      role: "Red-Teaming, Prompt Defense & SRE",
      detail: "Continuous red-teaming, prompt-injection defense, latency profiling, and automated regression testing across your enterprise AI microservice fleet.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_bb7zlobb7zlobb7z.jpg?alt=media&token=98dcf4a8-ff36-45a9-9f5a-930d4ed06594",
      bg: "#3d2000",
      fg: "#f9a144",
      modal: {
        eyebrow: "AI SRE & GOVERNANCE",
        title: "Enterprise AI Guardrails, Telemetry & Cost Control",
        description: "Prevent hallucinations, enforce data privacy guardrails, and monitor token budgets in real time with OpenTelemetry, Prometheus, and Grafana.",
        architecture: "Llama Guard + NeMo Guardrails + OpenTelemetry + Grafana Cloud.",
        deliverables: [
          "Prompt-injection and jailbreak sanitization gateway",
          "Automated hallucination metric benchmarking on synthetic test suites",
          "Token spend quotas and cost-optimization routing across models",
        ],
        codebases: ["Python", "OpenTelemetry", "Docker", "Kubernetes"],
      },
    },
  ];

  const geminiKitItems = [
    {
      id: "ai-kit-1",
      eyebrow: "PYTHON • FASTAPI • LANGGRAPH",
      title: "Agentic AI & LangGraph Multi-Agent Core",
      description: "Production Python AI microservice kit with hybrid vector search, deterministic tool calling, and streaming SSE.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      architecture: "Python 3.11+, FastAPI, LangGraph, Pydantic v2, PostgreSQL + pgvector, Redis.",
      deliverables: [
        "Multi-agent supervisor and worker orchestration graph",
        "Hybrid semantic + keyword retrieval with cross-encoder reranking",
        "Streaming token endpoints for React, Kotlin, Kivy, and Flet clients",
      ],
      codebases: ["Python", "FastAPI", "pgvector", "Redis", "Docker"],
    },
    {
      id: "ai-kit-2",
      eyebrow: ".NET 8 • C# • SEMANTIC KERNEL",
      title: "Enterprise .NET AI & Copilot Integration Hub",
      description: "Embed native AI copilots, plugin planners, and vector memory directly into ASP.NET Core & C# apps.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60",
      architecture: "C# 12, .NET 8, Microsoft Semantic Kernel, ASP.NET Core Web API, SQL Server / Azure AI.",
      deliverables: [
        "Native C# plugin architecture exposing existing .NET services as LLM tools",
        "Memory connectors for SQL Server, Cosmos DB, and Qdrant",
        "Seamless integration with Blazor, React, WPF, and WinUI 3 applications",
      ],
      codebases: [".NET Core", "ASP.NET", "C#", "Semantic Kernel", "SQL Server"],
    },
    {
      id: "ai-kit-3",
      eyebrow: "SAM.GOV • MARYLAND eMMA • UNGM",
      title: "GovCon RFP & Compliance AI Analyzer",
      description: "Automated solicitation shredder that extracts Section L/M requirements and drafts compliance matrices.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_vqyaewvqyaewvqya.jpg?alt=media&token=9f82c276-ae95-4e6b-9964-3c7b324fa358",
      architecture: "Python Document AI + LayoutLM + RAG over Past Performance & Capability Libraries.",
      deliverables: [
        "Instant parsing of 200+ page SAM.gov, Maryland eMMA, and UNGM PDF solicitations",
        "Automated generation of trace matrices mapping SOW requirements to technical responses",
        "Shipley compliance scoring and gap-analysis reporting",
      ],
      codebases: ["Python", "Document AI", "React", "FastAPI", "GovCon"],
    },
    {
      id: "ai-kit-4",
      eyebrow: "KIVY • FLET • KOTLIN • REACT",
      title: "Multi-Platform AI Client UI Suite",
      description: "Ready-to-deploy conversational, voice, and visual AI interfaces for Web, Mobile, and Desktop.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ppcb8nppcb8nppcb.jpg?alt=media&token=559a6c92-8f13-49a7-a190-a8250d8b66d2",
      architecture: "React 19, Kotlin Jetpack Compose, Python Flet (Flutter), and Python Kivy GPU UI.",
      deliverables: [
        "Rich markdown, code-block, table, and interactive chart rendering for AI responses",
        "Voice-to-text and camera/OCR capture for field mobile (Kotlin) and kiosk (Kivy) terminals",
        "Real-time citation preview drawers and human feedback loops",
      ],
      codebases: ["React", "Kotlin", "Python Flet", "Python Kivy", "TypeScript"],
    },
    {
      id: "ai-kit-5",
      eyebrow: "PYTORCH • ONNX • TENSORRT",
      title: "Industrial Computer Vision & OCR Engine",
      description: "High-speed conveyor defect detection, automated label verification, and container number scanning.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ie5nmxie5nmxie5n.jpg?alt=media&token=23ffc884-cfe7-4505-91cf-3c23c8b8a0f4",
      architecture: "PyTorch, ONNX Runtime, OpenCV, NVIDIA TensorRT, Python Kivy HMI.",
      deliverables: [
        "Sub-10ms edge inference pipelines running on industrial Jetson & IPC units",
        "Automated commercial invoice and bill of lading text extraction",
        "Real-time MQTT/gRPC telemetry streams into cloud databases",
      ],
      codebases: ["Python", "PyTorch", "ONNX", "OpenCV", "Edge AI"],
    },
    {
      id: "ai-kit-6",
      eyebrow: "SOVEREIGN • AIR-GAPPED • GOVCLOUD",
      title: "Private Sovereign LLM Cluster Kit",
      description: "Self-hosted, air-gapped open-weight LLM deployment inside Kubernetes for total data sovereignty.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa",
      architecture: "vLLM, Ray, Kubernetes GPU Operator, Terraform, AWS GovCloud / Azure Gov.",
      deliverables: [
        "Air-gapped deployment with zero external Internet dependencies",
        "Encrypted weight storage with hardware security module (HSM) keys",
        "NIST SP 800-171, CMMC 2.0 & SOC 2 Type II audit compliance",
      ],
      codebases: ["Kubernetes", "vLLM", "Terraform", "GovCloud"],
    },
    {
      id: "ai-kit-7",
      eyebrow: "SCIKIT-LEARN • XGBOOST • PYTORCH",
      title: "Predictive Freight & Supply Chain ML Pipeline",
      description: "Continuous time-series forecasting of container rates, transit delays, and warehouse capacity.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
      architecture: "Python MLflow, Apache Kafka, XGBoost, PyTorch Geometric, Java Spring Boot.",
      deliverables: [
        "Feature store integration with streaming sensor and ERP signals",
        "Multi-horizon ETA and dwell-time prediction microservices",
        "Automated data drift detection and model rollback guards",
      ],
      codebases: ["Python", "MLflow", "Kafka", "Java", "PostgreSQL"],
    },
    {
      id: "ai-kit-8",
      eyebrow: "GUARDRAILS • NEMO • OPENTELEMETRY",
      title: "AI Trust, Safety & Prompt Defense Shield",
      description: "Enterprise reverse-proxy firewall blocking jailbreaks, PII exfiltration, and toxic outputs.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_bb7zlobb7zlobb7z.jpg?alt=media&token=98dcf4a8-ff36-45a9-9f5a-930d4ed06594",
      architecture: "FastAPI Guardrail Gateway, Llama Guard, Presidio PII Masking, OpenTelemetry.",
      deliverables: [
        "Inline PII/PHI scrubbing before prompts reach model providers",
        "Real-time token cost and model quota enforcement by tenant",
        "Structured JSON schema validator preventing invalid tool execution",
      ],
      codebases: ["Python", "FastAPI", "Security", "OpenTelemetry"],
    },
    {
      id: "ai-kit-9",
      eyebrow: "RPA • OCR • ETL AUTOMATION",
      title: "Autonomous Invoice & Customs Reconciliation Bot",
      description: "End-to-end intelligent document processing converting messy physical paperwork into ERP entries.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      architecture: "Python Celery Workers, Tesseract/Azure OCR, C# .NET ERP Adapter, RabbitMQ.",
      deliverables: [
        "Automated 3-way matching between purchase orders, receiving slips, and invoices",
        "Direct API posting into SAP, Oracle NetSuite, and Microsoft Dynamics 365",
        "Exception queue with human-in-the-loop review interface in React",
      ],
      codebases: ["Python", "C# .NET", "RabbitMQ", "React", "OCR"],
    },
  ];

  const totalKitViews = Math.ceil(geminiKitItems.length / ITEMS_PER_VIEW);
  const startKitIndex = kitViewIndex * ITEMS_PER_VIEW;
  const currentViewKits = geminiKitItems.slice(startKitIndex, startKitIndex + ITEMS_PER_VIEW);

  const handleKitViewChange = (newView) => {
    if (newView < 0 || newView >= totalKitViews) return;
    setKitViewIndex(newView);
    setActiveKitIndex(newView * ITEMS_PER_VIEW);
  };

  const multimediaItems = [
    {
      level: "Beginner",
      type: "white-card",
      title: "Enterprise AI Readiness & High-ROI Use Case Audit",
      desc: "How to identify, prioritize, and govern your first production RAG and AI agent workloads.",
      bg: null,
    },
    {
      level: "Intermediate",
      type: "video-bg-card",
      bg: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_jgbc94jgbc94jgbc.jpg?alt=media&token=9aefa4d2-5dda-4fd3-b4e3-aecd9db13e0b",
      title: "Architecting Zero-Hallucination RAG in Python & pgvector",
      desc: "Deep dive into hybrid chunking, cross-encoder reranking, and strict ACL citation enforcement.",
    },
    {
      level: "Advanced",
      type: "white-card",
      title: "Multi-Agent Orchestration with C# Semantic Kernel & .NET 8",
      desc: "Connecting enterprise .NET microservices and SQL databases to deterministic tool-calling agents.",
      bg: null,
    },
    {
      level: "Intermediate",
      type: "video-bg-card",
      bg: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dx17ymdx17ymdx17.jpg?alt=media&token=1c8866e0-cb51-4d54-bb2a-fb0940c936e5",
      title: "Automating SAM.gov & UNGM RFP Shredding with Document AI",
      desc: "Using OCR and LLMs to generate 100% compliant Section L & M matrices in minutes.",
    },
    {
      level: "Advanced",
      type: "video-bg-card",
      bg: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_h42b7gh42b7gh42b.jpg?alt=media&token=389e827d-1b93-41ec-a97e-2a7167e794e5",
      title: "Edge Computer Vision on Python Kivy & Kotlin Android",
      desc: "Running quantized ONNX vision models on industrial touchscreens and rugged mobile scanners.",
    },
    {
      level: "Beginner",
      type: "white-card",
      title: "Python Flet: Building Flutter-Grade AI Desktop Cockpits",
      desc: "Ship cross-platform Windows, macOS, and Linux AI dashboards entirely in pure Python.",
      bg: null,
    },
    {
      level: "Advanced",
      type: "white-card",
      title: "Sovereign & Air-Gapped LLM Deployment on Kubernetes",
      desc: "Securing vLLM, GPU node pools, and PII redaction gateways for NIST 800-171 & SOC 2 compliance.",
      bg: null,
    },
    {
      level: "Intermediate",
      type: "video-bg-card",
      bg: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ie5nmxie5nmxie5n.jpg?alt=media&token=23ffc884-cfe7-4505-91cf-3c23c8b8a0f4",
      title: "LLM Evaluation, Guardrails & OpenTelemetry Observability",
      desc: "Continuous red-teaming, latency profiling, and automated regression testing for production AI.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timeline
      gsap.fromTo(
        ".accelerator-hero-section .accelerator-hero-center > *",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".accelerator-hero-section .floating-media-card--top",
        { y: 32, x: -20, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        ".accelerator-hero-section .floating-media-card--bottom",
        { y: 40, x: 20, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // 2. Carousel Pinned Scrubbing (min-width 769px)
      const section = carouselSectionRef.current;
      const strip = carouselStripRef.current;

      if (section && strip && window.innerWidth >= 769) {
        const getScrollAmount = () => {
          const totalWidth = strip.scrollWidth;
          const viewportWidth = window.innerWidth;
          return -(totalWidth - viewportWidth + 96);
        };

        const horizontalTween = gsap.to(strip, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          horizontalTween.kill();
        };
      }

      // 3. Section 4 Showcase Reveal
      gsap.fromTo(
        "#ai-kit .mobile-showcase-row",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#ai-kit",
            start: "top 78%",
          },
        }
      );

      // 4. Multimedia Library Cards Reveal
      gsap.fromTo(
        "#ai-blueprints .multimedia-card",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#ai-blueprints",
            start: "top 80%",
          },
        }
      );

      // 5. Sovereign AI Section Reveal
      gsap.fromTo(
        "#ai-sovereign .glue-grid__col",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#ai-sovereign",
            start: "top 78%",
          },
        }
      );

      // 6. Leadership Quote Section Reveal
      gsap.fromTo(
        ".accelerator-home-quote",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".accelerator-home-quote",
            start: "top 80%",
          },
        }
      );

      // 7. Floating cards animation for CTA banner
      gsap.fromTo(
        "#ai-cta .floating-media-card--top",
        { y: 36, x: -24, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#ai-cta",
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        "#ai-cta .floating-media-card--bottom",
        { y: 44, x: 24, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#ai-cta",
            start: "top 75%",
          },
        }
      );
      gsap.to("#ai-cta .floating-media-card--top", {
        y: -10,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.2,
      });
      gsap.to("#ai-cta .floating-media-card--bottom", {
        y: -8,
        duration: 3.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.6,
      });

      // 8. Underline accent sweep
      const underlines = document.querySelectorAll(".decorated-text.underline");
      underlines.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => {
            el.classList.add("in-view");
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="quinn-tech-google-root">
      <SEO
        title="Artificial Intelligence, Enterprise RAG & Agentic AI Engineering | Quinn Daisies Technology"
        description="Production Artificial Intelligence engineering by Quinn Daisies: Autonomous AI Agents, Enterprise RAG, Computer Vision, Python FastAPI/PyTorch, C# Semantic Kernel, and Sovereign GovCloud AI."
        keywords="artificial intelligence engineering, enterprise RAG, AI agents, Python FastAPI LangGraph, C# Semantic Kernel, computer vision OCR, government AI SAM.gov UNGM, Quinn Daisies AI"
        canonicalUrl="/artificial-intelligence"
      />

      {/* Top Decorative Tape Bar */}
      <div className="glue-page" style={{ paddingTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span
            className="glue-eyebrow"
            style={{
              fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
              marginBottom: 0,
              letterSpacing: "0.04em",
            }}
          >
            QUINN DAISIES ARTIFICIAL INTELLIGENCE • ENTERPRISE RAG • AGENTIC AI • SOVEREIGN GOVCLOUD
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 3-IMAGE FLOATING HERO */}
      <section className="accelerator-hero-section">
        <div className="accelerator-hero-floating-grid">
          <div className="floating-media-card floating-media-card--top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa"
              alt="Neural Network and Agentic AI Architecture"
            />
            <div className="floating-media-caption">
              <strong>Enterprise Agentic AI</strong>
              Python FastAPI, LangGraph &amp; C# Semantic Kernel
            </div>
          </div>

          <div className="accelerator-hero-center">
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "#fff3e3",
                  color: "#2b1600",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  border: "1px solid rgba(249, 161, 68, 0.45)",
                }}
              >
                PRODUCTION AI • AGENTIC WORKFLOWS • CITATION-VERIFIED RAG
              </span>
            </div>

            <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
              Supercharge your enterprise with{" "}
              <span className="decorated-text underline">Production AI</span>
            </h1>

            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                maxWidth: 740,
                margin: "0 auto 28px",
              }}
            >
              Move beyond basic chatbots. Quinn Daisies engineers production-grade{" "}
              <strong>Autonomous AI Agents</strong>, <strong>Citation-Verified Enterprise RAG</strong>,{" "}
              <strong>Computer Vision</strong>, and <strong>Sovereign GovCloud LLMs</strong> integrated directly into
              your <strong>Python, .NET Core, C#, React, Java, Kotlin, Kivy, and Flet</strong> systems.
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Book an AI Architecture Briefing</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
              <a
                href="#ai-kit"
                className="ApplicationButton glue-button glue-button--medium-emphasis"
              >
                <span>Explore the Quinn AI Kit</span>
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
              <div style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
                <StripeTape83 fill="#f9a144" />
              </div>
            </div>
          </div>

          <div className="floating-media-card floating-media-card--bottom">
            <div style={{ position: "absolute", top: -18, right: -10, zIndex: 4 }}>
              <StripeTapeVertical26 fill="#f9a144" />
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf"
              alt="Predictive Telemetry and Sovereign AI"
            />
            <div className="floating-media-caption">
              <strong>Sovereign &amp; GovCloud AI</strong>
              NIST SP 800-171, SAM.gov &amp; Air-Gapped Deployments
            </div>
          </div>
        </div>
      </section>

      <section
        className="Dark-Background"
        id="ai-carousel-animation"
        ref={carouselSectionRef}
      >
        <div id="ai-tracks" style={{ position: "relative", top: -80, visibility: "hidden" }} />
        <div className="ApplicationCarouselRefurblished">
          <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
            <h2 className="reveal__left">
              Production AI Engineering Pillars
            </h2>

            <div className="ApplicationCarouselContainer reveal__right">
              <p className="ApplicationCarouselContainerText">
                Explore our full-stack enterprise AI matrix—architecting autonomous multi-agent swarms, citation-verified RAG pipelines, edge computer vision, and sovereign GovCloud LLM environments.
              </p>
            </div>
          </div>

          <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
            <div
              className="ApplicationCarouselSlide"
              ref={carouselStripRef}
            >
              {aiPillars.map((item) => (
                <div className="AdvanceDesignStructureSlideBox" key={item.name}>
                  <div className="AdvanceDesignStructureSlideBoxImage">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="AdvanceDesignStructureSlideBoxContent">
                    <span className="AdvanceDesignStructureEyebrow">
                      {item.name}
                    </span>
                    <h2 className="AdvanceDesignStructureSlideBoxContent_h2">{item.role}</h2>
                    <p>{item.detail}</p>
                    <button
                      type="button"
                      onClick={() => setActiveModalItem(item.modal)}
                      className="ApplicationButton glue-button glue-button--high-emphasis AdvanceDesignStructureCTA"
                    >
                      <span>Explore this pillar</span>
                      <span className="material-symbols-outlined">memory</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ai-kit" className="mobile-showcase-section">
        <div className="glue-page">
          <div className="mobile-showcase-grid">
            <div className="mobile-showcase-media">
              <div style={{ position: "absolute", top: -10, left: 24, zIndex: 4 }}>
                <StripeTape83 fill="#f9a144" />
              </div>
              <img
                src={geminiKitItems[activeKitIndex].image}
                alt={geminiKitItems[activeKitIndex].title}
              />
              <div style={{ position: "absolute", bottom: -8, right: 24, zIndex: 4 }}>
                <StripeTape91 fill="#c86d10" />
              </div>
            </div>

            <div>
              <span
                className="glue-eyebrow"
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  color: "#c86d10",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: 10,
                  textTransform: "uppercase",
                }}
              >
                MODULAR AI ACCELERATORS &amp; SDKS
              </span>

              <h2
                className="glue-headline glue-headline--headline-5"
                style={{
                  marginBottom: 18,
                  color: "#2b1600",
                }}
              >
                Deploy with certainty, and{" "}
                <span className="decorated-text underline">own your full AI IP</span>
              </h2>

              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Pre-engineered reference architectures and production SDKs across Python, .NET Core, C#, React, Kotlin, Kivy, and Flet. Click any module below to inspect full deliverables.
              </p>

              <div className="mobile-showcase-accordion" style={{ borderTop: "1px solid rgba(43, 22, 0, 0.14)" }}>
                <div
                  key={kitViewIndex}
                  style={{
                    animation: "fadeInView 0.32s ease forwards",
                  }}
                >
                  {currentViewKits.map((item, idx) => {
                    const globalIdx = startKitIndex + idx;
                    return (
                      <div
                        key={item.title}
                        role="button"
                        tabIndex={0}
                        onClick={() => setActiveModalItem(item)}
                        onMouseEnter={() => setActiveKitIndex(globalIdx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveModalItem(item);
                          }
                        }}
                        className={`mobile-showcase-row ${activeKitIndex === globalIdx ? "is-active" : ""}`}
                        style={{
                          padding: "20px 0",
                          borderBottom: "1px solid rgba(43, 22, 0, 0.14)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 16,
                          cursor: "pointer",
                        }}
                      >
                        <div>
                          <h3
                            className="glue-headline glue-headline--headline-6"
                            style={{
                              fontSize: "var(--qd-font-size-h4, 1.35em)",
                              fontWeight: 600,
                              color: activeKitIndex === globalIdx ? "#c86d10" : "#2b1600",
                              marginBottom: 6,
                              transition: "color 0.2s ease",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "var(--qd-font-size-body, 1em)",
                              lineHeight: 1.65,
                              color: "#3b3b3b",
                              margin: 0,
                            }}
                          >
                            {item.description}
                          </p>
                        </div>

                        <div
                          className="mobile-showcase-row-arrow"
                          style={{
                            flexShrink: 0,
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: activeKitIndex === globalIdx ? "#c86d10" : "#2b1600",
                            transition: "transform 0.25s ease, color 0.25s ease",
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 24,
                    marginTop: 8,
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        color: "#c86d10",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      View {kitViewIndex + 1} of {totalKitViews}
                    </span>
                    <span style={{ color: "rgba(43, 22, 0, 0.35)", fontSize: 13 }}>•</span>
                    <span style={{ fontSize: "var(--qd-font-size-body-sm, 0.9em)", color: "#776355" }}>
                      Showing {startKitIndex + 1}–{Math.min(startKitIndex + ITEMS_PER_VIEW, geminiKitItems.length)} of {geminiKitItems.length} modular AI kits
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* View Dots */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 6 }}>
                      {Array.from({ length: totalKitViews }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleKitViewChange(i)}
                          aria-label={`Switch to View ${i + 1}`}
                          style={{
                            width: kitViewIndex === i ? 26 : 8,
                            height: 8,
                            borderRadius: 999,
                            background: kitViewIndex === i ? "#c86d10" : "rgba(43, 22, 0, 0.2)",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.25s ease",
                          }}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleKitViewChange(kitViewIndex - 1)}
                      disabled={kitViewIndex === 0}
                      aria-label="Previous view of modular AI kits"
                      className="kit-slider-nav-btn"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "1px solid rgba(43, 22, 0, 0.22)",
                        background: kitViewIndex === 0 ? "rgba(43, 22, 0, 0.04)" : "#ffffff",
                        color: kitViewIndex === 0 ? "rgba(43, 22, 0, 0.25)" : "#2b1600",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: kitViewIndex === 0 ? "not-allowed" : "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: kitViewIndex === 0 ? "none" : "0 3px 8px rgba(43, 22, 0, 0.08)",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                        arrow_back
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleKitViewChange(kitViewIndex + 1)}
                      disabled={kitViewIndex === totalKitViews - 1}
                      aria-label="Next view of modular AI kits"
                      className="kit-slider-nav-btn"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "1px solid rgba(43, 22, 0, 0.22)",
                        background: kitViewIndex === totalKitViews - 1 ? "rgba(43, 22, 0, 0.04)" : "#ffffff",
                        color: kitViewIndex === totalKitViews - 1 ? "rgba(43, 22, 0, 0.25)" : "#2b1600",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: kitViewIndex === totalKitViews - 1 ? "not-allowed" : "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: kitViewIndex === totalKitViews - 1 ? "none" : "0 3px 8px rgba(43, 22, 0, 0.08)",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-blueprints" className="multimedia-library-section">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto 56px" }}>
            <span
              className="glue-eyebrow"
              style={{
                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                color: "#f9a144",
                fontWeight: 600,
                letterSpacing: "0.06em",
                display: "inline-block",
                marginBottom: 12,
              }}
            >
              AI ARCHITECTURE BLUEPRINTS &amp; DEEP DIVES
            </span>
            <h2 className="glue-headline glue-headline--headline-2" style={{ color: "#ffffff" }}>
              Reference architectures to take your AI from{" "}
              <span className="decorated-text underline">prototype to production</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.86)",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                maxWidth: 780,
                margin: "16px auto 0",
              }}
            >
              Explore our technical blueprints covering agentic workflows, multi-modal vision, sovereign GovCloud AI, and enterprise vector retrieval.
            </p>
          </div>

          <div className="glue-grid">
            {multimediaItems.map((item) => (
              <div key={item.title} className="glue-grid__col glue-grid__col--span-3">
                <div
                  className={`multimedia-card ${item.type}`}
                  style={item.bg ? { backgroundImage: `url(${item.bg})` } : undefined}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setActiveModalItem({
                      eyebrow: `AI BLUEPRINT • ${item.level.toUpperCase()}`,
                      title: item.title,
                      description: item.desc,
                      architecture:
                        "Engineered by Quinn Daisies AI Architects using Python FastAPI, C# Semantic Kernel, pgvector, and Kubernetes.",
                      deliverables: [
                        "Reference C4 system architecture and data-flow topology",
                        "Security, RBAC, and prompt-injection guardrail specification",
                        "Production latency, throughput, and token-cost benchmarks",
                      ],
                      codebases: ["Python", "C# .NET 8", "FastAPI", "React", "Kivy / Flet"],
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalItem({
                        eyebrow: `AI BLUEPRINT • ${item.level.toUpperCase()}`,
                        title: item.title,
                        description: item.desc,
                        architecture:
                          "Engineered by Quinn Daisies AI Architects using Python FastAPI, C# Semantic Kernel, pgvector, and Kubernetes.",
                        deliverables: [
                          "Reference C4 system architecture and data-flow topology",
                          "Security, RBAC, and prompt-injection guardrail specification",
                          "Production latency, throughput, and token-cost benchmarks",
                        ],
                        codebases: ["Python", "C# .NET 8", "FastAPI", "React", "Kivy / Flet"],
                      });
                    }
                  }}
                >
                  <div>
                    <span className="signal-level-badge">{item.level}</span>
                    <h3
                      className="glue-headline glue-headline--headline-6"
                      style={{
                        color: item.type === "video-bg-card" ? "#ffffff" : "#1e1e1e",
                        fontSize: "var(--qd-font-size-h4, 1.25em)",
                        marginTop: 16,
                        marginBottom: 10,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: item.type === "video-bg-card" ? "rgba(255,255,255,0.88)" : "#3b3b3b",
                        fontSize: "var(--qd-font-size-body, 1em)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                    <span
                      style={{
                        fontWeight: 500,
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        color: item.type === "video-bg-card" ? "#f9a144" : "#2b1600",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span>Inspect Blueprint</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>memory</span>
                    </span>
                    <span className="featured-product-plus-btn">
                      <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link
              to="/technology-contact-us"
              className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
            >
              <span>Schedule Architecture Review Session</span>
              <span className="material-symbols-outlined">memory</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: SOVEREIGN, ENTERPRISE & GOVCON AI */}
      <section id="ai-sovereign" style={{ padding: "96px 0", background: "#ffffff" }}>
        <div className="glue-page">
          <div className="glue-grid" style={{ alignItems: "center" }}>
            <div className="glue-grid__col glue-grid__col--span-6">
              <span
                className="glue-eyebrow"
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  color: "#c86d10",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                SOVEREIGN, ENTERPRISE &amp; GOVCON AI
              </span>
              <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 18 }}>
                Deploy AI with{" "}
                <span className="decorated-text underline">federal-grade governance</span>
              </h2>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Whether you are modernizing a commercial supply chain or bidding on a{" "}
                <strong>SAM.gov, Maryland eMMA, or UNGM</strong> solicitation requiring air-gapped or GovCloud AI, Quinn
                Daisies delivers verifiable security, explainability, and full-SDLC integration.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
                <Link
                  to="/contract-procurement-and-writing"
                  className="ApplicationButton glue-button glue-button--high-emphasis"
                >
                  <span>AI for Government Contracting</span>
                  <span className="material-symbols-outlined">memory</span>
                </Link>
                <Link
                  to="/ai-and-application-development"
                  className="ApplicationButton glue-button glue-button--medium-emphasis"
                >
                  <span>View AI &amp; App Dev Hub</span>
                  <span className="material-symbols-outlined">memory</span>
                </Link>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6">
              <div className="cloud-floating-photo-card">
                <div className="cloud-floating-photo-tape">
                  <StripeTape83 fill="#f9a144" />
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b"
                  alt="Quinn Daisies Sovereign AI Engineering"
                  style={{ height: 380, objectFit: "cover", width: "100%", borderRadius: 16 }}
                />
                <div style={{ marginTop: -12, marginRight: 24, display: "flex", justifyContent: "flex-end" }}>
                  <StripeTape91 fill="#2b1600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-quote" className="accelerator-home-quote">
        <div className="glue-page">
          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-7 glue-grid__col--align-middle">
              <div style={{ marginBottom: 16 }}>
                <QuoteMarkPinkSvg />
              </div>

              <h3
                className="glue-headline glue-headline--headline-3"
                style={{ color: "#2b1600", fontWeight: 500, marginBottom: 20 }}
              >
                &ldquo;Enterprise AI is not about demo novelty—it is about verifiable citations, strict schema contracts, multi-tenant data isolation, and air-gapped security that mission-critical operations can stake their reputation on.&rdquo;
              </h3>

              <div style={{ marginBottom: 16 }}>
                <QuoteMarkPinkSvg flip />
              </div>

              <span
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  color: "#2b1600",
                  marginBottom: 4,
                  display: "block",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                PRINCIPAL ARTIFICIAL INTELLIGENCE ARCHITECT
              </span>
              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", margin: 0 }}>
                Quinn Daisies Technology &amp; Enterprise AI Division
              </p>
            </div>

            <div className="glue-grid__col glue-grid__col--span-5 glue-grid__col--align-middle">
              <div style={{ position: "relative" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dx17ymdx17ymdx17.jpg?alt=media&token=1c8866e0-cb51-4d54-bb2a-fb0940c936e5"
                  alt="Quinn Daisies Enterprise AI Leadership"
                  style={{
                    width: "100%",
                    minHeight: 460,
                    objectFit: "cover",
                    borderRadius: 25,
                    boxShadow: "0 14px 32px rgba(43, 22, 0, 0.18)",
                    display: "block",
                  }}
                />
                <div style={{ marginTop: -12, display: "flex", justifyContent: "center" }}>
                  <StripeTape210 fill="#f9a144" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: DOTTED LOCKUP CTA BANNER WITH FLOATING CARDS */}
      <section id="ai-cta" className="campus-signup-lockup">
        <div className="glue-page">
          <div className="accelerator-hero-floating-grid">
            <div className="floating-media-card floating-media-card--top">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60"
                alt="Enterprise AI Sprints"
              />
              <div className="floating-media-caption">
                <strong>Enterprise AI Delivery</strong>
                2-Week Prototype to Multi-Region Production
              </div>
            </div>

            <div className="accelerator-hero-center" style={{ maxWidth: 680, padding: "0 16px" }}>
              <div style={{ marginBottom: 16 }}>
                <span
                  style={{
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    display: "inline-block",
                    padding: "6px 16px",
                    borderRadius: 999,
                    background: "#fff3e3",
                    color: "#2b1600",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    border: "1px solid rgba(249, 161, 68, 0.45)",
                  }}
                >
                  PRODUCTION AI ARCHITECTURE SPRINT
                </span>
              </div>

              <h2 className="glue-headline glue-headline--headline-1" style={{ color: "#ffffff", marginBottom: 18 }}>
                Ready to build with <span className="decorated-text underline">Production AI</span>?
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Schedule a technical discovery session with Quinn Daisies Principal AI Architects to scope your RAG,
                Autonomous Agent, or Computer Vision roadmap.
              </p>

              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}>
                <Link
                  to="/technology-contact-us"
                  className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
                >
                  <span>Schedule AI Discovery Session</span>
                  <span className="material-symbols-outlined">memory</span>
                </Link>
                <Link
                  to="/ai-and-application-development"
                  className="ApplicationButton glue-button glue-button--medium-emphasis glue-button--reversed"
                >
                  <span>Explore AI Application Hub</span>
                  <span className="material-symbols-outlined">memory</span>
                </Link>
              </div>
            </div>

            <div className="floating-media-card floating-media-card--bottom">
              <div style={{ position: "absolute", top: -18, right: -10, zIndex: 4 }}>
                <StripeTapeVertical26 fill="#f9a144" />
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_tfsqgntfsqgntfsq.jpg?alt=media&token=9c3f23fa-2fe0-4638-b32c-75082938fc13"
                alt="Zero-Hallucination Enterprise RAG"
              />
              <div className="floating-media-caption">
                <strong>Zero-Hallucination SLA</strong>
                pgvector, Knowledge Graphs &amp; Strict Guardrails
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuinnProductModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </div>
  );
};

export default ArtificialIntelligencePage;
