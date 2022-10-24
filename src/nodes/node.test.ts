import Node from "./node";

describe('Node', () => {
  let node;
  const value = "test";

  test('value', () => {
    // returns the value.
    node = new Node(value);
    expect(node.value).toEqual(value);
  });

  test('nextNode', () => {
    // returns the next node.
    node = new Node(value);
    const nextNode = new Node(value);
    node.nextNode = nextNode;    
    expect(node.nextNode).toEqual(nextNode);
  });

});