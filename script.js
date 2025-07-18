// Adventure Story Data
const adventureStory = {
    start: {
        title: "🎮 The Great Developer Experience Adventure",
        text: "You wake up in your home office, surrounded by empty coffee cups and the gentle hum of your RGB keyboard. The Developer Experience Budget display shows $1,337,420.69 and climbing. Your meal budget notification blinks: $47.83 remaining. Today feels different... magical even. What do you do?",
        choices: [
            { text: "🌭 Grab a hot dog for breakfast (check meal budget)", next: "hotdog_start" },
            { text: "🥜 Make some artisanal peanut butter toast", next: "peanut_butter_start" },
            { text: "🚗 Check Toronto traffic conditions", next: "traffic_start" },
            { text: "🎮 Play a walking simulator", next: "walking_sim_start" },
            { text: "🍽️ Research your mysterious teammate's restaurant habits", next: "michelin_mystery" }
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
            { text: "💻 Start a mission to make people say 'Kly' instead of 'C-L-I'", next: "cli_mission" }
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

    // Hide photo and show story text instead
    elements.memberPhoto.style.display = 'none';

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
        'fake_casual_empire': () => setBudget(100000000)
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
    let message = `You completed your adventure! Your final Developer Experience Budget: ${currentBudget}`;
    let className = "score-good";

    if (currentGame.currentStory === 'hot_dog_ending') {
        message = "🌭 You chose the hot dog path and lost 43 years of your life, 8 minutes at a time. But those hot dogs were delicious! Your meal budget is completely destroyed.";
        className = "score-poor";
    } else if (currentBudget.includes('∞')) {
        message = "🧘 You achieved Clojure enlightenment! Your health, wealth, and relationships are perfect. You've transcended the need for meal budgets.";
        className = "score-excellent";
    } else if (currentBudget.includes('50,000,000') || currentBudget.includes('100,000,000')) {
        message = "🎉 You've achieved incredible wealth through the power of absurd business decisions! Your meal budget is now unlimited.";
        className = "score-excellent";
    } else if (currentBudget.includes('-')) {
        message = "💸 You went way over budget! Your meal budget is destroyed, but at least you didn't pronounce CLI as 'Kly' in public.";
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