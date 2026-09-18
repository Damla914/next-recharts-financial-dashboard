# 📊 Financial & Country Risk Analytics Dashboard

A full-stack, data-driven financial analytics dashboard built with **Next.js 16 (App Router), TypeScript, PostgreSQL, Prisma ORM, Tailwind CSS, shadcn/ui, and Recharts**.

The application provides interactive visualizations and database-backed CRUD management for **country risk scores, credit rating distributions, banking financial ratios, and multidimensional country risk comparisons**.

The project was initially developed as a frontend dashboard using modular JSON datasets and was later extended with a **PostgreSQL database, Prisma ORM, and Next.js Server Actions** for persistent data storage and CRUD operations.

---

## 🚀 Key Features

### 📌 Dynamic KPI Cards

Dashboard KPI cards are dynamically calculated from data stored in the PostgreSQL database.

- Average country risk scores
- Credit rating summaries
- Banking performance ratio summaries
- Database-driven KPI calculations

---

### 📈 Country Risk Score Management & Trend

A responsive **Line Chart** visualizes country risk score trends over a five-year period.

The dashboard also provides a dedicated management page:

```text
/country-scores
```

Features include:

- Country risk score listing
- Create new country score records
- Edit existing records
- Delete records
- Database-backed data management
- Automatic dashboard revalidation after mutations

---

### 🥧 Credit Rating Distribution

A **Pie Chart** visualizes the distribution of credit rating categories.

Supported rating categories include:

- AAA
- AA
- A
- BBB
- BB
- B
- CCC

Dedicated management page:

```text
/ratings
```

Users can:

- View rating distribution records
- Add new rating records
- Update distribution counts
- Delete records
- See changes reflected in the dashboard

---

### 📊 Bank Ratios & Profitability Analysis

A responsive **Bar Chart** visualizes banking financial ratios over a five-year period.

The dashboard includes:

- ROA
- ROE
- CAR (Capital Adequacy Ratio)
- NPL Ratio

Dedicated management page:

```text
/bank-ratios
```

Users can:

- View yearly bank ratio records
- Create new records
- Edit existing records
- Delete records

---

### 🕸️ Multi-Dimensional Country Risk Comparison

A **Radar Chart** compares countries across multiple risk dimensions:

- Economic
- Political
- Financial
- Social
- Governance

Dedicated management page:

```text
/country-comparison
```

The database records are transformed into the matrix structure required by the Radar Chart.

Users can:

- View country comparison records
- Add new records
- Edit existing records
- Delete records

---

## ⚡ Server Actions & Database Integration

Database mutations are implemented using **Next.js Server Actions** and Prisma.

The application uses Server Actions for:

- Creating records
- Updating records
- Deleting records

After successful mutations, the relevant routes are revalidated using `revalidatePath()` so that updated database values are reflected in the dashboard.

The application uses Prisma-generated types and TypeScript interfaces to maintain strict type safety throughout the data flow.

---

## 🎯 Type Safety

The project follows a type-safe approach across the application.

- TypeScript 5.x
- Prisma-generated database types
- Dedicated TypeScript interfaces
- Type-safe Server Actions
- Typed chart data
- Typed Recharts callbacks
- No `any` usage

---

## 📱 Responsive & Accessible UI

The interface is designed to work across desktop and mobile screen sizes.

- Mobile-first responsive layouts
- Responsive dashboard grid
- Recharts `ResponsiveContainer`
- Responsive CRUD tables and forms
- Accessible modal dialogs
- shadcn/ui components

---

# 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.x |
| Database | PostgreSQL |
| ORM | Prisma ORM |
| Database Container | Docker |
| Data Fetching & Mutations | Next.js Server Actions |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Charts | Recharts |
| Code Quality | ESLint + Prettier |

---

# 📂 Project Structure

```text
├── app/
│   ├── bank-ratios/
│   │   └── page.tsx
│   │
│   ├── country-comparison/
│   │   └── page.tsx
│   │
│   ├── country-scores/
│   │   └── page.tsx
│   │
│   ├── ratings/
│   │   └── page.tsx
│   │
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
│   ├── modals/
│   │   ├── bankRatiosModal/
│   │   ├── countryComparisonModals/
│   │   ├── ratingsModal/
│   │   ├── CreateScoreModal.tsx
│   │   ├── EditScoreModal.tsx
│   │   └── DeleteScoreModal.tsx
│   │
│   └── ui/
│
├── lib/
│   ├── actions/
│   │   ├── bankRatios.ts
│   │   ├── countryComparisons.ts
│   │   ├── countryScores.ts
│   │   └── ratings.ts
│   │
│   ├── db.ts
│   └── prisma.ts
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
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
├── docker-compose.yml
├── .env
├── package.json
└── README.md
```

---

# 🗄️ Database Architecture

The application uses PostgreSQL as its persistent data layer.

```text
                    Next.js 16
                        │
             ┌──────────┴──────────┐
             │                     │
        Server Actions         Dashboard
             │                     │
             └──────────┬──────────┘
                        ↓
                      Prisma
                        ↓
                   PostgreSQL
                        ↓
                  Docker Container
```

Prisma is responsible for:

- Database schema management
- Database queries
- CRUD operations
- Type-safe database access
- Data seeding
- Database migrations

---

# 🐳 PostgreSQL with Docker

PostgreSQL runs inside a Docker container for local development.

Start the database container with:

```bash
docker compose up -d
```

Check the running containers:

```bash
docker compose ps
```

To stop the database:

```bash
docker compose down
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/financial_dashboard?schema=public"
```

The `DATABASE_URL` is used by Prisma to connect to PostgreSQL.

> Do not commit your `.env` file to the repository.

---

# 🔄 Database Migration

After configuring the database connection, create and apply the Prisma migration:

```bash
npx prisma migrate dev --name init
```

This creates the database tables based on the models defined in:

```text
prisma/schema.prisma
```

---

# 🌱 Database Seeding

The initial dataset is based on the project's existing domain JSON datasets.

The JSON files are used as **seed data** rather than as the application's runtime data source.

```text
JSON datasets
     ↓
prisma/seed.ts
     ↓
PostgreSQL
     ↓
Prisma
     ↓
Next.js
```

Run the seed script with:

```bash
npx prisma db seed
```

The seed process populates the PostgreSQL database with the initial country scores, banking ratios, rating distributions, and country comparison data.

---

# 🔎 Prisma Studio

Prisma Studio can be used to inspect and manage database records during development.

Run:

```bash
npx prisma studio
```

This opens a browser-based interface for viewing the PostgreSQL data through Prisma.

---

# 🌐 Application Routes

| Route | Description |
|---|---|
| `/` | Main financial and country risk dashboard |
| `/country-scores` | Country score CRUD management |
| `/ratings` | Credit rating distribution CRUD management |
| `/bank-ratios` | Banking ratio CRUD management |
| `/country-comparison` | Multidimensional country comparison CRUD management |

The four dashboard cards are linked to their corresponding management pages.

---

# 🔁 CRUD Workflow

Each dataset has its own management interface.

The general workflow is:

```text
Create
  ↓
PostgreSQL
  ↓
Prisma
  ↓
Server Action
  ↓
revalidatePath()
  ↓
Updated Dashboard
```

The same structure is used for:

- Country Scores
- Ratings
- Bank Ratios
- Country Comparisons

### Create

Users can add new records through the dedicated management pages.

### Read

Records are retrieved from PostgreSQL through Prisma and displayed in the corresponding interfaces.

### Update

Existing records can be edited through the CRUD modals.

### Delete

Records can be removed through the corresponding delete actions.

---

# 📊 Data Flow

The dashboard no longer depends directly on JSON files during normal application usage.

The current data flow is:

```text
PostgreSQL
     ↓
   Prisma
     ↓
Next.js Server Components
     ↓
Dashboard / CRUD Pages
     ↓
Recharts
```

The original JSON datasets are retained as initial seed data for populating the database.

---

# 📦 Installation & Setup

## 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create `.env` and add the PostgreSQL connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/financial_dashboard?schema=public"
```

## 4. Start PostgreSQL

```bash
docker compose up -d
```

## 5. Run Prisma Migration

```bash
npx prisma migrate dev
```

## 6. Seed the Database

```bash
npx prisma db seed
```

## 7. Start the Development Server

```bash
npm run dev
```

## 8. Open the Application

```text
http://localhost:3000
```

---

# 🧪 Quality Checks

The project can be checked using the following commands.

### TypeScript

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

All three checks should complete successfully before deployment or submission.

---

# 🔮 Future Improvements

The current project provides a database-backed analytics dashboard with CRUD functionality.

Potential future improvements include:

- User authentication and authorization
- Role-based access control
- More advanced filtering and pagination
- Search functionality
- Historical data analysis
- Real financial data/API integration
- Automated risk score calculations
- Advanced reporting and export functionality
- Production database deployment

---

# 📄 License

This project is open-source and available under the [MIT License](LICENSE).
