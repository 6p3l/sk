<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lavender Script Hub</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --lavender: #9370DB;
            --dark-purple: #4B0082;
            --darker-purple: #2E0854;
            --light-purple: #E6E6FA;
            --dark-bg: #121212;
            --card-bg: #1e1e2e;
            --text-light: #f0f0f0;
            --text-muted: #b0b0b0;
            --accent: #9370DB;
            --hover: #7d5bbd;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: var(--dark-bg);
            color: var(--text-light);
            min-height: 100vh;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(75, 0, 130, 0.15) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(147, 112, 219, 0.1) 0%, transparent 20%);
            background-attachment: fixed;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid rgba(147, 112, 219, 0.2);
            margin-bottom: 40px;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .logo i {
            font-size: 2.5rem;
            color: var(--lavender);
            text-shadow: 0 0 10px rgba(147, 112, 219, 0.5);
        }

        .logo h1 {
            font-size: 2.2rem;
            background: linear-gradient(to right, var(--lavender), var(--light-purple));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-weight: 700;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 25px;
        }

        nav a {
            color: var(--text-light);
            text-decoration: none;
            font-weight: 500;
            font-size: 1.1rem;
            padding: 8px 15px;
            border-radius: 30px;
            transition: all 0.3s ease;
        }

        nav a:hover, nav a.active {
            background: rgba(147, 112, 219, 0.2);
            color: var(--lavender);
        }

        .hero {
            text-align: center;
            padding: 50px 20px;
            margin-bottom: 50px;
            background: rgba(30, 30, 46, 0.6);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(147, 112, 219, 0.2);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .hero h2 {
            font-size: 2.8rem;
            margin-bottom: 20px;
            background: linear-gradient(to right, var(--lavender), var(--light-purple));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
            color: var(--text-muted);
            line-height: 1.6;
        }

        .search-bar {
            max-width: 600px;
            margin: 0 auto;
            position: relative;
        }

        .search-bar input {
            width: 100%;
            padding: 15px 20px 15px 50px;
            border-radius: 50px;
            border: 1px solid rgba(147, 112, 219, 0.3);
            background: rgba(30, 30, 46, 0.8);
            color: var(--text-light);
            font-size: 1.1rem;
            outline: none;
            transition: all 0.3s ease;
        }

        .search-bar input:focus {
            border-color: var(--lavender);
            box-shadow: 0 0 15px rgba(147, 112, 219, 0.4);
        }

        .search-bar i {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--lavender);
        }

        .filters {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin: 30px 0;
        }

        .filter-btn {
            background: rgba(30, 30, 46, 0.8);
            border: 1px solid rgba(147, 112, 219, 0.3);
            color: var(--text-light);
            padding: 10px 20px;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .filter-btn:hover, .filter-btn.active {
            background: var(--lavender);
            color: white;
            border-color: var(--lavender);
        }

        .scripts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }

        .script-card {
            background: var(--card-bg);
            border-radius: 15px;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid rgba(147, 112, 219, 0.2);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .script-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(147, 112, 219, 0.2);
            border-color: var(--lavender);
        }

        .card-header {
            padding: 20px;
            border-bottom: 1px solid rgba(147, 112, 219, 0.1);
            background: rgba(75, 0, 130, 0.1);
        }

        .card-header h3 {
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: var(--lavender);
        }

        .card-header p {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .card-body {
            padding: 20px;
        }

        .card-body p {
            margin-bottom: 20px;
            color: var(--text-muted);
            line-height: 1.6;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }

        .tag {
            background: rgba(147, 112, 219, 0.2);
            color: var(--lavender);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
        }

        .card-footer {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(147, 112, 219, 0.1);
        }

        .download-btn {
            background: var(--lavender);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .download-btn:hover {
            background: var(--hover);
            transform: scale(1.05);
        }

        .rating {
            color: var(--lavender);
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 40px 0;
            flex-wrap: wrap;
        }

        .stat-card {
            background: rgba(30, 30, 46, 0.6);
            border-radius: 15px;
            padding: 25px;
            text-align: center;
            min-width: 180px;
            border: 1px solid rgba(147, 112, 219, 0.2);
        }

        .stat-card i {
            font-size: 2.5rem;
            color: var(--lavender);
            margin-bottom: 15px;
        }

        .stat-card h3 {
            font-size: 2rem;
            margin-bottom: 10px;
            color: var(--lavender);
        }

        .stat-card p {
            color: var(--text-muted);
        }

        footer {
            text-align: center;
            padding: 30px 0;
            border-top: 1px solid rgba(147, 112, 219, 0.2);
            margin-top: 40px;
            color: var(--text-muted);
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
        }

        .social-links a {
            color: var(--text-light);
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            color: var(--lavender);
            transform: translateY(-5px);
        }

        @media (max-width: 768px) {
            header {
                flex-direction: column;
                gap: 20px;
            }
            
            nav ul {
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .hero h2 {
                font-size: 2.2rem;
            }
            
            .scripts-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">
                <i class="fas fa-code"></i>
                <h1>Lavender Script Hub</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#">Scripts</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>

        <section class="hero">
            <h2>Download Premium Scripts</h2>
            <p>Discover and download high-quality scripts for your projects. All scripts are carefully crafted with attention to detail and performance.</p>
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search for scripts...">
            </div>
        </section>

        <div class="filters">
            <button class="filter-btn active">All</button>
            <button class="filter-btn">Automation</button>
            <button class="filter-btn">Utilities</button>
            <button class="filter-btn">Games</button>
            <button class="filter-btn">Tools</button>
            <button class="filter-btn">Plugins</button>
        </div>

        <div class="scripts-grid">
            <!-- Script Card 1 -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Auto-Clicker Pro</h3>
                    <p>Version 2.4 | Updated: 2023-06-15</p>
                </div>
                <div class="card-body">
                    <p>Advanced auto-clicker with customizable delays, hotkeys, and multiple click patterns for productivity.</p>
                    <div class="tags">
                        <span class="tag">Automation</span>
                        <span class="tag">Productivity</span>
                        <span class="tag">Utility</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>4.7</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Script Card 2 -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Web Scraper Toolkit</h3>
                    <p>Version 1.8 | Updated: 2023-07-22</p>
                </div>
                <div class="card-body">
                    <p>Powerful web scraping tool with data export capabilities and customizable parsing rules.</p>
                    <div class="tags">
                        <span class="tag">Data</span>
                        <span class="tag">Automation</span>
                        <span class="tag">Utilities</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <span>4.2</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Script Card 3 -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Pixel Art Generator</h3>
                    <p>Version 3.1 | Updated: 2023-08-10</p>
                </div>
                <div class="card-body">
                    <p>Simple yet powerful pixel art creation tool with palette customization and export options.</p>
                    <div class="tags">
                        <span class="tag">Graphics</span>
                        <span class="tag">Tools</span>
                        <span class="tag">Creative</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>5.0</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Script Card 4 -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Task Scheduler</h3>
                    <p>Version 1.2 | Updated: 2023-05-30</p>
                </div>
                <div class="card-body">
                    <p>Flexible task scheduling system with notifications and recurring tasks management.</p>
                    <div class="tags">
                        <span class="tag">Productivity</span>
                        <span class="tag">Automation</span>
                        <span class="tag">Utilities</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>4.5</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Script Card 5 -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Database Manager</h3>
                    <p>Version 2.7 | Updated: 2023-09-05</p>
                </div>
                <div class="card-body">
                    <p>Comprehensive database management tool with query builder and data visualization.</p>
                    <div class="tags">
                        <span class="tag">Database</span>
                        <span class="tag">Tools</span>
                        <span class="tag">Utilities</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <span>4.0</span>
                    </div>
                    <button class="download-btn">
                        <i classfas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Script Card 6 -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Chat Bot Framework</h3>
                    <p>Version 1.5 | Updated: 2023-07-18</p>
                </div>
                <div class="card-body">
                    <p>Extensible chatbot framework with natural language processing and multi-platform support.</p>
                    <div class="tags">
                        <span class="tag">AI</span>
                        <span class="tag">Automation</span>
                        <span class="tag">Plugins</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>4.8</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        </div>

        <div class="stats">
            <div class="stat-card">
                <i class="fas fa-download"></i>
                <h3>12,542</h3>
                <p>Downloads</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-code"></i>
                <h3>142</h3>
                <p>Scripts</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-star"></i>
                <h3>4.7</h3>
                <p>Average Rating</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-user"></i>
                <h3>3,289</h3>
                <p>Active Users</p>
            </div>
        </div>

        <footer>
            <div class="social-links">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-discord"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <p>&copy; 2023 Lavender Script Hub. All rights reserved.</p>
            <p>Designed with <i class="fas fa-heart" style="color: var(--lavender);"></i> for developers</p>
        </footer>
    </div>

    <script>
        // Simple interactivity for download buttons
        document.querySelectorAll('.download-btn').forEach(button => {
            button.addEventListener('click', function() {
                const scriptName = this.closest('.script-card').querySelector('h3').textContent;
                alert(`Downloading ${scriptName}...`);
            });
        });

        // Filter button functionality
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    </script>
</body>
</html>
