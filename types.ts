export enum IconType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  SVG = 'SVG',
  ICON = 'ICON', // Material Icon
}

export interface Shortcut {
  id: string;
  title: string;
  url: string;
  type: IconType;
  content: string; // Image URL, text content, SVG path, or Material Icon name
  bgColor?: string; // Hex code
  textColor?: string; // Hex code or Tailwind class
}

export interface Position {
  x: number;
  y: number;
}

export interface BackgroundConfig {
  type: 'gradient' | 'image' | 'solid';
  value: string;
  name?: string;
}
