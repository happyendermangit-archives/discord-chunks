function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return D
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("917351"),
        n = E("77078"),
        r = E("913144"),
        a = E("629109"),
        i = E("990766"),
        I = E("845579"),
        T = E("373469"),
        s = E("271938"),
        S = E("525065"),
        N = E("945956"),
        O = E("697218"),
        A = E("451772"),
        R = E("374014"),
        l = E("16916"),
        u = E("706530"),
        L = E("49111");
    let C = (0, o.debounce)(i.notifyStreamStart, 1e3);
    var D = {
        init() {
            A.default.init(), r.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                let {
                    videoState: _
                } = e, E = T.default.getCurrentUserActiveStream();
                if (null != E) {
                    let e = _ === L.MediaEngineVideoStates.PAUSED;
                    (0, i.setStreamPaused)(E, e)
                }
            }), r.default.subscribe("STREAM_DELETE", e => {
                e.reason === L.ApplicationStreamDeleteReasons.STREAM_FULL && ((0, i.closeStream)(e.streamKey, !1), (0, n.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await E.el("748168").then(E.bind(E, "748168"));
                    return _ => (0, t.jsx)(e, {
                        ..._
                    })
                }))
            }), r.default.subscribe("STREAM_WATCH", e => {
                let {
                    streamKey: _,
                    allowMultiple: E
                } = e;
                if (E) return;
                let t = (0, R.decodeStreamKey)(_);
                T.default.getAllActiveStreams().forEach(e => {
                    if (e.ownerId !== t.ownerId) e.ownerId !== s.default.getId() && (e.ownerId === s.default.getId() && a.default.setGoLiveSource(null), (0, i.closeStream)((0, R.encodeStreamKey)(e), !1))
                })
            }), r.default.subscribe("VOICE_STATE_UPDATES", e => {
                let {
                    voiceStates: _
                } = e;
                _.forEach(e => {
                    let {
                        userId: _
                    } = e;
                    if (_ !== s.default.getId()) return;
                    let E = T.default.getAllActiveStreams(),
                        t = N.default.getChannelId();
                    E.forEach(e => {
                        e.channelId !== t && (0, l.default)(e, !1)
                    })
                })
            }), r.default.subscribe("STREAM_CREATE", e => {
                var _;
                let {
                    streamKey: E
                } = e, {
                    ownerId: t,
                    guildId: o
                } = (0, R.decodeStreamKey)(E);
                if (null == o || null == t || t !== (null === (_ = O.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id)) return;
                let n = S.default.getMemberCount(o);
                null != n && !(n < 2) && !(n > u.STREAM_NOTIFY_GUILD_MAX_SIZE) && I.NotifyFriendsOnGoLive.getSetting() && C(E)
            })
        }
    }
}