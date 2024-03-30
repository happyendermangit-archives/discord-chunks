function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("443458"),
        l = n("140817"),
        i = n("935741"),
        u = n("29884"),
        c = n("281767"),
        s = n("941504"),
        d = n("303936");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function(e) {
        var t, n, m = e.message,
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
            b = r.useCallback(function() {
                E(!0), l.default.trackWithMetadata(c.AnalyticEvents.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
                    report_id: p
                }), o.default.deleteMessage(m.getChannelId(), m.id)
            }, [m, p]),
            h = r.useMemo(function() {
                var e = i.default.getChannel(m.getChannelId());
                return null != e && e.type !== c.ChannelTypes.DM && e.type !== c.ChannelTypes.GROUP_DM && u.default.canWithPartialContext(c.Permissions.MANAGE_MESSAGES, {
                    channelId: e.id
                })
            }, [m]);
        return null != m && h ? r.createElement("div", {
            className: d.container
        }, r.createElement("div", {
            className: d.messageContainer
        }, r.createElement("div", {
            className: d.description
        }, r.createElement(a.Text, {
            variant: "text-sm/normal"
        }, s.default.Messages.MOBILE_REPORTS_DELETE_MESSAGE_ELEMENT_DESCRIPTION)), r.createElement(a.Button, {
            onClick: function() {
                return b()
            },
            disabled: y,
            size: a.Button.Sizes.SMALL,
            color: a.Button.Colors.RED
        }, y ? s.default.Messages.DELETED : s.default.Messages.DELETE))) : null
    }
}