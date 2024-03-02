function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        },
        useSearchCategories: function() {
            return v
        }
    }), n("222007"), n("424973");
    var l = n("884691"),
        i = n("446674"),
        a = n("817963"),
        s = n("872173"),
        r = n("305961"),
        o = n("957255"),
        u = n("697218"),
        d = n("719923"),
        c = n("299039"),
        f = n("880342"),
        m = n("469607"),
        p = n("235004"),
        h = n("389480"),
        E = n("774473"),
        g = n("846325");

    function C(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e.map(e => ({
                type: h.SoundboardSoundItemType.SOUND,
                sound: e
            }));
        return t ? n.sort((e, t) => c.default.compare(e.sound.soundId, t.sound.soundId)) : n
    }

    function S(e) {
        let {
            sections: t,
            guildIds: n,
            allSounds: l,
            potentialSoundIdsForSection: i,
            sectionType: a,
            sortById: s
        } = e, r = {}, o = [...n, g.DEFAULT_SOUND_GUILD_ID];
        for (let e of o) {
            var u;
            let t = null !== (u = l.get(e)) && void 0 !== u ? u : [];
            for (let e of t) {
                let t = i.find(t => t === e.soundId);
                null != t && (r[e.soundId] = e)
            }
        }
        let d = [];
        for (let e of i) {
            let t = r[e];
            null != t && d.push(t)
        }
        let c = C(d, s);
        c.length > 0 && t.push({
            key: a,
            categoryInfo: {
                type: a
            },
            items: c
        })
    }

    function T(e, t) {
        var n;
        let l = null !== (n = t.get(g.DEFAULT_SOUND_GUILD_ID)) && void 0 !== n ? n : g.EMPTY_SOUND_LIST;
        e.push({
            key: h.SoundboardSoundGridSectionType.DEFAULTS,
            categoryInfo: {
                type: h.SoundboardSoundGridSectionType.DEFAULTS
            },
            items: C(l)
        })
    }

    function I(e) {
        let {
            filterOutEmptyCurrentGuild: t = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], c = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser()), [g, I, v] = (0, i.useStateFromStoresArray)([p.default], () => [p.default.getSounds(), p.default.getFavorites(), p.default.isFetching()]), _ = (0, E.useSortedGuildIdsForSoundboard)(e, !1), N = (0, i.useStateFromStoresArray)([r.default], () => {
            let e = [];
            return _.forEach(t => {
                let n = r.default.getGuild(t);
                null != n && e.push(n)
            }), e
        }), A = d.default.canUseSoundboardEverywhere(c), x = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(null == e ? void 0 : e.guild_id)), y = (0, i.useStateFromStores)([o.default], () => {
            let {
                canCreateExpressions: e
            } = (0, a.getManageResourcePermissions)(x);
            return e
        }, [x]), {
            canSeeRecentlyHeard: O,
            canSeeFrequentlyPlayed: R
        } = (0, f.useRecentlyHeardExperiment)({
            location: "soundboard-useSoundGrid",
            autoTrackExposure: !0
        }), M = function() {
            l.useEffect(() => {
                s.FrecencyUserSettingsActionCreators.loadIfNecessary()
            }, []);
            let e = (0, i.useStateFromStores)([m.default], () => m.default.frecentlyPlayedSounds);
            return e
        }(), L = (0, i.useStateFromStoresArray)([m.default], () => m.default.recentlyHeardSoundIds);
        return l.useMemo(() => {
            let e = [];
            return n ? (T(e, g), {
                categories: e,
                isFetching: v
            }) : (S({
                sections: e,
                guildIds: _,
                allSounds: g,
                potentialSoundIdsForSection: Array.from(I),
                sectionType: h.SoundboardSoundGridSectionType.FAVORITES,
                sortById: !0
            }), O && S({
                sections: e,
                guildIds: _,
                allSounds: g,
                potentialSoundIdsForSection: L,
                sectionType: h.SoundboardSoundGridSectionType.RECENTLY_HEARD,
                sortById: !1
            }), R && S({
                sections: e,
                guildIds: _,
                allSounds: g,
                potentialSoundIdsForSection: M.map(e => e.soundId),
                sectionType: h.SoundboardSoundGridSectionType.FREQUENTLY_USED,
                sortById: !1
            }), ! function(e, t, n, l, i) {
                var a;
                if (null == t) return;
                let s = null !== (a = l.get(t.id)) && void 0 !== a ? a : [],
                    r = C(s),
                    o = s.length < t.getMaxSoundboardSlots() && n,
                    u = 0 === r.length;
                (o || u) && !i && r.push({
                    type: h.SoundboardSoundItemType.ADD_SOUND,
                    guild: t
                });
                !(i && u) && e.push({
                    categoryInfo: {
                        type: h.SoundboardSoundGridSectionType.GUILD,
                        guild: t
                    },
                    key: t.id,
                    items: r
                })
            }(e, x, y, g, t), !A && T(e, g), ! function(e, t, n, l) {
                for (let a of t) {
                    var i;
                    if (a.id === n) continue;
                    let t = null !== (i = l.get(a.id)) && void 0 !== i ? i : [],
                        s = C(t);
                    s.length > 0 && e.push({
                        categoryInfo: {
                            type: h.SoundboardSoundGridSectionType.GUILD,
                            guild: a
                        },
                        key: a.id,
                        items: s
                    })
                }
            }(e, N, null == x ? void 0 : x.id, g), A && T(e, g), {
                categories: e,
                isFetching: v
            })
        }, [_, g, I, L, M, R, O, x, y, t, A, N, n, v])
    }

    function v(e, t, n) {
        return l.useMemo(() => n.length > 0 ? [{
            key: h.SoundboardSoundGridSectionType.SEARCH,
            categoryInfo: {
                type: h.SoundboardSoundGridSectionType.SEARCH
            },
            items: C(t, !1)
        }] : e, [e, n.length, t])
    }
}