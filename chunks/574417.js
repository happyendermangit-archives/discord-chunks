function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChangeListeners: function() {
            return i
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
    var i = function() {
        var e, t, n;

        function i() {
            var e = this,
                t = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), o(this, "listeners", new Set), o(this, "add", function(t) {
                e.listeners.add(t)
            }), o(this, "remove", function(t) {
                e.listeners.delete(t)
            }), o(this, "addConditional", function(e) {
                var n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (!n || !1 !== e()) {
                    var r = function() {
                        !1 === e() && t.remove(r)
                    };
                    t.add(r)
                }
            })
        }
        return e = i, t = [{
            key: "has",
            value: function(e) {
                return this.listeners.has(e)
            }
        }, {
            key: "hasAny",
            value: function() {
                return this.listeners.size > 0
            }
        }, {
            key: "invokeAll",
            value: function() {
                this.listeners.forEach(function(e) {
                    return e()
                })
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}