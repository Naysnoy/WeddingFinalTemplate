export type ThemeType = 
  | 'classic-minimal'
  | 'nature-minimal'
  | 'filipiniana'
  | 'rustic-boho'
  | 'dating-app'
  | 'ldr-theme'
  | 'travel-boarding'
  | 'movie-poster'
  | 'love-letter'
  | 'retro-gamer';

export interface ThemeConfig {
  id: ThemeType;
  name: string;
  category: 'classic' | 'modern' | 'playful';
  interactive: boolean;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textSecondary: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    accent?: string;
  };
  gradients: {
    hero: string;
    card: string;
    accent: string;
  };
  animations: {
    enabled: boolean;
    duration: string;
    easing: string;
  };
  layout: {
    heroStyle: 'minimal' | 'centered' | 'split' | 'overlay' | 'interactive';
    cardStyle: 'clean' | 'elevated' | 'bordered' | 'glass' | 'textured';
    spacing: 'tight' | 'normal' | 'relaxed';
  };
  interactions?: {
    type: 'heart-click' | 'button-reveal' | 'envelope-open' | 'card-flip' | 'game-start';
    trigger: string;
    effect: string;
  };
  decorations: {
    patterns: string[];
    illustrations: string[];
    textures: string[];
  };
}