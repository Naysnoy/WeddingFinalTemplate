import { ThemeConfig } from '../types/theme';

export const themes: Record<string, ThemeConfig> = {
  'classic-minimal': {
    id: 'classic-minimal',
    name: 'Classic Minimal',
    category: 'classic',
    interactive: false,
    colors: {
      primary: '#2C3E50',
      secondary: '#34495E',
      accent: '#BDC3C7',
      background: '#FFFFFF',
      text: '#2C3E50',
      textSecondary: '#7F8C8D'
    },
    fonts: {
      primary: 'Playfair Display, serif',
      secondary: 'Source Sans Pro, sans-serif'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #F1F2F6 100%)',
      accent: 'linear-gradient(135deg, #BDC3C7 0%, #95A5A6 100%)'
    },
    animations: {
      enabled: true,
      duration: '0.6s',
      easing: 'ease-out'
    },
    layout: {
      heroStyle: 'minimal',
      cardStyle: 'clean',
      spacing: 'normal'
    },
    decorations: {
      patterns: ['geometric-lines', 'minimal-dots'],
      illustrations: [],
      textures: []
    }
  },

  'nature-minimal': {
    id: 'nature-minimal',
    name: 'Nature Inspired',
    category: 'classic',
    interactive: false,
    colors: {
      primary: '#27AE60',
      secondary: '#2ECC71',
      accent: '#F39C12',
      background: '#F8F9FA',
      text: '#2C3E50',
      textSecondary: '#7F8C8D'
    },
    fonts: {
      primary: 'Cormorant Garamond, serif',
      secondary: 'Lato, sans-serif'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #E8F5E8 0%, #F0F8F0 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #F8FDF8 100%)',
      accent: 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)'
    },
    animations: {
      enabled: true,
      duration: '0.8s',
      easing: 'ease-in-out'
    },
    layout: {
      heroStyle: 'centered',
      cardStyle: 'elevated',
      spacing: 'relaxed'
    },
    decorations: {
      patterns: ['leaf-border', 'botanical-frame'],
      illustrations: ['eucalyptus', 'wildflowers'],
      textures: ['paper-texture']
    }
  },

  'filipiniana': {
    id: 'filipiniana',
    name: 'Filipiniana Cultural',
    category: 'classic',
    interactive: false,
    colors: {
      primary: '#8B4513',
      secondary: '#D2691E',
      accent: '#FFD700',
      background: '#FFF8DC',
      text: '#654321',
      textSecondary: '#8B7355'
    },
    fonts: {
      primary: 'Crimson Text, serif',
      secondary: 'Open Sans, sans-serif',
      accent: 'Dancing Script, cursive'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #FFF8DC 0%, #F5E6D3 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8DC 100%)',
      accent: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    animations: {
      enabled: true,
      duration: '1s',
      easing: 'ease-out'
    },
    layout: {
      heroStyle: 'overlay',
      cardStyle: 'textured',
      spacing: 'normal'
    },
    decorations: {
      patterns: ['barong-embroidery', 'capiz-pattern'],
      illustrations: ['sampaguita', 'baybayin-script'],
      textures: ['abaca-texture', 'capiz-shell']
    }
  },

  'rustic-boho': {
    id: 'rustic-boho',
    name: 'Rustic Boho',
    category: 'classic',
    interactive: false,
    colors: {
      primary: '#8B4513',
      secondary: '#CD853F',
      accent: '#DEB887',
      background: '#FAF0E6',
      text: '#654321',
      textSecondary: '#A0522D'
    },
    fonts: {
      primary: 'Amatic SC, cursive',
      secondary: 'Nunito, sans-serif'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #FAF0E6 0%, #F5E6D3 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #FDF5E6 100%)',
      accent: 'linear-gradient(135deg, #DEB887 0%, #D2B48C 100%)'
    },
    animations: {
      enabled: true,
      duration: '0.7s',
      easing: 'ease-out'
    },
    layout: {
      heroStyle: 'split',
      cardStyle: 'bordered',
      spacing: 'relaxed'
    },
    decorations: {
      patterns: ['torn-edge', 'watercolor-splash'],
      illustrations: ['dried-flowers', 'feathers'],
      textures: ['burlap', 'wood-grain']
    }
  },

  'dating-app': {
    id: 'dating-app',
    name: 'Dating App - It\'s a Match!',
    category: 'modern',
    interactive: true,
    colors: {
      primary: '#FF4458',
      secondary: '#FF6B7A',
      accent: '#FFD93D',
      background: '#FFFFFF',
      text: '#2C3E50',
      textSecondary: '#7F8C8D'
    },
    fonts: {
      primary: 'Poppins, sans-serif',
      secondary: 'Inter, sans-serif'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #FF4458 0%, #FF6B7A 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 100%)',
      accent: 'linear-gradient(135deg, #FFD93D 0%, #FF6B7A 100%)'
    },
    animations: {
      enabled: true,
      duration: '0.4s',
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    },
    layout: {
      heroStyle: 'interactive',
      cardStyle: 'glass',
      spacing: 'tight'
    },
    interactions: {
      type: 'heart-click',
      trigger: 'Click the heart',
      effect: 'Shows "It\'s a Match!" with wedding details'
    },
    decorations: {
      patterns: ['heart-confetti', 'swipe-cards'],
      illustrations: ['phone-mockup'],
      textures: []
    }
  },

  'ldr-theme': {
    id: 'ldr-theme',
    name: 'LDR - Bridge the Distance',
    category: 'modern',
    interactive: true,
    colors: {
      primary: '#3498DB',
      secondary: '#2980B9',
      accent: '#E74C3C',
      background: '#ECF0F1',
      text: '#2C3E50',
      textSecondary: '#7F8C8D'
    },
    fonts: {
      primary: 'Montserrat, sans-serif',
      secondary: 'Roboto, sans-serif'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #EBF3FD 100%)',
      accent: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)'
    },
    animations: {
      enabled: true,
      duration: '1.2s',
      easing: 'ease-in-out'
    },
    layout: {
      heroStyle: 'split',
      cardStyle: 'elevated',
      spacing: 'normal'
    },
    interactions: {
      type: 'button-reveal',
      trigger: 'Click the plane button',
      effect: 'Animates two locations coming together'
    },
    decorations: {
      patterns: ['world-map', 'flight-path'],
      illustrations: ['airplane', 'location-pins'],
      textures: []
    }
  },

  'travel-boarding': {
    id: 'travel-boarding',
    name: 'Travel - Boarding Pass',
    category: 'modern',
    interactive: true,
    colors: {
      primary: '#2C3E50',
      secondary: '#34495E',
      accent: '#E67E22',
      background: '#ECF0F1',
      text: '#2C3E50',
      textSecondary: '#7F8C8D'
    },
    fonts: {
      primary: 'Roboto Mono, monospace',
      secondary: 'Source Sans Pro, sans-serif'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #ECF0F1 0%, #D5DBDB 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
      accent: 'linear-gradient(135deg, #E67E22 0%, #D35400 100%)'
    },
    animations: {
      enabled: true,
      duration: '0.8s',
      easing: 'ease-out'
    },
    layout: {
      heroStyle: 'centered',
      cardStyle: 'bordered',
      spacing: 'tight'
    },
    interactions: {
      type: 'card-flip',
      trigger: 'Click the boarding pass',
      effect: 'Flips to reveal wedding details'
    },
    decorations: {
      patterns: ['boarding-pass', 'barcode'],
      illustrations: ['luggage', 'passport-stamps'],
      textures: ['paper-ticket']
    }
  },

  'movie-poster': {
    id: 'movie-poster',
    name: 'Movie Poster - Now Showing',
    category: 'modern',
    interactive: true,
    colors: {
      primary: '#1A1A1A',
      secondary: '#333333',
      accent: '#FFD700',
      background: '#000000',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC'
    },
    fonts: {
      primary: 'Bebas Neue, cursive',
      secondary: 'Roboto, sans-serif'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
      card: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)',
      accent: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    animations: {
      enabled: true,
      duration: '1s',
      easing: 'ease-in-out'
    },
    layout: {
      heroStyle: 'overlay',
      cardStyle: 'glass',
      spacing: 'normal'
    },
    interactions: {
      type: 'button-reveal',
      trigger: 'Click "Watch Trailer"',
      effect: 'Reveals cast, date, and venue with cinematic flair'
    },
    decorations: {
      patterns: ['film-strip', 'spotlight'],
      illustrations: ['movie-camera', 'red-carpet'],
      textures: ['velvet', 'gold-foil']
    }
  },

  'love-letter': {
    id: 'love-letter',
    name: 'Love Letter - Open Envelope',
    category: 'playful',
    interactive: true,
    colors: {
      primary: '#E91E63',
      secondary: '#F06292',
      accent: '#FFB74D',
      background: '#FFF3E0',
      text: '#4E342E',
      textSecondary: '#8D6E63'
    },
    fonts: {
      primary: 'Dancing Script, cursive',
      secondary: 'Crimson Text, serif'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #FFF3E0 0%, #FFECB3 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #FFF8E1 100%)',
      accent: 'linear-gradient(135deg, #E91E63 0%, #F06292 100%)'
    },
    animations: {
      enabled: true,
      duration: '1.5s',
      easing: 'ease-out'
    },
    layout: {
      heroStyle: 'interactive',
      cardStyle: 'textured',
      spacing: 'relaxed'
    },
    interactions: {
      type: 'envelope-open',
      trigger: 'Click the envelope',
      effect: 'Opens to reveal handwritten invitation'
    },
    decorations: {
      patterns: ['wax-seal', 'vintage-stamps'],
      illustrations: ['envelope', 'quill-pen'],
      textures: ['parchment', 'ink-blots']
    }
  },

  'retro-gamer': {
    id: 'retro-gamer',
    name: 'Retro Gamer - Start Game',
    category: 'playful',
    interactive: true,
    colors: {
      primary: '#00FF00',
      secondary: '#FF00FF',
      accent: '#FFFF00',
      background: '#000000',
      text: '#00FF00',
      textSecondary: '#CCCCCC'
    },
    fonts: {
      primary: 'Press Start 2P, cursive',
      secondary: 'Courier New, monospace'
    },
    gradients: {
      hero: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
      card: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
      accent: 'linear-gradient(135deg, #00FF00 0%, #FFFF00 100%)'
    },
    animations: {
      enabled: true,
      duration: '0.3s',
      easing: 'steps(4, end)'
    },
    layout: {
      heroStyle: 'interactive',
      cardStyle: 'bordered',
      spacing: 'tight'
    },
    interactions: {
      type: 'game-start',
      trigger: 'Click "Start" button',
      effect: 'Displays pixel-style invitation like a game intro'
    },
    decorations: {
      patterns: ['pixel-hearts', '8bit-border'],
      illustrations: ['game-controller', 'pixel-characters'],
      textures: ['scanlines', 'crt-effect']
    }
  }
};

export const getTheme = (themeId: string): ThemeConfig => {
  return themes[themeId] || themes['classic-minimal'];
};

export const getThemesByCategory = (category: 'classic' | 'modern' | 'playful') => {
  return Object.values(themes).filter(theme => theme.category === category);
};