const { Comment } = require('../models');

// Sample data for seeding comments
const commentData = [
    {
        comment_text: "Comment 1 comment 1",
        member_id: 1,
        post_id: 4
    },
    {
        comment_text: "Comment 2 comment 2",
        member_id: 2,
        post_id: 3
    },
    {
        comment_text: "Comment 3 comment 3",
        member_id: 3,
        post_id: 2
    },
    {
        comment_text: "Comment 4 comment 4",
        member_id: 4,
        post_id: 1
    }
];

// Function to seed comments into the database
const seedComments = async () => {
    try {
        // Using Sequelize's bulkCreate to insert multiple comments at once
        await Comment.bulkCreate(commentData);
        console.log('Comments seeded successfully');
    } catch (error) {
        // Handling errors that may occur during the seeding process
        console.error('Error seeding comments:', error);
    }
};

module.exports = seedComments;