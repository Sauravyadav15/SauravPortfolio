# CS Portfolio - React Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion. Perfect for CS B.Tech students to showcase their projects, skills, and experience.

## ✨ Features

- **Modern Dark Theme** - Sleek dark design with cyan accents
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **GitHub Integration** - Automatically fetches repository data
- **Project Showcase** - Detailed project pages with live demos
- **Contact Form** - Functional contact form with validation
- **Resume Download** - Easy resume download functionality
- **Mobile Navigation** - Hamburger menu for mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cs-portfolio.git
   cd cs-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Customization Guide

### 1. Personal Information

Update your personal information in the following files:

**Home Page** (`src/pages/Home.tsx`):
```typescript
// Update these values
const heroTitle = "Hi, I'm Your Name";
const heroSubtitle = "Computer Science Student & Full Stack Developer";
const socialLinks = [
  { url: "https://github.com/yourusername", icon: <Github /> },
  { url: "https://linkedin.com/in/yourusername", icon: <Linkedin /> },
  // Add more social links
];
```

**About Page** (`src/pages/About.tsx`):
```typescript
// Update personal information
const personalInfo = {
  name: "Your Name",
  location: "Your City, Country",
  email: "your.email@example.com",
  phone: "+1 234 567 8900"
};
```

### 2. Projects Integration

**Add Your Projects** (`src/pages/Projects.tsx`):
```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/your-project",
    liveUrl: "https://your-project.vercel.app", // Optional
    image: "path/to/project-image.jpg",
    category: "Full Stack",
    featured: true
  }
  // Add more projects
];
```

**GitHub Integration**:
- Make sure your repositories are public
- The portfolio will automatically fetch stars, forks, and language data
- Update the `githubUrl` in each project to match your actual repository URLs

### 3. Skills & Technologies

**Update Skills** (`src/pages/Skills.tsx`):
```typescript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      // Add your skills with proficiency levels (0-100)
    ]
  }
  // Add more categories
];
```

### 4. Education & Certifications

**Update Education** (`src/pages/Education.tsx`):
```typescript
const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Your University Name",
    duration: "2021 - 2025",
    gpa: "8.5/10",
    description: "Your education description...",
    achievements: [
      "Dean's List for Academic Excellence",
      "Member of Computer Science Club"
    ]
  }
];
```

### 5. Contact Information

**Update Contact Details** (`src/pages/Contact.tsx`):
```typescript
const contactInfo = [
  {
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    title: 'Phone',
    value: '+1 234 567 8900',
    link: 'tel:+12345678900'
  }
];
```

### 6. Resume

1. Replace `public/resume.pdf` with your actual resume
2. Or update the download link in the Home component to point to your resume URL

### 7. Styling Customization

**Colors** (`src/App.css`):
```css
/* Primary color */
--primary-color: #00d4ff;

/* Background colors */
--bg-primary: #0a0a0a;
--bg-secondary: #1a1a1a;

/* Text colors */
--text-primary: #ffffff;
--text-secondary: #888888;
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Responsive grids and layouts
- Touch-friendly interactions

## 🚀 Deployment

### GitHub Pages

1. **Update homepage in package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/cs-portfolio"
   }
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deployment scripts to package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Drag the `build` folder to Netlify**

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
cs-portfolio/
├── public/
│   ├── index.html
│   ├── resume.pdf
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── App.css
│   └── index.tsx
├── package.json
└── README.md
```

## 🎨 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **CSS3** - Styling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Design inspiration from modern portfolio websites

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Contact me through the contact form on the website

---

**Happy Coding! 🚀**
