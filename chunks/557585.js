function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        },
        useSearchCategories: function() {
            return _
        }
    }), n("222007"), n("424973");
    var i = n("884691"),
        l = n("446674"),
        a = n("817963"),
        s = n("872173"),
        r = n("305961"),
        o = n("957255"),
        u = n("697218"),
        d = n("719923"),
        c = n("299039"),
        f = n("880342"),
        p = n("469607"),
        m = n("235004"),
        h = n("389480"),
        x = n("774473"),
        E = n("846325");

    function y(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e.map(e => ({
                type: h.SoundboardSoundItemType.SOUND,
                sound: e
            }));
        return t ? n.sort((e, t) => c.default.compare(e.sound.soundId, t.sound.soundId)) : n
    }

    function g(e) {
        let {
            sections: t,
            guildIds: n,
            allSounds: i,
            potentialSoundIdsForSection: l,
            sectionType: a,
            sortById: s
        } = e, r = {}, o = [...n, E.DEFAULT_SOUND_GUILD_ID];
        for (let e of o) {
            var u;
            let t = null !== (u = i.get(e)) && void 0 !== u ? u : [];
            for (let e of t) {
                let t = l.find(t => t === e.soundId);
                null != t && (r[e.soundId] = e)
            }
        }
        let d = [];
        for (let e of l) {
            let t = r[e];
            null != t && d.push(t)
        }
        let c = y(d, s);
        c.length > 0 && t.push({
            key: a,
            categoryInfo: {
                type: a
            },
            items: c
        })
    }

    function S(e, t) {
        var n;
        let i = null !== (n = t.get(E.DEFAULT_SOUND_GUILD_ID)) && void 0 !== n ? n : E.EMPTY_SOUND_LIST;
        e.push({
            key: h.SoundboardSoundGridSectionType.DEFAULTS,
            categoryInfo: {
                type: h.SoundboardSoundGridSectionType.DEFAULTS
            },
            items: y(i)
        })
    }

    function C(e) {
        let {
            filterOutEmptyCurrentGuild: t = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], c = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), [E, C, _] = (0, l.useStateFromStoresArray)([m.default], () => [m.default.getSounds(), m.default.getFavorites(), m.default.isFetching()]), T = (0, x.useSortedGuildIdsForSoundboard)(e, !1), I = (0, l.useStateFromStoresArray)([r.default], () => {
            let e = [];
            return T.forEach(t => {
                let n = r.default.getGuild(t);
                null != n && e.push(n)
            }), e
        }), v = d.default.canUseSoundboardEverywhere(c), N = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(null == e ? void 0 : e.guild_id)), A = (0, l.useStateFromStores)([o.default], () => {
            let {
                canCreateExpressions: e
            } = (0, a.getManageResourcePermissions)(N);
            return e
        }, [N]), {
            canSeeRecentlyHeard: R,
            canSeeFrequentlyPlayed: O
        } = (0, f.useRecentlyHeardExperiment)({
            location: "soundboard-useSoundGrid",
            autoTrackExposure: !0
        }), M = function() {
            i.useEffect(() => {
                s.FrecencyUserSettingsActionCreators.loadIfNecessary()
            }, []);
            let e = (0, l.useStateFromStores)([p.default], () => p.default.frecentlyPlayedSounds);
            return e
        }(), k = (0, l.useStateFromStoresArray)([p.default], () => p.default.recentlyHeardSoundIds);
        return i.useMemo(() => {
            let e = [];
            return n ? (S(e, E), {
                categories: e,
                isFetching: _
            }) : (g({
                sections: e,
                guildIds: T,
                allSounds: E,
                potentialSoundIdsForSection: Array.from(C),
                sectionType: h.SoundboardSoundGridSectionType.FAVORITES,
                sortById: !0
            }), R && g({
                sections: e,
                guildIds: T,
                allSounds: E,
                potentialSoundIdsForSection: k,
                sectionType: h.SoundboardSoundGridSectionType.RECENTLY_HEARD,
                sortById: !1
            }), O && g({
                sections: e,
                guildIds: T,
                allSounds: E,
                potentialSoundIdsForSection: M.map(e => e.soundId),
                sectionType: h.SoundboardSoundGridSectionType.FREQUENTLY_USED,
                sortById: !1
            }), ! function(e, t, n, i, l) {
                var a;
                if (null == t) return;
                let s = null !== (a = i.get(t.id)) && void 0 !== a ? a : [],
                    r = y(s),
                    o = s.length < t.getMaxSoundboardSlots() && n,
                    u = 0 === r.length;
                (o || u) && !l && r.push({
                    type: h.SoundboardSoundItemType.ADD_SOUND,
                    guild: t
                });
                !(l && u) && e.push({
                    categoryInfo: {
                        type: h.SoundboardSoundGridSectionType.GUILD,
                        guild: t
                    },
                    key: t.id,
                    items: r
                })
            }(e, N, A, E, t), !v && S(e, E), ! function(e, t, n, i) {
                for (let a of t) {
                    var l;
                    if (a.id === n) continue;
                    let t = null !== (l = i.get(a.id)) && void 0 !== l ? l : [],
                        s = y(t);
                    s.length > 0 && e.push({
                        categoryInfo: {
                            type: h.SoundboardSoundGridSectionType.GUILD,
                            guild: a
                        },
                        key: a.id,
                        items: s
                    })
                }
            }(e, I, null == N ? void 0 : N.id, E), v && S(e, E), {
                categories: e,
                isFetching: _
            })
        }, [T, E, C, k, M, O, R, N, A, t, v, I, n, _])
    }

    function _(e, t, n) {
        return i.useMemo(() => n.length > 0 ? [{
            key: h.SoundboardSoundGridSectionType.SEARCH,
            categoryInfo: {
                type: h.SoundboardSoundGridSectionType.SEARCH
            },
            items: y(t, !1)
        }] : e, [e, n.length, t])
    }
}