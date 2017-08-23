var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3832/9603531635_e348167e39.jpg",
        description: "Good place for fishing and camping! Ut at leo vel ligula dignissim suscipit. Nullam vitae velit eu eros pharetra feugiat ac vel mauris. Fusce sollicitudin sapien nisl, nec condimentum lorem aliquam quis. Suspendisse sit amet dui finibus diam lobortis dapibus a et leo. Aenean at eros eget urna cursus tincidunt. Ut ex nibh, tempor vel purus non, ullamcorper placerat arcu. Quisque scelerisque arcu et ullamcorper semper. Vivamus a mollis nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eget orci non leo pretium vehicula sit amet id sem. Donec ac imperdiet diam, sit amet ultrices quam."
    },
    {
        name: "Merry Woods",
        image: "https://farm5.staticflickr.com/4252/34932341166_c241c61192.jpg", 
        description: "This place has a lots of trees and other good stuff! Ut at leo vel ligula dignissim suscipit. Nullam vitae velit eu eros pharetra feugiat ac vel mauris. Fusce sollicitudin sapien nisl, nec condimentum lorem aliquam quis. Suspendisse sit amet dui finibus diam lobortis dapibus a et leo. Aenean at eros eget urna cursus tincidunt. Ut ex nibh, tempor vel purus non, ullamcorper placerat arcu. Quisque scelerisque arcu et ullamcorper semper. Vivamus a mollis nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eget orci non leo pretium vehicula sit amet id sem. Donec ac imperdiet diam, sit amet ultrices quam."
    },
    {
        name: "Goat's Valley",
        image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg",
        description: "Amazing scenery! Ut at leo vel ligula dignissim suscipit. Nullam vitae velit eu eros pharetra feugiat ac vel mauris. Fusce sollicitudin sapien nisl, nec condimentum lorem aliquam quis. Suspendisse sit amet dui finibus diam lobortis dapibus a et leo. Aenean at eros eget urna cursus tincidunt. Ut ex nibh, tempor vel purus non, ullamcorper placerat arcu. Quisque scelerisque arcu et ullamcorper semper. Vivamus a mollis nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eget orci non leo pretium vehicula sit amet id sem. Donec ac imperdiet diam, sit amet ultrices quam."
    }
]

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        // if (err) {
        //     console.log(err);
        // }
        // console.log("Removed campgrounds!");
        // // Add new campgrounds
        // // make sure it's after removing!
        // data.forEach(function(seed) {
        //   Campground.create(seed, function(err, campground) {
        //       if (err) {
        //           console.log(err);
        //       } else {
        //           console.log("Added a campground!");
        //           // Create a comment
        //           Comment.create(
        //               {
        //                   text: "This place is great, but I wish there was internet",
        //                   author: "Homer"
        //               }, function(err, comment) {
        //                   if (err) {
        //                       console.log(err);
        //                   } else {
        //                       campground.comments.push(comment);
        //                       campground.save();
        //                       console.log("Created a comment");
        //                   }
        //               }
                      
        //             );
        //       }
        //   }); 
        // });
    });
    
    
}

module.exports = seedDB;
