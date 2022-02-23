import React from 'react';
import Accordion from '../components/Accordion';

const faqData = [
    {
        title: 'shaken or stirred?',
        paragraphs: [
            'Shaken not stirred, as they say. Although this line was made famous entirely by Ian Fleming’s iconic British character James Bond, it’s often misunderstood and has led to quite a bit of confusion in the world of mixology. For example, even though Bond ordered his martini shaken, that’s actually not considered best practice by the vast majority of bartenders.',
            'The proper rule of thumb is that liquor-forward drinks (drinks intended to feature the flavor of any particular liquor rather than masking or mixing them) should always be stirred because that provides a smoother, more unadulterated drinking experience. While any drinks with fruit juices, cream, egg, or any other mixer, should be shaken. Shaking a drink allows a consistent flavor throughout so that one sip doesn’t entirely feature a fruity flavor while the next can smack someone in the face with overwhelming vodka or rum flavor.',
        ],
        list: null,
    },
    {
        title: 'how to top off a drink?',
        paragraphs: [
            'If you’ve got any experience with creating cocktails, you know that it’s possible to assemble all the ingredients, mix the drink itself, and pour it into a glass without having any idea how much of the finished product you have. If you’re looking to fill a glass completely, here are some different ways you can top off a drink to make sure it’s being presented properly:',
        ],
        list: [
            '<span>Topping a drink off with more liquor:</span> Because most cocktails are created to feature one type of liquor or another, adding an extra splash at the top of a drink doesn’t necessarily hurt.  Just be careful to make sure you’re not overpowering the flavor, and if you’ve created a mixed drink, you may want to mix it again just to make sure it tastes right.  If you’re adding a splash to a stirred drink, one more spin with a bar spoon won’t hurt.',
            '<span>Adding a garnish:</span> The infamous “cherry on top.” This technique involves adding perceived volume without actually changing any of the proportions of the drink.  By putting something like a lemon wedge, a cherry, or a few mint leaves into the drink, you’re raising the liquid level without changing the recipe.',
            '<span>Adding more ice:</span> Depending on the drink, you may want to just add a bit more ice to raise the level of the glass. Just be careful to not dilute the drink. Use the right kind of ice, and reserve this technique for drinks that actually rely on dilution, like the Moscow Mule.',
        ],
    },
    {
        title: 'how to build a drink?',
        paragraphs: [
            'Building a drink is the technique by which cocktail ingredients are poured directly into the serving glass rather than into a cocktail shaker. While there is no right and wrong way to order ingredients, you will need to experiment with every cocktail you make to see if building it a certain way affects flavor at all. Here are some tips for making sure you’re building all your cocktails the best way:',
        ],
        list: [
            '<span>Measure twice, pour once:</span> While this may sound stupid at first glance, it’s worth keeping in mind.  No, you don’t actually have to measure your ingredients, pour them out, then measure them again, but it’s always a good idea to verify that you’re measuring the right amount before you add them to a cocktail.  This way, you’ll never have to start again because you accidentally added two shots when you only needed one.',
            '<span>Order matters:</span> With some drinks, the order can really have an impact on the flavor profile. For example, some sweeteners need to be poured into the drink last because the temperature of the other ingredients can have a huge impact on how everything mixes in the glass.',
            '<span>Ice first:</span> Always make sure that if you’re building a cocktail, you experiment with whether or not you should create the drink by adding the ice to the glass before pouring the ingredients or after.  The majority of drinks should be built upon the ice already in the glass, but it may vary.  Feel free to try it out for yourself to see what tastes best!',
        ],
    },
    {
        title: 'how to strain a drink?',
        paragraphs: [
            'If you’re making a drink with several ingredients, but you don’t want all the bits and pieces of those ingredients in the finished product, you’ll want to make sure you strain the drink before it gets served. Straining a cocktail removes any unwanted items such as muddled herbs, pieces of fruit, or even ice from certain drinks. Here are some things to keep in mind next time you strain a mixed drink:',
        ],
        list: [
            '<span>Use a cocktail strainer:</span> If you’ve made a drink with a cocktail shaker, chances are you’ve got a strainer built-in. Hold the strainer lid on top of the cocktail shaker with your forefinger and middle finger, then tip the shaker upside down to pour the drink out into a glass.',
            '<span>Use a traditional strainer:</span> If you’re using a traditional strainer, sometimes called a Julep strainer, you should position the strainer directly over the glass and then pour the cocktail through the strainer onto the ice.',
        ],
    },
    {
        title: 'how to blend a drink?',
        paragraphs: [
            'Mastering the proper blending technique when you’re making cocktails is an important step. Although not every cocktail needs to be blended, here are some steps you should take to make sure that you’re blending your drinks properly:',
        ],
        list: [
            'Utilizing the right blender is key. One of the most commonly-blended drinks is the frozen margarita, and the right blender can make or break a margarita. You’ll want to get something high quality, as a blender will deteriorate over time.',
            'Add the ice last. Make sure the liquid ingredients are added towards the bottom of the blender, and all the ice is added in at the end.',
            'When you can, use crushed ice. This reduces wear on the blades and the motor of your blender, extending its lifetime.',
            'Start slow, and build up the speed as you go. If you’ve got a variable speed mixer, starting slow will keep the blades from jamming up and will again lengthen the lifetime of your blender.',
        ],
    },
    {
        title: 'how to muddle a drink?',
        paragraphs: [
            'Muddling a drink is a technique used by bartenders where a tool called a muddler (similar to a pestle) is used to mash—or muddle—cocktail ingredients such as herbs, fruits, or spices in the bottom of the drink. Here are some tips on how to properly muddle your next cocktail:',
        ],
        list: [
            'You can muddle without a muddle. If you don’t have the right tool on hand, try using a wooden spoon to gently mash the ingredients together.',
            'Don’t pound. Destroying the fruit and liquefying all the muddled ingredients together is not effective and will limit the flavor. Be gentle.',
        ],
    },
    {
        title: 'best vodka for cocktails?',
        paragraphs: [
            'Vodka is exceptional for its versatility, profile, and subtlety. Here are some of our favorite vodkas for you to use in your next cocktails:',
        ],
        list: ['Ciroc', 'Tito’s', 'Absolut', 'Ketel One', 'Skyy', 'Svedka'],
    },
    {
        title: 'best gin for cocktails?',
        paragraphs: [
            'Gin derives its predominant flavor from juniper berries and usually is also flavored with botanicals. It features notes of pine and is most widely known for the beloved gin and tonic, but is still a very versatile beverage. Here are some notable gin selections:',
        ],
        list: ['Tanqueray', 'Gordon’s', 'Hendrick’s', 'Seagram’s', 'Aviation'],
    },
    {
        title: 'best rum for cocktails?',
        paragraphs: [
            'Sweet, decadent, aromatic. Rum was made famous in the Caribbean because its main ingredient is derived from distilled sugarcane juice. Because of its history, it’s widely used and is often flavored by tropical fruits like coconut, papaya, and even watermelon. Here are some of our favorite rums for you to have on hand:',
        ],
        list: ['Captain Morgan', 'Bacardi', 'The Kraken', 'Malibu', 'Sailor Jerry'],
    },
    {
        title: 'best tequila  for cocktails?',
        paragraphs: [
            'Born in Mexico in the 16th century near a town called Tequila, this “nectar of the gods” is made from the agave plant. Despite its reputation as a spirit for party animals, tequila can be an incredible addition to your collection if you know what to buy. Here’s what we would recommend for your home bar:',
        ],
        list: ['Don Julio', 'Casamigos', 'Hornitos', 'Patrón', 'Jose Cuervo'],
    },
    {
        title: 'best whiskey   for cocktails?',
        paragraphs: [
            'Whiskey and Scotch can either be enjoyed on their own or featured in various cocktails. These robust, complex spirits, usually aged in charred white-oak wooden casks, should be a staple of any aspiring mixologist. Check out these whiskeys:',
        ],
        list: ['Bulleit', 'Suntory Toki', 'Crown Royal', 'Jack Daniel’s', 'Fireball'],
    },
    {
        title: 'bitters for cocktails',
        paragraphs: [
            'Found in hip bars across the world, bitters are a classic cocktail ingredient used to provide depth to the flavor of a mixed drink. Cocktail bitters, unlike digestive bitters, should never be consumed on their own. They do contain around 30% to 40% alcohol content on their own.',
            'Here are some of the most common types of cocktail bitters and what they’re used for:',
        ],
        list: [
            '<span>Aromatic bitters:</span> By far the largest category of bitters, aromatic bitters are created with herbs, spices, and barks that give off a very strong aroma, which is how they got their name.',
            '<span>Citrus bitters:</span> A very popular and flavorful bitter, citrus bitters are quite versatile and usually involve orange, lemon, or grapefruit flavors. They’re typically added to cocktails already featuring those ingredients to add slightly more depth of flavor.',
            '<span>Herbal bitters:</span> One of the biggest modern mixology trends is lavender drinks, and many lavender drinks are created using lavender bitters. Several other types of herbal bitters are also available, including tarragon and thyme bitters.',
        ],
    },
    {
        title: 'sweeteners for cocktails',
        paragraphs: [
            'Most cocktails rely on some kind of sweetener to harmonize all other ingredients. Whether that sweetener is as widely used as simple syrup or as niche as a shrub, it’s important to understand all the possibilities if you seek to be a true mixologist.',
            'For many cocktails, you can choose just about any sweetener you desire. If you have a recipe that calls for agave syrup when you only have simple syrup on hand, you’re not going to ruin the entire drink. Here are some things to keep in mind when using some common sweeteners.',
        ],
        list: [
            '<span>Simple syrup:</span> By far the most commonly used drink sweetener, simple syrup is a blend of equal parts water and sugar, heated in a saucepan until the ingredients have homogenized. The best thing about simple syrups is that they can actually be flavored to create an even more diverse array in your home bar. Consider ingredients like vanilla, rose water, chamomile, or even cinnamon and other spices the next time you want to create a simple syrup.',
            '<span>Honey:</span> Using honey as a sweetener is one of the most difficult to use in a cocktail because of its very unique flavor profile. If you’re making honey syrup for your next drink, make sure you’re pairing with ingredients that are benefited by the flavor of honey rather than masked or even contradicted by honey’s very singular taste. Honey doesn’t always work well in colder drinks; the cold can actually prevent the honey from dissolving or mixing properly. Making a honey syrup helps, because it may break down into your drink easier. If you want to make your own, the simple recipe calls for equal parts honey and water, heated on low in a saucepan.',
            '<span>Agave:</span> Agave nectar can be an excellent and flexible sweetener for your drinks. It works as well as simple syrup without the limitations of honey, and its flavor is subtle. Agave nectar is a popular addition to tequila or mezcal drinks, as they have complementary flavor profiles.',
            '<span>Shrub:</span> A shrub is a nonalcoholic drinking vinegar made with sugar, vinegar, and fruit. They’ve made a comeback in cocktails in recent years, popular for their acidity and complex flavor profile. They can be made using any fruit, most commonly berries, pear, peaches, and melon.',
        ],
    },
    {
        title: 'fresh citrus for mixed drinks',
        paragraphs: [
            'If you cut corners, your drinks won’t live up to their full potential. For example, it’s almost never worth it to swap out pre-squeezed citrus juice for the fresh stuff. If you’re making cocktails that rely on citrus as a major ingredient, take the extra minute and juice your own.',
            'Bottled citrus juice actually begins to build up a bitter liminoid chemical as soon as they are exposed to air, and the longer they sit in a bottle, the more affected by this enzymatic bittering they will be. So, next time you’re crafting a cocktail that calls for lime juice, take the extra time and find some fresh limes that you can juice yourself to ensure an authentic taste without any bitterness.',
        ],
        list: null,
    },
    {
        title: 'ice for cocktails',
        paragraphs: [
            'While selecting ice may seem a bit pedantic, seasoned mixologists know that choosing the right kind of ice can make or break a drink. The world of cocktail ice is generally broken up into four sections:',
        ],
        list: [
            '<span>One-inch standard cubes:</span> By far the most commonly occurring type of cocktail ice, standard cubes will fit in any glass and work great in both shaken and stirred drinks. Any amateur mixologist will be well-served with a standard ice cube in their arsenal.',
            '<span>Large cubes:</span> Large, spherical cubes are most commonly found in spirit-forward drinks or just straight liquor on the rocks. Because of their very low surface area to volume ratio, spherical cubes melt very slowly and do not dilute a drink as quickly as some other alternatives, meaning they can be enjoyed at a more leisurely pace.',
            '<span>Collins spears:</span> If you’re looking for a classy way to spruce up a highball, a collins spear can be a great addition to the next Gin and Tonic you mix up.',
            '<span>Crushed ice:</span> Crushed ice is most commonly found in drinks with dilution as a part of the mixing process, such as Moscow Mules or Mint Juleps. These drinks rely on the melting of the ice as part of the flavor for rounding out their very distinct profiles.',
        ],
    },
];

const FAQ = () => {
    return (
        <section className='section section-center'>
            <h2 className='section-title'>FAQ</h2>
            <Accordion data={faqData} />
        </section>
    );
};

export default FAQ;
