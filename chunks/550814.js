function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("898511"),
        o = n("784184"),
        l = n("346298"),
        i = n("140817"),
        u = n("776982"),
        c = n("208454"),
        s = n("303822"),
        d = n("281767"),
        f = n("941504"),
        m = n("580999");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function(e) {
        var t, n, v = e.userId,
            y = e.reportId,
            E = e.reportName;
        var b = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            h = b[0],
            g = b[1],
            _ = (0, a.useStateFromStores)([c.default], function() {
                return c.default.getUser(v)
            }, [v]),
            S = (0, a.useStateFromStores)([u.default], function() {
                return u.default.getRelationshipType(v)
            }, [v]) === d.RelationshipTypes.BLOCKED;
        r.useEffect(function() {
            g(S)
        }, [S]);
        var R = r.useCallback(function() {
            g(!0), i.default.trackWithMetadata(d.AnalyticEvents.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: v,
                report_id: y
            }), l.default.addRelationship({
                userId: v,
                context: {
                    location: "ReportMenuBlockUser-iOS"
                },
                type: d.RelationshipTypes.BLOCKED
            })
        }, [v, y]);
        return null == _ ? null : r.createElement("div", {
            className: m.container
        }, r.createElement(o.Text, {
            className: m.description,
            variant: "text-sm/normal"
        }, E === s.ReportNames.USER ? f.default.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : f.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION), r.createElement("div", {
            className: m.userContainer
        }, r.createElement("div", {
            className: m.userInfo
        }, r.createElement(o.Avatar, {
            size: o.AvatarSizes.SIZE_32,
            src: _.getAvatarURL(void 0, 32),
            className: m.avatar,
            "aria-label": _.username
        }), r.createElement(o.Text, {
            className: m.userName,
            variant: "text-sm/semibold"
        }, _.username), !_.isPomelo() && r.createElement(o.Text, {
            variant: "text-sm/normal"
        }, "#", _.discriminator)), r.createElement(o.Button, {
            onClick: function() {
                return R()
            },
            disabled: h,
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.RED
        }, h ? f.default.Messages.BLOCKED : f.default.Messages.BLOCK)))
    }
}