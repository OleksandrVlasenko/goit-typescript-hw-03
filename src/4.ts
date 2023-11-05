class Key {
	private signature: number;
	constructor() {
		this.signature = Math.random();
	}

	getSignature() {
		return this.signature;
	}
}

class Person {
	constructor(private key: Key) {}

	getKey() {
		return this.key;
	}
}

abstract class House {
	protected door: boolean = false;
	private tenants: Person[] = [];

	constructor(protected key: Key) {}

	comeIn(person: Person) {
		if (this.door) {
			this.tenants.push(person);
			console.log("The door is opened. Welcome");
		} else {
			console.log("Sorry, your key is wrong. The door is closed");
		}
	}

	getTenants() {
		console.log("Tenants:", this.tenants);
	}

	abstract openDoor(key: Key): void;
}

class MyHouse extends House {
	openDoor(key: Key) {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true;
			console.log("The key is accepted");
		} else {
			this.door = false;
			console.log("Invalid key");
		}
	}
}

const key = new Key();
const key1 = new Key();

const house = new MyHouse(key);
const house1 = new MyHouse(key1);

const person = new Person(key);
const person1 = new Person(key1);
const person2 = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
house1.openDoor(person.getKey());
house1.comeIn(person);

house.openDoor(person1.getKey());
house.comeIn(person1);
house1.openDoor(person1.getKey());
house1.comeIn(person1);

house.openDoor(person2.getKey());
house.comeIn(person2);
house1.openDoor(person2.getKey());
house1.comeIn(person2);

house.getTenants();
house1.getTenants();

export {};
