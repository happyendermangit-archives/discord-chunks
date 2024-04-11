function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_NUM_SELECTED_ITEMS: function() {
            return S
        }
    }), n("653041");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("570140"),
        l = n("704907"),
        u = n("581883"),
        d = n("592125"),
        _ = n("430824"),
        c = n("944486"),
        E = n("914010"),
        I = n("981631"),
        T = n("526761");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = 100,
        h = new l.default({
            computeBonus: () => 100,
            computeWeight: e => {
                let t = 0;
                return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
            },
            lookupKey: e => {
                var t, n;
                return null !== (n = null !== (t = _.default.getGuild(e)) && void 0 !== t ? t : d.default.getChannel(e)) && void 0 !== n ? n : d.default.getChannel(d.default.getDMFromUserId(e))
            },
            afterCompute: () => {},
            numFrequentlyItems: S,
            maxSamples: 10
        }),
        A = null,
        m = null;

    function N(e) {
        let {
            guildId: t,
            channelId: n
        } = e, i = !1;
        return n !== A && (A = null != n ? n : null, null != n && I.ID_REGEX.test(n) && (i = !0, h.track(n), p.pendingUsages.push({
            key: n,
            timestamp: Date.now()
        }))), t !== m && (m = null != t ? t : null, null != t && I.ID_REGEX.test(t) && (i = !0, h.track(t), p.pendingUsages.push({
            key: t,
            timestamp: Date.now()
        }))), i
    }

    function O() {
        var e;
        let t = null === (e = u.default.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
        if (null == t) return !1;
        h.overwriteHistory(s().mapValues(t, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), p.pendingUsages)
    }
    let p = {
        pendingUsages: []
    };
    class R extends(i = a.default.PersistedStore) {
        initialize(e) {
            this.waitFor(E.default, c.default), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && I.ID_REGEX.test(e.key)), p = e), this.syncWith([u.default], O)
        }
        getState() {
            return p
        }
        hasPendingUsage() {
            return p.pendingUsages.length > 0
        }
        get frecencyWithoutFetchingLatest() {
            return h
        }
        getFrequentlyWithoutFetchingLatest() {
            return h.frequently
        }
        getScoreWithoutFetchingLatest(e) {
            var t;
            return null !== (t = h.getFrecency(e)) && void 0 !== t ? t : 0
        }
        getScoreForDMWithoutFetchingLatest(e) {
            let t = d.default.getDMFromUserId(e);
            return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
        }
        getMaxScore() {
            return 10 * S
        }
        getBonusScore() {
            return 100
        }
    }
    f(R, "displayName", "FrecencyStore"), f(R, "persistKey", "FrecencyStore"), t.default = new R(o.default, {
        CHANNEL_SELECT: N,
        VOICE_CHANNEL_SELECT: N,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            return t === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (p.pendingUsages = [], !0)
        }
    })
}