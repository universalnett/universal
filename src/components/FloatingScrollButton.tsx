import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';
import { DISPLAY_PHONE } from '@/lib/constants';

const FloatingScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <PhoneButton className="w-44 h-12 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300 neon-glow">{DISPLAY_PHONE}</PhoneButton>
        </div>
      )}
    </>
  );
};

export default FloatingScrollButton;