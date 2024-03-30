function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Table: function() {
            return m
        },
        TableBody: function() {
            return E
        },
        TableCell: function() {
            return f
        },
        TableColumn: function() {
            return d
        },
        TableHeader: function() {
            return p
        },
        TableRow: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("408210"),
        i = n("556026"),
        a = n("135983"),
        u = n("521869");

    function s(e) {
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
    }

    function l(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function c(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function f(e) {
        return r.createElement(o.Cell, l(s({}, e), {
            className: u.cell
        }))
    }

    function d(e) {
        var t = e.children,
            n = c(e, ["children"]);
        return r.createElement(o.Column, l(s({}, n), {
            className: u.column
        }), r.createElement(a.Text, {
            variant: "eyebrow",
            className: u.columnText
        }, t))
    }

    function _(e) {
        return r.createElement(o.Row, l(s({}, e), {
            className: u.row
        }))
    }

    function E(e) {
        return r.createElement(o.TableBody, l(s({}, e), {
            className: u.body
        }))
    }

    function p(e) {
        return r.createElement(o.TableHeader, l(s({}, e), {
            className: u.header
        }))
    }

    function m(e) {
        var t = e.title,
            n = e.header,
            a = e.footer,
            f = c(e, ["title", "header", "footer"]),
            d = r.useId();
        return r.createElement("div", {
            className: u.container
        }, r.createElement("div", {
            className: u.toolbar
        }, r.createElement(i.Heading, {
            className: u.__invalid_title,
            variant: "heading-md/semibold",
            id: d
        }, t), r.createElement("div", null, n)), r.createElement(o.Table, l(s({}, f), {
            "aria-labelledby": d,
            className: u.table
        })), null != a && r.createElement("div", {
            className: u.footer
        }, a))
    }
}