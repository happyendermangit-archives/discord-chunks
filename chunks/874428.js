function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("701958"),
        l = n("163590");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var c = function(e) {
        var t = e.child,
            n = e.onClick,
            i = u(t, 1)[0];
        return r.createElement(a.Clickable, {
            className: l.childButton,
            onClick: function() {
                return n(t)
            }
        }, r.createElement(a.Text, {
            className: l.childText,
            variant: "text-md/semibold"
        }, i), r.createElement(o.default, {
            className: l.childIcon,
            direction: o.default.Directions.RIGHT
        }))
    };
    t.default = function(e) {
        var t = e.node.children,
            n = e.onSelectChild;
        if (null == t || 0 === t.length) return null;
        var a = t.map(function(e) {
            var t = u(e, 2),
                a = t[0],
                o = t[1];
            return r.createElement(c, {
                child: e,
                onClick: n,
                key: "".concat(a, "+").concat(o)
            })
        });
        return r.createElement("div", {
            className: l.__invalid_childrenContainer
        }, a)
    }
}