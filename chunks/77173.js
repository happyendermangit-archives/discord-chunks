function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var s = n("714617"),
        i = n.n(s),
        r = n("446674"),
        a = n("913144"),
        o = n("42203"),
        d = n("305961"),
        u = n("945956"),
        l = n("18494"),
        f = n("991170"),
        _ = n("488464"),
        c = n("998716"),
        g = n("118033"),
        m = n("834052"),
        h = n("819450"),
        v = n("837979"),
        E = n("49111");
    let p = null;

    function y() {
        let e = function() {
            var e, t, n, s, i, r, a;
            let u = l.default.getVoiceChannelId();
            if (null == u) return null;
            let y = m.default.getStageInstanceByChannel(u);
            if (null == y) return null;
            let T = o.default.getChannel(u);
            if (null == T || !f.default.canEveryone(E.Permissions.VIEW_CHANNEL, T)) return null;
            let C = d.default.getGuild(T.getGuildId());
            if (null == C || !C.hasFeature(E.GuildFeatures.DISCOVERABLE)) return null;
            let I = (0, g.packStageChannelPartyId)(T, y),
                S = (null == p ? void 0 : null === (e = p.party) || void 0 === e ? void 0 : e.id) === I ? p : null,
                A = _.default.getMutableParticipants(T.id, c.StageChannelParticipantNamedIndex.SPEAKER),
                D = A.filter(e => e.type === c.StageChannelParticipantTypes.STREAM).length,
                N = A.length - D,
                O = _.default.getParticipantCount(u) - D,
                P = (null == S ? void 0 : null === (t = S.party) || void 0 === t ? void 0 : t.size) != null ? S.party.size[1] : 0;
            return {
                application_id: v.STAGE_APPLICATION_ID,
                name: null !== (i = null !== (s = y.topic) && void 0 !== s ? s : T.topic) && void 0 !== i ? i : T.name,
                type: (0, h.getStageHasMedia)(T.id) ? E.ActivityTypes.WATCHING : E.ActivityTypes.LISTENING,
                timestamps: {
                    start: null !== (r = null == S ? void 0 : null === (n = S.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== r ? r : new Date().getTime()
                },
                assets: {
                    small_image: null !== (a = C.icon) && void 0 !== a ? a : void 0,
                    small_text: C.name
                },
                party: {
                    id: I,
                    size: [N, Math.max(O, P)]
                }
            }
        }();
        return !i(e, p) && (p = e, !0)
    }
    class T extends r.default.Store {
        initialize() {
            this.waitFor(o.default, l.default, m.default, u.default)
        }
        getActivity() {
            return p
        }
    }
    T.displayName = "StageChannelSelfRichPresenceStore";
    var C = new T(a.default, {
        CONNECTION_OPEN: y,
        STAGE_INSTANCE_CREATE: y,
        STAGE_INSTANCE_UPDATE: y,
        STAGE_INSTANCE_DELETE: y,
        VOICE_CHANNEL_SELECT: y,
        RTC_CONNECTION_STATE: function(e) {
            var t, n, s;
            let {
                state: i
            } = e, r = null !== (s = null == p ? void 0 : null === (n = p.party) || void 0 === n ? void 0 : null === (t = n.size) || void 0 === t ? void 0 : t[1]) && void 0 !== s ? s : 0;
            return i === E.RTCConnectionStates.RTC_CONNECTED && !(r > 0) && y()
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            if (null == p) return;
            let n = (0, g.unpackStageChannelParty)(p);
            null != n && null != t.find(e => e.channelId === n.channelId) && y()
        }
    })
}