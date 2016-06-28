# Proposal
- Build an EmberJS app from scratch
- Explain the concepts

# What is EmberJS
- Vision: A framework for creating ambitious web applications
- Single Page Application development framework
    - Fluid user experience
    - similar to desktop applications
    - No full page reloads
- Present in all development and deploy lifecycle
- CoC
- Template library (Handlebars)
- Past: MVVM based, Present & Future: Component based.
- Future:
    - Routeable Components
    - Angle brackets Components
    - Accessible by default
- Ember CLI
- Architecture
    - MVC
    - Router & Routes
    - Templates
    - Models
    - Components
    - Computed properties
    - Data down, action up
    - One way binding
- Ember Data
    - Backend communication
    - Can be replaced
    - Adapter
    - Serializers
- Ember Add-ons

# Dependency
- Node.js 5

# Preparation
npm install -g ember-cli@2.5
ember new my-books
ls
cd my-books
atom .
ember -v
ember serve

# Routing
- Dynamic Segments
- Nested routes
- How to get the dyn. seg. values on a route
ember g route about
ember g route about/contact
ember g route index
ember g route category
ember g route book

# Content
- Include HTML, CSS and JS

# Components
ember g component book-list

- Use it in different places
- Encapsulated
- Data down/action up

ember g component book-card
- yield

# Model
ember g http-mock books
- RESTful API
- Use Express
- Server structure
- Store service
- save
- Slide 3

ember g model book
ember g model category

- Attributes
- Relations

# Components
ember g component book-list
ember g component book-card
- Data down/action up
- One way vs Two way bidding
- actions
- yield

# deploy
ember build
