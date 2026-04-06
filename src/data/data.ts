export const appConfig = {
  appName: "Email Sender Dashboard 📧",
  description:
    "Send bulk emails securely, track delivery status, and manage email history.",
};

export const defaultEmailTemplate = {
  subject: "Java Full Stack Engineer - Open to Opportunities",

  // ─── PLAIN TEXT VERSION ───────────────────────────────────────────────────
  message: `Hi,

I hope you're doing well.

I came across an opportunity at your organization and wanted to reach out directly.

I'm Sambhav Sharma — a Java Full Stack Software Engineer with 1.7 years of hands-on experience building scalable, production-ready applications.

CORE SKILLS
• Java, Spring Boot, Microservices
• REST APIs & SQL
• AWS / Azure basics (EC2, S3, CI/CD)
• React & TypeScript

I take pride in writing clean, maintainable code and consistently delivering features end-to-end — from backend APIs to polished UIs. I'm actively looking for the right opportunity to grow and contribute.

I've attached my resume for reference. I'd love to connect, or if there's a suitable role, I'd truly appreciate a referral.

Thank you for your time - it means a lot.

Best regards,
Sambhav Sharma
📧 sharmasambhav06@gmail.com
📞 +91 7986147005
🔗 linkedin.com/in/sambhav-sharma-java`,

  // ─── HTML VERSION ─────────────────────────────────────────────────────────
  htmlMessage: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{background:#f0ede8;font-family:'DM Sans',Arial,sans-serif;color:#1a1a1a;padding:0}
.wrapper{width:100%;max-width:100%}
.header{background:#0f2d3d;padding:clamp(28px,5vw,48px) clamp(20px,6vw,56px);position:relative;overflow:hidden}
.header::before{content:'';position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:radial-gradient(circle,rgba(20,160,120,0.25) 0%,transparent 70%);border-radius:50%}
.header::after{content:'';position:absolute;bottom:-20px;left:20px;width:120px;height:120px;background:radial-gradient(circle,rgba(255,180,60,0.15) 0%,transparent 70%);border-radius:50%}
.header-tag{display:inline-block;background:rgba(20,160,120,0.2);color:#4ecfa0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:5px 12px;border-radius:100px;border:1px solid rgba(78,207,160,0.35);margin-bottom:16px}
.header h1{font-family:'DM Serif Display',Georgia,serif;font-size:clamp(26px,5vw,38px);color:#fff;line-height:1.2;margin-bottom:8px}
.header-role{color:#4ecfa0;font-size:clamp(13px,2vw,15px);font-weight:500}
.body-card{background:#fff;padding:clamp(24px,5vw,48px) clamp(20px,6vw,56px)}
.greeting{font-size:16px;color:#444;line-height:1.75;margin-bottom:20px}
.intro{font-size:15.5px;color:#222;line-height:1.8;margin-bottom:28px}
.intro strong{color:#0f2d3d;font-weight:600}
.stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:32px}
.stat-pill{background:#f7f4ef;border:1px solid #e8e3db;border-radius:12px;padding:clamp(12px,2vw,18px) 12px;text-align:center}
.stat-num{font-family:'DM Serif Display',Georgia,serif;font-size:clamp(20px,3vw,26px);color:#0f2d3d;display:block}
.stat-label{font-size:11px;color:#888;font-weight:500;text-transform:uppercase;letter-spacing:0.8px;margin-top:2px;display:block}
.section-title{font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#aaa;margin-bottom:14px}
.skills-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:32px}
@media(max-width:480px){.skills-grid{grid-template-columns:1fr}}
.skill-chip{display:flex;align-items:center;gap:10px;background:#f7f4ef;border:1px solid #e8e3db;border-radius:10px;padding:12px 14px}
.skill-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.dot-green{background:#14a078}.dot-blue{background:#1a6abf}.dot-orange{background:#d9731a}.dot-purple{background:#7c4dbd}
.skill-name{font-size:13.5px;font-weight:500;color:#222}
.quote-block{border-left:3px solid #14a078;padding:14px 18px;background:#f0faf6;border-radius:0 10px 10px 0;margin-bottom:32px}
.quote-block p{font-size:14.5px;color:#1a4a38;line-height:1.75;font-style:italic}
.cta-section{font-size:15px;color:#444;line-height:1.8;margin-bottom:8px}
.cta-section strong{color:#0f2d3d}
.divider{height:1px;background:#e8e4df}
.footer{background:#0f2d3d;padding:clamp(24px,4vw,36px) clamp(20px,6vw,56px)}
.footer-name{font-family:'DM Serif Display',Georgia,serif;font-size:clamp(18px,3vw,22px);color:#fff;margin-bottom:4px}
.footer-role{font-size:12px;color:#4ecfa0;font-weight:500;letter-spacing:0.5px;margin-bottom:18px;text-transform:uppercase}
.footer-contacts{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
.footer-link{display:flex;align-items:center;gap:8px;color:#aac8d8;font-size:13px;text-decoration:none}
.footer-link:hover{color:#fff}
.footer-icon{width:28px;height:28px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
.linkedin-icon{background:rgba(10,102,194,0.25);border-color:rgba(10,102,194,0.4)}
</style>
</head>
<body>
<div class="wrapper">
  <div class="header">
    <div class="header-tag">Open to Opportunities</div>
    <h1>Hi, I'm Sambhav<br/>Sharma 👋</h1>
    <div class="header-role">Java Full Stack Engineer · 1.7 Years Experience</div>
  </div>
  <div class="body-card">
    <p class="greeting">Hope you're having a great day!</p>
    <p class="intro">I came across an opportunity at your organization and wanted to connect directly. I'm a <strong>Java Full Stack Software Engineer</strong> passionate about building scalable, production-ready applications — from clean backend APIs to polished frontends.</p>
    <div class="stats-row">
      <div class="stat-pill"><span class="stat-num">1.7</span><span class="stat-label">Years XP</span></div>
      <div class="stat-pill"><span class="stat-num">5+</span><span class="stat-label">Projects</span></div>
      <div class="stat-pill"><span class="stat-num">Full</span><span class="stat-label">Stack</span></div>
    </div>
    <div class="section-title">Core Skills</div>
    <div class="skills-grid">
      <div class="skill-chip"><div class="skill-dot dot-blue"></div><span class="skill-name">Java &amp; Spring Boot</span></div>
      <div class="skill-chip"><div class="skill-dot dot-purple"></div><span class="skill-name">React &amp; TypeScript</span></div>
      <div class="skill-chip"><div class="skill-dot dot-green"></div><span class="skill-name">Microservices &amp; REST APIs</span></div>
      <div class="skill-chip"><div class="skill-dot dot-orange"></div><span class="skill-name">AWS / Azure · CI/CD</span></div>
    </div>
    <div class="quote-block">
      <p>"I write clean, end-to-end code — not just features. Whether it's a microservice or a React component, I care about the details."</p>
    </div>
    <div class="cta-section">
      I've attached my resume for reference. If there's a suitable opening, I'd genuinely appreciate the opportunity to connect or be considered for a referral.<br/><br/>
      <strong>Thank you for your time — it truly means a lot.</strong>
    </div>
  </div>
  <div class="divider"></div>
  <div class="footer">
    <div class="footer-name">Sambhav Sharma</div>
    <div class="footer-role">Java Full Stack Engineer</div>
    <div class="footer-contacts">
      <a href="mailto:sharmasambhav06@gmail.com" class="footer-link">
        <span class="footer-icon">✉</span>sharmasambhav06@gmail.com
      </a>
      <a href="tel:+917986147005" class="footer-link">
        <span class="footer-icon">✆</span>+91 7986147005
      </a>
      <a href="https://www.linkedin.com/in/sambhav-sharma-java/" class="footer-link" target="_blank">
        <span class="footer-icon linkedin-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#4e9fd1" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </span>linkedin.com/in/sambhav-sharma-java
      </a>
    </div>
  </div>
</div>
</body>
</html>`,
};
