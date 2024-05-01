function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("51350"), n("653041"), n("627494"), n("757143"), n("724458");
    var i, r = n("392711"),
        a = n.n(r),
        s = n("913527"),
        o = n.n(s),
        l = n("956067"),
        u = n("442837"),
        d = n("570140"),
        _ = n("704907"),
        c = n("287328"),
        E = n("86670"),
        I = n("489033"),
        T = n("188742"),
        f = n("973542"),
        S = n("889564"),
        h = n("687476"),
        A = n("978519"),
        m = n("706454"),
        N = n("581883"),
        p = n("271383"),
        O = n("93093"),
        R = n("430824"),
        C = n("771845"),
        g = n("594174"),
        L = n("70956"),
        v = n("176354"),
        D = n("823379"),
        M = n("226951"),
        y = n("709054"),
        P = n("906411"),
        U = n("633302"),
        b = n("174065"),
        G = n("396352"),
        w = n("185923"),
        B = n("981631"),
        k = n("149203"),
        V = n("526761");

    function x(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let F = [k.EmojiCategories.TOP_GUILD_EMOJI.toString(), k.EmojiCategories.FAVORITES.toString(), k.EmojiCategories.RECENT.toString(), k.EmojiCategories.CUSTOM.toString()].concat(U.default.getCategories()),
        H = {
            pendingUsages: []
        };
    class Y {
        getEmoji(e) {
            return this.build(), this._emojiMap[e]
        }
        getUsableEmoji(e) {
            let t = this.getEmoji(e);
            return null != t && this.isUsable(t) ? t : null
        }
        isUsable(e) {
            if (0 === e.roles.length) return !0;
            let t = p.default.getMember(this.id, this._userId);
            return null != t && (!!(t.roles.some(t => e.roles.includes(t)) || (0, S.isPurchasableRoleSubscriptionEmoji)(e)) || !1)
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
                e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = P.EmojiTypes.GUILD, this._emojiMap[e.id] = e
            }), this._usableEmojis = a().sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
        }
        constructor(e, t, n, i = !1) {
            x(this, "id", void 0), x(this, "_userId", void 0), x(this, "_dirty", !0), x(this, "_emojis", void 0), x(this, "_emojiMap", {}), x(this, "_emoticons", []), x(this, "_usableEmojis", []), x(this, "_canSeeServerSubIAP", !1), x(this, "_totalUsable", 0), this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = i
        }
    }
    let j = y.default.fromTimestamp(Date.now() - 60 * L.default.Millis.DAY),
        W = [],
        K = 2,
        z = F.slice(0),
        Z = {},
        X = {},
        Q = null,
        q = new Map;

    function J(e) {
        var t;
        let n = $()[e];
        return null != n ? null === (t = Z[n]) || void 0 === t ? void 0 : t.getUsableEmoji(e) : null
    }

    function $() {
        if (ee(), null == X)
            for (let e in X = {}, Z)
                for (let t of Z[e].rawEmojis) X[t.id] = e;
        return X
    }
    async function ee() {
        if (0 !== K) return;
        let e = c.default.database();
        if (null == e) return;
        K = 2;
        let t = await (0, E.tryLoadOrResetCacheGatewayAsync)("EmojiStore.loadSavedEmojis", () => l.default.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => I.default.getAsync(e)));
        null != t && d.default.dispatch({
            type: "CACHED_EMOJIS_LOADED",
            emojis: t
        })
    }
    class et {
        static get(e) {
            return void 0 === e && (e = null), (null == et._lastInstance || et._lastInstance.guildId !== e) && (et._lastInstance = new et(e)), et._lastInstance
        }
        static reset() {
            et._lastInstance = null
        }
        static resetFrequentlyUsed() {
            null != et._lastInstance && (et._lastInstance.frequentlyUsed = null)
        }
        static resetFavorites() {
            null != et._lastInstance && (et._lastInstance.favorites = null, et._lastInstance.favoriteNamesAndIds = null)
        }
        static clear(e) {
            null != et._lastInstance && et._lastInstance.guildId === e && (et._lastInstance = null)
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
            return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = en.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? U.default.getByName(e.name) : void 0).filter(D.isNotNullish)), this.frequentlyUsed
        }
        rebuildFavoriteEmojisWithoutFetchingLatest() {
            if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
                var e, t;
                this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = N.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
                    var t;
                    null === (t = this.favoriteNamesAndIds) || void 0 === t || t.add(e);
                    let n = this.getById(e);
                    return null == n && (n = U.default.getByName(e)), n
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
                let n = q.get(e),
                    i = G.default.getTopEmojiIdsByGuildId(e);
                if (null == n && null == i) return W;
                let r = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : i).map(e => {
                        var t;
                        return null !== (t = this.getById(e)) && void 0 !== t ? t : U.default.getByName(U.default.convertSurrogateToName(e, !1))
                    }),
                    a = [];
                r.forEach(e => {
                    null != e && a.push(e)
                });
                let s = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
                this.topEmojis = a.filter(e => !s.includes(e.id))
            }
            return this.topEmojis
        }
        getNewlyAddedEmojiForGuild(e) {
            if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return W;
            let t = this.newlyAddedEmoji[e];
            return null == t ? W : t
        }
        getEscapedCustomEmoticonNames() {
            return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
        }
        nameMatchesChain(e) {
            return a()(this.getDisambiguatedEmoji()).filter(t => {
                let {
                    id: n,
                    names: i,
                    name: r
                } = t, s = null != i && a().some(i, e), o = null != r && e(r), l = null != r && a().some(T.default.getTermsForEmoji(r), e), u = null != n && a().some(b.default.getCaptionsForEmojiById({
                    emojiId: n
                }), e);
                return s || o || l || u
            })
        }
        _buildDisambiguatedCustomEmoji() {
            let e = {},
                t = [];
            this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
            let n = t => {
                    var n, i;
                    let r = t.name,
                        a = null !== (n = e[r]) && void 0 !== n ? n : 0;
                    if (e[r] = a + 1, a > 0) {
                        let e = "".concat(r, "~").concat(a);
                        t = {
                            ...t,
                            name: e,
                            originalName: r,
                            allNamesString: ":".concat(e, ":")
                        }
                    }
                    if (this.emojisByName[t.name] = t, "names" in t && (null === (i = t.names) || void 0 === i || i.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
                        let e, n;
                        if (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === P.EmojiTypes.GUILD) e = t.guildId, n = !0;
                        null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && y.default.compare(t.id, j) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
                    }
                    null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
                },
                i = e => {
                    !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(M.default.escape(e.name)), this.emoticonsByName[e.name] = e)
                };
            U.default.forEach(n);
            let r = e => {
                let t = Z[null == e ? B.NULL_STRING_GUILD_ID : e];
                null != t && (a().each(t.usableEmojis, n), a().each(t.emoticons, i))
            };
            for (let e in r(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => y.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
            C.default.getFlattenedGuildIds().forEach(e => {
                e !== this.guildId && r(e)
            }), this.escapedEmoticonNames = t.join("|")
        }
        constructor(e) {
            x(this, "guildId", void 0), x(this, "emoticonRegex", null), x(this, "frequentlyUsed", null), x(this, "favorites", null), x(this, "favoriteNamesAndIds", null), x(this, "topEmojis", null), x(this, "escapedEmoticonNames", null), x(this, "disambiguatedEmoji", null), x(this, "customEmojis", void 0), x(this, "groupedCustomEmojis", void 0), x(this, "emoticonsByName", void 0), x(this, "emojisByName", void 0), x(this, "emojisById", void 0), x(this, "unicodeAliases", void 0), x(this, "newlyAddedEmoji", null), x(this, "isFavoriteEmojiWithoutFetchingLatest", e => {
                var t;
                if (null == e) return !1;
                let n = this.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
                return null != e.id ? n.has(e.id) : n.has(null !== (t = e.name) && void 0 !== t ? t : "")
            }), this.guildId = e
        }
    }
    x(et, "_lastInstance", null);
    let en = new _.default({
        computeBonus: () => 100,
        computeWeight: e => {
            let t = 0;
            return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
        },
        lookupKey: e => {
            var t;
            return null !== (t = U.default.getByName(e)) && void 0 !== t ? t : J(e)
        },
        afterCompute: () => {
            et.resetFrequentlyUsed(), z = F.slice(0), !a().some(Z, e => e.usableEmojis.length > 0) && z.splice(F.indexOf(k.EmojiCategories.CUSTOM), 1)
        },
        numFrequentlyItems: 42
    });

    function ei() {
        Z = {}, X = {}, et.reset(), q.clear(), K = 2
    }

    function er(e) {
        null != Z[e] && delete Z[e]
    }

    function ea() {
        X = null, et.reset(), 0 !== K && en.compute()
    }

    function es(e, t) {
        if (er(e), et.clear(e), null == t) return;
        let n = g.default.getCurrentUser();
        if (null == n) return;
        let i = (0, A.canUseRoleSubscriptionIAP)(e);
        Z[e] = new Y(e, n.id, t, i)
    }

    function eo() {
        var e, t, n, i;
        let r = null === (t = N.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
        null != r && U.default.setDefaultDiversitySurrogate(r), et.reset();
        let s = null !== (i = null === (n = N.default.frecencyWithoutFetchingLatest.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {};
        en.overwriteHistory(a().mapValues(s, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), H.pendingUsages), a().isEmpty(s) && a().isEmpty(H.pendingUsages) && N.default.hasLoaded(V.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (en.track("thumbsup"), en.track("thumbsup"), en.track("eyes"), en.track("eyes"), en.track("laughing"), en.track("laughing"), en.track("watermelon"), en.track("fork_and_knife"), en.track("yum"), en.track("weary"), en.track("tired_face"), en.track("poop"), en.track("100"))
    }

    function el(e) {
        if (null == e) return !1;
        for (let i of e) {
            var t, n;
            let e = null !== (n = null !== (t = i.id) && void 0 !== t ? t : i.uniqueName) && void 0 !== n ? n : i.name;
            null != e && (en.track(e), H.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }))
        }
        let i = e.length > 0;
        return i && 0 !== K && en.compute(), i
    }

    function eu(e) {
        let {
            guildId: t,
            role: n
        } = e;
        if (!(0, f.isSubscriptionRole)(n)) return !1;
        {
            let e = Z[t];
            es(t, null == e ? void 0 : e.emojis), ea()
        }
    }
    class ed extends(i = u.default.PersistedStore) {
        initialize(e) {
            this.waitFor(c.default, O.default, p.default, R.default, m.default, h.default, G.default, g.default), null != e && (H = e), this.syncWith([N.default], eo)
        }
        getState() {
            return H
        }
        get loadState() {
            return K
        }
        hasPendingUsage() {
            return H.pendingUsages.length > 0
        }
        get categories() {
            return z
        }
        get diversitySurrogate() {
            var e;
            return null !== (e = U.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
        }
        get emojiFrecencyWithoutFetchingLatest() {
            return en
        }
        getGuildEmoji(e) {
            var t;
            ee();
            let n = Z[e];
            return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
        }
        getUsableGuildEmoji(e) {
            var t;
            ee();
            let n = Z[e];
            return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
        }
        getGuilds() {
            return Z
        }
        getDisambiguatedEmojiContext(e) {
            return ee(), et.get(e)
        }
        getSearchResultsOrder(e, t, n) {
            let i = t.toLowerCase(),
                r = M.default.escape(i);
            if (e.length > 0) {
                let t = RegExp("^".concat(r), "i"),
                    n = new RegExp("(^|_|[A-Z])".concat(r, "s?([A-Z]|_|$)")),
                    s = n.test.bind(n),
                    o = t.test.bind(t),
                    l = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                        if (null == e || null == t) return 0;
                        let n = e.toLowerCase(),
                            r = 1 + (n === i ? 4 : 0) + (s(n) || s(e) ? 2 : 0) + (o(e) ? 1 : 0),
                            a = en.getScore(t);
                        return null != a && (r *= a / 100), r
                    };
                e = a().orderBy(e, [e => null != e.names ? l(e.names[0]) : l(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
            }
            return n > 0 && (e = e.slice(0, n)), e
        }
        searchWithoutFetchingLatest(e) {
            let t, {
                channel: n,
                query: i,
                count: r = 0,
                intention: a,
                includeExternalGuilds: s = !0,
                matchComparator: o
            } = e;
            ee();
            let l = i.toLowerCase().replaceAll(/[ _]/g, ""),
                u = M.default.escape(l);
            if (null == o) {
                let e = RegExp("".concat(u), "i");
                t = t => e.test(t.replaceAll("_", ""))
            } else t = o;
            let d = null != n ? n.getGuildId() : null,
                _ = et.get(d).nameMatchesChain(t).reduce((e, t) => {
                    let i = v.default.getEmojiUnavailableReason({
                        emoji: t,
                        channel: n,
                        intention: a,
                        forceIncludeExternalGuilds: s
                    });
                    return i === w.EmojiDisabledReasons.PREMIUM_LOCKED ? e.locked.push(t) : null == i && e.unlocked.push(t), e
                }, {
                    unlocked: [],
                    locked: []
                });
            return {
                unlocked: this.getSearchResultsOrder(_.unlocked, i, r),
                locked: this.getSearchResultsOrder(_.locked, i, 0)
            }
        }
        getUsableCustomEmojiById(e) {
            return ee(), J(e)
        }
        getCustomEmojiById(e) {
            return ee(),
                function(e) {
                    var t;
                    let n = $()[e];
                    return null != n ? null === (t = Z[n]) || void 0 === t ? void 0 : t.getEmoji(e) : null
                }(e)
        }
        getTopEmoji(e) {
            return null == e ? W : (ee(), et.get(e).getTopEmojiWithoutFetchingLatest(e))
        }
        getNewlyAddedEmoji(e) {
            return null == e ? W : (ee(), et.get(e).getNewlyAddedEmojiForGuild(e))
        }
        getTopEmojisMetadata(e) {
            return q.get(e)
        }
        getEmojiAutosuggestion(e) {
            if (null != Q && Q.length > 0) {
                let {
                    locked: t,
                    unlocked: n
                } = this.searchWithoutFetchingLatest({
                    channel: e,
                    count: 10,
                    query: Q,
                    intention: w.EmojiIntention.CHAT
                });
                return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
            }
            return []
        }
        hasUsableEmojiInAnyGuild() {
            return ee(), y.default.keys(Z).some(e => Z[e].usableEmojis.length > 0)
        }
        hasFavoriteEmojis(e) {
            let t = et.get(e);
            return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
        }
    }
    x(ed, "displayName", "EmojiStore"), x(ed, "persistKey", "EmojiStoreV2"), t.default = new ed(d.default, {
        BACKGROUND_SYNC: function() {
            ei()
        },
        CONNECTION_OPEN: function(e) {
            for (let t of (ei(), e.guilds)) es(t.id, t.emojis);
            K = e.guilds.every(e => null != e.emojis) ? 1 : 0, ea()
        },
        CACHED_EMOJIS_LOADED: function(e) {
            let {
                emojis: t
            } = e;
            for (let [e, n] of t) !Object.hasOwn(Z, e) && O.default.isMember(e) && es(e, n);
            ea()
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                user: i
            } = e;
            if (i.id !== (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
            let r = Z[n];
            es(n, null == r ? void 0 : r.usableEmojis), ea()
        },
        GUILD_CREATE: function(e) {
            0 !== K && null == e.guild.emojis && null != e.guild.emojiUpdates && (K = 0), es(e.guild.id, e.guild.emojis), ea()
        },
        GUILD_UPDATE: function(e) {
            es(e.guild.id, e.guild.emojis), ea()
        },
        GUILD_EMOJIS_UPDATE: function(e) {
            let {
                guildId: t,
                emojis: n
            } = e;
            es(t, n), ea()
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            er(t.id), q.delete(t.id), ea()
        },
        MESSAGE_REACTION_ADD: function(e) {
            if (!e.optimistic) return !1;
            let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : U.default.getByName(U.default.convertSurrogateToName(e.emoji.name, !1));
            if (null == t) return !1;
            el([t])
        },
        EMOJI_TRACK_USAGE: function(e) {
            let {
                emojiUsed: t
            } = e;
            el(t)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (T.default.setEmojiLocale(m.default.locale), t !== V.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            H.pendingUsages = []
        },
        GUILD_ROLE_CREATE: eu,
        GUILD_ROLE_UPDATE: eu,
        TOP_EMOJIS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                topEmojisMetadata: n
            } = e;
            q.set(t, {
                emojiIds: n.map(e => e.emojiId),
                topEmojisTTL: o()(o()()).add(1, "days").valueOf()
            })
        },
        EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
            let {
                text: t
            } = e;
            Q = t
        }
    })
}