function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        },
        useSearchCategories: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("357911"),
        a = n("968574"),
        u = n("306912"),
        s = n("29884"),
        l = n("208454"),
        c = n("830721"),
        f = n("523018"),
        d = n("991611"),
        _ = n("705442"),
        E = n("452700"),
        p = n("686309"),
        m = n("49054"),
        y = n("571336");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t) {
        if (e) {
            if ("string" == typeof e) return I(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
        }
    }

    function O(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e.map(function(e) {
                return {
                    type: p.SoundboardSoundItemType.SOUND,
                    sound: e
                }
            });
        return t ? n.sort(function(e, t) {
            return f.default.compare(e.sound.soundId, t.sound.soundId)
        }) : n
    }

    function T(e) {
        var t = e.sections,
            n = e.guildIds,
            r = e.allSounds,
            o = e.potentialSoundIdsForSection,
            i = e.sectionType,
            a = e.sortById,
            u = {};
        var s = ((function(e) {
                if (Array.isArray(e)) return I(e)
            })(d = n) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(d) || h(d) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).concat([y.DEFAULT_SOUND_GUILD_ID]),
            l = !0,
            c = !1,
            f = void 0;
        try {
            for (var d, _, E = s[Symbol.iterator](); !(l = (_ = E.next()).done); l = !0) {
                var p = _.value,
                    m = null !== (g = r.get(p)) && void 0 !== g ? g : [],
                    T = !0,
                    S = !1,
                    v = void 0;
                try {
                    for (var g, A, b = m[Symbol.iterator](); !(T = (A = b.next()).done); T = !0) ! function() {
                        var e = A.value,
                            t = o.find(function(t) {
                                return t === e.soundId
                            });
                        null != t && (u[e.soundId] = e)
                    }()
                } catch (e) {
                    S = !0, v = e
                } finally {
                    try {
                        !T && null != b.return && b.return()
                    } finally {
                        if (S) throw v
                    }
                }
            }
        } catch (e) {
            c = !0, f = e
        } finally {
            try {
                !l && null != E.return && E.return()
            } finally {
                if (c) throw f
            }
        }
        var N = [],
            R = !0,
            C = !1,
            P = void 0;
        try {
            for (var D, L = o[Symbol.iterator](); !(R = (D = L.next()).done); R = !0) {
                var M = u[D.value];
                null != M && N.push(M)
            }
        } catch (e) {
            C = !0, P = e
        } finally {
            try {
                !R && null != L.return && L.return()
            } finally {
                if (C) throw P
            }
        }
        var U = O(N, a);
        U.length > 0 && t.push({
            key: i,
            categoryInfo: {
                type: i
            },
            items: U
        })
    }

    function S(e, t) {
        var n, r = null !== (n = t.get(y.DEFAULT_SOUND_GUILD_ID)) && void 0 !== n ? n : y.EMPTY_SOUND_LIST;
        e.push({
            key: p.SoundboardSoundGridSectionType.DEFAULTS,
            categoryInfo: {
                type: p.SoundboardSoundGridSectionType.DEFAULTS
            },
            items: O(r)
        })
    }

    function v(e) {
        var t, n, f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            y = f.filterOutEmptyCurrentGuild,
            I = void 0 !== y && y,
            v = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            g = (0, o.useStateFromStores)([l.default], function() {
                return l.default.getCurrentUser()
            });
        var A = (t = (0, o.useStateFromStoresArray)([E.default], function() {
                return [E.default.getSounds(), E.default.getFavorites(), E.default.isFetching()]
            }), n = 3, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || h(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            b = A[0],
            N = A[1],
            R = A[2],
            C = (0, m.useSortedGuildIdsForSoundboard)(e, !1),
            P = (0, o.useStateFromStoresArray)([u.default], function() {
                var e = [];
                return C.forEach(function(t) {
                    var n = u.default.getGuild(t);
                    null != n && e.push(n)
                }), e
            }),
            D = c.default.canUseSoundboardEverywhere(g),
            L = (0, o.useStateFromStores)([u.default], function() {
                return u.default.getGuild(null == e ? void 0 : e.guild_id)
            }),
            M = (0, o.useStateFromStores)([s.default], function() {
                return (0, i.getManageResourcePermissions)(L).canCreateExpressions
            }, [L]),
            U = (0, d.useRecentlyHeardExperiment)({
                location: "soundboard-useSoundGrid",
                autoTrackExposure: !0
            }),
            w = U.canSeeRecentlyHeard,
            k = U.canSeeFrequentlyPlayed,
            G = function() {
                return r.useEffect(function() {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, o.useStateFromStores)([_.default], function() {
                    return _.default.frecentlyPlayedSounds
                })
            }(),
            B = (0, o.useStateFromStoresArray)([_.default], function() {
                return _.default.recentlyHeardSoundIds
            });
        return r.useMemo(function() {
            var e = [];
            return v ? (S(e, b), {
                categories: e,
                isFetching: R
            }) : (T({
                sections: e,
                guildIds: C,
                allSounds: b,
                potentialSoundIdsForSection: Array.from(N),
                sectionType: p.SoundboardSoundGridSectionType.FAVORITES,
                sortById: !0
            }), w && T({
                sections: e,
                guildIds: C,
                allSounds: b,
                potentialSoundIdsForSection: B,
                sectionType: p.SoundboardSoundGridSectionType.RECENTLY_HEARD,
                sortById: !1
            }), k && T({
                sections: e,
                guildIds: C,
                allSounds: b,
                potentialSoundIdsForSection: G.map(function(e) {
                    return e.soundId
                }),
                sectionType: p.SoundboardSoundGridSectionType.FREQUENTLY_USED,
                sortById: !1
            }), ! function(e, t, n, r, o) {
                if (null != t) {
                    var i, a = null !== (i = r.get(t.id)) && void 0 !== i ? i : [],
                        u = O(a),
                        s = a.length < t.getMaxSoundboardSlots() && n,
                        l = 0 === u.length;
                    (s || l) && !o && u.push({
                        type: p.SoundboardSoundItemType.ADD_SOUND,
                        guild: t
                    });
                    !(o && l) && e.push({
                        categoryInfo: {
                            type: p.SoundboardSoundGridSectionType.GUILD,
                            guild: t
                        },
                        key: t.id,
                        items: u
                    })
                }
            }(e, L, M, b, I), !D && S(e, b), ! function(e, t, n, r) {
                var o = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var u, s = t[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                        var l, c = u.value;
                        if (c.id !== n) {
                            var f = null !== (l = r.get(c.id)) && void 0 !== l ? l : [],
                                d = O(f);
                            d.length > 0 && e.push({
                                categoryInfo: {
                                    type: p.SoundboardSoundGridSectionType.GUILD,
                                    guild: c
                                },
                                key: c.id,
                                items: d
                            })
                        }
                    }
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !o && null != s.return && s.return()
                    } finally {
                        if (i) throw a
                    }
                }
            }(e, P, null == L ? void 0 : L.id, b), D && S(e, b), {
                categories: e,
                isFetching: R
            })
        }, [C, b, N, B, G, k, w, L, M, I, D, P, v, R])
    }

    function g(e, t, n) {
        return r.useMemo(function() {
            return n.length > 0 ? [{
                key: p.SoundboardSoundGridSectionType.SEARCH,
                categoryInfo: {
                    type: p.SoundboardSoundGridSectionType.SEARCH
                },
                items: O(t, !1)
            }] : e
        }, [e, n.length, t])
    }
}