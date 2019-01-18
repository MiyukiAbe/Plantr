const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.SMALLINT
})

const Plot = db.define('plot', {
  size: Sequelize.SMALLINT,
  shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
})

Plot.belongsTo(Gardener);
Gardener.hasMany(Plot);
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});

//Gardener.hasMany(Vegetable);










module.exports = db;