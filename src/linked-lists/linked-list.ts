import Node from "../nodes/node";

type Value = Node['value'];

export default class LinkedList {
  private _head: Node = null;

  constructor(head?: Node) {
    if (head) {
      this._head = head;
    } 
  }

  public head(): Node | null {
    return this._head;
  }

  public tail(): Node | null {
    let tmp = this.head();

    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    return tmp;
  }

  public append(value: Value) {
    const node = new Node(value);
    if (!this.head()) this._head = node;
    else this.head().nextNode = node;
  }

  public prepend(value: Value) {
    const node = new Node(value);
    if (!this.head()) this._head = node;
    else {
      const firstNode = this.head();
      node.nextNode = firstNode;

      this._head = node;
    }
  }

  public size(): number {
    let tmp = this.head();
    let count = 0;

    while(tmp !== null) {
      tmp = tmp.nextNode;
      count++;
    }

    return count;
  }

  public at(index: number): Node {
    let tmp = this.head();
    let count = 0;

    while(tmp !== null) {      
      if (count === index) return tmp;
      tmp = tmp.nextNode;
      count++;
    }

    return null;
  } 

  public pop() {

  }

  public contains(value: Value) : boolean {
    return false;
  } 

  public find(value: Value): number | null {
    return 0;
  }

  public toString(): string {
    return '';
  }

  public insertAt(value: Value, index: number) {

  }

  public removeAt(index: number) {

  }
}