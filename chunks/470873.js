function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StageInviteFooter: function() {
            return h
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("393588"),
        l = n("428009"),
        s = n("372844"),
        c = n("570887"),
        f = n("461458"),
        d = n("417863"),
        p = n("890479"),
        E = n("785720"),
        _ = n("845265"),
        m = n("941504"),
        y = n("425621");

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var b = function(e) {
            var t, n = e.speaker,
                o = e.guildId,
                i = e.isEmbed,
                u = new l.default(n.user);
            return r.createElement("div", {
                className: y.speaker
            }, r.createElement(a.Avatar, {
                src: u.getAvatarURL(o, i ? 16 : 24),
                size: i ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                "aria-label": "".concat(n.nick, "-avatar"),
                className: i ? null : y.avatar
            }), r.createElement(E.default, {
                size: i ? E.default.Sizes.SIZE_12 : E.default.Sizes.SIZE_14,
                color: E.default.Colors.HEADER_SECONDARY,
                className: y.username
            }, null !== (t = n.nick) && void 0 !== t ? t : u.username))
        },
        h = function(e) {
            var t = e.guild,
                n = e.onlineCount;
            if (null == t) return null;
            var o = new u.default(t),
                i = o.name,
                l = o.description;
            return r.createElement("div", null, r.createElement(p.default, {
                muted: !0,
                uppercase: !0,
                className: y.alignStart
            }, m.default.Messages.STAGE_INVITE_GUILD_HEADER), r.createElement("div", {
                className: y.guild
            }, r.createElement(_.default, {
                mask: _.default.Masks.SQUIRCLE,
                width: 40,
                height: 40
            }, r.createElement(s.default, {
                guild: o,
                size: s.default.Sizes.MEDIUM,
                active: !0
            })), r.createElement("div", {
                className: y.guildInfo
            }, r.createElement(a.Heading, {
                variant: "heading-sm/semibold"
            }, i), r.createElement("div", {
                className: y.speaker
            }, r.createElement("div", {
                className: y.dot
            }), null != n && n > 0 ? r.createElement(a.Text, {
                variant: "text-sm/normal"
            }, m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: n
            })) : null))), null != l && "" !== l && r.createElement(a.Text, {
                color: "header-secondary",
                className: y.alignStart,
                variant: "text-sm/normal"
            }, l))
        };
    t.default = function(e) {
        var t, n = e.stageInstance,
            o = e.guild,
            l = e.isCard,
            h = e.isEmbed,
            S = void 0 !== h && h,
            g = e.onClick,
            O = r.useMemo(function() {
                var e, t;
                if (null == o) return null;
                return (e = o, null != (t = u.default) && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t) ? o : new u.default(o)
            }, [o]);
        if (null == n || null == O) return null;
        var I = n.topic,
            C = n.speaker_count,
            R = n.participant_count,
            T = null !== (t = n.members) && void 0 !== t ? t : [],
            A = S ? T.slice(0, 3) : T,
            w = C - A.length;
        return S && (w += T.length - A.length), r.createElement("div", null, r.createElement("div", {
            className: y.flex
        }, r.createElement("div", {
            className: y.flex
        }, r.createElement(d.default, {
            height: 24,
            width: 24,
            className: y.live
        }), r.createElement(a.Heading, {
            variant: "eyebrow",
            className: i()(y.__invalid_label, y.live)
        }, m.default.Messages.STAGE_CHANNEL_LIVE_NOW)), r.createElement("div", {
            className: y.background
        }, r.createElement(c.default, {
            height: 16,
            width: 16,
            className: y.listeners
        }), r.createElement(a.Heading, {
            className: i()(y.__invalid_label, y.listeners),
            variant: "heading-sm/semibold"
        }, R))), S && r.createElement("div", {
            className: i()(y.guild, v({}, y.embed, S))
        }, r.createElement(_.default, {
            mask: _.default.Masks.SQUIRCLE,
            width: 20,
            height: 20
        }, r.createElement(s.default, {
            guild: O,
            size: s.default.Sizes.MINI,
            active: !0
        })), r.createElement(a.Text, {
            color: "header-secondary",
            className: y.__invalid_label,
            variant: "text-sm/normal"
        }, O.name)), r.createElement(p.default, {
            size: void 0 !== l && l || S ? p.default.Sizes.SIZE_16 : p.default.Sizes.SIZE_20,
            className: i()(y.header, v({}, y.embed, S))
        }, I), r.createElement("div", {
            className: i()(y.members, v({}, y.embed, S))
        }, A.length > 0 && r.createElement("div", {
            className: y.speakers
        }, A.map(function(e) {
            return r.createElement(b, {
                key: e.user.id,
                speaker: e,
                guildId: O.id,
                isEmbed: S
            })
        }), w > 0 ? r.createElement("div", {
            className: y.speaker
        }, r.createElement("div", {
            className: i()(y.icon, v({}, y.embed, S))
        }, r.createElement(f.default, {
            height: S ? 12 : 14,
            className: y.listeners
        })), r.createElement(E.default, {
            size: S ? E.default.Sizes.SIZE_12 : E.default.Sizes.SIZE_14,
            color: E.default.Colors.HEADER_SECONDARY
        }, "+", m.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
            count: w
        }))) : null), S && r.createElement(a.Button, {
            color: a.Button.Colors.GREEN,
            onClick: g,
            className: y.joinButton
        }, m.default.Messages.STAGE_CHANNEL_JOIN_BUTTON)))
    }
}