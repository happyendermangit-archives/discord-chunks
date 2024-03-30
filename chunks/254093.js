function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handleClick: function() {
            return R
        },
        isLinkTrusted: function() {
            return N
        }
    });
    var r = n("302454"),
        o = n.n(r),
        i = n("483587"),
        a = n("214940"),
        u = n("355544"),
        s = n("222007"),
        l = n("564882"),
        c = n("822359"),
        f = n("702284"),
        d = n("803321"),
        _ = n("9551"),
        E = n("231057"),
        p = n("651054"),
        m = n("812508"),
        y = n("935741"),
        I = n("306912"),
        h = n("802794"),
        O = n("2432"),
        T = n("204394"),
        S = n("776982"),
        v = n("894288"),
        g = n("870331"),
        A = n("281767"),
        b = n("941504");

    function N(e, t) {
        var n, r = y.default.getChannel(v.default.getChannelId());
        return !!(null == r || r.type !== A.ChannelTypes.DM || S.default.isFriend(null !== (n = r.getRecipientId()) && void 0 !== n ? n : "")) && e === t
    }

    function R(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            S = e.trusted,
            v = e.onClick,
            N = e.onConfirm,
            R = e.shouldConfirm,
            C = e.messageId,
            P = e.channelId,
            D = o().sanitizeUrl(e.href);
        if (null == D) {
            null != t && t.preventDefault(), i.default.show({
                title: b.default.Messages.HOLD_UP,
                body: b.default.Messages.MALFORMED_LINK_BODY.format({
                    url: e.href
                }),
                isDismissable: !0
            });
            return
        }
        var L = null,
            M = !1,
            U = C,
            w = P,
            k = null;
        if (null != C && null != P) {
            var G, B, j, F = T.default.getMessage(P, C),
                V = y.default.getBasicChannel(P);
            L = null !== (j = null == V ? void 0 : V.guild_id) && void 0 !== j ? j : null;
            var H = I.default.getGuild(L),
                x = (null == F ? void 0 : null === (G = F.messageReference) || void 0 === G ? void 0 : G.guild_id) != null && (null == F ? void 0 : F.webhookId) != null && (null == F ? void 0 : F.hasFlag(A.MessageFlags.IS_CROSSPOST)) && null != L;
            x && (null == F ? void 0 : null === (B = F.messageReference) || void 0 === B ? void 0 : B.guild_id) != null ? (U = F.messageReference.message_id, w = F.messageReference.channel_id, k = F.messageReference.guild_id) : k = L;
            var Y = (null == V ? void 0 : V.type) === A.ChannelTypes.GUILD_ANNOUNCEMENT && (null == H ? void 0 : H.hasFeature(A.GuildFeatures.COMMUNITY)) === !0,
                W = (null == F ? void 0 : F.hasFlag(A.MessageFlags.EPHEMERAL)) === !0;
            M = null != F && !W && (x || Y)
        }
        if (null != P) {
            var K = y.default.getChannel(P),
                z = I.default.getGuild(null == K ? void 0 : K.getGuildId());
            null != K && null != z && z.hasFeature(A.GuildFeatures.DISCOVERABLE) && g.default.track(A.AnalyticEvents.URL_CLICKED, {
                url_domain: (0, O.getHostname)(D),
                guild_id: z.id,
                channel_id: K.id
            })
        }
        if (d.default.trackLinkClicked(D), null != v) {
            if (v(t)) return
        } else {
            var X = (0, n("887377").default)(D, {
                skipExtensionCheck: void 0,
                analyticsLocations: r
            });
            if (null != X && X(t)) return
        }
        var q = function() {
            if (M && d.default.trackAnnouncementMessageLinkClicked({
                    messageId: U,
                    channelId: P,
                    guildId: L,
                    sourceChannelId: w,
                    sourceGuildId: k
                }), null != N) {
                N();
                return
            }(0, u.default)(D)
        };
        if (null !== l.default.isBlockedDomain(D)) {
            null == t || t.preventDefault(), s.default.show(D);
            return
        }
        if (null != (0, m.isSuspiciousDownload)(D)) {
            null == t || t.preventDefault(), p.default.show(D);
            return
        }
        if ((0, f.shouldShowLinkNotDiscordWarning)(D)) {
            null == t || t.preventDefault(), c.default.show(D);
            return
        }
        var Q = "function" == typeof S ? S() : S,
            J = (0, O.getProtocol)(D),
            Z = !("http:" === J || "https:" === J);
        if (!Z && (Q || h.default.isTrustedDomain(D)) || Z && h.default.isTrustedProtocol(D)) {
            null == t || null != R && R ? q() : M && d.default.trackAnnouncementMessageLinkClicked({
                messageId: U,
                channelId: P,
                guildId: L,
                sourceChannelId: w,
                sourceGuildId: k
            });
            return
        }
        if (null != t && t.preventDefault(), Z) E.default.show({
            url: D,
            trustUrl: a.trustProtocol,
            onConfirm: q,
            isProtocol: !0
        });
        else {
            var $ = (0, _.punycodeLink)(D),
                ee = null != $ ? $.displayTarget : D;
            E.default.show({
                url: ee,
                trustUrl: a.trustDomain,
                onConfirm: q,
                isProtocol: !1
            })
        }
    }
}