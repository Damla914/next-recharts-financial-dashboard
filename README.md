# 📊 Financial & Country Risk Analytics Dashboard

A data-driven and interactive financial analytics dashboard built with **Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, and Recharts**.

The project visualizes dummy JSON data related to **international credit ratings, country risk scores, and banking financial ratios** through interactive charts and KPI cards.

This project was developed as a frontend-focused dashboard using modular dummy data, with an architecture designed to be easily extended with real data sources in future development phases.

## 🚀 Features

### 📌 Dynamic KPI Cards

* Average country risk score calculated dynamically from JSON data
* Credit rating distribution summary
* Banking ratio summaries
* KPI values derived from the underlying datasets 

### 📈 Country Score Trend

A responsive **Line Chart** showing the change in countries' total risk scores over a five-year period.

* Multi-country comparison
* Year-over-year trend visualization
* Interactive tooltip
* Legend support
* Responsive layout using Recharts `ResponsiveContainer`

### 🥧 Credit Rating Distribution

A **Pie Chart** visualizing the distribution of credit ratings across categories such as:

* AAA
* AA
* A
* BBB
* BB
* B
* CCC

The chart displays the proportional distribution of ratings using the provided JSON dataset.

### 📊 Bank Profitability Analysis

A **Bar Chart** comparing banking profitability ratios over a five-year period.

* ROA (%)
* ROE (%)
* Dual-axis visualization for comparing metrics with different scales
* Interactive tooltip
* Responsive layout

### 🕸️ Multi-Dimensional Country Risk Comparison

A **Radar Chart** comparing countries across multiple risk dimensions:

* Economic
* Political
* Financial
* Social
* Governance

This provides a multidimensional view of country risk performance.

### 🎯 Type Safety

The project follows a type-first approach with dedicated TypeScript interfaces for the domain data models.

* Strongly typed JSON datasets
* Dedicated types for country scores, bank ratios, ratings, and country comparisons
* Typed Recharts callback and label functions
* No `any` usage

### 📱 Responsive Design

The dashboard is designed to work across different screen sizes.

* Single-column layout on mobile
* Two-column dashboard grid on desktop
* Responsive charts using Recharts `ResponsiveContainer`
* Responsive UI components using Tailwind CSS

---

## 🛠️ Technology Stack

| Layer         | Technology              |
| ------------- | ----------------------- |
| Framework     | Next.js 16 (App Router) |
| Language      | TypeScript 5.x          |
| Styling       | Tailwind CSS 4          |
| UI Components | shadcn/ui               |
| Charts        | Recharts                |
| Data          | Modular JSON datasets   |
| Code Quality  | ESLint + Prettier       |

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── charts/
│   │   ├── bankRatiosChart.tsx
│   │   ├── countryComparisonChart.tsx
│   │   ├── countryScoreChart.tsx
│   │   └── ratingDistributionChart.tsx
│   │
│   ├── dashboard/
│   │   └── StatCardsGroup.tsx
│   │
│   └── ui/
│       ├── card.tsx
│       ├── header.tsx
│       └── statCard.tsx
│
├── data/
│   ├── countries.json
│   ├── bank-ratios.json
│   ├── rating-distribution.json
│   └── country-comparison.json
│
├── types/
│   └── ...
│
└── README.md
```

---

## 📊 Data Structure

The dashboard uses modular JSON datasets located under the `/data` directory.

### `countries.json`

Contains five years of country-level risk data, including:

* id
* Country name
* Country code
* Year
* Total score
* Economic score
* Political score
* Rating

### `bank-ratios.json`

Contains five years of banking financial ratios, including:

* Year
* ROA
* ROE
* Capital adequacy
* NPL ratio

### `rating-distribution.json`

Contains credit rating categories and their corresponding counts.

### `country-comparison.json`

Contains multidimensional country risk scores for radar chart comparisons.

The datasets are structured to resemble realistic domain data and can be replaced by a future backend/API without requiring major changes to the chart components.

---

## 🧩 TypeScript Models

Dedicated TypeScript types are defined under `/types`.

Example domain models include:

* `CountryScore`
* `BankRatio`
* `RatingDistribution`
* `CountryComparison`

The project follows a **type-first approach**, where data models are defined before consuming the JSON datasets.

---

## 📦 Installation

Clone the repository and install the dependencies:

```bash
npm install
```

---

## ▶️ Development

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## 🧪 Quality Checks

### TypeScript Type Check

```bash
npx tsc --noEmit
```

### ESLint

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

The project should pass TypeScript checking, linting, and production build without errors.

---

## ✅ Task Requirements

The implementation covers the main requirements of the dashboard task:

* [x] Next.js 16 with App Router
* [x] TypeScript
* [x] Tailwind CSS
* [x] shadcn/ui
* [x] Recharts
* [x] Dummy JSON datasets
* [x] TypeScript domain models
* [x] Line Chart
* [x] Bar Chart
* [x] Pie Chart
* [x] Radar Chart
* [x] shadcn/ui Card structure
* [x] Responsive dashboard layout
* [x] Responsive charts with `ResponsiveContainer`
* [x] Tooltip and legend support
* [x] Type-safe implementation
* [x] No `any` usage
* [x] Production build verification
* [x] ESLint and TypeScript checks

---

## 🔮 Future Improvements

This project is intentionally limited to the frontend and dummy data layer.

Future development phases can extend the dashboard with:

* PostgreSQL
* Prisma ORM
* REST/API data sources
* Authentication with better-auth
* CRUD operations
* Real risk score calculation
* Server Actions
* TanStack Query

These features are outside the scope of the current task and are intentionally not included.

---

## 📄 License

This project is open-source and available under the MIT License.
