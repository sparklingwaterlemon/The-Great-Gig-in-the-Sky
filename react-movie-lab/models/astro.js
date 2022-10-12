const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const astroSchema = new Schema({
    condition: {
        text: { type: String },
        cloud: { type: Number },
        icon: { type: String }},
    temp_f: { type: Number },
    feelslike_f: { type: Number },
    maxtemp_f: { type: Number },
    mintemp_f: { type: Number },
    daily_chance_of_rain: { type: Number },
    daily_chance_of_snow: { type: Number },
    sunrise: { type: String },
    sunset: { type: String },
    moonrise: { type: String },
    moonset: { type: String },
    moon_phase: { type: String },
    moon_illumination: { type: String },
    }
)



module.exports = mongoose.model("Astro", astroSchema);

