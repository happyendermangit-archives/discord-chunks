function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("348327"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("592125"),
        c = n("430824"),
        E = n("19780"),
        I = n("944486"),
        T = n("700785"),
        f = n("565799"),
        S = n("501655"),
        h = n("750154"),
        A = n("427679"),
        m = n("71275"),
        N = n("157925"),
        p = n("981631");
    let O = null;

    function R() {
        let e = function() {
            var e, t, n, i, r, s, a;
            let o = I.default.getVoiceChannelId();
            if (null == o) return null;
            let l = A.default.getStageInstanceByChannel(o);
            if (null == l) return null;
            let u = _.default.getChannel(o);
            if (null == u || !T.canEveryone(p.Permissions.VIEW_CHANNEL, u)) return null;
            let d = c.default.getGuild(u.getGuildId());
            if (null == d || !d.hasFeature(p.GuildFeatures.DISCOVERABLE)) return null;
            let E = (0, h.packStageChannelPartyId)(u, l),
                R = (null == O ? void 0 : null === (e = O.party) || void 0 === e ? void 0 : e.id) === E ? O : null,
                C = f.default.getMutableParticipants(u.id, S.StageChannelParticipantNamedIndex.SPEAKER),
                g = C.filter(e => e.type === S.StageChannelParticipantTypes.STREAM).length,
                L = C.length - g,
                v = f.default.getParticipantCount(o) - g,
                D = (null == R ? void 0 : null === (t = R.party) || void 0 === t ? void 0 : t.size) != null ? R.party.size[1] : 0;
            return {
                application_id: N.STAGE_APPLICATION_ID,
                name: null !== (r = null !== (i = l.topic) && void 0 !== i ? i : u.topic) && void 0 !== r ? r : u.name,
                type: (0, m.getStageHasMedia)(u.id) ? p.ActivityTypes.WATCHING : p.ActivityTypes.LISTENING,
                timestamps: {
                    start: null !== (s = null == R ? void 0 : null === (n = R.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== s ? s : new Date().getTime()
                },
                assets: {
                    small_image: null !== (a = d.icon) && void 0 !== a ? a : void 0,
                    small_text: d.name
                },
                party: {
                    id: E,
                    size: [L, Math.max(v, D)]
                }
            }
        }();
        return !l()(e, O) && (O = e, !0)
    }
    class C extends(a = u.default.Store) {
        initialize() {
            this.waitFor(_.default, I.default, A.default, E.default)
        }
        getActivity() {
            return O
        }
    }
    s = "StageChannelSelfRichPresenceStore", (r = "displayName") in(i = C) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new C(d.default, {
        CONNECTION_OPEN: R,
        STAGE_INSTANCE_CREATE: R,
        STAGE_INSTANCE_UPDATE: R,
        STAGE_INSTANCE_DELETE: R,
        VOICE_CHANNEL_SELECT: R,
        RTC_CONNECTION_STATE: function(e) {
            var t, n, i;
            let {
                state: r
            } = e, s = null !== (i = null == O ? void 0 : null === (n = O.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== i ? i : 0;
            return r === p.RTCConnectionStates.RTC_CONNECTED && !(s > 0) && R()
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            if (null == O) return;
            let n = (0, h.unpackStageChannelParty)(O);
            null != n && null != t.find(e => e.channelId === n.channelId) && R()
        }
    })
}