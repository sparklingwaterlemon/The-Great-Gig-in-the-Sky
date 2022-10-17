const PostDB = require('../../models/post');
const fetch = require('node-fetch')




async function addPostToList(req, res) {
    req.body.user = req.user._id

    const newPost = new PostDB(req.body)
    await newPost.save()
    // why await?

    console.log("----new Post ----", newPost)
    // res.json(newPost) // WHAT IS THIS??
}


// async function deleteWeatherFromLocationList(req, res) {
//   const removeWeather = await Weather.findByIdAndDelete(req.params.id);
//   console.log(removeWeather)
//   res.json(removeWeather);
// }

module.exports = {
    addPostToList,
}