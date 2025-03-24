import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowRight, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';
import './App.css';

const SalmoonTokenWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countdownValue, setCountdownValue] = useState({
    days: 10,
    hours: 8,
    minutes: 45,
    seconds: 30
  });
  
  // Simulate countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownValue(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-800'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-4 px-6 shadow-md sticky top-0 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full overflow-hidden">
            <img src="/salmoon.png" alt="Salmoon Logo" className="h-full w-full object-cover" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">SALMOON</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-blue-500 transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-blue-500 transition-colors">Roadmap</a>
            <a href="#community" className="hover:text-blue-500 transition-colors">Community</a>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-blue-100 text-blue-800'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              Buy Salmoon
            </button>
            
            <button className="md:hidden" onClick={toggleMenu}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} py-4 px-6 shadow-md`}>
          <div className="flex flex-col space-y-4">
            <a href="#about" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#tokenomics" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>Tokenomics</a>
            <a href="#roadmap" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>Roadmap</a>
            <a href="#community" className="hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>Community</a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              Buy Salmoon
            </button>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">SALMOON:</span> The Crypto Ocean's Rising Star
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-80">Swimming upstream in the crypto current, ready to leap to the moon. Join the school of HODLers today!</p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </button>
              <button className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} px-8 py-3 rounded-full font-medium border-2 border-blue-500 hover:border-purple-500 transition-colors flex items-center gap-2`}>
                Learn More <ChevronDown size={18} />
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
              <img src="/salmoon.jpg" alt="Salmoon" className="w-3/4 h-3/4 object-contain transform hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Countdown Timer */}
      <section className={`${darkMode ? 'bg-blue-900' : 'bg-blue-100'} py-12`}>
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Public Sale Starting In:</h2>
          <div className="flex justify-center gap-4 md:gap-8">
            {Object.entries(countdownValue).map(([unit, value]) => (
              <div key={unit} className={`flex flex-col items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 md:p-6 rounded-lg shadow-lg min-w-20`}>
                <span className="text-2xl md:text-4xl font-bold text-blue-500">{value}</span>
                <span className="text-sm md:text-base capitalize opacity-80">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Salmoon?</h2>
            <p className="max-w-3xl mx-auto text-lg opacity-80">Swimming against the current in a sea of meme tokens, Salmoon combines the persistence of a salmon with the astronomical ambitions of crypto enthusiasts.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-transform hover:scale-105`}>
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-500 text-2xl">🌊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upstream Innovation</h3>
              <p className="opacity-80">Just like salmon swimming upstream, we're persistent in creating innovative DeFi solutions for our community.</p>
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-transform hover:scale-105`}>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-purple-500 text-2xl">🌙</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lunar Destination</h3>
              <p className="opacity-80">We're not just another fish in the sea - we're a salmon aiming for the moon with ambitious growth goals.</p>
            </div>
            
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-transform hover:scale-105`}>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-500 text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ocean Community</h3>
              <p className="opacity-80">Join our school of crypto enthusiasts and swim together in the vast ocean of decentralized finance.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tokenomics Section */}
      <section id="tokenomics" className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
            <p className="max-w-3xl mx-auto text-lg opacity-80">Understanding the flow of Salmoon tokens in our ecosystem</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              {/* Placeholder for chart - in real implementation you'd use recharts */}
              <div className="aspect-square max-w-md mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
                  <p className="text-lg font-medium">Token Distribution Chart</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                <h3 className="text-xl font-semibold mb-4">Token Details</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span>Token Name</span>
                    <span className="font-medium">Salmoon</span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span>Symbol</span>
                    <span className="font-medium">$SALMO</span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span>Total Supply</span>
                    <span className="font-medium">1,000,000,000</span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span>Presale Allocation</span>
                    <span className="font-medium">40%</span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span>Liquidity Pool</span>
                    <span className="font-medium">30%</span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span>Team & Development</span>
                    <span className="font-medium">15%</span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                    <span>Marketing</span>
                    <span className="font-medium">10%</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Community Rewards</span>
                    <span className="font-medium">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
            <p className="max-w-3xl mx-auto text-lg opacity-80">Our journey from stream to ocean to moon</p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-400 transform md:translate-x-px"></div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg md:ml-auto md:mr-0 max-w-md transition-transform hover:translate-x-1`}>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Phase 1: Spawning</h3>
                    <p className="opacity-80 mb-4">Q2 2025</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 justify-end">
                        <span>Website and social media launch</span>
                        <span className="text-green-500">✓</span>
                      </li>
                      <li className="flex items-center gap-2 justify-end">
                        <span>Community building</span>
                        <span className="text-green-500">✓</span>
                      </li>
                      <li className="flex items-center gap-2 justify-end">
                        <span>Smart contract development</span>
                        <span className="text-blue-500">⟳</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex justify-start md:justify-center order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center relative z-10">1</div>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 flex justify-start md:justify-center mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center relative z-10">2</div>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-md transition-transform hover:translate-x-1`}>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Phase 2: Swimming Upstream</h3>
                    <p className="opacity-80 mb-4">Q3 2025</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-blue-500">⟳</span>
                        <span>Token presale</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400">○</span>
                        <span>DEX listing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400">○</span>
                        <span>Marketing campaign</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg md:ml-auto md:mr-0 max-w-md transition-transform hover:translate-x-1`}>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Phase 3: Reaching the Ocean</h3>
                    <p className="opacity-80 mb-4">Q4 2025</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 justify-end">
                        <span>CEX listings</span>
                        <span className="text-gray-400">○</span>
                      </li>
                      <li className="flex items-center gap-2 justify-end">
                        <span>NFT collection launch</span>
                        <span className="text-gray-400">○</span>
                      </li>
                      <li className="flex items-center gap-2 justify-end">
                        <span>Cross-chain bridge</span>
                        <span className="text-gray-400">○</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex justify-start md:justify-center order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center relative z-10">3</div>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 flex justify-start md:justify-center mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center relative z-10">4</div>
                </div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg max-w-md transition-transform hover:translate-x-1`}>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Phase 4: To the Moon</h3>
                    <p className="opacity-80 mb-4">Q1 2026</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400">○</span>
                        <span>Salmoon DApp ecosystem</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400">○</span>
                        <span>Governance implementation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400">○</span>
                        <span>Global partnership announcements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Section */}
      <section id="community" className={`py-16 md:py-24 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="max-w-3xl mx-auto text-lg opacity-80">Become part of the Salmoon school and swim with us to new heights</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['Twitter', 'Telegram', 'Discord', 'Medium'].map((platform) => (
              <a 
                key={platform}
                href="https://x.com/zenjoee" 
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-white hover:bg-blue-100'} shadow-lg transition-all flex flex-col items-center justify-center gap-4 group`}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ExternalLink size={30} />
                </div>
                <span className="text-lg font-medium">Join on {platform}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Subscribe to Our Newsletter</h3>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={`flex-1 px-4 py-3 rounded-l-lg focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border`}
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-r-lg font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="h-10 w-10 rounded-full overflow-hidden">
              <img src="/logo.png" alt="Salmoon Logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">SALMOON</span>
            </div>
            
            <div className="flex gap-4">
              <a href="https://x.com/zenjoee" className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} flex items-center justify-center transition-colors`}>
                <span>T</span>
              </a>
              <a href="https://t.me/airdroplim" className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} flex items-center justify-center transition-colors`}>
                <span>TG</span>
              </a>
              <a href="https://.discord.com/" className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} flex items-center justify-center transition-colors`}>
                <span>D</span>
              </a>
              <a href="https://medium.com/@zenjoee" className={`w-10 h-10 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-200'} flex items-center justify-center transition-colors`}>
                <span>M</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-medium mb-4">About</h4>
                <ul className="space-y-2 opacity-80">
                  <li><a href="..public/bitcoin.pdf" className="hover:text-blue-500 transition-colors">Our Story</a></li>
                  <li><a href="..public/bitcoin.pdf" className="hover:text-blue-500 transition-colors">Team</a></li>
                  <li><a href="..public/bitcoin.pdf" className="hover:text-blue-500 transition-colors">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Resources</h4>
                <ul className="space-y-2 opacity-80">
                  <li><a href="..public/bitcoin.pdf" className="hover:text-blue-500 transition-colors">Whitepaper</a></li>
                  <li><a href="..public/bitcoin.pdf" className="hover:text-blue-500 transition-colors">Documentation</a></li>
                  <li><a href="..public/bitcoin.pdf" className="hover:text-blue-500 transition-colors">Media Kit</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Community</h4>
                <ul className="space-y-2 opacity-80">
                  <li><a href="https://x.com/zenjoee" className="hover:text-blue-500 transition-colors">Twitter</a></li>
                  <li><a href="https://t.me/whalevomitcalls" className="hover:text-blue-500 transition-colors">Telegram</a></li>
                  <li><a href="https://discord.com/" className="hover:text-blue-500 transition-colors">Discord</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Legal</h4>
                <ul className="space-y-2 opacity-80">
                  <li><a href="..public/disclaimer.pdf" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="..public/disclaimer.pdf" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                  <li><a href="..public/disclaimer.pdf" className="hover:text-blue-500 transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="text-center opacity-70 text-sm">
              <p>© 2025 Salmoon Token. All rights reserved.</p>
              <p className="mt-2">The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalmoonTokenWebsite;