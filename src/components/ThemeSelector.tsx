import React, { useState } from 'react';
import { Palette, ChevronDown, ChevronUp } from 'lucide-react';
import { themes } from '../config/themes';
import { ThemeConfig } from '../types/theme';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'classic' | 'modern' | 'playful'>('all');

  const categories = {
    all: 'All Themes',
    classic: '🌿 Classic / Elegant',
    modern: '💖 Modern Interactive',
    playful: '💌 Playful / Whimsical'
  };

  const filteredThemes = Object.values(themes).filter(theme => 
    selectedCategory === 'all' || theme.category === selectedCategory
  );

  const currentThemeConfig = themes[currentTheme];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        {/* Theme Selector Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
        >
          <Palette size={20} className="mr-2" style={{ color: currentThemeConfig.colors.primary }} />
          <span className="text-sm font-medium text-gray-700 mr-2">
            {currentThemeConfig.name}
          </span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Theme Dropdown */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Category Filter */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex flex-wrap gap-2">
                {Object.entries(categories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as any)}
                    className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
                      selectedCategory === key
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme List */}
            <div className="max-h-96 overflow-y-auto">
              {filteredThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    onThemeChange(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full p-4 text-left hover:bg-gray-50 transition-all duration-200 border-b border-gray-50 last:border-b-0 ${
                    currentTheme === theme.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: theme.colors.primary }}
                        ></div>
                        <h3 className="font-medium text-gray-800">{theme.name}</h3>
                        {theme.interactive && (
                          <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                            Interactive
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-1 mb-2">
                        {[theme.colors.primary, theme.colors.secondary, theme.colors.accent].map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 capitalize">
                        {theme.category} • {theme.layout.heroStyle} layout
                      </p>
                    </div>
                    {currentTheme === theme.id && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};