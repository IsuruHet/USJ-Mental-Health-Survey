import React from 'react';
import { Share2, ExternalLink } from 'lucide-react';
import './App.css';

const App: React.FC = () => {
  const surveyUrl: string = 'https://forms.gle/chtL2EUCCeptAvxa6';
  
  const surveyMessage: string = `📢 University Student Mental Health & Lifestyle Assessment Survey (USJ Students Only)

Hi everyone! 👋
We are conducting a research study to understand the mental health, lifestyle habits, and well-being of university students at USJ.
Your participation will really help us gather accurate data for our research.

🔒 100% Anonymous
⏱️ Takes only 5–7 minutes
🎓 For USJ students only

👉 Link: ${surveyUrl}

🛑You can receive your personal DASS-21 results (including your Depression, Anxiety, and Stress scores with a brief explanation and interpretation) instantly via email as soon as you complete the survey.

Your support means a lot! Kindly fill it in and share among other USJ students too. Thank you so much! 💛🙌`;

  const handleShare = async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'USJ Mental Health Survey',
          text: surveyMessage
        });
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') {
          fallbackShare();
        }
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = (): void => {
    navigator.clipboard.writeText(surveyMessage).then(() => {
      alert('Message copied to clipboard! You can now paste and share it.');
    }).catch(() => {
      alert('Unable to copy. Please copy the message manually.');
    });
  };

  const handleOpen = (): void => {
    window.location.href = surveyUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            📢 USJ Mental Health Survey
          </h1>
          <p className="text-gray-600">Help us understand student well-being</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
          <p className="text-gray-700 mb-4">
            <strong>We are conducting a research study</strong> to understand the mental health, 
            lifestyle habits, and well-being of university students at USJ.
          </p>
          
          <div className="space-y-2 text-gray-700 mb-4">
            <div className="flex items-start">
              <span className="mr-2">🔒</span>
              <span>100% Anonymous</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">⏱️</span>
              <span>Takes only 5–7 minutes</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">🎓</span>
              <span>For USJ students only</span>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-gray-700">
              <strong>🛑 Bonus:</strong> Receive your personal DASS-21 results (Depression, Anxiety, 
              and Stress scores with interpretation) instantly via email!
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleShare}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <Share2 size={20} />
            Share Survey
          </button>
          
          <button
            onClick={handleOpen}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <ExternalLink size={20} />
            Open Survey
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Your support means a lot! 💛 Thank you for participating!
        </p>
      </div>
    </div>
  );
};

export default App;