import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ThemedSectionProps {
  children: React.ReactNode;
  themeId: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const ThemedSection: React.FC<ThemedSectionProps> = ({ 
  children, 
  themeId, 
  className = '', 
  variant = 'primary' 
}) => {
  const theme = useTheme(themeId);

  const getSectionStyles = () => {
    const baseStyles = {
      fontFamily: theme.fonts.secondary,
      color: theme.text
    };

    switch (themeId) {
      case 'retro-gamer':
        return {
          ...baseStyles,
          background: variant === 'secondary' ? '#111111' : 'transparent',
          border: variant === 'accent' ? '2px solid #00FF00' : 'none',
          boxShadow: variant === 'accent' ? '0 0 20px #00FF0050' : 'none'
        };
      
      case 'dating-app':
        return {
          ...baseStyles,
          background: variant === 'secondary' 
            ? 'rgba(255, 255, 255, 0.95)' 
            : variant === 'accent' 
            ? 'linear-gradient(135deg, #FF4458, #FF6B7A)'
            : 'transparent',
          color: variant === 'secondary' ? '#2C3E50' : variant === 'accent' ? '#FFFFFF' : theme.text
        };
      
      case 'movie-poster':
        return {
          ...baseStyles,
          background: variant === 'secondary' 
            ? 'linear-gradient(135deg, #2C2C2C, #1A1A1A)' 
            : variant === 'accent'
            ? 'linear-gradient(135deg, #FFD700, #FFA500)'
            : 'transparent',
          color: variant === 'accent' ? '#000000' : '#FFFFFF'
        };
      
      case 'filipiniana':
        return {
          ...baseStyles,
          background: variant === 'secondary' 
            ? 'rgba(255, 248, 220, 0.95)' 
            : variant === 'accent'
            ? 'linear-gradient(135deg, #D2691E, #8B4513)'
            : 'transparent'
        };
      
      default:
        return {
          ...baseStyles,
          background: variant === 'secondary' 
            ? 'rgba(255, 255, 255, 0.95)' 
            : variant === 'accent'
            ? theme.gradients.accent
            : 'transparent'
        };
    }
  };

  return (
    <section 
      className={`py-20 px-4 ${className}`}
      style={getSectionStyles()}
    >
      {children}
    </section>
  );
};