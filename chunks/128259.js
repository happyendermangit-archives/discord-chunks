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
        f = n("765089"),
        _ = n("647374"),
        E = n("91984"),
        h = n("835174"),
        g = n("566271"),
        m = n("42203"),
        p = n("305961"),
        S = n("569983"),
        v = n("48703"),
        T = n("377253"),
        I = n("27618"),
        C = n("18494"),
        A = n("599110"),
        y = n("49111"),
        N = n("782340");

    function R(e, t) {
        var n;
        let i = m.default.getChannel(C.default.getChannelId());
        return !!(null == i || i.type !== y.ChannelTypes.DM || I.default.isFriend(null !== (n = i.getRecipientId()) && void 0 !== n ? n : "")) && e === t
    }

    function O(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            {
                trusted: I,
                onClick: R,
                onConfirm: O,
                shouldConfirm: D,
                messageId: P,
                channelId: L
            } = e,
            M = s.sanitizeUrl(e.href);
        if (null == M) {
            null != t && t.preventDefault(), r.default.show({
                title: N.default.Messages.HOLD_UP,
                body: N.default.Messages.MALFORMED_LINK_BODY.format({
                    url: e.href
                }),
                isDismissable: !0
            });
            return
        }
        let b = null,
            U = !1,
            w = P,
            k = L,
            V = null;
        if (null != P && null != L) {
            var G, F, x;
            let e = T.default.getMessage(L, P),
                t = m.default.getBasicChannel(L);
            b = null !== (x = null == t ? void 0 : t.guild_id) && void 0 !== x ? x : null;
            let n = p.default.getGuild(b),
                i = (null == e ? void 0 : null === (G = e.messageReference) || void 0 === G ? void 0 : G.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(y.MessageFlags.IS_CROSSPOST)) && null != b;
            i && (null == e ? void 0 : null === (F = e.messageReference) || void 0 === F ? void 0 : F.guild_id) != null ? (w = e.messageReference.message_id, k = e.messageReference.channel_id, V = e.messageReference.guild_id) : V = b;
            let s = (null == t ? void 0 : t.type) === y.ChannelTypes.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(y.GuildFeatures.COMMUNITY)) === !0,
                r = (null == e ? void 0 : e.hasFlag(y.MessageFlags.EPHEMERAL)) === !0;
            U = null != e && !r && (i || s)
        }
        let B = m.default.getChannel(C.default.getChannelId()),
            H = p.default.getGuild(null == B ? void 0 : B.getGuildId());
        if (null != B && null != H && H.hasFeature(y.GuildFeatures.DISCOVERABLE) && A.default.track(y.AnalyticEvents.URL_CLICKED, {
                url_domain: (0, v.getHostname)(M),
                guild_id: H.id,
                channel_id: B.id
            }), f.default.trackLinkClicked(M), null != R) {
            if (R(t)) return
        } else {
            let {
                default: e
            } = n("572544"), s = e(M, {
                skipExtensionCheck: void 0,
                analyticsLocations: i
            });
            if (null != s && s(t)) return
        }
        let Y = () => {
                if (U && f.default.trackAnnouncementMessageLinkClicked({
                        messageId: w,
                        channelId: L,
                        guildId: b,
                        sourceChannelId: k,
                        sourceGuildId: V
                    }), null != O) {
                    O();
                    return
                }(0, o.default)(M)
            },
            j = u.default.isBlockedDomain(M);
        if (null !== j) {
            null == t || t.preventDefault(), l.default.show(M);
            return
        }
        if (null != (0, g.isSuspiciousDownload)(M)) {
            null == t || t.preventDefault(), h.default.show(M);
            return
        }
        if ((0, c.shouldShowLinkNotDiscordWarning)(M)) {
            null == t || t.preventDefault(), d.default.show(M);
            return
        }
        let W = "function" == typeof I ? I() : I,
            K = (0, v.getProtocol)(M),
            z = !("http:" === K || "https:" === K);
        if (!z && (W || S.default.isTrustedDomain(M)) || z && S.default.isTrustedProtocol(M)) {
            null == t || null != D && D ? Y() : U && f.default.trackAnnouncementMessageLinkClicked({
                messageId: w,
                channelId: L,
                guildId: b,
                sourceChannelId: k,
                sourceGuildId: V
            });
            return
        }
        if (null != t && t.preventDefault(), z) E.default.show({
            url: M,
            trustUrl: a.trustProtocol,
            onConfirm: Y,
            isProtocol: !0
        });
        else {
            let e = (0, _.punycodeLink)(M),
                t = null != e ? e.displayTarget : M;
            E.default.show({
                url: t,
                trustUrl: a.trustDomain,
                onConfirm: Y,
                isProtocol: !1
            })
        }
    }
}