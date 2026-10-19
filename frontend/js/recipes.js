const RECIPES = [
    {
        id: 1,
        title: "Num Banh Chok",
        description: "Khmer rice noodles with a fragrant green fish curry.",
        image: "images/នំបញ្ចុក.jpg",
        category: "breakfast",
        cuisine: "khmer",
        ingredients: ["Fresh rice noodles", "Fish fillet", "Lemongrass", "Turmeric", "Galangal", "Kaffir lime leaves", "Fresh herbs and cucumber"],
        steps: [
            "Boil the fish, then flake the meat and remove the bones.",
            "Pound lemongrass, turmeric, galangal and lime leaves into a paste.",
            "Simmer the paste with the fish and its broth until fragrant.",
            "Serve the gravy over noodles with fresh herbs and vegetables."
        ]
    },
    {
        id: 2,
        title: "Samlor Korko",
        description: "A hearty Khmer soup thickened with toasted rice.",
        image: "images/សម្លកកូរ.jpg",
        category: "lunch",
        cuisine: "khmer",
        ingredients: ["Pork or fish", "Toasted rice powder", "Green papaya", "Long beans", "Eggplant", "Kroeung paste"],
        steps: [
            "Fry the kroeung paste until fragrant.",
            "Add the meat and water and bring to a simmer.",
            "Add the vegetables and cook until tender.",
            "Stir in the toasted rice powder to thicken, then season and serve."
        ]
    },
    {
        id: 3,
        title: "Sour Beef Soup",
        description: "Tender beef in a tangy, herb-rich broth.",
        image: "images/ម្ជូរគ្រឿងសាច់គោ.jpeg",
        category: "dinner",
        cuisine: "khmer",
        ingredients: ["Beef", "Tamarind", "Tomato", "Kroeung paste", "Water spinach", "Fresh herbs"],
        steps: [
            "Simmer the beef with kroeung paste until tender.",
            "Add tamarind and tomato for the sour flavor.",
            "Add the vegetables and cook briefly.",
            "Finish with fresh herbs and serve with rice."
        ]
    },
    {
        id: 4,
        title: "Cambodian Fried Rice",
        description: "A savory, aromatic fried rice flavored with garlic, soy sauce, and local herbs.",
        image: "images/fried rice.jpg",
        category: "lunch",
        cuisine: "khmer",
        ingredients: ["Day-old cooked rice", "Pork or beef slices", "Garlic", "Green onions", "Soy sauce", "Eggs"],
        steps: [
            "Sauté minced garlic in a hot pan until fragrant.",
            "Add the meat and cook until browned.",
            "Push the meat aside and scramble the eggs in the pan.",
            "Add the day-old rice, drizzle with soy sauce, and stir-fry everything together until well combined and heated through."
        ]
    },
    {
        id: 5,
        title: "Khmer Chicken Curry",
        description: "A rich, mildly spiced coconut curry with potatoes and chicken.",
        image: "images/curry.jpg",
        category: "dinner",
        cuisine: "khmer",
        ingredients: ["Chicken pieces", "Coconut milk", "Potatoes", "Sweet potato", "Kroeung paste", "Fish sauce", "Palm sugar"],
        steps: [
            "Fry the kroeung paste in a little coconut cream until fragrant.",
            "Add the chicken and stir until it changes color.",
            "Pour in coconut milk and water, then add the potatoes.",
            "Simmer until tender, season with fish sauce and palm sugar, and serve with rice or bread."
        ]
    },
    {
        id: 6,
        title: "Mee Kola",
        description: "Stir-fried Khmer noodles with vegetables and a savory sauce.",
        image: "images/Mee Kola.jpg",
        category: "lunch",
        cuisine: "khmer",
        ingredients: ["Egg or rice noodles", "Pork or chicken", "Carrot", "Cabbage", "Garlic", "Soy sauce", "Oyster sauce"],
        steps: [
            "Soften the noodles in hot water and drain.",
            "Fry garlic, then the meat, until cooked.",
            "Add the vegetables and stir-fry briefly.",
            "Add the noodles and sauces, toss well, and serve hot."
        ]
    },
    {
        id: 7,
        title: "Egg Fried Rice",
        description: "Quick fried rice with egg, garlic and spring onion.",
        image: "images/fried rice.jpg",
        category: "lunch",
        cuisine: "chinese",
        ingredients: ["Cooked day-old rice", "Eggs", "Garlic", "Spring onion", "Soy sauce", "Oil", "Pepper"],
        steps: [
            "Heat oil in a wok and scramble the eggs until just set.",
            "Add garlic, then the rice, breaking up any lumps.",
            "Season with soy sauce and pepper and toss on high heat.",
            "Finish with spring onion and serve right away."
        ]
    },
    {
        id: 8,
        title: "Homemade Pizza",
        description: "Crisp-edged pizza with tomato sauce and melted cheese.",
        image: "images/pizza.jpg",
        category: "dinner",
        cuisine: "italian",
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil", "Salt"],
        steps: [
            "Heat the oven as high as it will go.",
            "Stretch the dough and spread on the tomato sauce.",
            "Add the mozzarella and a drizzle of olive oil.",
            "Bake until the crust is golden and the cheese bubbles, then top with basil."
        ]
    },
    {
        id: 9,
        title: "Kuy Teav",
        description: "Khmer pork noodle soup with a clear, savory broth.",
        image: "images/kuy teav.jpeg",
        category: "breakfast",
        cuisine: "khmer",
        ingredients: ["Rice noodles", "Pork bones", "Sliced pork", "Garlic", "Bean sprouts", "Spring onion", "Lime"],
        steps: [
            "Simmer the pork bones for a few hours to make a clear broth.",
            "Soften the noodles in hot water and place them in bowls.",
            "Top with sliced pork, bean sprouts and fried garlic.",
            "Ladle over the hot broth and serve with lime and herbs."
        ]
    },
    {
        id: 10,
        title: "Pork Dumplings",
        description: "Pan-fried dumplings with a juicy pork filling.",
        image: "images/pork-dumpling.jpg",
        category: "lunch",
        cuisine: "chinese",
        ingredients: ["Dumpling wrappers", "Ground pork", "Cabbage", "Ginger", "Soy sauce", "Sesame oil"],
        steps: [
            "Mix the pork, chopped cabbage, ginger, soy sauce and sesame oil.",
            "Place a spoonful in each wrapper, then fold and seal the edges.",
            "Fry the dumplings until the bottoms are golden.",
            "Add a splash of water, cover, and steam until cooked through."
        ]
    },
    {
        id: 11,
        title: "Kimchi Fried Rice",
        description: "Spicy, tangy fried rice topped with a fried egg.",
        image: "images/kimchi-fried-rice.jpg",
        category: "lunch",
        cuisine: "korean",
        ingredients: ["Cooked rice", "Kimchi", "Gochujang", "Spring onion", "Sesame oil", "Eggs"],
        steps: [
            "Fry the chopped kimchi in a hot pan for a few minutes.",
            "Add the rice and gochujang and stir until evenly coated.",
            "Finish with sesame oil and spring onion.",
            "Top each serving with a fried egg."
        ]
    },
    {
        id: 12,
        title: "Chicken Teriyaki Bowl",
        description: "Glazed chicken over steamed rice with a sweet soy sauce.",
        image: "images/chicken-teriyaki-bowl.jpg",
        category: "dinner",
        cuisine: "japanese",
        ingredients: ["Chicken thighs", "Soy sauce", "Mirin", "Sugar", "Ginger", "Steamed rice", "Sesame seeds"],
        steps: [
            "Mix soy sauce, mirin, sugar and grated ginger for the sauce.",
            "Pan-fry the chicken until browned on both sides.",
            "Pour in the sauce and cook until it thickens into a glaze.",
            "Slice the chicken and serve over rice with sesame seeds."
        ]
    },
    {
        id: 13,
        title: "Banana Bread",
        description: "Moist, lightly sweet loaf made with ripe bananas.",
        image: "images/banana-bread.jpeg",
        category: "bakery",
        cuisine: "american",
        ingredients: ["Ripe bananas", "Flour", "Sugar", "Butter", "Eggs", "Baking soda", "Salt"],
        steps: [
            "Heat the oven to 175°C and grease a loaf pan.",
            "Mash the bananas and mix in the melted butter, sugar and eggs.",
            "Fold in the flour, baking soda and salt until just combined.",
            "Bake for about an hour, until a skewer comes out clean."
        ]
    },
    {
        id: 14,
        title: "French Crepes",
        description: "Thin, tender pancakes served with fruit or sweet fillings.",
        image: "images/french-crepes.jpg",
        category: "breakfast",
        cuisine: "french",
        ingredients: ["Flour", "Milk", "Eggs", "Butter", "Sugar", "Pinch of salt"],
        steps: [
            "Whisk the flour, eggs, milk, melted butter, sugar and salt into a smooth batter.",
            "Rest the batter for 30 minutes.",
            "Pour a thin layer into a hot buttered pan and tilt to spread.",
            "Cook until the edges lift, flip briefly, then fill and fold."
        ]
    },
    {
        id: 15,
        title: "Chicken Tacos",
        description: "Soft tortillas filled with spiced chicken and fresh toppings.",
        image: "images/chicken-tacos.avif",
        category: "dinner",
        cuisine: "mexican",
        ingredients: ["Chicken breast", "Tortillas", "Cumin", "Paprika", "Lime", "Onion", "Coriander", "Salsa"],
        steps: [
            "Rub the chicken with cumin, paprika, salt and lime juice.",
            "Cook in a hot pan until browned and cooked through, then shred.",
            "Warm the tortillas in a dry pan.",
            "Fill with chicken, onion, coriander and salsa."
        ]
    },
    {
        id: 16,
        title: "Banana in Coconut Milk",
        description: "A warm Khmer dessert of sweet bananas in creamy coconut milk.",
        image: "images/chek-ktis.jpeg",
        category: "dessert",
        cuisine: "khmer",
        ingredients: ["Ripe bananas", "Coconut milk", "Palm sugar", "Pinch of salt", "Toasted sesame seeds"],
        steps: [
            "Warm the coconut milk with the palm sugar and salt until dissolved.",
            "Add the sliced bananas.",
            "Simmer gently for about 10 minutes until the bananas are soft.",
            "Serve warm, topped with toasted sesame seeds."
        ]
    },
    {
        id: 17,
        title: "Fresh Orange Juice",
        description: "Bright, freshly squeezed juice with no added sugar.",
        image: "images/orange-juice.jpg",
        category: "juice",
        cuisine: "drinks",
        ingredients: ["Ripe oranges", "Ice (optional)"],
        steps: [
            "Wash the oranges and cut them in half.",
            "Squeeze the juice and strain out the seeds.",
            "Chill for 10 minutes, or pour over ice.",
            "Serve right away for the best flavor."
        ]
    },
    {
        id: 18,
        title: "Iced Coffee",
        description: "Strong, chilled coffee with milk and a touch of sweetness.",
        image: "images/iced-coffee.webp",
        category: "drinks",
        cuisine: "drinks",
        ingredients: ["Strong brewed coffee", "Sweetened condensed milk", "Fresh milk", "Ice"],
        steps: [
            "Brew the coffee strong and let it cool slightly.",
            "Stir condensed milk into a tall glass.",
            "Fill the glass with ice and pour in the coffee.",
            "Top with fresh milk and stir before drinking."
        ]
    },
        {
        id: 19,
        title: "Fish Amok",
        description: "Steamed Khmer fish curry with coconut milk, served in banana leaf cups.",
        image: "images/amok.jpg",
        category: "dinner",
        cuisine: "khmer",
        ingredients: ["White fish fillet", "Coconut milk", "Kroeung paste", "Egg", "Fish sauce", "Palm sugar", "Banana leaves", "Kaffir lime leaves"],
        steps: [
            "Mix the kroeung paste with coconut milk, egg, fish sauce and palm sugar.",
            "Fold in the sliced fish and a handful of chopped lime leaves.",
            "Spoon into banana leaf cups.",
            "Steam for 20 minutes until set, and top with a swirl of coconut cream."
        ]
    },
    {
        id: 20,
        title: "Beef Lok Lak",
        description: "Seared beef cubes in a peppery sauce with lime-pepper dip.",
        image: "images/lok-lak.jpg",
        category: "dinner",
        cuisine: "khmer",
        ingredients: ["Beef sirloin", "Soy sauce", "Oyster sauce", "Garlic", "Black pepper", "Lime", "Lettuce and tomato", "Fried egg"],
        steps: [
            "Marinate the beef cubes in soy sauce, oyster sauce and garlic.",
            "Sear the beef in a very hot pan until browned outside and pink inside.",
            "Mix lime juice, salt and plenty of black pepper for the dip.",
            "Serve over lettuce and tomato with a fried egg and rice."
        ]
    },
    {
        id: 21,
        title: "Bai Sach Chrouk",
        description: "Grilled marinated pork over broken rice, a classic Khmer breakfast.",
        image: "images/bai-sach-chrouk.jpeg",
        category: "breakfast",
        cuisine: "khmer",
        ingredients: ["Thin pork slices", "Coconut milk", "Garlic", "Soy sauce", "Palm sugar", "Broken rice", "Pickled cucumber and carrot"],
        steps: [
            "Marinate the pork in coconut milk, garlic, soy sauce and palm sugar for 1 hour.",
            "Grill the pork over medium heat until charred at the edges.",
            "Steam the broken rice until soft.",
            "Serve the pork on rice with the pickles."
        ]
    },
    {
        id: 22,
        title: "Khmer Pumpkin Custard",
        description: "Sweet coconut custard steamed inside a whole small pumpkin.",
        image: "images/pumpkin-custard.jpg",
        category: "dessert",
        cuisine: "khmer",
        ingredients: ["Small kabocha pumpkin", "Eggs", "Coconut milk", "Palm sugar", "Pinch of salt"],
        steps: [
            "Cut the top off the pumpkin and scoop out the seeds.",
            "Whisk eggs, coconut milk, palm sugar and salt until smooth.",
            "Pour the mixture into the pumpkin and replace the lid.",
            "Steam for 40 minutes until the custard is firm, then cool and slice."
        ]
    },
    {
        id: 23,
        title: "Ginger Chicken Stir-fry",
        description: "Quick chicken stir-fry with plenty of fresh ginger and mushrooms.",
        image: "images/ginger-chicken.jpg",
        category: "dinner",
        cuisine: "khmer",
        ingredients: ["Chicken thigh", "Fresh ginger", "Mushrooms", "Onion", "Garlic", "Soy sauce", "Oyster sauce", "Spring onion"],
        steps: [
            "Cut the chicken into strips and slice the ginger into thin matchsticks.",
            "Fry garlic and ginger in hot oil until fragrant.",
            "Add the chicken and cook until golden.",
            "Add mushrooms, onion and sauces, stir-fry for 3 minutes, and finish with spring onion."
        ]
    },
    {
        id: 24,
        title: "Mapo Tofu",
        description: "Soft tofu in a spicy, savory sauce with minced pork.",
        image: "images/mapo-tofu.jpg",
        category: "dinner",
        cuisine: "chinese",
        ingredients: ["Soft tofu", "Minced pork", "Chili bean paste", "Garlic", "Ginger", "Szechuan pepper", "Spring onion", "Cornstarch"],
        steps: [
            "Cut the tofu into cubes and soak briefly in warm salted water.",
            "Fry the pork until crisp, then add the chili bean paste, garlic and ginger.",
            "Add water and the tofu, and simmer gently for 5 minutes.",
            "Thicken with a cornstarch slurry and top with Szechuan pepper and spring onion."
        ]
    },
    {
        id: 25,
        title: "Sweet and Sour Chicken",
        description: "Crispy chicken pieces tossed in a tangy pineapple sauce.",
        image: "images/sweet-sour-chicken.jpg",
        category: "dinner",
        cuisine: "chinese",
        ingredients: ["Chicken breast", "Cornstarch", "Bell pepper", "Pineapple", "Ketchup", "Vinegar", "Sugar", "Soy sauce"],
        steps: [
            "Coat the chicken pieces in cornstarch and fry until golden and crisp.",
            "Simmer ketchup, vinegar, sugar and soy sauce into a glossy sauce.",
            "Stir-fry the peppers and pineapple for 2 minutes.",
            "Toss everything with the sauce and serve over rice."
        ]
    },
    {
        id: 26,
        title: "Chicken Congee",
        description: "Smooth, comforting rice porridge topped with chicken and ginger.",
        image: "images/congee.jpg",
        category: "breakfast",
        cuisine: "chinese",
        ingredients: ["Jasmine rice", "Chicken stock", "Chicken thigh", "Ginger", "Spring onion", "Soy sauce", "Sesame oil"],
        steps: [
            "Simmer the rice in plenty of stock for about an hour, stirring now and then.",
            "Poach the chicken in the pot with sliced ginger, then shred it.",
            "Season the porridge with salt and a little soy sauce.",
            "Serve topped with the chicken, spring onion and a drop of sesame oil."
        ]
    },
    {
        id: 27,
        title: "Bibimbap",
        description: "Rice bowl with seasoned vegetables, beef, egg and chili paste.",
        image: "images/bibimbap.jpg",
        category: "lunch",
        cuisine: "korean",
        ingredients: ["Cooked rice", "Beef strips", "Spinach", "Carrot", "Bean sprouts", "Egg", "Gochujang", "Sesame oil"],
        steps: [
            "Cook each vegetable separately with a little sesame oil and salt.",
            "Stir-fry the beef with soy sauce and garlic.",
            "Arrange the toppings over the rice and add a fried egg.",
            "Add gochujang and mix everything together before eating."
        ]
    },
    {
        id: 28,
        title: "Tteokbokki",
        description: "Chewy rice cakes in a sweet and spicy chili sauce.",
        image: "images/tteokbokki.jpg",
        category: "lunch",
        cuisine: "korean",
        ingredients: ["Rice cakes", "Fish cakes", "Gochujang", "Gochugaru", "Sugar", "Soy sauce", "Spring onion", "Boiled egg"],
        steps: [
            "Soak the rice cakes in warm water if they are hard.",
            "Boil water with gochujang, gochugaru, sugar and soy sauce.",
            "Add the rice cakes and fish cakes and simmer until the sauce thickens.",
            "Top with spring onion and halved boiled eggs."
        ]
    },
    {
        id: 29,
        title: "Miso Soup",
        description: "Light Japanese soup with tofu, seaweed and spring onion.",
        image: "images/miso-soup.jpg",
        category: "breakfast",
        cuisine: "japanese",
        ingredients: ["Dashi stock", "Miso paste", "Soft tofu", "Dried wakame", "Spring onion"],
        steps: [
            "Heat the dashi stock until just below boiling.",
            "Add the tofu cubes and soaked wakame.",
            "Dissolve the miso in a ladle of hot stock, then stir it back in.",
            "Serve right away with spring onion, and do not let it boil."
        ]
    },
    {
        id: 30,
        title: "Chicken Katsu",
        description: "Crispy breaded chicken cutlet with tangy katsu sauce.",
        image: "images/katsu.jpg",
        category: "dinner",
        cuisine: "japanese",
        ingredients: ["Chicken breast", "Flour", "Egg", "Panko breadcrumbs", "Oil", "Tonkatsu sauce", "Shredded cabbage"],
        steps: [
            "Flatten the chicken to an even thickness and season with salt and pepper.",
            "Coat in flour, then beaten egg, then panko.",
            "Fry in hot oil for about 4 minutes per side until deep golden.",
            "Slice and serve with shredded cabbage, rice and katsu sauce."
        ]
    },
    {
        id: 31,
        title: "Fluffy Pancakes",
        description: "Thick, soft pancakes served with butter and syrup.",
        image: "images/pancakes.jpg",
        category: "breakfast",
        cuisine: "american",
        ingredients: ["Flour", "Milk", "Egg", "Sugar", "Baking powder", "Butter", "Salt", "Maple syrup"],
        steps: [
            "Mix the flour, sugar, baking powder and salt.",
            "Whisk the milk, egg and melted butter, then stir into the dry mix until just combined.",
            "Pour small rounds onto a buttered pan over medium heat.",
            "Flip when bubbles form and cook until golden, then serve with syrup."
        ]
    },
    {
        id: 32,
        title: "Classic Cheeseburger",
        description: "Juicy beef patty with melted cheese in a soft bun.",
        image: "images/cheeseburger.jpg",
        category: "dinner",
        cuisine: "american",
        ingredients: ["Ground beef", "Burger buns", "Cheddar slices", "Lettuce", "Tomato", "Onion", "Pickles", "Salt and pepper"],
        steps: [
            "Shape the beef into patties and season both sides with salt and pepper.",
            "Cook in a hot pan for 3 to 4 minutes per side.",
            "Add the cheese in the last minute so it melts.",
            "Toast the buns and build with lettuce, tomato, onion and pickles."
        ]
    },
    {
        id: 33,
        title: "Spaghetti Carbonara",
        description: "Creamy egg and cheese pasta with crisp bacon, no cream needed.",
        image: "images/carbonara.jpg",
        category: "dinner",
        cuisine: "italian",
        ingredients: ["Spaghetti", "Bacon or pancetta", "Eggs", "Parmesan", "Black pepper", "Salt"],
        steps: [
            "Boil the spaghetti in salted water and save a cup of the pasta water.",
            "Fry the bacon until crisp.",
            "Whisk the eggs with grated Parmesan and plenty of pepper.",
            "Toss the hot pasta with the bacon, then off the heat stir in the egg mix with a splash of pasta water."
        ]
    },
    {
        id: 34,
        title: "Tiramisu",
        description: "Layered coffee-soaked biscuits with creamy mascarpone.",
        image: "images/tiramisu.jpg",
        category: "dessert",
        cuisine: "italian",
        ingredients: ["Ladyfinger biscuits", "Mascarpone", "Eggs", "Sugar", "Strong coffee", "Cocoa powder"],
        steps: [
            "Whisk the egg yolks with sugar, then fold in the mascarpone.",
            "Whip the egg whites to soft peaks and fold them in.",
            "Dip the biscuits quickly in cooled coffee and layer them in a dish with the cream.",
            "Repeat the layers, chill for at least 6 hours, and dust with cocoa before serving."
        ]
    },
    {
        id: 35,
        title: "Butter Croissants",
        description: "Flaky, golden layers of buttery pastry.",
        image: "images/croissant.jpg",
        category: "bakery",
        cuisine: "french",
        ingredients: ["Bread flour", "Cold butter", "Milk", "Sugar", "Yeast", "Salt", "Egg for brushing"],
        steps: [
            "Make a dough with flour, milk, sugar, yeast and salt, then chill it overnight.",
            "Enclose a flat block of cold butter in the dough.",
            "Roll and fold the dough three times, chilling between each fold.",
            "Cut triangles, roll them up, let them rise, brush with egg, and bake until deep golden."
        ]
    },
    {
        id: 36,
        title: "Chicken Quesadilla",
        description: "Crisp tortilla filled with melted cheese and seasoned chicken.",
        image: "images/quesadilla.jpg",
        category: "lunch",
        cuisine: "mexican",
        ingredients: ["Flour tortillas", "Cooked chicken", "Cheese", "Bell pepper", "Onion", "Cumin", "Salsa", "Sour cream"],
        steps: [
            "Sauté the pepper and onion with cumin until soft.",
            "Layer cheese, chicken and the vegetables on half of a tortilla and fold it over.",
            "Cook in a dry pan for 2 minutes per side until crisp and the cheese melts.",
            "Cut into wedges and serve with salsa and sour cream."
        ]
    },
    {
        id: 37,
        title: "Watermelon Juice",
        description: "Cold, naturally sweet juice with a squeeze of lime.",
        image: "images/watermelon-juice.jpg",
        category: "juice",
        cuisine: "drinks",
        ingredients: ["Seedless watermelon", "Lime juice", "Mint leaves", "Ice"],
        steps: [
            "Cut the watermelon into chunks.",
            "Blend until smooth.",
            "Add a squeeze of lime juice and strain if you like a clear juice.",
            "Pour over ice and top with mint."
        ]
    },
    {
        id: 38,
        title: "Iced Milk Tea",
        description: "Strong black tea with milk, served cold over ice.",
        image: "images/milk-tea.jpg",
        category: "drinks",
        cuisine: "drinks",
        ingredients: ["Black tea bags", "Hot water", "Sweetened condensed milk", "Fresh milk", "Ice"],
        steps: [
            "Steep the tea in hot water for 5 minutes and remove the bags.",
            "Stir in the condensed milk while the tea is still warm.",
            "Let it cool, then pour over a glass full of ice.",
            "Top with fresh milk and stir."
        ]
    },
    {
        id: 39,
        title: "Fresh Lemonade",
        description: "Bright, tangy lemonade you can sweeten to taste.",
        image: "images/lemonade.jpg",
        category: "drinks",
        cuisine: "drinks",
        ingredients: ["Lemons", "Sugar", "Water", "Ice", "Mint leaves"],
        steps: [
            "Dissolve the sugar in a little hot water to make a syrup.",
            "Squeeze the lemons and strain out the seeds.",
            "Mix the juice, syrup and cold water, then taste and adjust.",
            "Serve over ice with mint."
        ]
    },
    {
        id: 40,
        title: "Chocolate Chip Cookies",
        description: "Chewy cookies with crisp edges and melted chocolate.",
        image: "images/cookies.jpg",
        category: "bakery",
        cuisine: "american",
        ingredients: ["Flour", "Butter", "Brown sugar", "White sugar", "Egg", "Vanilla", "Baking soda", "Chocolate chips"],
        steps: [
            "Cream the soft butter with both sugars, then beat in the egg and vanilla.",
            "Stir in the flour, baking soda and a pinch of salt, then fold in the chocolate chips.",
            "Scoop balls of dough onto a lined tray, leaving space between them.",
            "Bake at 175°C for 10 to 12 minutes until the edges are golden."
        ]
    },
        {
        id: 41,
        title: "Khmer Sour Fish Soup",
        description: "Tangy tamarind soup with fish, pineapple and fresh herbs.",
        image: "images/sour-fish-soup.jpg",
        category: "dinner",
        cuisine: "khmer",
        ingredients: ["Fish steaks", "Tamarind paste", "Pineapple", "Tomato", "Lemongrass", "Garlic", "Fish sauce", "Fresh herbs"],
        steps: [
            "Bring water to a boil with lemongrass and crushed garlic.",
            "Add the tamarind, pineapple and tomato and simmer for 5 minutes.",
            "Add the fish and cook gently until just done.",
            "Season with fish sauce and finish with fresh herbs."
        ]
    },
    {
        id: 42,
        title: "Lemongrass Chicken Stir-fry",
        description: "Chicken stir-fried with fragrant lemongrass paste and green beans.",
        image: "images/lemongrass-chicken.jpg",
        category: "dinner",
        cuisine: "khmer",
        ingredients: ["Chicken thigh", "Kroeung paste", "Green beans", "Fish sauce", "Palm sugar", "Garlic", "Oil"],
        steps: [
            "Fry the kroeung paste in hot oil until fragrant.",
            "Add the sliced chicken and stir until browned.",
            "Add the green beans, fish sauce and palm sugar.",
            "Stir-fry until the beans are tender and serve with rice."
        ]
    },
    {
        id: 43,
        title: "Grilled Pork Skewers",
        description: "Sweet and smoky marinated pork skewers, grilled until charred.",
        image: "images/pork-skewers.jpg",
        category: "lunch",
        cuisine: "khmer",
        ingredients: ["Pork shoulder", "Garlic", "Lemongrass", "Soy sauce", "Palm sugar", "Fish sauce", "Wooden skewers"],
        steps: [
            "Slice the pork thinly and marinate with garlic, lemongrass, soy sauce, sugar and fish sauce for 2 hours.",
            "Thread onto soaked skewers.",
            "Grill over medium heat, turning often, until caramelized.",
            "Serve with rice and pickled vegetables."
        ]
    },
    {
        id: 44,
        title: "Coconut Rice Cakes",
        description: "Warm, soft Khmer rice cakes with coconut milk and a hint of sweetness.",
        image: "images/coconut-rice-cakes.jpg",
        category: "dessert",
        cuisine: "khmer",
        ingredients: ["Rice flour", "Coconut milk", "Palm sugar", "Pinch of salt", "Grated coconut"],
        steps: [
            "Whisk the rice flour with coconut milk, sugar and salt into a smooth batter.",
            "Pour into a lightly oiled mold or small cups.",
            "Steam for 20 minutes until firm.",
            "Cool slightly and roll in grated coconut."
        ]
    },
    {
        id: 45,
        title: "Cambodian Fried Noodles",
        description: "Stir-fried noodles with egg, greens and a sweet-savory sauce.",
        image: "images/fried-noodles.jpg",
        category: "lunch",
        cuisine: "khmer",
        ingredients: ["Wheat noodles", "Egg", "Chinese broccoli", "Garlic", "Soy sauce", "Oyster sauce", "Pork slices"],
        steps: [
            "Soak or boil the noodles until just soft and drain.",
            "Fry the garlic and pork, then scramble in the egg.",
            "Add the greens and noodles with the sauces.",
            "Toss on high heat until everything is coated and hot."
        ]
    },
    {
        id: 46,
        title: "Wonton Soup",
        description: "Delicate pork wontons in a light, savory broth.",
        image: "images/wonton-soup.jpg",
        category: "lunch",
        cuisine: "chinese",
        ingredients: ["Wonton wrappers", "Ground pork", "Ginger", "Chicken stock", "Spring onion", "Sesame oil", "Bok choy"],
        steps: [
            "Mix the pork with grated ginger, sesame oil and a little soy sauce.",
            "Wrap a spoonful in each wonton wrapper and seal the edges.",
            "Heat the stock and add the wontons and bok choy.",
            "Cook for 4 minutes until the wontons float, then top with spring onion."
        ]
    },
    {
        id: 47,
        title: "Kung Pao Chicken",
        description: "Spicy stir-fried chicken with peanuts and dried chilies.",
        image: "images/kung-pao.jpg",
        category: "dinner",
        cuisine: "chinese",
        ingredients: ["Chicken breast", "Roasted peanuts", "Dried chilies", "Garlic", "Ginger", "Soy sauce", "Vinegar", "Sugar"],
        steps: [
            "Marinate the diced chicken in soy sauce and cornstarch.",
            "Fry the chilies, garlic and ginger in hot oil for 30 seconds.",
            "Add the chicken and cook through, then add the sauce of soy, vinegar and sugar.",
            "Stir in the peanuts and serve with rice."
        ]
    },
    {
        id: 48,
        title: "Japchae",
        description: "Glass noodles stir-fried with vegetables and beef in sesame sauce.",
        image: "images/japchae.jpg",
        category: "lunch",
        cuisine: "korean",
        ingredients: ["Sweet potato noodles", "Beef strips", "Spinach", "Carrot", "Mushrooms", "Soy sauce", "Sesame oil", "Sugar"],
        steps: [
            "Boil the noodles until chewy, drain, and toss with a little sesame oil.",
            "Stir-fry the beef and each vegetable separately.",
            "Combine everything with soy sauce, sugar and sesame oil.",
            "Serve warm or at room temperature with sesame seeds."
        ]
    },
    {
        id: 49,
        title: "Korean Fried Chicken",
        description: "Extra-crispy double-fried chicken glazed in a sweet chili sauce.",
        image: "images/korean-fried-chicken.jpg",
        category: "dinner",
        cuisine: "korean",
        ingredients: ["Chicken wings", "Potato starch", "Gochujang", "Garlic", "Soy sauce", "Honey", "Oil"],
        steps: [
            "Coat the chicken pieces in potato starch.",
            "Fry once at medium heat, rest for 10 minutes, then fry again at high heat until crisp.",
            "Simmer gochujang, garlic, soy sauce and honey into a glaze.",
            "Toss the chicken in the glaze and serve at once."
        ]
    },
    {
        id: 50,
        title: "Chicken Ramen",
        description: "Rich chicken broth with noodles, egg and spring onion.",
        image: "images/ramen.jpg",
        category: "dinner",
        cuisine: "japanese",
        ingredients: ["Ramen noodles", "Chicken stock", "Soy sauce", "Miso paste", "Soft-boiled egg", "Spring onion", "Sliced chicken"],
        steps: [
            "Heat the stock and season with soy sauce and a spoon of miso.",
            "Cook the noodles separately according to the packet and drain.",
            "Place the noodles in a bowl and ladle over the hot broth.",
            "Top with sliced chicken, a halved egg and spring onion."
        ]
    },
    {
        id: 51,
        title: "Onigiri",
        description: "Hand-shaped rice balls with a savory filling, wrapped in seaweed.",
        image: "images/onigiri.jpg",
        category: "breakfast",
        cuisine: "japanese",
        ingredients: ["Short-grain rice", "Nori sheets", "Salt", "Tuna with mayonnaise or pickled plum", "Water"],
        steps: [
            "Cook the rice and let it cool until warm enough to handle.",
            "Wet your hands and sprinkle them with salt.",
            "Press a handful of rice around a spoon of filling and shape it into a triangle.",
            "Wrap with a strip of nori and serve."
        ]
    },
    {
        id: 52,
        title: "Baked Mac and Cheese",
        description: "Creamy pasta in cheese sauce with a golden baked top.",
        image: "images/mac-and-cheese.jpg",
        category: "dinner",
        cuisine: "american",
        ingredients: ["Macaroni", "Butter", "Flour", "Milk", "Cheddar", "Breadcrumbs", "Salt and pepper"],
        steps: [
            "Boil the macaroni until just tender and drain.",
            "Make a sauce by cooking butter and flour, whisking in milk, then melting in most of the cheese.",
            "Stir the pasta into the sauce and pour into a baking dish.",
            "Top with the remaining cheese and breadcrumbs and bake at 190°C until golden."
        ]
    },
    {
        id: 53,
        title: "Classic Lasagna",
        description: "Layers of pasta, rich meat sauce and creamy white sauce.",
        image: "images/lasagna.jpg",
        category: "dinner",
        cuisine: "italian",
        ingredients: ["Lasagna sheets", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Milk", "Butter", "Flour", "Mozzarella", "Parmesan"],
        steps: [
            "Cook the beef with onion and garlic, add the tomato sauce, and simmer for 30 minutes.",
            "Make a white sauce from butter, flour and milk.",
            "Layer the sheets, meat sauce, white sauce and mozzarella in a dish, repeating the layers.",
            "Top with Parmesan and bake at 180°C for 40 minutes, then rest before slicing."
        ]
    },
    {
        id: 54,
        title: "French Onion Soup",
        description: "Deeply caramelized onions in broth, topped with melted cheese toast.",
        image: "images/french-onion-soup.jpg",
        category: "lunch",
        cuisine: "french",
        ingredients: ["Onions", "Butter", "Beef stock", "Thyme", "Baguette slices", "Gruyère cheese", "White wine"],
        steps: [
            "Cook the sliced onions slowly in butter for 40 minutes until deep brown.",
            "Add the wine and let it reduce, then pour in the stock and thyme.",
            "Simmer for 20 minutes and season.",
            "Ladle into bowls, top with bread and cheese, and grill until bubbling."
        ]
    },
    {
        id: 55,
        title: "Crème Brûlée",
        description: "Silky vanilla custard with a crackling caramelized sugar top.",
        image: "images/creme-brulee.jpg",
        category: "dessert",
        cuisine: "french",
        ingredients: ["Cream", "Egg yolks", "Sugar", "Vanilla", "Extra sugar for topping"],
        steps: [
            "Warm the cream with the vanilla.",
            "Whisk the yolks and sugar, then slowly stir in the warm cream.",
            "Pour into ramekins and bake in a water bath at 150°C for about 40 minutes.",
            "Chill, then sprinkle with sugar and caramelize with a torch before serving."
        ]
    },
    {
        id: 56,
        title: "Beef Burrito",
        description: "Large tortilla filled with seasoned beef, rice and beans.",
        image: "images/burrito.jpg",
        category: "lunch",
        cuisine: "mexican",
        ingredients: ["Flour tortillas", "Ground beef", "Cooked rice", "Black beans", "Cheese", "Salsa", "Cumin", "Paprika"],
        steps: [
            "Brown the beef with cumin and paprika.",
            "Warm the tortillas so they fold without tearing.",
            "Fill with rice, beans, beef, cheese and salsa.",
            "Fold in the sides, roll tightly, and toast seam-side down in a pan."
        ]
    },
    {
        id: 57,
        title: "Fresh Guacamole",
        description: "Chunky avocado dip with lime, onion and coriander.",
        image: "images/guacamole.jpg",
        category: "lunch",
        cuisine: "mexican",
        ingredients: ["Ripe avocados", "Lime juice", "Red onion", "Tomato", "Coriander", "Salt", "Tortilla chips"],
        steps: [
            "Halve the avocados and scoop the flesh into a bowl.",
            "Mash roughly with a fork, leaving some chunks.",
            "Stir in lime juice, chopped onion, tomato, coriander and salt.",
            "Serve right away with tortilla chips."
        ]
    },
    {
        id: 58,
        title: "Mango Smoothie",
        description: "Thick, creamy smoothie made with ripe mango and yogurt.",
        image: "images/mango-smoothie.jpg",
        category: "juice",
        cuisine: "drinks",
        ingredients: ["Ripe mango", "Plain yogurt", "Milk", "Honey", "Ice"],
        steps: [
            "Peel and cube the mango.",
            "Blend with the yogurt, milk, honey and ice until smooth.",
            "Taste and add more honey if needed.",
            "Pour into a tall glass and serve cold."
        ]
    },
    {
        id: 59,
        title: "Cinnamon Rolls",
        description: "Soft, sticky rolls swirled with cinnamon and topped with icing.",
        image: "images/cinnamon-rolls.jpg",
        category: "bakery",
        cuisine: "american",
        ingredients: ["Flour", "Milk", "Yeast", "Butter", "Brown sugar", "Cinnamon", "Cream cheese", "Icing sugar"],
        steps: [
            "Make a soft dough with flour, warm milk, yeast, sugar and butter, and let it rise for 1 hour.",
            "Roll it out and spread with butter, brown sugar and cinnamon.",
            "Roll up, slice into rounds, and let them rise again in a baking dish.",
            "Bake at 180°C for 25 minutes and top with cream cheese icing."
        ]
    },
    {
        id: 60,
        title: "Hot Chocolate",
        description: "Rich, warming chocolate drink made with real chocolate and milk.",
        image: "images/hot-chocolate.jpg",
        category: "drinks",
        cuisine: "drinks",
        ingredients: ["Milk", "Dark chocolate", "Cocoa powder", "Sugar", "Vanilla"],
        steps: [
            "Heat the milk gently without boiling.",
            "Whisk in the cocoa and sugar until smooth.",
            "Add the chopped chocolate and stir until melted.",
            "Finish with a drop of vanilla and pour into mugs."
        ]
    }
];