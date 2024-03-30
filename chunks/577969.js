function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        Lru: function() {
            return u
        }
    });

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
    var a = Symbol.iterator,
        u = function() {
            var e, t, n;

            function u(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), i(this, "items", void 0), i(this, "limit", void 0), this.items = new Map, this.limit = e
            }
            return e = u, t = [{
                key: "length",
                get: function() {
                    return this.items.size
                }
            }, {
                key: "capacity",
                get: function() {
                    return this.limit
                }
            }, {
                key: a,
                value: function() {
                    return this.items.entries()
                }
            }, {
                key: "entries",
                value: function() {
                    return this.items.entries()
                }
            }, {
                key: "keys",
                value: function() {
                    return this.items.keys()
                }
            }, {
                key: "values",
                value: function() {
                    return this.items.values()
                }
            }, {
                key: "ordered",
                value: function() {
                    var e;
                    return ((function(e) {
                        if (Array.isArray(e)) return r(e)
                    })(e = this.items.values()) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                        }
                    }(e) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).reverse()
                }
            }, {
                key: "clear",
                value: function() {
                    this.items.clear()
                }
            }, {
                key: "has",
                value: function(e) {
                    return this.items.has(e)
                }
            }, {
                key: "get",
                value: function(e) {
                    return this.items.get(e)
                }
            }, {
                key: "put",
                value: function(e, t) {
                    if (this.items.delete(e), this.items.set(e, t), !!(this.items.size > this.limit)) {
                        var n = this.oldestKey(),
                            r = this.items.get(n);
                        return this.items.delete(n), [n, r]
                    }
                }
            }, {
                key: "delete",
                value: function(e) {
                    return this.items.delete(e)
                }
            }, {
                key: "oldestKey",
                value: function() {
                    return this.items.keys().next().value
                }
            }], o(e.prototype, t), n && o(e, n), u
        }()
}