'use strict'

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.

window.angular.module('data', []).service('data', [
  function data() {
    var bootstrapFiles = [
      'ads.scss',
      'alert.scss',
      'algolia.scss',
      'anchor.scss',
      'badge.scss',
      'brand.scss',
      'breadcrumb.scss',
      'browser-bugs.scss',
      'button-group.scss',
      'buttons.scss',
      'callouts.scss',
      'card.scss',
      'carousel.scss',
      'clipboard-js.scss',
      'close.scss',
      'code.scss',
      'colors.scss',
      'component-examples.scss',
      'content.scss',
      'custom-forms.scss',
      'dropdown.scss',
      'examples.scss',
      'featured-sites.scss',
      'footer.scss',
      'forms.scss',
      'functions.scss',
      'grid.scss',
      'images.scss',
      'input-group.scss',
      'jumbotron.scss',
      'list-group.scss',
      'masthead.scss',
      'media.scss',
      'mixins.scss',
      'modal.scss',
      'nav.scss',
      'navbar.scss',
      'page-header.scss',
      'pagination.scss',
      'popover.scss',
      'print.scss',
      'progress.scss',
      'reboot.scss',
      'responsive-tests.scss',
      'sidebar.scss',
      'skiplink.scss',
      'syntax.scss',
      'tables.scss',
      'team.scss',
      'tooltip.scss',
      'transitions.scss',
      'type.scss',
      'utilities.scss',
      'bootstrap-grid.scss',
      'bootstrap-reboot.scss',
      'bootstrap.scss',
      'mixins/alert.scss',
      'mixins/background-variant.scss',
      'mixins/badge.scss',
      'mixins/border-radius.scss',
      'mixins/box-shadow.scss',
      'mixins/breakpoints.scss',
      'mixins/buttons.scss',
      'mixins/clearfix.scss',
      'mixins/float.scss',
      'mixins/forms.scss',
      'mixins/gradients.scss',
      'mixins/grid-framework.scss',
      'mixins/grid.scss',
      'mixins/hover.scss',
      'mixins/image.scss',
      'mixins/list-group.scss',
      'mixins/lists.scss',
      'mixins/nav-divider.scss',
      'mixins/navbar-align.scss',
      'mixins/pagination.scss',
      'mixins/reset-text.scss',
      'mixins/resize.scss',
      'mixins/screen-reader.scss',
      'mixins/size.scss',
      'mixins/table-row.scss',
      'mixins/text-emphasis.scss',
      'mixins/text-hide.scss',
      'mixins/text-truncate.scss',
      'mixins/transition.scss',
      'mixins/visibility.scss',
      'utilities/align.scss',
      'utilities/background.scss',
      'utilities/borders.scss',
      'utilities/clearfix.scss',
      'utilities/display.scss',
      'utilities/embed.scss',
      'utilities/flex.scss',
      'utilities/float.scss',
      'utilities/position.scss',
      'utilities/screenreaders.scss',
      'utilities/sizing.scss',
      'utilities/spacing.scss',
      'utilities/text.scss',
      'utilities/visibility.scss',
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

    var fontKeys = [
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

    var sassFunctionKeys = [
      'rgb($red, $green, $blue)',
      'rgba($red, $green, $blue, $alpha)',
      'red($color)',
      'green($color)',
      'blue($color)',
      'mix($color1, $color2, [$weight])',
      'hsl($hue, $saturation, $lightness)',
      'hsla($hue, $saturation, $lightness, $alpha)',
      'hue($color)',
      'saturation($color)',
      'lightness($color)',
      'adjust-hue($color, $degrees)',
      'lighten($color, $amount)',
      'darken($color, $amount)',
      'saturate($color, $amount)',
      'desaturate($color, $amount)',
      'grayscale($color)',
      'complement($color)',
      'invert($color, [$weight])',
      'alpha($color) / opacity($color)',
      'rgba($color, $alpha)',
      'opacify($color, $amount) / fade-in($color, $amount)',
      'transparentize($color, $amount) / fade-out($color, $amount)',
      'adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])',
      'scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])',
      'change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])',
      'ie-hex-str($color)',
      'unquote($string)',
      'quote($string)',
      'str-length($string)',
      'str-insert($string, $insert, $index)',
      'str-index($string, $substring)',
      'str-slice($string, $start-at, [$end-at])',
      'to-upper-case($string)',
      'to-lower-case($string)',
      'percentage($number)',
      'round($number)',
      'ceil($number)',
      'floor($number)',
      'abs($number)',
      'min($numbers...)',
      'max($numbers...)',
      'random([$limit])',
      'length($list)',
      'nth($list, $n)',
      'set-nth($list, $n, $value)',
      'join($list1, $list2, [$separator, $bracketed])',
      'append($list1, $val, [$separator])',
      'zip($lists...)',
      'index($list, $value)',
      'list-separator($list)',
      'is-bracketed($list)',
      'map-get($map, $key)',
      'map-merge($map1, $map2)',
      'map-remove($map, $keys...)',
      'map-keys($map)',
      'map-values($map)',
      'map-has-key($map, $key)',
      'keywords($args)',
      'selector-nest($selectors...)',
      'selector-append($selectors...)',
      'selector-extend($selector, $extendee, $extender)',
      'selector-replace($selector, $original, $replacement)',
      'selector-unify($selector1, $selector2)',
      'is-superselector($super, $sub)',
      'simple-selectors($selector)',
      'selector-parse($selector)',
      'feature-exists($feature)',
      'variable-exists($name)',
      'global-variable-exists($name)',
      'function-exists($name)',
      'mixin-exists($name)',
      'content-exists()',
      'inspect($value)',
      'type-of($value)',
      'unit($number)',
      'unitless($number)',
      'comparable($number1, $number2)',
      'call($function, $args...)',
      'get-function($name, $css',
      'if($condition, $if-true, $if-false)',
      'unique-id()'
    ]

    return {
      bootstrapFiles: bootstrapFiles,
      cssToAdd: cssToAdd,
      fontKeys: fontKeys,
      sassFunctionKeys: sassFunctionKeys
    }
  }
])

window.angular.module('apSass', []).factory('apSass', [
  '$http',
  'data',
  '$q',
  '$sce',
  function($http, data, $q, $sce) {
    window.Sass.setWorkerUrl('../app/lib/sass/sass.worker.js')
    var sass = new window.Sass()
    sass.options({
      // Format output: nested, expanded, compact, compressed
      // style: window.Sass.style.compressed,
      // Decimal point precision for outputting fractional numbers
      // (-1 will use the libsass default, which currently is 5)
      precision: -1,
      indentedSyntax: false,
      // If you want inline source comments
      comments: false,
      // String to be used for indentation
      indent: '',
      // String to be used to for line feeds
      linefeed: ''
    })

    var base = '../../../app/scss/'
    var directory = ''
    var first = true

    var service = {
      sass: sass,
      fonts: undefined,
      bootstrapContent: undefined,
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

    function resolveFonts(fonts) {
      window.fonts = fonts
      window.data = data
      var resolve = fonts.reduce(function(memo, font) {
        var splits = font.split(',')
        splits.forEach(function(split) {
          split = split.trim()
          if (data.fontKeys.indexOf(split) !== -1) {
            memo.push(split)
          }
        })
        return memo
      }, [])

      service.fonts = resolve

      if (typeof fonts !== 'undefined' && fonts.length !== 0) {
        window.WebFont.load({
          google: {
            families: resolve
          }
        })

        $('iframe.fixedPreview')
          .get(0)
          .contentWindow.WebFont.load({
            google: {
              families: resolve
            }
          })
      }
    }

    function applySass(scope) {
      return $q(function(resolve, reject) {
        var stringvar = getVariablesToString(scope)
        var scss = stringvar + data.cssToAdd
        var vars = getVariables(scope)

        if (first) {
          preloadFile(data.bootstrapFiles)
            .then(function() {
              compileSass(scss)
                .then(function(result) {
                  resolve(result)
                  resolveFonts(vars.fonts)
                  first = false
                })
                .catch(function(error) {
                  reject(error)
                })
            })
            .catch(function(error) {
              reject(error)
            })
        } else {
          compileSass(scss)
            .then(function(result) {
              resolve(result)
              resolveFonts(vars.fonts)
            })
            .catch(function(error) {
              reject(error)
            })
        }
      })
    }

    function compileSass(scss) {
      return $q(function(resolve, reject) {
        try {
          var t0 = performance.now()
          sass.writeFile('toAddScss.scss', scss)
          sass.compile(
            "@import 'functions'; @import 'toAddScss';" + service.bootstrapContent,
            function(result) {
              console.log(result)
              if (result.status === 0) {
                var t1 = performance.now()
                console.log('Call to compileSass took ' + (t1 - t0) / 1000 + ' seconds.')
                addStyle(result.text)
                resolve(result.text)
              } else {
                reject(result.message)
              }
            }
          )
        } catch (e) {
          reject(e)
        }
      })
    }

    function preloadFile(files) {
      return $q(function(resolve, reject) {
        try {
          console.log('Preload File', base, directory, files)
          sass.preloadFiles(base, directory, files, function() {
            console.log('Reading bootstrap file')
            sass.readFile('bootstrap.scss', function callback(bootstrapContent) {
              service.bootstrapContent = bootstrapContent
              resolve()
            })
          })
        } catch (e) {
          reject(e)
        }
      })
    }

    function addStyle(style) {
      var styleContent = $('iframe.fixedPreview')
        .get(0)
        .contentWindow.document.querySelector('style')
      styleContent.innerText = style
    }
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
          } else if (regex.emptyLine.test(line)) {
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
          if ($scope.variables[i].data[j].type === 'font') {
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
      var keys = data.sassFunctionKeys
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
      var keys = data.fontKeys
      var url = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBb_pLbXGeesG8wE32FMtywG4Vsfq6Uk_8"
      var trustedUrl = $sce.trustAsResourceUrl(url);

      $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
          .then(function(response){
            var data = response.data
              for (var i = 0; i < data.items.length; i++) {
                  keys.push(data.items[i].family)
                }
          });
      return keys
    }

    function getVariablesToString($scope) {
      var string =
        '' +
        '/*\n' +
        '* Orson http://en.orson.io , autreplanete http://www.autreplanete.com/ \n' +
        '*  \n' +
        '**/\n'
      for (var i = 0; i < $scope.variables.length; i++) {
        string += '\n\n// ' + $scope.variables[i].name + '\n'
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          string +=
            $scope.variables[i].data[j].key + ': ' + $scope.variables[i].data[j].value + ';\n'
        }
      }
      return string
    }

    function saveSassVar(data) {
      var rightNow = new Date()
      var res = rightNow.toISOString().slice(0, 10)
      window.URL = window.URL || window.webkitURL
      var blob = new Blob([data], { type: 'text/css' })
      var link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'custom-variables-bootstrap-' + res + '.scss'
      link.click()
    }

    function saveCSS($scope) {
      sass.readFile('bootstrap.scss', function callback(bootstrapContent) {
        sass.compile("@import 'functions'; @import 'toAddScss';" + bootstrapContent, function(
          result
        ) {
          var rightNow = new Date()
          var res = rightNow.toISOString().slice(0, 10)
          window.URL = window.URL || window.webkitURL
          var blob = new Blob([result.text], { type: 'text/css' })
          var link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'custom-css-bootstrap-magic-' + res + '.css'
          link.click()
        })
      })
    }
    return service
  }
])

window.angular
  .module('bootstrapVariablesEditor.services', ['apSass', 'data'])
  .value('version', '0.2')
