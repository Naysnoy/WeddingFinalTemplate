import { useMemo } from 'react';

export const useTheme = (dressCodeColors: string[]) => {
  const theme = useMemo(() => {
    const [primary, secondary, accent] = dressCodeColors;
    
    return {
      primary: primary || '#6366F1',
      secondary: secondary || '#8B5CF6', 
      accent: accent || '#F59E0B',
      gradients: {
        primary: `linear-gradient(135deg, ${primary || '#6366F1'}, ${secondary || '#8B5CF6'})`,
        hero: `linear-gradient(135deg, ${primary || '#6366F1'}15, ${secondary || '#8B5CF6'}15)`,
        card: `linear-gradient(135deg, ${primary || '#6366F1'}05, ${secondary || '#8B5CF6'}05)`
      }
    };
  }, [dressCodeColors]);

  return theme;
};