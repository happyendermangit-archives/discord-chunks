function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("803997"),
        o = n.n(a),
        i = n("784184"),
        l = n("261133"),
        s = n("170030"),
        c = n("941504"),
        u = n("50182");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = function(e) {
        var t, n = e.children,
            a = e.className,
            f = e.compact,
            m = void 0 !== f && f,
            p = e.timestamp,
            g = e.isVisibleOnlyOnHover,
            y = e.cozyAlt,
            b = e.isInline,
            E = e.id,
            v = e.isEdited,
            O = (0, s.accessibilityLabelCalendarFormat)(p),
            S = m ? (0, s.dateFormat)(p, "LT") : (0, s.calendarFormat)(p),
            h = m ? (0, l.default)(S) : null,
            I = void 0 !== v && v ? c.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                timeFormatted: O
            }) : O;
        return r.createElement("span", {
            className: o()(a, h, (d(t = {}, u.timestamp, !0), d(t, u.timestampVisibleOnHover, void 0 !== g && g), d(t, u.timestampInline, void 0 === b || b), d(t, u.alt, void 0 !== y && y), t))
        }, r.createElement(i.Tooltip, {
            text: (0, s.dateFormat)(p, "LLLL"),
            "aria-label": I,
            tooltipClassName: u.timestampTooltip,
            delay: 750
        }, function(e) {
            var t, a;
            return r.createElement("time", (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        d(e, t, n[t])
                    })
                }
                return e
            }({}, e), a = (a = {
                id: E,
                dateTime: p.toISOString()
            }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(a)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            }), t), null != n ? n : r.createElement(r.Fragment, null, r.createElement("i", {
                className: u.separator,
                "aria-hidden": !0
            }, m ? "[" : " — "), S, m && r.createElement("i", {
                className: u.separator,
                "aria-hidden": !0
            }, "]", " ")))
        }))
    }
}