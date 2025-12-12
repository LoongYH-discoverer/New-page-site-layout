import React, { useEffect, useState } from 'react';
import { IconType, Shortcut } from '../types';

interface EditModalProps {
  isOpen: boolean;
  shortcut: Shortcut | null; // null means we are adding a new one
  onClose: () => void;
  onSave: (id: string | null, title: string, url: string, iconContent: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, shortcut, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  
  useEffect(() => {
    if (isOpen) {
      if (shortcut) {
        setTitle(shortcut.title);
        setUrl(shortcut.url);
      } else {
        setTitle('');
        setUrl('');
      }
    }
  }, [isOpen, shortcut]);

  if (!isOpen) return null;

  const handleSave = () => {
    // Basic URL validation/formatting
    let formattedUrl = url;
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      formattedUrl = `https://${url}`;
    }

    // Auto-generate favicon URL if using default image type logic
    // We use Google's favicon service for simplicity
    let iconContent = shortcut?.content || '';
    
    // If it's a new shortcut OR the url changed, update the icon
    // Note: In a real app we might want to let the user pick the icon type, 
    // but for this request "icon should change when url changed", we auto-fetch.
    const isNewUrl = !shortcut || shortcut.url !== formattedUrl;
    
    if (isNewUrl && formattedUrl) {
        try {
            const domain = new URL(formattedUrl).hostname;
            iconContent = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
        } catch (e) {
            // Fallback if invalid URL
            iconContent = ''; 
        }
    }

    onSave(shortcut?.id || null, title || 'New Site', formattedUrl, iconContent);
    onClose();
  };

  const isEditing = !!shortcut;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-2xl w-[400px] p-6 text-gray-900 dark:text-white transform transition-all scale-100 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">{isEditing ? 'Edit site' : 'Add shortcut'}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 ml-1">Name</label>
            <div className="relative">
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. YouTube"
                className="w-full bg-gray-50 dark:bg-[#2b2b2b] border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 ml-1">URL</label>
            <div className="relative">
              <input 
                type="text" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="example.com"
                className="w-full bg-gray-50 dark:bg-[#2b2b2b] border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-gray-200 truncate"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#333] transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            disabled={!url}
            className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;