import React, { useState, useCallback, useEffect } from 'react';
import { INITIAL_SHORTCUTS } from './constants';
import { Position, Shortcut, IconType, BackgroundConfig } from './types';
import ShortcutItem from './components/ShortcutItem';
import ContextMenu from './components/ContextMenu';
import EditModal from './components/EditModal';
import SettingsModal from './components/SettingsModal';

const DEFAULT_BG: BackgroundConfig = {
  type: 'gradient',
  name: 'Cosmic Night',
  value: 'radial-gradient(circle at center, #1a1b4b 0%, #0f0529 100%)'
};

const App: React.FC = () => {
  // State Initialization
  const [shortcuts, setShortcuts] = useState<Shortcut[]>(() => {
    const saved = localStorage.getItem('shortcuts');
    return saved ? JSON.parse(saved) : INITIAL_SHORTCUTS;
  });

  const [bgConfig, setBgConfig] = useState<BackgroundConfig>(() => {
    const saved = localStorage.getItem('bgConfig');
    return saved ? JSON.parse(saved) : DEFAULT_BG;
  });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
  }, [shortcuts]);

  useEffect(() => {
    localStorage.setItem('bgConfig', JSON.stringify(bgConfig));
  }, [bgConfig]);

  // Context Menu State
  const [contextMenuPos, setContextMenuPos] = useState<Position>({ x: 0, y: 0 });
  const [contextMenuTarget, setContextMenuTarget] = useState<string | null>(null);
  
  // Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingShortcut, setEditingShortcut] = useState<Shortcut | null>(null); // null for Add mode

  // Settings Modal State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Handlers
  const handleContextMenu = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setContextMenuPos({ x: e.clientX, y: e.clientY });
    setContextMenuTarget(id);
  }, []);

  const handleCloseContextMenu = useCallback(() => {
    setContextMenuTarget(null);
  }, []);

  const handleEdit = useCallback(() => {
    if (contextMenuTarget) {
      const shortcut = shortcuts.find(s => s.id === contextMenuTarget);
      if (shortcut) {
        setEditingShortcut(shortcut);
        setIsEditModalOpen(true);
      }
      handleCloseContextMenu();
    }
  }, [contextMenuTarget, shortcuts, handleCloseContextMenu]);

  const handleRemove = useCallback(() => {
    if (contextMenuTarget) {
      setShortcuts(prev => prev.filter(s => s.id !== contextMenuTarget));
      handleCloseContextMenu();
    }
  }, [contextMenuTarget, handleCloseContextMenu]);

  const handleOpenAddModal = () => {
    setEditingShortcut(null); // Mode: Add
    setIsEditModalOpen(true);
  };

  const handleSaveShortcut = useCallback((id: string | null, newTitle: string, newUrl: string, iconContent: string) => {
    if (id) {
      // Edit existing
      setShortcuts(prev => prev.map(s => 
        s.id === id ? { ...s, title: newTitle, url: newUrl, content: iconContent } : s
      ));
    } else {
      // Add new
      const newShortcut: Shortcut = {
        id: Date.now().toString(),
        title: newTitle,
        url: newUrl,
        type: IconType.IMAGE, // Defaulting to Image/Favicon
        content: iconContent,
      };
      setShortcuts(prev => [...prev, newShortcut]);
    }
  }, []);

  const handleShortcutClick = (url: string) => {
    if (!url || url === '#') return;
    window.open(url, '_blank');
  };

  return (
    <div 
      className="w-full h-full relative"
      style={{ 
        background: bgConfig.value,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Settings Button - Fixed position */}
      <button 
        onClick={() => setIsSettingsOpen(true)}
        className="fixed top-6 right-6 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-20"
        title="Settings"
      >
        <span className="material-icons-outlined text-2xl">settings</span>
      </button>

      {/* Main Scrollable Area */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="min-h-full flex flex-col items-center justify-center p-8 md:p-12">
          
          {/* Grid Container */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-x-4 gap-y-8 justify-items-center animate-fade-in w-full max-w-[1400px]">
            {shortcuts.map(shortcut => (
              <ShortcutItem 
                key={shortcut.id}
                shortcut={shortcut}
                onContextMenu={handleContextMenu}
                onClick={handleShortcutClick}
                isContextMenuOpen={contextMenuTarget === shortcut.id}
              />
            ))}
            
            {/* Add Button - Always visible at the end */}
            <div 
              onClick={handleOpenAddModal}
              className="group flex flex-col items-center gap-3 cursor-pointer w-[80px] md:w-[100px] relative"
            >
               <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 hover:bg-white/10 rounded-[20px] flex items-center justify-center border border-dashed border-white/30 hover:border-white/60 transition-all duration-200 backdrop-blur-sm">
                 <span className="material-icons-outlined text-white/50 group-hover:text-white text-3xl">add</span>
               </div>
               <span className="text-[11px] md:text-xs font-medium text-center w-full px-1 text-white/50 group-hover:text-white/80">Add site</span>
            </div>
          </div>

        </div>
      </div>

      {/* Overlays */}
      <ContextMenu 
        position={contextMenuPos}
        targetId={contextMenuTarget}
        onEdit={handleEdit}
        onRemove={handleRemove}
        onClose={handleCloseContextMenu}
      />

      <EditModal 
        isOpen={isEditModalOpen}
        shortcut={editingShortcut}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveShortcut}
      />

      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentConfig={bgConfig}
        onSave={(cfg) => setBgConfig(cfg)}
      />
    </div>
  );
};

export default App;