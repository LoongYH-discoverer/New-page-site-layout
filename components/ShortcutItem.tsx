import React from 'react';
import { IconType, Shortcut } from '../types';

interface ShortcutItemProps {
  shortcut: Shortcut;
  onContextMenu: (e: React.MouseEvent, id: string) => void;
  onClick: (url: string) => void;
  isContextMenuOpen?: boolean;
}

const ShortcutItem: React.FC<ShortcutItemProps> = ({ shortcut, onContextMenu, onClick, isContextMenuOpen }) => {
  
  const renderIcon = () => {
    const { type, content, bgColor, textColor } = shortcut;
    
    switch (type) {
      case IconType.IMAGE:
        return (
          <img 
            src={content} 
            alt={shortcut.title} 
            className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-md"
            onError={(e) => {
                // Fallback to text if image fails
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerText = shortcut.title.charAt(0).toUpperCase();
            }}
          />
        );
      
      case IconType.TEXT:
        return (
          <span className="text-xl font-bold text-white">
            {content}
          </span>
        );

      case IconType.SVG:
        return (
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="white" viewBox="0 0 24 24">
            <path d={content} />
          </svg>
        );

      case IconType.ICON:
        return (
          <span 
            className="material-icons-outlined text-2xl md:text-3xl"
            style={{ color: textColor || 'white' }}
          >
            {content}
          </span>
        );
        
      default:
        return <span className="text-xl font-bold text-white">{shortcut.title.charAt(0)}</span>;
    }
  };

  // Determine background style
  // If user defined a specific color, use it. Otherwise use the default glass style.
  const bgStyle = shortcut.type === IconType.TEXT && shortcut.bgColor 
    ? { backgroundColor: shortcut.bgColor } 
    : {}; // If no specific color, we rely on the class default (glass)

  const isCustomBg = shortcut.type === IconType.TEXT && shortcut.bgColor;

  return (
    <div 
      className="group flex flex-col items-center gap-3 cursor-pointer w-[80px] md:w-[100px] relative select-none"
      onContextMenu={(e) => onContextMenu(e, shortcut.id)}
      onClick={() => onClick(shortcut.url)}
    >
      <div 
        className={`
          w-14 h-14 md:w-16 md:h-16 rounded-[20px] 
          flex items-center justify-center 
          transition-all duration-200 transform group-hover:scale-105 group-hover:-translate-y-1 
          shadow-lg backdrop-blur-md border border-white/10
          ${isCustomBg ? '' : 'bg-white/20 dark:bg-white/10'}
          ${isContextMenuOpen ? 'ring-2 ring-white/50' : ''}
        `}
        style={bgStyle}
      >
        {renderIcon()}
      </div>
      <span className="text-[11px] md:text-xs font-medium text-center truncate w-full px-1 text-white/90 drop-shadow-md">
        {shortcut.title}
      </span>
    </div>
  );
};

export default ShortcutItem;