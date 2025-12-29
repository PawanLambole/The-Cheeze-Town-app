import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import cafeLogo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="relative bg-[#121212] border-t border-[#FFB800]/15">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-black flex items-center justify-center">
                <img src={cafeLogo} alt="The Cheese Town logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-white">The Cheese Town</span>
            </div>
            <p className="text-gray-400">
              A cozy cafe powered by our own app to keep your orders smooth and your table happy.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-[#FFB800]/10 transition-colors">
                <Facebook className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-[#FFB800]/10 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
              <a href="https://www.instagram.com/thecheestowncafe7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-[#FFB800]/10 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-[#FFB800]/10 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Visit Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>The Cheese Town</li>
              <li>In front of V.W.S College, Sakri Road, Monster Gym,Dhule 424001</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="tel:+919823227596" className="text-gray-400 hover:text-[#FFB800] transition-colors">+91 98232 27596</a></li>
              <li><a href="mailto:thecheesetown@gmail.com" className="text-gray-400 hover:text-[#FFB800] transition-colors">thecheesetown@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FFB800]/15 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Cheese Town. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
