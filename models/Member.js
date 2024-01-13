const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Define the Member model by extending the Sequelize Model class
class Member extends Model {
  // Method to check if the provided password matches the stored hashed password
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

// Initialize the Member model with specific attributes and their data types
Member.init(
  {
    // Unique identifier for the member
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Member's username, must not be null and must be unique
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // Member's password, must not be null and must have a minimum length of 8 characters
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    // Hooks to hash the password before creating or updating a member
    hooks: {
      beforeCreate: async (Member) => {
        newMemberData.password = await bcrypt.hash(newMemberData.password, 10);
        return newMemberData;
      },
      beforeUpdate: async (updatedMemberData) => {
        updatedMemberData.password = await bcrypt.hash(updatedMemberData.password, 10);
        return updatedMemberData;
      },
    },
    // Sequelize instance for database connection
    sequelize,
    // Model name in singular form
    modelName: 'member',
    // Freeze the table name to be the same as the model name
    freezeTableName: true,
    // Use underscored naming for the database table (e.g., member_table)
    underscored: true,
    // Disable timestamps for createdAt and updatedAt columns
    timestamps: false,
  }
);

// Export the Member model for use in other parts of the application
module.exports = Member;