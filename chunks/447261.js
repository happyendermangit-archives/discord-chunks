function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        HandlerMemoizer: function() {
            return E
        },
        LIST_ID_ATTRIBUTE: function() {
            return u
        },
        LIST_ITEM_ID_ATTRIBUTE: function() {
            return a
        },
        createListItemId: function() {
            return s
        },
        createSelector: function() {
            return c
        },
        getItemId: function() {
            return l
        },
        makeGridId: function() {
            return d
        },
        makeId: function() {
            return f
        },
        throttle: function() {
            return _
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
    var a = "data-list-item-id",
        u = "data-list-id";

    function s(e, t) {
        return "".concat(e).concat("___").concat(t)
    }

    function l(e) {
        return e.split("___")[1]
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        return "[".concat(t, '="').concat(e, '"]')
    }

    function f(e, t) {
        return "".concat(e, "-").concat(t)
    }

    function d(e, t, n) {
        return "".concat(e, "-").concat(t, "-").concat(n)
    }

    function _(e, t) {
        var n = !1;
        return function() {
            for (var o, i = arguments.length, a = Array(i), u = 0; u < i; u++) a[u] = arguments[u];
            if (!n) {
                ;
                e.apply(void 0, function(e) {
                    if (Array.isArray(e)) return r(e)
                }(o = a) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(o) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                    }
                }(o) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), n = !0, setTimeout(function() {
                    return n = !1
                }, t)
            }
        }
    }
    var E = function() {
        var e, t, n;

        function r(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), i(this, "makeHandler", void 0), i(this, "handlers", void 0), this.makeHandler = e, this.handlers = new Map, this.makeHandler = e
        }
        return e = r, t = [{
            key: "get",
            value: function(e) {
                var t = this.handlers.get(e);
                return null == t && (t = this.makeHandler(e), this.handlers.set(e, t)), t
            }
        }, {
            key: "clean",
            value: function() {
                delete this.handlers, this.handlers = new Map
            }
        }], o(e.prototype, t), n && o(e, n), r
    }()
}