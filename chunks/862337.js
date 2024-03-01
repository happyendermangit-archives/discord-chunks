function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Timeout: function() {
            return i
        },
        DelayedCall: function() {
            return r
        },
        Interval: function() {
            return s
        },
        timeoutPromise: function() {
            return a
        }
    });
    class i {
        start(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            (!this.isStarted() || n) && (this.stop(), this._ref = window.setTimeout(() => {
                this._ref = null, t()
            }, e))
        }
        stop() {
            null != this._ref && (clearTimeout(this._ref), this._ref = null)
        }
        isStarted() {
            return null != this._ref
        }
    }
    class r {
        set(e) {
            return this._delay = e, this
        }
        delay() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            this._timeout.start(this._delay, this._handler, e)
        }
        cancel() {
            this._timeout.stop()
        }
        isDelayed() {
            return this._timeout.isStarted()
        }
        constructor(e, t) {
            this._delay = e, this._handler = t, this._timeout = new i
        }
    }
    class s {
        start(e, t) {
            this.stop(), this._ref = window.setInterval(t, e)
        }
        stop() {
            null != this._ref && (clearInterval(this._ref), this._ref = null)
        }
    }

    function a(e) {
        return new Promise(t => {
            setTimeout(() => t(), e)
        })
    }
}