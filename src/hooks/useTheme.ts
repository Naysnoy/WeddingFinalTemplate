import { useMemo } from 'react';
import { getTheme } from '../config/themes';

export const useTheme = (themeId: string) => {
  const theme = useMemo(() => {
    const themeConfig = getTheme(themeId);
    
    return {
      ...themeConfig.colors,
      gradients: themeConfig.gradients,
      fonts: themeConfig.fonts,
      animations: themeConfig.animations,
      layout: themeConfig.layout,
      decorations: themeConfig.decorations,
      interactions: themeConfig.interactions,
      config: themeConfig
    };
  }, [themeId]);

  return theme;
};