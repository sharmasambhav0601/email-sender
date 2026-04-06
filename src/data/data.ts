export const appConfig = {
  appName: "Email Sender Dashboard 📧",
  description:
    "Send bulk emails securely, track delivery status, and manage email history.",
};

export const defaultEmailTemplate = {
  subject: "Java Full Stack Engineer - Open to Opportunities",

  message: `Hi,

I hope you're doing well.

I came across an opportunity at your organization and wanted to reach out directly.

I'm Sambhav Sharma — a Java Full Stack Software Engineer with 1.7 years of hands-on experience building scalable, production-ready applications.

CORE SKILLS
- Java, Spring Boot, Microservices
- REST APIs & SQL
- AWS / Azure basics (EC2, S3, CI/CD)
- React & TypeScript

I take pride in writing clean, maintainable code and consistently delivering features end-to-end — from backend APIs to polished UIs. I'm actively looking for the right opportunity to grow and contribute.

I've attached my resume for reference. I'd love to connect, or if there's a suitable role, I'd truly appreciate a referral.

Thank you for your time - it means a lot.

Best regards,
Sambhav Sharma
📧 sharmasambhav06@gmail.com
📞 +91 7986147005
🔗 linkedin.com/in/sambhav-sharma-java`,

  htmlMessage: `<!DOCTYPE html>
<html lang="en" style="color-scheme: light only;">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Sambhav Sharma — Java Full Stack Engineer</title>
  <style>
    :root { color-scheme: light only; }
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; }
    body { margin: 0 !important; padding: 0 !important; background-color: #f0ede8 !important; width: 100% !important; }
    a { text-decoration: none; }

    @media (prefers-color-scheme: dark) {
      body { background-color: #f0ede8 !important; color: #222222 !important; }
      .force-light { background-color: #ffffff !important; color: #222222 !important; }
      .force-header { background-color: #0f2d3d !important; }
      .force-footer { background-color: #0f2d3d !important; }
      .force-stat { background-color: #f7f4ef !important; color: #0f2d3d !important; }
      .force-skill { background-color: #f7f4ef !important; }
      .force-quote { background-color: #f0faf6 !important; }
      .force-bg { background-color: #f0ede8 !important; }
    }

    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .stat-col { display: block !important; width: 100% !important; padding: 0 0 10px 0 !important; }
      .skill-col { display: block !important; width: 100% !important; padding: 0 0 8px 0 !important; }
      .footer-td { display: block !important; padding: 0 0 12px 0 !important; }
      .header-pad, .body-pad, .footer-pad { padding-left: 24px !important; padding-right: 24px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f0ede8;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0ede8;" class="force-bg">
  <tr>
    <td align="center">

      <table class="email-container" role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:680px;">

        <!-- HEADER -->
        <tr>
          <td class="header-pad force-header" style="background-color:#0f2d3d;padding:40px 48px 32px;border-radius:16px 16px 0 0;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="background-color:rgba(20,160,120,0.18);border:1px solid rgba(78,207,160,0.4);border-radius:100px;padding:5px 14px;mso-border-radius:100px;">
                  <span style="font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#4ecfa0;">Open to Opportunities</span>
                </td>
              </tr>
            </table>
            <p style="font-family:Georgia,'Times New Roman',serif;font-size:34px;color:#ffffff;line-height:1.2;margin:16px 0 8px 0;">Hi, I'm Sambhav<br/>Sharma &#x1F44B;</p>
            <p style="font-family:Arial,sans-serif;font-size:14px;color:#4ecfa0;font-weight:500;margin:0;">Java Full Stack Engineer &middot; 1.7 Years Experience</p>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td class="body-pad force-light" style="background-color:#ffffff;padding:40px 48px;">

            <p style="font-family:Arial,sans-serif;font-size:16px;color:#444444;line-height:1.75;margin:0 0 20px 0;">Hope you're having a great day!</p>

            <p style="font-family:Arial,sans-serif;font-size:15px;color:#222222;line-height:1.8;margin:0 0 32px 0;">
              I came across an opportunity at your organization and wanted to connect directly.
              I'm a <strong style="color:#0f2d3d;">Java Full Stack Software Engineer</strong> passionate about building
              scalable, production-ready applications &mdash; from clean backend APIs to polished frontends.
            </p>

            <!-- STATS -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
              <tr>
                <td class="stat-col" width="33%" style="padding-right:6px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" class="force-stat" style="background-color:#f7f4ef;border:1px solid #e8e3db;border-radius:12px;padding:16px 12px;">
                        <span style="font-family:Georgia,serif;font-size:24px;color:#0f2d3d;display:block;line-height:1.2;">1.7</span>
                        <span style="font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;letter-spacing:0.8px;display:block;margin-top:4px;">Years XP</span>
                      </td>
                    </tr>
                  </table>
                </td>
                <td class="stat-col" width="33%" style="padding:0 6px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" class="force-stat" style="background-color:#f7f4ef;border:1px solid #e8e3db;border-radius:12px;padding:16px 12px;">
                        <span style="font-family:Georgia,serif;font-size:24px;color:#0f2d3d;display:block;line-height:1.2;">5+</span>
                        <span style="font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;letter-spacing:0.8px;display:block;margin-top:4px;">Projects</span>
                      </td>
                    </tr>
                  </table>
                </td>
                <td class="stat-col" width="33%" style="padding-left:6px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" class="force-stat" style="background-color:#f7f4ef;border:1px solid #e8e3db;border-radius:12px;padding:16px 12px;">
                        <span style="font-family:Georgia,serif;font-size:24px;color:#0f2d3d;display:block;line-height:1.2;">Full</span>
                        <span style="font-family:Arial,sans-serif;font-size:11px;color:#888888;text-transform:uppercase;letter-spacing:0.8px;display:block;margin-top:4px;">Stack</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- SKILLS LABEL -->
            <p style="font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#aaaaaa;margin:0 0 14px 0;">Core Skills</p>

            <!-- SKILLS -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
              <tr>
                <td class="skill-col" width="50%" style="padding-right:5px;padding-bottom:10px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td class="force-skill" style="background-color:#f7f4ef;border:1px solid #e8e3db;border-radius:10px;padding:12px 14px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="width:8px;vertical-align:middle;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="8" height="8">
                                <tr><td style="background-color:#1a6abf;border-radius:4px;width:8px;height:8px;font-size:0;">&nbsp;</td></tr>
                              </table>
                            </td>
                            <td style="padding-left:10px;vertical-align:middle;">
                              <span style="font-family:Arial,sans-serif;font-size:13px;font-weight:500;color:#222222;">Java &amp; Spring Boot</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td class="skill-col" width="50%" style="padding-left:5px;padding-bottom:10px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td class="force-skill" style="background-color:#f7f4ef;border:1px solid #e8e3db;border-radius:10px;padding:12px 14px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="width:8px;vertical-align:middle;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="8" height="8">
                                <tr><td style="background-color:#7c4dbd;border-radius:4px;width:8px;height:8px;font-size:0;">&nbsp;</td></tr>
                              </table>
                            </td>
                            <td style="padding-left:10px;vertical-align:middle;">
                              <span style="font-family:Arial,sans-serif;font-size:13px;font-weight:500;color:#222222;">React &amp; TypeScript</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="skill-col" width="50%" style="padding-right:5px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td class="force-skill" style="background-color:#f7f4ef;border:1px solid #e8e3db;border-radius:10px;padding:12px 14px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="width:8px;vertical-align:middle;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="8" height="8">
                                <tr><td style="background-color:#14a078;border-radius:4px;width:8px;height:8px;font-size:0;">&nbsp;</td></tr>
                              </table>
                            </td>
                            <td style="padding-left:10px;vertical-align:middle;">
                              <span style="font-family:Arial,sans-serif;font-size:13px;font-weight:500;color:#222222;">Microservices &amp; REST APIs</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
                <td class="skill-col" width="50%" style="padding-left:5px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td class="force-skill" style="background-color:#f7f4ef;border:1px solid #e8e3db;border-radius:10px;padding:12px 14px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="width:8px;vertical-align:middle;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="8" height="8">
                                <tr><td style="background-color:#d9731a;border-radius:4px;width:8px;height:8px;font-size:0;">&nbsp;</td></tr>
                              </table>
                            </td>
                            <td style="padding-left:10px;vertical-align:middle;">
                              <span style="font-family:Arial,sans-serif;font-size:13px;font-weight:500;color:#222222;">AWS / Azure &middot; CI/CD</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- QUOTE BLOCK -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
              <tr>
                <td width="4" style="background-color:#14a078;border-radius:3px;font-size:0;">&nbsp;</td>
                <td class="force-quote" style="background-color:#f0faf6;padding:14px 18px;border-radius:0 10px 10px 0;">
                  <p style="font-family:Georgia,'Times New Roman',serif;font-size:14px;color:#1a4a38;line-height:1.75;font-style:italic;margin:0;">
                    &ldquo;I write clean, end-to-end code &mdash; not just features. Whether it&rsquo;s a microservice or a React component, I care about the details.&rdquo;
                  </p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <p style="font-family:Arial,sans-serif;font-size:15px;color:#444444;line-height:1.8;margin:0 0 16px 0;">
              I've attached my resume for reference. If there's a suitable opening,
              I'd genuinely appreciate the opportunity to connect or be considered for a referral.
            </p>
            <p style="font-family:Arial,sans-serif;font-size:15px;color:#0f2d3d;font-weight:700;line-height:1.8;margin:0;">
              Thank you for your time &mdash; it truly means a lot.
            </p>

          </td>
        </tr>

        <!-- DIVIDER -->
        <tr>
          <td class="force-light" style="background-color:#ffffff;padding:0 48px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="border-top:1px solid #e8e4df;font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td class="footer-pad force-footer" style="background-color:#0f2d3d;padding:28px 48px;border-radius:0 0 16px 16px;">
            <p style="font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#ffffff;margin:0 0 4px 0;">Sambhav Sharma</p>
            <p style="font-family:Arial,sans-serif;font-size:12px;color:#4ecfa0;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin:0 0 18px 0;">Java Full Stack Engineer</p>

            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td class="footer-td" style="padding-bottom:10px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" valign="middle" style="background-color:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:28px;height:28px;">
                        <span style="font-family:Arial,sans-serif;font-size:13px;color:#aac8d8;">&#x2709;</span>
                      </td>
                      <td style="padding-left:8px;">
                        <a href="mailto:sharmasambhav06@gmail.com" style="font-family:Arial,sans-serif;font-size:13px;color:#aac8d8;text-decoration:none;">sharmasambhav06@gmail.com</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="footer-td" style="padding-bottom:10px;">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" valign="middle" style="background-color:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:8px;width:28px;height:28px;">
                        <span style="font-family:Arial,sans-serif;font-size:13px;color:#aac8d8;">&#x260E;</span>
                      </td>
                      <td style="padding-left:8px;">
                        <a href="tel:+917986147005" style="font-family:Arial,sans-serif;font-size:13px;color:#aac8d8;text-decoration:none;">+91 7986147005</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="footer-td">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center" valign="middle" style="background-color:rgba(10,102,194,0.25);border:1px solid rgba(10,102,194,0.45);border-radius:8px;width:28px;height:28px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="14" height="14" alt="in" style="display:block;margin:7px auto;border:0;" />
                      </td>
                      <td style="padding-left:8px;">
                        <a href="https://www.linkedin.com/in/sambhav-sharma-java/" target="_blank" style="font-family:Arial,sans-serif;font-size:13px;color:#aac8d8;text-decoration:none;">linkedin.com/in/sambhav-sharma-java</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>`,
};
