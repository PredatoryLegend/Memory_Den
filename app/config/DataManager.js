export default class DataManager {
	static myInstance = null;
	userID = "";

	users = [
		{
			userid: "user1",
			name: "John Doe",
			email: "johndoe@gmail.com",
			password: "passw0rd",
			image: require("../assets/md-logo.png"),
		},
		{
			userid: "user2",
			name: "Jane Doe",
			email: "janedoe@gmail.com",
			password: "passw0rd",
			image: require("../assets/md-logo.png"),
		},
	];

	collections = [
		{
			collectionid: "collection1",
			userid: "user1",
			name: "Relationship Photos",
			image: require("../assets/randPic01.jpg"),
			date: "1583884800",
		},
		{
			collectionid: "collection2",
			userid: "user1",
			name: "Family Photos",
			image: require("../assets/randPic02.jpg"),
			date: "1583971200",
		},
		{
			collectionid: "collection3",
			userid: "user1",
			name: "Animal Photos",
			image: require("../assets/randPic03.jpg"),
			date: "1584057600",
		},
		{
			collectionid: "collection4",
			userid: "user1",
			name: "Selfies",
			image: require("../assets/randPic04.jpg"),
			date: "1584144000",
		},
        
		{
			collectionid: "collection5",
			userid: "user1",
			name: "Misc.",
			image: require("../assets/randPic05.jpg"),
			date: "1584230400",
		},
	];

	photos = [
		{
			userid: "user1",
			collectionid: "collection1",
			photoid: 1,
			title: "Photo 1",
			image: require("../assets/randPic01.jpg"),
			date: "1617580800",
		},
		{
			userid: "user1",
			collectionid: "collection1",
			photoid: 2,
			title: "Photo 2",
			image: require("../assets/randPic02.jpg"),
			date: "1618012800",
		},
		{
			userid: "user1",
			collectionid: "collection1",
			photoid: 3,
			title: "Photo 3",
			image: require("../assets/randPic03.jpg"),
			date: "1618444800",
		},
		{
			userid: "user1",
			collectionid: "collection1",
			photoid: 4,
			title: "Photo 4",
			image: require("../assets/randPic04.jpg"),
			date: "1618876800",
		},
		{
			userid: "user1",
			collectionid: "collection1",
			photoid: 5,
			title: "Photo 5",
			image: require("../assets/randPic05.jpg"),
			date: "1619308800",
		},
        {
			userid: "user1",
			collectionid: "collection1",
			photoid: 6,
			title: "Photo 6",
			image: require("../assets/randPic06.jpg"),
			date: "1620172800",
		},
        {
			userid: "user1",
			collectionid: "collection1",
			photoid: 7,
			title: "Photo 7",
			image: require("../assets/randPic07.jpg"),
			date: "1620604800",
		},
        {
			userid: "user1",
			collectionid: "collection1",
			photoid: 8,
			title: "Photo 8",
			image: require("../assets/randPic08.jpg"),
			date: "1621036800",
		},
        {
			userid: "user1",
			collectionid: "collection1",
			photoid: 9,
			title: "Photo 9",
			image: require("../assets/randPic09.jpg"),
			date: "1621468800",
		},
        {
			userid: "user1",
			collectionid: "collection1",
			photoid: 10,
			title: "Photo 10",
			image: require("../assets/randPic10.jpg"),
			date: "1621900800",
		},
		{
			userid: "user1",
			collectionid: "collection2",
			photoid: 11,
			title: "Photo 11",
			image: require("../assets/randPic10.jpg"),
			date: "1622000800",
		},
		{
			userid: "user1",
			collectionid: "collection3",
			photoid: 12,
			title: "Photo 12",
			image: require("../assets/randPic10.jpg"),
			date: "1622010800",
		},
		{
			userid: "user1",
			collectionid: "collection4",
			photoid: 13,
			title: "Photo 13",
			image: require("../assets/randPic10.jpg"),
			date: "1622010800",
		}
	];

	static getInstance() {
		if (DataManager.myInstance == null) {
			DataManager.myInstance = new DataManager();
		}
		return this.myInstance;
	}

	static clearInstance() {
		DataManager.myInstance = null;
	}

	changeCollections(newCollectionsList) {
		return this.collections = newCollectionsList;
	}

	getUserID() {
		return this.userID;
	}

	setUserID(id) {
		this.userID = id;
	}

	getUserCollections(id) {
		return this.collections.filter(
			(collection) => collection.userid === id
		);
	}

	getCollections() {
		return this.collections;
	}

	getCollectionByID(id) {
		return this.collections.find((collection) => collection.collectionid === id);
	}

	getUserPhotos(id) {
		return this.photos.filter((photo) => photo.collectionid === id);
	}

	getPhotos() {
		return this.photos;
	}

	getCollectionPhotos(id) {
		return this.photos.filter((photo) => photo.collectionid === id);
	}

	getUserByID(id) {
		return this.users.find((user) => user.userid === id);
	}

	getUserByName(name) {
		return this.users.find((user) => user.name === name);
	}

	getUsers() {
		return this.users;
	}

	addUser(user) {
		this.users.push(user);
	}

	addPhoto(photo) {
		this.photos.push(photo);
	}

	addCollection(collection) {
		this.collections.push(collection);
	}
}
