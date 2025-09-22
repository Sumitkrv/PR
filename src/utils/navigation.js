// Utility function to smooth scroll to sections
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Navigation handler for section links
export const handleSectionClick = (e, sectionId, offset = 80) => {
  e.preventDefault();
  scrollToSection(sectionId, offset);
};