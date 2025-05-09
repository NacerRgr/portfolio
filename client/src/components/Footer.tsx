export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="font-inter">MNE</span>
            </a>
          </div>
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {currentYear} Mohamed Nacer Er-ragragy. All Rights Reserved.</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/NacerRgr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-nacer-er-ragragy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="mailto:abdoragragy1@gmail.com"
              className="text-white hover:text-accent transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
