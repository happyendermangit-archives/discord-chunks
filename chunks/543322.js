function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TaskRunner: function() {
            return i
        }
    });
    class i {
        schedule(e, t) {
            this.unschedule(), this.timeoutId = setTimeout(() => {
                this.timeoutId = null, e()
            }, t)
        }
        unschedule() {
            this.scheduled() && (clearTimeout(this.timeoutId), this.timeoutId = null)
        }
        scheduled() {
            return null !== this.timeoutId
        }
        constructor() {
            this.timeoutId = null
        }
    }
}