class EventEmitter {

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        const listeners = this.events.get(eventName);
        listeners.push(callback);
        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(event, args = []) {
        if (!this.events.has(event)) {
            return [];
        }

        const listeners = this.events.get(event);
        const results = [];

        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;

    }
}


const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99] sub.unsubscribe(); // undefined
console.log(emitter.emit('onClick')); // 