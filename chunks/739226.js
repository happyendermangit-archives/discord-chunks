function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        countEmoji: function() {
            return S
        },
        getEmojiColors: function() {
            return v
        },
        getEmojiUrl: function() {
            return A
        }
    });
    var r = n("453724"),
        o = n("148527"),
        i = n("696923"),
        a = n("569492"),
        u = n("29884"),
        s = n("208454"),
        l = n("299529"),
        c = n("278778"),
        f = n("182425"),
        d = n("830721"),
        _ = n("281767"),
        E = n("68735");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var m = new Set([E.EmojiDisabledReasons.PREMIUM_LOCKED, E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
        y = new Set([E.EmojiDisabledReasons.PREMIUM_LOCKED, E.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED, E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE]),
        I = new Set([E.EmojiDisabledReasons.DISALLOW_EXTERNAL, E.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, E.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED]);

    function h(e) {
        if (e.type === o.EmojiTypes.GUILD) return !0;
        return null != e.guildId
    }

    function O(e, t) {
        return null != e && null != t && (!h(e) || t === e.guildId)
    }

    function T(e) {
        var t, n = e.emoji,
            o = e.channel,
            l = e.intention,
            c = e.forceIncludeExternalGuilds;
        if (l === E.EmojiIntention.COMMUNITY_CONTENT_ONLY && null == n.guildId) return E.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED;
        if (!h(n)) return null;
        var f = null !== (t = e.guildId) && void 0 !== t ? t : null == o ? void 0 : o.getGuildId(),
            p = null != o && (0, a.isGuildTextChannelType)(o.type),
            m = null != o && (0, a.isGuildVocalChannelType)(o.type),
            y = O(n, f),
            I = u.default.can(_.Permissions.USE_EXTERNAL_EMOJIS, o);
        if (l === E.EmojiIntention.COMMUNITY_CONTENT || l === E.EmojiIntention.COMMUNITY_CONTENT_ONLY) return y && n.available ? null : E.EmojiDisabledReasons.DISALLOW_EXTERNAL;
        if (!(0, E.isExternalEmojiAllowedForIntention)(l) && !O(n, f) && !c || (p || m) && !y && !I) return E.EmojiDisabledReasons.DISALLOW_EXTERNAL;
        if (!n.available) return E.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
        var T = s.default.getCurrentUser();
        if (!d.default.canUseEmojisEverywhere(T) && !y) {
            if (l === E.EmojiIntention.STATUS) return E.EmojiDisabledReasons.PREMIUM_LOCKED;
            if (!n.managed) return E.EmojiDisabledReasons.PREMIUM_LOCKED
        }
        if ((0, i.isUnusableRoleSubscriptionEmoji)(n, null != f ? f : void 0)) return (0, r.shouldHideGuildPurchaseEntryPoints)(n.guildId) ? E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
        return !n.animated || d.default.canUseAnimatedEmojis(T) || (0, i.isPurchasableRoleSubscriptionEmoji)(n) ? null : E.EmojiDisabledReasons.PREMIUM_LOCKED
    }

    function S(e, t) {
        var n = 0,
            r = 0,
            i = 0,
            a = 0,
            u = 0,
            s = 0;
        return e.forEach(function(e) {
            null != e.id ? (e.type === o.EmojiTypes.GUILD && (e.guildId === t ? e.managed ? a++ : r++ : e.managed ? u++ : i++), e.animated && s++) : n++
        }), {
            unicode: n,
            custom: r,
            customExternal: i,
            managed: a,
            managedExternal: u,
            animated: s
        }
    }

    function v(e) {
        return g.apply(this, arguments)
    }

    function g() {
        var e;
        return e = function(e) {
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, c.default.getEmojiColors(e)];
                    case 1:
                        return [2, t.sent()]
                }
            })
        }, (g = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function A(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
            n = e.id,
            r = e.name,
            o = e.animated;
        return null != n ? l.default.getEmojiURL({
            id: n,
            size: t,
            animated: null != o && o
        }) : c.default.getURL(r)
    }
    t.default = {
        sanitizeEmojiName: function(e) {
            for (e = e.replace(E.EMOJI_RE, "").slice(0, E.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
            return e
        },
        filterUnsupportedEmojis: c.default.filterUnsupportedEmojis,
        getURL: c.default.getURL,
        isInternalEmojiForGuildId: O,
        getEmojiUnavailableReason: T,
        isCustomEmoji: h,
        isEmojiFiltered: function(e) {
            var t = T({
                emoji: e.emoji,
                channel: e.channel,
                intention: e.intention,
                guildId: e.guildId
            });
            return I.has(t)
        },
        isEmojiPremiumLocked: function(e) {
            var t = e.emoji,
                n = e.channel,
                r = e.intention,
                o = T({
                    emoji: t,
                    channel: n,
                    guildId: e.guildId,
                    intention: r
                });
            return m.has(o)
        },
        isEmojiCategoryNitroLocked: function(e) {
            var t = e.categoryEmojis,
                n = e.channel,
                r = e.intention,
                o = t.reduce(function(e, t) {
                    var o = T({
                        emoji: t,
                        channel: n,
                        intention: r
                    });
                    return (o === E.EmojiDisabledReasons.PREMIUM_LOCKED || o === E.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) && e.push(o), e
                }, []);
            return o.some(function(e) {
                return e === E.EmojiDisabledReasons.PREMIUM_LOCKED
            }) && o.length === t.length
        },
        isEmojiFilteredOrLocked: function(e) {
            var t = e.emoji,
                n = e.channel,
                r = e.intention;
            return this.isEmojiFiltered({
                emoji: t,
                channel: n,
                intention: r
            }) || this.isEmojiPremiumLocked({
                emoji: t,
                channel: n,
                intention: r
            })
        },
        isEmojiDisabled: function(e) {
            var t = T({
                emoji: e.emoji,
                channel: e.channel,
                intention: e.intention
            });
            return y.has(t)
        },
        isFileTooBig: function(e) {
            return e.size > 2097152
        },
        isDataTooBig: function(e) {
            return (0, f.dataUriFileSize)(e) > E.EMOJI_MAX_FILESIZE
        }
    }
}