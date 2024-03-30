function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("591234"),
        a = n("758380");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        if (!("type" in e)) return null;
        if ("timestamp" === e.type) {
            var n, o;
            return r.createElement(l, (n = function(e) {
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
            }({}, t), o = (o = {
                timestamp: e.parsed
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
            }), n))
        }
        return null
    }

    function l(e) {
        var t, n = e.timestamp,
            s = e.replace,
            l = function(e) {
                var t = e.timestamp,
                    r = e.format,
                    o = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp,
                    a = null != r ? r : n.format;
                s((0, i.unparseTimestamp)(o, a))
            };
        return r.createElement("div", {
            className: a.container
        }, r.createElement(o.DateInput, {
            value: n.parsed,
            onSelect: function(e) {
                l({
                    timestamp: e.toDate()
                })
            }
        }), r.createElement(o.TimeInput, {
            value: n.parsed,
            onChange: function(e) {
                l({
                    timestamp: e.toDate()
                })
            }
        }), r.createElement(o.RadioGroup, {
            options: Object.entries(i.TIMESTAMP_FORMATS).map(function(e) {
                var t, r, o = (r = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t = e) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(t, r) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                        }
                    }(t, r) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    i = o[0];
                return {
                    name: (0, o[1])(n.parsed),
                    value: i
                }
            }),
            value: null !== (t = n.format) && void 0 !== t ? t : i.DEFAULT_TIMESTAMP_FORMAT,
            size: o.RadioGroup.Sizes.SMALL,
            onChange: function(e) {
                l({
                    format: e.value
                })
            }
        }))
    }
}