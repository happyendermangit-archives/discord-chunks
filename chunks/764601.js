function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e
    }
    n.r(t), n.d(t, {
        ObjectStorage: function() {
            return s
        },
        impl: function() {
            return l
        }
    });
    try {
        a = window.localStorage
    } catch (e) {}
    try {
        delete window.localStorage
    } catch (e) {}
    var a, u = function() {
            function e() {
                r(this, e)
            }
            return i(e, [{
                key: "get",
                value: function(e, t) {
                    var n = a.getItem(e);
                    if (null != n) try {
                        n = JSON.parse(n)
                    } catch (e) {
                        n = t
                    } else n = t;
                    return n
                }
            }, {
                key: "set",
                value: function(e, t) {
                    a.setItem(e, JSON.stringify(t))
                }
            }, {
                key: "remove",
                value: function(e) {
                    a.removeItem(e)
                }
            }, {
                key: "clear",
                value: function() {
                    a.clear()
                }
            }, {
                key: "stringify",
                value: function() {
                    return JSON.stringify(a || {})
                }
            }, {
                key: "asyncGetRaw",
                value: function(e, t) {
                    return Promise.resolve(a.getItem(e))
                }
            }, {
                key: "setRaw",
                value: function(e, t) {
                    a.setItem(e, t)
                }
            }, {
                key: "getAfterRefresh",
                value: function(e) {
                    return Promise.resolve(this.get(e))
                }
            }]), e
        }(),
        s = function() {
            function e() {
                var t, n, o;
                r(this, e), t = this, o = void 0, (n = "storage") in t ? Object.defineProperty(t, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = o, this.storage = {}
            }
            return i(e, [{
                key: "get",
                value: function(e, t) {
                    return this.storage.hasOwnProperty(e) ? this.storage[e] : t
                }
            }, {
                key: "set",
                value: function(e, t) {
                    this.storage[e] = t
                }
            }, {
                key: "remove",
                value: function(e) {
                    delete this.storage[e]
                }
            }, {
                key: "clear",
                value: function() {
                    this.storage = {}
                }
            }, {
                key: "stringify",
                value: function() {
                    return JSON.stringify(this.storage)
                }
            }, {
                key: "asyncGetRaw",
                value: function(e, t) {
                    return Promise.resolve(a.getItem(e))
                }
            }, {
                key: "setRaw",
                value: function(e, t) {
                    a.setItem(e, t)
                }
            }, {
                key: "getAfterRefresh",
                value: function(e) {
                    return Promise.resolve(this.get(e))
                }
            }]), e
        }(),
        l = ! function() {
            var e = "test";
            try {
                return a.setItem(e, e), a.removeItem(e), !0
            } catch (e) {
                return !1
            }
        }() ? new s : new u
}