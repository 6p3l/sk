<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>lavender • minecraft developer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: #0a0a0a;
      color: #e0bbff;
    }
    .lavender-text { color: #c084fc; }
    .lavender-accent { color: #a855f7; }
    .section { padding: 6rem 0; }
    .card {
      background: #1a1a1a;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card:hover {
      transform: translateY(-8px);
      background: #242424;
      box-shadow: 0 0 0 1px #c084fc33;
    }
    .heading {
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: -0.05em;
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav class="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-b border-purple-900 z-50">
    <div class="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-2xl">🌸</div>
        <span class="text-3xl font-bold tracking-tighter lavender-text">lavender</span>
      </div>
      <div class="flex gap-10 text-sm font-medium">
        <a href="#what-i-do" class="hover:lavender-accent transition-colors">What I Do</a>
        <a href="#skills" class="hover:lavender-accent transition-colors">Skills</a>
        <a href="#opportunities" class="hover:lavender-accent transition-colors">Opportunities</a>
        <a href="#experience" class="hover:lavender-accent transition-colors">Experience</a>
        <a href="#contact" class="hover:lavender-accent transition-colors">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="min-h-screen flex items-center pt-20">
    <div class="max-w-5xl mx-auto px-8 text-center">
      <p class="text-purple-400 text-xl mb-4 tracking-widest">WELCOME</p>
      <h1 class="heading text-white mb-6">Minecraft Developer & Server Manager</h1>
      <p class="max-w-3xl mx-auto text-xl text-purple-300 leading-relaxed">
        Skript specialist with extensive experience in server administration, custom game mechanics, 
        and community management. I build engaging Minecraft experiences through custom scripts and server optimization.
      </p>
      <div class="mt-16">
        <a href="#experience" 
           class="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-3xl font-semibold text-lg transition-all">
          View My Journey
          <i class="fas fa-arrow-down"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- What I Do -->
  <section id="what-i-do" class="section bg-zinc-950">
    <div class="max-w-4xl mx-auto px-8">
      <h2 class="heading text-white mb-10">What I Do</h2>
      <p class="text-lg text-purple-200 leading-relaxed">
        I specialize in Skript scripting and server management on Minehut. My work includes custom game mechanics, 
        event systems, player management tools, and server infrastructure. I focus on creating smooth, lag-free 
        experiences with unique gameplay features.
      </p>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="section">
    <div class="max-w-4xl mx-auto px-8">
      <h2 class="heading text-white mb-12">My Skills</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="card p-8 rounded-3xl">
          <ul class="space-y-5 text-lg">
            <li class="flex items-center gap-4"><span class="text-purple-400 text-2xl">→</span> Advanced Skript</li>
            <li class="flex items-center gap-4"><span class="text-purple-400 text-2xl">→</span> Server Administration (Minehut)</li>
            <li class="flex items-center gap-4"><span class="text-purple-400 text-2xl">→</span> Custom Game Mechanics</li>
            <li class="flex items-center gap-4"><span class="text-purple-400 text-2xl">→</span> Event Systems & Automation</li>
          </ul>
        </div>
        <div class="card p-8 rounded-3xl">
          <ul class="space-y-5 text-lg">
            <li class="flex items-center gap-4"><span class="text-purple-400 text-2xl">→</span> HTML, CSS, JavaScript</li>
            <li class="flex items-center gap-4"><span class="text-purple-400 text-2xl">→</span> GenPVP Server Specialization</li>
            <li class="flex items-center gap-4"><span class="text-purple-400 text-2xl">→</span> Performance Optimization</li>
            <li class="flex items-center gap-4"><span class="text-purple-400 text-2xl">→</span> Community Management</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Open to Opportunities -->
  <section id="opportunities" class="section bg-zinc-950">
    <div class="max-w-4xl mx-auto px-8">
      <h2 class="heading text-white mb-6">Open to Opportunities</h2>
      <p class="text-3xl font-semibold lavender-accent mb-8">Accepting Positions</p>
      <div class="prose prose-invert max-w-none text-lg text-purple-200">
        <p>I'm accepting <strong>development and management positions</strong> for servers that align with my expertise. I'm also happy to optimize servers on a contract/project basis.</p>
        <p class="mt-6">Compensation of <strong class="lavender-text">$7.50+ weekly (via PayPal)</strong> is required for full-time positions.</p>
        <p class="mt-8"><strong>Specialization:</strong> GenPVP servers (with exceptions available)</p>
      </div>
      <div class="mt-12 text-lg">
        Contact me: 
        <a href="mailto:your@email.com" class="lavender-accent underline hover:text-purple-300">your@email.com</a> 
        | Discord: <span class="lavender-text">yourusername</span> 
        | Minecraft: <span class="lavender-text">yourusername</span>
      </div>
    </div>
  </section>

  <!-- Experience -->
  <section id="experience" class="section">
    <div class="max-w-6xl mx-auto px-8">
      <h2 class="heading text-white mb-6">My Experience</h2>
      <p class="max-w-3xl text-purple-300 text-lg mb-16">
        I've held various roles in the Minecraft community, from ownership to development. 
        Each position taught me valuable lessons about project management, technical implementation, and community dynamics.
      </p>

      <!-- Leadership -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold lavender-accent mb-8 border-b border-purple-900 pb-4">Leadership & Administration</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="card p-7 rounded-3xl text-sm">Owner • Retired<br><span class="lavender-text">SakuraNetwork</span></div>
          <div class="card p-7 rounded-3xl text-sm">Co-Owner • Retired<br><span class="lavender-text">MacePvPGenz</span></div>
          <div class="card p-7 rounded-3xl text-sm">Co-Owner • Retired<br><span class="lavender-text">InfusePvP</span></div>
          <div class="card p-7 rounded-3xl text-sm">Manager • Retired<br><span class="lavender-text">ValyriaGens</span></div>
          <div class="card p-7 rounded-3xl text-sm">Manager • Retired<br><span class="lavender-text">DefusedGens</span></div>
          <div class="card p-7 rounded-3xl text-sm">Manager • Retired<br><span class="lavender-text">YTMines</span></div>
        </div>
      </div>

      <!-- Development -->
      <div class="mb-20">
        <h3 class="text-2xl font-semibold lavender-accent mb-8 border-b border-purple-900 pb-4">Development & Technical Roles</h3>
        <div class="grid md:grid-cols-3 gap-6 text-sm">
          <div class="card p-7 rounded-3xl">Head Developer • Retired<br><span class="lavender-text">PebbleMines</span></div>
          <div class="card p-7 rounded-3xl">Developer • Active<br><span class="lavender-text">BreezeGens</span></div>
          <!-- Add more from the full list if you want – I kept main ones for cleanliness. You can duplicate cards easily -->
          <div class="card p-7 rounded-3xl">Developer • Retired<br><span class="lavender-text">GenMace</span></div>
        </div>
      </div>

      <!-- Moderation -->
      <div>
        <h3 class="text-2xl font-semibold lavender-accent mb-8 border-b border-purple-900 pb-4">Moderation & Support</h3>
        <div class="grid md:grid-cols-3 gap-6 text-sm">
          <div class="card p-7 rounded-3xl">Sr. Moderator • Active<br><span class="lavender-text">GenIn</span></div>
          <!-- Add more as needed -->
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="section bg-zinc-950">
    <div class="max-w-4xl mx-auto px-8 text-center">
      <h2 class="heading text-white mb-10">Contact Me</h2>
      <p class="text-xl text-purple-300 max-w-2xl mx-auto mb-16">
        Whether you have a project in mind, want to discuss Skript development, or just want to connect with the community, I'd love to hear from you.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <a href="mailto:your@email.com" class="card p-10 rounded-3xl group">
          <i class="fas fa-envelope text-5xl mb-6 lavender-accent group-hover:scale-110 transition"></i>
          <p class="font-semibold">Email</p>
          <p class="lavender-text">your@email.com</p>
        </a>
        <div class="card p-10 rounded-3xl">
          <i class="fab fa-discord text-5xl mb-6 lavender-accent"></i>
          <p class="font-semibold">Discord</p>
          <p class="lavender-text">yourusername</p>
        </div>
        <a href="https://discord.gg/yourlink" target="_blank" class="card p-10 rounded-3xl group">
          <i class="fas fa-users text-5xl mb-6 lavender-accent group-hover:scale-110 transition"></i>
          <p class="font-semibold">Community Server</p>
          <p class="lavender-text">Join Hub</p>
        </a>
      </div>

      <div class="mt-20 text-sm opacity-75">
        Available for Skript Development, Server Management, GenPVP Projects, Optimization &amp; more.<br>
        Accepting positions at <span class="lavender-text">$7.50+ weekly</span> via PayPal.
      </div>
    </div>
  </section>

  <footer class="py-12 text-center text-purple-500 text-sm border-t border-purple-900">
    © 2026 lavender • built with dark lavender energy
  </footer>

  <script>
    // Simple smooth scroll enhancement + active nav highlight (polish)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Tailwind script already loaded via CDN
  </script>
</body>
</html>
