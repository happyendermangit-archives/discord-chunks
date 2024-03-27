function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("424973"), n("222007");
    var i = n("917351"),
        l = n.n(i),
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
        x = n("397336");
    let E = [],
        y = new s({
            max: h.NUM_RECENTLY_HEARD_SOUNDS
        }),
        g = new u.default({
            computeBonus: () => 100,
            computeWeight: e => {
                let t = 0;
                return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
            },
            lookupKey: e => m.default.getSoundById(e),
            afterCompute: () => {},
            numFrequentlyItems: h.NUM_FREQUENTLY_USED_SOUNDS
        });

    function S() {
        var e, t;
        if (!C()) return;
        let n = null === (e = d.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
        g.overwriteHistory((t = null != n ? n : {}, l.mapValues(t, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        }))), E)
    }

    function C() {
        return (0, f.recentlyHeardExperiment)({
            location: "soundboard_event_store",
            autoTrackExposure: !1
        }).canSeeFrequentlyPlayed
    }
    class T extends r.default.PersistedStore {
        initialize(e) {
            this.waitFor(c.default, m.default), (null == e ? void 0 : e.recentlyHeardCache) != null && y.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (E = e.playedEventsPendingFlush), this.syncWith([d.default], S)
        }
        getState() {
            return {
                recentlyHeardCache: y.dump(),
                playedEventsPendingFlush: E
            }
        }
        hasPendingUsage() {
            return E.length > 0
        }
        get playedSoundHistory() {
            return g.usageHistory
        }
        get recentlyHeardSoundIds() {
            return y.values()
        }
        get frecentlyPlayedSounds() {
            return g.frequently
        }
    }
    T.displayName = "SoundboardEventStore", T.persistKey = "SoundboardEventStore";
    var _ = new T(o.default, {
        GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
            let {
                sound: t,
                trigger: n
            } = e;
            if (!C()) return;
            let i = t.soundId.toString();
            n === p.LocalSoundTrigger.SOUNDBOARD && function(e) {
                g.track(e), E.push({
                    key: e,
                    timestamp: Date.now()
                }), g.compute()
            }(i)
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
            var t;
            let {
                soundId: n,
                userId: i
            } = e;
            if (! function() {
                    return (0, f.recentlyHeardExperiment)({
                        location: "soundboard_event_store",
                        autoTrackExposure: !1
                    }).canSeeRecentlyHeard
                }()) return;
            let l = n.toString(),
                a = null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            i !== a && function(e) {
                let t = m.default.getSounds();
                for (let n of t.values()) {
                    let t = n.find(t => t.soundId.toString() === e);
                    if (null != t) return !0
                }
                return !1
            }(l) && function(e) {
                y.set(e, e)
            }(l)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            C() && t === x.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && n && (E = [])
        }
    })
}