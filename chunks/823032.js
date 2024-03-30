function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("523150"),
        l = n("794711");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var u = function(e) {
        var t, n, u = e.element,
            c = e.onChange,
            s = e.initialOption;
        var d = (t = r.useState(""), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var o = [],
                        l = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(l = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); l = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            !l && null != a.return && a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            f = d[0],
            m = d[1];
        r.useEffect(function() {
            m(null != s ? s : "")
        }, [s]);
        var p = u.name,
            v = u.data,
            y = v.title,
            E = v.options,
            b = r.useCallback(function(e) {
                null != e && (m(e), c(e))
            }, [c]);
        return r.createElement("div", {
            key: p,
            className: l.marginBottom8
        }, null != y && r.createElement("div", {
            className: l.marginBottom8
        }, r.createElement(a.Text, {
            variant: "text-sm/bold"
        }, y, u.should_submit_data && r.createElement("span", {
            className: o.required
        }, "*"))), r.createElement(a.SingleSelect, {
            value: f,
            onChange: b,
            options: E
        }))
    };
    t.default = function(e) {
        var t = e.elements,
            n = e.onChange,
            a = e.state,
            o = t.map(function(e) {
                var t, o, l = e.name;
                return r.createElement(u, {
                    key: l,
                    element: e,
                    initialOption: null !== (o = null == a ? void 0 : null === (t = a[l]) || void 0 === t ? void 0 : t.value) && void 0 !== o ? o : void 0,
                    onChange: function(e) {
                        return n(l, e)
                    }
                })
            });
        return r.createElement("div", null, o)
    }
}