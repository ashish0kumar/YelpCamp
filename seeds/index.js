const mongoose = require("mongoose");
const Campground = require("../models/campground");
const axios = require("axios");
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
        const res = await axios.get("https://api.unsplash.com/photos/random?client_id=tVnezep4QeEafTgUrQM2QVhBZiVpWIKwc_K0xChaj1k&collections=483251&count=1&orientation=landscape");
        const imgURL = res.data[0].urls.raw;
        const camp = new Campground({
            author: '6656f72c841078ded5dabd6c',
            location: `${sample(cities).city}, ${sample(cities).state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: imgURL,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fuga suscipit dolor in distinctio tempora id sit harum ipsa incidunt aperiam quam, ipsam provident quod libero exercitationem nam voluptas perferendis.",
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})