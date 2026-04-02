<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lavender Script Hub - Minecraft Skripts</title>
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
            --minecraft-green: #55FF55;
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

        .logo span {
            color: var(--minecraft-green);
            font-size: 1.2rem;
            margin-left: 10px;
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
            position: relative;
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

        .minecraft-tag {
            background: rgba(85, 255, 85, 0.2);
            color: var(--minecraft-green);
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

        .minecraft-divider {
            display: flex;
            align-items: center;
            text-align: center;
            margin: 40px 0;
            color: var(--text-muted);
        }

        .minecraft-divider::before,
        .minecraft-divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid rgba(147, 112, 219, 0.2);
        }

        .minecraft-divider span {
            padding: 0 20px;
            font-size: 1.2rem;
            color: var(--minecraft-green);
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
                <i class="fas fa-cubes"></i>
                <div>
                    <h1>Lavender Script Hub <span>Minecraft</span></h1>
                    <p>Premium Skripts for Your Server</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#">Skripts</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
        </header>

        <section class="hero">
            <h2>Premium Minecraft Skripts</h2>
            <p>Enhance your Minecraft server with these carefully crafted skripts. Easy to install, configure, and perfect for any server.</p>
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search for skripts...">
            </div>
        </section>

        <div class="filters">
            <button class="filter-btn active">All</button>
            <button class="filter-btn">Utility</button>
            <button class="filter-btn">Moderation</button>
            <button class="filter-btn">Economy</button>
            <button class="filter-btn">Fun</button>
            <button class="filter-btn">Admin</button>
        </div>

        <div class="minecraft-divider">
            <span>Minecraft Skripts</span>
        </div>

        <div class="scripts-grid">
            <!-- Afk Pool -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Afk Pool</h3>
                    <p>Version 1.2 | Updated: 2023-06-15</p>
                </div>
                <div class="card-body">
                    <p>Configurable AFK Pool that gives rewards to players who stay in it for a certain amount of time.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Rewards</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.8</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Announcements -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Announcements</h3>
                    <p>Version 1.1 | Updated: 2023-05-20</p>
                </div>
                <div class="card-body">
                    <p>Premade announcements with customizable messages and intervals for automatic broadcasting.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Communication</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.5</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Autocompressor -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Autocompressor</h3>
                    <p>Version 1.3 | Updated: 2023-07-10</p>
                </div>
                <div class="card-body">
                    <p>Automatically compresses items into another item. Specifically made for GenPvP servers.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">PvP</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.7</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Bans -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Bans</h3>
                    <p>Version 2.0 | Updated: 2023-08-05</p>
                </div>
                <div class="card-body">
                    <p>Custom bans skript with tempbans, mutes, and other moderation tools for server management.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Moderation</span>
                        <span class="tag">Admin</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.9</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Clearchat -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Clearchat</h3>
                    <p>Version 1.0 | Updated: 2023-04-18</p>
                </div>
                <div class="card-body">
                    <p>Clears chat with an announcement. Perfect for moderators to manage chat environment.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Moderation</span>
                        <span class="tag">Utility</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.3</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Discord -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Discord</h3>
                    <p>Version 1.4 | Updated: 2023-07-25</p>
                </div>
                <div class="card-body">
                    <p>Custom /discord command to share your server's Discord link with players easily.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Integration</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.6</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- FirstJoin -->
            <div class="script-card">
                <div class="card-header">
                    <h3>FirstJoin</h3>
                    <p>Version 1.2 | Updated: 2023-06-30</p>
                </div>
                <div class="card-body">
                    <p>Teleports player to spawn coordinates on their first join. Great for new player experience.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Spawn</span>
                    </div>
                </div>
                <div class="card-footer">
                   极 <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.7</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Gm (gamemode) -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Gamemode</h3>
                    <p>Version 1.1 | Updated: 2023-05-15</p>
                </div>
                <div class="card-body">
                    <p>Aliases for /gamemode creative, survival etc. Simplify mode switching for admins.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Admin</span>
                        <span class="tag">Utility</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.8</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Jail -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Jail</h3>
                    <p>Version 1.3 | Updated: 2023-08-12</p>
                </div>
                <div class="card-body">
                    <p>Custom /jail command, restricts players for a certain amount of time without banning them.</p>
                    <div class="tags">
                        <极 class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Moderation</span>
                        <span class="tag">Punishment</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.6</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- JoinLeave -->
            <div class="script-card">
                <div class="card-header">
                    <h3>JoinLeave</h3>
                    <p>Version 1.2 | Updated: 2023-07-05</p>
                </div>
                <div class="card-body">
                    <p>Custom messages for joining and leaving the server. Fully customizable welcome/farewell messages.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Communication</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.4</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Keyall -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Keyall</h3>
                    <p>Version 1.5 | Updated: 2023-08-20</p>
                </div>
                <div class="card-body">
                    <p>Custom commands for giving everybody a specified key to a crate. ExcellentCrates suitable.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Economy</span>
                        <span class="tag">Crates</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></极>
                        <span>4.9</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Lb (leaderboard) -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Leaderboard</h3>
                    <p>Version 1.4 | Updated: 2023-07-18</p>
                </div>
                <div class="card-body">
                    <p>Auto-leaderboard refresh for AJ Leaderboards. Keep your server stats up to date automatically.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Stats</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.7</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Mutechat -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Mutechat</h3>
                    <p>Version 1.2 | Updated: 2023-06-22</p>
                </div>
                <div class="card-body">
                    <p>Muting chat for every default player so that they cannot talk. Essential moderation tool.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Moderation</span>
                        <span class="tag">Admin</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.5</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Reports -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Reports</h3>
                    <p>Version 1.6 | Updated: 2023-08-25</p>
                </div>
                <div class="极body">
                    <p>Custom /report command, and for staff, /reportlist to see who got reported and for what reason.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Moderation</span>
                        <span class="tag">Utility</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.8</span>
                    </div>
                    <button class极download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Soulbound -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Soulbound</h3>
                    <p>Version 1.3 | Updated: 2023-07-28</p>
                </div>
                <div class="card-body">
                    <p>Custom command for making an item come back after death. Perfect for valuable items.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Items</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.9</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Ss (screenshare) -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Screenshare</h3>
                    <p>Version 1.7 | Updated: 2023-09-01</p>
                </div>
                <div class="card-body">
                    <p>Command for screensharing a person, freezing them so that they can join a desired discord channel.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Moderation</span>
                        <span class="tag">Admin</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.7</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Staffchat -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Staffchat</h3>
                    <p>Version 1.2 | Updated: 2023-06-10</p>
                </div>
                <div class="card-body">
                    <p>Staff-only command, to chat amongst other staff. Keep moderation discussions private.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Moderation</span>
                        <span class="tag">Admin</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.8</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Tips -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Tips</h3>
                    <p>Version 1.4 | Updated: 2023-08-08</p>
                </div>
                <div class="card-body">
                    <p>Customizable tips that get sent every 5 minutes to everybody. Great for player guidance.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Communication</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.5</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Trash -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Trash</h3>
                    <p>Version 1.1 | Updated: 2023-05-25</极>
                </div>
                <div class="card-body">
                    <p>Custom disposal command. Lets players dispose of items easily without littering the world.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Items</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.4</span>
                    </div>
                    <button class="download-btn">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>

            <!-- Warps -->
            <div class="script-card">
                <div class="card-header">
                    <h3>Warps</h3>
                    <p>Version 1.6 | Updated: 2023-08-15</p>
                </div>
                <div class="card-body">
                    <p>Custom warps system with /warp %warpname% command. Easy navigation for players.</p>
                    <div class="tags">
                        <span class="tag minecraft-tag">Minecraft</span>
                        <span class="tag">Utility</span>
                        <span class="tag">Navigation</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>4.9</span>
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
                <h3>8,942</h3>
                <p>Downloads</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-code"></i>
                <h3>19</h3>
                <p>Skripts</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-star"></i>
                <h3>4.7</h3>
                <p>Average Rating</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-server"></i>
                <h3>1,357</h3>
                <p>Active Servers</p>
            </div>
        </div>

        <footer>
            <div class="social-links">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-discord"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
            <p>&copy; 2023 Lavender Script Hub. All rights reserved.</p>
            <p>Designed for Minecraft server administrators</p>
        </footer>
    </div>

    <script>
        // Simple interactivity for download buttons
        document.querySelectorAll('.download-btn').forEach(button => {
            button.addEventListener('click', function() {
                const scriptName = this.closest('.script-card').querySelector('h3').textContent;
                alert(`Downloading ${scriptName}...\n\nIn a real implementation, this would download the actual skript file.`);
            });
        });

        // Filter button functionality
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // In a real implementation, this would filter the skripts
                alert(`Filtering by ${this.textContent}...`);
            });
        });

        // Search functionality
        const searchInput = document.querySelector('.search-bar input');
        searchInput.addEventListener('keyup', function() {
            if (this.value.length > 2) {
                // In a real implementation, this would filter the skripts
                alert(`Searching for: ${this.value}`);
            }
        });
    </script>
</body>
</html>
