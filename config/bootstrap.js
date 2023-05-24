/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await User.count() > 0) {
     return;
  }
  
  await User.createEach([
    { emailAddress: 'adrian.allweier@gmail.com', fullName: 'Adrian Allweier', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('12345') },
    { emailAddress: 'pascal@buhl.de', fullName: 'Pascal Buhl', isSuperAdmin: false, password: await sails.helpers.passwords.hashPassword('12345') },
  ]);
  await Category.createEach([
    { name: 'Proteinpulver', ordernumber: 10}, { name: 'Vitalstoffe', ordernumber: 20}  ,
  ]);

  let categoryProteinpulver = await Category.findOne({name: "Proteinpulver"})
  let categoryVitalstoffe = await Category.findOne({name: "Vitalstoffe"})

  await Product.createEach([
    { name: 'Ashwa Pro', price: 18.95, description: "Stressabbau", category: categoryVitalstoffe.id}, 
    { name: 'Augenfit Kapseln', price: 12, description: "Bessere Augen", category: categoryVitalstoffe.id},
    { name: 'Vegan Designer Whey', price: 16.50, description: "Besserer Muskelaufbau", category: categoryProteinpulver.id},
  ]);

};