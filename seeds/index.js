const mongoose = require("mongoose");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error!"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Campground.deleteMany({});
    const campgrounds = [
        {
            title: 'Dusty River',
            price: 18,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Yosemite National Park, California',
            geometry: {
                type: 'Point',
                coordinates: [-119.538329, 37.865101]
            },
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                    filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315577/YelpCamp/ambwyx36okoisd5lignl.jpg',
                    filename: 'YelpCamp/ambwyx36okoisd5lignl',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319922/YelpCamp/ybwdqnkrygdy3launkta.jpg',
                    filename: 'YelpCamp/ybwdqnkrygdy3launkta',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319923/YelpCamp/o7a1s2q44r0owvwtgfmi.jpg',
                    filename: 'YelpCamp/o7a1s2q44r0owvwtgfmi',
                }
            ],
            author: '6656f72c841078ded5dabd6c', // Your user id
            __v: 3
        },
        {
            title: 'Diamond Flats',
            price: 28,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Adirondack Park, New York',
            geometry: {
                type: 'Point',
                coordinates: [-74.014095, 44.112318]
            },
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315643/YelpCamp/timpxobk4z1lzehdnfc4.jpg',
                    filename: 'YelpCamp/timpxobk4z1lzehdnfc4',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                }
            ],
            author: '6656f72c841078ded5dabd6c', // Your user id
            __v: 0
        },
        {
            title: 'Maple Mule Camp',
            price: 22,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Devils Lake State Park, Wisconsin',
            geometry: {
                type: 'Point',
                coordinates: [-89.733788, 43.422956]
            },
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315819/YelpCamp/riu3esed53f9lfsiqek0.jpg',
                    filename: 'YelpCamp/riu3esed53f9lfsiqek0',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315822/YelpCamp/elefehnuzaxtj2xvahzm.webp',
                    filename: 'YelpCamp/elefehnuzaxtj2xvahzm',
                }
            ],
            author: '6656f72c841078ded5dabd6c', // Your user id
            __v: 0
        },
        {
            title: 'Bullfrog Springs',
            price: 17,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Big Bend National Park, Texas',
            geometry: {
                type: 'Point',
                coordinates: [-103.250106, 29.127486]
            },
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/sgnblyfk44fzfxssi2kv.jpg',
                    filename: 'YelpCamp/sgnblyfk44fzfxssi2kv',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/ke2d4haa9ghryfjjormn.jpg',
                    filename: 'YelpCamp/ke2d4haa9ghryfjjormn',
                }
            ],
            author: '6656f72c841078ded5dabd6c', // Your user id
            __v: 0
        },
        {
            title: 'Misty Backcountry',
            price: 18,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Great Smoky Mountains National Park, Tennessee',
            geometry: {
                type: 'Point',
                coordinates: [-83.507020, 35.653200]
            },
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                    filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316151/YelpCamp/rqod45apyvi1a0rbjdui.jpg',
                    filename: 'YelpCamp/rqod45apyvi1a0rbjdui',
                }
            ],
            author: '6656f72c841078ded5dabd6c', // Your user id
            __v: 0
        },
        {
            title: 'Sea Creekside',
            price: 29,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Olympic National Park, Washington',
            geometry: {
                type: 'Point',
                coordinates: [-123.498642, 47.802107]
            },
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316279/YelpCamp/ij444saowtmy31aqj0jb.jpg',
                    filename: 'YelpCamp/ij444saowtmy31aqj0jb',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/a1dbe63pxqqtnqyinrkc.jpg',
                    filename: 'YelpCamp/a1dbe63pxqqtnqyinrkc',
                }
            ],
            author: '6656f72c841078ded5dabd6c', // Your user id
            __v: 0
        },
        {
            title: 'Rocky Point',
            price: 23,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Rocky Mountain National Park, Colorado',
            geometry: {
                type: 'Point',
                coordinates: [-105.683639, 40.342793]
            },
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316281/YelpCamp/zrubbgtuwi8ksvprt0vj.jpg',
                    filename: 'YelpCamp/zrubbgtuwi8ksvprt0vj',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                    filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj',
                }
            ],
            author: '6656f72c841078ded5dabd6c', // Your user id
            __v: 0
        },
        {
            "title": "Canyon Oasis",
            "price": 20,
            "description": "A serene oasis in the heart of the canyon, perfect for a peaceful retreat.",
            "location": "Grand Canyon National Park, Arizona",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717354170/YelpCamp/qk9nutcguf6gnc6308vm.webp',
                    filename: 'YelpCamp/qk9nutcguf6gnc6308vm',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717354169/YelpCamp/vmy2gj7n28wv8gkzjiav.webp',
                    filename: 'YelpCamp/vmy2gj7n28wv8gkzjiav',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-112.1401, 36.1069]
            }
        },
        {
            "title": "Lakeside Meadow",
            "price": 27,
            "description": "Beautiful lakeside views and abundant wildlife make this a favorite spot for nature lovers.",
            "location": "Glacier National Park, Montana",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316598/YelpCamp/fxod0oygrpl8nsf9oyof.webp',
                    filename: 'YelpCamp/fxod0oygrpl8nsf9oyof',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316597/YelpCamp/xbrqunftutcjniim4ahl.jpg',
                    filename: 'YelpCamp/xbrqunftutcjniim4ahl',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-113.7870, 48.6968]
            }
        },
        {
            "title": "Desert Mirage",
            "price": 15,
            "description": "Experience the beauty of the desert and stunning night skies at Desert Mirage.",
            "location": "Joshua Tree National Park, California",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316669/YelpCamp/d927pjr1gogcbtqjp8bg.jpg',
                    filename: 'YelpCamp/d927pjr1gogcbtqjp8bg',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316669/YelpCamp/kruk62fivd5n4wyikqmr.jpg',
                    filename: 'YelpCamp/kruk62fivd5n4wyikqmr',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-116.3131, 33.8734]
            }
        }
    ];
    
    await Campground.insertMany(campgrounds);
}

seedDB().then(() => {
    mongoose.connection.close();
});