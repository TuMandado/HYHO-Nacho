const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  sequelize.define('user', {
    nickname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    // securityString: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    email_Verified: {
      type: DataTypes.BOOLEAN,
    },
    adminVerificated: {
      type: DataTypes.BOOLEAN,
    },
    billing_address: {
      type: DataTypes.STRING,
    },
    shipping_address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING                      ,
    },
  }, { timestamps: false })
}
