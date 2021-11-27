const cocktails = [
  {
    cocktailName: 'Fancy Name',
    cocktailDescription: 'Leverage agile frame works to provide a robust synopsis for high level overviews.',
    cocktailGarnishes: [
      {
        garnishName: 'Cocktail Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Orange Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
      {
        garnishName: 'Cocktail Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Orange Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Vodka',
        ingredientAmountInOunces: '1.5'
      },
      {
        ingredientName: 'Cranberry Juice',
        ingredientAmountInOunces: '2'
      },
      {
        ingredientName: 'Other Stuff',
        ingredientAmountInOunces: '0.5'
      },
    ],
    cocktailSteps: [
      'Grab a shaker.',
      'Fill shaker with ice.',
      'Insert shaker into bartender.',
      'Pour into old fashion glass.',
      'Garnish with an orange wedge.'
    ]
  },
  {
    cocktailName: 'Fancy Name 2',
    cocktailDescription: 'Longer Text.  Leverage agile frame works to provide a robust synopsis for high level overviews. Leverage agile frame works to provide.',
    cocktailGarnishes: [
      {
        garnishName: 'Cocktail Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Orange Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/chocolatini.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Vodka',
        ingredientAmountInOunces: '1.5'
      },
      {
        ingredientName: 'Cranberry Juice',
        ingredientAmountInOunces: '2'
      },
      {
        ingredientName: 'Other Stuff',
        ingredientAmountInOunces: '0.5'
      },
      {
        ingredientName: 'Bitters',
        ingredientAmountInOunces: '2'
      },
      {
        ingredientName: 'More Stuff',
        ingredientAmountInOunces: '1.5'
      },
    ],
    cocktailSteps: [
      'Grab a shaker.',
      'Fill shaker with ice.',
      'Insert shaker into bartender.',
      'Pour into old fashion glass.',
      'Garnish with an orange wedge.'
    ]
  },
  {
    cocktailName: 'Vodka Cranberry',
    cocktailDescription: 'You might think the Vodka Cranberry drink is simply vodka and cranberry juice,  but this drink actually has four ingredients that are important to the flavor.',
    cocktailGarnishes: [
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
      {
        garnishName: 'Lime Wheel',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Lime Juice',
        garnishImage: 'assets/images/icons/wedge.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/vodka-cranberry.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Vodka',
        ingredientAmountInOunces: '1'
      },
      {
        ingredientName: 'Cranberry Juice',
        ingredientAmountInOunces: '4.5'
      },
      {
        ingredientName: 'Orange Juice',
        ingredientAmountInOunces: '0.5'
      }
    ],
    cocktailSteps: [
      'Fill a highball glass with ice',
      'Insert highball glass into bartender',
      'Squeeze some lime juice',
      'Add a lime wheel to garnish'
    ]
  },
  {
    cocktailName: 'Vodka Tonic',
    cocktailDescription: 'Looking for a refreshing cocktail that goes down easy? Try the vodka tonic!',
    cocktailGarnishes: [
      {
        garnishName: 'Highball Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Lime Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Lemon Juice',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Lime Juice',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/vodka-tonic.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Vodka',
        ingredientAmountInOunces: '1.5'
      },
      {
        ingredientName: 'Tonic',
        ingredientAmountInOunces: '4'
      }
    ],
    cocktailSteps: [
      'Fill a highball glass with ice',
      'Insert highball glass into bartender',
      'Squeeze in the juice from 1 lemon wedge and 1 lime wedge',
      'Add the squeezed wedges into the drink',
      'Add another lime wedge to the glass as a garnish.'
    ]
  },
  {
    cocktailName: 'Tequila Sunrise',
    cocktailDescription: 'The Tequila Sunrise cocktail, with its bright striations of color, evokes a summer sunrise.',
    cocktailGarnishes: [
      {
        garnishName: 'Orange Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Cherries',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Highball Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/tequila-sunrise.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Tequila Blanco',
        ingredientAmountInOunces: '2'
      },
      {
        ingredientName: 'Orange Juice',
        ingredientAmountInOunces: '4'
      },
      {
        ingredientName: 'Grenadine',
        ingredientAmountInOunces: '0.25'
      }
    ],
    cocktailSteps: [
      'Fill a highball glass with ice',
      'Insert highball glass into bartender', // grenadine to be served last, 
      'Garnish with orange slice and cherry'

    ]
  },
  {
    cocktailName: 'Gin and Tonic',
    cocktailDescription: 'Gin & Tonic. If you can say it, you can make it. Right? ',
    cocktailGarnishes: [
      {
        garnishName: 'Cocktail Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Two Lime Wedges',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/gin-and-tonic.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Gin',
        ingredientAmountInOunces: '2'
      },
      {
        ingredientName: 'Tonic',
        ingredientAmountInOunces: '4'
      }
    ],
    cocktailSteps: [
      'Fill a highball glass with ice, then add the gin',
      'Top with the tonic water and gently stir',
      'Garnish with lime wheels or seasonal garnishes'
    ]
  },
  {
    cocktailName: 'Drink',
    cocktailDescription: 'lorem ipsum',
    cocktailGarnishes: [],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [],
    cocktailSteps: []
  },
  {
    cocktailName: 'Drink',
    cocktailDescription: 'lorem ipsum',
    cocktailGarnishes: [],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [],
    cocktailSteps: []
  },
  {
    cocktailName: 'Drink',
    cocktailDescription: 'lorem ipsum',
    cocktailGarnishes: [],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [],
    cocktailSteps: []
  },
  {
    cocktailName: 'Drink',
    cocktailDescription: 'lorem ipsum',
    cocktailGarnishes: [],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [],
    cocktailSteps: []
  },
]

export default cocktails;