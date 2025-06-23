import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('Burgers');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Données du menu exactes d'après le flyer officiel
  const menuData = {
    'Sandwichs': [
      { 
        name: 'Sandwich seul', 
        price: '6.00€',
        description: 'Viandes fraîches : Escalope de poulet, Cordon bleu, Steak haché, Merguez, Kebab, Tenders. Pain ou Galette, viande au choix, sauce au choix, salade, tomates, oignons'
      },
      { 
        name: 'Menu sandwich', 
        price: '8.00€',
        description: 'Sandwich + Frites + Boisson'
      }
    ],
    'Burgers': [
      { 
        name: 'Burger Classique', 
        price: '4.50€ - Menu 6.50€',
        description: 'Steak haché, sauce au choix, salade, tomates, oignons, cheddar'
      },
      { 
        name: 'Chicken Burger', 
        price: '5.50€ - Menu 7.50€',
        description: 'Escalope de poulet grillé maison, sauce au choix, tomates, cheddar'
      },
      { 
        name: 'MB Burger', 
        price: '6.50€ - Menu 8.50€',
        description: 'Steak haché, sauce au choix, cordon, roulette, oignons'
      }
    ],
    'Tacos': [
      { 
        name: 'Tacos Taille M (1 viande)', 
        price: '5.00€ - Menu 8.00€',
        description: '1 viande au choix, sauce au choix, sauce fromagère, frites'
      },
      { 
        name: 'Tacos Taille L (2 viandes)', 
        price: '7.50€ - Menu 9.50€',
        description: '2 viandes au choix, sauce au choix, sauce fromagère, frites'
      },
      { 
        name: 'Tacos Taille XL (3 viandes)', 
        price: '8.50€ - Menu 10.50€',
        description: '3 viandes au choix, sauce au choix, sauce fromagère, frites'
      },
      { 
        name: 'MB Gold', 
        price: '6.00€ - Menu 8.00€',
        description: '1 viande au choix, sauce au choix, sauce fromagère, frites'
      }
    ],
    'Paninis': [
      { 
        name: 'Panini 3 Fromages', 
        price: '4.50€ - Menu 6.50€',
        description: 'Chèvre, Mozzarella, Emmental'
      },
      { 
        name: 'Panini L\'Italien', 
        price: '4.50€ - Menu 6.50€',
        description: 'Tomates, Mozzarella, Pesto'
      },
      { 
        name: 'Panini Chicken', 
        price: '4.50€ - Menu 6.50€',
        description: 'Poulet, Mozzarella, Tomates'
      }
    ],
    'Assiettes': [
      { 
        name: 'Assiettes Généreuses', 
        price: '15.00€',
        description: 'Viandes fraîches : Escalope de poulet grillé maison, Steak haché, Merguez, Kebab. Servi avec frites maison, salade fraîche et sauces'
      }
    ],
    'Petites Faims': [
      { name: 'Cheese Burger', price: '3.50€' },
      { name: 'Pilons Wings (3 pièces de poulet)', price: '3.50€' },
      { name: 'Menu Poulet x4', price: '3.50€' },
      { name: 'Tempura Crevettes x4', price: '3.50€' },
      { name: 'Stick Mozza x4', price: '3.50€' },
      { name: 'Oignons Rings x4', price: '3.00€' },
      { name: 'Frites Fraîches Maison (Petite)', price: '2.00€' },
      { name: 'Frites Fraîches Maison (Grande)', price: '3.00€' },
      { name: 'Nuggets x4', price: '2.00€' },
      { name: 'Nuggets x6', price: '3.00€' },
      { name: 'Nuggets x8', price: '4.00€' },
      { name: 'Samoussas', price: '4.00€ - 6.00€' }
    ],
    'MB Kids': [
      { 
        name: 'Menu MB Kids', 
        price: '5.00€',
        description: '1 Cheese Burger ou 4 Nuggets + Frites + Capri Sun + Compote + Surprise'
      }
    ],
    'Suppléments': [
      { name: 'Supplément Cheddar', price: '0.50€' },
      { name: 'Supplément Sauce Cheddar', price: '0.50€' },
      { name: 'Supplément Sauce Fromagère', price: '0.50€' },
      { name: 'Supplément Crispy Oignons', price: '0.50€' },
      { name: 'Supplément Fromage Râpé', price: '0.50€' },
      { name: 'Supplément Œuf', price: '0.50€' },
      { name: 'Supplément Oignons Cru', price: '0.50€' },
      { name: 'Supplément Oignons Cuits', price: '0.50€' }
    ],
    'Sauces': [
      { name: 'Ketchup, Mayonnaise, Moutarde', price: 'Inclus' },
      { name: 'Algérienne, Biggy, Brasil', price: 'Inclus' },
      { name: 'Barbecue, Poivre, Sauce Blanche', price: 'Inclus' },
      { name: 'Harissa, Samurai, Andalouse', price: 'Inclus' }
    ],
    'Desserts': [
      { name: 'Donuts', price: '1.50€' },
      { name: 'Tarte au Daim', price: '2.50€' },
      { name: 'Tiramisu', price: '3.00€' },
      { name: 'Tarte du Jour', price: '3.50€' }
    ],
    'Boissons': [
      { name: 'Bouteille d\'eau', price: '1.00€' },
      { name: 'Café', price: '1.00€' },
      { name: 'Canette de Soda', price: '1.50€' },
      { name: 'Jus de...', price: '1.50€' },
      { name: 'Oasis', price: '1.50€' },
      { name: 'Capri Sun', price: '1.50€' },
      { name: 'Lipton Iced', price: '2.00€' },
      { name: 'Limonade', price: '2.00€' },
      { name: 'RedBull', price: '2.00€' },
      { name: 'Boisson Chaude', price: '3.00€' }
    ]
  };

  const specialties = [
    {
      title: 'Tacos Premium',
      description: 'Nos tacos en 3 tailles (M/L/XL) avec viandes halal sélectionnées : Escalope de poulet, Cordon bleu, Steak haché, Nuggets, Kebab, Tenders',
      image: 'https://images.pexels.com/photos/9095708/pexels-photo-9095708.jpeg',
      price: 'à partir de 5.00€'
    },
    {
      title: 'Burgers Artisanaux',
      description: 'Burgers maison avec escalope de poulet grillé ou steak haché frais, accompagnés de nos sauces signature',
      image: 'https://images.pexels.com/photos/11690683/pexels-photo-11690683.jpeg',
      price: 'à partir de 4.50€'
    },
    {
      title: 'Assiettes Généreuses',
      description: 'Assiettes complètes à 15€ avec viandes halal fraîches, frites maison et salade. Un repas complet et savoureux !',
      image: 'https://images.unsplash.com/photo-1700513970028-d8a630d21c6e',
      price: '15.00€'
    }
  ];

  const viandes = [
    'Escalope de poulet grillé maison',
    'Steak haché frais',
    'Cordon bleu',
    'Merguez',
    'Kebab',
    'Tenders croustillants',
    'Nuggets'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-white">
                <span className="text-orange-500">MB</span> FOOD
              </div>
              <div className="hidden sm:block text-xs text-orange-400 font-semibold">
                HALAL • URBAIN • RAPIDE
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-white hover:text-orange-400 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('specialites')} className="text-white hover:text-orange-400 transition-colors">Spécialités</button>
              <button onClick={() => scrollToSection('menu')} className="text-white hover:text-orange-400 transition-colors">Menu</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-orange-400 transition-colors">Contact</button>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://www.snapchat.com/add/mbfood13" target="_blank" rel="noopener noreferrer" 
                 className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Commander sur Snap
              </a>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-orange-500/20">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('accueil')} className="block text-white hover:text-orange-400 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('specialites')} className="block text-white hover:text-orange-400 transition-colors">Spécialités</button>
              <button onClick={() => scrollToSection('menu')} className="block text-white hover:text-orange-400 transition-colors">Menu</button>
              <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-orange-400 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/11690674/pexels-photo-11690674.jpeg" 
            alt="MB Food Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-orange-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="text-orange-500">MB</span> FOOD
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">HALAL</span>
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">URBAIN</span>
              <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">RAPIDE</span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light text-white mb-8 leading-relaxed">
            Snack halal urbain, <span className="text-orange-400 font-semibold">rapide</span> et <span className="text-orange-400 font-semibold">généreux</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Spécialités tacos, burgers et assiettes maison préparées avec passion dans le cœur de La Roque-d'Anthéron
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://www.snapchat.com/add/mbfood13" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              🔥 Commander Maintenant
            </a>
            <button onClick={() => scrollToSection('menu')}
                    className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Voir le Menu
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Spécialités Section */}
      <section id="specialites" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos <span className="text-orange-500">Spécialités</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos créations signature, préparées avec des ingrédients frais et halal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {specialties.map((specialty, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={specialty.image} 
                    alt={specialty.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-orange-400 font-bold text-lg">
                    {specialty.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{specialty.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{specialty.description}</p>
                </div>
                
                <div className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Section Viandes Fraîches */}
          <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-3xl font-bold text-center text-white mb-6">🥩 Nos Viandes Fraîches Halal</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {viandes.map((viande, index) => (
                <div key={index} className="flex items-center space-x-3 bg-black/30 rounded-lg p-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-white font-medium">{viande}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-orange-300 font-semibold">Toutes nos viandes sont certifiées halal et préparées fraîches chaque jour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre <span className="text-orange-500">Menu</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tous nos produits sont certifiés halal et préparés avec soin
            </p>
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveMenu(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeMenu === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">
                {activeMenu}
              </h3>
              
              <div className="grid gap-4">
                {menuData[activeMenu]?.map((item, index) => (
                  <div key={index} className="p-6 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl hover:from-gray-600/60 hover:to-gray-700/60 transition-all duration-300 border border-orange-500/10 hover:border-orange-500/30">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <h4 className="text-white font-bold text-lg mb-2">{item.name}</h4>
                        {item.description && (
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                        )}
                      </div>
                      <div className="text-orange-400 font-bold text-lg whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">🌶️ Nos Sauces Signature</h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="text-gray-300">
                  <div className="font-semibold mb-2">Classiques</div>
                  <div className="text-sm">Ketchup, Mayonnaise, Moutarde</div>
                </div>
                <div className="text-gray-300">
                  <div className="font-semibold mb-2">Épicées</div>
                  <div className="text-sm">Algérienne, Harissa, Samurai</div>
                </div>
                <div className="text-gray-300">
                  <div className="font-semibold mb-2">Gourmandes</div>
                  <div className="text-sm">Barbecue, Brasil, Andalouse</div>
                </div>
                <div className="text-gray-300">
                  <div className="font-semibold mb-2">Spéciales</div>
                  <div className="text-sm">Sauce Blanche, Poivre, Biggy</div>
                </div>
              </div>
            </div>
            
            <a href="https://www.snapchat.com/add/mbfood13" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.414-5.997 1.414-5.997s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
              Commander sur Snapchat
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nous <span className="text-orange-500">Contacter</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ouvert 7j/7 pour vous servir
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Horaires */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Horaires d'ouverture</h3>
                </div>
                <div className="text-orange-400 font-semibold text-lg">
                  Lundi - Dimanche : 11h00 - 23h00
                </div>
              </div>

              {/* Adresse */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Adresse</h3>
                </div>
                <div className="text-gray-300">
                  <p>2 Place de la République</p>
                  <p>13640 La Roque-d'Anthéron, France</p>
                  <a href="https://www.google.com/maps?q=2+Place+de+la+République,+13640+La+Roque-d%27Anthéron,+France" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-orange-400 hover:text-orange-300 font-semibold mt-2 inline-block">
                    📍 Voir sur Google Maps
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Téléphone</h3>
                </div>
                <a href="tel:0698398025" className="text-orange-400 hover:text-orange-300 font-semibold text-lg">
                  06 98 39 80 25
                </a>
              </div>
            </div>

            <div className="space-y-8">
              {/* Réseaux sociaux */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Suivez-nous</h3>
                
                <div className="space-y-4">
                  <a href="https://www.snapchat.com/add/mbfood13" target="_blank" rel="noopener noreferrer"
                     className="flex items-center p-4 bg-yellow-500 rounded-xl hover:bg-yellow-600 transition-colors duration-300 text-white font-semibold">
                    <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.414-5.997 1.414-5.997s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                    <div>
                      <div className="font-bold">Commander sur Snapchat</div>
                      <div className="text-sm opacity-90">@mbfood13</div>
                    </div>
                  </a>

                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://www.instagram.com/mb__food__?igsh=aXl2cmJ4MDdlcmVi" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 text-white font-semibold">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>

                    <a href="https://m.facebook.com/m.b.food.341323?wtsid=rdr_0oHetTxGAKzHh2YPL" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-center p-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300 text-white font-semibold">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Menu Enfant highlight */}
              <div className="bg-gradient-to-br from-purple-800 to-purple-900 p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">🎁 Menu Enfant</h3>
                  <p className="text-purple-200 mb-4">
                    MB Kids : Cheeseburger ou 4 nuggets + frites + Capri Sun + compote + surprise
                  </p>
                  <div className="text-yellow-400 font-bold text-xl">5.00€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-4">
              <span className="text-orange-500">MB</span> FOOD
            </div>
            <p className="text-gray-400 mb-6">
              Snack halal urbain, rapide et généreux • La Roque-d'Anthéron
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.snapchat.com/add/mbfood13" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <span className="sr-only">Snapchat</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.414-5.997 1.414-5.997s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mb__food__?igsh=aXl2cmJ4MDdlcmVi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://m.facebook.com/m.b.food.341323?wtsid=rdr_0oHetTxGAKzHh2YPL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © 2025 MB FOOD. Tous droits réservés. | 
                <a href="tel:0698398025" className="text-orange-400 hover:text-orange-300 ml-2">
                  06 98 39 80 25
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;