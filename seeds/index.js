const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error!"));
db.once("open", () => {
    console.log("Database connected");
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 30; i++) {
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6656f72c841078ded5dabd6c',
            location: `${sample(cities).city}, ${sample(cities).state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.",
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717266803/YelpCamp/t5fcbzlqvuzxwofw3tco.webp',
                    filename: 'YelpCamp/t5fcbzlqvuzxwofw3tco'
                },
                {
                    url: 'https://res.cloudinary.com/dwtslthej/image/upload/v1717266804/YelpCamp/tacas2nwq8qgnplgzlh0.jpg',
                    filename: 'YelpCamp/tacas2nwq8qgnplgzlh0'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})