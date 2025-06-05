const names_first = [
	"Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Oliver", "Sophia",
	"Benjamin", "Mia", "Elijah", "Charlotte", "Lucas", "Amelia", "Mason", "Harper", "Logan", "Evelyn",
	"Alexander", "Abigail", "Ethan", "Emily", "Jacob", "Ella", "Michael", "Elizabeth", "Daniel", "Camila",
	"Henry", "Luna", "Jackson", "Sofia", "Sebastian", "Avery", "Aiden", "Mila", "Matthew", "Aria",
	"Samuel", "Scarlett", "David", "Penelope", "Joseph", "Layla", "Carter", "Chloe", "Owen", "Victoria"
];

const names_middle = [
	"Grace", "James", "Marie", "Lee", "Ann",
	"Michael", "Elizabeth", "John", "Rose", "Alexander",
	"Lynn", "Joseph", "Rae", "David", "Nicole",
	"Jean", "Thomas", "Claire", "Daniel", "Faith",
	"Andrew", "Skye", "Marie", "Jade", "Matthew",
	"Hope", "Ryan", "Brooke", "Anthony", "Kate",
	"Scott", "Isabelle", "Paul", "Reese", "Taylor",
	"George", "Mae", "Samuel", "Kay", "Logan",
	"Eloise", "Christian", "Ivy", "Noelle", "Ray",
	"Julian", "Louise", "Phoenix", "Dean", "Quinn"
];

const names_last = [
	"Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
	"Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
	"Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
	"Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
	"Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"
];

const emails = [
	"gmail.com", "yahoo.com", "outlook.com"
];

const names_street = [
	"Oak Street", "Maple Avenue", "Pine Lane", "Cedar Road", "Elm Street",
	"Birch Drive", "Willow Court", "Chestnut Boulevard", "Aspen Circle", "Hickory Way",
	"Spruce Terrace", "Sycamore Street", "Redwood Drive", "Poplar Avenue", "Magnolia Lane",
	"Palm Street", "Juniper Trail", "Fir Avenue", "Walnut Drive", "Beech Road",
	"Ash Court", "Alder Lane", "Linden Street", "Dogwood Avenue", "Cypress Road",
	"Sequoia Boulevard", "Bayberry Court", "Cottonwood Way", "Mulberry Street", "Hazel Lane",
	"Locust Road", "Sassafras Drive", "Holly Street", "Tamarack Terrace", "Buckeye Trail",
	"Ironwood Avenue", "Rowan Court", "Elderberry Lane", "Laurel Street", "Banyan Drive",
	"Cactus Road", "Olive Avenue", "Clover Street", "Thistle Lane", "Ivy Boulevard",
	"Vine Court", "Daisy Drive", "Lilac Street", "Rosewood Road", "Gardenia Terrace"
];

const names_city = [
	"New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
	"Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
	"Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
	"San Francisco", "Indianapolis", "Seattle", "Denver", "Washington",
	"Boston", "Nashville", "El Paso", "Detroit", "Oklahoma City",
	"Las Vegas", "Portland", "Memphis", "Louisville", "Baltimore",
	"Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento",
	"Kansas City", "Long Beach", "Mesa", "Atlanta", "Colorado Springs",
	"Miami", "Raleigh", "Omaha", "Minneapolis", "Tulsa",
	"Wichita", "New Orleans", "Arlington", "Cleveland", "Bakersfield"
];

const names_states = [
	"MA", "RI", "CT", "NH", "VT", "ME", "NY", "NC", "PA"
];

const lib_months = [
	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const lib_plans = [
	"Less than 1 year", "1-2 years", "3-5 years", "5+ years"
];

const lib_currins = [
	"Medicare", "Employer Health Plan", "Individual Health Plan", "None"
];

const lib_days = [
	"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
];

const lib_comments = [
	"Poor", "Good", "Great", "Excellent", "Perfect"
];

function getBirthStr(b) {
	let date = new Date(b);
	return lib_months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

function createPerson() {
	let r = 0;
	let obj_user = new person();
	
	// generate full name
	r = Math.floor(Math.random() * names_first.length);
	obj_user.first_name = names_first[r];
	
	r = Math.floor(Math.random() * 3);
	if(r == 2) {
		r = Math.floor(Math.random() * names_middle.length);
		obj_user.middle_name = names_middle[r];
	}
	
	r = Math.floor(Math.random() * names_last.length);
	obj_user.last_name = names_last[r];
	
	// generate date of birth
	let bday = "";
	r = Math.floor(Math.random() * 80) + 1900;
	bday += r + "-";
	
	r = Math.floor(Math.random() * 12) + 1;
	if(r < 10) { r = "0" + r; }
	bday += r + "-";
	
	r = Math.floor(Math.random() * 31) + 1;
	if(r < 10) { r = "0" + r; }
	bday += r;
	obj_user.dob = bday;
	
	// generate phone
	r = Math.floor(Math.random() * 9000000000) + 1000000000;
	obj_user.phone = r;
	
	// generate email
	r = Math.floor(Math.random() * 900) + 100;
	let e = obj_user.first_name.toLowerCase() + "" + obj_user.last_name.toLowerCase() + "" + r + "@";
	r = Math.floor(Math.random() * emails.length)
	e += emails[r];
	obj_user.email = e;
	
	// generate street address
	r = Math.floor(Math.random() * 200) + 1;
	obj_user.address = r + " ";
	r = Math.floor(Math.random() * names_street.length);
	obj_user.address += names_street[r];
	r = Math.floor(Math.random() * 10);
	if(r == 1) {
		r = Math.floor(Math.random() * 20);
		obj_user.address2 = "Unit " + r;
	} else {
		obj_user.address2 = "";
	}
	
	// generate city
	r = Math.floor(Math.random() * names_city.length);
	obj_user.city = names_city[r];
	
	// generate state
	r = Math.floor(Math.random() * names_states.length);
	obj_user.state = names_states[r];
	
	// generate zip
	r = Math.floor(Math.random() * 90000) + 10000;
	obj_user.zip = r;
	
	// generate marriage
	r = Math.floor(Math.random() * 10);
	if(r < 7) {
		obj_user.is_married = true;
		
		// spouse name
		r = Math.floor(Math.random() * names_first.length);
		obj_user.spouse_first = names_first[r];
		
		r = Math.floor(Math.random() * 3);
		if(r == 2) {
			r = Math.floor(Math.random() * names_middle.length);
			obj_user.spouse_middle = names_middle[r];
		}
		
		obj_user.spouse_last = obj_user.last_name;
		
		// spouse dob
		let bday = "";
		r = Math.floor(Math.random() * 80) + 1900;
		bday += r + "-";
		
		r = Math.floor(Math.random() * 12) + 1;
		if(r < 10) { r = "0" + r; }
		bday += r + "-";
		
		r = Math.floor(Math.random() * 31) + 1;
		if(r < 10) { r = "0" + r; }
		bday += r;
		obj_user.spouse_dob = bday;
	}
	
	// generate retiring in
	r = Math.floor(Math.random() * lib_plans.length);
	obj_user.plan = r;
	
	// generate current insurance
	r = Math.floor(Math.random() * lib_currins.length);
	obj_user.currins = r;
	
	// generate availability
	r = Math.floor(Math.random() * lib_days.length);
	let a = [0,0,0,0,0];
	a[r] = 1;
	for(let i = 0; i < a.length; i++) {
		r = Math.floor(Math.random() * 5);
		if(r == 1) {
			a[i] = 1;
		}
	}
	obj_user.available = a;
	
	// generate comments
	r = Math.floor(Math.random() * 3);
	if(r == 1) {
		r = Math.floor(Math.random() * lib_comments.length);
		obj_user.comments = lib_comments[r];
	} else {
		obj_user.comments = "";
	}
	
	return obj_user;
}

class person {
	constructor() {
		this.id = 0;
		this.first_name = "";
		this.middle_name = "";
		this.last_name = "";
		
		this.dob = "";
		this.phone = null;
		this.email = "";
		this.address = "";
		this.address2 = "";
		this.city = "";
		this.state = "";
		this.zip = null;
		
		this.is_married = false;
		this.spouse_first = "";
		this.spouse_middle = "";
		this.spouse_last = "";
		this.spouse_dob = "";
		
		this.plan = null;
		this.currins = null;
		this.available = [0,0,0,0,0];
		
		this.comments = "";
	}
	
	setId(i) { this.id = i; }
	setName(f,m,l) { this.first_name = f; this.middle_name = m; this.last_name = l; }
	setDob(d) { this.dob = d; }
	setPhone(p) { this.phone = p; }
	setEmail(e) { this.email = e; }
	setAddress(a) { this.address = a; }
	setAddress2(a) { this.address2 = a; }
	setCity(c) { this.city = c; }
	setState(s) { this.state = s; }
	setZip(z) { this.zip = z; }
	
	setMarried(m) { this.is_married = m; }
	setSpouseName(f,m,l) { this.spouse_first = f; this.spouse_middle = m; this.spouse_last = l; }
	setSpouseDob(d) { this.spouse_dob = d; }
	
	setPlan(p) { this.plan = p; }
	setCurrIns(i) { this.currins = i; }
	setAvailable(a) { this.available = a; }
	setComments(c) { this.comments = c; }
	
	getFirstName() { return this.first_name; }
	getName() { return (this.middle_name.length > 0) ? this.first_name + " " + this.middle_name + " " + this.last_name : this.first_name + " " + this.last_name; }
	getPhoneStr() {
		this.phone += "";
		return this.phone.slice(0,3) + "-" + this.phone.slice(3,6) + "-" + this.phone.slice(6);
	}
	getSpouseName() { return (this.spouse_middle.length > 0) ? this.spouse_first + " " + this.spouse_middle + " " + this.spouse_last : this.spouse_first + " " + this.spouse_last; }
}

class db_person extends person {
	constructor(p) {
		super();
		this.first_name = p.first_name;
		this.middle_name = p.middle_name;
		this.last_name = p.last_name;
		
		this.dob = p.dob;
		this.phone = p.phone;
		this.email = p.email;
		this.address = p.address;
		this.address2 = p.address2;
		this.city = p.city;
		this.state = p.state;
		this.zip = p.zip;
		
		this.is_married = p.is_married;
		this.spouse_first = p.spouse_first;
		this.spouse_middle = p.spouse_middle;
		this.spouse_last = p.spouse_last;
		this.spouse_dob = p.spouse_dob;
		
		this.plan = p.plan;
		this.currins = p.currins;
		this.available = p.available;
		
		this.comments = p.comments;
	}
}

if(localStorage.getItem('insurance') === null) {
	let insurance_db = [];
	for(let i = 0; i < 50; i++) {
		let new_p = createPerson();
		new_p.id = i;
		insurance_db[i] = new_p;
	}
	localStorage.setItem('insurance', JSON.stringify(insurance_db));
}