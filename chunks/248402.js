function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120");
    var s, a, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140"),
        E = n("358221"),
        I = n("569545"),
        T = n("199902"),
        f = n("314897"),
        S = n("131951"),
        A = n("606304"),
        h = n("354459");

    function m() {
        let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (null == i) e = null;
        else {
            var n, s, a, o, l;
            e = E.default.getSelectedParticipantId(i);
            let t = T.default.getLastActiveStream(),
                u = null != e ? E.default.getParticipant(i, e) : null;
            if (((null == u ? void 0 : u.type) === h.ParticipantTypes.ACTIVITY || (null == u ? void 0 : u.type) === h.ParticipantTypes.USER && !(null === (n = u.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (s = E.default.getParticipant(i, (0, I.encodeStreamKey)(t))) || void 0 === s ? void 0 : s.id), null == e) {
                let t = f.default.getId(),
                    n = d()(E.default.getVideoParticipants(i)).filter(e => e.type === h.ParticipantTypes.USER && e.user.id !== t && !S.default.isLocalVideoDisabled(e.user.id)),
                    s = Date.now();
                null == (e = null === (a = n.map(e => [e.user.id, A.default.getSpeakingDuration(e.user.id, s)]).filter(e => {
                    let [t, n] = e;
                    return 0 !== n
                }).maxBy(e => {
                    let [t, n] = e;
                    return -n
                })) || void 0 === a ? void 0 : a[0]) && (e = null != r ? r : null === (l = n.first()) || void 0 === l ? void 0 : null === (o = l.user) || void 0 === o ? void 0 : o.id)
            }
        }
        r !== e && (r = e, t && R.emitChange())
    }
    let N = d().debounce(m, 300);

    function O() {
        return N(), !1
    }
    class p extends(s = _.default.Store) {
        initialize() {
            this.waitFor(E.default, f.default, A.default, T.default, S.default), this.syncWith([E.default, T.default], O)
        }
        getSpeaker(e) {
            return i !== e && (i = e, m(!1)), null != r ? r : f.default.getId()
        }
    }
    l = "VideoSpeakerStore", (o = "displayName") in(a = p) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l;
    let R = new p(c.default, {
        AUDIO_SET_LOCAL_VIDEO_DISABLED: O
    });
    t.default = R
}