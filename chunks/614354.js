function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        cleanupImpression: function() {
            return l
        },
        getImpressionStack: function() {
            return _
        },
        getLocation: function() {
            return d
        },
        setCurrentImpression: function() {
            return s
        },
        setDebugTrackedData: function() {
            return c
        },
        useImpressionStore: function() {
            return f
        }
    });
    var r = n("652874"),
        o = n("383959");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var a = Object.freeze({
            debugTrackedData: null,
            impressions: []
        }),
        u = (0, r.default)(function(e) {
            return a
        }),
        s = function(e) {
            u.setState(function(t) {
                var n;
                return {
                    impressions: ((function(e) {
                        if (Array.isArray(e)) return i(e)
                    })(n = t.impressions) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                        }
                    }(n) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).concat([e])
                }
            })
        },
        l = function(e) {
            u.setState(function(t) {
                return {
                    impressions: t.impressions.filter(function(t) {
                        return t.sequenceId !== e.sequenceId
                    })
                }
            })
        },
        c = function(e, t) {
            u.setState(function() {
                return {
                    debugTrackedData: function(e) {
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
                    }({
                        name: e
                    }, t)
                }
            })
        },
        f = u;

    function d() {
        var e = {};
        return u.getState().impressions.forEach(function(t) {
            t.type === o.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name
        }), e
    }

    function _() {
        return u.getState().impressions
    }
}