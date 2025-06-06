import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // In a real application, you would send an email here
      // using nodemailer or similar service
      console.log("New contact submission:", contact);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      // In a real application, you would store the actual resume file
      // For now, we'll return a response that triggers a download
      const resumeContent = generateResumeContent();
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Alex_Chen_Resume.pdf"');
      res.setHeader('Content-Length', Buffer.byteLength(resumeContent));
      
      // For demonstration, we'll return a text response
      // In production, you would generate or serve an actual PDF
      res.status(200).send(resumeContent);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to download resume" 
      });
    }
  });

  // Resume view endpoint
  app.get("/api/resume/view", async (req, res) => {
    try {
      const resumeHTML = generateResumeHTML();
      res.setHeader('Content-Type', 'text/html');
      res.send(resumeHTML);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to view resume" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function generateResumeContent(): string {
  return `
ALEX CHEN
Software Engineer | Python & React Developer
Email: alex.chen@email.com | Phone: +1 (555) 123-4567
LinkedIn: linkedin.com/in/alexchen | GitHub: github.com/alexchen

SUMMARY
Passionate software engineer with 5+ years of experience building scalable web applications using Python and React. 
Specialized in full-stack development with expertise in Django, FastAPI, and modern frontend frameworks.

EXPERIENCE

Senior Software Developer | Tech Solutions Inc. | 2022 - Present
• Developed and maintained 10+ full-stack web applications serving 50,000+ users
• Led migration of legacy PHP applications to modern Python/React stack, improving performance by 40%
• Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes
• Mentored 3 junior developers and conducted code reviews

Software Developer | StartupXYZ | 2020 - 2022
• Built e-commerce platform from scratch using Django and React, processing $2M+ in transactions
• Designed and implemented RESTful APIs used by mobile and web applications
• Optimized database queries reducing page load times by 60%
• Collaborated with design team to implement pixel-perfect responsive interfaces

EDUCATION

Bachelor of Science in Computer Science | University of Technology | 2018 - 2022
• GPA: 3.8/4.0, Dean's List (6 semesters)
• Outstanding Student in Software Engineering Award
• ACM Programming Contest - 2nd Place

Full Stack Web Development Bootcamp | TechAcademy Pro | 2022
• Certificate of Excellence, Top 5% of cohort
• Best Final Project Award

TECHNICAL SKILLS

Languages: Python, JavaScript, TypeScript, SQL
Frameworks: Django, FastAPI, React, Next.js
Databases: PostgreSQL, MongoDB, Redis
Cloud: AWS, Docker, Kubernetes
Tools: Git, Jenkins, Jira, Figma

CERTIFICATIONS
• AWS Certified Solutions Architect (2023)
• Python Professional Certification (2022)
• React Developer Certification - Meta (2022)

PROJECTS

E-Commerce Platform
• Full-stack solution with Django backend and React frontend
• Features: User authentication, payment processing, admin dashboard
• Technologies: Python, React, PostgreSQL, Stripe API

Analytics Dashboard
• Real-time data visualization with interactive charts
• Technologies: Python, React, D3.js, WebSocket

Task Management App
• Collaborative tool with drag-and-drop functionality
• Technologies: Python, React, WebSocket, Redis
`;
}

function generateResumeHTML(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Chen - Resume</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 40px;
            background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
            color: #f1f5f9;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(30, 41, 59, 0.9);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            border: 1px solid rgba(216, 191, 216, 0.2);
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 2px solid #d8bfd8;
        }
        .name {
            font-size: 3em;
            font-weight: bold;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #d8bfd8, #9333ea);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .title {
            font-size: 1.3em;
            color: #d8bfd8;
            margin-bottom: 15px;
        }
        .contact {
            color: #94a3b8;
            font-size: 0.95em;
        }
        .section {
            margin-bottom: 35px;
        }
        .section-title {
            font-size: 1.5em;
            font-weight: bold;
            color: #d8bfd8;
            margin-bottom: 20px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(216, 191, 216, 0.3);
        }
        .job, .education-item {
            margin-bottom: 25px;
            padding: 20px;
            background: rgba(51, 65, 85, 0.3);
            border-radius: 10px;
            border-left: 4px solid #d8bfd8;
        }
        .job-title, .degree {
            font-weight: bold;
            font-size: 1.1em;
            color: #f1f5f9;
        }
        .company, .school {
            color: #d8bfd8;
            font-weight: 500;
        }
        .date {
            color: #94a3b8;
            font-style: italic;
            float: right;
        }
        .description {
            margin-top: 10px;
            color: #cbd5e1;
        }
        .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .skill-category {
            background: rgba(51, 65, 85, 0.3);
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(216, 191, 216, 0.2);
        }
        .skill-category h4 {
            color: #d8bfd8;
            margin-bottom: 10px;
        }
        .skill-list {
            color: #cbd5e1;
            font-size: 0.9em;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 5px;
            color: #cbd5e1;
        }
        .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #d8bfd8, #9333ea);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(216, 191, 216, 0.3);
            transition: all 0.3s ease;
        }
        .print-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(216, 191, 216, 0.4);
        }
        @media print {
            body { background: white; color: black; }
            .container { box-shadow: none; background: white; }
            .print-button { display: none; }
        }
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">Print / Save PDF</button>
    
    <div class="container">
        <div class="header">
            <h1 class="name">Alex Chen</h1>
            <div class="title">Software Engineer | Python & React Developer</div>
            <div class="contact">
                alex.chen@email.com | +1 (555) 123-4567<br>
                linkedin.com/in/alexchen | github.com/alexchen
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Professional Summary</h2>
            <p class="description">
                Passionate software engineer with 5+ years of experience building scalable web applications using Python and React. 
                Specialized in full-stack development with expertise in Django, FastAPI, and modern frontend frameworks.
            </p>
        </div>

        <div class="section">
            <h2 class="section-title">Experience</h2>
            
            <div class="job">
                <div class="job-title">Senior Software Developer</div>
                <div class="company">Tech Solutions Inc.</div>
                <div class="date">2022 - Present</div>
                <ul class="description">
                    <li>Developed and maintained 10+ full-stack web applications serving 50,000+ users</li>
                    <li>Led migration of legacy PHP applications to modern Python/React stack, improving performance by 40%</li>
                    <li>Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes</li>
                    <li>Mentored 3 junior developers and conducted code reviews</li>
                </ul>
            </div>

            <div class="job">
                <div class="job-title">Software Developer</div>
                <div class="company">StartupXYZ</div>
                <div class="date">2020 - 2022</div>
                <ul class="description">
                    <li>Built e-commerce platform from scratch using Django and React, processing $2M+ in transactions</li>
                    <li>Designed and implemented RESTful APIs used by mobile and web applications</li>
                    <li>Optimized database queries reducing page load times by 60%</li>
                    <li>Collaborated with design team to implement pixel-perfect responsive interfaces</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Education</h2>
            
            <div class="education-item">
                <div class="degree">Bachelor of Science in Computer Science</div>
                <div class="school">University of Technology</div>
                <div class="date">2018 - 2022</div>
                <div class="description">
                    GPA: 3.8/4.0, Dean's List (6 semesters)<br>
                    Outstanding Student in Software Engineering Award<br>
                    ACM Programming Contest - 2nd Place
                </div>
            </div>

            <div class="education-item">
                <div class="degree">Full Stack Web Development Bootcamp</div>
                <div class="school">TechAcademy Pro</div>
                <div class="date">2022</div>
                <div class="description">
                    Certificate of Excellence, Top 5% of cohort<br>
                    Best Final Project Award
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills">
                <div class="skill-category">
                    <h4>Languages</h4>
                    <div class="skill-list">Python, JavaScript, TypeScript, SQL</div>
                </div>
                <div class="skill-category">
                    <h4>Frameworks</h4>
                    <div class="skill-list">Django, FastAPI, React, Next.js</div>
                </div>
                <div class="skill-category">
                    <h4>Databases</h4>
                    <div class="skill-list">PostgreSQL, MongoDB, Redis</div>
                </div>
                <div class="skill-category">
                    <h4>Cloud & Tools</h4>
                    <div class="skill-list">AWS, Docker, Git, Jenkins</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Certifications</h2>
            <ul>
                <li>AWS Certified Solutions Architect (2023)</li>
                <li>Python Professional Certification (2022)</li>
                <li>React Developer Certification - Meta (2022)</li>
            </ul>
        </div>

        <div class="section">
            <h2 class="section-title">Featured Projects</h2>
            
            <div class="job">
                <div class="job-title">E-Commerce Platform</div>
                <div class="description">
                    Full-stack solution with Django backend and React frontend featuring user authentication, 
                    payment processing, and admin dashboard. Technologies: Python, React, PostgreSQL, Stripe API.
                </div>
            </div>

            <div class="job">
                <div class="job-title">Analytics Dashboard</div>
                <div class="description">
                    Real-time data visualization with interactive charts and WebSocket connections. 
                    Technologies: Python, React, D3.js, WebSocket.
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;
}
