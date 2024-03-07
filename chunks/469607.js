function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("424973"), n("222007");
    var l = n("917351"),
        i = n.n(l),
        a = n("693566"),
        s = n.n(a),
        r = n("446674"),
        o = n("913144"),
        u = n("80507"),
        d = n("374363"),
        c = n("697218"),
        f = n("880342"),
        m = n("235004"),
        p = n("389480"),
        h = n("846325"),
        E = n("397336");
    let g = [],
        S = new s({
            max: h.NUM_RECENTLY_HEARD_SOUNDS
        }),
        C = new u.default({
            computeBonus: () => 100,
            computeWeight: e => {
                let t = 0;
                return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
            },
            lookupKey: e => m.default.getSoundById(e),
            afterCompute: () => {},
            numFrequentlyItems: h.NUM_FREQUENTLY_USED_SOUNDS
        });

    function T() {
        var e, t;
        if (!v()) return;
        let n = null === (e = d.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
        C.overwriteHistory((t = null != n ? n : {}, i.mapValues(t, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        }))), g)
    }

    function v() {
        return (0, f.recentlyHeardExperiment)({
            location: "soundboard_event_store",
            autoTrackExposure: !1
        }).canSeeFrequentlyPlayed
    }
    class I extends r.default.PersistedStore {
        initialize(e) {
            this.waitFor(c.default, m.default), (null == e ? void 0 : e.recentlyHeardCache) != null && S.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (g = e.playedEventsPendingFlush), this.syncWith([d.default], T)
        }
        getState() {
            return {
                recentlyHeardCache: S.dump(),
                playedEventsPendingFlush: g
            }
        }
        hasPendingUsage() {
            return g.length > 0
        }
        get playedSoundHistory() {
            return C.usageHistory
        }
        get recentlyHeardSoundIds() {
            return S.values()
        }
        get frecentlyPlayedSounds() {
            return C.frequently
        }
    }
    I.displayName = "SoundboardEventStore", I.persistKey = "SoundboardEventStore";
    var _ = new I(o.default, {
        GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
            let {
                sound: t,
                trigger: n
            } = e;
            if (!v()) return;
            let l = t.soundId.toString();
            n === p.LocalSoundTrigger.SOUNDBOARD && function(e) {
                C.track(e), g.push({
                    key: e,
                    timestamp: Date.now()
                }), C.compute()
            }(l)
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
            var t;
            let {
                soundId: n,
                userId: l
            } = e;
            if (! function() {
                    return (0, f.recentlyHeardExperiment)({
                        location: "soundboard_event_store",
                        autoTrackExposure: !1
                    }).canSeeRecentlyHeard
                }()) return;
            let i = n.toString(),
                a = null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            l !== a && function(e) {
                let t = m.default.getSounds();
                for (let n of t.values()) {
                    let t = n.find(t => t.soundId.toString() === e);
                    if (null != t) return !0
                }
                return !1
            }(i) && function(e) {
                S.set(e, e)
            }(i)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            v() && t === E.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && n && (g = [])
        }
    })
}