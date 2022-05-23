export function choice(items) {
    return items[Math.floor((Math.random() * items.length))];
}
export function remove(items, item) {
    return items.filter(fruit => fruit !== item);
}