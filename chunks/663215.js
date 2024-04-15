function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        },
        useSearchCategories: function() {
            return p
        }
    }), n("47120"), n("653041");
    var i = n("470079"),
        r = n("442837"),
        s = n("889161"),
        a = n("675478"),
        o = n("430824"),
        l = n("496675"),
        u = n("594174"),
        d = n("74538"),
        _ = n("709054"),
        c = n("164878"),
        E = n("178106"),
        I = n("763296"),
        T = n("697426"),
        f = n("549771"),
        S = n("710111");

    function h(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e.map(e => ({
                type: T.SoundboardSoundItemType.SOUND,
                sound: e
            }));
        return t ? n.sort((e, t) => _.default.compare(e.sound.soundId, t.sound.soundId)) : n
    }

    function A(e) {
        let {
            sections: t,
            guildIds: n,
            allSounds: i,
            potentialSoundIdsForSection: r,
            sectionType: s,
            sortById: a
        } = e, o = {};
        for (let e of [...n, S.DEFAULT_SOUND_GUILD_ID]) {
            var l;
            for (let t of null !== (l = i.get(e)) && void 0 !== l ? l : []) null != r.find(e => e === t.soundId) && (o[t.soundId] = t)
        }
        let u = [];
        for (let e of r) {
            let t = o[e];
            null != t && u.push(t)
        }
        let d = h(u, a);
        d.length > 0 && t.push({
            key: s,
            categoryInfo: {
                type: s
            },
            items: d
        })
    }

    function m(e, t) {
        var n;
        let i = null !== (n = t.get(S.DEFAULT_SOUND_GUILD_ID)) && void 0 !== n ? n : S.EMPTY_SOUND_LIST;
        e.push({
            key: T.SoundboardSoundGridSectionType.DEFAULTS,
            categoryInfo: {
                type: T.SoundboardSoundGridSectionType.DEFAULTS
            },
            items: h(i)
        })
    }

    function N(e) {
        let {
            filterOutEmptyCurrentGuild: t = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], _ = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), [S, N, p] = (0, r.useStateFromStoresArray)([I.default], () => [I.default.getSounds(), I.default.getFavorites(), I.default.isFetching()]), O = (0, f.useSortedGuildIdsForSoundboard)(e, !1), R = (0, r.useStateFromStoresArray)([o.default], () => {
            let e = [];
            return O.forEach(t => {
                let n = o.default.getGuild(t);
                null != n && e.push(n)
            }), e
        }), C = d.default.canUseSoundboardEverywhere(_), g = (0, r.useStateFromStores)([o.default], () => o.default.getGuild(null == e ? void 0 : e.guild_id)), L = (0, r.useStateFromStores)([l.default], () => {
            let {
                canCreateExpressions: e
            } = (0, s.getManageResourcePermissions)(g);
            return e
        }, [g]), {
            canSeeRecentlyHeard: D,
            canSeeFrequentlyPlayed: v
        } = (0, c.useRecentlyHeardExperiment)({
            location: "soundboard-useSoundGrid",
            autoTrackExposure: !0
        }), M = function() {
            return i.useEffect(() => {
                a.FrecencyUserSettingsActionCreators.loadIfNecessary()
            }, []), (0, r.useStateFromStores)([E.default], () => E.default.frecentlyPlayedSounds)
        }(), y = (0, r.useStateFromStoresArray)([E.default], () => E.default.recentlyHeardSoundIds);
        return i.useMemo(() => {
            let e = [];
            return n ? (m(e, S), {
                categories: e,
                isFetching: p
            }) : (A({
                sections: e,
                guildIds: O,
                allSounds: S,
                potentialSoundIdsForSection: Array.from(N),
                sectionType: T.SoundboardSoundGridSectionType.FAVORITES,
                sortById: !0
            }), D && A({
                sections: e,
                guildIds: O,
                allSounds: S,
                potentialSoundIdsForSection: y,
                sectionType: T.SoundboardSoundGridSectionType.RECENTLY_HEARD,
                sortById: !1
            }), v && A({
                sections: e,
                guildIds: O,
                allSounds: S,
                potentialSoundIdsForSection: M.map(e => e.soundId),
                sectionType: T.SoundboardSoundGridSectionType.FREQUENTLY_USED,
                sortById: !1
            }), ! function(e, t, n, i, r) {
                var s;
                if (null == t) return;
                let a = null !== (s = i.get(t.id)) && void 0 !== s ? s : [],
                    o = h(a),
                    l = a.length < t.getMaxSoundboardSlots() && n,
                    u = 0 === o.length;
                (l || u) && !r && o.push({
                    type: T.SoundboardSoundItemType.ADD_SOUND,
                    guild: t
                });
                !(r && u) && e.push({
                    categoryInfo: {
                        type: T.SoundboardSoundGridSectionType.GUILD,
                        guild: t
                    },
                    key: t.id,
                    items: o
                })
            }(e, g, L, S, t), !C && m(e, S), ! function(e, t, n, i) {
                for (let s of t) {
                    var r;
                    if (s.id === n) continue;
                    let t = h(null !== (r = i.get(s.id)) && void 0 !== r ? r : []);
                    t.length > 0 && e.push({
                        categoryInfo: {
                            type: T.SoundboardSoundGridSectionType.GUILD,
                            guild: s
                        },
                        key: s.id,
                        items: t
                    })
                }
            }(e, R, null == g ? void 0 : g.id, S), C && m(e, S), {
                categories: e,
                isFetching: p
            })
        }, [O, S, N, y, M, v, D, g, L, t, C, R, n, p])
    }

    function p(e, t, n) {
        return i.useMemo(() => n.length > 0 ? [{
            key: T.SoundboardSoundGridSectionType.SEARCH,
            categoryInfo: {
                type: T.SoundboardSoundGridSectionType.SEARCH
            },
            items: h(t, !1)
        }] : e, [e, n.length, t])
    }
}