function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("923717");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var i = function(e) {
        var t = e.onChange,
            n = e.label,
            l = e.subtitle,
            i = e.selected;
        return r.createElement("div", {
            className: o.checkboxRow
        }, r.createElement(a.Checkbox, {
            type: a.Checkbox.Types.INVERTED,
            onChange: function() {
                return t()
            },
            value: i
        }, r.createElement(a.Text, {
            color: "interactive-active",
            variant: "text-md/semibold"
        }, n), null != l ? r.createElement(a.Text, {
            color: "interactive-active",
            variant: "text-sm/normal"
        }, l) : null))
    };
    t.default = function(e) {
        var t = e.element,
            n = e.state,
            a = e.onChange;
        if ((null == t ? void 0 : t.type) !== "checkbox") return null;
        var o = t.data;
        return r.createElement("div", null, o.map(function(e, t) {
            var o, u, c = (u = 3, function(e) {
                    if (Array.isArray(e)) return e
                }(o = e) || function(e, t) {
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
                }(o, u) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                    }
                }(o, u) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                s = c[0],
                d = c[1],
                f = c[2];
            return r.createElement(i, {
                key: "".concat(t, "+button"),
                onChange: function() {
                    return a(s, d)
                },
                selected: s in n,
                label: d,
                subtitle: f
            })
        }))
    }
}