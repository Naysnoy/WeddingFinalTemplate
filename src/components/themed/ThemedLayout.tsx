import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ThemedLayoutProps {
  children: React.ReactNode;
  themeId: string;
}

export const ThemedLayout: React.FC<ThemedLayoutProps> = ({ children, themeId }) => {
  const theme = useTheme(themeId);

  // Theme-specific body classes and styles
  const getThemeStyles = () => {
    switch (themeId) {
      case 'retro-gamer':
        return {
          background: '#000000',
          color: '#00FF00',
          fontFamily: theme.fonts.primary,
          minHeight: '100vh',
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #00FF0010 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #FF00FF10 0%, transparent 50%),
            linear-gradient(90deg, transparent 49%, #00FF0020 50%, transparent 51%)
          `,
          backgroundSize: '100px 100px, 100px 100px, 2px 2px'
        };
      
      case 'dating-app':
        return {
          background: 'linear-gradient(135deg, #FF4458 0%, #FF6B7A 100%)',
          color: '#FFFFFF',
          fontFamily: theme.fonts.primary,
          minHeight: '100vh'
        };
      
      case 'filipiniana':
        return {
          background: theme.gradients.hero,
          color: theme.text,
          fontFamily: theme.fonts.primary,
          minHeight: '100vh',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D2691E' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
        };
      
      case 'movie-poster':
        return {
          background: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
          color: '#FFFFFF',
          fontFamily: theme.fonts.primary,
          minHeight: '100vh',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, #FFD70020 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #FFD70020 0%, transparent 50%)
          `
        };
      
      case 'love-letter':
        return {
          background: theme.gradients.hero,
          color: theme.text,
          fontFamily: theme.fonts.primary,
          minHeight: '100vh',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E91E63' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        };
      
      default:
        return {
          background: theme.gradients.hero,
          color: theme.text,
          fontFamily: theme.fonts.primary,
          minHeight: '100vh'
        };
    }
  };

  return (
    <div style={getThemeStyles()}>
      {children}
    </div>
  );
};