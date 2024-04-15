function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldTrackMessage: function() {
            return p
        }
    }), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("759174"),
        u = n("846519"),
        d = n("570140"),
        _ = n("314897"),
        c = n("944486"),
        E = n("585483"),
        I = n("351780"),
        T = n("641033"),
        f = n("524484"),
        S = n("981631");
    let h = new Set,
        A = new l.SecondaryIndexMap(function(e) {
            let {
                userId: t,
                channelId: n
            } = e;
            return [t, n]
        }, function(e) {
            let {
                userId: t,
                channelId: n
            } = e;
            return "".concat(n, "-").concat(t)
        }),
        m = new l.SecondaryIndexMap(function(e) {
            let {
                messageId: t,
                channelId: n,
                combo: {
                    userId: i
                }
            } = e;
            return [t, n, i]
        }, function(e) {
            let {
                messageId: t,
                channelId: n,
                combo: {
                    userId: i
                }
            } = e;
            return "".concat(n, "-").concat(i, "-").concat(t)
        }),
        N = e => {
            let {
                userId: t,
                channelId: n
            } = e;
            return "".concat(t, "-").concat(n)
        };

    function p(e, t, n, i) {
        return !(e !== t || null == n || i.has(n)) && (i.add(n), !0)
    }
    class O extends(i = o.default.Store) {
        initialize() {
            this.waitFor(_.default, c.default)
        }
        getComboScore(e, t) {
            let n = A.get(N({
                userId: e,
                channelId: t
            }));
            return null == n ? 0 : (0, T.getComboScore)(n)
        }
        getUserCombo(e, t) {
            return A.get(N({
                userId: e,
                channelId: t
            }))
        }
        isComboing(e, t) {
            var n;
            let i = this.getUserCombo(e, t);
            return null != i && i.value >= I.default.combosRequiredCount && null != (n = i) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
        }
        getMessageCombo(e) {
            var t;
            let n = m.get(e);
            return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
        }
        getMostRecentMessageCombo(e) {
            let t = m.values(e);
            return t[t.length - 1]
        }
        getUserComboShakeIntensity(e, t, n, i) {
            let r = this.getUserCombo(e, t);
            return null != r ? (0, T.getComboShakeIntensity)(r, i) * n : 0
        }
    }
    a = "PoggermodeStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a;
    let R = new O(d.default, {
        POGGERMODE_UPDATE_COMBO: function(e) {
            let {
                type: t,
                ...n
            } = e;
            if (!I.default.isEnabled()) return !1;
            ! function e(t) {
                var n, i, r, s, a, o;
                let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    d = A.get(N(t)),
                    _ = {
                        ...d,
                        ...t,
                        value: null !== (i = null !== (n = t.value) && void 0 !== n ? n : null == d ? void 0 : d.value) && void 0 !== i ? i : 0,
                        multiplier: Math.min(null !== (s = null !== (r = t.multiplier) && void 0 !== r ? r : null == d ? void 0 : d.multiplier) && void 0 !== s ? s : 1, 7),
                        decayInterval: null !== (a = null == d ? void 0 : d.decayInterval) && void 0 !== a ? a : new u.Interval
                    };
                A.set(N(t), _), l && (null === (o = _.decayInterval) || void 0 === o || o.start(1e3, () => {
                    let t = A.get(N(_));
                    if (null != t) {
                        let i = _.multiplier !== t.multiplier && _.value !== t.value;
                        if (t.value <= 0 || i) {
                            var n;
                            null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e({
                                ...t,
                                value: 0,
                                multiplier: 1
                            }), R.emitChange())
                        } else e({
                            ...t,
                            value: t.value - 1
                        }), R.emitChange()
                    }
                }))
            }(n)
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
            var t;
            let {
                comboMessage: n
            } = e;
            if (!I.default.isEnabled()) return !1;
            t = n, m.set(t.messageId, t)
        },
        MESSAGE_CREATE: function(e) {
            var t, n;
            let {
                channelId: i,
                message: {
                    mentions: r,
                    author: s,
                    nonce: a
                }
            } = e;
            if (!I.default.isEnabled()) return !1;
            let o = _.default.getId();
            if (!p(null == s ? void 0 : s.id, o, a, h)) return !1;
            let l = A.get(N({
                userId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "???",
                channelId: i
            }));
            if (I.default.screenshakeEnabled && I.default.screenshakeEnabledLocations[f.ShakeLocation.MENTION] && null != r && null != r.find(e => e.id === o)) {
                let e = null != l ? null !== (n = (0, T.getComboShakeIntensity)(l, f.ShakeLevel.LEVEL_4)) && void 0 !== n ? n : .001 : 4 * Math.random();
                return E.ComponentDispatch.dispatch(S.ComponentActions.SHAKE_APP, {
                    duration: 1e3,
                    intensity: e
                }), !0
            }
            return !1
        }
    });
    t.default = R
}