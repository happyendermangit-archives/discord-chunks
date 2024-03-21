function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLinkTrusted: function() {
            return R
        },
        handleClick: function() {
            return O
        }
    });
    var i = n("404828"),
        s = n.n(i),
        r = n("404118"),
        a = n("145292"),
        o = n("545158"),
        l = n("195052"),
        u = n("352266"),
        d = n("630869"),
        c = n("537025"),
        _ = n("765089"),
        f = n("647374"),
        E = n("91984"),
        h = n("835174"),
        g = n("566271"),
        m = n("42203"),
        p = n("305961"),
        S = n("569983"),
        T = n("48703"),
        v = n("377253"),
        I = n("27618"),
        A = n("18494"),
        C = n("599110"),
        y = n("49111"),
        N = n("782340");

    function R(e, t) {
        var n;
        let i = m.default.getChannel(A.default.getChannelId());
        return !!(null == i || i.type !== y.ChannelTypes.DM || I.default.isFriend(null !== (n = i.getRecipientId()) && void 0 !== n ? n : "")) && e === t
    }

    function O(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            {
                trusted: I,
                onClick: A,
                onConfirm: R,
                shouldConfirm: O,
                messageId: D,
                channelId: P
            } = e,
            L = s.sanitizeUrl(e.href);
        if (null == L) {
            null != t && t.preventDefault(), r.default.show({
                title: N.default.Messages.HOLD_UP,
                body: N.default.Messages.MALFORMED_LINK_BODY.format({
                    url: e.href
                }),
                isDismissable: !0
            });
            return
        }
        let M = null,
            b = !1,
            U = D,
            w = P,
            k = null;
        if (null != D && null != P) {
            var V, G, F;
            let e = v.default.getMessage(P, D),
                t = m.default.getBasicChannel(P);
            M = null !== (F = null == t ? void 0 : t.guild_id) && void 0 !== F ? F : null;
            let n = p.default.getGuild(M),
                i = (null == e ? void 0 : null === (V = e.messageReference) || void 0 === V ? void 0 : V.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(y.MessageFlags.IS_CROSSPOST)) && null != M;
            i && (null == e ? void 0 : null === (G = e.messageReference) || void 0 === G ? void 0 : G.guild_id) != null ? (U = e.messageReference.message_id, w = e.messageReference.channel_id, k = e.messageReference.guild_id) : k = M;
            let s = (null == t ? void 0 : t.type) === y.ChannelTypes.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(y.GuildFeatures.COMMUNITY)) === !0,
                r = (null == e ? void 0 : e.hasFlag(y.MessageFlags.EPHEMERAL)) === !0;
            b = null != e && !r && (i || s)
        }
        if (null != P) {
            let e = m.default.getChannel(P),
                t = p.default.getGuild(null == e ? void 0 : e.getGuildId());
            null != e && null != t && t.hasFeature(y.GuildFeatures.DISCOVERABLE) && C.default.track(y.AnalyticEvents.URL_CLICKED, {
                url_domain: (0, T.getHostname)(L),
                guild_id: t.id,
                channel_id: e.id
            })
        }
        if (_.default.trackLinkClicked(L), null != A) {
            if (A(t)) return
        } else {
            let {
                default: e
            } = n("572544"), s = e(L, {
                skipExtensionCheck: void 0,
                analyticsLocations: i
            });
            if (null != s && s(t)) return
        }
        let x = () => {
                if (b && _.default.trackAnnouncementMessageLinkClicked({
                        messageId: U,
                        channelId: P,
                        guildId: M,
                        sourceChannelId: w,
                        sourceGuildId: k
                    }), null != R) {
                    R();
                    return
                }(0, o.default)(L)
            },
            B = u.default.isBlockedDomain(L);
        if (null !== B) {
            null == t || t.preventDefault(), l.default.show(L);
            return
        }
        if (null != (0, g.isSuspiciousDownload)(L)) {
            null == t || t.preventDefault(), h.default.show(L);
            return
        }
        if ((0, c.shouldShowLinkNotDiscordWarning)(L)) {
            null == t || t.preventDefault(), d.default.show(L);
            return
        }
        let H = "function" == typeof I ? I() : I,
            Y = (0, T.getProtocol)(L),
            K = !("http:" === Y || "https:" === Y);
        if (!K && (H || S.default.isTrustedDomain(L)) || K && S.default.isTrustedProtocol(L)) {
            null == t || null != O && O ? x() : b && _.default.trackAnnouncementMessageLinkClicked({
                messageId: U,
                channelId: P,
                guildId: M,
                sourceChannelId: w,
                sourceGuildId: k
            });
            return
        }
        if (null != t && t.preventDefault(), K) E.default.show({
            url: L,
            trustUrl: a.trustProtocol,
            onConfirm: x,
            isProtocol: !0
        });
        else {
            let e = (0, f.punycodeLink)(L),
                t = null != e ? e.displayTarget : L;
            E.default.show({
                url: t,
                trustUrl: a.trustDomain,
                onConfirm: x,
                isProtocol: !1
            })
        }
    }
}