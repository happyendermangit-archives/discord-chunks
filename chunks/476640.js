function(e, t, n) {
    "use strict";
    let a, l;
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("917351"),
        o = n.n(i),
        r = n("446674"),
        s = n("913144"),
        d = n("191145"),
        u = n("374014"),
        c = n("373469"),
        p = n("271938"),
        f = n("42887"),
        m = n("280168"),
        h = n("99795");

    function v() {
        let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (null == a) e = null;
        else {
            var n, i, r, s, v;
            e = d.default.getSelectedParticipantId(a);
            let t = c.default.getLastActiveStream(),
                I = null != e ? d.default.getParticipant(a, e) : null;
            if (((null == I ? void 0 : I.type) === h.ParticipantTypes.ACTIVITY || (null == I ? void 0 : I.type) === h.ParticipantTypes.USER && !(null === (n = I.voiceState) || void 0 === n ? void 0 : n.selfVideo)) && (e = null), null != t && null == e && (e = null === (i = d.default.getParticipant(a, (0, u.encodeStreamKey)(t))) || void 0 === i ? void 0 : i.id), null == e) {
                let t = p.default.getId(),
                    n = o(d.default.getVideoParticipants(a)).filter(e => e.type === h.ParticipantTypes.USER && e.user.id !== t && !f.default.isLocalVideoDisabled(e.user.id)),
                    i = Date.now();
                null == (e = null === (r = n.map(e => [e.user.id, m.default.getSpeakingDuration(e.user.id, i)]).filter(e => {
                    let [t, n] = e;
                    return 0 !== n
                }).maxBy(e => {
                    let [t, n] = e;
                    return -n
                })) || void 0 === r ? void 0 : r[0]) && (e = null != l ? l : null === (v = n.first()) || void 0 === v ? void 0 : null === (s = v.user) || void 0 === s ? void 0 : s.id)
            }
        }
        l !== e && (l = e, t && S.emitChange())
    }
    let I = o.debounce(v, 300);

    function P() {
        return I(), !1
    }
    class C extends r.default.Store {
        initialize() {
            this.waitFor(d.default, p.default, m.default, c.default, f.default), this.syncWith([d.default, c.default], P)
        }
        getSpeaker(e) {
            return a !== e && (a = e, v(!1)), null != l ? l : p.default.getId()
        }
    }
    C.displayName = "VideoSpeakerStore";
    let S = new C(s.default, {
        AUDIO_SET_LOCAL_VIDEO_DISABLED: P
    });
    var g = S
}