function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        countEmoji: function() {
            return N
        },
        getEmojiColors: function() {
            return p
        },
        getEmojiUrl: function() {
            return O
        }
    }), n("47120"), n("757143"), n("724458"), n("653041");
    var i = n("738774"),
        r = n("906411"),
        a = n("889564"),
        s = n("131704"),
        o = n("496675"),
        l = n("594174"),
        u = n("768581"),
        d = n("563114"),
        _ = n("956664"),
        c = n("74538"),
        E = n("981631"),
        I = n("185923");
    let T = new Set([I.EmojiDisabledReasons.PREMIUM_LOCKED, I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
        f = new Set([I.EmojiDisabledReasons.PREMIUM_LOCKED, I.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED, I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE]),
        S = new Set([I.EmojiDisabledReasons.DISALLOW_EXTERNAL, I.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, I.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED]);

    function h(e) {
        if (e.type === r.EmojiTypes.GUILD) return !0;
        return null != e.guildId
    }

    function A(e, t) {
        return null != e && null != t && (!h(e) || t === e.guildId)
    }

    function m(e) {
        var t;
        let {
            emoji: n,
            channel: r,
            intention: u,
            forceIncludeExternalGuilds: d
        } = e;
        if (u === I.EmojiIntention.COMMUNITY_CONTENT_ONLY && null == n.guildId) return I.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED;
        if (!h(n)) return null;
        let _ = null !== (t = e.guildId) && void 0 !== t ? t : null == r ? void 0 : r.getGuildId(),
            T = null != r && (0, s.isGuildTextChannelType)(r.type),
            f = null != r && (0, s.isGuildVocalChannelType)(r.type),
            S = A(n, _),
            m = o.default.can(E.Permissions.USE_EXTERNAL_EMOJIS, r);
        if (u === I.EmojiIntention.COMMUNITY_CONTENT || u === I.EmojiIntention.COMMUNITY_CONTENT_ONLY) return S && n.available ? null : I.EmojiDisabledReasons.DISALLOW_EXTERNAL;
        if (!(0, I.isExternalEmojiAllowedForIntention)(u) && !A(n, _) && !d || (T || f) && !S && !m) return I.EmojiDisabledReasons.DISALLOW_EXTERNAL;
        if (!n.available) return I.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
        let N = l.default.getCurrentUser();
        if (!c.default.canUseEmojisEverywhere(N) && !S) {
            if (u === I.EmojiIntention.STATUS) return I.EmojiDisabledReasons.PREMIUM_LOCKED;
            if (!n.managed) return I.EmojiDisabledReasons.PREMIUM_LOCKED
        }
        if ((0, a.isUnusableRoleSubscriptionEmoji)(n, null != _ ? _ : void 0)) return (0, i.shouldHideGuildPurchaseEntryPoints)(n.guildId) ? I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : I.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
        return !n.animated || c.default.canUseAnimatedEmojis(N) || (0, a.isPurchasableRoleSubscriptionEmoji)(n) ? null : I.EmojiDisabledReasons.PREMIUM_LOCKED
    }

    function N(e, t) {
        let n = 0,
            i = 0,
            a = 0,
            s = 0,
            o = 0,
            l = 0;
        return e.forEach(e => {
            null != e.id ? (e.type === r.EmojiTypes.GUILD && (e.guildId === t ? e.managed ? s++ : i++ : e.managed ? o++ : a++), e.animated && l++) : n++
        }), {
            unicode: n,
            custom: i,
            customExternal: a,
            managed: s,
            managedExternal: o,
            animated: l
        }
    }
    async function p(e) {
        return await d.default.getEmojiColors(e)
    }

    function O(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            {
                id: n,
                name: i,
                animated: r
            } = e;
        return null != n ? u.default.getEmojiURL({
            id: n,
            size: t,
            animated: null != r && r
        }) : d.default.getURL(i)
    }
    t.default = {
        sanitizeEmojiName(e) {
            for (e = e.replace(I.EMOJI_RE, "").slice(0, I.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
            return e
        },
        filterUnsupportedEmojis: d.default.filterUnsupportedEmojis,
        getURL: d.default.getURL,
        isInternalEmojiForGuildId: A,
        getEmojiUnavailableReason: m,
        isCustomEmoji: h,
        isEmojiFiltered(e) {
            let {
                emoji: t,
                channel: n,
                intention: i,
                guildId: r
            } = e, a = m({
                emoji: t,
                channel: n,
                intention: i,
                guildId: r
            });
            return S.has(a)
        },
        isEmojiPremiumLocked(e) {
            let {
                emoji: t,
                channel: n,
                intention: i,
                guildId: r
            } = e, a = m({
                emoji: t,
                channel: n,
                guildId: r,
                intention: i
            });
            return T.has(a)
        },
        isEmojiCategoryNitroLocked(e) {
            let {
                categoryEmojis: t,
                channel: n,
                intention: i
            } = e, r = t.reduce((e, t) => {
                let r = m({
                    emoji: t,
                    channel: n,
                    intention: i
                });
                return (r === I.EmojiDisabledReasons.PREMIUM_LOCKED || r === I.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) && e.push(r), e
            }, []);
            return r.some(e => e === I.EmojiDisabledReasons.PREMIUM_LOCKED) && r.length === t.length
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
            } = e, r = m({
                emoji: t,
                channel: n,
                intention: i
            });
            return f.has(r)
        },
        isFileTooBig: e => e.size > 2097152,
        isDataTooBig: e => (0, _.dataUriFileSize)(e) > I.EMOJI_MAX_FILESIZE
    }
}