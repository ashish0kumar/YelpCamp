const mongoose = require("mongoose");
const Campground = require("../models/campground");

const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error!"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        if (i % 10 === 0) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                        filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315577/YelpCamp/ambwyx36okoisd5lignl.jpg',
                        filename: 'YelpCamp/ambwyx36okoisd5lignl'
                    }
                ]
            })
            await camp.save();
        } else if (i % 10 === 1) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315643/YelpCamp/timpxobk4z1lzehdnfc4.jpg',
                        filename: 'YelpCamp/timpxobk4z1lzehdnfc4'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                        filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo'
                    }
                ]
            })
            await camp.save();
        } else if (i % 10 === 2) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315819/YelpCamp/riu3esed53f9lfsiqek0.jpg',
                        filename: 'YelpCamp/riu3esed53f9lfsiqek0'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315822/YelpCamp/elefehnuzaxtj2xvahzm.webp',
                        filename: 'YelpCamp/elefehnuzaxtj2xvahzm'
                    }
                ]
            })
            await camp.save();
        } else if (i % 10 === 3) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/ke2d4haa9ghryfjjormn.jpg',
                        filename: 'YelpCamp/ke2d4haa9ghryfjjormn'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/sgnblyfk44fzfxssi2kv.jpg',
                        filename: 'YelpCamp/sgnblyfk44fzfxssi2kv'
                    }
                ]
            })
            await camp.save();
        } else if (i % 10 === 4) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                        filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316151/YelpCamp/rqod45apyvi1a0rbjdui.jpg',
                        filename: 'YelpCamp/rqod45apyvi1a0rbjdui'
                    }
                ]
            })
            await camp.save();
        } else if (i % 10 === 5) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316281/YelpCamp/zrubbgtuwi8ksvprt0vj.jpg',
                        filename: 'YelpCamp/zrubbgtuwi8ksvprt0vj'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/a1dbe63pxqqtnqyinrkc.jpg',
                        filename: 'YelpCamp/a1dbe63pxqqtnqyinrkc'
                    }
                ]
            })
            await camp.save();
        } else if (i % 10 === 6) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                        filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316516/YelpCamp/casxjgqi9oupmti23iw2.jpg',
                        filename: 'YelpCamp/casxjgqi9oupmti23iw2'
                    }
                ]
            })
            await camp.save();
        } else if (i % 410=== 7) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316517/YelpCamp/xfu0tlfws4qvjeknh9l1.jpg',
                        filename: 'YelpCamp/xfu0tlfws4qvjeknh9l1'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316597/YelpCamp/xbrqunftutcjniim4ahl.jpg',
                        filename: 'YelpCamp/xbrqunftutcjniim4ahl'
                    }
                ]
            })
            await camp.save();
        } else if (i % 10 === 8) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316598/YelpCamp/fxod0oygrpl8nsf9oyof.webp',
                        filename: 'YelpCamp/fxod0oygrpl8nsf9oyof'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316279/YelpCamp/ij444saowtmy31aqj0jb.jpg',
                        filename: 'YelpCamp/ij444saowtmy31aqj0jb'
                    }
                ]
            })
            await camp.save();
        } else if (i % 10 === 9) {
            const camp = new Campground({
                author: '6656f72c841078ded5dabd6c', // YOUR USER ID
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                title: `${sample(descriptors)} ${sample(places)}`,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt.',
                price,
                geometry: {
                    type: "Point",
                    coordinates: [
                        cities[random1000].longitude,
                        cities[random1000].latitude,
                    ]
                },
                images: [
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319922/YelpCamp/ybwdqnkrygdy3launkta.jpg',
                        filename: 'YelpCamp/ybwdqnkrygdy3launkta'
                    },
                    {
                        url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319923/YelpCamp/o7a1s2q44r0owvwtgfmi.jpg',
                        filename: 'YelpCamp/o7a1s2q44r0owvwtgfmi'
                    }
                ]
            })
            await camp.save();
        }
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});