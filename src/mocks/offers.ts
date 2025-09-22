import { TypeOffer } from '../types/offer';

export const offers: TypeOffer[] = [
  // Amsterdam offers (existing)
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    rating: 4.0,
    isPremium: true,
    isFavorite: false,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
      'Towels',
      'Baby seat',
      'Cabel TV'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    city: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
      title: 'Beautiful & luxurious apartment at great location'
    },
    reviews: [
      {
        id: '1',
        user: {
          name: 'Max',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: false
        },
        rating: 4.8,
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        date: '2019-04-24'
      }
    ]
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    rating: 4.0,
    isPremium: false,
    isFavorite: true,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    city: 'Amsterdam',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
      title: 'Wood and stone place'
    },
    reviews: [
      {
        id: '2',
        user: {
          name: 'Alex',
          avatarUrl: 'img/avatar-max.jpg',
          isPro: true
        },
        rating: 4.5,
        comment: 'Great location and comfortable room.',
        date: '2020-02-15'
      }
    ]
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 4.0,
    isPremium: false,
    isFavorite: false,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg'
    ],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    maxAdults: 3,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
      'Towels'
    ],
    host: {
      name: 'Michael',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    city: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
      title: 'Canal View Prinsengracht'
    },
    reviews: []
  },

  // Paris offers
  {
    id: '4',
    title: 'Elegant Parisian Studio',
    type: 'apartment',
    price: 145,
    rating: 4.7,
    isPremium: true,
    isFavorite: true,
    images: [
      'img/paris-01.jpg',
      'img/paris-02.jpg',
      'img/paris-03.jpg'
    ],
    description: 'Charming studio in the heart of Paris with classic French decor.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Pierre',
      avatarUrl: 'img/avatar-pierre.jpg',
      isPro: true
    },
    city: 'Paris',
    location: {
      latitude: 48.856613,
      longitude: 2.352222,
      zoom: 12,
      title: 'Elegant Parisian Studio'
    },
    reviews: [
      {
        id: '101',
        user: {
          name: 'Claire',
          avatarUrl: 'img/avatar-claire.jpg',
          isPro: false
        },
        rating: 4.9,
        comment: 'Perfect location and beautiful apartment!',
        date: '2021-03-15'
      }
    ]
  },
  {
    id: '5',
    title: 'Louvre View Apartment',
    type: 'apartment',
    price: 210,
    rating: 4.9,
    isPremium: true,
    isFavorite: false,
    images: [
      'img/paris-04.jpg',
      'img/paris-05.jpg',
      'img/paris-06.jpg'
    ],
    description: 'Luxurious apartment with stunning views of the Louvre Museum.',
    bedrooms: 2,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Sophie',
      avatarUrl: 'img/avatar-sophie.jpg',
      isPro: true
    },
    city: 'Paris',
    location: {
      latitude: 48.860642,
      longitude: 2.337989,
      zoom: 12,
      title: 'Louvre View Apartment'
    },
    reviews: [
      {
        id: '102',
        user: {
          name: 'Thomas',
          avatarUrl: 'img/avatar-thomas.jpg',
          isPro: true
        },
        rating: 5.0,
        comment: 'Absolutely magnificent view of the Louvre!',
        date: '2021-04-22'
      }
    ]
  },
  {
    id: '6',
    title: 'Montmartre Artist Loft',
    type: 'room',
    price: 95,
    rating: 4.5,
    isPremium: false,
    isFavorite: true,
    images: [
      'img/paris-07.jpg',
      'img/paris-08.jpg',
      'img/paris-09.jpg'
    ],
    description: 'Bohemian loft in the artistic district of Montmartre.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchenette',
      'Fridge',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Jacques',
      avatarUrl: 'img/avatar-jacques.jpg',
      isPro: false
    },
    city: 'Paris',
    location: {
      latitude: 48.886704,
      longitude: 2.343104,
      zoom: 12,
      title: 'Montmartre Artist Loft'
    },
    reviews: [
      {
        id: '103',
        user: {
          name: 'Elise',
          avatarUrl: 'img/avatar-elise.jpg',
          isPro: false
        },
        rating: 4.7,
        comment: 'Authentic Parisian experience in Montmartre!',
        date: '2021-05-10'
      }
    ]
  },

  // Cologne offers
  {
    id: '7',
    title: 'Modern Cologne Apartment',
    type: 'apartment',
    price: 110,
    rating: 4.6,
    isPremium: true,
    isFavorite: false,
    images: [
      'img/cologne-01.jpg',
      'img/cologne-02.jpg',
      'img/cologne-03.jpg'
    ],
    description: 'Contemporary apartment near Cologne Cathedral.',
    bedrooms: 2,
    maxAdults: 3,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Klaus',
      avatarUrl: 'img/avatar-klaus.jpg',
      isPro: true
    },
    city: 'Cologne',
    location: {
      latitude: 50.941278,
      longitude: 6.958281,
      zoom: 12,
      title: 'Modern Cologne Apartment'
    },
    reviews: [
      {
        id: '201',
        user: {
          name: 'Anna',
          avatarUrl: 'img/avatar-anna.jpg',
          isPro: false
        },
        rating: 4.8,
        comment: 'Great location near the cathedral!',
        date: '2021-06-05'
      }
    ]
  },
  {
    id: '8',
    title: 'Rhineland House',
    type: 'house',
    price: 180,
    rating: 4.9,
    isPremium: true,
    isFavorite: true,
    images: [
      'img/cologne-04.jpg',
      'img/cologne-05.jpg',
      'img/cologne-06.jpg'
    ],
    description: 'Traditional German house with modern amenities.',
    bedrooms: 3,
    maxAdults: 6,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'Coffee machine',
      'Towels',
      'Garden'
    ],
    host: {
      name: 'Helga',
      avatarUrl: 'img/avatar-helga.jpg',
      isPro: true
    },
    city: 'Cologne',
    location: {
      latitude: 50.933594,
      longitude: 6.961899,
      zoom: 12,
      title: 'Rhineland House'
    },
    reviews: [
      {
        id: '202',
        user: {
          name: 'Markus',
          avatarUrl: 'img/avatar-markus.jpg',
          isPro: true
        },
        rating: 5.0,
        comment: 'Perfect for families visiting Cologne!',
        date: '2021-07-12'
      }
    ]
  },
  {
    id: '9',
    title: 'City Center Studio',
    type: 'room',
    price: 75,
    rating: 4.3,
    isPremium: false,
    isFavorite: false,
    images: [
      'img/cologne-07.jpg',
      'img/cologne-08.jpg',
      'img/cologne-09.jpg'
    ],
    description: 'Cozy studio in the heart of Cologne.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchenette',
      'Fridge',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Franz',
      avatarUrl: 'img/avatar-franz.jpg',
      isPro: false
    },
    city: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12,
      title: 'City Center Studio'
    },
    reviews: [
      {
        id: '203',
        user: {
          name: 'Sabine',
          avatarUrl: 'img/avatar-sabine.jpg',
          isPro: false
        },
        rating: 4.5,
        comment: 'Good value for money in central location.',
        date: '2021-08-20'
      }
    ]
  },

  // Brussels offers
  {
    id: '10',
    title: 'Grand Place Apartment',
    type: 'apartment',
    price: 130,
    rating: 4.8,
    isPremium: true,
    isFavorite: true,
    images: [
      'img/brussels-01.jpg',
      'img/brussels-02.jpg',
      'img/brussels-03.jpg'
    ],
    description: 'Elegant apartment with views of the Grand Place.',
    bedrooms: 2,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Jean',
      avatarUrl: 'img/avatar-jean.jpg',
      isPro: true
    },
    city: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 12,
      title: 'Grand Place Apartment'
    },
    reviews: [
      {
        id: '301',
        user: {
          name: 'Marie',
          avatarUrl: 'img/avatar-marie.jpg',
          isPro: false
        },
        rating: 4.9,
        comment: 'Breathtaking views of the Grand Place!',
        date: '2021-09-05'
      }
    ]
  },
  {
    id: '11',
    title: 'EU District Loft',
    type: 'apartment',
    price: 160,
    rating: 4.7,
    isPremium: false,
    isFavorite: false,
    images: [
      'img/brussels-04.jpg',
      'img/brussels-05.jpg',
      'img/brussels-06.jpg'
    ],
    description: 'Modern loft in the European Quarter.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Towels',
      'Workspace'
    ],
    host: {
      name: 'Luc',
      avatarUrl: 'img/avatar-luc.jpg',
      isPro: true
    },
    city: 'Brussels',
    location: {
      latitude: 50.840539,
      longitude: 4.375447,
      zoom: 12,
      title: 'EU District Loft'
    },
    reviews: [
      {
        id: '302',
        user: {
          name: 'Paul',
          avatarUrl: 'img/avatar-paul.jpg',
          isPro: true
        },
        rating: 4.8,
        comment: 'Perfect for business trips to Brussels.',
        date: '2021-10-12'
      }
    ]
  },
  {
    id: '12',
    title: 'Art Nouveau House',
    type: 'house',
    price: 220,
    rating: 4.9,
    isPremium: true,
    isFavorite: true,
    images: [
      'img/brussels-07.jpg',
      'img/brussels-08.jpg',
      'img/brussels-09.jpg'
    ],
    description: 'Stunning Art Nouveau house with original features.',
    bedrooms: 3,
    maxAdults: 5,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'Coffee machine',
      'Towels',
      'Garden'
    ],
    host: {
      name: 'Elise',
      avatarUrl: 'img/avatar-elise-b.jpg',
      isPro: true
    },
    city: 'Brussels',
    location: {
      latitude: 50.825678,
      longitude: 4.362407,
      zoom: 12,
      title: 'Art Nouveau House'
    },
    reviews: [
      {
        id: '303',
        user: {
          name: 'Antoine',
          avatarUrl: 'img/avatar-antoine.jpg',
          isPro: false
        },
        rating: 5.0,
        comment: 'Architectural masterpiece!',
        date: '2021-11-18'
      }
    ]
  },

  // Hamburg offers
  {
    id: '13',
    title: 'HafenCity Modern Apartment',
    type: 'apartment',
    price: 150,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    images: [
      'img/hamburg-01.jpg',
      'img/hamburg-02.jpg',
      'img/hamburg-03.jpg'
    ],
    description: 'Contemporary apartment in Hamburg\'s modern HafenCity district.',
    bedrooms: 2,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'Coffee machine',
      'Towels'
    ],
    host: {
      name: 'Hans',
      avatarUrl: 'img/avatar-hans.jpg',
      isPro: true
    },
    city: 'Hamburg',
    location: {
      latitude: 53.543764,
      longitude: 9.991427,
      zoom: 12,
      title: 'HafenCity Modern Apartment'
    },
    reviews: [
      {
        id: '401',
        user: {
          name: 'Lisa',
          avatarUrl: 'img/avatar-lisa-h.jpg',
          isPro: false
        },
        rating: 4.9,
        comment: 'Amazing modern apartment with great views!',
        date: '2021-12-05'
      }
    ]
  },
  {
    id: '14',
    title: 'Historic Speicherstadt Loft',
    type: 'apartment',
    price: 170,
    rating: 4.9,
    isPremium: true,
    isFavorite: true,
    images: [
      'img/hamburg-04.jpg',
      'img/hamburg-05.jpg',
      'img/hamburg-06.jpg'
    ],
    description: 'Unique loft in the historic Speicherstadt warehouse district.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Towels',
      'Historical charm'
    ],
    host: {
      name: 'Greta',
      avatarUrl: 'img/avatar-greta.jpg',
      isPro: true
    },
    city: 'Hamburg',
    location: {
      latitude: 53.545243,
      longitude: 10.000654,
      zoom: 12,
      title: 'Historic Speicherstadt Loft'
    },
    reviews: [
      {
        id: '402',
        user: {
          name: 'Felix',
          avatarUrl: 'img/avatar-felix.jpg',
          isPro: true
        },
        rating: 5.0,
        comment: 'Unique experience in a historic building!',
        date: '2022-01-15'
      }
    ]
  },
  {
    id: '15',
    title: 'Alster Lake View Room',
    type: 'room',
    price: 90,
    rating: 4.6,
    isPremium: false,
    isFavorite: false,
    images: [
      'img/hamburg-07.jpg',
      'img/hamburg-08.jpg',
      'img/hamburg-09.jpg'
    ],
    description: 'Comfortable room with beautiful views of Alster Lake.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Coffee machine',
      'Towels',
      'Lake view'
    ],
    host: {
      name: 'Uwe',
      avatarUrl: 'img/avatar-uwe.jpg',
      isPro: false
    },
    city: 'Hamburg',
    location: {
      latitude: 53.560816,
      longitude: 10.015642,
      zoom: 12,
      title: 'Alster Lake View Room'
    },
    reviews: [
      {
        id: '403',
        user: {
          name: 'Nina',
          avatarUrl: 'img/avatar-nina.jpg',
          isPro: false
        },
        rating: 4.7,
        comment: 'Beautiful view of the lake!',
        date: '2022-02-20'
      }
    ]
  },

  // Dusseldorf offers
  {
    id: '16',
    title: 'Königsallee Luxury Apartment',
    type: 'apartment',
    price: 190,
    rating: 4.9,
    isPremium: true,
    isFavorite: true,
    images: [
      'img/dusseldorf-01.jpg',
      'img/dusseldorf-02.jpg',
      'img/dusseldorf-03.jpg'
    ],
    description: 'Luxurious apartment on Dusseldorf\'s famous Königsallee.',
    bedrooms: 2,
    maxAdults: 4,
    goods: [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'Coffee machine',
      'Towels',
      'Balcony'
    ],
    host: {
      name: 'Karl',
      avatarUrl: 'img/avatar-karl.jpg',
      isPro: true
    },
    city: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 12,
      title: 'Königsallee Luxury Apartment'
    },
    reviews: [
      {
        id: '501',
        user: {
          name: 'Julia',
          avatarUrl: 'img/avatar-julia.jpg',
          isPro: false
        },
        rating: 5.0,
        comment: 'Perfect location for shopping and dining!',
        date: '2022-03-10'
      }
    ]
  },
  {
    id: '17',
    title: 'MediaHarbor Designer Loft',
    type: 'apartment',
    price: 160,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    images: [
      'img/dusseldorf-04.jpg',
      'img/dusseldorf-05.jpg',
      'img/dusseldorf-06.jpg'
    ],
    description: 'Designer loft in Dusseldorf\'s trendy MediaHarbor district.',
    bedrooms: 1,
    maxAdults: 2,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Coffee machine',
      'Towels',
      'Design furniture'
    ],
    host: {
      name: 'Anna',
      avatarUrl: 'img/avatar-anna-d.jpg',
      isPro: true
    },
    city: 'Dusseldorf',
    location: {
      latitude: 51.211208,
      longitude: 6.756371,
      zoom: 12,
      title: 'MediaHarbor Designer Loft'
    },
    reviews: [
      {
        id: '502',
        user: {
          name: 'Mark',
          avatarUrl: 'img/avatar-mark.jpg',
          isPro: true
        },
        rating: 4.9,
        comment: 'Fantastic design and great location!',
        date: '2022-04-15'
      }
    ]
  },
  {
    id: '18',
    title: 'Altstadt Traditional House',
    type: 'house',
    price: 200,
    rating: 4.7,
    isPremium: false,
    isFavorite: true,
    images: [
      'img/dusseldorf-07.jpg',
      'img/dusseldorf-08.jpg',
      'img/dusseldorf-09.jpg'
    ],
    description: 'Traditional German house in the historic Altstadt district.',
    bedrooms: 3,
    maxAdults: 6,
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Washing machine',
      'Coffee machine',
      'Towels',
      'Garden'
    ],
    host: {
      name: 'Helmut',
      avatarUrl: 'img/avatar-helmut.jpg',
      isPro: false
    },
    city: 'Dusseldorf',
    location: {
      latitude: 51.227741,
      longitude: 6.773456,
      zoom: 12,
      title: 'Altstadt Traditional House'
    },
    reviews: [
      {
        id: '503',
        user: {
          name: 'Sabine',
          avatarUrl: 'img/avatar-sabine-d.jpg',
          isPro: false
        },
        rating: 4.8,
        comment: 'Authentic German experience in the old town!',
        date: '2022-05-20'
      }
    ]
  }
];
