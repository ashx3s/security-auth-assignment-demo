# README

This is intended to serve as an mvp example of what is expected for phase 2 of the assignment. The frontend tooling is entirely your choice. Our goal with this assignment is proper function authentication and security routing. So while you're expected to add some content to the pages and have navigatable routes actually navigatable, they don't need to be visually well developed.

## Assignment Objectives

- Users should be able to authenticate with either local credentials or third-party single sign-on (SSO) providers.
- Sensitive routes must be protected, with clear, role-based access for different types of users.
- The system should be robust against session-related vulnerabilities like CSRF, session fixation and brute force attacks.

## Prework Labs

- Password Hashing
- RBAC
- Google 0Auth\*\*
- ABAC\*\*
- Secure Session Management Protocols

## MVP Implementations

- **Authentication**
  - Local password hashing
  - Users set up in database (Mongo, Supabase, Headless CMS of your choice)
  - At least 1 SSO login provider
- **Access Control**
  - User roles:
    - Admin: CRUD access
    - User: R access
  - Middleware to restrict access based on user roles
  - Protected Routes:
    - /admin
    - /profile
    - /dashboard
- **Session Management**
  - JWTs generated and securely stored (HttpOnly or localStorage)
    - set expiry date
    - token refresh for session time
  - JWT Validation Middleware
- **Security Mitigation**
  - secure session cookies
  - session timeout policy
  - rate limiting for failed login
- **Documentation**
  - Succinctly and accurately answer reflection checkpoint questions (5)
- **Deliverables**
  - Video Demonstrating login auth
  - Code Repository
- **Bonus Marks** _document at top of readme_
  - +15 git commits with clear messages (1)
  - Deployed Site with live URL (2)
  - Code Optimization PR with at least 1 example of DRYing out code (1)
  - Include static assets with caching strategy (1)

## Site Content Requirements

- all routes from phase 1 that are meant to be navigatable pages should be so with some sample content on them
- dynamic routes should have content (if api routes, labelled as such)
- css isn't required, however if you include some as well as images with static asset caching as demonstrated in labs, you are eligible for an extra point
- **set this code up so if you want to turn it into a portfolio piece after the semester, adding content and styles will be a logical next step**
