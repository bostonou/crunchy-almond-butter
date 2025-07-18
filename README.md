# 🥜 Team Preference Detective 🍊

A fun team-building game where you guess your teammates' food preferences! Test your knowledge of who prefers crunchy vs creamy peanut butter and pulp vs no pulp orange juice.

## 🎮 How to Play

1. Look at a team member's photo
2. Guess their preferences:
   - 🥜 Crunchy or 🧈 Creamy peanut butter?
   - 🌊 With pulp or 💧 No pulp orange juice?
3. Submit your guesses and see how well you know your team!
4. Complete all teammates to get your final score

## 🚀 Setup Instructions

### 1. Add Team Member Photos
- Place team member photos in the `images/` folder
- Name photos using the format: `firstname-lastname.jpg` (e.g., `alice-johnson.jpg`)
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Recommended size: 200x200 pixels (square images work best)

### 2. Update Team Data
Open `script.js` and update the `teamMembers` array with your actual team:

```javascript
const teamMembers = [
    {
        name: "Alice Johnson",
        photo: "images/alice-johnson.jpg",
        peanutButter: "crunchy",    // "crunchy" or "creamy"
        orangeJuice: "pulp"         // "pulp" or "noPulp"
    },
    // Add more team members...
];
```

### 3. Survey Your Team
Before setting up the game, survey your team to find out their actual preferences:
- **Peanut Butter**: Crunchy or Creamy?
- **Orange Juice**: With pulp or No pulp?

### 4. Deploy to GitHub Pages
1. Push your files to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your game will be available at: `https://yourusername.github.io/repository-name`

## 📁 File Structure

```
pb-oj/
├── index.html          # Main game page
├── style.css           # Game styling
├── script.js           # Game logic
├── README.md           # This file
└── images/             # Team member photos
    ├── alice-johnson.jpg
    ├── bob-smith.jpg
    └── ...
```

## 🎨 Customization

### Adding More Team Members
Simply add more objects to the `teamMembers` array in `script.js`:

```javascript
{
    name: "Your Name",
    photo: "images/your-photo.jpg",
    peanutButter: "crunchy",
    orangeJuice: "noPulp"
}
```

### Changing Game Questions
Want to ask different questions? Modify the HTML in `index.html` and update the JavaScript logic in `script.js`. Current questions are focused on:
- Peanut butter preferences
- Orange juice preferences

### Styling
Edit `style.css` to change colors, fonts, or layout. The game uses:
- Responsive design for mobile devices
- Modern gradient backgrounds
- Playful emoji icons
- Smooth animations

## 🏆 Scoring

- **2 points** per teammate (1 for each correct guess)
- **80%+**: Excellent! You really know your team!
- **60-79%**: Good job! Solid understanding of teammates
- **40-59%**: Not bad! Maybe spend more time in the break room?
- **<40%**: Time to get to know your team better!

## 🛠️ Technical Details

This is a static website built with:
- **HTML5** for structure
- **CSS3** for styling (with responsive design)
- **Vanilla JavaScript** for game logic
- **No external dependencies** - works offline!

Perfect for GitHub Pages hosting since it's entirely client-side.

## 🎯 Tips for Success

1. **Keep it lighthearted** - This is meant to be fun!
2. **Survey discretely** - Don't spoil the game by asking preferences directly
3. **Update regularly** - Add new team members as they join
4. **Share results** - Post funny scores in team chat (with permission)

## 🤝 Contributing

Feel free to enhance the game by:
- Adding new question categories
- Improving the UI/UX
- Adding sound effects
- Creating team statistics
- Adding difficulty levels

---

**Have fun getting to know your team better! 🎉** 