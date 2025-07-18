// Adventure Story Data
const adventureStory = {
    start: {
        title: "🛍️ The Great Production Excellence Team Adventure",
        text: "You wake up in your home office, surrounded by empty coffee cups and the gentle hum of your RGB keyboard. Your Production Excellence colleague's green mascot (who looks suspiciously like a certain ogre) grins at you from your monitor. The Developer Experience Budget display shows $1,337,420.69 and climbing. Your meal budget notification blinks: $47.83 remaining. Today feels different... magical even. What do you do?",
        choices: [
            { text: "🌭 Grab a hot dog for breakfast (check meal budget)", next: "hotdog_start" },
            { text: "🥜 Make some artisanal peanut butter toast", next: "peanut_butter_start" },
            { text: "🚗 Check Toronto traffic conditions", next: "traffic_start" },
            { text: "🎮 Play a walking simulator", next: "walking_sim_start" },
            { text: "🍽️ Research your mysterious teammate's restaurant habits", next: "michelin_mystery" },
            { text: "🛍️ Investigate the Production Excellence team's green mascot mystery", next: "shrek_mystery" },
            { text: "🍺 Check your team's happy hour invitation", next: "too_young_drinking" },
            { text: "🍰 Go to team dinner but only eat dessert", next: "dessert_only_dinner" },
            { text: "😎 Be Olakitan", next: "olakitan_start" },
            { text: "🕷️ Notice a spider in your home office", next: "spider_encounter" }
        ]
    },

    hotdog_start: {
        title: "🌭 The Hot Dog Dilemma",
        text: "You grab a hot dog from the fridge. As you bite into it, you remember the legend: every hot dog consumed removes 8 minutes from your lifespan. But it tastes so good... The budget ticker shows $856,742.31. Wait - this hot dog costs $12.99 and you only have $47.83 left in your meal budget!",
        choices: [
            { text: "🤤 Eat another hot dog (YOLO, ignore meal budget)", next: "hotdog_addiction" },
            { text: "🏃 Run away from the hot dog (save meal budget)", next: "healthy_choice" },
            { text: "🧮 Calculate the exact life cost vs meal budget", next: "math_path" },
            { text: "💸 Panic about going over meal budget", next: "budget_panic" }
        ]
    },

    shrek_mystery: {
        title: "🛍️ The Shopify Mascot Mystery",
        text: "You dive deep into investigating your team's green mascot. The more you research, the more questions arise. Why does this e-commerce mascot look like he belongs in a swamp? Why is he always holding shopping bags? Your colleague's Slack avatar shows the same mysterious figure. The budget jumps to $2,345,678.90 as you uncover Shopify's deepest secrets!",
        choices: [
            { text: "🕵️ Investigate the swamp connection", next: "swamp_investigation" },
            { text: "🛒 Focus on the shopping bag symbolism", next: "shopping_symbolism" },
            { text: "💬 Ask your colleague directly about the mascot", next: "colleague_confrontation" },
            { text: "🎭 Embrace the mystery and become the mascot", next: "mascot_transformation" }
        ]
    },

    swamp_investigation: {
        title: "🐸 The Swamp E-commerce Empire",
        text: "Your investigation leads you to discover that the best e-commerce platforms are actually built in swamps. The humidity is perfect for servers, and the isolation breeds innovation. You realize Shopify's green mascot represents the swamp-to-riches journey. The budget swells to $10,000,000.00 as you plan your own swamp startup!",
        choices: [
            { text: "🏞️ Build a swamp data center", next: "swamp_datacenter" },
            { text: "🐊 Partner with local swamp creatures", next: "swamp_partnership" },
            { text: "🌭 Celebrate with swamp hot dogs", next: "swamp_hotdogs" }
        ]
    },

    shopping_symbolism: {
        title: "🛒 The Deep Shopping Philosophy",
        text: "You realize the shopping bags aren't just containers - they're metaphors for life's journey. Every purchase is a choice, every bag a memory. Your Production Excellence team's mascot represents the eternal shopping spirit within us all. The budget reaches $25,000,000.00 as you achieve commercial enlightenment!",
        choices: [
            { text: "🧘 Become a shopping guru", next: "shopping_guru_ending" },
            { text: "🎨 Design the next generation of bags", next: "bag_designer" },
            { text: "🛍️ Open a mystical shopping experience", next: "mystical_shop" }
        ]
    },

    colleague_confrontation: {
        title: "💬 The Colleague Revelation",
        text: "You approach your colleague about the mascot. They reveal the truth: the green mascot is actually a representation of their true self - a swamp-dwelling e-commerce genius who found success through Shopify. They've been hiding their ogre nature this whole time! The budget explodes to $50,000,000.00 as you become their trusted confidant!",
        choices: [
            { text: "🤝 Become the official mascot spokesperson", next: "mascot_spokesperson" },
            { text: "🏰 Help them build a swamp office", next: "swamp_office" },
            { text: "💚 Embrace the team's true green nature", next: "team_transformation" }
        ]
    },

    mascot_transformation: {
        title: "🎭 The Great Mascot Metamorphosis",
        text: "You decide to become the mascot yourself. You don green face paint, practice your best ogre voice, and start carrying shopping bags everywhere. Your team loves your commitment to the brand. The budget reaches $75,000,000.00 as you embody the Shopify spirit!",
        choices: [
            { text: "🎬 Star in Shopify commercials", next: "commercial_star" },
            { text: "🏆 Become the official team mascot", next: "official_mascot_ending" },
            { text: "🌟 Inspire other teams to embrace their mascots", next: "mascot_movement" }
        ]
    },

    official_mascot_ending: {
        title: "🏆 The Official Shopify Team Mascot",
        text: "You become the official mascot of your Production Excellence team. Your green face paint and shopping bag collection become legendary. Team meetings are now 300% more fun, and your mascot wisdom guides important decisions. Final budget: $100,000,000.00. You've found your true calling as the team's spiritual shopping guide!",
        choices: [
            { text: "🛍️ Lead the team to new adventures", next: "restart" }
        ]
    },

    shopping_guru_ending: {
        title: "🧘 The Shopping Enlightenment Master",
        text: "You achieve shopping enlightenment and become a guru. Your teachings about the metaphysical nature of e-commerce spread throughout Shopify. Your final budget: $99,999,999.99. You've mastered the art of philosophical shopping!",
        choices: [
            { text: "🛒 Guide others to shopping nirvana", next: "restart" }
        ]
    },

    // Missing story nodes from Shopify mascot paths
    bag_designer: {
        title: "🎨 The Revolutionary Bag Designer",
        text: "You design the next generation of shopping bags with built-in e-commerce capabilities. Each bag can process transactions, track inventory, and even suggest products! Your Production Excellence team marvels at your innovation. The budget soars to $88,888,888.88!",
        choices: [
            { text: "💼 Launch your bag empire", next: "bag_empire_ending" }
        ]
    },

    bag_empire_ending: {
        title: "💼 The Shopping Bag Empire",
        text: "Your smart shopping bags revolutionize e-commerce forever. Every major retailer wants your technology. Your Production Excellence team becomes the most innovative in the company. Final budget: $200,000,000.00. You've created the future of shopping!",
        choices: [
            { text: "🛍️ Design the next innovation", next: "restart" }
        ]
    },

    mystical_shop: {
        title: "🛍️ The Mystical Shopping Experience",
        text: "You open a store where customers shop with their souls. Each purchase is a spiritual journey. Your Production Excellence team helps you integrate mystical payment processing. The budget reaches $77,777,777.77 as you achieve commercial enlightenment!",
        choices: [
            { text: "🔮 Become the Shopping Mystic", next: "shopping_mystic_ending" }
        ]
    },

    shopping_mystic_ending: {
        title: "🔮 The Shopping Mystic",
        text: "You become the world's first shopping mystic. Customers seek your wisdom for their purchasing decisions. Your Production Excellence team supports your mystical commerce platform. Final budget: $333,333,333.33. You've transcended traditional retail!",
        choices: [
            { text: "🌟 Guide others to shopping enlightenment", next: "restart" }
        ]
    },

    mascot_spokesperson: {
        title: "🤝 The Official Mascot Spokesperson",
        text: "You become the official spokesperson for your team's green mascot. Your speeches about swamp-to-success stories inspire the entire company. The budget climbs to $55,555,555.55 as you embody the Shopify spirit!",
        choices: [
            { text: "🎤 Become the Chief Inspiration Officer", next: "inspiration_officer_ending" }
        ]
    },

    inspiration_officer_ending: {
        title: "🎤 The Chief Inspiration Officer",
        text: "You become Shopify's first Chief Inspiration Officer. Your motivational mascot speeches transform company culture. Every team meeting starts with your wisdom. Final budget: $150,000,000.00. You've inspired an entire organization!",
        choices: [
            { text: "🌟 Inspire a new adventure", next: "restart" }
        ]
    },

    swamp_office: {
        title: "🏰 The Swamp Office Paradise",
        text: "You help your colleague build the ultimate swamp office. It has perfect humidity for servers, natural soundproofing, and surprisingly good wifi. Your Production Excellence team requests to relocate here. The budget reaches $44,444,444.44!",
        choices: [
            { text: "🏞️ Become the Swamp Office Architect", next: "swamp_architect_ending" }
        ]
    },

    swamp_architect_ending: {
        title: "🏞️ The Swamp Office Architect",
        text: "You revolutionize office design with swamp-inspired workspaces. Companies worldwide adopt your wetland-tech aesthetic. Your Production Excellence team becomes the most innovative workspace in the industry. Final budget: $120,000,000.00. You've created the future of work!",
        choices: [
            { text: "🌿 Design a new adventure", next: "restart" }
        ]
    },

    team_transformation: {
        title: "💚 The Great Team Transformation",
        text: "You lead your entire Production Excellence team in embracing their true green nature. Everyone adopts the swamp aesthetic. Productivity soars as the team finds their authentic selves. The budget explodes to $99,999,999.99!",
        choices: [
            { text: "🌟 Become the Team Transformation Leader", next: "transformation_leader_ending" }
        ]
    },

    transformation_leader_ending: {
        title: "🌟 The Team Transformation Leader",
        text: "You become legendary for helping teams find their authentic identity. Other departments request your transformation services. Your Production Excellence team is the happiest and most productive in the company. Final budget: $250,000,000.00. You've mastered team dynamics!",
        choices: [
            { text: "🎭 Transform a new adventure", next: "restart" }
        ]
    },

    commercial_star: {
        title: "🎬 The Shopify Commercial Star",
        text: "You star in Shopify commercials as the green mascot. Your performance is so compelling that sales increase by 300%. The marketing team considers you their secret weapon. The budget reaches $88,888,888.88!",
        choices: [
            { text: "🌟 Become the Chief Marketing Mascot", next: "marketing_mascot_ending" }
        ]
    },

    marketing_mascot_ending: {
        title: "🌟 The Chief Marketing Mascot",
        text: "You become Shopify's Chief Marketing Mascot. Your campaigns are legendary, and your green face paint becomes iconic. The company's brand recognition skyrockets. Final budget: $500,000,000.00. You've revolutionized marketing!",
        choices: [
            { text: "🎭 Market a new adventure", next: "restart" }
        ]
    },

    mascot_movement: {
        title: "🌟 The Great Mascot Movement",
        text: "You inspire other teams across Shopify to embrace their mascots. Soon, every department has a unique mascot identity. The company culture transforms into something magical. The budget reaches $77,777,777.77!",
        choices: [
            { text: "🎪 Become the Mascot Movement Leader", next: "mascot_leader_ending" }
        ]
    },

    mascot_leader_ending: {
        title: "🎪 The Mascot Movement Leader",
        text: "You lead the greatest mascot revolution in corporate history. Shopify becomes known for its incredible team mascots. Other companies study your methods. Final budget: $1,000,000,000.00. You've created a cultural phenomenon!",
        choices: [
            { text: "🎭 Lead a new adventure", next: "restart" }
        ]
    },

    // Missing swamp-related story nodes
    swamp_datacenter: {
        title: "🏞️ The Swamp Data Center Empire",
        text: "You build the world's first swamp data center. The natural cooling and humidity create perfect conditions for servers. Your Production Excellence team's applications run faster than ever. The budget soars to $66,666,666.66!",
        choices: [
            { text: "🌿 Become the Swamp Tech Pioneer", next: "swamp_tech_ending" }
        ]
    },

    swamp_tech_ending: {
        title: "🌿 The Swamp Tech Pioneer",
        text: "You revolutionize data center design with swamp technology. Every major tech company wants your expertise. Your Production Excellence team becomes the most efficient in the industry. Final budget: $300,000,000.00. You've created the future of green computing!",
        choices: [
            { text: "🐸 Innovate a new adventure", next: "restart" }
        ]
    },

    swamp_partnership: {
        title: "🐊 The Swamp Creature Alliance",
        text: "You partner with local swamp creatures to create the most unique development team ever. The alligators handle security, the frogs manage debugging, and the turtles oversee long-term planning. Your Production Excellence team is amazed by the efficiency. The budget reaches $55,555,555.55!",
        choices: [
            { text: "🐸 Become the Interspecies Team Leader", next: "creature_leader_ending" }
        ]
    },

    creature_leader_ending: {
        title: "🐸 The Interspecies Team Leader",
        text: "You become the world's first interspecies team leader. Your methods revolutionize collaborative work. Nature documentaries feature your team. Your Production Excellence colleagues consider you a pioneer. Final budget: $175,000,000.00. You've bridged the gap between nature and technology!",
        choices: [
            { text: "🌿 Evolve a new adventure", next: "restart" }
        ]
    },

    swamp_hotdogs: {
        title: "🌭 The Swamp Hot Dog Celebration",
        text: "You celebrate your swamp discoveries with special swamp hot dogs. These unique delicacies are made from sustainable swamp plants and somehow taste better than regular hot dogs. Plus, they ADD 8 minutes to your life! Your Production Excellence team joins the celebration. The budget reaches $33,333,333.33!",
        choices: [
            { text: "🌭 Become the Swamp Food Innovator", next: "swamp_food_ending" }
        ]
    },

    swamp_food_ending: {
        title: "🌭 The Swamp Food Innovator",
        text: "You revolutionize the food industry with life-extending swamp hot dogs. Your products reverse the traditional hot dog curse. Your Production Excellence team helps you create an e-commerce empire around healthy swamp food. Final budget: $400,000,000.00. You've saved countless lifespans!",
        choices: [
            { text: "🌿 Nourish a new adventure", next: "restart" }
        ]
    },

    // Missing Oklahoma tourism story
    tourism_ending: {
        title: "🏞️ The Oklahoma Tourism Empire",
        text: "You start the most successful tourism company in Oklahoma history. Your slogan 'Oklahoma: Surprisingly Awesome' becomes legendary. Your Production Excellence team helps you build the e-commerce platform for booking Prairie Adventures. The budget reaches $45,000,000.00!",
        choices: [
            { text: "🌾 Become the Tourism Visionary", next: "restart" }
        ]
    },

    oklahoma_ending: {
        title: "🌾 The Oklahoma Tech Pioneer",
        text: "You become the tech pioneer of Oklahoma, establishing the state as a major technology hub. Your Production Excellence team helps you build the infrastructure for the 'Silicon Prairie'. Companies flock to Oklahoma for your expertise. The budget reaches $85,000,000.00!",
        choices: [
            { text: "🏞️ Pioneer a new adventure", next: "restart" }
        ]
    },

    // Missing lifestyle and dental stories
    balanced_lifestyle: {
        title: "🌭🦷 The Balanced Lifestyle Master",
        text: "You've achieved the perfect balance: eating hot dogs for pleasure but brushing your teeth after each one. Your life span stays stable while your joy remains high. Your Production Excellence team admires your disciplined approach to unhealthy eating. The budget reaches $33,333,333.33!",
        choices: [
            { text: "🦷 Become the Balanced Living Guru", next: "balanced_guru_ending" }
        ]
    },

    balanced_guru_ending: {
        title: "🦷 The Balanced Living Guru",
        text: "You teach others the art of balanced indulgence. Your philosophy 'Eat what you love, but take care of yourself' becomes a global movement. Your Production Excellence team helps you build a wellness e-commerce empire. Final budget: $111,111,111.11. You've mastered the art of balance!",
        choices: [
            { text: "⚖️ Balance a new adventure", next: "restart" }
        ]
    },

    dental_guru: {
        title: "🦷 The Dental Philosophy Master",
        text: "You become a guru of dental wordplay and oral health philosophy. Your insights about 'dental' being in 'incidental' revolutionize both dentistry and linguistics. Your Production Excellence team helps you create educational content. The budget reaches $77,777,777.00!",
        choices: [
            { text: "🦷 Become the Dental Wisdom Teacher", next: "dental_wisdom_ending" }
        ]
    },

    dental_wisdom_ending: {
        title: "🦷 The Dental Wisdom Teacher",
        text: "You establish the world's first Dental Philosophy Academy. Students learn about the deeper meaning of oral health and wordplay. Your Production Excellence team builds the e-learning platform. Final budget: $222,222,222.22. You've revolutionized dental education!",
        choices: [
            { text: "🦷 Brush up on a new adventure", next: "restart" }
        ]
    },

    napkin_science: {
        title: "🍽️ The Napkin Science Institute",
        text: "You establish the world's first Napkin Folding Research Institute. Your scientific approach to napkin analysis revolutionizes restaurant service evaluation. Your Production Excellence team helps you build the data collection platform. The budget reaches $44,444,444.44!",
        choices: [
            { text: "🍽️ Become the Napkin Science Professor", next: "napkin_professor_ending" }
        ]
    },

    napkin_professor_ending: {
        title: "🍽️ The Napkin Science Professor",
        text: "You become the world's leading expert in napkin-based restaurant evaluation. Your methodologies are adopted by food critics worldwide. Your Production Excellence team celebrates your unique expertise. Final budget: $333,333,333.33. You've elevated napkin folding to an art form!",
        choices: [
            { text: "🍽️ Fold into a new adventure", next: "restart" }
        ]
    },

    // New storyline: Too Young to Drink
    too_young_drinking: {
        title: "🍺 The Underage Exclusion",
        text: "You check your Production Excellence team's happy hour invitation. Everyone's excited about the craft beer tasting, but you're too young to drink. You watch from the sidelines as your teammates bond over IPAs and inside jokes. The budget stays at $1,337,420.69 but your social anxiety climbs. You feel left out of everything.",
        choices: [
            { text: "😢 Sulk in your cubicle", next: "drinking_sulk" },
            { text: "💪 Prove yourself through work excellence", next: "work_excellence" },
            { text: "🎯 Find other ways to connect with the team", next: "team_connection" },
            { text: "🏃 Focus on your own development", next: "self_development" }
        ]
    },

    drinking_sulk: {
        title: "😢 The Sulking Phase",
        text: "You retreat to your cubicle, feeling sorry for yourself. Your Production Excellence teammates' laughter echoes from the break room. You stress-eat three bags of chips and watch the budget drop to $1,234,567.89. But then you realize - this is your chance to work uninterrupted while everyone else is distracted!",
        choices: [
            { text: "💻 Become the after-hours coding legend", next: "coding_legend" },
            { text: "📚 Study while others party", next: "study_master" },
            { text: "🌭 Stress-eat hot dogs (8 minutes per dog)", next: "sulk_hotdog" }
        ]
    },

    work_excellence: {
        title: "💪 The Excellence Path",
        text: "You channel your exclusion into work excellence. While your Production Excellence teammates are discussing beer, you're optimizing code, fixing bugs, and improving user experience. Your productivity soars! The budget jumps to $5,555,555.55 as management notices your exceptional work.",
        choices: [
            { text: "🚀 Become the team's technical leader", next: "technical_leader" },
            { text: "📈 Get promoted ahead of your peers", next: "early_promotion" },
            { text: "🎯 Balance work with social connections", next: "balanced_approach" },
            { text: "📦 Organize by sorting thousands of things", next: "sorting_chaos" }
        ]
    },

    team_connection: {
        title: "🎯 The Creative Connector",
        text: "You find creative ways to connect with your Production Excellence team. You organize morning coffee chats, start a gaming club, and suggest team lunches. Your teammates appreciate your initiative! The budget reaches $3,333,333.33 as you become the team's social organizer.",
        choices: [
            { text: "🎮 Become the team's culture coordinator", next: "culture_coordinator" },
            { text: "☕ Start a coffee appreciation society", next: "coffee_society" },
            { text: "🍽️ Organize epic team lunches", next: "lunch_organizer" }
        ]
    },

    self_development: {
        title: "🏃 The Self-Development Journey",
        text: "You focus on your own growth. While your Production Excellence teammates are drinking, you're learning new skills, reading books, and building side projects. Your personal development accelerates! The budget reaches $7,777,777.77 as you become increasingly valuable.",
        choices: [
            { text: "🧠 Become the team's learning advocate", next: "learning_advocate" },
            { text: "🔥 Rise to leadership through competence", next: "competence_leader" },
            { text: "🎯 Mentor others in non-drinking team building", next: "sober_mentor" }
        ]
    },

    coding_legend: {
        title: "💻 The After-Hours Coding Legend",
        text: "You become legendary for your after-hours coding sessions. While everyone else recovers from happy hour, you're shipping features and fixing critical bugs. Your Production Excellence team starts calling you 'The Night Owl'. The budget soars to $15,000,000.00!",
        choices: [
            { text: "🦉 Become the official night-shift leader", next: "night_shift_leader" },
            { text: "⚡ Rise to senior developer through pure skill", next: "skill_promotion" }
        ]
    },

    technical_leader: {
        title: "🚀 The Technical Leader",
        text: "Your work excellence propels you to technical leadership. Your Production Excellence teammates look to you for guidance on complex problems. You're invited to leadership meetings and strategy sessions. The budget reaches $25,000,000.00 as you become indispensable!",
        choices: [
            { text: "👑 Accept the leadership role", next: "young_leader" },
            { text: "🎯 Stay humble and keep learning", next: "humble_leader" }
        ]
    },

    young_leader: {
        title: "👑 The Young Leader",
        text: "You rise to be in charge of your Production Excellence team despite being the youngest. Your teammates respect your competence and dedication. At the leadership celebration, they offer you your first drink. You take a sip of the expensive whiskey and... it tastes absolutely disgusting! The budget reaches $50,000,000.00!",
        choices: [
            { text: "🤢 Admit alcohol is gross and stay sober", next: "sober_leader_ending" },
            { text: "😅 Pretend to like it to fit in", next: "pretend_drink" },
            { text: "🎯 Suggest better celebration alternatives", next: "alternative_celebration" }
        ]
    },

    sober_leader_ending: {
        title: "🤢 The Honest Sober Leader",
        text: "You honestly admit that alcohol tastes disgusting and you'd rather stay sober. Your Production Excellence team is amazed by your authenticity and leadership. You start a new tradition of celebration with amazing food and activities instead of alcohol. Other teams follow your example. Final budget: $100,000,000.00. You've revolutionized team culture!",
        choices: [
            { text: "🌟 Lead a sober revolution", next: "restart" }
        ]
    },

    pretend_drink: {
        title: "😅 The Pretend Drinker",
        text: "You pretend to like alcohol to fit in, but it makes you miserable. You become known as the 'fun leader' but lose your authenticity. Your Production Excellence team likes the persona but not the real you. The budget drops to $5,000,000.00 as you struggle with impostor syndrome.",
        choices: [
            { text: "😔 Come clean about your true preferences", next: "authentic_revelation" },
            { text: "🎭 Continue the charade", next: "fake_leader_ending" }
        ]
    },

    authentic_revelation: {
        title: "😔 The Authentic Revelation",
        text: "You finally admit you don't like alcohol and have been pretending. Your Production Excellence team appreciates your honesty and vulnerability. They respect you more for being authentic than for pretending. The budget recovers to $75,000,000.00 as you become a genuine leader!",
        choices: [
            { text: "🌟 Embrace authentic leadership", next: "restart" }
        ]
    },

    fake_leader_ending: {
        title: "🎭 The Fake Leader",
        text: "You continue pretending to enjoy alcohol and lose yourself in the process. Your Production Excellence team follows a leader who isn't really you. You achieve success but feel empty inside. Final budget: $10,000,000.00. You've learned that authenticity matters more than fitting in.",
        choices: [
            { text: "🎭 Reflect on authenticity", next: "restart" }
        ]
    },

    // New storyline: Dessert Only Dinner
    dessert_only_dinner: {
        title: "🍰 The Dessert Only Decision",
        text: "Your Production Excellence team goes to a fancy restaurant for a group dinner. While everyone orders full meals, you decide to only eat dessert. Your teammates raise eyebrows as you order the chocolate lava cake, crème brûlée, and tiramisu. The budget stays at $1,337,420.69 but your meal budget drops to $15.47.",
        choices: [
            { text: "🍫 Embrace the dessert lifestyle", next: "dessert_lifestyle" },
            { text: "😅 Explain your dessert strategy", next: "dessert_strategy" },
            { text: "🤫 Keep your reasons mysterious", next: "mysterious_dessert" },
            { text: "🍰 Become the team's dessert expert", next: "dessert_expert" }
        ]
    },

    dessert_lifestyle: {
        title: "🍫 The Dessert Lifestyle",
        text: "You fully embrace eating only dessert. Your Production Excellence teammates are amazed by your dedication to sweetness. You feel energized and happy! The sugar rush gives you incredible focus. The budget jumps to $4,444,444.44 as your productivity soars from the glucose boost.",
        choices: [
            { text: "🏠 Go home and sleep like a baby", next: "dessert_sleep" },
            { text: "🎯 Use the sugar energy for work", next: "sugar_productivity" },
            { text: "🍯 Research the science of dessert-only nutrition", next: "dessert_science" }
        ]
    },

    dessert_strategy: {
        title: "😅 The Dessert Strategy Explanation",
        text: "You explain your dessert strategy to your curious Production Excellence teammates. 'I'm saving room for a proper meal later with friends,' you say. 'Plus, dessert first means I won't be too full to enjoy it!' Your team is impressed by your planning. The budget reaches $3,333,333.33.",
        choices: [
            { text: "🏠 Execute your plan perfectly", next: "perfect_plan" },
            { text: "😴 Go home and sleep well", next: "dessert_sleep" },
            { text: "🍽️ Meet friends for the real meal", next: "friends_meal" }
        ]
    },

    dessert_sleep: {
        title: "😴 The Perfect Dessert Sleep",
        text: "You go home after the dessert dinner and sleep like a baby. The sugar has metabolized perfectly, leaving you relaxed and content. You wake up refreshed and energized. Your Production Excellence teammates text asking about your secret to good sleep. The budget reaches $6,666,666.66!",
        choices: [
            { text: "🍽️ Meet friends for a proper meal", next: "friends_meal" },
            { text: "😴 Become the team's sleep consultant", next: "sleep_consultant" },
            { text: "🍰 Perfect your dessert-sleep routine", next: "dessert_routine" }
        ]
    },

    friends_meal: {
        title: "🍽️ The Friends Meal",
        text: "You meet your friends later for a proper meal. You're perfectly hungry and enjoy every bite of the savory food. Your friends are impressed by your dinner strategy. The conversation flows, the food is perfect, and you feel completely satisfied. The budget reaches $8,888,888.88!",
        choices: [
            { text: "🎉 This strategy worked perfectly!", next: "perfect_strategy_ending" },
            { text: "🤔 Reflect on the evening's choices", next: "evening_reflection" },
            { text: "📚 Document your perfect dinner strategy", next: "dinner_strategy_guide" }
        ]
    },

    perfect_strategy_ending: {
        title: "🎉 The Perfect Strategy Master",
        text: "Your dessert-first, friends-later strategy worked flawlessly! You enjoyed team bonding, got perfect sleep, and had an amazing meal with friends. Your Production Excellence team starts copying your approach. You've revolutionized social dining! Final budget: $99,999,999.99. You've mastered the art of strategic eating!",
        choices: [
            { text: "🍽️ Strategize a new adventure", next: "restart" }
        ]
    },

    evening_reflection: {
        title: "🤔 The Evening Reflection",
        text: "You reflect on your choices. The dessert was fun, the sleep was great, and the friends meal was perfect. But you realize you missed some of the team bonding during the main course. Your Production Excellence colleagues had important conversations while you were focused on dessert. The budget settles at $5,555,555.55.",
        choices: [
            { text: "😔 Regret missing team bonding", next: "regret_ending" },
            { text: "😊 Appreciate the unique experience", next: "appreciation_ending" },
            { text: "⚖️ Find balance for next time", next: "balanced_dining" }
        ]
    },

    regret_ending: {
        title: "😔 The Regret Realization",
        text: "You realize you missed important team bonding moments while focused on your dessert strategy. Your Production Excellence teammates made connections and shared stories during the main course that you weren't part of. You feel left out and regret prioritizing your personal dining preferences over team unity. Final budget: $2,222,222.22. You've learned that sometimes fitting in matters more than personal optimization.",
        choices: [
            { text: "😔 Learn from the experience", next: "restart" }
        ]
    },

    appreciation_ending: {
        title: "😊 The Appreciation Master",
        text: "You appreciate the unique experience you created. While you may have missed some team conversations, you gained a memorable story, perfect sleep, and a wonderful meal with friends. Your Production Excellence team respects your individuality and asks for dessert recommendations. Final budget: $77,777,777.77. You've learned that being authentic sometimes means being different!",
        choices: [
            { text: "🍰 Appreciate a new adventure", next: "restart" }
        ]
    },

    // Missing nodes for drinking storyline
    study_master: {
        title: "📚 The Study Master",
        text: "While your Production Excellence teammates are at happy hour, you dive into studying. You learn new frameworks, master algorithms, and become incredibly knowledgeable. Your expertise grows exponentially! The budget reaches $12,000,000.00 as you become the team's go-to expert.",
        choices: [
            { text: "🧠 Become the team's technical mentor", next: "technical_mentor_ending" },
            { text: "📖 Continue your learning journey", next: "learning_advocate" }
        ]
    },

    technical_mentor_ending: {
        title: "🧠 The Technical Mentor",
        text: "You become the technical mentor for your entire Production Excellence team. Your knowledge gained during their happy hours makes you invaluable. You train new developers and guide architecture decisions. Final budget: $88,888,888.88. You've proven that learning beats drinking!",
        choices: [
            { text: "📚 Mentor a new adventure", next: "restart" }
        ]
    },

    sulk_hotdog: {
        title: "🌭 The Sulk Hot Dog Spiral",
        text: "You stress-eat hot dogs while sulking about being excluded. Each hot dog removes 8 minutes from your life span, but the emotional eating continues. You consume 15 hot dogs (120 minutes lost) while your Production Excellence team is at happy hour. The budget crashes to $500,000.00.",
        choices: [
            { text: "😢 Continue the downward spiral", next: "sulk_spiral_ending" },
            { text: "💪 Turn the pain into motivation", next: "pain_motivation" }
        ]
    },

    sulk_spiral_ending: {
        title: "😢 The Sulk Spiral",
        text: "You spiral into self-pity and unhealthy habits. Your Production Excellence team returns from happy hour to find you surrounded by hot dog wrappers. They feel bad and invite you to future non-drinking events. Final budget: $100,000.00. You've learned that sulking doesn't solve social problems!",
        choices: [
            { text: "🌭 Wallow in a new adventure", next: "restart" }
        ]
    },

    pain_motivation: {
        title: "💪 The Pain-Motivated Success",
        text: "You turn your exclusion pain into incredible motivation. Your Production Excellence team returns to find you've completed a week's worth of work. They're amazed by your productivity and start including you in all activities. The budget recovers to $25,000,000.00!",
        choices: [
            { text: "🚀 Become the motivation master", next: "motivation_master_ending" }
        ]
    },

    motivation_master_ending: {
        title: "🚀 The Motivation Master",
        text: "You become legendary for turning setbacks into success. Your Production Excellence team learns from your resilience. You teach workshops on 'Productive Exclusion' and become a company-wide inspiration. Final budget: $150,000,000.00. You've mastered the art of resilient motivation!",
        choices: [
            { text: "💪 Motivate a new adventure", next: "restart" }
        ]
    },

    early_promotion: {
        title: "📈 The Early Promotion",
        text: "Your exceptional work during happy hours leads to an early promotion. You become the youngest team lead at Shopify. Your teammates are impressed but also slightly envious. The budget reaches $35,000,000.00 as you rise through the ranks!",
        choices: [
            { text: "👑 Embrace the leadership role", next: "young_leader" },
            { text: "🤝 Stay humble and help others", next: "humble_leader" }
        ]
    },

    humble_leader: {
        title: "🤝 The Humble Leader",
        text: "You stay humble despite your success. Your Production Excellence team appreciates your down-to-earth leadership style. You mentor others and create an inclusive environment. At the team celebration, they offer you alcohol, which you discover tastes terrible! The budget reaches $45,000,000.00!",
        choices: [
            { text: "🤢 Admit alcohol is disgusting", next: "sober_leader_ending" },
            { text: "😅 Laugh it off and suggest alternatives", next: "alternative_celebration" }
        ]
    },

    alternative_celebration: {
        title: "🎯 The Alternative Celebration",
        text: "You suggest celebrating with amazing food, games, and activities instead of alcohol. Your Production Excellence team loves the idea! You organize epic celebration events that become legendary. The budget reaches $60,000,000.00 as you revolutionize team culture!",
        choices: [
            { text: "🎉 Become the celebration innovator", next: "celebration_innovator_ending" }
        ]
    },

    celebration_innovator_ending: {
        title: "🎉 The Celebration Innovator",
        text: "You become known throughout Shopify as the celebration innovator. Your alcohol-free events are more fun than traditional happy hours. Other teams copy your approach. Final budget: $200,000,000.00. You've revolutionized workplace celebrations!",
        choices: [
            { text: "🎊 Celebrate a new adventure", next: "restart" }
        ]
    },

    // Missing nodes for dessert storyline
    mysterious_dessert: {
        title: "🤫 The Mysterious Dessert Choice",
        text: "You keep your dessert-only strategy mysterious. Your Production Excellence teammates are intrigued by your enigmatic dining choices. Some think you're on a secret diet, others suspect you're a dessert critic. The mystery adds to your allure! The budget reaches $4,567,890.12.",
        choices: [
            { text: "😴 Maintain the mystery and sleep well", next: "dessert_sleep" },
            { text: "🕵️ Become the team's mystery person", next: "mystery_person_ending" }
        ]
    },

    mystery_person_ending: {
        title: "🕵️ The Mystery Person",
        text: "You become known as the team's mystery person. Your Production Excellence colleagues are fascinated by your unpredictable choices. You gain a reputation for being intriguingly different. Final budget: $55,555,555.55. You've learned that mystery can be magnetic!",
        choices: [
            { text: "🔍 Mysteriously start a new adventure", next: "restart" }
        ]
    },

    dessert_expert: {
        title: "🍰 The Team's Dessert Expert",
        text: "You become the official dessert expert for your Production Excellence team. Your colleagues consult you for dessert recommendations, birthday cake choices, and sweet treat decisions. You develop an encyclopedia of dessert knowledge! The budget reaches $7,777,777.77.",
        choices: [
            { text: "😴 Perfect your dessert-sleep routine", next: "dessert_sleep" },
            { text: "🍰 Become the company's dessert consultant", next: "dessert_consultant_ending" }
        ]
    },

    dessert_consultant_ending: {
        title: "🍰 The Dessert Consultant",
        text: "You become Shopify's official dessert consultant. You advise on office celebrations, client meetings, and team events. Your dessert expertise becomes a valuable skill. Final budget: $125,000,000.00. You've turned sweet tooth into sweet success!",
        choices: [
            { text: "🧁 Sweeten a new adventure", next: "restart" }
        ]
    },

    perfect_plan: {
        title: "🏠 The Perfect Plan Execution",
        text: "Your plan works flawlessly. You leave the team dinner satisfied with dessert, go home feeling content, and later meet friends for a perfect meal. Your Production Excellence teammates are impressed by your strategic thinking. The budget reaches $9,999,999.99!",
        choices: [
            { text: "🎯 This was the perfect strategy!", next: "perfect_strategy_ending" },
            { text: "📚 Teach others your planning skills", next: "planning_guru_ending" }
        ]
    },

    planning_guru_ending: {
        title: "📚 The Planning Guru",
        text: "You become known as the planning guru at Shopify. Your strategic approach to social dining inspires others to think more intentionally about their choices. You teach workshops on 'Strategic Social Navigation'. Final budget: $111,111,111.11. You've mastered the art of life planning!",
        choices: [
            { text: "🎯 Plan a new adventure", next: "restart" }
        ]
    },

    balanced_dining: {
        title: "⚖️ The Balanced Dining Approach",
        text: "You decide to find balance for future team dinners. You'll enjoy some team bonding during the main course while still prioritizing your personal preferences. Your Production Excellence team appreciates your thoughtful approach. The budget reaches $15,000,000.00 as you find harmony!",
        choices: [
            { text: "⚖️ Become the balance master", next: "balance_master_ending" }
        ]
    },

    balance_master_ending: {
        title: "⚖️ The Balance Master",
        text: "You become the team's balance master, helping others find harmony between personal preferences and team dynamics. Your Production Excellence colleagues seek your advice on social navigation. Final budget: $88,888,888.88. You've mastered the art of social balance!",
        choices: [
            { text: "⚖️ Balance a new adventure", next: "restart" }
        ]
    },

    // Additional missing nodes for drinking storyline
    balanced_approach: {
        title: "🎯 The Balanced Approach",
        text: "You balance work excellence with social connections. You excel at your job while also finding ways to connect with your Production Excellence team outside of drinking. Your colleagues appreciate your well-rounded approach. The budget reaches $18,000,000.00 as you master social-professional balance!",
        choices: [
            { text: "🌟 Become the team's balance advocate", next: "balance_advocate_ending" }
        ]
    },

    balance_advocate_ending: {
        title: "🌟 The Balance Advocate",
        text: "You become known as the balance advocate at Shopify. You help others find harmony between work and social life without relying on alcohol. Your approach becomes a model for healthy workplace culture. Final budget: $150,000,000.00. You've revolutionized work-life balance!",
        choices: [
            { text: "⚖️ Balance a new adventure", next: "restart" }
        ]
    },

    culture_coordinator: {
        title: "🎮 The Culture Coordinator",
        text: "You become the official culture coordinator for your Production Excellence team. You organize game nights, movie marathons, and creative workshops. Your team's culture becomes legendary throughout the company. The budget reaches $22,000,000.00 as you build amazing team spirit!",
        choices: [
            { text: "🎪 Become the company's culture expert", next: "culture_expert_ending" }
        ]
    },

    culture_expert_ending: {
        title: "🎪 The Culture Expert",
        text: "You become Shopify's culture expert, helping teams across the company build amazing cultures without relying on alcohol. Your methods are studied and replicated. Final budget: $175,000,000.00. You've revolutionized workplace culture!",
        choices: [
            { text: "🎨 Create a new adventure", next: "restart" }
        ]
    },

    coffee_society: {
        title: "☕ The Coffee Appreciation Society",
        text: "You start a coffee appreciation society at Shopify. Your team bonds over artisanal coffee, brewing techniques, and caffeine-fueled conversations. Your society becomes more popular than happy hour! The budget reaches $16,000,000.00 as you create a coffee culture!",
        choices: [
            { text: "☕ Become the coffee culture master", next: "coffee_culture_ending" }
        ]
    },

    coffee_culture_ending: {
        title: "☕ The Coffee Culture Master",
        text: "You become the master of coffee culture at Shopify. Your coffee appreciation society spreads to other teams. You partner with local roasters and create the ultimate workplace coffee experience. Final budget: $125,000,000.00. You've caffeinated your way to success!",
        choices: [
            { text: "☕ Brew a new adventure", next: "restart" }
        ]
    },

    lunch_organizer: {
        title: "🍽️ The Epic Lunch Organizer",
        text: "You organize epic team lunches that become legendary. Your Production Excellence team experiences amazing restaurants, food trucks, and culinary adventures. Your lunch planning skills become renowned throughout the company. The budget reaches $14,000,000.00!",
        choices: [
            { text: "🍽️ Become the culinary team builder", next: "culinary_team_builder_ending" }
        ]
    },

    culinary_team_builder_ending: {
        title: "🍽️ The Culinary Team Builder",
        text: "You become the culinary team builder at Shopify. Your food-focused team building events create stronger bonds than any happy hour. You revolutionize team building through shared meals. Final budget: $200,000,000.00. You've proven that food builds better teams than drinks!",
        choices: [
            { text: "🍽️ Feast on a new adventure", next: "restart" }
        ]
    },

    learning_advocate: {
        title: "🧠 The Learning Advocate",
        text: "You become the team's learning advocate, organizing study groups, skill-sharing sessions, and knowledge exchanges. Your Production Excellence team becomes the most knowledgeable and skilled in the company. The budget reaches $30,000,000.00 as learning becomes your team's superpower!",
        choices: [
            { text: "📚 Become the knowledge master", next: "knowledge_master_ending" }
        ]
    },

    knowledge_master_ending: {
        title: "📚 The Knowledge Master",
        text: "You become the knowledge master at Shopify. Your learning-focused culture spreads throughout the company. You create a knowledge-sharing revolution that transforms how teams grow. Final budget: $300,000,000.00. You've proven that learning is the ultimate team activity!",
        choices: [
            { text: "🧠 Learn a new adventure", next: "restart" }
        ]
    },

    competence_leader: {
        title: "🔥 The Competence Leader",
        text: "You rise to leadership purely through competence. Your Production Excellence team respects your skills and knowledge. You become the youngest team lead through merit alone. At the celebration, they offer you alcohol, which you discover tastes disgusting! The budget reaches $40,000,000.00!",
        choices: [
            { text: "🤢 Admit alcohol is gross", next: "sober_leader_ending" },
            { text: "🎯 Suggest competence-based celebrations", next: "competence_celebration" }
        ]
    },

    competence_celebration: {
        title: "🎯 The Competence Celebration",
        text: "You suggest celebrating achievements through skill demonstrations, learning challenges, and knowledge sharing. Your Production Excellence team loves celebrating competence! The budget reaches $55,000,000.00 as you create a merit-based culture!",
        choices: [
            { text: "🏆 Become the competence culture leader", next: "competence_culture_ending" }
        ]
    },

    competence_culture_ending: {
        title: "🏆 The Competence Culture Leader",
        text: "You create a competence-based culture at Shopify where achievements are celebrated through skill and knowledge. Your approach spreads throughout the company. Final budget: $250,000,000.00. You've revolutionized how success is celebrated!",
        choices: [
            { text: "🏆 Achieve a new adventure", next: "restart" }
        ]
    },

    sober_mentor: {
        title: "🎯 The Sober Mentor",
        text: "You become a mentor for others who don't drink, helping them navigate team building and social situations. Your Production Excellence team appreciates your inclusive approach. You create a support network for non-drinkers. The budget reaches $20,000,000.00!",
        choices: [
            { text: "🌟 Become the inclusion champion", next: "inclusion_champion_ending" }
        ]
    },

    inclusion_champion_ending: {
        title: "🌟 The Inclusion Champion",
        text: "You become the inclusion champion at Shopify, ensuring everyone feels welcome regardless of their drinking preferences. Your inclusive culture becomes a model for other companies. Final budget: $180,000,000.00. You've championed true inclusion!",
        choices: [
            { text: "🌟 Include a new adventure", next: "restart" }
        ]
    },

    night_shift_leader: {
        title: "🦉 The Night Shift Leader",
        text: "You become the official night shift leader at Shopify. Your team operates when everyone else is recovering from happy hour. Your productivity during quiet hours becomes legendary. The budget reaches $35,000,000.00!",
        choices: [
            { text: "🌙 Become the after-hours emperor", next: "after_hours_emperor_ending" }
        ]
    },

    after_hours_emperor_ending: {
        title: "🌙 The After-Hours Emperor",
        text: "You become the emperor of after-hours productivity at Shopify. Your night team achieves more than the day team. You revolutionize work schedules and productivity patterns. Final budget: $400,000,000.00. You've mastered the night shift advantage!",
        choices: [
            { text: "🦉 Hoot into a new adventure", next: "restart" }
        ]
    },

    skill_promotion: {
        title: "⚡ The Skill-Based Promotion",
        text: "You get promoted to senior developer purely through skill demonstration. Your Production Excellence team recognizes your technical excellence. You become the youngest senior developer in company history. At the celebration, they offer you alcohol, which tastes terrible! The budget reaches $50,000,000.00!",
        choices: [
            { text: "🤢 Admit alcohol is disgusting", next: "sober_leader_ending" },
            { text: "🎯 Celebrate with skill challenges", next: "skill_celebration" }
        ]
    },

    skill_celebration: {
        title: "🎯 The Skill Celebration",
        text: "You suggest celebrating promotions with skill challenges, code reviews, and technical discussions. Your Production Excellence team loves celebrating expertise! The budget reaches $65,000,000.00 as you create a skill-focused culture!",
        choices: [
            { text: "⚡ Become the skill culture master", next: "skill_culture_ending" }
        ]
    },

    skill_culture_ending: {
        title: "⚡ The Skill Culture Master",
        text: "You create a skill-celebrating culture at Shopify where technical excellence is the ultimate achievement. Your approach transforms how the company values expertise. Final budget: $350,000,000.00. You've made skill the ultimate celebration!",
        choices: [
            { text: "⚡ Skill your way to a new adventure", next: "restart" }
        ]
    },

    // Additional missing nodes for dessert storyline
    sugar_productivity: {
        title: "🎯 The Sugar Productivity Boost",
        text: "You use the sugar energy from dessert to fuel incredible productivity. Your Production Excellence team is amazed as you complete tasks at superhuman speed. The glucose boost gives you laser focus! The budget reaches $12,345,678.90 as you become the productivity legend!",
        choices: [
            { text: "⚡ Become the sugar productivity expert", next: "sugar_productivity_ending" }
        ]
    },

    sugar_productivity_ending: {
        title: "⚡ The Sugar Productivity Expert",
        text: "You become the sugar productivity expert at Shopify. You teach others how to use strategic sugar intake for focused work sessions. Your methods revolutionize productivity culture. Final budget: $150,000,000.00. You've sweetened your way to success!",
        choices: [
            { text: "🍯 Sweeten a new adventure", next: "restart" }
        ]
    },

    dessert_science: {
        title: "🍯 The Dessert Science Research",
        text: "You dive deep into dessert science, researching optimal sugar timing, dessert combinations, and metabolic effects. Your Production Excellence team is fascinated by your scientific approach to sweets. The budget reaches $8,765,432.10 as you become the dessert researcher!",
        choices: [
            { text: "🔬 Become the dessert scientist", next: "dessert_scientist_ending" }
        ]
    },

    dessert_scientist_ending: {
        title: "🔬 The Dessert Scientist",
        text: "You become the dessert scientist at Shopify. Your research into optimal dessert consumption patterns helps the company optimize team celebration foods. Your scientific approach to sweets becomes legendary. Final budget: $200,000,000.00. You've proven that dessert is a science!",
        choices: [
            { text: "🔬 Experiment with a new adventure", next: "restart" }
        ]
    },

    sleep_consultant: {
        title: "😴 The Sleep Consultant",
        text: "You become the team's sleep consultant, teaching others how dessert timing affects sleep quality. Your Production Excellence colleagues sleep better thanks to your dessert-sleep wisdom. The budget reaches $6,543,210.98 as you master the art of sweet dreams!",
        choices: [
            { text: "😴 Become the sleep optimization expert", next: "sleep_expert_ending" }
        ]
    },

    sleep_expert_ending: {
        title: "😴 The Sleep Optimization Expert",
        text: "You become the sleep optimization expert at Shopify. Your dessert-sleep research helps the entire company improve their rest quality. Your methods spread to other organizations. Final budget: $175,000,000.00. You've dreamed your way to success!",
        choices: [
            { text: "😴 Dream of a new adventure", next: "restart" }
        ]
    },

    dessert_routine: {
        title: "🍰 The Perfect Dessert Routine",
        text: "You perfect your dessert-sleep routine, creating the optimal sequence of sweet consumption and rest. Your Production Excellence team is amazed by your systematic approach to happiness. The budget reaches $7,654,321.00 as you achieve dessert mastery!",
        choices: [
            { text: "🍰 Become the routine optimization guru", next: "routine_guru_ending" }
        ]
    },

    routine_guru_ending: {
        title: "🍰 The Routine Optimization Guru",
        text: "You become the routine optimization guru at Shopify. Your systematic approach to dessert and sleep helps others create perfect daily routines. Your methods revolutionize personal optimization. Final budget: $225,000,000.00. You've routined your way to greatness!",
        choices: [
            { text: "🔄 Optimize a new adventure", next: "restart" }
        ]
    },

    dinner_strategy_guide: {
        title: "📚 The Dinner Strategy Guide",
        text: "You document your perfect dinner strategy and create a comprehensive guide. Your Production Excellence team learns from your strategic approach to social dining. The guide becomes a company resource for optimizing team meals. The budget reaches $10,987,654.32!",
        choices: [
            { text: "📚 Become the strategic dining author", next: "strategic_dining_ending" }
        ]
    },

    strategic_dining_ending: {
        title: "📚 The Strategic Dining Author",
        text: "You become the strategic dining author at Shopify. Your guide to optimal social eating helps teams across the company navigate complex dining situations. Your book becomes a bestseller in corporate culture. Final budget: $300,000,000.00. You've written your way to wisdom!",
        choices: [
            { text: "📖 Author a new adventure", next: "restart" }
        ]
    },

    // Olakitan's Story - The Cool Success Path (4 Steps)
    olakitan_start: {
        title: "😎 Olakitan's Morning Excellence",
        text: "You're Olakitan, and you wake up naturally at the perfect time - no alarm needed. Your Production Excellence teammates have already sent you good morning messages and coffee invitations. Your phone shows 47 unread messages of people wanting to collaborate with you. The Developer Experience Budget jumps to $5,000,000.00 just because you're awake. Your meal budget? Unlimited - the company covers everything for you because you're that valuable.",
        choices: [
            { text: "😎 Stroll into the office with effortless confidence", next: "olakitan_office_success" }
        ]
    },

    olakitan_office_success: {
        title: "🌟 The Office Hero",
        text: "You arrive at the Shopify office and the entire team lights up. Your colleagues genuinely smile when they see you - not the fake corporate smile, but real joy. You effortlessly mentor the intern, lead the standup with natural charisma, and help solve everyone's blockers with creative solutions. The team's velocity increases 40% just from your presence. Your manager mentions you're up for a promotion, and HR wants to feature you in the company newsletter. The budget soars to $50,000,000.00 as your leadership transforms the team dynamic.",
        choices: [
            { text: "😎 Casually solve the company's biggest challenge", next: "olakitan_leadership" }
        ]
    },

    olakitan_leadership: {
        title: "🏆 The Natural Leader",
        text: "During lunch, you casually mention an elegant solution to a technical problem that's been plaguing the company for months. Your approach is so brilliant that the CTO asks you to present it to the executive team. Your presentation is flawless - the CEO personally thanks you and announces your promotion to Senior Technical Lead. Your Production Excellence teammates throw you a surprise celebration party. You use your new position to advocate for your teammates, securing promotions for three deserving colleagues and creating a more inclusive team culture. The budget reaches $250,000,000.00 as your success multiplies across the organization.",
        choices: [
            { text: "😎 Enjoy your well-deserved success", next: "olakitan_perfect_ending" }
        ]
    },

    olakitan_perfect_ending: {
        title: "🌟 Olakitan's Perfect Success",
        text: "You are Olakitan, and you've achieved everything you wanted. Your Production Excellence team genuinely loves working with you, your technical skills are respected company-wide, and your leadership has transformed the culture. You're successful, happy, and surrounded by people who appreciate you. You've achieved perfect work-life balance and become the person everyone aspires to be - successful, kind, and authentically yourself. Your work makes a real difference, and you go home each day feeling fulfilled. Final budget: $500,000,000.00. You've proven that being cool, kind, and competent is the ultimate combination. You're living your best life, and everyone knows it!",
        choices: [
            { text: "😎 Continue being amazing", next: "restart" }
        ]
    },

    hotdog_addiction: {
        title: "🌭💀 The Hot Dog Spiral",
        text: "You can't stop! Hot dog after hot dog disappears. Your life expectancy plummets as you consume 323 hot dogs in one sitting. That's 2,584 minutes (43.06 hours) off your life! The budget crashes to $0.47 as your productivity dies.",
        choices: [
            { text: "🦷 Brush teeth with toothpaste (it's covered by incidentals!)", next: "dental_recovery" },
            { text: "🍽️ Go to a restaurant and obsess over napkin folding", next: "napkin_obsession" },
            { text: "😵 Accept your hot dog fate", next: "hot_dog_ending" }
        ]
    },

    peanut_butter_start: {
        title: "🥜 The Artisanal Crisis",
        text: "You open your 'artisanal' peanut butter jar. As you spread it on toast, you realize this is just regular peanut butter with commitment issues. It costs $47 and the label says 'hand-crafted by machines.' The budget jumps to $2,100,000.00! Your meal budget is now exactly $0.83. You wonder if they even eat peanut butter in Brazil.",
        choices: [
            { text: "🤔 Ponder if crunchy almond butter is a thing", next: "almond_existential" },
            { text: "📸 Take a fugly Instagram photo of your toast", next: "social_media_path" },
            { text: "🏞️ Plan a trip to Oklahoma for Summit", next: "oklahoma_adventure" },
            { text: "🇧🇷 Research Brazilian peanut butter culture", next: "brazil_path" }
        ]
    },

    almond_existential: {
        title: "🤔 The Almond Identity Crisis",
        text: "You sit in contemplation. Is crunchy almond butter just nuts having an identity crisis? Are we all just nuts having identity crises? The philosophical weight crushes your soul. The budget fluctuates wildly between $3.17 and $8,765,432.10. You remember that someone once said Clojure is the path to enlightenment...",
        choices: [
            { text: "🧘 Achieve enlightenment", next: "enlightenment_ending" },
            { text: "🎮 Escape reality with walking simulators", next: "walking_sim_deep" },
            { text: "🌭 Stress-eat hot dogs", next: "stress_hotdog" },
            { text: "🧘 Seek true enlightenment through Clojure", next: "clojure_path" }
        ]
    },

    stress_hotdog: {
        title: "🌭😰 The Stress-Eating Spiral",
        text: "The existential weight of almond butter philosophy drives you to stress-eat hot dogs. Each bite takes 8 minutes but relieves infinite anxiety. You eat 17 hot dogs (136 minutes lost) while contemplating nut identity. The budget crashes to $13.37.",
        choices: [
            { text: "🧘 Find peace through meditation", next: "stressed_enlightenment" },
            { text: "🌭 Accept the hot dog lifestyle", next: "hotdog_addiction" },
            { text: "🤔 Return to nut philosophy", next: "nut_philosopher" }
        ]
    },

    stressed_enlightenment: {
        title: "🧘💫 The Stressed Enlightenment",
        text: "Through stress-eating hot dogs, you achieve a unique form of enlightenment. You understand that anxiety and mortality are one. The budget mysteriously jumps to $1,111,111.11 as you become the Stress-Eating Buddha.",
        choices: [
            { text: "🧘 Teach others the way of anxious enlightenment", next: "stress_guru_ending" }
        ]
    },

    nut_philosopher: {
        title: "🥜🎓 The Nut Philosopher",
        text: "You return to contemplating nuts with renewed vigor. Your thesis 'On the Crunchiness of Being' revolutionizes philosophy. The budget climbs to $77,777,777.77 as academia embraces nut-based existentialism.",
        choices: [
            { text: "🥜 Become the Nut Philosophy Professor", next: "nut_professor_ending" }
        ]
    },

    stress_guru_ending: {
        title: "🧘🌭 The Stress-Eating Guru",
        text: "You establish the Stress-Eating Enlightenment Academy. Students learn to find peace through anxiety-induced hot dog consumption. Final budget: $11,111,111.11. You've mastered the art of anxious enlightenment!",
        choices: [
            { text: "🧘 Achieve stressed nirvana", next: "restart" }
        ]
    },

    nut_professor_ending: {
        title: "🥜📚 The Nut Philosophy Professor",
        text: "You become the world's leading expert on nut-based existentialism. Your course 'Crunchy vs. Creamy: A Philosophical Divide' has a 5-year waiting list. Final budget: $89,999,999.99. You've proven that nuts are the meaning of life!",
        choices: [
            { text: "🥜 Contemplate a new adventure", next: "restart" }
        ]
    },

    traffic_start: {
        title: "🚗 The Toronto Traffic Revelation",
        text: "You check the traffic app. It's 2:37am - the ONLY time Toronto traffic is bearable! This is your moment of power. You could rule the roads! The budget soars to $4,200,000.00 as you realize the value of this knowledge.",
        choices: [
            { text: "🏃 Become a professional 2:37am Uber driver", next: "uber_empire" },
            { text: "📚 Write a book about optimal traffic timing", next: "traffic_guru" },
            { text: "🤫 Keep this secret forever", next: "secret_keeper" }
        ]
    },

    traffic_guru: {
        title: "📚🚗 The Traffic Timing Guru",
        text: "You write 'The 2:37am Principle: Mastering Toronto Traffic'. It becomes a bestseller! Torontonians worship you as the Traffic Prophet. The budget climbs to $23,700,000.00!",
        choices: [
            { text: "📚 Become the Traffic Time Management Expert", next: "traffic_expert_ending" },
            { text: "🚗 Expand to other cities", next: "global_traffic_guru" }
        ]
    },

    secret_keeper: {
        title: "🤫💎 The Secret Keeper",
        text: "You keep the 2:37am secret to yourself, becoming Toronto's most mysterious figure. People wonder how you always avoid traffic. The budget mysteriously grows to $23,700,237.00 as you profit from the knowledge without sharing it.",
        choices: [
            { text: "🤫 Become the Traffic Illuminati", next: "traffic_illuminati_ending" },
            { text: "🚗 Use the secret for rideshare domination", next: "uber_empire" }
        ]
    },

    traffic_expert_ending: {
        title: "📚🚗 The Traffic Time Management Expert",
        text: "You become the world's leading expert on traffic timing. Cities hire you to solve their traffic problems. Final budget: $237,000,000.00. You've mastered the art of temporal road management!",
        choices: [
            { text: "🚗 Navigate to a new adventure", next: "restart" }
        ]
    },

    global_traffic_guru: {
        title: "🌍🚗 The Global Traffic Guru",
        text: "You discover the optimal traffic times for every major city. Your 'Global Traffic Timing' app makes billions. The budget reaches $2,370,000,000.00! You're the Traffic Time Lord of Earth!",
        choices: [
            { text: "🌍 Rule the roads of a new adventure", next: "restart" }
        ]
    },

    traffic_illuminati_ending: {
        title: "🤫👁️ The Traffic Illuminati Master",
        text: "You establish a secret society of traffic knowledge. Members pay millions to learn the hidden times. Final budget: $237,237,237.00. You control the secret flow of urban transportation!",
        choices: [
            { text: "👁️ Illuminate a new adventure", next: "restart" }
        ]
    },

    walking_sim_start: {
        title: "🎮 The Walking Simulator Revolution",
        text: "You boot up 'Suburban Sidewalk Simulator 2024'. As you virtually walk down a digital street, you realize this is the hot new game genre. You're ahead of the curve! The budget climbs to $3,456,789.00. You need to use the CLI to install more walking simulator mods, but you pronounce it 'Kly' and your teammates judge you.",
        choices: [
            { text: "💡 Develop your own walking simulator", next: "game_dev_success" },
            { text: "🎪 Create a walking simulator about Oklahoma Summit", next: "oklahoma_sim" },
            { text: "🌭 Take a hot dog break", next: "gaming_hotdog" },
            { text: "💻 Start a mission to make people say 'Kly' instead of 'C-L-I'", next: "cli_mission" },
            { text: "📺 Watch '28 Days Later' on TV instead", next: "movie_distraction" }
        ]
    },

    healthy_choice: {
        title: "🥗 The Healthy Path",
        text: "You resist the hot dog's call and grab a salad instead. Your life span remains intact, but your soul feels empty. The budget stabilizes at $2,500,000.00 as you make responsible choices.",
        choices: [
            { text: "🦷 Celebrate with toothpaste (covered by incidentals)", next: "dental_celebration" },
            { text: "🎮 Reward yourself with walking simulators", next: "walking_sim_reward" },
            { text: "📸 Take a beautiful salad photo", next: "healthy_influencer" }
        ]
    },

    dental_celebration: {
        title: "🦷🎉 The Dental Celebration",
        text: "You celebrate healthy choices by brushing your teeth with premium toothpaste. The word 'dental' in incidental feels like a cosmic joke. The budget rises to $4,444,444.44 as you discover the secret of dental wordplay!",
        choices: [
            { text: "🦷 Become a dental wordplay expert", next: "dental_wordplay_guru" },
            { text: "🎮 Use clean teeth for walking simulator success", next: "clean_teeth_gaming" }
        ]
    },

    walking_sim_reward: {
        title: "🎮🥗 The Healthy Gaming Reward",
        text: "You reward your healthy eating with guilt-free walking simulator time. The irony is delicious - you're virtually walking because you chose not to shorten your life. The budget hits $6,789,012.34!",
        choices: [
            { text: "🎮 Develop the world's healthiest walking simulator", next: "healthy_walking_sim" },
            { text: "🥗 Start a healthy gaming movement", next: "healthy_gaming_guru" }
        ]
    },

    healthy_influencer: {
        title: "📸🥗 The Healthy Food Influencer",
        text: "Your beautiful salad photo goes viral for being genuinely healthy instead of performatively perfect. You start an anti-fugly, pro-health food movement. The budget soars to $22,222,222.22!",
        choices: [
            { text: "📸 Revolutionize food photography", next: "healthy_photo_empire" },
            { text: "🥗 Become the health food mogul", next: "health_mogul_ending" }
        ]
    },

    dental_recovery: {
        title: "🦷 The Toothpaste Revelation",
        text: "You brush your teeth vigorously, noticing 'dental' is indeed in the word incidental. This cosmic connection heals your hot dog wounds. The budget mysteriously rises to $7,777,777.00!",
        choices: [
            { text: "🦷 Become a dental philosopher", next: "dental_guru" },
            { text: "🍽️ Test more restaurants for napkin folding", next: "napkin_science" },
            { text: "🌭 Eat hot dogs but brush after each one", next: "balanced_lifestyle" }
        ]
    },

    social_media_path: {
        title: "📸 The Fugly Photo Empire",
        text: "Your deliberately ugly toast photo goes viral! People love authentic, unfiltered content. You start a movement against perfect food photography. The budget rockets to $12,000,000.00!",
        choices: [
            { text: "📸 Become the Fugly Food Influencer", next: "fugly_influencer_ending" },
            { text: "🏞️ Take fugly photos of Oklahoma", next: "oklahoma_photographer" },
            { text: "🎮 Create a fugly walking simulator", next: "fugly_game_dev" }
        ]
    },

    fugly_influencer_ending: {
        title: "📸💰 The Fugly Food Influencer Empire",
        text: "You revolutionize social media by making imperfection profitable. Your 'Fugly Food Friday' posts earn millions. Final budget: $45,678,901.23. You've made ugly beautiful and authentic wealthy!",
        choices: [
            { text: "📸 Photograph a new adventure", next: "restart" }
        ]
    },

    oklahoma_photographer: {
        title: "🏞️📸 The Oklahoma Photographer",
        text: "You take deliberately fugly photos of Oklahoma's surprising beauty. The contrast creates art! Your 'Fugly Oklahoma' series wins the Pulitzer Prize. The budget hits $31,415,926.54!",
        choices: [
            { text: "🏞️ Become the Fugly Travel Photographer", next: "fugly_travel_ending" },
            { text: "🎮 Create Oklahoma walking simulators", next: "oklahoma_sim" }
        ]
    },

    fugly_game_dev: {
        title: "🎮📸 The Fugly Game Developer",
        text: "You create 'Fugly Walking Simulator' with intentionally bad graphics and authentic experiences. It becomes a masterpiece of anti-beauty! The budget reaches $67,890,123.45!",
        choices: [
            { text: "🎮 Master the art of fugly gaming", next: "fugly_gaming_ending" }
        ]
    },

    fugly_travel_ending: {
        title: "📸🌍 The Fugly Travel Photography Master",
        text: "You travel the world taking deliberately imperfect photos of beautiful places. Your authentic approach revolutionizes travel photography. Final budget: $78,901,234.56. Beauty is in the eye of the fugly beholder!",
        choices: [
            { text: "📸 Capture a new adventure", next: "restart" }
        ]
    },

    fugly_gaming_ending: {
        title: "🎮👑 The Fugly Gaming Revolutionary",
        text: "You establish the Fugly Gaming Movement. Players embrace imperfection and authentic experiences over polished graphics. Final budget: $123,456,789.01. You've made ugly gaming the new beautiful!",
        choices: [
            { text: "🎮 Debug a new adventure", next: "restart" }
        ]
    },

    game_dev_success: {
        title: "🎮💰 The Walking Simulator Empire",
        text: "Your walking simulator 'Pavement Paradise' becomes a global phenomenon! People pay $60 to virtually walk. You revolutionize gaming by making it boring. The Developer Experience Budget reaches $50,000,000.00!",
        choices: [
            { text: "🎉 Retire as a walking simulator mogul", next: "mogul_ending" }
        ]
    },

    uber_empire: {
        title: "🚗👑 The 2:37am Empire",
        text: "You become Toronto's most successful 2:37am driver. Your exclusive knowledge of traffic-free times makes you legendary. Celebrities book you months in advance. The budget hits $25,000,000.00!",
        choices: [
            { text: "🏆 Become the Traffic Time Lord", next: "traffic_lord_ending" }
        ]
    },

    oklahoma_adventure: {
        title: "🏞️🎪 The Oklahoma Summit Saga",
        text: "You actually go to Oklahoma for Summit. It's... surprisingly nice? The cornfields are majestic. You discover Oklahoma is secretly the tech hub of America. The budget hits $15,000,000.00!",
        choices: [
            { text: "🌾 Become the Oklahoma Tech Pioneer", next: "oklahoma_ending" },
            { text: "🏞️ Start an Oklahoma tourism company", next: "tourism_ending" }
        ]
    },

    hot_dog_ending: {
        title: "🌭💀 The Hot Dog Hermit",
        text: "You become a cautionary tale. Children whisper about the developer who ate so many hot dogs they aged 43 years in one day. Your budget is $0.00 but your hot dog collection is worth thousands. Worth it?",
        choices: [
            { text: "🌭 No regrets, hot dogs forever", next: "restart" }
        ]
    },

    napkin_obsession: {
        title: "🍽️🤪 The Napkin Detective",
        text: "You spend your life going to restaurants and timing bathroom breaks to see if they fold your napkin. You become known as 'The Napkin Whisperer.' Budget: $127.83. Napkin folding knowledge: Priceless.",
        choices: [
            { text: "🕵️ Accept your napkin destiny", next: "restart" }
        ]
    },

    enlightenment_ending: {
        title: "🧘✨ The Almond Butter Buddha",
        text: "You achieve enlightenment through nut-based contemplation. You understand that crunchy almond butter is not a thing, it's a STATE OF MIND. The budget becomes irrelevant as you transcend material wealth. Inner peace: $∞",
        choices: [
            { text: "🌟 Ascend to a higher plane", next: "restart" }
        ]
    },

    mogul_ending: {
        title: "🎮👑 The Walking Simulator Mogul",
        text: "You've achieved the impossible: making virtual walking a billion-dollar industry. Your Developer Experience Budget is now $100,000,000.00! You're the most successful developer in history... of walking.",
        choices: [
            { text: "🎮 Start a new adventure", next: "restart" }
        ]
    },

    traffic_lord_ending: {
        title: "🚗⚡ The Traffic Time Lord",
        text: "You control the flow of time and traffic. At 2:37am, you are GOD of the highways. Your budget is $75,000,000.00 and you've solved Toronto's traffic problem. You're basically a superhero.",
        choices: [
            { text: "🌟 Begin a new timeline", next: "restart" }
        ]
    },

    math_path: {
        title: "🧮 The Life Calculator",
        text: "You calculate that 323 hot dogs × 8 minutes = 2,584 minutes = 43.06 hours of lost life. This math genius moment enlightens you! The budget jumps to $8,888,888.00 as you become a hot dog mathematician.",
        choices: [
            { text: "🧮 Become a professional life calculator", next: "mathematician_ending" },
            { text: "🌭 Eat hot dogs anyway (math can't stop you)", next: "rebellious_hotdog" }
        ]
    },

    mathematician_ending: {
        title: "🧮🏆 The Life Mathematics Guru",
        text: "You revolutionize the field of life-span mathematics! Your hot dog calculations become legendary. The budget reaches $99,999,999.00 as you publish 'The Mathematical Theory of Hot Dog Mortality'.",
        choices: [
            { text: "🧮 Calculate a new adventure", next: "restart" }
        ]
    },

    rebellious_hotdog: {
        title: "🌭😤 The Rebellious Hot Dog Consumer",
        text: "You eat hot dogs BECAUSE of the math! Your rebellious spirit inspires others to eat dangerous foods. The budget becomes $666,666.66 as you start a cult of mathematical food rebels.",
        choices: [
            { text: "🌭 Lead the rebellion to a new adventure", next: "restart" }
        ]
    },

    oklahoma_sim: {
        title: "🏞️🎮 The Oklahoma Walking Simulator",
        text: "You create 'Oklahoma Summit Walking Simulator' - a game where you virtually walk through corn fields to reach the premiere Summit destination. It becomes a cult classic! The budget hits $33,333,333.00 as Oklahomans embrace their digital representation.",
        choices: [
            { text: "🌾 Expand to other surprising destinations", next: "surprise_destinations" },
            { text: "🎮 Focus on pure walking simulator mastery", next: "walking_sim_deep" },
            { text: "🌭 Celebrate with stress-free hot dogs", next: "celebration_hotdog" }
        ]
    },

    gaming_hotdog: {
        title: "🌭🎮 The Gaming Hot Dog Break",
        text: "You pause your walking simulator to eat a hot dog. The irony is palpable - you're eating life-shortening food while playing a game about walking. The budget drops to $1,234,567.89 as you contemplate this paradox.",
        choices: [
            { text: "🎮 Return to walking simulator enlightened", next: "walking_sim_deep" },
            { text: "🌭 Embrace the hot dog lifestyle", next: "hotdog_addiction" },
            { text: "🧮 Calculate the exact irony coefficient", next: "irony_math" }
        ]
    },

    walking_sim_deep: {
        title: "🎮🧘 The Walking Simulator Zen Master",
        text: "You achieve enlightenment through virtual walking. Your games become philosophical journeys about the nature of movement and existence. The budget stabilizes at $7,654,321.00 as you become the Zen master of digital pedestrianism.",
        choices: [
            { text: "🧘 Achieve digital nirvana", next: "digital_enlightenment" },
            { text: "🎮 Teach others the way of virtual walking", next: "walking_guru" }
        ]
    },

    surprise_destinations: {
        title: "🗺️✨ The Surprise Destinations Empire",
        text: "You revolutionize tourism by creating walking simulators for the world's most unexpected destinations. 'Delaware Corn Maze Simulator' and 'Nebraska Wheat Field Adventure' become blockbusters! The budget soars to $87,654,321.00!",
        choices: [
            { text: "🏆 Become the Unexpected Tourism Mogul", next: "tourism_mogul_ending" }
        ]
    },

    celebration_hotdog: {
        title: "🌭🎉 The Celebration Hot Dog",
        text: "You eat a congratulatory hot dog, losing exactly 8 minutes of life span. But it tastes like victory! The budget holds steady at $25,000,000.00 as you balance success with questionable food choices.",
        choices: [
            { text: "🎮 Return to game development", next: "game_dev_success" },
            { text: "🌭 Make hot dogs part of your brand", next: "branded_hotdog" }
        ]
    },

    irony_math: {
        title: "🧮🤔 The Irony Coefficient Calculator",
        text: "You calculate that playing walking games while eating life-shortening food creates an irony coefficient of 42.69. This mathematical breakthrough makes you famous! The budget jumps to $42,690,000.00!",
        choices: [
            { text: "🧮 Become the Irony Mathematics Professor", next: "irony_professor_ending" }
        ]
    },

    digital_enlightenment: {
        title: "🧘💻 The Digital Nirvana",
        text: "You transcend physical reality through virtual walking. Your consciousness exists purely in walking simulators. The budget becomes irrelevant as you achieve digital immortality while everyone else walks normally.",
        choices: [
            { text: "👻 Exist as a walking simulator ghost", next: "restart" }
        ]
    },

    walking_guru: {
        title: "🎮🧘 The Walking Simulator Guru",
        text: "You establish the Walking Simulator Academy. Students pay thousands to learn the art of virtual pedestrianism. The budget reaches $55,555,555.00 as you become the world's first walking simulator sensei.",
        choices: [
            { text: "🏆 Achieve walking simulator mastery", next: "restart" }
        ]
    },

    tourism_mogul_ending: {
        title: "🗺️👑 The Unexpected Tourism Mogul",
        text: "You've made boring places exciting through virtual walking! Your empire of unexpected destination simulators spans the globe. Final budget: $150,000,000.00. You're the king of digital tourism!",
        choices: [
            { text: "🌍 Explore new digital worlds", next: "restart" }
        ]
    },

    branded_hotdog: {
        title: "🌭🎮 The Gaming Hot Dog Brand",
        text: "You create 'Gamer Dogs' - hot dogs that cost exactly 8 minutes of life span but boost your walking simulator skills. The budget hits $88,888,888.00 as gamers embrace mortality for performance!",
        choices: [
            { text: "🌭 Accept your hot dog destiny", next: "restart" }
        ]
    },

    irony_professor_ending: {
        title: "🧮🎓 The Irony Mathematics Professor",
        text: "You become the world's leading expert on situational irony mathematics. Your formula for calculating life paradoxes revolutionizes philosophy. Final budget: $98,765,432.10. You've mathematically proven life is absurd!",
        choices: [
            { text: "🧮 Calculate a new adventure", next: "restart" }
        ]
    },

    dental_wordplay_guru: {
        title: "🦷📚 The Dental Wordplay Guru",
        text: "You become the world's leading expert on dental wordplay. Your book 'Incidental Dental: A Linguistic Journey' becomes a bestseller. Final budget: $44,444,444.44. You've mastered the art of tooth-related linguistics!",
        choices: [
            { text: "🦷 Brush up on a new adventure", next: "restart" }
        ]
    },

    clean_teeth_gaming: {
        title: "🦷🎮 The Clean Teeth Gaming Champion",
        text: "You discover that clean teeth improve gaming performance. Your 'Dental Gaming Academy' teaches optimal oral hygiene for esports. Final budget: $66,666,666.66. You've proven that dental health equals gaming wealth!",
        choices: [
            { text: "🦷 Floss your way to a new adventure", next: "restart" }
        ]
    },

    healthy_walking_sim: {
        title: "🎮🥗 The Healthy Walking Simulator Master",
        text: "You create 'Salad Walking Simulator' - a game that promotes both virtual exercise and healthy eating. It becomes the first health-conscious gaming franchise. Final budget: $67,890,123.45. You've made healthy gaming profitable!",
        choices: [
            { text: "🥗 Walk into a new adventure", next: "restart" }
        ]
    },

    healthy_gaming_guru: {
        title: "🎮💪 The Healthy Gaming Guru",
        text: "You revolutionize gaming by making health a core mechanic. Your 'Wellness Gaming Movement' changes the industry forever. Final budget: $123,456,789.01. You've leveled up both gaming and health!",
        choices: [
            { text: "💪 Game on to a new adventure", next: "restart" }
        ]
    },

    healthy_photo_empire: {
        title: "📸🥗 The Healthy Photo Empire",
        text: "You build a media empire around authentic, healthy food photography. Your 'Real Food, Real Health' movement inspires millions. Final budget: $222,222,222.22. You've made healthy beautiful!",
        choices: [
            { text: "📸 Capture a new adventure", next: "restart" }
        ]
    },

    health_mogul_ending: {
        title: "🥗👑 The Health Food Mogul",
        text: "You become the world's most successful health food entrepreneur. Your empire spans restaurants, apps, and lifestyle brands. Final budget: $444,444,444.44. You've made health the ultimate wealth!",
        choices: [
            { text: "👑 Rule over a new adventure", next: "restart" }
        ]
    },

    michelin_mystery: {
        title: "🍽️🕵️ The Michelin Mystery",
        text: "You investigate your teammate's casual demeanor, but notice they always know which restaurants have the best 'simple pasta.' After stalking their social media, you discover they've been to 47 Michelin-starred restaurants this month while claiming to 'just grab whatever.' The meal budget shows: OVERBUDGET BY $73,420.69.",
        choices: [
            { text: "🕵️ Confront them about their secret restaurant life", next: "michelin_confrontation" },
            { text: "🍽️ Try to keep up with their restaurant habits", next: "michelin_competition" },
            { text: "💰 Investigate how they afford this lifestyle", next: "michelin_economics" },
            { text: "🧘 Seek enlightenment through Clojure instead", next: "clojure_path" }
        ]
    },

    michelin_confrontation: {
        title: "🍽️😤 The Michelin Confrontation",
        text: "You confront your teammate: 'I know you're not just casually eating at Le Bernardin!' They sheepishly admit they've been pretending to be casual while spending $2,000+ per meal. They offer to teach you their ways. The meal budget explodes to -$999,999.99 but the experience budget soars!",
        choices: [
            { text: "🍽️ Become their Michelin apprentice", next: "michelin_apprentice" },
            { text: "💸 Panic about the meal budget", next: "budget_panic" },
            { text: "🇧🇷 Suggest they try Brazilian cuisine (no peanut butter)", next: "brazil_path" }
        ]
    },

    michelin_competition: {
        title: "🍽️🏃 The Michelin Competition",
        text: "You try to match their restaurant game, but your meal budget of $47.83 gets you a single breadstick at a 3-star restaurant. The waiter laughs at your credit card decline. You're escorted out while your teammate casually orders the $300 tasting menu. Budget: -$47.83. Dignity: $0.00.",
        choices: [
            { text: "😭 Accept defeat and eat ramen", next: "ramen_humility" },
            { text: "💡 Learn to pronounce CLI correctly for job interviews", next: "cli_mission" },
            { text: "🧘 Seek enlightenment through Clojure", next: "clojure_path" }
        ]
    },

    michelin_economics: {
        title: "💰🕵️ The Michelin Economics Investigation",
        text: "You discover your teammate's secret: they've been writing a food blog called 'Casually Michelin' where they pretend expensive restaurants are 'just okay.' The irony makes millions! They're actually a secret food influencer worth $50M. The meal budget becomes irrelevant when you have that much money.",
        choices: [
            { text: "📝 Start your own fake-casual food blog", next: "fake_casual_blogger" },
            { text: "🤝 Become their business partner", next: "michelin_partnership" },
            { text: "🧘 Realize money doesn't matter, embrace Clojure", next: "clojure_enlightenment" }
        ]
    },

    clojure_path: {
        title: "🧘 The Path to Clojure Enlightenment",
        text: "You decide to abandon material concerns and embrace the pure functional programming language Clojure. As you write your first (defn), a warm feeling spreads through your consciousness. The parentheses align with the universe. The Developer Experience Budget begins to glow with an otherworldly light.",
        choices: [
            { text: "🧘 Continue deeper into Clojure enlightenment", next: "clojure_enlightenment" },
            { text: "📚 Study the ancient Clojure texts", next: "clojure_scholar" },
            { text: "🌍 Spread the Clojure gospel", next: "clojure_missionary" }
        ]
    },

    clojure_enlightenment: {
        title: "🧘✨ The Clojure Enlightenment",
        text: "You achieve true enlightenment through Clojure. Your code becomes poetry, your bugs become features, your life becomes perfect. You attract the perfect partner who also loves functional programming. Your health improves as you eat only organic, locally-sourced s-expressions. Final budget: $∞. You have transcended monetary concerns.",
        choices: [
            { text: "✨ Ascend to the functional programming dimension", next: "restart" }
        ]
    },

    clojure_scholar: {
        title: "📚🧘 The Clojure Scholar",
        text: "You become a master of Clojure's ancient wisdom. Your book 'Parentheses and the Meaning of Life' becomes a bestseller. You achieve perfect health through immutable data structures, unlimited wealth through lazy evaluation, and find your soulmate at a Clojure conference. Final budget: $777,777,777.77. Life is perfect.",
        choices: [
            { text: "📚 Write the next chapter of a new adventure", next: "restart" }
        ]
    },

    clojure_missionary: {
        title: "🌍🧘 The Clojure Missionary",
        text: "You travel the world spreading the Clojure gospel. Everywhere you go, people find health, wealth, and love through functional programming. You establish the global Clojure wellness movement. Your body becomes immortal, your relationships perfect, your bank account infinite. Final budget: Enlightenment achieved.",
        choices: [
            { text: "🌍 Enlighten a new adventure", next: "restart" }
        ]
    },

    cli_mission: {
        title: "💻😤 The CLI Pronunciation Mission",
        text: "You become obsessed with convincing people to pronounce CLI as 'Kly' instead of 'C-L-I.' You create presentations, write blog posts, and corner colleagues at coffee machines. Everyone thinks you're insane. The mission is doomed to fail, but you persist. Budget: $1,337.00 (spent on failed advocacy materials).",
        choices: [
            { text: "😤 Double down on the CLI mission", next: "cli_obsession" },
            { text: "😭 Accept defeat and say 'C-L-I' like everyone else", next: "cli_surrender" },
            { text: "🧘 Find peace through Clojure instead", next: "clojure_path" }
        ]
    },

    cli_obsession: {
        title: "💻🤪 The CLI Obsession",
        text: "You become the infamous 'Kly Person' at work. People avoid you in hallways. You start a failed podcast called 'It's Pronounced Kly, People!' You die alone on this hill, but at least you're consistent. The budget drops to $13.37 as your obsession ruins your career.",
        choices: [
            { text: "😤 Die on the CLI hill with dignity", next: "cli_martyr_ending" }
        ]
    },

    cli_surrender: {
        title: "💻😔 The CLI Surrender",
        text: "You give up your noble mission and start saying 'C-L-I' like everyone else. Your soul dies a little, but you're invited to parties again. The budget recovers to $67,890.12 as you rejoin society. Sometimes conformity is the price of belonging.",
        choices: [
            { text: "😔 Blend into society with your crushed dreams", next: "conformity_ending" }
        ]
    },

    brazil_path: {
        title: "🇧🇷 The Brazilian Adventure",
        text: "You suggest Brazilian cuisine to your teammate, but they're confused: 'But they don't eat peanut butter in Brazil!' This revelation shocks you. You realize the entire world doesn't revolve around American peanut butter preferences. Your worldview expands dramatically. Budget: $1,000,000.00 (from cultural enlightenment).",
        choices: [
            { text: "🇧🇷 Explore global food cultures", next: "cultural_explorer" },
            { text: "🥜 Become a peanut butter missionary to Brazil", next: "peanut_butter_missionary" },
            { text: "🧘 Realize cultural differences through Clojure", next: "clojure_cultural_path" }
        ]
    },

    cultural_explorer: {
        title: "🌍🍽️ The Cultural Food Explorer",
        text: "You become obsessed with discovering what each country does instead of eating peanut butter. Your 'Global Anti-Peanut Butter Food Map' goes viral. You become a renowned food anthropologist. Final budget: $12,345,678.90. You've discovered the world beyond peanut butter!",
        choices: [
            { text: "🌍 Explore the foods of a new adventure", next: "restart" }
        ]
    },

    peanut_butter_missionary: {
        title: "🥜🇧🇷 The Peanut Butter Missionary",
        text: "You travel to Brazil with 500 jars of peanut butter, determined to convert them. Brazilians are polite but confused. You become known as 'o maluco da pasta de amendoim' (the peanut butter crazy person). Your mission fails spectacularly but you make friends. Budget: $50,000.00 (from selling your story to Netflix).",
        choices: [
            { text: "🇧🇷 Accept your new identity as the peanut butter weirdo", next: "peanut_butter_weirdo_ending" }
        ]
    },

    clojure_cultural_path: {
        title: "🧘🌍 The Clojure Cultural Enlightenment",
        text: "Through Clojure, you realize that cultural differences are just different implementations of the same human interface. Your enlightenment transcends food preferences. You achieve perfect understanding of all cultures, perfect health, unlimited wealth, and marry a beautiful Brazilian software engineer who also loves Clojure. Final budget: ∞ + cultural wisdom.",
        choices: [
            { text: "🌍 Transcend cultural boundaries in a new adventure", next: "restart" }
        ]
    },

    cli_martyr_ending: {
        title: "💻⚰️ The CLI Martyr",
        text: "You die on the CLI pronunciation hill, alone but consistent. Your gravestone reads 'Here lies someone who knew it's pronounced Kly.' Decades later, nobody remembers your struggle. Final budget: $0.00. Final dignity: Questionable but unwavering.",
        choices: [
            { text: "⚰️ Rest in peace, CLI warrior", next: "restart" }
        ]
    },

    conformity_ending: {
        title: "😔🐑 The Conformity Ending",
        text: "You blend into society, saying 'C-L-I' like everyone else. Your dreams of linguistic revolution are crushed, but you're invited to parties. You live a normal, unremarkable life. Final budget: $67,890.12. Final uniqueness: Completely erased.",
        choices: [
            { text: "🐑 Conform to a new adventure", next: "restart" }
        ]
    },

    peanut_butter_weirdo_ending: {
        title: "🥜🤪 The Peanut Butter Weirdo",
        text: "You embrace your identity as Brazil's only peanut butter advocate. You become a beloved local eccentric, teaching English and peanut butter appreciation. Your Netflix documentary 'O Maluco da Pasta' wins an Emmy. Final budget: $2,000,000.00. You're weird but happy.",
        choices: [
            { text: "🥜 Spread the peanut butter message to a new adventure", next: "restart" }
        ]
    },

    michelin_apprentice: {
        title: "🍽️🎓 The Michelin Apprentice",
        text: "You become your teammate's apprentice in the art of casual fine dining. They teach you to casually order $500 wine while pretending it's 'just something from the corner store.' Your meal budget is forever destroyed but your sophistication is infinite. Final budget: -$2,000,000.00. Cultural capital: Priceless.",
        choices: [
            { text: "🍽️ Master the art of casual fine dining", next: "casual_fine_dining_master" }
        ]
    },

    budget_panic: {
        title: "💸😱 The Budget Panic",
        text: "You panic about going over the meal budget. You create 47 Excel spreadsheets to track every penny. Your anxiety about the $47.83 meal budget causes you to stress-eat $2,000 worth of hot dogs. The irony is delicious but expensive. Budget: -$1,952.17. Anxiety: Maximum.",
        choices: [
            { text: "📊 Become a budget anxiety consultant", next: "budget_anxiety_guru" },
            { text: "🌭 Embrace the hot dog stress-eating lifestyle", next: "stress_hotdog" }
        ]
    },

    ramen_humility: {
        title: "🍜😔 The Ramen Humility",
        text: "You accept your place in the food hierarchy and eat humble ramen. But your $0.50 ramen somehow tastes better than your teammate's $300 tasting menu because you earned it through humility. The meal budget is saved. Your dignity is restored. Budget: $47.33. Wisdom: Priceless.",
        choices: [
            { text: "🍜 Become the ramen philosopher", next: "ramen_philosopher" },
            { text: "🧘 Find enlightenment through Clojure and cheap noodles", next: "clojure_ramen_path" }
        ]
    },

    fake_casual_blogger: {
        title: "📝🍽️ The Fake Casual Blogger",
        text: "You start 'Accidentally Gourmet' where you pretend Michelin-starred restaurants are 'just okay.' Your fake-casual reviews go viral: 'Le Bernardin? Meh, the fish was wet. 3/10.' The irony makes you rich. Final budget: $25,000,000.00. Authenticity: Completely fake but profitable.",
        choices: [
            { text: "📝 Master the art of fake casual reviews", next: "fake_casual_empire" }
        ]
    },

    michelin_partnership: {
        title: "🤝🍽️ The Michelin Partnership",
        text: "You become business partners with your teammate. Together you create 'Casually Michelin' - a media empire built on pretending expensive food is normal. Your combined fake-casual energy makes billions. Final budget: $500,000,000.00. You've monetized casual deception.",
        choices: [
            { text: "🍽️ Rule the casual fine dining empire", next: "restart" }
        ]
    },

    casual_fine_dining_master: {
        title: "🍽️👑 The Casual Fine Dining Master",
        text: "You perfect the art of casual fine dining. You can now eat at The French Laundry while acting like it's McDonald's. Your book 'Acting Casual While Broke' becomes a bestseller. Final budget: -$5,000,000.00 in debt but infinite style points.",
        choices: [
            { text: "🍽️ Casually begin a new adventure", next: "restart" }
        ]
    },

    budget_anxiety_guru: {
        title: "💸🧘 The Budget Anxiety Guru",
        text: "You turn your budget anxiety into a business. Your course 'Panic About Pennies, Profit from Anxiety' helps others stress about money productively. Your anxiety makes you millions. Final budget: $47,000,000.00. You've monetized your neuroses.",
        choices: [
            { text: "💸 Anxiously start a new adventure", next: "restart" }
        ]
    },

    ramen_philosopher: {
        title: "🍜🧘 The Ramen Philosopher",
        text: "You become the world's leading expert on the philosophy of cheap noodles. Your thesis 'The Wisdom of Sodium: A Ramen Meditation' revolutionizes food philosophy. You achieve enlightenment through budget constraints. Final budget: $1,000,000.00. You've found wisdom in simplicity.",
        choices: [
            { text: "🍜 Slurp your way to a new adventure", next: "restart" }
        ]
    },

    clojure_ramen_path: {
        title: "🧘🍜 The Clojure Ramen Enlightenment",
        text: "You combine Clojure programming with ramen philosophy. Your code becomes as elegant as perfectly balanced noodles. You achieve perfect health through functional programming and sodium, unlimited wealth through lazy evaluation, and find love at a ramen shop. Final budget: $∞. You've transcended both hunger and bugs.",
        choices: [
            { text: "🍜 Code a new adventure", next: "restart" }
        ]
    },

    fake_casual_empire: {
        title: "📝💰 The Fake Casual Empire",
        text: "Your fake-casual restaurant reviews create a media empire. You write bestselling books, host TV shows, and make millions by pretending expensive food is mediocre. Your catchphrase 'It's just food' becomes iconic. Final budget: $100,000,000.00. You've mastered the art of profitable dishonesty.",
        choices: [
            { text: "📝 Write the story of a new adventure", next: "restart" }
        ]
    },

    // New joke story nodes
    sorting_chaos: {
        title: "📦 The Great Sorting Catastrophe",
        text: "You decide to organize your productivity by sorting thousands of things. Your desk items, code files, emails, Slack messages, digital photos, and even your teammates' priorities. You start with confidence, but halfway through you accidentally drop your laptop while carrying a stack of 3,000 printed emails. Everything scatters everywhere! Your Production Excellence teammates watch in horror as papers fly across the office. The budget fluctuates wildly between $100.00 and $25,000,000.00 as chaos reigns.",
        choices: [
            { text: "😱 Panic and give up on sorting forever", next: "sorting_defeat" },
            { text: "💪 Double down and sort everything properly", next: "sorting_mastery" },
            { text: "🎯 Turn the chaos into a team building exercise", next: "sorting_team_building" }
        ]
    },

    sorting_defeat: {
        title: "😱 The Sorting Defeat",
        text: "You give up on sorting and embrace chaos. Your Production Excellence teammates help you pick up the scattered papers, but you've learned that some things are better left unsorted. Your desk returns to its natural state of organized chaos. The budget settles at $2,222,222.22 as you find peace in disorder.",
        choices: [
            { text: "🧘 Find zen in the chaos", next: "chaos_enlightenment" },
            { text: "🎮 Distract yourself with walking simulators", next: "walking_sim_deep" }
        ]
    },

    sorting_mastery: {
        title: "💪 The Sorting Master",
        text: "You refuse to give up! You methodically sort everything, creating the most organized workspace in Production Excellence history. Your system is so efficient that other teams beg you to organize their spaces. The budget soars to $50,000,000.00 as your organizational skills become legendary throughout Shopify!",
        choices: [
            { text: "🏆 Become the Chief Organization Officer", next: "organization_emperor" },
            { text: "📚 Write a book about organizational systems", next: "sorting_guru_ending" }
        ]
    },

    sorting_team_building: {
        title: "🎯 The Sorting Team Building",
        text: "You turn the chaos into a team building exercise! Your Production Excellence teammates join you in sorting everything together. You create color-coded systems, implement group organization strategies, and bond over shared organizational goals. The budget reaches $33,333,333.33 as teamwork makes the dream work!",
        choices: [
            { text: "🤝 Become the team building coordinator", next: "team_building_master" },
            { text: "🎯 Perfect the art of chaos management", next: "chaos_manager_ending" }
        ]
    },

    chaos_enlightenment: {
        title: "🧘 The Chaos Enlightenment",
        text: "You achieve enlightenment by embracing chaos. Your Production Excellence team admires your zen-like acceptance of disorder. You become the master of organized chaos, helping others find peace in imperfection. Final budget: $77,777,777.77. You've learned that some things are perfect in their imperfection!",
        choices: [
            { text: "🧘 Achieve chaotic harmony", next: "restart" }
        ]
    },

    organization_emperor: {
        title: "🏆 The Organization Emperor",
        text: "You become Shopify's Chief Organization Officer. Your sorting systems revolutionize how the entire company operates. Productivity increases 300% thanks to your organizational mastery. Final budget: $200,000,000.00. You've sorted your way to supreme success!",
        choices: [
            { text: "📦 Organize a new adventure", next: "restart" }
        ]
    },

    sorting_guru_ending: {
        title: "📚 The Sorting Guru",
        text: "Your book 'The Art of Sorting Thousands of Things' becomes a bestseller. You become the world's leading expert on organizational systems and chaos management. Final budget: $150,000,000.00. You've turned scattered chaos into sorted success!",
        choices: [
            { text: "📚 Sort through a new adventure", next: "restart" }
        ]
    },

    team_building_master: {
        title: "🤝 The Team Building Master",
        text: "You become the master of team building through shared organizational challenges. Your Production Excellence team becomes the most cohesive unit at Shopify. Final budget: $100,000,000.00. You've built success through teamwork!",
        choices: [
            { text: "🤝 Build a new adventure", next: "restart" }
        ]
    },

    chaos_manager_ending: {
        title: "🎯 The Chaos Manager",
        text: "You perfect the art of managing chaos. Your ability to turn disorder into opportunity becomes legendary. Companies worldwide hire you to help them navigate organizational chaos. Final budget: $250,000,000.00. You've mastered the art of beautiful chaos!",
        choices: [
            { text: "🎯 Navigate to a new adventure", next: "restart" }
        ]
    },

    spider_encounter: {
        title: "🕷️ The Spider Situation",
        text: "You spot a spider in the corner of your home office. It's just sitting there, being a spider. Your Production Excellence teammates are on video call and can see your expression change. 'What's wrong?' they ask. You point at the spider. Everyone has an opinion about spiders. The truth is simple: spiders are bad. They're just bad. The budget stays at $1,337,420.69 but your comfort level plummets.",
        choices: [
            { text: "😱 Panic and abandon your office", next: "spider_panic" },
            { text: "💪 Be brave and remove the spider", next: "spider_hero" },
            { text: "🤝 Ask your teammates for spider advice", next: "spider_teamwork" },
            { text: "🧘 Accept the spider as your new office mate", next: "spider_coexistence" }
        ]
    },

    spider_panic: {
        title: "😱 The Spider Panic",
        text: "You abandon your office and work from a coffee shop for three weeks. Your Production Excellence teammates tease you about 'the spider incident.' You eventually return to find the spider has built a web empire across your entire workspace. The budget drops to $500,000.00 as you pay for expensive coffee shop wifi and spider removal services.",
        choices: [
            { text: "🏃 Move to a new apartment", next: "spider_refugee" },
            { text: "💡 Become a spider education advocate", next: "spider_educator" }
        ]
    },

    spider_hero: {
        title: "💪 The Spider 'Hero'",
        text: "You bravely capture the spider and relocate it outside. But as you release it, you realize it was pregnant. Hundreds of baby spiders scatter everywhere! Your Production Excellence teammates watch in horror as your 'heroic' act creates a spider invasion. The budget drops to $100,000.00 as the office requires professional fumigation.",
        choices: [
            { text: "😱 Panic about the spider babies", next: "spider_baby_panic" },
            { text: "🏃 Flee before anyone notices it was your fault", next: "spider_guilt_flee" }
        ]
    },

    spider_teamwork: {
        title: "🤝 The Spider Teamwork Disaster",
        text: "Your Production Excellence teammates rally to help you with the spider situation. They provide conflicting advice, argue about spider ethics, and three people show up at your apartment with different spider-catching equipment. The chaos scares the spider into hiding deeper in your walls. Now you hear scratching sounds at night and nobody wants to help anymore. The budget drops to $50,000.00 as you pay for failed spider removal attempts.",
        choices: [
            { text: "😰 Become paranoid about spider sounds", next: "spider_paranoia" },
            { text: "🤝 Lose faith in teamwork forever", next: "spider_teamwork_trauma" }
        ]
    },

    spider_coexistence: {
        title: "🧘 The Spider Coexistence Delusion",
        text: "You decide to coexist with the spider. You name it 'Webster' and convince yourself it's your office mascot. Your Production Excellence teammates think you've lost your mind when you start talking to it during video calls. Webster doesn't care about your existence and actually invites more spiders to move in. Your 'zen' approach becomes the office joke. The budget drops to $25,000.00 as your reputation for sanity plummets.",
        choices: [
            { text: "🕷️ Become the office crazy spider person", next: "spider_crazy_person" },
            { text: "🧘 Lose touch with reality through spider 'friendship'", next: "spider_delusion" }
        ]
    },

    spider_refugee: {
        title: "🏃 The Spider Refugee",
        text: "You move to a new apartment to escape the spider empire. Your Production Excellence teammates think you're insane for moving because of one spider. Your new place turns out to be in a basement with even more spiders. The moving costs, lost security deposit, and discovery of your new spider-infested home breaks your budget and your spirit. Final budget: $500.00. You've learned that you can't run from your arachnid fate!",
        choices: [
            { text: "🏠 Accept your spider-cursed existence", next: "restart" }
        ]
    },

    spider_educator: {
        title: "💡 The Spider Educator Failure",
        text: "You become an advocate for spider education, but your content is terrible and scientifically inaccurate. Your Production Excellence team is embarrassed by your spider obsession. Your educational videos get 3 views and 47 dislikes. You spend your life savings on spider facts nobody wants to hear. Final budget: $13.37. You've turned fear into expensive, useless knowledge!",
        choices: [
            { text: "🕷️ Fail to educate anyone about spiders", next: "restart" }
        ]
    },

    spider_baby_panic: {
        title: "😱 The Spider Baby Panic",
        text: "You panic about the hundreds of baby spiders you've unleashed. You spend the rest of your career checking every corner, under every desk, and in every coffee cup for tiny spiders. Your Production Excellence teammates avoid you because you've become the person who screams 'SPIDER!' at dust particles. Final budget: $666.00. You've become the office spider paranoid!",
        choices: [
            { text: "😱 Live in perpetual spider fear", next: "restart" }
        ]
    },

    spider_guilt_flee: {
        title: "🏃 The Spider Guilt Flee",
        text: "You flee before anyone notices it was your fault that the office is now crawling with baby spiders. But your guilt consumes you. You can't focus on work, knowing you caused the spider apocalypse. Every time someone mentions bugs, you have a panic attack. Your Production Excellence teammates eventually figure out it was you, and you become the office pariah. Final budget: $123.45. You've learned that guilt is expensive!",
        choices: [
            { text: "🏃 Run from your spider guilt forever", next: "restart" }
        ]
    },

    spider_paranoia: {
        title: "😰 The Spider Paranoia",
        text: "You become paranoid about spider sounds. Every creak, every rustle, every slight movement becomes a potential spider threat. You can't sleep, can't work, and can't function normally. Your Production Excellence teammates are concerned about your mental health, but you're too busy checking the walls for spiders to notice. Final budget: $1,337.00. You've become a spider-obsessed wreck!",
        choices: [
            { text: "😰 Descend into spider madness", next: "restart" }
        ]
    },

    spider_teamwork_trauma: {
        title: "🤝 The Spider Teamwork Trauma",
        text: "You lose faith in teamwork forever after the spider disaster. Your Production Excellence teammates' conflicting advice and chaotic 'help' has scarred you. You become a lone wolf who trusts no one, working in isolation and declining all collaborative projects. Your career stagnates as you avoid all team activities. Final budget: $4,321.00. You've learned that teamwork is overrated and spiders ruin everything!",
        choices: [
            { text: "🤝 Work alone forever", next: "restart" }
        ]
    },

    spider_crazy_person: {
        title: "🕷️ The Office Crazy Spider Person",
        text: "You become the office crazy spider person. Your colleagues avoid you because you constantly talk about your spider 'friends' and bring spider-themed decorations to work. You name all the spiders in the office and give them backstories. Your Production Excellence teammates request transfers to get away from you. Final budget: $237.00. You've become the spider-obsessed office weirdo!",
        choices: [
            { text: "🕷️ Embrace your spider crazy person status", next: "restart" }
        ]
    },

    spider_delusion: {
        title: "🧘 The Spider Delusion",
        text: "You lose touch with reality through your spider 'friendship.' You believe Webster talks to you and gives you life advice. Your Production Excellence teammates stage an intervention, but you're too busy having philosophical conversations with spiders to listen. You eventually get fired for talking to corners during important meetings. Final budget: $8.00. You've achieved spider-induced madness!",
        choices: [
            { text: "🧘 Live in spider delusion forever", next: "restart" }
        ]
    },

    movie_distraction: {
        title: "📺 The Movie Distraction",
        text: "You decide to watch '28 Days Later' on TV instead of playing walking simulators. The zombie movie draws you in completely. You lose track of time as you follow the post-apocalyptic survival story. Hours pass. Your Production Excellence teammates start messaging you about the daily standup. You realize you're going to be late to work! The budget fluctuates wildly as you face the movie/work dilemma.",
        choices: [
            { text: "😰 Panic and rush to work late", next: "movie_late_panic" },
            { text: "🎬 Finish the movie and embrace the consequences", next: "movie_commitment" },
            { text: "💡 Use the movie as inspiration for work", next: "movie_inspiration" },
            { text: "🤝 Invite your teammates to watch together", next: "movie_team_bonding" }
        ]
    },

    movie_late_panic: {
        title: "😰 The Late Movie Panic",
        text: "You rush to work 2 hours late, hair disheveled, still thinking about zombies. Your Production Excellence teammates ask what happened. You sheepishly explain you got distracted by '28 Days Later.' They laugh and admit they've all been there. You're flustered but the team understands. The budget drops to $1,000,000.00 as your productivity suffers from movie-induced stress.",
        choices: [
            { text: "😅 Laugh it off and get back to work", next: "movie_recovery" },
            { text: "🎬 Become the team's movie recommendation expert", next: "movie_curator" }
        ]
    },

    movie_commitment: {
        title: "🎬 The Movie Commitment",
        text: "You decide to finish the movie and deal with the consequences. '28 Days Later' proves to be incredibly inspiring! The themes of survival, leadership, and team dynamics give you amazing insights. You arrive at work 3 hours late but with revolutionary ideas about resilience and crisis management. Your Production Excellence teammates are initially annoyed but amazed by your creative problem-solving approaches. The budget soars to $28,000,000.00 as your movie-inspired leadership transforms the team!",
        choices: [
            { text: "🏆 Become the crisis management guru", next: "movie_crisis_guru" },
            { text: "🎬 Apply movie lessons to team building", next: "movie_team_building" }
        ]
    },

    movie_inspiration: {
        title: "💡 The Movie Inspiration",
        text: "You use '28 Days Later' as inspiration for work! The zombie apocalypse survival strategies translate perfectly to debugging production issues and managing technical crises. Your Production Excellence teammates are impressed by your creative problem-solving approach. You develop the 'Zombie Incident Response Protocol' that becomes legendary. The budget reaches $50,000,000.00 as your movie-inspired methodologies save the day!",
        choices: [
            { text: "🧟 Become the zombie protocol expert", next: "zombie_protocol_master" },
            { text: "🎬 Create movie-inspired development frameworks", next: "movie_framework_guru" }
        ]
    },

    movie_team_bonding: {
        title: "🤝 The Movie Team Bonding",
        text: "You invite your Production Excellence teammates to watch '28 Days Later' together during lunch. It becomes an amazing team bonding experience! You discuss survival strategies, leadership under pressure, and team dynamics. The movie watching sessions become a regular team tradition. The budget grows to $35,000,000.00 as team cohesion improves through shared movie experiences!",
        choices: [
            { text: "🎬 Become the team's movie night coordinator", next: "movie_coordinator" },
            { text: "🤝 Expand movie bonding company-wide", next: "movie_culture_builder" }
        ]
    },

    movie_recovery: {
        title: "😅 The Movie Recovery",
        text: "You laugh off your movie-induced lateness and get back to work. Your Production Excellence teammates appreciate your good humor about the situation. You become known as the person who 'got zombie-distracted' and it becomes a funny team story. The budget recovers to $5,000,000.00 as your ability to laugh at yourself builds team morale!",
        choices: [
            { text: "😅 Become the team's comic relief", next: "movie_comedian" },
            { text: "🎬 Balance movie time with work discipline", next: "movie_balance_master" }
        ]
    },

    movie_curator: {
        title: "🎬 The Movie Curator",
        text: "You become the team's movie recommendation expert. Your Production Excellence teammates trust your film suggestions completely. You create curated movie lists for different team needs: 'Debugging Motivation Movies,' 'Crisis Management Films,' and 'Team Building Cinema.' The budget reaches $25,000,000.00 as your movie expertise enhances team culture!",
        choices: [
            { text: "🎬 Become the chief movie culture officer", next: "movie_culture_officer" },
            { text: "📚 Write movie guides for developers", next: "movie_guide_author" }
        ]
    },

    movie_crisis_guru: {
        title: "🏆 The Crisis Management Guru",
        text: "Your movie-inspired crisis management skills become legendary. Your Production Excellence team handles incidents with zombie-apocalypse-level preparedness. You develop the 'Survival Cinema Leadership Framework' that transforms how the company handles crises. Final budget: $100,000,000.00. You've turned movie distraction into crisis mastery!",
        choices: [
            { text: "🏆 Lead through a new adventure", next: "restart" }
        ]
    },

    movie_team_building: {
        title: "🎬 The Movie Team Building Master",
        text: "You apply movie lessons to team building, creating the most cohesive Production Excellence team ever. Your film-inspired leadership techniques are adopted throughout Shopify. Final budget: $85,000,000.00. You've turned cinema into team excellence!",
        choices: [
            { text: "🎬 Direct a new adventure", next: "restart" }
        ]
    },

    zombie_protocol_master: {
        title: "🧟 The Zombie Protocol Master",
        text: "Your 'Zombie Incident Response Protocol' becomes the gold standard for handling production crises. Your Production Excellence team never panics during outages because they follow your survival-inspired methodologies. Final budget: $75,000,000.00. You've turned zombie movies into technical excellence!",
        choices: [
            { text: "🧟 Survive a new adventure", next: "restart" }
        ]
    },

    movie_framework_guru: {
        title: "🎬 The Movie Framework Guru",
        text: "You create movie-inspired development frameworks that revolutionize how teams approach technical challenges. Your 'Cinematic Development Methodology' becomes an industry standard. Final budget: $125,000,000.00. You've turned film into development philosophy!",
        choices: [
            { text: "🎬 Framework a new adventure", next: "restart" }
        ]
    },

    movie_coordinator: {
        title: "🎬 The Movie Coordinator",
        text: "You become the team's movie night coordinator, creating the most engaging team culture through shared cinema experiences. Your Production Excellence team's movie nights become legendary throughout the company. Final budget: $60,000,000.00. You've coordinated your way to cultural success!",
        choices: [
            { text: "🎬 Coordinate a new adventure", next: "restart" }
        ]
    },

    movie_culture_builder: {
        title: "🤝 The Movie Culture Builder",
        text: "You expand movie bonding company-wide, creating the most innovative team culture through shared film experiences. Your approach revolutionizes how Shopify builds team connections. Final budget: $150,000,000.00. You've built culture through cinema!",
        choices: [
            { text: "🎬 Build a new adventure", next: "restart" }
        ]
    },

    movie_comedian: {
        title: "😅 The Movie Comedian",
        text: "You become the team's comic relief, known for your ability to find humor in any situation. Your Production Excellence teammates appreciate your positive attitude and funny stories. Final budget: $30,000,000.00. You've laughed your way to team success!",
        choices: [
            { text: "😅 Laugh into a new adventure", next: "restart" }
        ]
    },

    movie_balance_master: {
        title: "🎬 The Movie Balance Master",
        text: "You master the art of balancing movie time with work discipline. Your Production Excellence team learns from your ability to enjoy entertainment while maintaining productivity. Final budget: $45,000,000.00. You've balanced your way to success!",
        choices: [
            { text: "⚖️ Balance a new adventure", next: "restart" }
        ]
    },

    movie_culture_officer: {
        title: "🎬 The Movie Culture Officer",
        text: "You become Shopify's Chief Movie Culture Officer, using film to build amazing team cultures throughout the company. Your movie-based team building becomes an industry model. Final budget: $200,000,000.00. You've officiated your way to cultural revolution!",
        choices: [
            { text: "🎬 Culture a new adventure", next: "restart" }
        ]
    },

    movie_guide_author: {
        title: "📚 The Movie Guide Author",
        text: "You write the definitive guide to using movies for developer team building. Your book 'Cinema for Coders' becomes a bestseller in the tech industry. Final budget: $175,000,000.00. You've authored your way to movie mastery!",
        choices: [
            { text: "📚 Write a new adventure", next: "restart" }
        ]
    }
};

// Game state
let currentGame = {
    currentStory: 'start',
    score: 0,
    choices: 0,
    gameStarted: false,
    lifeSpanLost: 0
};

// DOM elements
const elements = {
    setupInstructions: document.getElementById('setupInstructions'),
    startGameBtn: document.getElementById('startGameBtn'),
    gameArea: document.querySelector('.game-area'),
    memberPhoto: document.getElementById('memberPhoto'),
    memberName: document.getElementById('memberName'),
    choiceBtns: document.querySelectorAll('.choice-btn'),
    submitBtn: document.getElementById('submitBtn'),
    nextBtn: document.getElementById('nextBtn'),
    results: document.getElementById('results'),
    resultDetails: document.getElementById('resultDetails'),
    score: document.getElementById('score'),
    total: document.getElementById('total'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    gameOver: document.getElementById('gameOver'),
    finalScore: document.getElementById('finalScore'),
    scoreMessage: document.getElementById('scoreMessage'),
    restartBtn: document.getElementById('restartBtn'),
    funFacts: document.getElementById('funFacts'),
    funFactText: document.getElementById('funFactText'),
    budgetAmount: document.getElementById('budgetAmount')
};

// Initialize game
function initGame() {
    elements.setupInstructions.style.display = 'none';
    elements.gameArea.style.display = 'block';

    currentGame.currentStory = 'start';
    currentGame.score = 0;
    currentGame.choices = 0;
    currentGame.gameStarted = true;
    currentGame.lifeSpanLost = 0;

    // Update score display to show choices made
    elements.score.textContent = currentGame.choices;
    elements.total.textContent = "∞";

    // Start budget counter
    startBudgetCounter();

    // Load first story
    loadCurrentStory();

    // Add event listeners
    addEventListeners();
}

// Load current story
function loadCurrentStory() {
    const story = adventureStory[currentGame.currentStory];

    if (!story) {
        console.error('Story not found:', currentGame.currentStory);
        return;
    }

    // Update story title and text
    elements.memberName.textContent = story.title;

    // Show appropriate image based on story path
    if (currentGame.currentStory.includes('shrek') ||
        currentGame.currentStory.includes('swamp') ||
        currentGame.currentStory.includes('mascot') ||
        currentGame.currentStory.includes('shopping')) {
        elements.memberPhoto.src = 'images/shop-shrek-2.png';
        elements.memberPhoto.style.display = 'block';
    } else if (currentGame.currentStory === 'start') {
        elements.memberPhoto.src = 'images/shrek-shop-1.png';
        elements.memberPhoto.style.display = 'block';
    } else {
        elements.memberPhoto.style.display = 'none';
    }

    // Update questions container with story text
    const questionsContainer = document.querySelector('.questions-container');
    questionsContainer.innerHTML = `
        <div class="story-text">
            <p>${story.text}</p>
        </div>
    `;

    // Update choice buttons
    const choicesContainer = document.querySelector('.choices');
    if (choicesContainer) {
        choicesContainer.remove();
    }

    // Create new choices
    const newChoicesHTML = story.choices.map((choice, index) =>
        `<button class="choice-btn" data-choice="${index}">
            ${choice.text}
        </button>`
    ).join('');

    questionsContainer.innerHTML += `
        <div class="choices">
            ${newChoicesHTML}
        </div>
    `;

    // Update choice buttons reference
    elements.choiceBtns = document.querySelectorAll('.choice-btn');
    addChoiceListeners();

    // Update progress
    updateProgress();

    // Reset UI state
    elements.submitBtn.style.display = 'none';
    elements.nextBtn.style.display = 'none';
    elements.results.style.display = 'none';
    elements.funFacts.style.display = 'none';

    // Show choices immediately
    const choicesDiv = document.querySelector('.choices');
    if (choicesDiv) {
        choicesDiv.style.display = 'flex';
    }
}

// Add choice listeners
function addChoiceListeners() {
    elements.choiceBtns.forEach(btn => {
        btn.addEventListener('click', handleChoiceClick);
    });
}

// Handle choice selection
function handleChoiceClick(event) {
    const btn = event.target;
    const choiceIndex = parseInt(btn.dataset.choice);
    const story = adventureStory[currentGame.currentStory];
    const choice = story.choices[choiceIndex];

    // Update game state
    currentGame.choices++;
    currentGame.currentStory = choice.next;

    // Update score display
    elements.score.textContent = currentGame.choices;

    // Handle special endings
    if (choice.next === 'restart') {
        showGameOver();
        return;
    }

    // Update budget based on choice
    updateBudgetForChoice(choice.next);

    // Load next story after a delay
    setTimeout(() => {
        loadCurrentStory();
    }, 500);
}

// Update budget based on story choice
function updateBudgetForChoice(storyKey) {
    const budgetChanges = {
        'hotdog_start': () => setBudget(856742.31),
        'hotdog_addiction': () => setBudget(0.47),
        'game_dev_success': () => setBudget(50000000),
        'uber_empire': () => setBudget(25000000),
        'oklahoma_adventure': () => setBudget(15000000),
        'social_media_path': () => setBudget(12000000),
        'dental_recovery': () => setBudget(7777777),
        'traffic_start': () => setBudget(4200000),
        'walking_sim_start': () => setBudget(3456789),
        'peanut_butter_start': () => setBudget(2100000),
        'healthy_choice': () => setBudget(2500000),
        'almond_existential': () => setBudget(Math.random() * 8765432 + 3.17),
        'mogul_ending': () => setBudget(100000000),
        'traffic_lord_ending': () => setBudget(75000000),
        'math_path': () => setBudget(8888888),
        'mathematician_ending': () => setBudget(99999999),
        'rebellious_hotdog': () => setBudget(666666.66),
        'oklahoma_sim': () => setBudget(33333333),
        'gaming_hotdog': () => setBudget(1234567.89),
        'walking_sim_deep': () => setBudget(7654321),
        'surprise_destinations': () => setBudget(87654321),
        'celebration_hotdog': () => setBudget(25000000),
        'irony_math': () => setBudget(42690000),
        'walking_guru': () => setBudget(55555555),
        'tourism_mogul_ending': () => setBudget(150000000),
        'branded_hotdog': () => setBudget(88888888),
        'irony_professor_ending': () => setBudget(98765432.10),
        'stress_hotdog': () => setBudget(13.37),
        'stressed_enlightenment': () => setBudget(1111111.11),
        'nut_philosopher': () => setBudget(77777777.77),
        'stress_guru_ending': () => setBudget(11111111.11),
        'nut_professor_ending': () => setBudget(89999999.99),
        'dental_celebration': () => setBudget(4444444.44),
        'walking_sim_reward': () => setBudget(6789012.34),
        'healthy_influencer': () => setBudget(22222222.22),
        'fugly_influencer_ending': () => setBudget(45678901.23),
        'oklahoma_photographer': () => setBudget(31415926.54),
        'fugly_game_dev': () => setBudget(67890123.45),
        'fugly_travel_ending': () => setBudget(78901234.56),
        'fugly_gaming_ending': () => setBudget(123456789.01),
        'traffic_guru': () => setBudget(23700000),
        'secret_keeper': () => setBudget(23700237),
        'traffic_expert_ending': () => setBudget(237000000),
        'global_traffic_guru': () => setBudget(2370000000),
        'traffic_illuminati_ending': () => setBudget(237237237),
        'dental_wordplay_guru': () => setBudget(44444444.44),
        'clean_teeth_gaming': () => setBudget(66666666.66),
        'healthy_walking_sim': () => setBudget(67890123.45),
        'healthy_gaming_guru': () => setBudget(123456789.01),
        'healthy_photo_empire': () => setBudget(222222222.22),
        'health_mogul_ending': () => setBudget(444444444.44),
        'michelin_mystery': () => setBudget(-73420.69),
        'michelin_confrontation': () => setBudget(-999999.99),
        'michelin_competition': () => setBudget(-47.83),
        'michelin_economics': () => setBudget(50000000),
        'clojure_path': () => setBudget(1337000000),
        'clojure_enlightenment': () => setBudget(Infinity),
        'clojure_scholar': () => setBudget(777777777.77),
        'clojure_missionary': () => setBudget(Infinity),
        'clojure_cultural_path': () => setBudget(Infinity),
        'clojure_ramen_path': () => setBudget(Infinity),
        'cli_mission': () => setBudget(1337),
        'cli_obsession': () => setBudget(13.37),
        'cli_surrender': () => setBudget(67890.12),
        'cli_martyr_ending': () => setBudget(0),
        'conformity_ending': () => setBudget(67890.12),
        'brazil_path': () => setBudget(1000000),
        'cultural_explorer': () => setBudget(12345678.90),
        'peanut_butter_missionary': () => setBudget(50000),
        'peanut_butter_weirdo_ending': () => setBudget(2000000),
        'michelin_apprentice': () => setBudget(-2000000),
        'budget_panic': () => setBudget(-1952.17),
        'ramen_humility': () => setBudget(47.33),
        'fake_casual_blogger': () => setBudget(25000000),
        'michelin_partnership': () => setBudget(500000000),
        'casual_fine_dining_master': () => setBudget(-5000000),
        'budget_anxiety_guru': () => setBudget(47000000),
        'ramen_philosopher': () => setBudget(1000000),
        'fake_casual_empire': () => setBudget(100000000),
        // New joke story budget changes
        'sorting_chaos': () => setBudget(Math.random() * 24999900 + 100),
        'sorting_defeat': () => setBudget(2222222.22),
        'sorting_mastery': () => setBudget(50000000),
        'sorting_team_building': () => setBudget(33333333.33),
        'chaos_enlightenment': () => setBudget(77777777.77),
        'organization_emperor': () => setBudget(200000000),
        'sorting_guru_ending': () => setBudget(150000000),
        'team_building_master': () => setBudget(100000000),
        'chaos_manager_ending': () => setBudget(250000000),
        'spider_encounter': () => setBudget(1337420.69),
        'spider_panic': () => setBudget(500000),
        'spider_hero': () => setBudget(100000),
        'spider_teamwork': () => setBudget(50000),
        'spider_coexistence': () => setBudget(25000),
        'spider_refugee': () => setBudget(500),
        'spider_educator': () => setBudget(13.37),
        'spider_baby_panic': () => setBudget(666),
        'spider_guilt_flee': () => setBudget(123.45),
        'spider_paranoia': () => setBudget(1337),
        'spider_teamwork_trauma': () => setBudget(4321),
        'spider_crazy_person': () => setBudget(237),
        'spider_delusion': () => setBudget(8),
        'movie_distraction': () => setBudget(Math.random() * 10000000 + 1000000),
        'movie_late_panic': () => setBudget(1000000),
        'movie_commitment': () => setBudget(28000000),
        'movie_inspiration': () => setBudget(50000000),
        'movie_team_bonding': () => setBudget(35000000),
        'movie_recovery': () => setBudget(5000000),
        'movie_curator': () => setBudget(25000000),
        'movie_crisis_guru': () => setBudget(100000000),
        'movie_team_building': () => setBudget(85000000),
        'zombie_protocol_master': () => setBudget(75000000),
        'movie_framework_guru': () => setBudget(125000000),
        'movie_coordinator': () => setBudget(60000000),
        'movie_culture_builder': () => setBudget(150000000),
        'movie_comedian': () => setBudget(30000000),
        'movie_balance_master': () => setBudget(45000000),
        'movie_culture_officer': () => setBudget(200000000),
        'movie_guide_author': () => setBudget(175000000)
    };

    if (budgetChanges[storyKey]) {
        budgetChanges[storyKey]();
    }
}

// Set budget to specific amount
function setBudget(amount) {
    let formattedAmount;
    if (amount === Infinity) {
        formattedAmount = '$∞';
    } else if (amount === -Infinity) {
        formattedAmount = '-$∞';
    } else {
        formattedAmount = '$' + amount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    elements.budgetAmount.textContent = formattedAmount;
}

// Update progress bar
function updateProgress() {
    const progress = Math.min((currentGame.choices / 10) * 100, 100);
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Choice ${currentGame.choices} of your adventure`;
}

// Show game over
function showGameOver() {
    elements.gameArea.style.display = 'none';
    elements.gameOver.style.display = 'block';

    const story = adventureStory[currentGame.currentStory];
    const currentBudget = elements.budgetAmount.textContent;

    elements.finalScore.textContent = `${currentGame.choices} choices made`;

    // Custom messages based on final story
    let message = `You completed your Production Excellence team adventure! Your final Developer Experience Budget: ${currentBudget}`;
    let className = "score-good";

    if (currentGame.currentStory === 'hot_dog_ending') {
        message = "🌭 You chose the hot dog path and lost 43 years of your life, 8 minutes at a time. But those hot dogs were delicious! Your meal budget is completely destroyed. Your Production Excellence team will remember your sacrifice.";
        className = "score-poor";
    } else if (currentGame.currentStory === 'official_mascot_ending') {
        message = "🛍️ You became the official Production Excellence team mascot! Your green face paint and shopping bag wisdom have transformed team meetings forever. The team's e-commerce spirit flows through you!";
        className = "score-excellent";
    } else if (currentGame.currentStory === 'sober_leader_ending') {
        message = "🤢 You became an authentic sober leader! Your honesty about alcohol being disgusting revolutionized team culture. Your Production Excellence team celebrates with amazing food and activities instead!";
        className = "score-excellent";
    } else if (currentGame.currentStory === 'perfect_strategy_ending') {
        message = "🎉 Your dessert-first strategy worked perfectly! You revolutionized social dining by enjoying team bonding, perfect sleep, and amazing meals with friends. Your Production Excellence team adopted your approach!";
        className = "score-excellent";
    } else if (currentGame.currentStory === 'regret_ending') {
        message = "😔 You regretted missing team bonding for your dessert strategy. Your Production Excellence team had important conversations while you focused on sweets. You learned that sometimes fitting in matters more than personal optimization.";
        className = "score-poor";
    } else if (currentGame.currentStory === 'olakitan_perfect_ending') {
        message = "😎 You are Olakitan, and you achieved perfect success! Your Production Excellence team genuinely loves you, your technical skills are legendary, and your leadership transformed the company culture. You're cool, successful, and living your best life!";
        className = "score-excellent";
    } else if (currentBudget.includes('∞')) {
        message = "🧘 You achieved Clojure enlightenment! Your health, wealth, and relationships are perfect. You've transcended the need for meal budgets. Your Production Excellence team bows to your coding wisdom.";
        className = "score-excellent";
    } else if (currentBudget.includes('50,000,000') || currentBudget.includes('100,000,000')) {
        message = "🎉 You've achieved incredible wealth through the power of absurd business decisions! Your meal budget is now unlimited. Your Production Excellence team celebrates your success!";
        className = "score-excellent";
    } else if (currentBudget.includes('-')) {
        message = "💸 You went way over budget! Your meal budget is destroyed, but at least you didn't pronounce CLI as 'Kly' in public. Your Production Excellence team appreciates your linguistic restraint.";
        className = "score-poor";
    }

    elements.scoreMessage.textContent = message;
    elements.scoreMessage.className = className;
}

// Restart game
function restartGame() {
    elements.gameOver.style.display = 'none';
    elements.setupInstructions.style.display = 'block';
    currentGame.gameStarted = false;

    // Reset budget
    setBudget(1337420.69);
}

// Add event listeners
function addEventListeners() {
    elements.restartBtn.addEventListener('click', restartGame);
    elements.startGameBtn.addEventListener('click', initGame);
}

// Update budget counter with random amount
function updateBudget() {
    if (!currentGame.gameStarted) {
        const minAmount = 0.01;
        const maxAmount = 1370000;
        const randomAmount = Math.random() * (maxAmount - minAmount) + minAmount;
        setBudget(randomAmount);
    }
}

// Start budget counter animation
function startBudgetCounter() {
    updateBudget();

    if (!currentGame.gameStarted) {
        const updateInterval = () => {
            updateBudget();
            const nextUpdate = Math.random() * 2000 + 2000;
            setTimeout(updateInterval, nextUpdate);
        };

        setTimeout(updateInterval, Math.random() * 2000 + 1000);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    elements.setupInstructions.style.display = 'block';
    elements.gameArea.style.display = 'none';
    elements.gameOver.style.display = 'none';

    startBudgetCounter();
    elements.startGameBtn.addEventListener('click', initGame);
}); 