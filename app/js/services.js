'use strict'

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('data', []).service('data', [
  function data() {
    var bootstrap_files = [
      '_ads.scss',
      '_alert.scss',
      '_algolia.scss',
      '_anchor.scss',
      '_badge.scss',
      '_brand.scss',
      '_breadcrumb.scss',
      '_browser-bugs.scss',
      '_button-group.scss',
      '_buttons.scss',
      '_callouts.scss',
      '_card.scss',
      '_carousel.scss',
      '_clipboard-js.scss',
      '_close.scss',
      '_code.scss',
      '_colors.scss',
      '_component-examples.scss',
      '_content.scss',
      '_custom-forms.scss',
      '_dropdown.scss',
      '_examples.scss',
      '_featured-sites.scss',
      '_footer.scss',
      '_forms.scss',
      '_functions.scss',
      '_grid.scss',
      '_images.scss',
      '_input-group.scss',
      '_jumbotron.scss',
      '_list-group.scss',
      '_masthead.scss',
      '_media.scss',
      '_mixins.scss',
      '_modal.scss',
      '_nav.scss',
      '_navbar.scss',
      '_page-header.scss',
      '_pagination.scss',
      '_popover.scss',
      '_print.scss',
      '_progress.scss',
      '_reboot.scss',
      '_responsive-tests.scss',
      '_sidebar.scss',
      '_skiplink.scss',
      '_syntax.scss',
      '_tables.scss',
      '_team.scss',
      '_tooltip.scss',
      '_transitions.scss',
      '_type.scss',
      '_utilities.scss',
      'bootstrap-grid.scss',
      'bootstrap-reboot.scss',
      'bootstrap.scss',
      'mixins/_alert.scss',
      'mixins/_background-variant.scss',
      'mixins/_badge.scss',
      'mixins/_border-radius.scss',
      'mixins/_box-shadow.scss',
      'mixins/_breakpoints.scss',
      'mixins/_buttons.scss',
      'mixins/_clearfix.scss',
      'mixins/_float.scss',
      'mixins/_forms.scss',
      'mixins/_gradients.scss',
      'mixins/_grid-framework.scss',
      'mixins/_grid.scss',
      'mixins/_hover.scss',
      'mixins/_image.scss',
      'mixins/_list-group.scss',
      'mixins/_lists.scss',
      'mixins/_nav-divider.scss',
      'mixins/_navbar-align.scss',
      'mixins/_pagination.scss',
      'mixins/_reset-text.scss',
      'mixins/_resize.scss',
      'mixins/_screen-reader.scss',
      'mixins/_size.scss',
      'mixins/_table-row.scss',
      'mixins/_text-emphasis.scss',
      'mixins/_text-hide.scss',
      'mixins/_text-truncate.scss',
      'mixins/_transition.scss',
      'mixins/_visibility.scss',
      'utilities/_align.scss',
      'utilities/_background.scss',
      'utilities/_borders.scss',
      'utilities/_clearfix.scss',
      'utilities/_display.scss',
      'utilities/_embed.scss',
      'utilities/_flex.scss',
      'utilities/_float.scss',
      'utilities/_position.scss',
      'utilities/_screenreaders.scss',
      'utilities/_sizing.scss',
      'utilities/_spacing.scss',
      'utilities/_text.scss',
      'utilities/_visibility.scss',
      'docs.scss'
    ]

    var cssToAdd = `
      $custom-checkbox-indicator-icon-checked: str-replace(
        url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$custom-control-indicator-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E"),
        '#',
        '%23'
        )
        !default;
      $custom-checkbox-indicator-icon-indeterminate: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#{$custom-checkbox-indicator-indeterminate-color}' d='M0 2h4'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $custom-radio-indicator-icon-checked: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#{$custom-control-indicator-checked-color}'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      
      $custom-select-indicator: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $navbar-dark-toggler-icon-bg: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-dark-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $navbar-light-toggler-icon-bg: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $carousel-control-prev-icon-bg: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $carousel-control-next-icon-bg: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
    `

    var font_keys = [
      "'Helvetica Neue', Helvetica, Arial",
      'Georgia',
      "'Courrier New', Consolas",
      'Impact',
      "'Lucida Console', Monaco",
      "'Palatino Linotype','Book Antiqua'",
      "'Trebuchet MS'",
      'Tahoma, Geneva',
      'Verdana, Geneva',
      "'Times New Roman', Times",
      'ABeeZee',
      'Abel',
      'Abhaya Libre',
      'Abril Fatface',
      'Aclonica',
      'Acme',
      'Actor',
      'Adamina',
      'Advent Pro',
      'Aguafina Script',
      'Akronim',
      'Aladin',
      'Aldrich',
      'Alef',
      'Alegreya',
      'Alegreya SC',
      'Alegreya Sans',
      'Alegreya Sans SC',
      'Alex Brush',
      'Alfa Slab One',
      'Alice',
      'Alike',
      'Alike Angular',
      'Allan',
      'Allerta',
      'Allerta Stencil',
      'Allura',
      'Almendra',
      'Almendra Display',
      'Almendra SC',
      'Amarante',
      'Amaranth',
      'Amatic SC',
      'Amethysta',
      'Amiko',
      'Amiri',
      'Amita',
      'Anaheim',
      'Andada',
      'Andika',
      'Angkor',
      'Annie Use Your Telescope',
      'Anonymous Pro',
      'Antic',
      'Antic Didone',
      'Antic Slab',
      'Anton',
      'Arapey',
      'Arbutus',
      'Arbutus Slab',
      'Architects Daughter',
      'Archivo',
      'Archivo Black',
      'Archivo Narrow',
      'Aref Ruqaa',
      'Arima Madurai',
      'Arimo',
      'Arizonia',
      'Armata',
      'Arsenal',
      'Artifika',
      'Arvo',
      'Arya',
      'Asap',
      'Asap Condensed',
      'Asar',
      'Asset',
      'Assistant',
      'Astloch',
      'Asul',
      'Athiti',
      'Atma',
      'Atomic Age',
      'Aubrey',
      'Audiowide',
      'Autour One',
      'Average',
      'Average Sans',
      'Averia Gruesa Libre',
      'Averia Libre',
      'Averia Sans Libre',
      'Averia Serif Libre',
      'Bad Script',
      'Bahiana',
      'Baloo',
      'Baloo Bhai',
      'Baloo Bhaijaan',
      'Baloo Bhaina',
      'Baloo Chettan',
      'Baloo Da',
      'Baloo Paaji',
      'Baloo Tamma',
      'Baloo Tammudu',
      'Baloo Thambi',
      'Balthazar',
      'Bangers',
      'Barrio',
      'Basic',
      'Battambang',
      'Baumans',
      'Bayon',
      'Belgrano',
      'Bellefair',
      'Belleza',
      'BenchNine',
      'Bentham',
      'Berkshire Swash',
      'Bevan',
      'Bigelow Rules',
      'Bigshot One',
      'Bilbo',
      'Bilbo Swash Caps',
      'BioRhyme',
      'BioRhyme Expanded',
      'Biryani',
      'Bitter',
      'Black Ops One',
      'Bokor',
      'Bonbon',
      'Boogaloo',
      'Bowlby One',
      'Bowlby One SC',
      'Brawler',
      'Bree Serif',
      'Bubblegum Sans',
      'Bubbler One',
      'Buda',
      'Buenard',
      'Bungee',
      'Bungee Hairline',
      'Bungee Inline',
      'Bungee Outline',
      'Bungee Shade',
      'Butcherman',
      'Butterfly Kids',
      'Cabin',
      'Cabin Condensed',
      'Cabin Sketch',
      'Caesar Dressing',
      'Cagliostro',
      'Cairo',
      'Calligraffitti',
      'Cambay',
      'Cambo',
      'Candal',
      'Cantarell',
      'Cantata One',
      'Cantora One',
      'Capriola',
      'Cardo',
      'Carme',
      'Carrois Gothic',
      'Carrois Gothic SC',
      'Carter One',
      'Catamaran',
      'Caudex',
      'Caveat',
      'Caveat Brush',
      'Cedarville Cursive',
      'Ceviche One',
      'Changa',
      'Changa One',
      'Chango',
      'Chathura',
      'Chau Philomene One',
      'Chela One',
      'Chelsea Market',
      'Chenla',
      'Cherry Cream Soda',
      'Cherry Swash',
      'Chewy',
      'Chicle',
      'Chivo',
      'Chonburi',
      'Cinzel',
      'Cinzel Decorative',
      'Clicker Script',
      'Coda',
      'Coda Caption',
      'Codystar',
      'Coiny',
      'Combo',
      'Comfortaa',
      'Coming Soon',
      'Concert One',
      'Condiment',
      'Content',
      'Contrail One',
      'Convergence',
      'Cookie',
      'Copse',
      'Corben',
      'Cormorant',
      'Cormorant Garamond',
      'Cormorant Infant',
      'Cormorant SC',
      'Cormorant Unicase',
      'Cormorant Upright',
      'Courgette',
      'Cousine',
      'Coustard',
      'Covered By Your Grace',
      'Crafty Girls',
      'Creepster',
      'Crete Round',
      'Crimson Text',
      'Croissant One',
      'Crushed',
      'Cuprum',
      'Cutive',
      'Cutive Mono',
      'Damion',
      'Dancing Script',
      'Dangrek',
      'David Libre',
      'Dawning of a New Day',
      'Days One',
      'Dekko',
      'Delius',
      'Delius Swash Caps',
      'Delius Unicase',
      'Della Respira',
      'Denk One',
      'Devonshire',
      'Dhurjati',
      'Didact Gothic',
      'Diplomata',
      'Diplomata SC',
      'Domine',
      'Donegal One',
      'Doppio One',
      'Dorsa',
      'Dosis',
      'Dr Sugiyama',
      'Droid Sans',
      'Droid Sans Mono',
      'Droid Serif',
      'Duru Sans',
      'Dynalight',
      'EB Garamond',
      'Eagle Lake',
      'Eater',
      'Economica',
      'Eczar',
      'El Messiri',
      'Electrolize',
      'Elsie',
      'Elsie Swash Caps',
      'Emblema One',
      'Emilys Candy',
      'Encode Sans',
      'Encode Sans Condensed',
      'Encode Sans Expanded',
      'Encode Sans Semi Condensed',
      'Encode Sans Semi Expanded',
      'Engagement',
      'Englebert',
      'Enriqueta',
      'Erica One',
      'Esteban',
      'Euphoria Script',
      'Ewert',
      'Exo',
      'Exo 2',
      'Expletus Sans',
      'Fanwood Text',
      'Farsan',
      'Fascinate',
      'Fascinate Inline',
      'Faster One',
      'Fasthand',
      'Fauna One',
      'Faustina',
      'Federant',
      'Federo',
      'Felipa',
      'Fenix',
      'Finger Paint',
      'Fira Mono',
      'Fira Sans',
      'Fira Sans Condensed',
      'Fira Sans Extra Condensed',
      'Fjalla One',
      'Fjord One',
      'Flamenco',
      'Flavors',
      'Fondamento',
      'Fontdiner Swanky',
      'Forum',
      'Francois One',
      'Frank Ruhl Libre',
      'Freckle Face',
      'Fredericka the Great',
      'Fredoka One',
      'Freehand',
      'Fresca',
      'Frijole',
      'Fruktur',
      'Fugaz One',
      'GFS Didot',
      'GFS Neohellenic',
      'Gabriela',
      'Gafata',
      'Galada',
      'Galdeano',
      'Galindo',
      'Gentium Basic',
      'Gentium Book Basic',
      'Geo',
      'Geostar',
      'Geostar Fill',
      'Germania One',
      'Gidugu',
      'Gilda Display',
      'Give You Glory',
      'Glass Antiqua',
      'Glegoo',
      'Gloria Hallelujah',
      'Goblin One',
      'Gochi Hand',
      'Gorditas',
      'Goudy Bookletter 1911',
      'Graduate',
      'Grand Hotel',
      'Gravitas One',
      'Great Vibes',
      'Griffy',
      'Gruppo',
      'Gudea',
      'Gurajada',
      'Habibi',
      'Halant',
      'Hammersmith One',
      'Hanalei',
      'Hanalei Fill',
      'Handlee',
      'Hanuman',
      'Happy Monkey',
      'Harmattan',
      'Headland One',
      'Heebo',
      'Henny Penny',
      'Herr Von Muellerhoff',
      'Hind',
      'Hind Guntur',
      'Hind Madurai',
      'Hind Siliguri',
      'Hind Vadodara',
      'Holtwood One SC',
      'Homemade Apple',
      'Homenaje',
      'IM Fell DW Pica',
      'IM Fell DW Pica SC',
      'IM Fell Double Pica',
      'IM Fell Double Pica SC',
      'IM Fell English',
      'IM Fell English SC',
      'IM Fell French Canon',
      'IM Fell French Canon SC',
      'IM Fell Great Primer',
      'IM Fell Great Primer SC',
      'Iceberg',
      'Iceland',
      'Imprima',
      'Inconsolata',
      'Inder',
      'Indie Flower',
      'Inika',
      'Inknut Antiqua',
      'Irish Grover',
      'Istok Web',
      'Italiana',
      'Italianno',
      'Itim',
      'Jacques Francois',
      'Jacques Francois Shadow',
      'Jaldi',
      'Jim Nightshade',
      'Jockey One',
      'Jolly Lodger',
      'Jomhuria',
      'Josefin Sans',
      'Josefin Slab',
      'Joti One',
      'Judson',
      'Julee',
      'Julius Sans One',
      'Junge',
      'Jura',
      'Just Another Hand',
      'Just Me Again Down Here',
      'Kadwa',
      'Kalam',
      'Kameron',
      'Kanit',
      'Kantumruy',
      'Karla',
      'Karma',
      'Katibeh',
      'Kaushan Script',
      'Kavivanar',
      'Kavoon',
      'Kdam Thmor',
      'Keania One',
      'Kelly Slab',
      'Kenia',
      'Khand',
      'Khmer',
      'Khula',
      'Kite One',
      'Knewave',
      'Kotta One',
      'Koulen',
      'Kranky',
      'Kreon',
      'Kristi',
      'Krona One',
      'Kumar One',
      'Kumar One Outline',
      'Kurale',
      'La Belle Aurore',
      'Laila',
      'Lakki Reddy',
      'Lalezar',
      'Lancelot',
      'Lateef',
      'Lato',
      'League Script',
      'Leckerli One',
      'Ledger',
      'Lekton',
      'Lemon',
      'Lemonada',
      'Libre Barcode 128',
      'Libre Barcode 128 Text',
      'Libre Barcode 39',
      'Libre Barcode 39 Extended',
      'Libre Barcode 39 Extended Text',
      'Libre Barcode 39 Text',
      'Libre Baskerville',
      'Libre Franklin',
      'Life Savers',
      'Lilita One',
      'Lily Script One',
      'Limelight',
      'Linden Hill',
      'Lobster',
      'Lobster Two',
      'Londrina Outline',
      'Londrina Shadow',
      'Londrina Sketch',
      'Londrina Solid',
      'Lora',
      'Love Ya Like A Sister',
      'Loved by the King',
      'Lovers Quarrel',
      'Luckiest Guy',
      'Lusitana',
      'Lustria',
      'Macondo',
      'Macondo Swash Caps',
      'Mada',
      'Magra',
      'Maiden Orange',
      'Maitree',
      'Mako',
      'Mallanna',
      'Mandali',
      'Manuale',
      'Marcellus',
      'Marcellus SC',
      'Marck Script',
      'Margarine',
      'Marko One',
      'Marmelad',
      'Martel',
      'Martel Sans',
      'Marvel',
      'Mate',
      'Mate SC',
      'Maven Pro',
      'McLaren',
      'Meddon',
      'MedievalSharp',
      'Medula One',
      'Meera Inimai',
      'Megrim',
      'Meie Script',
      'Merienda',
      'Merienda One',
      'Merriweather',
      'Merriweather Sans',
      'Metal',
      'Metal Mania',
      'Metamorphous',
      'Metrophobic',
      'Michroma',
      'Milonga',
      'Miltonian',
      'Miltonian Tattoo',
      'Miniver',
      'Miriam Libre',
      'Mirza',
      'Miss Fajardose',
      'Mitr',
      'Modak',
      'Modern Antiqua',
      'Mogra',
      'Molengo',
      'Molle',
      'Monda',
      'Monofett',
      'Monoton',
      'Monsieur La Doulaise',
      'Montaga',
      'Montez',
      'Montserrat',
      'Montserrat Alternates',
      'Montserrat Subrayada',
      'Moul',
      'Moulpali',
      'Mountains of Christmas',
      'Mouse Memoirs',
      'Mr Bedfort',
      'Mr Dafoe',
      'Mr De Haviland',
      'Mrs Saint Delafield',
      'Mrs Sheppards',
      'Mukta',
      'Mukta Mahee',
      'Mukta Malar',
      'Mukta Vaani',
      'Muli',
      'Mystery Quest',
      'NTR',
      'Neucha',
      'Neuton',
      'New Rocker',
      'News Cycle',
      'Niconne',
      'Nixie One',
      'Nobile',
      'Nokora',
      'Norican',
      'Nosifer',
      'Nothing You Could Do',
      'Noticia Text',
      'Noto Sans',
      'Noto Serif',
      'Nova Cut',
      'Nova Flat',
      'Nova Mono',
      'Nova Oval',
      'Nova Round',
      'Nova Script',
      'Nova Slim',
      'Nova Square',
      'Numans',
      'Nunito',
      'Nunito Sans',
      'Odor Mean Chey',
      'Offside',
      'Old Standard TT',
      'Oldenburg',
      'Oleo Script',
      'Oleo Script Swash Caps',
      'Open Sans',
      'Open Sans Condensed',
      'Oranienbaum',
      'Orbitron',
      'Oregano',
      'Orienta',
      'Original Surfer',
      'Oswald',
      'Over the Rainbow',
      'Overlock',
      'Overlock SC',
      'Overpass',
      'Overpass Mono',
      'Ovo',
      'Oxygen',
      'Oxygen Mono',
      'PT Mono',
      'PT Sans',
      'PT Sans Caption',
      'PT Sans Narrow',
      'PT Serif',
      'PT Serif Caption',
      'Pacifico',
      'Padauk',
      'Palanquin',
      'Palanquin Dark',
      'Pangolin',
      'Paprika',
      'Parisienne',
      'Passero One',
      'Passion One',
      'Pathway Gothic One',
      'Patrick Hand',
      'Patrick Hand SC',
      'Pattaya',
      'Patua One',
      'Pavanam',
      'Paytone One',
      'Peddana',
      'Peralta',
      'Permanent Marker',
      'Petit Formal Script',
      'Petrona',
      'Philosopher',
      'Piedra',
      'Pinyon Script',
      'Pirata One',
      'Plaster',
      'Play',
      'Playball',
      'Playfair Display',
      'Playfair Display SC',
      'Podkova',
      'Poiret One',
      'Poller One',
      'Poly',
      'Pompiere',
      'Pontano Sans',
      'Poppins',
      'Port Lligat Sans',
      'Port Lligat Slab',
      'Pragati Narrow',
      'Prata',
      'Preahvihear',
      'Press Start 2P',
      'Pridi',
      'Princess Sofia',
      'Prociono',
      'Prompt',
      'Prosto One',
      'Proza Libre',
      'Puritan',
      'Purple Purse',
      'Quando',
      'Quantico',
      'Quattrocento',
      'Quattrocento Sans',
      'Questrial',
      'Quicksand',
      'Quintessential',
      'Qwigley',
      'Racing Sans One',
      'Radley',
      'Rajdhani',
      'Rakkas',
      'Raleway',
      'Raleway Dots',
      'Ramabhadra',
      'Ramaraja',
      'Rambla',
      'Rammetto One',
      'Ranchers',
      'Rancho',
      'Ranga',
      'Rasa',
      'Rationale',
      'Ravi Prakash',
      'Redressed',
      'Reem Kufi',
      'Reenie Beanie',
      'Revalia',
      'Rhodium Libre',
      'Ribeye',
      'Ribeye Marrow',
      'Righteous',
      'Risque',
      'Roboto',
      'Roboto Condensed',
      'Roboto Mono',
      'Roboto Slab',
      'Rochester',
      'Rock Salt',
      'Rokkitt',
      'Romanesco',
      'Ropa Sans',
      'Rosario',
      'Rosarivo',
      'Rouge Script',
      'Rozha One',
      'Rubik',
      'Rubik Mono One',
      'Ruda',
      'Rufina',
      'Ruge Boogie',
      'Ruluko',
      'Rum Raisin',
      'Ruslan Display',
      'Russo One',
      'Ruthie',
      'Rye',
      'Sacramento',
      'Sahitya',
      'Sail',
      'Saira',
      'Saira Condensed',
      'Saira Extra Condensed',
      'Saira Semi Condensed',
      'Salsa',
      'Sanchez',
      'Sancreek',
      'Sansita',
      'Sarala',
      'Sarina',
      'Sarpanch',
      'Satisfy',
      'Scada',
      'Scheherazade',
      'Schoolbell',
      'Scope One',
      'Seaweed Script',
      'Secular One',
      'Sedgwick Ave',
      'Sedgwick Ave Display',
      'Sevillana',
      'Seymour One',
      'Shadows Into Light',
      'Shadows Into Light Two',
      'Shanti',
      'Share',
      'Share Tech',
      'Share Tech Mono',
      'Shojumaru',
      'Short Stack',
      'Shrikhand',
      'Siemreap',
      'Sigmar One',
      'Signika',
      'Signika Negative',
      'Simonetta',
      'Sintony',
      'Sirin Stencil',
      'Six Caps',
      'Skranji',
      'Slabo 13px',
      'Slabo 27px',
      'Slackey',
      'Smokum',
      'Smythe',
      'Sniglet',
      'Snippet',
      'Snowburst One',
      'Sofadi One',
      'Sofia',
      'Sonsie One',
      'Sorts Mill Goudy',
      'Source Code Pro',
      'Source Sans Pro',
      'Source Serif Pro',
      'Space Mono',
      'Special Elite',
      'Spectral',
      'Spicy Rice',
      'Spinnaker',
      'Spirax',
      'Squada One',
      'Sree Krushnadevaraya',
      'Sriracha',
      'Stalemate',
      'Stalinist One',
      'Stardos Stencil',
      'Stint Ultra Condensed',
      'Stint Ultra Expanded',
      'Stoke',
      'Strait',
      'Sue Ellen Francisco',
      'Suez One',
      'Sumana',
      'Sunshiney',
      'Supermercado One',
      'Sura',
      'Suranna',
      'Suravaram',
      'Suwannaphum',
      'Swanky and Moo Moo',
      'Syncopate',
      'Tangerine',
      'Taprom',
      'Tauri',
      'Taviraj',
      'Teko',
      'Telex',
      'Tenali Ramakrishna',
      'Tenor Sans',
      'Text Me One',
      'The Girl Next Door',
      'Tienne',
      'Tillana',
      'Timmana',
      'Tinos',
      'Titan One',
      'Titillium Web',
      'Trade Winds',
      'Trirong',
      'Trocchi',
      'Trochut',
      'Trykker',
      'Tulpen One',
      'Ubuntu',
      'Ubuntu Condensed',
      'Ubuntu Mono',
      'Ultra',
      'Uncial Antiqua',
      'Underdog',
      'Unica One',
      'UnifrakturCook',
      'UnifrakturMaguntia',
      'Unkempt',
      'Unlock',
      'Unna',
      'VT323',
      'Vampiro One',
      'Varela',
      'Varela Round',
      'Vast Shadow',
      'Vesper Libre',
      'Vibur',
      'Vidaloka',
      'Viga',
      'Voces',
      'Volkhov',
      'Vollkorn',
      'Voltaire',
      'Waiting for the Sunrise',
      'Wallpoet',
      'Walter Turncoat',
      'Warnes',
      'Wellfleet',
      'Wendy One',
      'Wire One',
      'Work Sans',
      'Yanone Kaffeesatz',
      'Yantramanav',
      'Yatra One',
      'Yellowtail',
      'Yeseva One',
      'Yesteryear',
      'Yrsa',
      'Zeyada',
      'Zilla Slab',
      'Zilla Slab Highlight'
    ]

    var sass_function_keys = [
      'escape(@string)',
      'percentage(@number)',
      'rgb(@r, @g, @b)',
      'rgba(@r, @g, @b, @a)',
      'hsl(@hue, @saturation, @lightness)',
      'hsla(@hue, @saturation, @lightness, @alpha)',
      'hsv(@hue, @saturation, @value)',
      'hsva(@hue, @saturation, @value, @alpha)',
      'saturate(@color, 10%)',
      'desaturate(@color, 10%)',
      'lighten(@color, 10%)',
      'darken(@color, 10%)',
      'fadein(@color, 10%)',
      'fadeout(@color, 10%)',
      'fade(@color, 50%)',
      'spin(@color, 10)',
      'mix(@color1, @color2, [@weight: 50%])',
      'greyscale(@color)',
      'contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%])',
      'multiply(@color1, @color2)',
      'screen(@color1, @color2)',
      'overlay(@color1, @color2)',
      'softlight(@color1, @color2)',
      'hardlight(@color1, @color2)',
      'difference(@color1, @color2)',
      'exclusion(@color1, @color2)',
      'average(@color1, @color2)',
      'negation(@color1, @color2)',
      'ceil(@number)',
      'floor(@number)',
      'percentage(@number)'
    ]

    return {
      bootstrap_files: bootstrap_files,
      cssToAdd: cssToAdd,
      font_keys: font_keys,
      sass_function_keys: sass_function_keys
    }
  }
])

angular.module('apSass', []).factory('apSass', [
  '$http',
  'data',
  function($http, data) {
    console.log(data)
    Sass.setWorkerUrl('/app/lib/sass/sass.worker.js')
    var sass = new Sass()
    window.sass = sass

    var service = {
      sass: new Sass(),
      importVariables: importVariables,
      getVariables: getVariables,
      setVariables: setVariables,
      getKeys: getKeys,
      getUrls: getUrls,
      getFonts: getFonts,
      getVariablesToString: getVariablesToString,
      saveSassVar: saveSassVar,
      saveCSS: saveCSS,
      applySass: applySass
    }

    // public function

    function applySass(scope) {
      var vars = getVariables(scope)
      var stringvar = getVariablesToString(scope)

      preloadFile(data.bootstrap_files, stringvar + data.cssToAdd)

      if (typeof vars.fonts !== undefined && vars.fonts.length !== 0) {
        WebFont.load({
          google: {
            families: vars.fonts
          }
        })
      }
    }

    function preloadFile(files, scss) {
      var base = '../../scss/'
      var directory = ''

      sass.writeFile('toAddScss.scss', scss)

      sass.preloadFiles(base, directory, files, function callback(test) {
        var t0 = performance.now()

        sass.readFile('bootstrap.scss', function callback(bootstrapContent) {
          sass.compile("@import 'functions'; @import 'toAddScss';" + bootstrapContent, function(result) {
            console.log(result)
            addStyle(result.text)
            var t1 = performance.now()
            console.log('Call to doSomething took ' + (t1 - t0) / 1000 + ' seconds.')
          })
        })
      })
    }

    function addStyle(css) {
      var head = document.head || document.getElementsByTagName('head')[0]
      var style = document.createElement('style')
      var previousStyle = document.querySelector('.previewStyle')
      if (previousStyle) {
        previousStyle.remove()
      }
      style.type = 'text/css'
      style.classList.add('previewStyle')
      style.appendChild(document.createTextNode(css))

      head.appendChild(style)
    }

    preloadFile(data.bootstrap_files)

    function importVariables($scope, string) {
      var regex = {
        variable: /^\s*([^:]*)\s*:\s*([^\\;]*)/,
        emptyLine: /(^\s*$)/,
        comment: /(^\s*\/\/.*[^\r\n]*)/,
        commentMulti: /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//
      }

      var parse = function(data) {
        if (regex.commentMulti.test(data)) {
          data = data.replace(regex.commentMulti, '')
        }
        var variables = []
        var lines = data.split(/\r\n|\r|\n/)
        lines.forEach(function(line) {
          if (regex.comment.test(line)) {
            return
          } else if (regex.emptyLine.test(line)) {
            return
          } else if (regex.variable.test(line)) {
            var match = line.match(regex.variable)
            variables[match[1]] = match[2]
          }
        })
        return variables
      }

      var vars = parse(string)
      for (var i = 0; i < $scope.variables.length; i++) {
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          if (vars[$scope.variables[i].data[j].key]) {
            $scope.variables[i].data[j].value = vars[$scope.variables[i].data[j].key]
            delete vars[$scope.variables[i].data[j].key]
          }
        }
      }

      var myVars = {
        name: 'My Variables',
        data: []
      }

      for (var key in vars) {
        var type = 'text'
        if (key.toLowerCase().indexOf('color')) {
          type = 'color'
        }
        if (key.toLowerCase().indexOf('fontfamily')) {
          type = 'font'
        }
        var myVar = {
          key: key,
          value: vars[key],
          type: type
        }
        myVars.data.push(myVar)
      }
      $scope.variables.push(myVars)
      return $scope
    }

    function getVariables($scope, all) {
      var variables = {}
      var fonts = []
      for (var i = 0; i < $scope.variables.length; i++) {
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          if ($scope.variables[i].data[j].type == 'font') {
            fonts.push($scope.variables[i].data[j].value)
          }
          variables[$scope.variables[i].data[j].key] = $scope.variables[i].data[j].value
        }
      }
      return {
        variables: variables,
        fonts: fonts
      }
    }

    function setVariables($scope, vars) {
      for (var i = 0; i < $scope.variables.length; i++) {
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          $scope.variables[i].data[j].value = vars[$scope.variables[i].data[j].key]
        }
      }
      return $scope
    }

    function getKeys($scope) {
      var keys = data.sass_function_keys
      for (var i = 0; i < $scope.variables.length; i++) {
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          keys.push($scope.variables[i].data[j].key)
        }
      }
      return keys
    }

    function getUrls($scope) {
      var keys = [
        "'../twitter-bootstrap/img/glyphicons-halflings.png'",
        "'../twitter-bootstrap/img/glyphicons-halflings-white.png'",
        "'../twitter-bootstrap/img/ap_icons_black_interface-orientation.png'",
        "'../twitter-bootstrap/img/ap_icons_white_interface-orientation.png'"
      ]
      return keys
    }

    function getFonts($scope) {
      var keys = data.font_keys
      $.ajax({
        url: 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBb_pLbXGeesG8wE32FMtywG4Vsfq6Uk_8',
        type: 'GET',
        dataType: 'JSONP',
        success: function(data) {
          for (var i = 0; i < data.items.length; i++) {
            keys.push(data.items[i].family)
          }
        }
      })
      return keys
    }

    function getVariablesToString($scope) {
      var string = '' + '/*\n' + '* Orson http://en.orson.io , autreplanete http://www.autreplanete.com/ \n' + '*  \n' + '**/\n'
      for (var i = 0; i < $scope.variables.length; i++) {
        string += '\n\n// ' + $scope.variables[i].name + '\n'
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          string += $scope.variables[i].data[j].key + ': ' + $scope.variables[i].data[j].value + ';\n'
        }
      }
      return string
    }

    function saveSassVar(data) {
      var $form = $('<form>')
        .attr('method', 'POST')
        .attr('action', 'http://www.pikock-unis.com/tools/download.php')
        .append(
          $('<input>')
            .attr('type', 'hidden')
            .attr('name', 'data')
            .attr('value', data)
        )
        .append(
          $('<input>')
            .attr('type', 'hidden')
            .attr('name', 'type')
            .attr('value', 'scss')
        )
      $('body').append($form)
      $form.submit()
    }

    function saveCSS($scope) {
      var parser = new less.Parser({
        paths: ['../twitter-bootstrap/less/'], // Specify search paths for @import directives
        filename: 'bootstrap.less' // Specify a filename, for better error messages
      })
      $(document).load($('#twitterBootstrapLess').attr('href'), function(data) {
        var vars = lessEngine.getVariables($scope).variables
        for (name in vars) {
          data += (name.slice(0, 1) === '@' ? '' : '@') + name + ': ' + (vars[name].slice(-1) === ';' ? vars[name] : vars[name] + ';')
        }
        console.log(vars)
        parser.parse(data, function(err, tree) {
          if (err) {
            return console.error(err)
          }
          var type = $scope.minified ? 'mincss' : 'css'
          var css = tree.toCSS({ compress: $scope.minified })
          console.log(css)
          var $form = $('<form>')
            .attr('method', 'POST')
            .attr('action', 'http://www.pikock-unis.com/tools/download.php')
            .append(
              $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'data')
                .attr('value', css)
            )
            .append(
              $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'type')
                .attr('value', type)
            )
          $('body').append($form)
          $form.submit()
        })
      })
    }
    return service
  }
])

angular.module('bootstrapVariablesEditor.services', ['apSass', 'data']).value('version', '0.2')
