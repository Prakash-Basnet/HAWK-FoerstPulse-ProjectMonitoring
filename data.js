// ForestPulse HAWK Tasks Data
// Status options: "not-started", "in-progress", "completed", "broken", "stalled"
// Edit statuses below as tasks progress

const PROJECT = {
  title: "ForestPulse",
  partner: "HAWK",
  startDate: "2025-01-01",
  endDate: "2027-12-31",
  funding: 277998.90,
  lastUpdated: "2026-03-31"
};

const CATEGORIES = [
  { id: "wp3", name: "WP3: Passive EO Data", color: "#006494", icon: "satellite" },
  { id: "wp4", name: "WP4: Active Airborne Data (Lead)", color: "#155E3B", icon: "radar" },
  { id: "wp5", name: "WP5: Consistency", color: "#7A39BB", icon: "layers" },
  { id: "wp8", name: "WP8: Validation", color: "#A84B2F", icon: "check-shield" },
  { id: "wp10", name: "WP10: Publication & Documentation", color: "#964219", icon: "book" },
  { id: "deliverables", name: "Key Deliverables", color: "#20808D", icon: "package" }
];

const TASKS = [
  // ── WP3: Passive EO Data ──
  {
    id: 1,
    category: "wp3",
    task: "Task 3.2",
    title: "Tree Species Classification",
    description: "Collaborate with UT and TI to utilize spectral reference database based on Federal Forest Inventory (BWI) plots",
    status: "in-progress",
    partners: ["UT", "HAWK"],
    year: "2025-2026"
  },
  {
    id: 2,
    category: "wp3",
    task: "Task 3.2",
    title: "Data Augmentation Strategies",
    description: "Contribute to development of data augmentation strategies for generating synthetic mixed spectral signatures",
    status: "in-progress",
    partners: ["UT", "HAWK"],
    year: "2025-2026"
  },
  {
    id: 3,
    category: "wp3",
    task: "Task 3.2",
    title: "AI Tree Species Abundance Estimation",
    description: "Test and validate tree species abundance estimation using AI methods (neural networks)",
    status: "not-started",
    partners: ["UT", "HAWK"],
    year: "2026-2027"
  },
  {
    id: 4,
    category: "wp3",
    task: "Task 3.2",
    title: "Continuous Abundance Estimates",
    description: "Support generation of continuous abundance estimates for tree species using spectral unmixing",
    status: "not-started",
    partners: ["UT", "HAWK"],
    year: "2026-2027"
  },

  // ── WP4: Active Airborne Data (HAWK Lead) ──
  // Task 4.1: Provision and Preprocessing
  {
    id: 5,
    category: "wp4",
    task: "Task 4.1",
    title: "ALS Data Preprocessing & Homogenization",
    description: "Preprocess and homogenize ALS datasets from DigiZ-DE and other sources",
    status: "in-progress",
    partners: ["HAWK", "TI"],
    year: "2025"
  },
  {
    id: 6,
    category: "wp4",
    task: "Task 4.1",
    title: "Outlier Analysis & Point Cloud Classification",
    description: "Perform outlier analysis and point cloud classification on ALS data",
    status: "in-progress",
    partners: ["HAWK", "TI"],
    year: "2025"
  },
  {
    id: 7,
    category: "wp4",
    task: "Task 4.1",
    title: "Point Density Standardization",
    description: "Standardize point cloud densities and acquisition angles across datasets",
    status: "in-progress",
    partners: ["HAWK", "TI"],
    year: "2025"
  },
  {
    id: 8,
    category: "wp4",
    task: "Task 4.1",
    title: "Digital Terrain Model Generation",
    description: "Generate digital terrain models (DTM) from ALS point clouds",
    status: "in-progress",
    partners: ["HAWK", "TI"],
    year: "2025"
  },
  {
    id: 9,
    category: "wp4",
    task: "Task 4.1",
    title: "Height Normalization",
    description: "Perform height normalization of point clouds using generated DTMs",
    status: "in-progress",
    partners: ["HAWK", "TI"],
    year: "2025"
  },
  {
    id: 10,
    category: "wp4",
    task: "Task 4.1",
    title: "FORCE Grid Alignment",
    description: "Align ALS data to the FORCE grid (10m x 10m cells) for spatial consistency with Sentinel-2 products",
    status: "not-started",
    partners: ["HAWK", "TI"],
    year: "2025-2026"
  },
  {
    id: 11,
    category: "wp4",
    task: "Task 4.1",
    title: "Large ALS Dataset Processing Software",
    description: "Develop efficient software for managing and processing large ALS datasets",
    status: "in-progress",
    partners: ["HAWK"],
    year: "2025-2026"
  },

  // Task 4.2: Area-Based Derivation
  {
    id: 12,
    category: "wp4",
    task: "Task 4.2",
    title: "3D Point Cloud Metrics Extraction",
    description: "Extract statistical metrics from 3D point clouds for 10m x 10m grid cells",
    status: "in-progress",
    partners: ["TI", "HAWK"],
    year: "2025-2026"
  },
  {
    id: 13,
    category: "wp4",
    task: "Task 4.2",
    title: "Height & Density Distribution Metrics",
    description: "Develop metrics describing height and point class distributions",
    status: "not-started",
    partners: ["TI", "HAWK"],
    year: "2026"
  },
  {
    id: 14,
    category: "wp4",
    task: "Task 4.2",
    title: "BWI Training Dataset Linkage",
    description: "Link point cloud metrics with field measurements from BWI and other inventories to create training datasets",
    status: "not-started",
    partners: ["TI", "HAWK"],
    year: "2026"
  },
  {
    id: 15,
    category: "wp4",
    task: "Task 4.2",
    title: "AI Forest Structure Modeling",
    description: "Apply AI methods to model relationships between point cloud metrics and forest structure parameters",
    status: "not-started",
    partners: ["TI", "HAWK"],
    year: "2026-2027"
  },
  {
    id: 16,
    category: "wp4",
    task: "Task 4.2",
    title: "Wall-to-Wall Structure Predictions",
    description: "Generate wall-to-wall predictions of forest structure parameters for all forest pixels",
    status: "not-started",
    partners: ["TI", "HAWK"],
    year: "2026-2027"
  },

  // Task 4.3: Fusion of ALS and Sentinel-2
  {
    id: 17,
    category: "wp4",
    task: "Task 4.3",
    title: "ALS-Sentinel-2 Fusion Methods",
    description: "Lead development of fusion methods combining ALS-derived structure parameters with Sentinel-2 time series",
    status: "in-progress",
    partners: ["HAWK", "UT"],
    year: "2025-2027"
  },
  {
    id: 18,
    category: "wp4",
    task: "Task 4.3",
    title: "Non-Flight Year Predictions",
    description: "Use AI methods to predict forest structure parameters for non-flight years based on optical satellite data",
    status: "not-started",
    partners: ["HAWK", "UT"],
    year: "2026-2027"
  },
  {
    id: 19,
    category: "wp4",
    task: "Task 4.3",
    title: "Temporal Consistency Anchoring",
    description: "Ensure temporal consistency by anchoring Sentinel-2 estimates to ALS-based reference years",
    status: "not-started",
    partners: ["HAWK", "UT"],
    year: "2026-2027"
  },
  {
    id: 20,
    category: "wp4",
    task: "Task 4.3",
    title: "Optical Time Series Validation",
    description: "Test capability of optical time series to model forest structure parameters",
    status: "not-started",
    partners: ["HAWK", "UT"],
    year: "2027"
  },

  // Task 4.4: Advanced Analysis
  {
    id: 21,
    category: "wp4",
    task: "Task 4.4",
    title: "Individual Tree Detection",
    description: "Develop and refine methods for individual tree detection in ALS data",
    status: "not-started",
    partners: ["HAWK", "TI"],
    year: "2026-2027"
  },
  {
    id: 22,
    category: "wp4",
    task: "Task 4.4",
    title: "Crown Segmentation",
    description: "Segment individual tree crowns from point clouds and extract quantitative crown parameters",
    status: "not-started",
    partners: ["HAWK", "TI"],
    year: "2026-2027"
  },
  {
    id: 23,
    category: "wp4",
    task: "Task 4.4",
    title: "Crown Segmentation Plausibility",
    description: "Implement post-processing procedures to test and correct crown segmentation plausibility",
    status: "not-started",
    partners: ["HAWK", "TI"],
    year: "2027"
  },
  {
    id: 24,
    category: "wp4",
    task: "Task 4.4",
    title: "LAI Calculation from ALS",
    description: "Calculate Leaf Area Index (LAI) from ALS point clouds using light extinction equations",
    status: "not-started",
    partners: ["HAWK", "TI"],
    year: "2026-2027"
  },
  {
    id: 25,
    category: "wp4",
    task: "Task 4.4",
    title: "Crown Condition Transfer",
    description: "Transfer crown condition data from WZE field measurements to Sentinel-2 time series",
    status: "not-started",
    partners: ["HAWK", "TI"],
    year: "2026-2027"
  },

  // ── WP5: Consistency ──
  {
    id: 26,
    category: "wp5",
    task: "Task 5.1",
    title: "Spatial Consistency of Layers",
    description: "Collaborate on ensuring spatial consistency of all information layers",
    status: "not-started",
    partners: ["UT", "HAWK"],
    year: "2027"
  },
  {
    id: 27,
    category: "wp5",
    task: "Task 5.1",
    title: "Temporal Smoothing",
    description: "Contribute to temporal smoothing of annual forest structure parameters",
    status: "not-started",
    partners: ["UT", "HAWK"],
    year: "2027"
  },
  {
    id: 28,
    category: "wp5",
    task: "Task 5.1",
    title: "FORCE Grid Spatial Reference",
    description: "Ensure ALS-derived products are processed with FORCE grid as spatial reference",
    status: "in-progress",
    partners: ["UT", "HAWK"],
    year: "2025-2027"
  },

  // ── WP8: Validation ──
  {
    id: 29,
    category: "wp8",
    task: "Task 8.1",
    title: "Validation Statistics Development",
    description: "Contribute to development of validation statistics (confusion matrices, RMSE, bias, etc.)",
    status: "not-started",
    partners: ["FVA", "HAWK", "TI", "UT"],
    year: "2026-2027"
  },
  {
    id: 30,
    category: "wp8",
    task: "Task 8.1",
    title: "Balanced Sampling Designs",
    description: "Implement balanced sampling designs for splitting reference data into training and validation sets",
    status: "not-started",
    partners: ["FVA", "HAWK", "TI", "UT"],
    year: "2026-2027"
  },
  {
    id: 31,
    category: "wp8",
    task: "Task 8.3",
    title: "Area of Applicability Implementation",
    description: "Lead implementation of the Area of Applicability approach (Meyer & Pebesma 2021)",
    status: "not-started",
    partners: ["HAWK", "UT"],
    year: "2026-2027"
  },
  {
    id: 32,
    category: "wp8",
    task: "Task 8.3",
    title: "Feature Space Variability Testing",
    description: "Test overlap of feature space variability between reference data and prediction target population",
    status: "not-started",
    partners: ["HAWK", "UT"],
    year: "2026-2027"
  },
  {
    id: 33,
    category: "wp8",
    task: "Task 8.3",
    title: "Unreliable Prediction Masking",
    description: "Identify and mask/mark geographic areas where trained models cannot make reliable predictions",
    status: "not-started",
    partners: ["HAWK", "UT"],
    year: "2027"
  },

  // ── WP10: Publication & Documentation ──
  {
    id: 34,
    category: "wp10",
    task: "Task 10.3",
    title: "Method Documentation",
    description: "Document data products, methodological foundations, and software tools developed by HAWK",
    status: "in-progress",
    partners: ["UT", "TI", "HAWK"],
    year: "2025-2027"
  },
  {
    id: 35,
    category: "wp10",
    task: "Task 10.3",
    title: "GitHub Repos & Tutorials",
    description: "Contribute to GitHub repositories, wikis, and tutorials for open-source code and methods",
    status: "in-progress",
    partners: ["UT", "TI", "HAWK"],
    year: "2025-2027"
  },
  {
    id: 36,
    category: "wp10",
    task: "Task 10.3",
    title: "Metadata Catalogs",
    description: "Create metadata catalogs for HAWK-generated products ensuring data discoverability",
    status: "not-started",
    partners: ["UT", "TI", "HAWK"],
    year: "2026-2027"
  },
  {
    id: 37,
    category: "wp10",
    task: "Task 10.4",
    title: "Peer-Reviewed Publications",
    description: "Publish research results in peer-reviewed and non-peer-reviewed journals",
    status: "not-started",
    partners: ["UT", "HAWK", "TI"],
    year: "2026-2027"
  },
  {
    id: 38,
    category: "wp10",
    task: "Task 10.4",
    title: "Conference Presentations",
    description: "Present findings at national and international conferences",
    status: "not-started",
    partners: ["UT", "HAWK", "TI"],
    year: "2025-2027"
  },
  {
    id: 39,
    category: "wp10",
    task: "Task 10.4",
    title: "Open Data Publication",
    description: "Make generated data products openly and freely available (CC-BY 4.0) on CODE-DE, DigiZ-DE, Zenodo",
    status: "not-started",
    partners: ["UT", "HAWK", "TI"],
    year: "2027"
  },

  // ── Key Deliverables ──
  {
    id: 40,
    category: "deliverables",
    task: "Deliverable",
    title: "Nationwide Homogenized ALS Point Clouds",
    description: "Preprocessed, classified, height-normalized point clouds aligned to FORCE grid",
    status: "in-progress",
    partners: ["HAWK"],
    year: "2025-2026"
  },
  {
    id: 41,
    category: "deliverables",
    task: "Deliverable",
    title: "Digital Terrain Models",
    description: "DTMs generated from ALS point clouds for all covered areas",
    status: "in-progress",
    partners: ["HAWK"],
    year: "2025-2026"
  },
  {
    id: 42,
    category: "deliverables",
    task: "Deliverable",
    title: "Forest Structure Parameter Maps (10m)",
    description: "Basal area, timber volume, crown cover, stand top height, vertical structure maps at 10m resolution",
    status: "not-started",
    partners: ["HAWK", "TI"],
    year: "2026-2027"
  },
  {
    id: 43,
    category: "deliverables",
    task: "Deliverable",
    title: "Annual Fusion Products",
    description: "Annual forest structure parameter estimates for non-flight years via ALS-Sentinel-2 fusion",
    status: "not-started",
    partners: ["HAWK", "UT"],
    year: "2027"
  },
  {
    id: 44,
    category: "deliverables",
    task: "Deliverable",
    title: "Individual Tree Detection Products",
    description: "Tree detection, crown segmentation, and crown parameter datasets from ALS",
    status: "not-started",
    partners: ["HAWK", "TI"],
    year: "2027"
  },
  {
    id: 45,
    category: "deliverables",
    task: "Deliverable",
    title: "Validation & AoA Reports",
    description: "Statistical validation reports and Area of Applicability maps for all structure products",
    status: "not-started",
    partners: ["HAWK", "UT"],
    year: "2027"
  },
  {
    id: 46,
    category: "deliverables",
    task: "Deliverable",
    title: "Open-Source Software & Docker Containers",
    description: "All code on GitHub (GPL3), Docker containers, user guides, and method documentation",
    status: "in-progress",
    partners: ["HAWK"],
    year: "2025-2027"
  }
];
