const { green, red } = require("chalk");
const { db, Campus, Student } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    const mars = await Campus.create({
			name: "Mars Academy",
			address: "222 Universe",
			description: "The academy where future people belong to.",
			imageUrl: "mars.png"
    });
    
		const jupiter = await Campus.create({
			name: "Jupiter Jumpstart",
			address: "100 Universe",
			description: "The biggest leap you will have.",
			imageUrl: "jupiter.png"
    });
    
    const flatiron = await Campus.create({
			name: "Flatiron Earth",
			address: "102 13th Street NYC",
			description: "Our campus on earth",
			imageUrl: "flatiron.png"
		});

		const lucy = await Student.create({
			firstName: "Lucy",
			lastName: "Joe",
			email: "lucy@fullstack.com",
			gpa: 3.6,
			campusId: mars.id,
		});

		const moe = await Student.create({
			firstName: "Moe",
			lastName: "Doe",
			email: "moe@fullstack.com",
			gpa: 3.4,
			campusId: mars.id,
    	});
    
    	const karen = await Student.create({
			firstName: "Karen",
			lastName: "James",
			email: "karen@fullstack.com",
			gpa: 3.4,
		});

		const mae = await Student.create({
			firstName: "Mae",
			lastName: "Jemison",
			email: "mae@fullstack.com",
			gpa: 3.8,
			campusId: jupiter.id,
		});
	}
  catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
