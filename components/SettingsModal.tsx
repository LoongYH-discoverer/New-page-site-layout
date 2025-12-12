import React, { useState } from 'react';
import { BackgroundConfig } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentConfig: BackgroundConfig;
  onSave: (config: BackgroundConfig) => void;
}

const PRESET_GRADIENTS: BackgroundConfig[] = [
  { type: 'gradient', name: 'Cosmic Night', value: 'radial-gradient(circle at center, #1a1b4b 0%, #0f0529 100%)' },
  { type: 'gradient', name: 'Deep Space', value: 'linear-gradient(to bottom right, #000000, #434343)' },
  { type: 'gradient', name: 'Midnight Blue', value: 'linear-gradient(to top, #1e3c72 0%, #2a5298 100%)' },
  { type: 'gradient', name: 'Sunset Violet', value: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)' },
  { type: 'gradient', name: 'Royal', value: 'linear-gradient(to right, #141e30, #243b55)' },
  { type: 'solid', name: 'Solid Gray', value: '#1f1f1f' },
];

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, currentConfig, onSave }) => {
  const [customUrl, setCustomUrl] = useState('');

  if (!isOpen) return null;

  const handleCustomImageSubmit = () => {
    if (customUrl) {
      onSave({ type: 'image', value: `url('${customUrl}')`, name: 'Custom Image' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-2xl w-[500px] p-6 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
            <span className="material-icons-outlined">close</span>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Background Theme</h3>
            <div className="grid grid-cols-3 gap-3">
              {PRESET_GRADIENTS.map((bg, idx) => (
                <button
                  key={idx}
                  onClick={() => onSave(bg)}
                  className={`h-20 rounded-xl relative overflow-hidden transition-all transform hover:scale-105 ${currentConfig.value === bg.value ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-[#1e1e1e]' : ''}`}
                  style={{ background: bg.value, backgroundSize: 'cover' }}
                >
                  <span className="absolute bottom-2 left-2 text-xs text-white font-medium shadow-black drop-shadow-md">
                    {bg.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Custom Image</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                className="flex-1 bg-gray-50 dark:bg-[#2b2b2b] border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleCustomImageSubmit}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors"
              >
                Set
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;