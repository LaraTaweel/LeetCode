function deleteMiddle(head) {
    if (!head.next) return null;

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next;

    return head;
}
