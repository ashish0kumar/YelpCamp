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
            description: 'Experience the breathtaking beauty of Yosemite National Park from this serene and well-equipped campground.',
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
            description: 'Immerse yourself in the tranquil wilderness of Adirondack Park, perfect for a peaceful retreat.',
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
            description: 'Experience the breathtaking landscapes and diverse wildlife in a haven for outdoor enthusiasts.',
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
            description: 'Discover rugged beauty and boundless adventure in a sprawling desert landscape.',
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
            description: 'Embrace the tranquility of ancient mountains and lush forests in a haven for nature lovers.',
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
            description: 'Explore the majestic beauty of diverse ecosystems, from lush rainforests to rugged coastlines.',
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
            description: 'Experience the awe-inspiring grandeur of towering peaks and pristine alpine lakes in a Rocky Mountain paradise.',
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
        },
        {
            "title": "Pine Ridge Retreat",
            "price": 25,
            "description": "Nestled among tall pines, Pine Ridge Retreat offers tranquility and natural beauty.",
            "location": "Sequoia National Park, California",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319922/YelpCamp/ybwdqnkrygdy3launkta.jpg',
                    filename: 'YelpCamp/ybwdqnkrygdy3launkta',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315822/YelpCamp/elefehnuzaxtj2xvahzm.webp',
                    filename: 'YelpCamp/elefehnuzaxtj2xvahzm',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-118.6938, 36.4864]
            }
        },
        {
            "title": "Sunset Valley",
            "price": 19,
            "description": "Enjoy stunning sunsets over rolling hills at Sunset Valley.",
            "location": "Zion National Park, Utah",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                    filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/ke2d4haa9ghryfjjormn.jpg',
                    filename: 'YelpCamp/ke2d4haa9ghryfjjormn',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-113.0263, 37.2982]
            }
        },
        {
            "title": "Crystal Lake Camp",
            "price": 30,
            "description": "Camp by the crystal-clear waters of this beautiful lake.",
            "location": "Crater Lake National Park, Oregon",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                    filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-122.1482, 42.8684]
            }
        },
        {
            "title": "Meadow Creek",
            "price": 18,
            "description": "A charming campground near a bubbling creek, ideal for a family getaway.",
            "location": "Yellowstone National Park, Wyoming",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316151/YelpCamp/rqod45apyvi1a0rbjdui.jpg',
                    filename: 'YelpCamp/rqod45apyvi1a0rbjdui',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316279/YelpCamp/ij444saowtmy31aqj0jb.jpg',
                    filename: 'YelpCamp/ij444saowtmy31aqj0jb',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-110.5885, 44.4280]
            }
        },
        {
            "title": "Evergreen Camp",
            "price": 22,
            "description": "Surrounded by lush evergreen forests, this camp is perfect for nature enthusiasts.",
            "location": "Mount Rainier National Park, Washington",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                    filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-121.7269, 46.8797]
            }
        },
        {
            "title": "Alpine Meadow",
            "price": 24,
            "description": "A scenic campground located in a beautiful alpine meadow.",
            "location": "Rocky Mountain National Park, Colorado",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/ke2d4haa9ghryfjjormn.jpg',
                    filename: 'YelpCamp/ke2d4haa9ghryfjjormn',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-105.6836, 40.3428]
            }
        },
        {
            "title": "Hidden Valley",
            "price": 20,
            "description": "A secluded campground nestled in a picturesque valley.",
            "location": "Shenandoah National Park, Virginia",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                    filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316151/YelpCamp/rqod45apyvi1a0rbjdui.jpg',
                    filename: 'YelpCamp/rqod45apyvi1a0rbjdui',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-78.3497, 38.2928]
            }
        },
        {
            "title": "Starry Night Camp",
            "price": 21,
            "description": "Perfect for stargazing, this camp offers clear skies and minimal light pollution.",
            "location": "Big Bend National Park, Texas",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315822/YelpCamp/elefehnuzaxtj2xvahzm.webp',
                    filename: 'YelpCamp/elefehnuzaxtj2xvahzm',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                    filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-103.2437, 29.1275]
            }
        },
        {
            "title": "Riverside Grove",
            "price": 23,
            "description": "Relax by the river at this peaceful and scenic campground.",
            "location": "Great Smoky Mountains National Park, Tennessee",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                    filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-83.5082, 35.6532]
            }
        },
        {
            "title": "Cedar Haven",
            "price": 17,
            "description": "A cozy campground surrounded by aromatic cedar trees.",
            "location": "Redwood National Park, California",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316279/YelpCamp/ij444saowtmy31aqj0jb.jpg',
                    filename: 'YelpCamp/ij444saowtmy31aqj0jb',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-123.9872, 41.2132]
            }
        },
        {
            "title": "Eagle's Nest",
            "price": 26,
            "description": "High above the valley, Eagle's Nest offers breathtaking views and adventure.",
            "location": "Acadia National Park, Maine",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319922/YelpCamp/ybwdqnkrygdy3launkta.jpg',
                    filename: 'YelpCamp/ybwdqnkrygdy3launkta',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/ke2d4haa9ghryfjjormn.jpg',
                    filename: 'YelpCamp/ke2d4haa9ghryfjjormn',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-68.2733, 44.3386]
            }
        },
        {
            "title": "Bear Hollow",
            "price": 16,
            "description": "A rustic campground located in a hollow frequented by wildlife.",
            "location": "Denali National Park, Alaska",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315643/YelpCamp/timpxobk4z1lzehdnfc4.jpg',
                    filename: 'YelpCamp/timpxobk4z1lzehdnfc4',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315822/YelpCamp/elefehnuzaxtj2xvahzm.webp',
                    filename: 'YelpCamp/elefehnuzaxtj2xvahzm',
                },
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-149.6010, 63.3333]
            }
        },
        {
            "title": "Silver Falls",
            "price": 28,
            "description": "Camp near the stunning Silver Falls and enjoy the soothing sound of cascading water.",
            "location": "Silver Falls State Park, Oregon",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                    filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-122.6570, 44.8778]
            }
        },
        {
            "title": "Forest Glade",
            "price": 18,
            "description": "A serene campsite in a peaceful forest glade.",
            "location": "Cuyahoga Valley National Park, Ohio",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                    filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-81.5545, 41.2808]
            }
        },
        {
            "title": "Mountain Vista",
            "price": 27,
            "description": "Enjoy panoramic mountain views from this scenic campsite.",
            "location": "Great Basin National Park, Nevada",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316598/YelpCamp/fxod0oygrpl8nsf9oyof.webp',
                    filename: 'YelpCamp/fxod0oygrpl8nsf9oyof',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                    filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-114.2236, 38.9830]
            }
        },
        {
            "title": "Coastal Breeze",
            "price": 29,
            "description": "Feel the refreshing coastal breeze at this seaside campground.",
            "location": "Point Reyes National Seashore, California",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319922/YelpCamp/ybwdqnkrygdy3launkta.jpg',
                    filename: 'YelpCamp/ybwdqnkrygdy3launkta',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316279/YelpCamp/ij444saowtmy31aqj0jb.jpg',
                    filename: 'YelpCamp/ij444saowtmy31aqj0jb',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-123.0093, 38.0364]
            }
        },
        {
            "title": "Autumn Ridge",
            "price": 22,
            "description": "A beautiful ridge campsite, especially stunning during autumn.",
            "location": "Smoky Mountains National Park, North Carolina",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315822/YelpCamp/elefehnuzaxtj2xvahzm.webp',
                    filename: 'YelpCamp/elefehnuzaxtj2xvahzm',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-83.5104, 35.6118]
            }
        },
        {
            "title": "Whispering Pines",
            "price": 20,
            "description": "A quiet campsite surrounded by whispering pine trees.",
            "location": "Black Hills National Forest, South Dakota",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                    filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-103.4521, 43.9361]
            }
        },
        {
            "title": "Buffalo Plains",
            "price": 24,
            "description": "Camp on the plains and enjoy sightings of roaming buffalo.",
            "location": "Badlands National Park, South Dakota",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717340283/YelpCamp/veffnmpyftzmumlrjn7d.jpg',
                    filename: 'Yelpcamp/veffnmpyftzmumlrjn7d'
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316151/YelpCamp/rqod45apyvi1a0rbjdui.jpg',
                    filename: 'YelpCamp/rqod45apyvi1a0rbjdui',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-102.5590, 43.8554]
            }
        },
        {
            "title": "Prairie Blossom",
            "price": 19,
            "description": "Experience the beauty of the prairie with blooming wildflowers.",
            "location": "Tallgrass Prairie National Preserve, Kansas",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                    filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315822/YelpCamp/elefehnuzaxtj2xvahzm.webp',
                    filename: 'YelpCamp/elefehnuzaxtj2xvahzm',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-96.5583, 38.4362]
            }
        },
        {
            "title": "Desert Dunes",
            "price": 16,
            "description": "Camp among the dunes and experience the quiet of the desert.",
            "location": "Death Valley National Park, California",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717354169/YelpCamp/vmy2gj7n28wv8gkzjiav.webp',
                    filename: 'YelpCamp/vmy2gj7n28wv8gkzjiav',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                    filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-116.8460, 36.5323]
            }
        },
        {
            "title": "Boulder Creek",
            "price": 25,
            "description": "A picturesque campground by a flowing creek with boulder formations.",
            "location": "Rocky Mountain National Park, Colorado",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316279/YelpCamp/ij444saowtmy31aqj0jb.jpg',
                    filename: 'YelpCamp/ij444saowtmy31aqj0jb',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-105.6836, 40.3428]
            }
        },
        {
            "title": "Snowy Peaks",
            "price": 28,
            "description": "Ideal for winter camping, enjoy the beauty of snowy peaks.",
            "location": "Glacier National Park, Montana",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                    filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw',
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
            "title": "Bay View",
            "price": 23,
            "description": "A stunning bay view campsite, perfect for water activities.",
            "location": "Acadia National Park, Maine",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315643/YelpCamp/timpxobk4z1lzehdnfc4.jpg',
                    filename: 'YelpCamp/timpxobk4z1lzehdnfc4',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-68.2733, 44.3386]
            }
        },
        {
            "title": "Trailside Camp",
            "price": 17,
            "description": "Conveniently located by popular hiking trails, ideal for hikers.",
            "location": "Yosemite National Park, California",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                    filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-119.5383, 37.8651]
            }
        },
        {
            "title": "Wildflower Field",
            "price": 21,
            "description": "Camp among fields of beautiful wildflowers.",
            "location": "Great Smoky Mountains National Park, Tennessee",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                    filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316279/YelpCamp/ij444saowtmy31aqj0jb.jpg',
                    filename: 'YelpCamp/ij444saowtmy31aqj0jb',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-83.5082, 35.6532]
            }
        },
        {
            "title": "Rocky Ridge",
            "price": 20,
            "description": "A rugged campsite with stunning rocky ridges.",
            "location": "Arches National Park, Utah",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316151/YelpCamp/rqod45apyvi1a0rbjdui.jpg',
                    filename: 'YelpCamp/rqod45apyvi1a0rbjdui',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-109.5925, 38.7331]
            }
        },
        {
            "title": "Piney Woods",
            "price": 22,
            "description": "A dense pine forest makes this campsite a perfect woodland retreat.",
            "location": "Congaree National Park, South Carolina",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                },
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-80.7944, 33.7915]
            }
        },
        {
            "title": "Riverbend",
            "price": 27,
            "description": "Located on a river bend, this site is great for fishing and kayaking.",
            "location": "Everglades National Park, Florida",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319922/YelpCamp/ybwdqnkrygdy3launkta.jpg',
                    filename: 'YelpCamp/ybwdqnkrygdy3launkta',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-80.8987, 25.2866]
            }
        },
        {
            "title": "Bluffside Camp",
            "price": 18,
            "description": "Camp on a bluff with breathtaking views of the surrounding landscape.",
            "location": "Bryce Canyon National Park, Utah",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316598/YelpCamp/fxod0oygrpl8nsf9oyof.webp',
                    filename: 'YelpCamp/fxod0oygrpl8nsf9oyof',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                    filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-112.1871, 37.5930]
            }
        },
        {
            "title": "High Desert Camp",
            "price": 19,
            "description": "Experience the unique beauty of the high desert.",
            "location": "Saguaro National Park, Arizona",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315822/YelpCamp/elefehnuzaxtj2xvahzm.webp',
                    filename: 'YelpCamp/elefehnuzaxtj2xvahzm',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-110.7514, 32.2544]
            }
        },
        {
            "title": "Red Rock Camp",
            "price": 26,
            "description": "Surrounded by striking red rock formations, this camp is a photographer's dream.",
            "location": "Zion National Park, Utah",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/sgnblyfk44fzfxssi2kv.jpg',
                    filename: 'YelpCamp/sgnblyfk44fzfxssi2kv',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-113.0263, 37.2982]
            }
        },
        {
            "title": "Spruce Mountain",
            "price": 21,
            "description": "Camp in the spruce forest and explore nearby mountain trails.",
            "location": "Olympic National Park, Washington",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                    filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-123.4980, 47.8021]
            }
        },
        {
            "title": "Canyon Rim",
            "price": 29,
            "description": "A spectacular campsite on the rim of a stunning canyon.",
            "location": "Grand Canyon National Park, Arizona",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316404/YelpCamp/fywfr8k3oid0lcmyuxsj.jpg',
                    filename: 'YelpCamp/fywfr8k3oid0lcmyuxsj',
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
            "title": "Misty Forest",
            "price": 22,
            "description": "A mysterious and enchanting forest campsite.",
            "location": "Olympic National Park, Washington",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717340283/YelpCamp/veffnmpyftzmumlrjn7d.jpg',
                    filename: 'Yelpcamp/veffnmpyftzmumlrjn7d'
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/sgnblyfk44fzfxssi2kv.jpg',
                    filename: 'YelpCamp/sgnblyfk44fzfxssi2kv',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-123.4980, 47.8021]
            }
        },
        {
            "title": "Clearwater Springs",
            "price": 20,
            "description": "Camp by the clear, refreshing waters of natural springs.",
            "location": "Ocala National Forest, Florida",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-81.7083, 29.1714]
            }
        },
        {
            "title": "Sandstone Camp",
            "price": 24,
            "description": "A unique campsite surrounded by beautiful sandstone formations.",
            "location": "Arches National Park, Utah",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717354170/YelpCamp/qk9nutcguf6gnc6308vm.webp',
                    filename: 'YelpCamp/qk9nutcguf6gnc6308vm',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/sgnblyfk44fzfxssi2kv.jpg',
                    filename: 'YelpCamp/sgnblyfk44fzfxssi2kv',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-109.5925, 38.7331]
            }
        },
        {
            "title": "Oak Hollow",
            "price": 18,
            "description": "A secluded campsite in a hollow filled with oak trees.",
            "location": "Shenandoah National Park, Virginia",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/ke2d4haa9ghryfjjormn.jpg',
                    filename: 'YelpCamp/ke2d4haa9ghryfjjormn',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-78.3497, 38.2928]
            }
        },
        {
            "title": "Moonlit Meadow",
            "price": 22,
            "description": "A perfect spot for night camping with a clear view of the moonlit sky.",
            "location": "Joshua Tree National Park, California",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315819/YelpCamp/riu3esed53f9lfsiqek0.jpg',
                    filename: 'YelpCamp/riu3esed53f9lfsiqek0',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315644/YelpCamp/m3fe5n1rkd9dy9ei8noo.jpg',
                    filename: 'YelpCamp/m3fe5n1rkd9dy9ei8noo',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-116.3054, 33.8734]
            }
        },
        {
            "title": "Golden Prairie",
            "price": 19,
            "description": "Experience the golden hues of the prairie at this serene campsite.",
            "location": "Tallgrass Prairie National Preserve, Kansas",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316150/YelpCamp/fvin6sixhkwhdyxyf8uw.png',
                    filename: 'YelpCamp/fvin6sixhkwhdyxyf8uw',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-96.5583, 38.4362]
            }
        },
        {
            "title": "Wild River",
            "price": 23,
            "description": "Camp by a wild, free-flowing river perfect for fishing and rafting.",
            "location": "Yukon-Charley Rivers National Preserve, Alaska",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717319922/YelpCamp/ybwdqnkrygdy3launkta.jpg',
                    filename: 'YelpCamp/ybwdqnkrygdy3launkta',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315575/YelpCamp/hagodx5u5fyyhfmxx9ib.jpg',
                    filename: 'YelpCamp/hagodx5u5fyyhfmxx9ib',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-144.0653, 65.5662]
            }
        },
        {
            "title": "Summit Camp",
            "price": 27,
            "description": "A high-altitude campsite offering spectacular summit views.",
            "location": "Mount Rainier National Park, Washington",
            "reviews": [],
            "images": [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717315643/YelpCamp/timpxobk4z1lzehdnfc4.jpg',
                    filename: 'YelpCamp/timpxobk4z1lzehdnfc4',
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717316045/YelpCamp/ke2d4haa9ghryfjjormn.jpg',
                    filename: 'YelpCamp/ke2d4haa9ghryfjjormn',
                }
            ],
            "author": "6656f72c841078ded5dabd6c",
            "__v": 0,
            "geometry": {
                "type": "Point",
                "coordinates": [-121.7269, 46.8797]
            }
        }
    ];

    await Campground.insertMany(campgrounds);
}

seedDB().then(() => {
    mongoose.connection.close();
});