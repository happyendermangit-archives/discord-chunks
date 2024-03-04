function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("424973");
    var i = new class e {
        enqueue(e) {
            this.queue.push(e)
        }
        flush() {
            for (; this.queue.length > 0;) {
                var e;
                null === (e = this.queue.shift()) || void 0 === e || e()
            }
        }
        constructor() {
            this.queue = []
        }
    }
}