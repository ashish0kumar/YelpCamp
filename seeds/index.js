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

const seedDB = async () => {
    await Campground.deleteMany({});
    await Campground.insertMany([
        {
            title: 'Dusty River',
            price: 18,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Merced, Texas',
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
            author: '6656f72c841078ded5dabd6c',
            __v: 3
        },
        {
            title: 'Diamond Flats',
            price: 28,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Prescott, New York',
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
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        },
        {
            title: 'Maple Mule Camp',
            price: 22,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Alexandria, Wisconsin',
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
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        },
        {
            title: 'Bullfrog Springs',
            price: 17,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Middletown, Texas',
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
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        },
        {
            title: 'Misty Backcountry',
            price: 18,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Warner Robins, Texas',
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
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        },
        {
            title: 'Sea Creekside',
            price: 29,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Altamonte Springs, Wisconsin',
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316279/YelpCamp/ij444saowtmy31aqj0jb.jpg',
                    filename: 'YelpCamp/ij444saowtmy31aqj0jb',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316281/YelpCamp/zrubbgtuwi8ksvprt0vj.jpg',
                    filename: 'YelpCamp/zrubbgtuwi8ksvprt0vj',
                }
            ],
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        },
        {
            title: 'Cascade Hunting Camp',
            price: 13,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Cedar Hill, Utah',
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/a1dbe63pxqqtnqyinrkc.jpg',
                    filename: 'YelpCamp/a1dbe63pxqqtnqyinrkc',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                    filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj',
                }
            ],
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        },
        {
            title: 'Diamond Sands',
            price: 25,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Mesquite, New York',
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316516/YelpCamp/casxjgqi9oupmti23iw2.jpg',
                    filename: 'YelpCamp/casxjgqi9oupmti23iw2',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316517/YelpCamp/xfu0tlfws4qvjeknh9l1.jpg',
                    filename: 'YelpCamp/xfu0tlfws4qvjeknh9l1',
                }
            ],
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        },
        {
            title: 'Grizzly Mule Camp',
            price: 12,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Upland, California',
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316597/YelpCamp/xbrqunftutcjniim4ahl.jpg',
                    filename: 'YelpCamp/xbrqunftutcjniim4ahl',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316598/YelpCamp/fxod0oygrpl8nsf9oyof.webp',
                    filename: 'YelpCamp/fxod0oygrpl8nsf9oyof',
                }
            ],
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        },
        {
            title: 'Redwood Village',
            price: 19,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.',
            location: 'Palm coast, New Jersey',
            reviews: [],
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316669/YelpCamp/d927pjr1gogcbtqjp8bg.jpg',
                    filename: 'YelpCamp/d927pjr1gogcbtqjp8bg',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316669/YelpCamp/kruk62fivd5n4wyikqmr.jpg',
                    filename: 'YelpCamp/kruk62fivd5n4wyikqmr',
                }
            ],
            author: '6656f72c841078ded5dabd6c',
            __v: 0
        }
    ])
}

seedDB().then(() => {
    mongoose.connection.close();
});