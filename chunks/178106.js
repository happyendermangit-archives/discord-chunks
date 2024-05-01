function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i, r = n("392711"),
        a = n.n(r),
        s = n("31775"),
        o = n.n(s),
        l = n("442837"),
        u = n("570140"),
        d = n("704907"),
        _ = n("581883"),
        c = n("594174"),
        E = n("164878"),
        I = n("763296"),
        T = n("697426"),
        f = n("710111"),
        S = n("526761");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = [],
        m = new(o())({
            max: f.NUM_RECENTLY_HEARD_SOUNDS
        }),
        N = new d.default({
            computeBonus: () => 100,
            computeWeight: e => {
                let t = 0;
                return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
            },
            lookupKey: e => I.default.getSoundById(e),
            afterCompute: () => {},
            numFrequentlyItems: f.NUM_FREQUENTLY_USED_SOUNDS
        });

    function p() {
        var e, t;
        if (!O()) return;
        let n = null === (e = _.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
        N.overwriteHistory((t = null != n ? n : {}, a().mapValues(t, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        }))), A)
    }

    function O() {
        return (0, E.recentlyHeardExperiment)({
            location: "soundboard_event_store",
            autoTrackExposure: !1
        }).canSeeFrequentlyPlayed
    }
    class R extends(i = l.default.PersistedStore) {
        initialize(e) {
            this.waitFor(c.default, I.default), (null == e ? void 0 : e.recentlyHeardCache) != null && m.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (A = e.playedEventsPendingFlush), this.syncWith([_.default], p)
        }
        getState() {
            return {
                recentlyHeardCache: m.dump(),
                playedEventsPendingFlush: A
            }
        }
        hasPendingUsage() {
            return A.length > 0
        }
        get playedSoundHistory() {
            return N.usageHistory
        }
        get recentlyHeardSoundIds() {
            return m.values()
        }
        get frecentlyPlayedSounds() {
            return N.frequently
        }
    }
    h(R, "displayName", "SoundboardEventStore"), h(R, "persistKey", "SoundboardEventStore"), t.default = new R(u.default, {
        GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
            let {
                sound: t,
                trigger: n
            } = e;
            if (!O()) return;
            let i = t.soundId.toString();
            n === T.LocalSoundTrigger.SOUNDBOARD && function(e) {
                N.track(e), A.push({
                    key: e,
                    timestamp: Date.now()
                }), N.compute()
            }(i)
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
            var t;
            let {
                soundId: n,
                userId: i
            } = e;
            if (! function() {
                    return (0, E.recentlyHeardExperiment)({
                        location: "soundboard_event_store",
                        autoTrackExposure: !1
                    }).canSeeRecentlyHeard
                }()) return;
            let r = n.toString();
            i !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && function(e) {
                for (let t of I.default.getSounds().values())
                    if (null != t.find(t => t.soundId.toString() === e)) return !0;
                return !1
            }(r) && function(e) {
                m.set(e, e)
            }(r)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            O() && t === S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && n && (A = [])
        }
    })
}