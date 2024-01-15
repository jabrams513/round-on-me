// Importing the Member model from the models directory
const { Member } = require('../models');

// Sample data for seeding members
const memberData = [
    {
        username: 'jabrams',
        password: '6.2LV8'
    },
    {
        username: 'AZCnyc',
        password: 'globetrotter'
    },
    {
        username: 'SnoopDog',
        password: 'sniffwoof'
    },
    {
        username: 'PeachPanther',
        password: 'friendlywhiskers'
    }
];

// Function to seed members into the database
const seedMembers = async () => {
    try {
        // Using Sequelize's bulkCreate to insert multiple members at once
        await Member.bulkCreate(memberData);
        console.log('Members seeded successfully');
    } catch (error) {
        // Handling errors that may occur during the seeding process
        console.error('Error seeding members:', error);
    }
};

// Export the seedMembers function for use in other parts of the application
module.exports = seedMembers;