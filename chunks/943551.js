function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldTrackMessage: function() {
            return p
        },
        default: function() {
            return T
        }
    }), n("222007");
    var i = n("446674"),
        s = n("407846"),
        r = n("862337"),
        a = n("913144"),
        o = n("271938"),
        l = n("18494"),
        u = n("659500"),
        d = n("880731"),
        c = n("119035"),
        _ = n("39141"),
        f = n("49111");
    let E = new Set,
        h = new s.default(function(e) {
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
        g = new s.default(function(e) {
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
        m = e => {
            let {
                userId: t,
                channelId: n
            } = e;
            return "".concat(t, "-").concat(n)
        };

    function p(e, t, n, i) {
        if (e !== t) return !1;
        let s = null == n;
        return !(s || i.has(n)) && (i.add(n), !0)
    }
    class S extends i.default.Store {
        initialize() {
            this.waitFor(o.default, l.default)
        }
        getComboScore(e, t) {
            let n = h.get(m({
                userId: e,
                channelId: t
            }));
            return null == n ? 0 : (0, c.getComboScore)(n)
        }
        getUserCombo(e, t) {
            return h.get(m({
                userId: e,
                channelId: t
            }))
        }
        isComboing(e, t) {
            var n;
            let i = this.getUserCombo(e, t);
            return null != i && i.value >= d.default.combosRequiredCount && null != (n = i) && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1)
        }
        getMessageCombo(e) {
            var t;
            let n = g.get(e);
            return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
        }
        getMostRecentMessageCombo(e) {
            let t = g.values(e);
            return t[t.length - 1]
        }
        getUserComboShakeIntensity(e, t, n, i) {
            let s = this.getUserCombo(e, t);
            return null != s ? (0, c.getComboShakeIntensity)(s, i) * n : 0
        }
    }
    S.displayName = "PoggermodeStore";
    let v = new S(a.default, {
        POGGERMODE_UPDATE_COMBO: function(e) {
            let {
                type: t,
                ...n
            } = e;
            if (!d.default.isEnabled()) return !1;
            ! function e(t) {
                var n, i, s, a, o, l;
                let u = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    d = h.get(m(t)),
                    c = {
                        ...d,
                        ...t,
                        value: null !== (i = null !== (n = t.value) && void 0 !== n ? n : null == d ? void 0 : d.value) && void 0 !== i ? i : 0,
                        multiplier: Math.min(null !== (a = null !== (s = t.multiplier) && void 0 !== s ? s : null == d ? void 0 : d.multiplier) && void 0 !== a ? a : 1, 7),
                        decayInterval: null !== (o = null == d ? void 0 : d.decayInterval) && void 0 !== o ? o : new r.Interval
                    };
                h.set(m(t), c), u && (null === (l = c.decayInterval) || void 0 === l || l.start(1e3, () => {
                    let t = h.get(m(c));
                    if (null != t) {
                        let i = c.multiplier !== t.multiplier && c.value !== t.value;
                        if (t.value <= 0 || i) {
                            var n;
                            null === (n = t.decayInterval) || void 0 === n || n.stop(), t.value <= 0 && (e({
                                ...t,
                                value: 0,
                                multiplier: 1
                            }), v.emitChange())
                        } else e({
                            ...t,
                            value: t.value - 1
                        }), v.emitChange()
                    }
                }))
            }(n)
        },
        POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
            var t;
            let {
                comboMessage: n
            } = e;
            if (!d.default.isEnabled()) return !1;
            t = n, g.set(t.messageId, t)
        },
        MESSAGE_CREATE: function(e) {
            var t, n;
            let {
                channelId: i,
                message: {
                    mentions: s,
                    author: r,
                    nonce: a
                }
            } = e;
            if (!d.default.isEnabled()) return !1;
            let l = o.default.getId();
            if (!p(null == r ? void 0 : r.id, l, a, E)) return !1;
            let g = h.get(m({
                userId: null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : "???",
                channelId: i
            }));
            if (d.default.screenshakeEnabled && d.default.screenshakeEnabledLocations[_.ShakeLocation.MENTION] && null != s && null != s.find(e => e.id === l)) {
                let e = null != g ? null !== (n = (0, c.getComboShakeIntensity)(g, _.ShakeLevel.LEVEL_4)) && void 0 !== n ? n : .001 : 4 * Math.random();
                return u.ComponentDispatch.dispatch(f.ComponentActions.SHAKE_APP, {
                    duration: 1e3,
                    intensity: e
                }), !0
            }
            return !1
        }
    });
    var T = v
}