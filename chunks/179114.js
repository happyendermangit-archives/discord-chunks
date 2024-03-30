function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("140817"),
        l = n("878943"),
        i = n("306912"),
        u = n("372844"),
        c = n("281767"),
        s = n("941504"),
        d = n("903851");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function(e) {
        var t, n, m = e.guildId,
            p = e.reportId;
        var v = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            y = v[0],
            E = v[1],
            b = i.default.getGuild(m),
            h = null != b;
        r.useEffect(function() {
            E(!h)
        }, [h]);
        var g = r.useCallback(function() {
            E(!0), o.default.trackWithMetadata(c.AnalyticEvents.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
                guild_id: m,
                report_id: p
            }), l.default.leaveGuild(m)
        }, [m, p]);
        if (null == b) return null;
        var _ = function() {
            (0, a.openModal)(function(e) {
                return r.createElement(a.ConfirmModal, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, a, o;
                            r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[a] = o
                        })
                    }
                    return e
                }({
                    header: s.default.Messages.LEAVE_SERVER_TITLE.format({
                        name: b.name
                    }),
                    confirmText: s.default.Messages.LEAVE_SERVER,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: g
                }, e), r.createElement(a.Text, {
                    variant: "text-md/normal"
                }, s.default.Messages.LEAVE_SERVER_BODY.format({
                    name: b.name
                })))
            })
        };
        return r.createElement("div", {
            className: d.container
        }, r.createElement(a.Text, {
            className: d.description,
            variant: "text-sm/normal"
        }, s.default.Messages.MOBILE_REPORTS_LEAVE_ELEMENT_DESCRIPTION), r.createElement("div", {
            className: d.guildContainer
        }, r.createElement("div", {
            className: d.guildInfo
        }, r.createElement(u.default, {
            guild: b,
            showBadge: !1,
            animate: !1,
            size: u.default.Sizes.SMALL,
            "aria-label": b.name,
            className: d.icon,
            active: !0
        }), r.createElement(a.Text, {
            className: d.guildName,
            variant: "text-sm/semibold"
        }, b.name)), r.createElement(a.Button, {
            onClick: function() {
                return _()
            },
            disabled: y,
            size: a.Button.Sizes.SMALL,
            color: a.Button.Colors.RED
        }, y ? s.default.Messages.MOBILE_REPORTS_LEFT_SERVER : s.default.Messages.LEAVE_SERVER)))
    }
}