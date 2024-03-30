function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("629815");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function() {
        var e, t, n;

        function a(e, t, n) {
            var r = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), i(this, "socket", void 0), i(this, "action", void 0), i(this, "add", void 0), i(this, "shouldFlush", void 0), this.socket = e, this.action = null, this.shouldFlush = n, this.add = function(e) {
                r.action = t(r.action, e)
            }, a.batchers.push(this)
        }
        return e = a, t = [{
            key: "flush",
            value: function() {
                var e = this,
                    t = this.action;
                this.action = null, null != t && r.default.dispatch(t).catch(function(n) {
                    return e.socket.resetSocketOnError({
                        error: n,
                        action: t.type
                    })
                })
            }
        }], n = [{
            key: "flush",
            value: function(e, t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, u = a.batchers[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                        var s = i.value;
                        null != s.action && (null == e || s.shouldFlush(e, t)) && s.flush()
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != u.return && u.return()
                    } finally {
                        if (r) throw o
                    }
                }
            }
        }], t && o(e.prototype, t), n && o(e, n), a
    }();
    i(a, "batchers", [])
}