function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UsernameDecorationTypes: function() {
            return a
        },
        default: function() {
            return A
        }
    });
    var r, a, o = n("470079"),
        i = n("803997"),
        l = n.n(i),
        s = n("56300"),
        c = n("898511"),
        u = n("784184"),
        d = n("622780"),
        f = n("649455"),
        m = n("396586"),
        p = n("103526"),
        g = n("681452"),
        y = n("748516"),
        b = n("335050"),
        E = n("303052"),
        v = n("299529"),
        O = n("50182");

    function S(e) {
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
    }

    function h(e, t) {
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

    function I(e) {
        var t = e.compact;
        return o.createElement(E.default, {
            className: t ? O.botTagCompact : O.botTagCozy,
            type: E.default.Types.REMIX,
            useRemSizes: !0
        })
    }

    function A(e) {
        var t, n = e.author,
            r = e.message,
            a = e.userOverride,
            i = e.compact,
            E = void 0 !== i && i,
            A = e.withMentionPrefix,
            T = e.showPopout,
            M = void 0 !== T && T,
            P = e.className,
            w = e.onClick,
            j = e.onContextMenu,
            N = e.onPopoutRequestClose,
            _ = e.renderPopout,
            C = e.renderRemixTag,
            R = e.decorations,
            k = o.useContext(p.default),
            L = (0, m.default)(f.default.USERNAME).analyticsLocations,
            D = n.nick,
            x = n.colorString,
            F = n.colorRoleName,
            U = null != r.messageReference && null != r.webhookId,
            B = (0, c.useStateFromStores)([d.default], function() {
                return d.default.roleStyle
            }),
            G = (0, y.useCanSeeRemixBadge)(),
            H = {
                className: O.username,
                style: "username" === B && null != x ? {
                    color: x
                } : void 0,
                onClick: w,
                onContextMenu: j,
                children: (void 0 !== A && A ? "@" : "") + D
            };
        t = null != _ && null != M ? o.createElement(u.Popout, {
            preload: U ? void 0 : function() {
                var e = null != a ? a : r.author;
                return (0, b.default)(e.id, null != n.guildMemberAvatar && null != k ? (0, v.getGuildMemberAvatarURLSimple)({
                    guildId: k,
                    userId: e.id,
                    avatar: n.guildMemberAvatar,
                    size: 80
                }) : e.getAvatarURL(k, 80), {
                    guildId: k,
                    channelId: r.channel_id
                })
            },
            renderPopout: _,
            shouldShow: M,
            position: s.isMobile ? "window_center" : "right",
            onRequestClose: N
        }, function(e) {
            e.onClick;
            var t = function(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        if (n = o[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
            }(e, ["onClick"]);
            return o.createElement(u.Clickable, h(S({
                tag: "span"
            }, t, H), {
                className: l()(H.className, O.clickable, P)
            }))
        }) : o.createElement(u.Clickable, h(S({}, H), {
            className: l()(H.className, P)
        }));
        var V = null != R ? R[0] : null,
            z = null != R ? R[1] : null;
        return o.createElement(m.AnalyticsLocationProvider, {
            value: L
        }, null != V && E ? o.createElement(o.Fragment, null, " ", V, " ") : null, "dot" === B ? o.createElement(u.RoleDot, {
            color: x,
            name: F,
            className: O.roleDot
        }) : null, t, null != z ? o.createElement(o.Fragment, null, z) : null, null == V || E ? null : V, null != r && (0, g.default)(r) && G && void 0 !== C && C ? o.createElement(I, null) : null)
    }(r = a || (a = {}))[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES"
}