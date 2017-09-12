export class Node {
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
		} else {
			let pointer = this.head;
			while (pointer.next){
				pointer = pointer.next;
			}
			pointer.next = node;
		}
	}
	get print(){
		console.log(this.head);
	}
}


