import React from "react";

const QuoteRotator = () => {
  const quotes = [
    "The only way to do great work is to love what you do",
    "Dream big. Start small. Act now.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "Believe you can and you're halfway there."
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 2000);

    const redirect = setTimeout(() => {
      if (window.scrollY < 100) {
        const heroElement = document.getElementById("hero");
        if (heroElement) {
          heroElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 8000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, []);

  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center max-w-2xl px-4 leading-snug italic">
      {quotes[index]}
    </h1>
  );
};

const App = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen scroll-smooth">
      <nav className="fixed top-0 w-full z-50 bg-black border-b border-zinc-800 px-6 md:px-20 py-4 flex items-center justify-between shadow-lg">
        <button onClick={() => scrollTo('hero')} className="text-white font-bold text-lg hover:text-blue-400">Home</button>
        <div className="flex gap-8 text-lg font-semibold text-white justify-center flex-1" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <button onClick={() => scrollTo('about')} className="hover:text-blue-400">About</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-blue-400">Skills</button>
          <button onClick={() => scrollTo('work')} className="hover:text-blue-400">Client Work</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blue-400">Contact</button>
        </div>
        <button onClick={() => scrollTo('contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg">Get in touch</button>
      </nav>

      <section id="top" className="h-screen w-full flex flex-col items-center justify-center bg-black shadow-inner text-center px-4 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581090700227-1e8e6010a3af?auto=format&fit=crop&w=2100&q=80" alt="Coding Inspiration" className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-75" />
        <QuoteRotator />
      </section>

      <section id="hero" className="pt-28 px-6 md:px-20 pb-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-4">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Aravind</span></h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-6">Cloud System Engineer</h2>
          <p className="text-gray-400 mb-8">Passionate about architecting impactful Azure Cloud, Intune, and M365 solutions—spanning cloud migration, cost efficiency, device management, and enterprise security. Blending hands-on technical depth with real-world research, client consulting, and demo delivery, I bring innovative ideas to life. With a strong coding foundation and collaborative mindset, I specialize in breaking down complex challenges and delivering practical, scalable solutions that empower teams and drive business value.</p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-black border border-gray-600 hover:border-white text-white font-semibold py-2 px-6 rounded-xl shadow flex items-center gap-2">Contact Me →</a>
          </div>
        </div>
        <div className="mt-12 md:mt-0">
          <div className="w-64 h-auto overflow-hidden rounded-xl shadow-lg">
  <img
    src="https://media.licdn.com/dms/image/D4D03AQH6w6nF9cWopg/profile-displayphoto-shrink_800_800/0/1713545882063?e=1720051200&v=beta&t=c2Zg_MGwI7v5UnSWG8_dCtyQ57oRlj3ElBgDLFvFtjI"
    alt="Aravind V"
    className="w-full h-auto object-cover object-center"
  />
</div>
        </div>
      </section>

      <section id="about" className="px-6 md:px-20 py-12 bg-black">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="border-b-2 w-24 border-blue-500 mb-6" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-gray-300">
            <p>Computer Science graduate with an MSc (Distinction) from Queen Mary University of London, grounded in advanced computing principles, algorithms, and system design. Equipped with 2+ years of hands-on experience as a System Engineer, specializing in Azure Cloud, Intune, and M365 ecosystems. Expertise spans end-to-end cloud architecture, seamless migration strategies, cost optimization, and secure device management for enterprise environments.</p>
            <p>Delivered Azure Cloud deployments that reduced infrastructure costs by 25% while enhancing scalability for clients at Kryptos Technologies. Mastered Intune MDM to streamline enrollment for 500+ devices. Led pre-sales initiatives including client consultations, tailored demos, and solution proposals that secured $200K+ in deals.</p>
            <p>A dynamic team player with pre-sales acumen and a knack for dissecting complex technical problems into actionable insights. Proficient in Python, React, and Node.js. Committed to delivering results aligned with organizational goals.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-lg p-4">
              <h3 className="font-bold text-lg text-white mb-2">Education</h3>
              <p className="text-gray-400">2017 – 2021<br /><strong>Bachelor's in Information Technology</strong><br />Sri Venkateswara College of Engineering</p>
              <p className="text-gray-400 mt-4">2023 – 2024<br /><strong>Master's in Computer Science</strong><br />Queen Mary University of London</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <h3 className="font-bold text-lg text-white mb-2">Experience</h3>
              <p className="text-gray-400">2022 – 2023<br /><strong>Senior System Engineer</strong><br />Kryptos Technology Pvt Ltd</p>
              <p className="text-gray-400 mt-4">2021 – 2022<br /><strong>Junior System Engineer</strong><br />Kryptos Technology Pvt Ltd</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 md:px-20 py-12 bg-black">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="border-b-2 w-24 border-blue-500 mb-6" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
            <div className="space-y-2">
              <div className="bg-zinc-900 rounded p-4 text-gray-300"><strong className="text-blue-400">📗 Intune Management</strong><br />Device Enrollment, App Deployment, Security Policies, MDM</div>
              <div className="bg-zinc-900 rounded p-4 text-gray-300"><strong className="text-blue-400">📘 Cloud Azure Solutions</strong><br />Architecture, Deployment, Migration, Cost Optimization, Monitoring, Scaling</div>
              <div className="bg-zinc-900 rounded p-4 text-gray-300"><strong className="text-blue-400">🎨 UI/UX Design</strong><br />Wireframing, Prototyping, Interaction, Responsive Design</div>
              <div className="bg-zinc-900 rounded p-4 text-gray-300"><strong className="text-blue-400">📄 Technical Writing</strong><br />User Manuals, API Docs, Knowledge Base</div>
              <div className="bg-zinc-900 rounded p-4 text-gray-300"><strong className="text-blue-400">🛠️ Pre-Sales Support</strong><br />Client Consultations, Proposals, Demos</div>
              <div className="bg-zinc-900 rounded p-4 text-gray-300"><strong className="text-blue-400">🖥️ Systems Engineering</strong><br />System Configuration, Integration, Optimization</div>
              <div className="bg-zinc-900 rounded p-4 text-gray-300"><strong className="text-blue-400">📊 Project Management</strong><br />Agile, Resource Allocation, Scheduling</div>
              <div className="bg-zinc-900 rounded p-4 text-gray-300"><strong className="text-blue-400">💻 Coding</strong><br />Python, React, Node.js, SQL</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability", "Leadership", "Critical Thinking", "Attention to Detail"].map(skill => (
                  <span key={skill} className="border border-blue-400 text-blue-400 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Azure", "PowerShell", "Intune", "Figma", "Python", "Active Directory", "Windows", "M365"].map(tool => (
                  <span key={tool} className="border border-gray-600 text-white px-3 py-1 rounded text-sm text-center">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 md:px-20 py-12 bg-black">
        <h2 className="text-3xl font-bold mb-4">Client Work</h2>
        <div className="border-b-2 w-24 border-blue-500 mb-6" />
        <div className="overflow-hidden relative w-full">
          <div className="flex animate-scroll whitespace-nowrap space-x-16 text-2xl font-bold text-white uppercase">
            {["KIBB", "Airtel", "Affin Bank", "Jindal Steel", "Ramco", "ZoomRx", "XCL", "Adib Bank", "Danareksa", "Bough Consulting", "MediaCorp"].map((client, index) => (
              <span key={index} className="inline-block px-4">{client}</span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}</style>
      </section>

      <section id="contact" className="px-6 md:px-20 py-12 bg-black">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <div className="border-b-2 w-24 border-blue-500 mb-6" />
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-300 mb-6">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to contact me using the form or through my contact information.</p>
            <div className="bg-zinc-900 rounded-lg p-4 mb-4">
              <p className="text-blue-400 font-semibold">📞 Phone</p>
              <p className="text-white">+44 7930 66122</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-4">
              <p className="text-blue-400 font-semibold">✉️ Email</p>
              <p className="text-white">aravind1999v@gmail.com</p>
            </div>
            <p className="text-gray-400 mt-6">Find me on</p>
            <div className="mt-2">
              <a
                href="https://www.linkedin.com/in/aravindkrishnaa-venkataramanan-401212337/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.48c0 1.63 1.34 2.98 2.98 2.98 1.63 0 2.98-1.35 2.98-2.98C7.96 4.85 6.61 3.5 4.98 3.5zM2.4 21h5.17V9H2.4v12zM9.49 9H14v1.56h.08c.63-1.17 2.16-2.4 4.45-2.4 4.76 0 5.63 3.13 5.63 7.2V21h-5.17v-5.73c0-1.37-.03-3.13-1.91-3.13-1.91 0-2.2 1.5-2.2 3.02V21h-5.17V9z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <form action="https://formspree.io/f/mkgrbjyp" method="POST" className="space-y-4" onSubmit={(e) => {
              alert('Message sent! Thank you for reaching out.');
              setTimeout(() => e.target.reset(), 100);
            }}>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your name" className="bg-black border border-gray-700 text-white px-4 py-2 rounded" />
              <input type="email" name="email" placeholder="Your email" className="bg-black border border-gray-700 text-white px-4 py-2 rounded" />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded" />
            <textarea name="message" placeholder="Write your message here..." rows="5" className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">Send Message</button>
          </form>
        </div>
      </section>

      <footer id="footer" className="bg-black border-t border-zinc-800 py-6 px-6 md:px-20 text-gray-400 flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">© 2025 Aravind V. All rights reserved.</p>
        <ul className="flex space-x-6">
          <li><a onClick={() => scrollTo('about')} className="hover:text-white">About</a></li>
          <li><a onClick={() => scrollTo('skills')} className="hover:text-white">Skills</a></li>
          <li><a onClick={() => scrollTo('work')} className="hover:text-white">Clients Worked</a></li>
          <li><a onClick={() => scrollTo('contact')} className="hover:text-white">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
