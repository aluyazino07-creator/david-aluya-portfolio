# 🎨 Customization Guide

This guide will help you personalize the portfolio with your own content, images, and brand.

## 👤 Personal Information

### Update Your Name and Title

**File: `src/components/Hero.jsx`**

```javascript
const Hero = () => {
  const words = [
    'Frontend Developer',      // Change these
    'React Developer',
    'JavaScript Developer',
    'UI Enthusiast'
  ]
  
  // Also update the main heading
  <h1>Hi, I'm David Aluya</h1>  // Change name here
}
```

### Update Biography

**File: `src/components/About.jsx`**

```javascript
<p className="text-lg text-gray-600">
  I'm a passionate frontend developer from Nigeria with a strong foundation...
  // Update this text
</p>
```

### Update Contact Information

**File: `src/components/Contact.jsx`**

```javascript
<a href="mailto:david@example.com">
  aluyazino07@gmail.com  // Update email
</a>

<p className="text-gray-600">Nigeria</p>  // Update location
```

**File: `src/components/Footer.jsx`**

```javascript
<h3>David Aluya</h3>  // Update name
<p>Frontend Developer | Future Tech Entrepreneur</p>  // Update tagline
```

## 🛠️ Skills Section

**File: `src/components/Skills.jsx`**

Update skill categories:

```javascript
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Responsive Design',
      'Accessibility'
    ]
  },
  {
    title: 'Styling',
    skills: [
      'Tailwind CSS',
      'CSS Animations',
      'Flexbox',
      'Grid'
    ]
  },
  // Add or remove categories as needed
]
```

Update proficiency levels:

```javascript
[
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 75 },
  // Adjust levels 0-100
]
```

## 🎯 Projects Section

**File: `src/components/Projects.jsx`**

Add or modify projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description of what the project does',
    image: 'https://via.placeholder.com/500x300',  // Add your image URL
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],  // Technologies used
    github: 'https://github.com/yourprofile/project',  // GitHub link
    demo: 'https://project-demo.com',  // Live demo link
  },
  // Add more projects by copying the structure
]
```

## 📸 Replace Placeholder Images

### Hero Section Avatar

**File: `src/components/Hero.jsx`**

Replace the placeholder:

```javascript
// Current placeholder
<div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100">
  {/* Replace with your image */}
</div>

// Option 1: Use an image
<img src="your-image.jpg" alt="Profile" className="w-80 h-80 object-cover rounded-3xl" />

// Option 2: Use an avatar service
<img src="https://avatar.example.com/yourname" alt="Profile" />
```

### Project Images

**File: `src/components/Projects.jsx`**

Add screenshots or placeholder images:

```javascript
const projects = [
  {
    // ...
    image: 'https://imgur.com/your-image-id.png',  // Or local file
    // ...
  }
]
```

### Getting Images

- **Your own images**: Upload to [Imgur](https://imgur.com) or [CloudinaryJSON](https://cloudinary.com)
- **Placeholders**: [Placeholder.com](https://placeholder.com) or [Lorem Picsum](https://picsum.photos)
- **Icons**: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)

## 🎓 Experience Section

**File: `src/components/Experience.jsx`**

Update your experience:

```javascript
const timeline = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2024 - Present',
    responsibilities: [
      'What you did or learned',
      'Key achievements',
      'Skills developed',
      'Projects worked on'
    ]
  },
  {
    title: 'Previous Role',
    company: 'Previous Company',
    period: '2023 - 2024',
    responsibilities: [
      // Add responsibilities
    ]
  }
]
```

## 🎨 Color Customization

**File: `tailwind.config.js`**

Change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563EB',    // Main blue
      secondary: '#4F46E5',  // Indigo
      dark: '#111827',       // Dark text
      light: '#F8FAFC',      // Light background
    },
  }
}
```

### Popular Color Combinations

**Purple Theme**
```javascript
primary: '#7C3AED'    // Purple
secondary: '#8B5CF6'  // Light purple
```

**Green Theme**
```javascript
primary: '#10B981'    // Green
secondary: '#14B8A6'  // Teal
```

**Orange Theme**
```javascript
primary: '#F97316'    // Orange
secondary: '#FB923C'  // Light orange
```

## 📱 Responsive Design Adjustments

**File: `tailwind.config.js`**

Customize spacing and sizes:

```javascript
theme: {
  extend: {
    fontSize: {
      'clamp-h1': 'clamp(2rem, 8vw, 4rem)',   // Responsive heading
      'clamp-h2': 'clamp(1.5rem, 6vw, 2.5rem)',
    },
  }
}
```

## 🔗 Social Links

**File: `src/components/Hero.jsx` and `src/components/Contact.jsx`**

Update social media links:

```javascript
<motion.a href="https://github.com/yourprofile">
  <FaGithub size={24} />
</motion.a>

<motion.a href="https://linkedin.com/in/yourprofile">
  <FaLinkedin size={24} />
</motion.a>

<motion.a href="mailto:your@email.com">
  <FiMail size={24} />
</motion.a>
```

## 📝 Statistics (About Section)

**File: `src/components/About.jsx`**

Update your stats:

```javascript
const stats = [
  { label: 'Projects Built', value: '15+' },      // Your project count
  { label: 'Technologies', value: '8+' },         // Technologies learned
  { label: 'Coding Hours', value: '500+' },       // Hours practiced
  { label: 'Coffee Consumed', value: '∞' },       // Fun stat
]
```

## 🎬 Animation Customization

**Slow down animations** in components:

```javascript
// Increase duration from 0.6 to 1.2
transition={{ duration: 1.2 }}

// Slow down hover animations
whileHover={{ scale: 1.08 }}  // Instead of 1.1
```

**Speed up animations**:

```javascript
// Decrease duration
transition={{ duration: 0.3 }}

// Faster hover effects
whileHover={{ scale: 1.15 }}
```

## 📧 Contact Form Setup

**File: `src/components/Contact.jsx`**

Current form is ready-to-use for frontend. To make it functional:

### Option 1: Formspree (Easiest)

```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  // Send to Formspree
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
}
```

### Option 2: EmailJS

```bash
npm install @emailjs/browser
```

```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs.send('service_id', 'template_id', formData)
}
```

## 🌍 SEO Optimization

**File: `index.html`**

Update meta tags:

```html
<meta name="description" content="David Aluya - Frontend Developer Portfolio">
<meta name="keywords" content="frontend, developer, react, javascript">
<meta property="og:title" content="David Aluya - Frontend Developer">
<meta property="og:description" content="Premium portfolio showcasing...">
```

## ✅ Customization Checklist

- [ ] Updated name in all sections
- [ ] Changed hero headline and tagline
- [ ] Updated about section
- [ ] Added your skills
- [ ] Updated projects with your work
- [ ] Changed experience/timeline
- [ ] Updated contact information
- [ ] Added social media links
- [ ] Changed color scheme (optional)
- [ ] Updated stats in about
- [ ] Added your images/avatar
- [ ] Updated footer information

## 🚀 Next Steps

1. Customize all content
2. Test locally: `npm run dev`
3. Build for production: `npm run build`
4. Deploy to your preferred platform
5. Monitor performance and SEO

## 💡 Tips

- Keep descriptions concise and impactful
- Use high-quality images
- Ensure all links are correct
- Test on mobile devices
- Ask for feedback from others
- Update portfolio regularly with new projects

---

**Happy Customizing! 🎉**
