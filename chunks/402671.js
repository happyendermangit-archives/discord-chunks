function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        countEmoji: function() {
            return T
        },
        default: function() {
            return C
        },
        getEmojiColors: function() {
            return I
        },
        getEmojiUrl: function() {
            return S
        }
    }), n("222007"), n("781738"), n("808653"), n("424973");
    var s = n("736271"),
        i = n("858619"),
        r = n("153043"),
        a = n("233069"),
        o = n("957255"),
        d = n("697218"),
        u = n("315102"),
        l = n("61069"),
        f = n("103603"),
        _ = n("719923"),
        c = n("49111"),
        g = n("958706");
    let m = new Set([g.EmojiDisabledReasons.PREMIUM_LOCKED, g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
        h = new Set([g.EmojiDisabledReasons.PREMIUM_LOCKED, g.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED, g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE]),
        v = new Set([g.EmojiDisabledReasons.DISALLOW_EXTERNAL, g.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, g.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED]);

    function E(e) {
        if (e.type === i.EmojiTypes.GUILD) return !0;
        return null != e.guildId
    }

    function p(e, t) {
        return null != e && null != t && (!E(e) || t === e.guildId)
    }

    function y(e) {
        var t;
        let {
            emoji: n,
            channel: i,
            intention: u,
            forceIncludeExternalGuilds: l
        } = e;
        if (u === g.EmojiIntention.COMMUNITY_CONTENT_ONLY && null == n.guildId) return g.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED;
        if (!E(n)) return null;
        let f = null !== (t = e.guildId) && void 0 !== t ? t : null == i ? void 0 : i.getGuildId(),
            m = null != i && (0, a.isGuildTextChannelType)(i.type),
            h = null != i && (0, a.isGuildVocalChannelType)(i.type),
            v = p(n, f),
            y = o.default.can(c.Permissions.USE_EXTERNAL_EMOJIS, i);
        if (u === g.EmojiIntention.COMMUNITY_CONTENT || u === g.EmojiIntention.COMMUNITY_CONTENT_ONLY) return v && n.available ? null : g.EmojiDisabledReasons.DISALLOW_EXTERNAL;
        if (!(0, g.isExternalEmojiAllowedForIntention)(u) && !p(n, f) && !l || (m || h) && !v && !y) return g.EmojiDisabledReasons.DISALLOW_EXTERNAL;
        if (!n.available) return g.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
        let T = d.default.getCurrentUser();
        if (!_.default.canUseEmojisEverywhere(T) && !v) {
            if (u === g.EmojiIntention.STATUS) return g.EmojiDisabledReasons.PREMIUM_LOCKED;
            if (!n.managed) return g.EmojiDisabledReasons.PREMIUM_LOCKED
        }
        if ((0, r.isUnusableRoleSubscriptionEmoji)(n, null != f ? f : void 0)) return (0, s.shouldHideGuildPurchaseEntryPoints)(n.guildId) ? g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : g.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
        return !n.animated || _.default.canUseAnimatedEmojis(T) || (0, r.isPurchasableRoleSubscriptionEmoji)(n) ? null : g.EmojiDisabledReasons.PREMIUM_LOCKED
    }

    function T(e, t) {
        let n = 0,
            s = 0,
            r = 0,
            a = 0,
            o = 0,
            d = 0;
        return e.forEach(e => {
            null != e.id ? (e.type === i.EmojiTypes.GUILD && (e.guildId === t ? e.managed ? a++ : s++ : e.managed ? o++ : r++), e.animated && d++) : n++
        }), {
            unicode: n,
            custom: s,
            customExternal: r,
            managed: a,
            managedExternal: o,
            animated: d
        }
    }
    var C = {
        sanitizeEmojiName(e) {
            for (e = e.replace(g.EMOJI_RE, "").slice(0, g.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
            return e
        },
        filterUnsupportedEmojis: l.default.filterUnsupportedEmojis,
        getURL: l.default.getURL,
        isInternalEmojiForGuildId: p,
        getEmojiUnavailableReason: y,
        isCustomEmoji: E,
        isEmojiFiltered(e) {
            let {
                emoji: t,
                channel: n,
                intention: s,
                guildId: i
            } = e, r = y({
                emoji: t,
                channel: n,
                intention: s,
                guildId: i
            });
            return v.has(r)
        },
        isEmojiPremiumLocked(e) {
            let {
                emoji: t,
                channel: n,
                intention: s,
                guildId: i
            } = e, r = y({
                emoji: t,
                channel: n,
                guildId: i,
                intention: s
            });
            return m.has(r)
        },
        isEmojiCategoryNitroLocked(e) {
            let {
                categoryEmojis: t,
                channel: n,
                intention: s
            } = e, i = t.reduce((e, t) => {
                let i = y({
                    emoji: t,
                    channel: n,
                    intention: s
                });
                return (i === g.EmojiDisabledReasons.PREMIUM_LOCKED || i === g.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) && e.push(i), e
            }, []), r = i.some(e => e === g.EmojiDisabledReasons.PREMIUM_LOCKED);
            return r && i.length === t.length
        },
        isEmojiFilteredOrLocked(e) {
            let {
                emoji: t,
                channel: n,
                intention: s
            } = e;
            return this.isEmojiFiltered({
                emoji: t,
                channel: n,
                intention: s
            }) || this.isEmojiPremiumLocked({
                emoji: t,
                channel: n,
                intention: s
            })
        },
        isEmojiDisabled(e) {
            let {
                emoji: t,
                channel: n,
                intention: s
            } = e, i = y({
                emoji: t,
                channel: n,
                intention: s
            });
            return h.has(i)
        },
        isFileTooBig: e => e.size > 2097152,
        isDataTooBig: e => (0, f.dataUriFileSize)(e) > g.EMOJI_MAX_FILESIZE
    };
    async function I(e) {
        return await l.default.getEmojiColors(e)
    }

    function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            {
                id: n,
                name: s,
                animated: i
            } = e;
        return null != n ? u.default.getEmojiURL({
            id: n,
            size: t,
            animated: null != i && i
        }) : l.default.getURL(s)
    }
}