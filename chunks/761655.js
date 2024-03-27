function(e, t, n) {
    "use strict";
    let r = n("689118");

    function i(e) {
        this._reporterState = {
            obj: null,
            path: [],
            options: e || {},
            errors: []
        }
    }

    function a(e, t) {
        this.path = e, this.rethrow(t)
    }
    t.Reporter = i, i.prototype.isError = function(e) {
        return e instanceof a
    }, i.prototype.save = function() {
        let e = this._reporterState;
        return {
            obj: e.obj,
            pathLen: e.path.length
        }
    }, i.prototype.restore = function(e) {
        let t = this._reporterState;
        t.obj = e.obj, t.path = t.path.slice(0, e.pathLen)
    }, i.prototype.enterKey = function(e) {
        return this._reporterState.path.push(e)
    }, i.prototype.exitKey = function(e) {
        let t = this._reporterState;
        t.path = t.path.slice(0, e - 1)
    }, i.prototype.leaveKey = function(e, t, n) {
        let r = this._reporterState;
        this.exitKey(e), null !== r.obj && (r.obj[t] = n)
    }, i.prototype.path = function() {
        return this._reporterState.path.join("/")
    }, i.prototype.enterObject = function() {
        let e = this._reporterState,
            t = e.obj;
        return e.obj = {}, t
    }, i.prototype.leaveObject = function(e) {
        let t = this._reporterState,
            n = t.obj;
        return t.obj = e, n
    }, i.prototype.error = function(e) {
        let t;
        let n = this._reporterState,
            r = e instanceof a;
        if (t = r ? e : new a(n.path.map(function(e) {
                return "[" + JSON.stringify(e) + "]"
            }).join(""), e.message || e, e.stack), !n.options.partial) throw t;
        return !r && n.errors.push(t), t
    }, i.prototype.wrapResult = function(e) {
        let t = this._reporterState;
        return t.options.partial ? {
            result: this.isError(e) ? null : e,
            errors: t.errors
        } : e
    }, r(a, Error), a.prototype.rethrow = function(e) {
        if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, a), !this.stack) try {
            throw Error(this.message)
        } catch (e) {
            this.stack = e.stack
        }
        return this
    }
}