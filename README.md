# Next.js + Supabase + PostgreSQL

## Tech Stack

- **Frontend**: Next.js (TypeScript)
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Railway)
- **Authentication**: Firebase Auth
- **UI**: Material UI (MUI)
- **Deployment**: Railway

## 🛠️ Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Ex-Convict/meal-app.git
   cd meal-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables** in `.env`:

   ```sh
   # Firebase Authentication

   NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
   DATABASE_URL=DATABASE_URL

   # PostgreSQL (Railway)

   DATABASE_URL=YOUR_DATABASE_URL

   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. **Define your database models** in `prisma/schema.prisma`:

   ```sh
   # Example

   model User {
   id    String  @id @default(uuid())
   email String  @unique
   name  String?
   createdAt DateTime @default(now())
   }
   ```

````

Run migrations to apply changes to the database:

   ```sh
  npx prisma migrate dev --name init

````

## Deployment

- **Railway:** Push your changes to GitHub, and Railway will automatically deploy your app.
