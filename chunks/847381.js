function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        a = n("803997"),
        o = n.n(a),
        l = n("784184"),
        i = n("609879"),
        u = n("53053"),
        c = n("941504"),
        s = n("489054");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e) {
        var t, n, a, f, m, p = e.element.data,
            v = p.title,
            y = p.body,
            E = p.sms,
            b = p.is_localized;
        var h = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            g = h[0],
            _ = h[1],
            S = r.useRef(i.default.reactParserFor(i.default.defaultRules));
        if (!b) return null;
        return r.createElement("div", {
            className: s.container
        }, r.createElement(l.Heading, {
            variant: "heading-sm/semibold",
            color: "header-secondary",
            className: s.header
        }, v), r.createElement(l.Text, {
            variant: "text-sm/normal",
            className: s.bodyText
        }, S.current(y)), r.createElement("div", {
            className: s.__invalid_smsInfoContainer
        }, r.createElement("div", {
            className: o()(s.smsNumberContainer, (a = {}, f = s.copied, m = g, f in a ? Object.defineProperty(a, f, {
                value: m,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[f] = m, a))
        }, r.createElement(l.Text, {
            variant: "text-md/normal",
            selectable: !0,
            className: s.smsNumberText
        }, E), r.createElement(l.Button, {
            size: l.Button.Sizes.SMALL,
            className: s.__invalid_trailingButton,
            onClick: function() {
                (0, u.copy)(E) && _(!0)
            },
            color: l.Button.Colors.PRIMARY
        }, g ? c.default.Messages.COPIED : c.default.Messages.COPY))))
    }
}