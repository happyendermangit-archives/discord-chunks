function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelMention: function() {
            return D
        },
        CommandMention: function() {
            return U
        },
        CustomEmoji: function() {
            return N
        },
        Emoji: function() {
            return b
        },
        RoleMention: function() {
            return P
        },
        SoundboardMention: function() {
            return L
        },
        StaticRouteMention: function() {
            return M
        },
        TextMention: function() {
            return R
        },
        Timestamp: function() {
            return w
        },
        UserMention: function() {
            return C
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("765457"),
        u = n("562052"),
        s = n("622780"),
        l = n("646220"),
        c = n("42969"),
        f = n("822678"),
        d = n("452700"),
        _ = n("935741"),
        E = n("306912"),
        p = n("930949"),
        m = n("208454"),
        y = n("266140"),
        I = n("115752"),
        h = n("62957"),
        O = n("830567"),
        T = n("142680"),
        S = n("941504"),
        v = n("813517"),
        g = n("931093");

    function A(e) {
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

    function b(e) {
        var t = e.emoji;
        return r.createElement(i.Tooltip, {
            text: t.name,
            delay: 750,
            position: "top"
        }, function(e) {
            return r.createElement(a.default, A({
                src: t.src,
                emojiName: t.name,
                animated: !1
            }, e))
        })
    }

    function N(e) {
        var t = e.emoji;
        return r.createElement(i.Tooltip, {
            text: t.name,
            delay: 750,
            position: "top"
        }, function(e) {
            return r.createElement(a.default, A({
                emojiId: t.emojiId,
                emojiName: t.name,
                animated: t.animated
            }, e))
        })
    }

    function R(e) {
        var t = e.text,
            n = e.channelId,
            o = e.guildId,
            i = E.default.getGuild(o),
            a = _.default.getChannel(n),
            u = (0, l.useClydeEnabled)(i, a) && "@Clyde" === t ? T.CLYDE_AI_MENTION_COLOR : null;
        return r.createElement(y.default, {
            color: u
        }, t)
    }

    function C(e) {
        var t = e.id,
            n = e.guildId,
            a = e.channelId,
            s = (0, o.useStateFromStores)([m.default], function() {
                return m.default.getUser(t)
            }),
            l = (0, o.useStateFromStores)([p.default], function() {
                return p.default.hidePersonalInformation
            }),
            c = h.default.useName(n, a, s),
            f = r.createElement(y.default, null, null == c ? "<@".concat(t, ">") : "@".concat(c));
        if (null != s) {
            var d = l || s.isPomelo() ? null : "#".concat(s.discriminator);
            return r.createElement(i.Tooltip, {
                text: r.createElement("div", {
                    className: v.userTooltip
                }, r.createElement(u.default, {
                    user: s,
                    animate: !0,
                    size: i.AvatarSizes.SIZE_16,
                    className: v.avatar
                }), O.default.getUserTag(s, {
                    mode: "username",
                    identifiable: l ? "never" : "always"
                }), r.createElement("span", {
                    className: v.discriminator
                }, d)),
                delay: 750,
                position: "top",
                "aria-label": O.default.getUserTag(s, {
                    decoration: "never"
                })
            }, function(e) {
                return r.createElement(i.Clickable, A({
                    tag: "span"
                }, e), f)
            })
        }
        return f
    }

    function P(e) {
        var t = e.id,
            n = e.guildId,
            a = (0, o.useStateFromStores)([E.default], function() {
                return null != n ? E.default.getRole(n, t) : void 0
            }),
            u = (0, o.useStateFromStores)([s.default], function() {
                return s.default.roleStyle
            });
        if (null == a) return r.createElement("span", null, "@deleted-role");
        var l = null != a.color && 0 !== a.color;
        return r.createElement(y.default, {
            color: "username" === u && l ? a.color : null
        }, "dot" === u && r.createElement(i.RoleDot, {
            color: a.colorString,
            background: !1,
            tooltip: !1
        }), "@", a.name)
    }

    function D(e) {
        var t, n = e.id,
            i = (0, o.useStateFromStores)([_.default], function() {
                return _.default.getChannel(n)
            }),
            a = S.default.Messages.UNKNOWN_CHANNEL,
            u = "text",
            s = !0;
        return (null != i && (a = (0, c.canViewChannel)(i) ? i.name : S.default.Messages.NO_ACCESS, u = (0, c.canViewChannel)(i) ? null !== (t = (0, I.getMentionIconType)(i)) && void 0 !== t ? t : "text" : "locked", s = (0, f.isChannelTypeMentionable)(i.type)), s) ? r.createElement(y.default, {
            iconType: u
        }, a) : r.createElement("span", null, "#" + a)
    }

    function L(e) {
        var t, n = e.id,
            i = (0, o.useStateFromStores)([d.default], function() {
                return d.default.getSoundById(n)
            });
        return r.createElement(y.default, null, null !== (t = null == i ? void 0 : i.name) && void 0 !== t ? t : "Sound")
    }

    function M(e) {
        var t = e.id,
            n = {
                home: S.default.Messages.SERVER_GUIDE,
                guide: S.default.Messages.SERVER_GUIDE,
                browse: S.default.Messages.CHANNEL_BROWSER_TITLE,
                customize: S.default.Messages.CHANNELS_AND_ROLES
            };
        return r.createElement(y.default, {
            iconType: t
        }, n[t])
    }

    function U(e) {
        var t = e.text,
            n = e.id;
        return r.createElement(y.default, null, t, "(", n, ")")
    }

    function w(e) {
        var t = e.timestamp;
        return r.createElement("span", {
            className: g.timestamp
        }, t.formatted)
    }
}