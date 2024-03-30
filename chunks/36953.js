function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeInput: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("551802"),
        i = n("962850"),
        a = n("66287");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e) {
        var t, n, s = e.value,
            l = e.onChange,
            c = e.hideValue,
            f = e.disabled,
            d = r.useRef(null),
            _ = r.useMemo(function() {
                return new i.TimeOptions
            }, []);
        var E = (t = r.useState(""), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            p = E[0],
            m = E[1];

        function y(e) {
            null != s && l((0, i.timeAtSpecificDay)(s, _.selectValue(e)))
        }
        return r.createElement(o.SearchableSelect, {
            ref: d,
            className: a.select,
            options: _.getOptions(p),
            value: c ? void 0 : _.lookupByValue(s),
            onChange: y,
            isDisabled: void 0 !== f && f,
            onSearchChange: m,
            onKeyDown: function(e) {
                if ("Enter" === e.key) {
                    var t, n = (0, i.convertToTimeOfADay)(s, p);
                    null != n && (y(n), null === (t = d.current) || void 0 === t || t.close())
                }
            }
        })
    }
}