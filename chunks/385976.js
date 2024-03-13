function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ed
        }
    }), n("222007"), n("581081"), n("424973"), n("686130"), n("781738"), n("808653");
    var i = n("917351"),
        s = n.n(i),
        r = n("866227"),
        a = n.n(r),
        o = n("102053"),
        l = n("446674"),
        u = n("913144"),
        d = n("80507"),
        c = n("802493"),
        f = n("595525"),
        _ = n("629538"),
        h = n("39616"),
        E = n("828674"),
        g = n("153043"),
        m = n("256941"),
        p = n("505985"),
        S = n("915639"),
        v = n("374363"),
        T = n("26989"),
        I = n("778689"),
        C = n("305961"),
        A = n("677099"),
        y = n("697218"),
        N = n("315102"),
        R = n("718517"),
        O = n("402671"),
        D = n("449008"),
        P = n("655518"),
        M = n("299039"),
        L = n("858619"),
        b = n("867805"),
        U = n("802461"),
        w = n("26430"),
        k = n("958706"),
        V = n("49111"),
        G = n("115279"),
        F = n("397336");
    let x = [G.EmojiCategories.TOP_GUILD_EMOJI.toString(), G.EmojiCategories.FAVORITES.toString(), G.EmojiCategories.RECENT.toString(), G.EmojiCategories.CUSTOM.toString()].concat(b.default.getCategories()),
        B = {
            pendingUsages: []
        };
    class H {
        getEmoji(e) {
            return this.build(), this._emojiMap[e]
        }
        getUsableEmoji(e) {
            let t = this.getEmoji(e);
            return null != t && this.isUsable(t) ? t : null
        }
        isUsable(e) {
            if (0 === e.roles.length) return !0;
            let t = T.default.getMember(this.id, this._userId);
            if (null == t) return !1;
            let n = t.roles.some(t => e.roles.includes(t));
            return !!(n || (0, g.isPurchasableRoleSubscriptionEmoji)(e)) || !1
        }
        get rawEmojis() {
            return this._emojis
        }
        get emojis() {
            return this.build(), this._emojis
        }
        get emoticons() {
            return this.build(), this._emoticons
        }
        get usableEmojis() {
            return this.build(), this._usableEmojis
        }
        build() {
            this._dirty && (this._dirty = !1, this._emojis.forEach(e => {
                e.url = N.default.getEmojiURL({
                    id: e.id,
                    animated: e.animated,
                    size: 48
                }), e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = L.EmojiTypes.GUILD, this._emojiMap[e.id] = e
            }), this._usableEmojis = s.sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
        }
        constructor(e, t, n, i = !1) {
            this._dirty = !0, this._emojiMap = {}, this._emoticons = [], this._usableEmojis = [], this._canSeeServerSubIAP = !1, this._totalUsable = 0, this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = i
        }
    }
    let Y = M.default.fromTimestamp(Date.now() - 60 * R.default.Millis.DAY),
        j = [],
        W = 2,
        K = x.slice(0),
        z = {},
        q = {},
        X = null,
        Q = new Map;

    function Z(e) {
        var t;
        let n = J()[e];
        return null != n ? null === (t = z[n]) || void 0 === t ? void 0 : t.getUsableEmoji(e) : null
    }

    function J() {
        if ($(), null == q)
            for (let e in q = {}, z) {
                let t = z[e];
                for (let n of t.rawEmojis) q[n.id] = e
            }
        return q
    }
    async function $() {
        if (0 !== W) return;
        let e = c.default.database();
        if (null == e) return;
        W = 2;
        let t = await (0, f.tryLoadOrResetCacheGatewayAsync)("EmojiStore.loadSavedEmojis", () => o.default.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => _.default.getAsync(e)));
        null != t && u.default.dispatch({
            type: "CACHED_EMOJIS_LOADED",
            emojis: t
        })
    }
    class ee {
        static get(e) {
            return void 0 === e && (e = null), (null == ee._lastInstance || ee._lastInstance.guildId !== e) && (ee._lastInstance = new ee(e)), ee._lastInstance
        }
        static reset() {
            ee._lastInstance = null
        }
        static resetFrequentlyUsed() {
            null != ee._lastInstance && (ee._lastInstance.frequentlyUsed = null)
        }
        static resetFavorites() {
            null != ee._lastInstance && (ee._lastInstance.favorites = null, ee._lastInstance.favoriteNamesAndIds = null)
        }
        static clear(e) {
            null != ee._lastInstance && ee._lastInstance.guildId === e && (ee._lastInstance = null)
        }
        ensureDisambiguated() {
            null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
        }
        getDisambiguatedEmoji() {
            return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji
        }
        getCustomEmoji() {
            return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis
        }
        getGroupedCustomEmoji() {
            return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis
        }
        getByName(e) {
            if ((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
            if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
                let t = this.unicodeAliases[e];
                if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
            }
        }
        getEmoticonByName(e) {
            if (null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
        }
        getById(e) {
            if (null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
        }
        getCustomEmoticonRegex() {
            return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))), this.emoticonRegex
        }
        getFrequentlyUsedEmojisWithoutFetchingLatest() {
            return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = et.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? b.default.getByName(e.name) : void 0).filter(D.isNotNullish)), this.frequentlyUsed
        }
        rebuildFavoriteEmojisWithoutFetchingLatest() {
            if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
                var e, t;
                this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = v.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
                    var t;
                    null === (t = this.favoriteNamesAndIds) || void 0 === t || t.add(e);
                    let n = this.getById(e);
                    return null == n && (n = b.default.getByName(e)), n
                }).filter(D.isNotNullish)
            }
            return [this.favorites, this.favoriteNamesAndIds]
        }
        get favoriteEmojisWithoutFetchingLatest() {
            return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
        }
        getEmojiInPriorityOrderWithoutFetchingLatest() {
            let e = new Set;
            return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(t => !e.has(t) && (e.add(t), !0))
        }
        getTopEmojiWithoutFetchingLatest(e) {
            if (this.ensureDisambiguated(), null == this.topEmojis) {
                var t;
                let n = Q.get(e),
                    i = w.default.getTopEmojiIdsByGuildId(e);
                if (null == n && null == i) return j;
                let s = null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : i,
                    r = s.map(e => {
                        var t;
                        return null !== (t = this.getById(e)) && void 0 !== t ? t : b.default.getByName(b.default.convertSurrogateToName(e, !1))
                    }),
                    a = [];
                r.forEach(e => {
                    null != e && a.push(e)
                });
                let o = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
                this.topEmojis = a.filter(e => !o.includes(e.id))
            }
            return this.topEmojis
        }
        getNewlyAddedEmojiForGuild(e) {
            if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return j;
            let t = this.newlyAddedEmoji[e];
            return null == t ? j : t
        }
        getEscapedCustomEmoticonNames() {
            return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
        }
        nameMatchesChain(e) {
            return s(this.getDisambiguatedEmoji()).filter(t => {
                let {
                    id: n,
                    names: i,
                    name: r
                } = t, a = null != i && s.some(i, e), o = null != r && e(r), l = null != r && s.some(h.default.getTermsForEmoji(r), e), u = null != n && s.some(U.default.getCaptionsForEmojiById({
                    emojiId: n
                }), e);
                return a || o || l || u
            })
        }
        _buildDisambiguatedCustomEmoji() {
            let e = {},
                t = [];
            this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
            let n = t => {
                    var n, i;
                    let s = t.name,
                        r = null !== (n = e[s]) && void 0 !== n ? n : 0;
                    if (e[s] = r + 1, r > 0) {
                        let e = "".concat(s, "~").concat(r);
                        t = {
                            ...t,
                            name: e,
                            originalName: s,
                            allNamesString: ":".concat(e, ":")
                        }
                    }
                    if (this.emojisByName[t.name] = t, "names" in t && (null === (i = t.names) || void 0 === i || i.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
                        let e, n;
                        if (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === L.EmojiTypes.GUILD) e = t.guildId, n = !0;
                        null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && M.default.compare(t.id, Y) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
                    }
                    null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
                },
                i = e => {
                    !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(P.default.escape(e.name)), this.emoticonsByName[e.name] = e)
                };
            b.default.forEach(n);
            let r = e => {
                let t = z[null == e ? V.NULL_STRING_GUILD_ID : e];
                null != t && (s.each(t.usableEmojis, n), s.each(t.emoticons, i))
            };
            for (let e in r(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => M.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
            A.default.getFlattenedGuildIds().forEach(e => {
                e !== this.guildId && r(e)
            }), this.escapedEmoticonNames = t.join("|")
        }
        constructor(e) {
            this.emoticonRegex = null, this.frequentlyUsed = null, this.favorites = null, this.favoriteNamesAndIds = null, this.topEmojis = null, this.escapedEmoticonNames = null, this.disambiguatedEmoji = null, this.newlyAddedEmoji = null, this.isFavoriteEmojiWithoutFetchingLatest = e => {
                var t;
                if (null == e) return !1;
                let n = this.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
                return null != e.id ? n.has(e.id) : n.has(null !== (t = e.name) && void 0 !== t ? t : "")
            }, this.guildId = e
        }
    }
    ee._lastInstance = null;
    let et = new d.default({
        computeBonus: () => 100,
        computeWeight: e => {
            let t = 0;
            return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
        },
        lookupKey: e => {
            var t;
            return null !== (t = b.default.getByName(e)) && void 0 !== t ? t : Z(e)
        },
        afterCompute: () => {
            ee.resetFrequentlyUsed(), K = x.slice(0), !s.some(z, e => e.usableEmojis.length > 0) && K.splice(x.indexOf(G.EmojiCategories.CUSTOM), 1)
        },
        numFrequentlyItems: 42
    });

    function en() {
        z = {}, q = {}, ee.reset(), Q.clear(), W = 2
    }

    function ei(e) {
        let t = z[e];
        null != t && delete z[e]
    }

    function es() {
        q = null, ee.reset(), 0 !== W && et.compute()
    }

    function er(e, t) {
        if (ei(e), ee.clear(e), null == t) return;
        let n = y.default.getCurrentUser();
        if (null == n) return;
        let i = (0, p.canUseRoleSubscriptionIAP)(e);
        z[e] = new H(e, n.id, t, i)
    }

    function ea() {
        var e, t, n, i;
        let r = v.default.settings,
            a = null === (t = r.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
        null != a && b.default.setDefaultDiversitySurrogate(a), ee.reset();
        let o = v.default.frecencyWithoutFetchingLatest,
            l = null !== (i = null === (n = o.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {};
        et.overwriteHistory(s.mapValues(l, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), B.pendingUsages), s.isEmpty(l) && s.isEmpty(B.pendingUsages) && v.default.hasLoaded(F.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (et.track("thumbsup"), et.track("thumbsup"), et.track("eyes"), et.track("eyes"), et.track("laughing"), et.track("laughing"), et.track("watermelon"), et.track("fork_and_knife"), et.track("yum"), et.track("weary"), et.track("tired_face"), et.track("poop"), et.track("100"))
    }

    function eo(e) {
        if (null == e) return !1;
        for (let i of e) {
            var t, n;
            let e = null !== (n = null !== (t = i.id) && void 0 !== t ? t : i.uniqueName) && void 0 !== n ? n : i.name;
            null != e && (et.track(e), B.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }))
        }
        let i = e.length > 0;
        return i && 0 !== W && et.compute(), i
    }

    function el(e) {
        let {
            guildId: t,
            role: n
        } = e;
        if (!(0, E.isSubscriptionRole)(n)) return !1;
        {
            let e = z[t];
            er(t, null == e ? void 0 : e.emojis), es()
        }
    }
    class eu extends l.default.PersistedStore {
        initialize(e) {
            this.waitFor(c.default, I.default, T.default, C.default, S.default, m.default, w.default, y.default), null != e && (B = e), this.syncWith([v.default], ea)
        }
        getState() {
            return B
        }
        get loadState() {
            return W
        }
        hasPendingUsage() {
            return B.pendingUsages.length > 0
        }
        get categories() {
            return K
        }
        get diversitySurrogate() {
            var e;
            return null !== (e = b.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
        }
        get emojiFrecencyWithoutFetchingLatest() {
            return et
        }
        getGuildEmoji(e) {
            var t;
            $();
            let n = z[e];
            return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
        }
        getUsableGuildEmoji(e) {
            var t;
            $();
            let n = z[e];
            return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
        }
        getGuilds() {
            return z
        }
        getDisambiguatedEmojiContext(e) {
            return $(), ee.get(e)
        }
        getSearchResultsOrder(e, t, n) {
            let i = t.toLowerCase(),
                r = P.default.escape(i);
            if (e.length > 0) {
                let t = RegExp("^".concat(r), "i"),
                    n = new RegExp("(^|_|[A-Z])".concat(r, "s?([A-Z]|_|$)")),
                    a = n.test.bind(n),
                    o = t.test.bind(t),
                    l = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                        if (null == e || null == t) return 0;
                        let n = e.toLowerCase(),
                            s = 1 + (n === i ? 4 : 0) + (a(n) || a(e) ? 2 : 0) + (o(e) ? 1 : 0),
                            r = et.getScore(t);
                        return null != r && (s *= r / 100), s
                    };
                e = s.orderBy(e, [e => null != e.names ? l(e.names[0]) : l(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
            }
            return n > 0 && (e = e.slice(0, n)), e
        }
        searchWithoutFetchingLatest(e) {
            let t, {
                channel: n,
                query: i,
                count: s = 0,
                intention: r,
                includeExternalGuilds: a = !0,
                matchComparator: o
            } = e;
            $();
            let l = i.toLowerCase().replaceAll(/[ _]/g, ""),
                u = P.default.escape(l);
            if (null == o) {
                let e = RegExp("".concat(u), "i");
                t = t => e.test(t.replaceAll("_", ""))
            } else t = o;
            let d = null != n ? n.getGuildId() : null,
                c = ee.get(d).nameMatchesChain(t).reduce((e, t) => {
                    let i = O.default.getEmojiUnavailableReason({
                        emoji: t,
                        channel: n,
                        intention: r,
                        forceIncludeExternalGuilds: a
                    });
                    return i === k.EmojiDisabledReasons.PREMIUM_LOCKED ? e.locked.push(t) : null == i && e.unlocked.push(t), e
                }, {
                    unlocked: [],
                    locked: []
                });
            return {
                unlocked: this.getSearchResultsOrder(c.unlocked, i, s),
                locked: this.getSearchResultsOrder(c.locked, i, 0)
            }
        }
        getUsableCustomEmojiById(e) {
            return $(), Z(e)
        }
        getCustomEmojiById(e) {
            return $(),
                function(e) {
                    var t;
                    let n = J()[e];
                    return null != n ? null === (t = z[n]) || void 0 === t ? void 0 : t.getEmoji(e) : null
                }(e)
        }
        getTopEmoji(e) {
            return null == e ? j : ($(), ee.get(e).getTopEmojiWithoutFetchingLatest(e))
        }
        getNewlyAddedEmoji(e) {
            return null == e ? j : ($(), ee.get(e).getNewlyAddedEmojiForGuild(e))
        }
        getTopEmojisMetadata(e) {
            return Q.get(e)
        }
        getEmojiAutosuggestion(e) {
            if (null != X && X.length > 0) {
                let {
                    locked: t,
                    unlocked: n
                } = this.searchWithoutFetchingLatest({
                    channel: e,
                    count: 10,
                    query: X,
                    intention: k.EmojiIntention.CHAT
                });
                return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
            }
            return []
        }
        hasUsableEmojiInAnyGuild() {
            $();
            let e = M.default.keys(z);
            return e.some(e => z[e].usableEmojis.length > 0)
        }
        hasFavoriteEmojis(e) {
            let t = ee.get(e);
            return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
        }
    }
    eu.displayName = "EmojiStore", eu.persistKey = "EmojiStoreV2";
    var ed = new eu(u.default, {
        BACKGROUND_SYNC: function() {
            en()
        },
        CONNECTION_OPEN: function(e) {
            for (let t of (en(), e.guilds)) er(t.id, t.emojis);
            W = e.guilds.every(e => null != e.emojis) ? 1 : 0, es()
        },
        CACHED_EMOJIS_LOADED: function(e) {
            let {
                emojis: t
            } = e;
            for (let [e, n] of t) !Object.hasOwn(z, e) && I.default.isMember(e) && er(e, n);
            es()
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                user: i
            } = e;
            if (i.id !== (null === (t = y.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
            let s = z[n];
            er(n, null == s ? void 0 : s.usableEmojis), es()
        },
        GUILD_CREATE: function(e) {
            0 !== W && null == e.guild.emojis && null != e.guild.emojiUpdates && (W = 0), er(e.guild.id, e.guild.emojis), es()
        },
        GUILD_UPDATE: function(e) {
            er(e.guild.id, e.guild.emojis), es()
        },
        GUILD_EMOJIS_UPDATE: function(e) {
            let {
                guildId: t,
                emojis: n
            } = e;
            er(t, n), es()
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            ei(t.id), Q.delete(t.id), es()
        },
        MESSAGE_REACTION_ADD: function(e) {
            if (!e.optimistic) return !1;
            let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : b.default.getByName(b.default.convertSurrogateToName(e.emoji.name, !1));
            if (null == t) return !1;
            eo([t])
        },
        EMOJI_TRACK_USAGE: function(e) {
            let {
                emojiUsed: t
            } = e;
            eo(t)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (h.default.setEmojiLocale(S.default.locale), t !== F.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            B.pendingUsages = []
        },
        GUILD_ROLE_CREATE: el,
        GUILD_ROLE_UPDATE: el,
        TOP_EMOJIS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                topEmojisMetadata: n
            } = e;
            Q.set(t, {
                emojiIds: n.map(e => e.emojiId),
                topEmojisTTL: a(a()).add(1, "days").valueOf()
            })
        },
        EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
            let {
                text: t
            } = e;
            X = t
        }
    })
}