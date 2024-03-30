function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        SyncPromise: function() {
            return u
        },
        rejectedSyncPromise: function() {
            return s
        },
        resolvedSyncPromise: function() {
            return o
        }
    });
    var r, i, a = n("46834");

    function o(t) {
        return new u(e => {
            e(t)
        })
    }

    function s(t) {
        return new u((e, n) => {
            n(t)
        })
    }(r = i || (i = {}))[r.PENDING = 0] = "PENDING", r[r.RESOLVED = 1] = "RESOLVED", r[r.REJECTED = 2] = "REJECTED";
    class u {
        __init() {
            this._state = i.PENDING
        }
        __init2() {
            this._handlers = []
        }
        constructor(t) {
            u.prototype.__init.call(this), u.prototype.__init2.call(this), u.prototype.__init3.call(this), u.prototype.__init4.call(this), u.prototype.__init5.call(this), u.prototype.__init6.call(this);
            try {
                t(this._resolve, this._reject)
            } catch (t) {
                this._reject(t)
            }
        }
        then(t, e) {
            return new u((n, r) => {
                this._handlers.push([!1, e => {
                    if (t) try {
                        n(t(e))
                    } catch (t) {
                        r(t)
                    } else n(e)
                }, t => {
                    if (e) try {
                        n(e(t))
                    } catch (t) {
                        r(t)
                    } else r(t)
                }]), this._executeHandlers()
            })
        } catch (t) {
            return this.then(t => t, t)
        } finally(t) {
            return new u((e, n) => {
                let r, i;
                return this.then(e => {
                    i = !1, r = e, t && t()
                }, e => {
                    i = !0, r = e, t && t()
                }).then(() => {
                    if (i) {
                        n(r);
                        return
                    }
                    e(r)
                })
            })
        }
        __init3() {
            this._resolve = t => {
                this._setResult(i.RESOLVED, t)
            }
        }
        __init4() {
            this._reject = t => {
                this._setResult(i.REJECTED, t)
            }
        }
        __init5() {
            this._setResult = (t, e) => {
                if (this._state === i.PENDING) {
                    if ((0, a.isThenable)(e)) {
                        e.then(this._resolve, this._reject);
                        return
                    }
                    this._state = t, this._value = e, this._executeHandlers()
                }
            }
        }
        __init6() {
            this._executeHandlers = () => {
                if (this._state === i.PENDING) return;
                let t = this._handlers.slice();
                this._handlers = [], t.forEach(t => {
                    !t[0] && (this._state === i.RESOLVED && t[1](this._value), this._state === i.REJECTED && t[2](this._value), t[0] = !0)
                })
            }
        }
    }
}