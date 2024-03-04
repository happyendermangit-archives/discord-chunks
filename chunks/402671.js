function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        countEmoji: function() {
            return T
        },
        default: function() {
            return I
        },
        getEmojiColors: function() {
            return C
        },
        getEmojiUrl: function() {
            return A
        }
    }), n("222007"), n("781738"), n("808653"), n("424973");
    var i = n("736271"),
        s = n("858619"),
        r = n("153043"),
        a = n("233069"),
        o = n("957255"),
        l = n("697218"),
        u = n("315102"),
        d = n("61069"),
        c = n("103603"),
        f = n("719923"),
        _ = n("49111"),
        h = n("958706");
    let E = new Set([h.EmojiDisabledReasons.PREMIUM_LOCKED, h.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
        g = new Set([h.EmojiDisabledReasons.PREMIUM_LOCKED, h.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, h.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED, h.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE]),
        m = new Set([h.EmojiDisabledReasons.DISALLOW_EXTERNAL, h.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, h.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED]);

    function p(e) {
        if (e.type === s.EmojiTypes.GUILD) return !0;
        return null != e.guildId
    }

    function S(e, t) {
        return null != e && null != t && (!p(e) || t === e.guildId)
    }

    function v(e) {
        var t;
        let {
            emoji: n,
            channel: s,
            intention: u,
            forceIncludeExternalGuilds: d
        } = e;
        if (u === h.EmojiIntention.COMMUNITY_CONTENT_ONLY && null == n.guildId) return h.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED;
        if (!p(n)) return null;
        let c = null !== (t = e.guildId) && void 0 !== t ? t : null == s ? void 0 : s.getGuildId(),
            E = null != s && (0, a.isGuildTextChannelType)(s.type),
            g = null != s && (0, a.isGuildVocalChannelType)(s.type),
            m = S(n, c),
            v = o.default.can(_.Permissions.USE_EXTERNAL_EMOJIS, s);
        if (u === h.EmojiIntention.COMMUNITY_CONTENT || u === h.EmojiIntention.COMMUNITY_CONTENT_ONLY) return m && n.available ? null : h.EmojiDisabledReasons.DISALLOW_EXTERNAL;
        if (!(0, h.isExternalEmojiAllowedForIntention)(u) && !S(n, c) && !d || (E || g) && !m && !v) return h.EmojiDisabledReasons.DISALLOW_EXTERNAL;
        if (!n.available) return h.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
        let T = l.default.getCurrentUser();
        if (!f.default.canUseEmojisEverywhere(T) && !m) {
            if (u === h.EmojiIntention.STATUS) return h.EmojiDisabledReasons.PREMIUM_LOCKED;
            if (!n.managed) return h.EmojiDisabledReasons.PREMIUM_LOCKED
        }
        if ((0, r.isUnusableRoleSubscriptionEmoji)(n, null != c ? c : void 0)) return (0, i.shouldHideGuildPurchaseEntryPoints)(n.guildId) ? h.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : h.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
        return !n.animated || f.default.canUseAnimatedEmojis(T) || (0, r.isPurchasableRoleSubscriptionEmoji)(n) ? null : h.EmojiDisabledReasons.PREMIUM_LOCKED
    }

    function T(e, t) {
        let n = 0,
            i = 0,
            r = 0,
            a = 0,
            o = 0,
            l = 0;
        return e.forEach(e => {
            null != e.id ? (e.type === s.EmojiTypes.GUILD && (e.guildId === t ? e.managed ? a++ : i++ : e.managed ? o++ : r++), e.animated && l++) : n++
        }), {
            unicode: n,
            custom: i,
            customExternal: r,
            managed: a,
            managedExternal: o,
            animated: l
        }
    }
    var I = {
        sanitizeEmojiName(e) {
            for (e = e.replace(h.EMOJI_RE, "").slice(0, h.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
            return e
        },
        filterUnsupportedEmojis: d.default.filterUnsupportedEmojis,
        getURL: d.default.getURL,
        isInternalEmojiForGuildId: S,
        getEmojiUnavailableReason: v,
        isCustomEmoji: p,
        isEmojiFiltered(e) {
            let {
                emoji: t,
                channel: n,
                intention: i,
                guildId: s
            } = e, r = v({
                emoji: t,
                channel: n,
                intention: i,
                guildId: s
            });
            return m.has(r)
        },
        isEmojiPremiumLocked(e) {
            let {
                emoji: t,
                channel: n,
                intention: i,
                guildId: s
            } = e, r = v({
                emoji: t,
                channel: n,
                guildId: s,
                intention: i
            });
            return E.has(r)
        },
        isEmojiCategoryNitroLocked(e) {
            let {
                categoryEmojis: t,
                channel: n,
                intention: i
            } = e, s = t.reduce((e, t) => {
                let s = v({
                    emoji: t,
                    channel: n,
                    intention: i
                });
                return (s === h.EmojiDisabledReasons.PREMIUM_LOCKED || s === h.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) && e.push(s), e
            }, []), r = s.some(e => e === h.EmojiDisabledReasons.PREMIUM_LOCKED);
            return r && s.length === t.length
        },
        isEmojiFilteredOrLocked(e) {
            let {
                emoji: t,
                channel: n,
                intention: i
            } = e;
            return this.isEmojiFiltered({
                emoji: t,
                channel: n,
                intention: i
            }) || this.isEmojiPremiumLocked({
                emoji: t,
                channel: n,
                intention: i
            })
        },
        isEmojiDisabled(e) {
            let {
                emoji: t,
                channel: n,
                intention: i
            } = e, s = v({
                emoji: t,
                channel: n,
                intention: i
            });
            return g.has(s)
        },
        isFileTooBig: e => e.size > 2097152,
        isDataTooBig: e => (0, c.dataUriFileSize)(e) > h.EMOJI_MAX_FILESIZE
    };
    async function C(e) {
        return await d.default.getEmojiColors(e)
    }

    function A(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            {
                id: n,
                name: i,
                animated: s
            } = e;
        return null != n ? u.default.getEmojiURL({
            id: n,
            size: t,
            animated: null != s && s
        }) : d.default.getURL(i)
    }
}