function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handleClick: function() {
            return D
        },
        isLinkTrusted: function() {
            return L
        }
    });
    var i = n("302454"),
        r = n.n(i),
        s = n("668781"),
        a = n("45986"),
        o = n("782568"),
        l = n("704133"),
        u = n("139674"),
        d = n("900460"),
        _ = n("627714"),
        c = n("364640"),
        E = n("772096"),
        I = n("982806"),
        T = n("540709"),
        f = n("881706"),
        S = n("592125"),
        h = n("430824"),
        A = n("20303"),
        m = n("902676"),
        N = n("375954"),
        p = n("699516"),
        O = n("944486"),
        R = n("626135"),
        C = n("981631"),
        g = n("689938");

    function L(e, t) {
        var n;
        let i = S.default.getChannel(O.default.getChannelId());
        return !!(null == i || i.type !== C.ChannelTypes.DM || p.default.isFriend(null !== (n = i.getRecipientId()) && void 0 !== n ? n : "")) && e === t
    }

    function D(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            {
                trusted: p,
                onClick: O,
                onConfirm: L,
                shouldConfirm: D,
                messageId: v,
                channelId: M
            } = e,
            y = r().sanitizeUrl(e.href);
        if (null == y) {
            null != t && t.preventDefault(), s.default.show({
                title: g.default.Messages.HOLD_UP,
                body: g.default.Messages.MALFORMED_LINK_BODY.format({
                    url: e.href
                }),
                isDismissable: !0
            });
            return
        }
        let P = null,
            U = !1,
            b = v,
            G = M,
            w = null;
        if (null != v && null != M) {
            var B, k, V;
            let e = N.default.getMessage(M, v),
                t = S.default.getBasicChannel(M);
            P = null !== (V = null == t ? void 0 : t.guild_id) && void 0 !== V ? V : null;
            let n = h.default.getGuild(P),
                i = (null == e ? void 0 : null === (B = e.messageReference) || void 0 === B ? void 0 : B.guild_id) != null && (null == e ? void 0 : e.webhookId) != null && (null == e ? void 0 : e.hasFlag(C.MessageFlags.IS_CROSSPOST)) && null != P;
            i && (null == e ? void 0 : null === (k = e.messageReference) || void 0 === k ? void 0 : k.guild_id) != null ? (b = e.messageReference.message_id, G = e.messageReference.channel_id, w = e.messageReference.guild_id) : w = P;
            let r = (null == t ? void 0 : t.type) === C.ChannelTypes.GUILD_ANNOUNCEMENT && (null == n ? void 0 : n.hasFeature(C.GuildFeatures.COMMUNITY)) === !0,
                s = (null == e ? void 0 : e.hasFlag(C.MessageFlags.EPHEMERAL)) === !0;
            U = null != e && !s && (i || r)
        }
        if (null != M) {
            let e = S.default.getChannel(M),
                t = h.default.getGuild(null == e ? void 0 : e.getGuildId());
            null != e && null != t && t.hasFeature(C.GuildFeatures.DISCOVERABLE) && R.default.track(C.AnalyticEvents.URL_CLICKED, {
                url_domain: (0, m.getHostname)(y),
                guild_id: t.id,
                channel_id: e.id
            })
        }
        if (c.default.trackLinkClicked(y), null != O) {
            if (O(t)) return
        } else {
            let {
                default: e
            } = n("315263"), r = e(y, {
                skipExtensionCheck: void 0,
                analyticsLocations: i
            });
            if (null != r && r(t)) return
        }
        let F = () => {
            if (U && c.default.trackAnnouncementMessageLinkClicked({
                    messageId: b,
                    channelId: M,
                    guildId: P,
                    sourceChannelId: G,
                    sourceGuildId: w
                }), null != L) {
                L();
                return
            }(0, o.default)(y)
        };
        if (null !== u.default.isBlockedDomain(y)) {
            null == t || t.preventDefault(), l.default.show(y);
            return
        }
        if (null != (0, f.isSuspiciousDownload)(y)) {
            null == t || t.preventDefault(), T.default.show(y);
            return
        }
        if ((0, _.shouldShowLinkNotDiscordWarning)(y)) {
            null == t || t.preventDefault(), d.default.show(y);
            return
        }
        let x = "function" == typeof p ? p() : p,
            H = (0, m.getProtocol)(y),
            Y = !("http:" === H || "https:" === H);
        if (!Y && (x || A.default.isTrustedDomain(y)) || Y && A.default.isTrustedProtocol(y)) {
            null == t || null != D && D ? F() : U && c.default.trackAnnouncementMessageLinkClicked({
                messageId: b,
                channelId: M,
                guildId: P,
                sourceChannelId: G,
                sourceGuildId: w
            });
            return
        }
        if (null != t && t.preventDefault(), Y) I.default.show({
            url: y,
            trustUrl: a.trustProtocol,
            onConfirm: F,
            isProtocol: !0
        });
        else {
            let e = (0, E.punycodeLink)(y),
                t = null != e ? e.displayTarget : y;
            I.default.show({
                url: t,
                trustUrl: a.trustDomain,
                onConfirm: F,
                isProtocol: !1
            })
        }
    }
}