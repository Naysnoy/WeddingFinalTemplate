import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, Users } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { WeddingConfig, RSVPResponse } from '../types/wedding';

interface RSVPProps {
  config: WeddingConfig;
}

export const RSVP: React.FC<RSVPProps> = ({ config }) => {
  const theme = useTheme(config.dressCode.colors);
  const [formData, setFormData] = useState<RSVPResponse>({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guestCount: 1,
    dietaryRestrictions: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store RSVP in localStorage (since no backend)
    const existingRSVPs = JSON.parse(localStorage.getItem('wedding-rsvps') || '[]');
    existingRSVPs.push({
      ...formData,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('wedding-rsvps', JSON.stringify(existingRSVPs));
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        attendance: 'yes',
        guestCount: 1,
        dietaryRestrictions: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guestCount' ? parseInt(value) : value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4\" style={{ background: theme.gradients.hero }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <CheckCircle size={64} className="mx-auto mb-6 text-green-500" />
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4" style={{ background: theme.gradients.hero }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            RSVP
          </h2>
          <p className="text-xl text-gray-600">
            Please let us know if you'll be joining our celebration
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <User size={20} className="mr-2" style={{ color: theme.primary }} />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300"
                style={{ focusRingColor: theme.primary }}
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Mail size={20} className="mr-2" style={{ color: theme.primary }} />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-2">
                <Phone size={20} className="mr-2" style={{ color: theme.primary }} />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="text-gray-700 font-medium mb-2 block">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'yes', label: 'Yes, I\'ll be there!', color: 'green' },
                  { value: 'no', label: 'Sorry, can\'t make it', color: 'red' },
                  { value: 'maybe', label: 'Not sure yet', color: 'yellow' }
                ].map((option) => (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      checked={formData.attendance === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-4 text-center rounded-2xl border-2 transition-all duration-300 ${
                      formData.attendance === option.value 
                        ? 'border-current shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ 
                      borderColor: formData.attendance === option.value ? theme.primary : undefined,
                      backgroundColor: formData.attendance === option.value ? `${theme.primary}10` : undefined
                    }}>
                      <span className="text-sm font-medium">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Guest Count */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="flex items-center text-gray-700 font-medium mb-2">
                  <Users size={20} className="mr-2" style={{ color: theme.primary }} />
                  Number of Guests (including yourself) *
                </label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Dietary Restrictions */}
            {formData.attendance === 'yes' && (
              <div>
                <label className="text-gray-700 font-medium mb-2 block">
                  Dietary Restrictions or Allergies
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300"
                  placeholder="Let us know about any dietary needs"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="text-gray-700 font-medium mb-2 block">
                Special Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                placeholder="Share your wishes or thoughts..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-8 rounded-2xl text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 transform flex items-center justify-center"
              style={{ backgroundColor: theme.primary }}
            >
              <Send size={20} className="mr-2" />
              Send RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};