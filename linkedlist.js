class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }



  insertBefore(newItem, existingItem){
    if(this.head === null){
      this.insertFirst(newItem);
    }
    let currNode = this.head;
    let prevNode = this.head;

    while(currNode.value !== existingItem.value) {
      prevNode = currNode;
      currNode = currNode.next;
      if (currNode.next === null){
        console.log('item not found!');
        return;
      }
    }
    // A -> B -> D
    prevNode.next = new _Node(newItem, currNode);
  }

  // A -> B -> D
  insertAfter(newItem, existingItem){
    if(this.head === null){
      this.insertFirst(newItem);
    }
    let currNode = this.head;
    //let nextNode = this.head;

    while(currNode.value !== existingItem.value){
      currNode = currNode.next;

      if(currNode.next === null){
        console.log('item not found!');
        return;
      }
    }
    currNode.next = new _Node(newItem, currNode.next);
  }
  //  A - C - D
  //input: insertAt(2) e.g - insert B at position 2
  //output: A - B - C - D
  insertAt(position, newItem) {
    if(this.head === null){
      this.insertFirst(newItem);
    }
    if(position === 0) {
      this.insertFirst(newItem);
    }
    //Create a counter to count the iterations
    let counter = 0;
    let currNode = this.head;

    while(counter !== position) {
      currNode = currNode.next;
      counter++;

      if(currNode.next === null){
        console.log('item not found!');
        return;
      }
    }
    this.insertBefore(newItem, currNode);
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item
    while(currNode.value.key !== item) {
      //return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item){
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value.key === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value.key !== item)) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

let sll = new linkedList();

const main = function() {
  sll.insertLast('Apollo');
  sll.insertLast('Boomer');
  sll.insertLast('Helo');
  sll.insertLast('Husker');
  sll.insertLast('Starbuck');
  sll.insertLast('Tauhida');
  //   sll.remove('squirrel');
  sll.insertBefore('Athena', { value: 'Helo' });
  sll.insertAfter('Hotdog', {value: 'Helo'});
  //JSON.stringify throws an error if you do 0 because it probably doesn't adhere to zero-index
  sll.insertAt(1, 'Ice Cream');
  sll.remove('Tauhida');


  // console.log(JSON.stringify(sll, null, 2));
};

main();

function display(list){
  console.log(list);
}

function size(list) {
  let listItem = list.head;
  if(!listItem){
    return 0;
  }
  //size starts at 1 because linkedList class is always
  //initiated with a head in it.
  let size = 1;
  while(listItem.next !== null){
    listItem = listItem.next;
    size++;

  }
  return size+1;
}

let newList = new linkedList();
// console.log(newList);

function isEmpty(list) {
  return list.head === null;
}

function findPrevious(list, listItem) {
  //find the list Item
  let item = list.head;
  while(item.next.value !== listItem) {
    item = item.next;
    if(item.next === null) {
      console.log('cannot find item!');
      return;
    }
  }
  return item.value;
}

function findLast(list){
  let item = list.head;
  if (!item){
    console.log('your list is empty');
    return;
  }
  while(item.next!==null){
    item=item.next;
  }
  return item;
}

function WhatDoesThisProgramDo(list) {
  let current = list.head;
  // console.log(current);
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
    // console.log(current);
  }
}
// console.log(sll);
WhatDoesThisProgramDo(sll);


// display(JSON.stringify(sll, null, 2));
//console.log(size(sll));
// console.log(isEmpty(sll));
// console.log(findPrevious(sll, 'Ice Cream'));
// console.log(findLast(sll));

module.exports = linkedList;