function(t, e, o) {
    "use strict";
    o.r(e), o.d(e, {
        default: function() {
            return n
        }
    }), o("424973");
    var n = new class t {
        enqueue(t) {
            this.queue.push(t)
        }
        flush() {
            for (; this.queue.length > 0;) {
                var t;
                null === (t = this.queue.shift()) || void 0 === t || t()
            }
        }
        constructor() {
            this.queue = []
        }
    }
}