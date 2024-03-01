function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        MAX_NUM_SELECTED_ITEMS: function() {
            return f
        },
        default: function() {
            return A
        }
    }), s("424973");
    var l = s("917351"),
        u = s.n(l),
        i = s("446674"),
        n = s("913144"),
        r = s("80507"),
        a = s("374363"),
        o = s("42203"),
        h = s("305961"),
        d = s("18494"),
        c = s("162771"),
        p = s("49111"),
        _ = s("397336");
    let f = 100,
        R = new r.default({
            computeBonus: () => 100,
            computeWeight: e => {
                let t = 0;
                return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
            },
            lookupKey: e => {
                var t, s;
                return null !== (s = null !== (t = h.default.getGuild(e)) && void 0 !== t ? t : o.default.getChannel(e)) && void 0 !== s ? s : o.default.getChannel(o.default.getDMFromUserId(e))
            },
            afterCompute: () => {},
            numFrequentlyItems: f,
            maxSamples: 10
        }),
        y = null,
        E = null;

    function C(e) {
        let {
            guildId: t,
            channelId: s
        } = e, l = !1;
        return s !== y && (y = null != s ? s : null, null != s && p.ID_REGEX.test(s) && (l = !0, R.track(s), T.pendingUsages.push({
            key: s,
            timestamp: Date.now()
        }))), t !== E && (E = null != t ? t : null, null != t && p.ID_REGEX.test(t) && (l = !0, R.track(t), T.pendingUsages.push({
            key: t,
            timestamp: Date.now()
        }))), l
    }

    function g() {
        var e;
        let t = null === (e = a.default.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
        if (null == t) return !1;
        R.overwriteHistory(u.mapValues(t, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), T.pendingUsages)
    }
    let T = {
        pendingUsages: []
    };
    class m extends i.default.PersistedStore {
        initialize(e) {
            this.waitFor(c.default, d.default), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && p.ID_REGEX.test(e.key)), T = e), this.syncWith([a.default], g)
        }
        getState() {
            return T
        }
        hasPendingUsage() {
            return T.pendingUsages.length > 0
        }
        get frecencyWithoutFetchingLatest() {
            return R
        }
        getFrequentlyWithoutFetchingLatest() {
            return R.frequently
        }
        getScoreWithoutFetchingLatest(e) {
            var t;
            return null !== (t = R.getFrecency(e)) && void 0 !== t ? t : 0
        }
        getScoreForDMWithoutFetchingLatest(e) {
            let t = o.default.getDMFromUserId(e);
            return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
        }
        getMaxScore() {
            return 10 * f
        }
        getBonusScore() {
            return 100
        }
    }
    m.displayName = "FrecencyStore", m.persistKey = "FrecencyStore";
    var A = new m(n.default, {
        CHANNEL_SELECT: C,
        VOICE_CHANNEL_SELECT: C,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: s
            } = e;
            return t === _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && !!s && (T.pendingUsages = [], !0)
        }
    })
}