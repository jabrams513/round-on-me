const { Post } = require("../models");

// Sample data for seeding posts
const postData = [
    {
        title: "Post 1",
        content: "Post 1 Content post 1 content",
        member_id: 1,
    },
    {
        title: "Post 2",
        content: "Post 2 Content post 2 content",
        member_id: 2,
    },
    {
        title: "Post 3",
        content: "Post 3 Content post 3 content",
        member_id: 3,
    },
    {
        title: "Post 4",
        content: "Post 4 Content post 4 content",
        member_id: 4,
    }
];

// Function to seed posts into the database
const seedPosts = async () => {
    try {
        // Using Sequelize's bulkCreate to insert multiple posts at once
        await Post.bulkCreate(postData);
        console.log('Posts seeded successfully');
    } catch (error) {
        // Handling errors that may occur during the seeding process
        console.error('Error seeding posts:', error);
    }
};

module.exports = seedPosts;