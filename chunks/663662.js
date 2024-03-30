function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        popToast: function() {
            return u
        },
        showToast: function() {
            return a
        },
        useToastStore: function() {
            return i
        }
    });
    var r = n("652874");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var i = (0, r.default)(function() {
        return {
            currentToast: null,
            queuedToasts: []
        }
    });

    function a(e) {
        i.setState(function(t) {
            var n, r, i;
            return null != t.currentToast ? (r = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, t), i = (i = {
                queuedToasts: ((function(e) {
                    if (Array.isArray(e)) return o(e)
                })(n = t.queuedToasts) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                    }
                }(n) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([e])
            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            }), r) : {
                currentToast: e,
                queuedToasts: []
            }
        })
    }

    function u() {
        i.setState(function(e) {
            var t = e.queuedToasts;
            return t.length > 0 ? {
                currentToast: t[0],
                queuedToasts: t.slice(1)
            } : {
                currentToast: null,
                queuedToasts: []
            }
        })
    }
}