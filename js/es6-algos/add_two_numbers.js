export class LinkNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export class LinkedList {
	constructor(){
		this.head = null;
	}
	addLink(node){
		if (this.head === null){
			this.head = node;
		}
	}
	get print(){
		console.log(this.head);
	}
}


