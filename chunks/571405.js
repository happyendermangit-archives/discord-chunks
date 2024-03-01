function(t, e, s) {
    "use strict";
    s("424973"), s("70102");
    let r = s("599235");

    function i(t) {
        this._reporterState = {
            obj: null,
            path: [],
            options: t || {},
            errors: []
        }
    }

    function n(t, e) {
        this.path = t, this.rethrow(e)
    }
    e.Reporter = i, i.prototype.isError = function(t) {
        return t instanceof n
    }, i.prototype.save = function() {
        let t = this._reporterState;
        return {
            obj: t.obj,
            pathLen: t.path.length
        }
    }, i.prototype.restore = function(t) {
        let e = this._reporterState;
        e.obj = t.obj, e.path = e.path.slice(0, t.pathLen)
    }, i.prototype.enterKey = function(t) {
        return this._reporterState.path.push(t)
    }, i.prototype.exitKey = function(t) {
        let e = this._reporterState;
        e.path = e.path.slice(0, t - 1)
    }, i.prototype.leaveKey = function(t, e, s) {
        let r = this._reporterState;
        this.exitKey(t), null !== r.obj && (r.obj[e] = s)
    }, i.prototype.path = function() {
        return this._reporterState.path.join("/")
    }, i.prototype.enterObject = function() {
        let t = this._reporterState,
            e = t.obj;
        return t.obj = {}, e
    }, i.prototype.leaveObject = function(t) {
        let e = this._reporterState,
            s = e.obj;
        return e.obj = t, s
    }, i.prototype.error = function(t) {
        let e;
        let s = this._reporterState,
            r = t instanceof n;
        if (e = r ? t : new n(s.path.map(function(t) {
                return "[" + JSON.stringify(t) + "]"
            }).join(""), t.message || t, t.stack), !s.options.partial) throw e;
        return !r && s.errors.push(e), e
    }, i.prototype.wrapResult = function(t) {
        let e = this._reporterState;
        return e.options.partial ? {
            result: this.isError(t) ? null : t,
            errors: e.errors
        } : t
    }, r(n, Error), n.prototype.rethrow = function(t) {
        if (this.message = t + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, n), !this.stack) try {
            throw Error(this.message)
        } catch (t) {
            this.stack = t.stack
        }
        return this
    }
}