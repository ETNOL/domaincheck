const whois = require('whois-json');

const domainlist = [
    "recipeflavors.com",
    "culinarycreations.com",
    "deliciousdishdiaries.com",
    "bitesofbliss.com",
    "scrumptiouskitchen.com",
    "joysofcooking.com",
    "savorysecrets.com",
    "homemadehavens.com",
    "platedperfection.com",
    "cookingcanvas.com",
    "gourmetgallery.com",
    "deliciouslybaked.com",
    "flavorfusion.com",
    "tasteandtell.com",
    "feastandfable.com",
    "chefsparadise.com",
    "gourmetgodsend.com",
    "sizzlingsecrets.com",
    "bakedbliss.com",
    "palatablepantry.com",
    "familyrecipefiles.com",
    "mealsandmerriment.com",
    "thebountifulbaker.com",
    "thehumblechef.com",
    "forkfulofflavor.com",
    "recipeadventures.com",
    "homekitchenheroes.com",
    "heavenlyhomecooking.com",
    "thecuriouscook.com",
    "thepassionatechef.com",
    "thecreativecook.com",
    "tastetemptations.com",
    "flavorjourneys.com",
    "rustickitchenroots.com",
    "simmeringsensations.com",
    "gourmetguidance.com",
    "cookingchronicles.com",
    "palateadventures.com",
    "savorystorybook.com",
    "foodlovershaven.com",
    "festivefeasts.com",
    "savoryspoonfuls.com",
    "sweetandsavorysaga.com",
    "everydayepicurean.com",
    "culinarychronicles.com",
    "dishdelights.com",
    "flavorfulfeasts.com",
    "tastefultreats.com",
    "delightfuldishes.com",
    "heavenlykitchen.com",
    "tasteoftradition.com",
    "homecookedhappiness.com",
    "comfortfoodcorner.com",
    "flavorfilledfork.com",
    "delightfuldinners.com",
    "mykitchenjourney.com",
    "wholesomeflavors.com",
    "wholesomehomecooking.com",
    "deliciouslyhomecooked.com",
    "sweetandsavorybites.com",
    "cookingwithlove.com",
    "cookingcanvas.com",
    "thecookingjourney.com",
    "secretsofmykitchen.com",
    "tastethetradition.com",
    "theheartfeltcook.com",
    "dishingdelight.com",
    "scrumptiousstory.com",
    "flavorsfromhome.com",
    "deliciousdays.com",
    "freshfeastkitchen.com",
    "familyflavorfables.com",
    "kitchencreations.com",
    "foodiememoirs.com",
    "homespunhappiness.com",
    "appetizingadventures.com",
    "thejoyfulcook.com",
    "thekitchenchronicle.com",
    "homecookedheritage.com",
    "delightfuldiningdiaries.com",
    "flavorsofheritage.com",
    "deliciouslegacy.com",
    "fromscratchkitchen.com",
    "foodloveandlife.com",
    "thehappyhomerecipe.com",
    "cozykitchencreations.com",
    "homecookinghaven.com",
    "cookingwithsoul.com",
    "sizzlingstory.com",
    "platedwithpassion.com",
    "myrecipejourney.com",
    "homemadefoodhaven.com",
    "therusticrecipe.com",
    "lovefrommykitchen.com",
    "homerecipehappiness.com",
    "delightfullybaked.com",
    "scrumptiousdiary.com",
    "frommykitchentoyours.com",
    "homemadehappiness.com",
    "culinarycreativity.com"
];

async function checkDomainRegistration(domain) {
    return new Promise((res, rej) => whois(domain)
        .then(data => {
            // If the domain has a registration date, it is registered.
            if (data.creationDate) {
                // console.log(`The domain ${domain} is registered.`);
                res(domain);
            } else {
                console.log(`The domain ${domain} is not registered.`);
                res(null);
            }
        })
        .catch(err => {
            console.error(`Error while checking domain registration: ${err}`);
            rej(err);
        }));
}

for (var domain of domainlist) {
    checkDomainRegistration(domain)
}




