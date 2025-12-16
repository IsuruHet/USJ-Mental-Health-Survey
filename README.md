# USJ Mental Health Survey Web App

A simple, responsive web application for sharing and accessing the University Student Mental Health & Lifestyle Assessment Survey for USJ students.

![Alt text](./qr-code.png)

## 🎯 Features

- **Share Button**: Allows users to easily share the survey message
  - Uses native share dialog on mobile devices
  - Falls back to clipboard copy on desktop browsers
- **Open Survey Button**: Directly opens the Google Form survey in the same tab
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Clean UI**: Modern, professional interface with gradient backgrounds and card-based layout

## 🛠️ Technologies Used

- **React** (TypeScript)
- **Tailwind CSS** - For styling with utility classes
- **Lucide React** - For icons (Share2, ExternalLink)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository or copy the component file

2. Install dependencies:
```bash
npm install react lucide-react
# or
yarn add react lucide-react
```

3. Ensure Tailwind CSS is configured in your project. If not, install it:
```bash
npm install -D tailwindcss
npx tailwindcss init
```

4. Configure your `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Add Tailwind directives to your CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 💻 Usage

Import and use the component in your React application:

```typescript
import SurveyApp from './SurveyApp';

function App() {
  return <SurveyApp />;
}

export default App;
```

## 🔧 Customization

### Update Survey URL
To change the survey link, modify the `surveyUrl` variable:
```typescript
const surveyUrl: string = 'YOUR_NEW_GOOGLE_FORM_URL';
```

### Modify Survey Message
Edit the `surveyMessage` template string to update the shared text content.

### Change Colors
The app uses Tailwind color classes. You can customize:
- Gradient: `from-blue-50 to-purple-50`
- Share button: `bg-green-500 hover:bg-green-600`
- Open button: `bg-blue-500 hover:bg-blue-600`

## 📱 Browser Compatibility

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **Mobile**: Native share API support on iOS Safari, Android Chrome
- **Fallback**: Clipboard API for browsers without native share support

## 🔒 Privacy & Security

- No data collection or tracking
- No external API calls (except opening the Google Form)
- All operations happen client-side

## 📦 Component Structure

```
SurveyApp/
├── Main container (gradient background)
├── Card component (white rounded container)
│   ├── Header section
│   ├── Information section (blue background)
│   ├── Button section (Share & Open)
│   └── Footer text
```

## 🎨 Design Features

- **Gradient Background**: Blue to purple gradient for visual appeal
- **Card-based Layout**: Clean white card with shadow and rounded corners
- **Icon Integration**: Visual icons for better UX
- **Hover Effects**: Smooth color transitions on button hover
- **Responsive Spacing**: Proper padding and margins for all screen sizes

## 📄 Survey Details

- **Target Audience**: USJ (University) students only
- **Duration**: 5-7 minutes
- **Anonymity**: 100% anonymous responses
- **Benefit**: Instant DASS-21 results via email

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📝 License

This project is open source and available for educational and research purposes.

## 👥 Authors

Created for USJ Mental Health & Lifestyle Assessment Research Study
