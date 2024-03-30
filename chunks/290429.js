function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        chain: function() {
            return u
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = Symbol.iterator,
        a = function() {
            var e, t, n;

            function a(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, a), o(this, "index", void 0), o(this, "items", void 0), this.index = 0, this.items = e
            }
            return e = a, t = [{
                key: i,
                value: function() {
                    return this
                }
            }, {
                key: "next",
                value: function() {
                    for (; this.index < this.items.length;) {
                        var e = this.items[this.index].next();
                        if (!e.done) return e;
                        this.index += 1
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            }], r(e.prototype, t), n && r(e, n), a
        }();

    function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return new a(t)
    }
}