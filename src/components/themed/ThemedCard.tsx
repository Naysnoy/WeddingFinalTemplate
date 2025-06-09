import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ThemedCardProps {
  children: React.ReactNode;
  themeId: string;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
}

export const ThemedCard: React.FC<ThemedCardProps> = ({ 
  children, 
  themeId, 
  className = '',
  variant = 'default'
}) => {
  const theme = useTheme(themeId);

  const getCardStyles = () => {
    switch (themeId) {
      case 'retro-gamer':
        return {
          background: '#111111',
          border: '2px solid #00FF00',
          borderRadius: '0px',
          boxShadow: '0 0 20px #00FF0030, inset 0 0 20px #00FF0010',
          color: '#00FF00',
          fontFamily: theme.fonts.primary
        };
      
      case 'dating-app':
        return {
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(255, 68, 88, 0.2)',
          color: '#2C3E50',
          fontFamily: theme.fonts.primary
        };
      
      case 'movie-poster':
        return {
          background: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
          borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
          border: '1px solid #FFD700',
          color: '#FFFFFF',
          fontFamily: theme.fonts.primary
        };
      
      case 'filipiniana':
        return {
          background: 'rgba(255, 248, 220, 0.95)',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(139, 69, 19, 0.2)',
          border: '2px solid #D2691E',
          color: theme.text,
          fontFamily: theme.fonts.primary
        };
      
      case 'love-letter':
        return {
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          boxShadow: '0 15px 35px rgba(233, 30, 99, 0.2)',
          border: '3px solid #F06292',
          color: theme.text,
          fontFamily: theme.fonts.primary
        };
      
      default:
        return {
          background: theme.gradients.card,
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          color: theme.text,
          fontFamily: theme.fonts.secondary
        };
    }
  };

  return (
    <div 
      className={`p-8 transition-all duration-300 hover:scale-105 ${className}`}
      style={getCardStyles()}
    >
      {children}
    </div>
  );
};