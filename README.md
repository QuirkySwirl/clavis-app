# Clavis: Data Quality Navigator

Clavis is an interactive diagnostic tool designed to help leaders and teams in traditional (often less digitally mature) businesses identify how foundational Data Quality (DQ) issues are impacting their core business processes, KPIs, and strategic objectives. It translates abstract DQ concepts into tangible business problems, provides a guided path to pinpointing actionable areas for improvement, and generates a preliminary Data Quality Initiative Charter to kickstart improvement efforts.

The goal of Clavis is to turn an organization's data from a liability into a strategic asset by enabling a reality-based approach to data quality improvement.

## Core Features

*   **Diagnostic Journeys:**
    *   **Diagnose Process Pain:** Identify DQ issues in core business lifecycles (e.g., Order to Cash, Procure to Pay).
    *   **Assess KPI/OKR Reliability:** Uncover data quality factors affecting the trustworthiness of key metrics.
    *   **Evaluate for Strategy/AI:** Assess data readiness for strategic initiatives like AI, BI, or digital transformation.
*   **DQ Dimension Explorer:** Deep dive into 60 standard Data Quality dimensions, their definitions, impacts, and examples.
*   **Project Charter Generation:** Automatically generates a draft Data Quality Initiative Charter based on diagnostic results.
*   **Blog & Insights:** Articles on data quality, business strategy, and the Clavis journey.

## Guiding Philosophy

Clavis is built on the principles of:

*   **Reality-Based, Business-Problem First:** Leading with tangible business challenges.
*   **Action-Enabling:** Providing a structured starting point for action.
*   **Human-Centric & Empathetic:** Using clear language and acknowledging user struggles.
*   **Connecting Symptoms to Root Causes:** Linking DQ issues to environmental factors.
*   **Strategic Enabler:** Positioning DQ improvement as critical for business objectives.

## Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v15) with React (v19)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3.4)
    *   Dark Theme with Glassmorphism
    *   Graphpaper background & Spotlight effects
*   **Content:** [MDX](https://mdxjs.com/) for blog posts and potentially other content.
*   **Charting:** [Chart.js](https://www.chartjs.org/) for visualizations.
*   **Linting/Formatting:** ESLint, Prettier (assumed, standard for Next.js projects)
*   **Package Manager:** npm

## Project Structure

```
clavis-app/
├── README.md               # This file
├── content/                # MDX blog posts
│   └── blog/
├── public/                 # Static assets (images, icons)
│   └── data/               # Core JSON data files for Clavis logic
├── src/
│   ├── app/                # Next.js App Router (pages, layouts)
│   │   ├── (diagnose)/     # Potential route group for diagnostic journeys
│   │   ├── blog/           # Blog pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   │   └── layout/         # Header, Footer, etc.
│   ├── context/            # React Context providers (e.g., UserContext)
│   ├── styles/             # Additional global styles or specific component styles (if any)
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions (e.g., blog post handling, data loaders)
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── ...                     # Other configuration files (ESLint, PostCSS, etc.)
```

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended, e.g., v18 or v20)
*   [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  **Clone the repository (once created):**
    ```bash
    git clone <repository-url>
    cd clavis-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server (usually on `http://localhost:3000`):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

### Starting the Production Server

After building, you can start the production server:

```bash
npm run start
```

## Key Data Files (in `public/data/`)

The core logic of Clavis is driven by a suite of JSON files that define data quality dimensions, business impacts, lifecycle mappings, and more. These are crucial for understanding how the diagnostic journeys work. Refer to `ai_guidance/DATA_MODEL_AND_CORE_LOGIC.md` for a detailed explanation of these files.

## Contributing

Details on contributing to the project will be added once the initial setup and repository are finalized.

## License

This project is currently proprietary. License details will be updated as needed.
