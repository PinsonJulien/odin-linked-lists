import Node from "../nodes/node";
import LinkedList from "./linked-list";

describe('Linked list', () => {
  let head;
  let list;

  beforeEach(() => {
    head = new Node('test');
    list = new LinkedList(head);
  });

  test('head', () => {
    // returns the first node in the list
    expect(list.head()).toEqual(head);
  });

  test('tail', () => {
    // returns the last node in the list
    expect(list.tail()).toEqual(head);
    const v2 = "test-tail";
    list.append(v2);
    expect(list.tail()?.value).toEqual(v2);
  });

  test('append', () => {
    // Adds a new node containing a value at the end of the list
    const value = "test-append";
    list.append(value);
    expect(list.tail()?.value).toEqual(value);
  });

  test('prepend', () => {
    //Adds a new node containing value at the start of the list
    const value = "test-prepend";
    list.prepend(value);
    expect(list.head()?.value).toEqual(value);
  });

  test('size', () => {
    //returns the total number of nodes in the list
    expect(list.size()).toEqual(1);
    list.append('test');
    expect(list.size()).toEqual(2);
  });

  test('at', () => {
    // returns the value at the given index
    expect(list.at(0)).toEqual(head);
    const v2 = 'test-at';
    list.append(v2);
    expect(list.at(1)?.value).toEqual(v2);
  });

  test('pop', () => {
    // removes the last element from the list
    list.append('test-pop');
    list.pop();
    expect(list.tail()).toEqual(head);
    list.pop();
    expect(list.tail()).toEqual(null);
  });

  test('contains', () => {
    // returns true if the passed in value is in the list and otherwise returns false.
    console.log(list.head(), head);

    list.append('test3');
    list.append('test4');
    console.log(list.head().value, head.value);
    console.log(list.head().value === head.value);
    expect(list.contains(head.value)).toEqual(true);
    expect(list.contains('test-contains')).toEqual(false);
    expect(list.contains('test3')).toEqual(true);
  });

  test('find', () => {
    //  returns the index of the node containing value, or null if not found.
    expect(list.find(head?.value)).toEqual(0);
    expect(list.find('test-find')).toEqual(null);
  });

  test('toString', () => {
    // represents the LinkedList objects as strings of this format : 
    // ( value ) -> ( value ) -> ( value ) -> null
    expect(list.toString()).toEqual(`( ${head?.value} )`);
    const v2 = "test-string";
    list.append(v2);
    expect(list.toString()).toEqual(`( ${head?.value} ) -> ( ${v2} )`);
  });

  // Bonus
  test('insertAt', () => {
    // Inserts a new node with the provided value at the given index.
    const v2 = "test-2";
    list.insertAt(v2, 0);
    // v2 -> head
    expect(list.head()?.value).toEqual(v2);
    expect(list.tail()?.value).toEqual(head);

    const v3 = "test-3";
    list.insertAt(v3, 1);
    // v2 -> v3 -> head
    expect(list.head()?.value).toEqual(v2);
    expect(list.at(1)?.value).toEqual(v3);
    expect(list.tail()?.value).toEqual(head);
  });

  test('removeAt', () => {
    // Removes the node at the given index.
    const v2 = 'test-removeAt';
    list.append(v2);
    list.removeAt(1);
    expect(list.tail()?.value).toEqual(head);
    list.append(v2);
    list.removeAt(0);
    expect(list.tail()?.value).toEqual(v2);
  });
});