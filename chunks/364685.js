function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return U
        }
    }), n("222007"), n("424973");
    var i = n("102053"),
        s = n("446674"),
        r = n("913144"),
        a = n("802493"),
        o = n("595525"),
        l = n("212084"),
        u = n("867805"),
        d = n("267567"),
        c = n("813006"),
        f = n("778689"),
        _ = n("305961"),
        h = n("718517"),
        E = n("161585"),
        g = n("24373");
    let m = 2,
        p = new Map,
        S = new Map,
        v = null,
        T = [],
        I = null,
        C = !1,
        A = new Map,
        y = (e, t) => {
            A = new Map(A.set(e, t))
        },
        N = h.default.Millis.HOUR,
        R = async () => {
            if (0 !== m) return;
            let e = a.default.database();
            if (null == e) return;
            m = 2;
            let t = await (0, o.tryLoadOrResetCacheGatewayAsync)("StickerStore.loadSavedGuildStickers", () => i.default.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => l.default.getAsync(e)));
            null != t && r.default.dispatch({
                type: "CACHED_STICKERS_LOADED",
                stickers: t
            })
        }, O = function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            S.set(e.id, e), t && D(e, n)
        }, D = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null == v) return;
            let {
                tags: n
            } = e, i = {
                type: E.StickerMetadataTypes.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
            if ((0, g.isStandardSticker)(e)) {
                let t = T.find(t => t.id === e.pack_id),
                    s = [i, ...(null != n ? n : "").split(",").map(e => ({
                        type: E.StickerMetadataTypes.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))];
                null != t && s.push({
                    type: E.StickerMetadataTypes.PACK_NAME,
                    value: t.name
                }), v.set(e.id, s)
            } else if ((0, g.isGuildSticker)(e) && null != n) {
                let s = u.default.getByName(n),
                    r = {
                        type: E.StickerMetadataTypes.TAG,
                        value: n.trim().toLocaleLowerCase()
                    },
                    a = [i, r];
                if (null != t) {
                    let e = (t instanceof(0, c.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                    null != e && "" !== e && a.push({
                        type: E.StickerMetadataTypes.GUILD_NAME,
                        value: e
                    })
                }
                if (null == s) {
                    v.set(e.id, a);
                    return
                }
                a.push({
                    type: E.StickerMetadataTypes.CORRELATED_EMOJI,
                    value: s.surrogates
                }), s.forEachDiversity(e => a.push({
                    type: E.StickerMetadataTypes.CORRELATED_EMOJI,
                    value: e.surrogates
                })), v.set(e.id, a)
            }
        }, P = (e, t, n) => {
            p.set(e.id, e);
            let i = [...T];
            if (t) {
                let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), T = i
            }(t || n) && e.stickers.forEach(e => O(e))
        }, L = () => {
            A.forEach((e, t) => {
                let n = _.default.getGuild(t);
                null != n && e.forEach(e => D(e, n))
            }), T.forEach(e => {
                e.stickers.forEach(e => D(e))
            })
        };

    function M(e) {
        null != e.stickers && (e.stickers.forEach(t => O(t, !0, e)), y(e.id, e.stickers))
    }
    class b extends s.default.Store {
        initialize() {
            this.waitFor(a.default, f.default, _.default)
        }
        get isLoaded() {
            return 0 !== m
        }
        get loadState() {
            return m
        }
        get stickerMetadata() {
            return R(), null == v && (v = new Map, L()), v
        }
        get hasLoadedStickerPacks() {
            return null != I && I + N > Date.now()
        }
        get isFetchingStickerPacks() {
            return C
        }
        getStickerById(e) {
            return !S.has(e) && R(), S.get(e)
        }
        getStickerPack(e) {
            return p.get(e)
        }
        getPremiumPacks() {
            return T
        }
        isPremiumPack(e) {
            return T.some(t => t.id === e)
        }
        getRawStickersByGuild() {
            return A
        }
        getAllStickersIterator() {
            return R(), S.values()
        }
        getAllGuildStickers() {
            return R(), A
        }
        getStickersByGuildId(e) {
            return R(), A.get(e)
        }
    }
    b.displayName = "StickersStore";
    var U = new b(r.default, {
        BACKGROUND_SYNC: () => {
            v = null, S = new Map, A = new Map, m = 0
        },
        CONNECTION_OPEN: e => {
            let {
                guilds: t
            } = e;
            v = null, S = new Map, A = new Map, t.forEach(M), m = t.every(e => null != e.stickers) ? 1 : 0
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            !d.default.isLurking(t.id) && (M(t), 1 === m && null == t.stickers && null != t.stickerUpdates && (m = 0))
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e, i = null !== (t = A.get(n.id)) && void 0 !== t ? t : [];
            i.forEach(e => {
                null != v && v.delete(e.id), S.delete(e.id)
            }), A.delete(n.id), A = new Map(A)
        },
        LOGOUT: () => {
            m = 0, T = [], S.clear(), p.clear(), v = null, A.clear(), A = new Map(A), C = !1, I = null
        },
        STICKER_PACKS_FETCH_START: () => {
            C = !0
        },
        STICKER_PACKS_FETCH_SUCCESS: e => {
            let {
                packs: t
            } = e;
            t.forEach(e => P(e, !0)), I = Date.now(), C = !1
        },
        STICKER_PACK_FETCH_SUCCESS: e => {
            let {
                pack: t,
                ingestStickers: n
            } = e;
            P(t, !1, n)
        },
        GUILD_STICKERS_FETCH_SUCCESS: e => {
            let {
                guildId: t,
                stickers: n
            } = e;
            n.forEach(e => O(e)), y(t, n)
        },
        GUILD_STICKERS_CREATE_SUCCESS: e => {
            var t, n;
            let {
                guildId: i,
                sticker: s
            } = e, r = null !== (t = A.get(i)) && void 0 !== t ? t : [];
            y(i, [...null !== (n = r.filter(e => e.id !== s.id)) && void 0 !== n ? n : [], s]), O(s)
        },
        STICKER_FETCH_SUCCESS: e => {
            let {
                sticker: t
            } = e;
            O(t, !1)
        },
        GUILD_STICKERS_UPDATE: e => {
            var t;
            let {
                guildId: n,
                stickers: i
            } = e, s = e => {
                let t;
                let n = S.get(e.id);
                return null != n && (0, g.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                    ...e,
                    user: t
                }
            }, r = null !== (t = A.get(n)) && void 0 !== t ? t : [], a = r.filter(e => null == i.find(t => t.id === e.id));
            a.forEach(e => {
                S.delete(e.id), null != v && v.delete(e.id)
            });
            let o = i.map(e => s(e));
            o.forEach(e => O(e)), y(n, o)
        },
        CACHED_STICKERS_LOADED: function(e) {
            let {
                stickers: t
            } = e;
            for (let [e, n] of t)
                if (f.default.isMember(e) && !A.has(e)) {
                    let t = _.default.getGuild(e);
                    for (let e of n) O(e, !0, t);
                    y(e, n)
                }
        }
    })
}