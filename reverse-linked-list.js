function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}

let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);
head = reverseLinkedList(head);
let current = head;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
