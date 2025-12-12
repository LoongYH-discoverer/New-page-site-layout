import React, { useEffect, useRef } from 'react';
import { Position, Shortcut } from '../types';

interface ContextMenuProps {
  position: Position;
  targetId: string | null;
  onEdit: () => void;
  onRemove: () => void;
  onClose: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ position, targetId, onEdit, onRemove, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (targetId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [targetId, onClose]);

  if (!targetId) return null;

  return (
    <div 
      ref={menuRef}
      style={{ top: position.y, left: position.x }}
      className="fixed z-50 bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-gray-200 rounded-xl shadow-2xl w-48 overflow-hidden border border-gray-200 dark:border-[#333] transform animate-fade-in"
    >
      <button 
        onClick={onEdit}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#323232] transition-colors text-left group"
      >
        <span className="material-icons-outlined text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">edit</span>
        <span className="text-sm font-medium">Edit site</span>
      </button>
      <button 
        onClick={onRemove}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#323232] transition-colors text-left group"
      >
        <span className="material-icons-outlined text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white">delete</span>
        <span className="text-sm font-medium">Remove</span>
      </button>
    </div>
  );
};

export default ContextMenu;