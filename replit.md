# Legal Services Platform

## Overview

This is a full-stack legal consultation platform built with React, Express, and PostgreSQL. The application connects clients with lawyers for legal consultations, featuring role-based authentication and a modern UI built with Tailwind CSS and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Authentication**: JWT-based authentication with bcrypt for password hashing
- **API Design**: RESTful API architecture with role-based access control
- **Development**: tsx for TypeScript execution in development

### Database Architecture
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon serverless PostgreSQL with connection pooling
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Location**: Database schema defined in `shared/schema.ts`

## Key Components

### Authentication System
- JWT token-based authentication stored in localStorage
- Role-based access control (admin, client, lawyer)
- Protected routes with role validation
- Password hashing with bcrypt

### User Roles & Permissions
- **Admin**: Platform management, lawyer approval, subscription management
- **Client**: Book consultations, manage profile, find lawyers
- **Lawyer**: Manage consultations, professional profile, availability

### Database Schema
- **Users Table**: Core user information with role-based fields
- **Lawyers Table**: Extended lawyer-specific information (specialization, rates, approval status)
- **Consultations Table**: Consultation bookings and status tracking

### Frontend Components
- **Layout Components**: Header, DashboardLayout for consistent navigation
- **Page Components**: Role-specific dashboards and profile management
- **UI Components**: Comprehensive shadcn/ui component library
- **Form Handling**: React Hook Form with Zod validation

## Data Flow

1. **Authentication Flow**
   - User submits login credentials
   - Server validates and returns JWT token
   - Client stores token and user data in localStorage
   - Subsequent requests include Authorization header

2. **Role-Based Navigation**
   - Protected routes check user authentication and role
   - Dashboard components render based on user role
   - API endpoints validate user permissions

3. **API Communication**
   - TanStack Query manages server state
   - Custom `apiRequest` function handles HTTP requests
   - Error handling with toast notifications

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless PostgreSQL database
- **Connection**: WebSocket-based connection for serverless compatibility

### UI Libraries
- **Radix UI**: Headless component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Development Tools
- **Replit Integration**: Runtime error overlay and cartographer plugin
- **TypeScript**: Type safety across the application
- **ESBuild**: Production bundling for server code

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs server with tsx and Vite dev server
- **Port**: Application runs on port 5000
- **Hot Reload**: Vite provides frontend hot reload, tsx provides backend hot reload

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Start Command**: `npm start` runs production server

### Database Setup
- **Schema Push**: `npm run db:push` applies schema changes
- **Environment**: Requires `DATABASE_URL` environment variable
- **Migrations**: Stored in `./migrations` directory

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Deployment**: Auto-scale deployment target
- **Port Mapping**: Internal port 5000 mapped to external port 80

## Changelog

```
Changelog:
- June 21, 2025. Initial setup with database, authentication, and role-based dashboards
- June 21, 2025. Added logout functionality in header and sidebar
- June 21, 2025. Replaced video upload with YouTube video link input in lawyer profile
- June 21, 2025. Fixed authentication token handling in API requests
- June 21, 2025. Added test users (email: admin@letspart.com, client@test.com, lawyer@test.com - password: "password")
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```