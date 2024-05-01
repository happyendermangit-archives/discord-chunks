function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i, r, a, s, o = n("348327"),
        l = n.n(o),
        u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140"),
        E = n("317381"),
        I = n("812206"),
        T = n("676035"),
        f = n("594190"),
        S = n("106301"),
        h = n("406066"),
        A = n("768419"),
        m = n("695346"),
        N = n("581883"),
        p = n("199902"),
        O = n("272053"),
        R = n("981631"),
        C = n("689938");
    let g = [],
        L = {};

    function v() {
        let e = [],
            t = m.CustomStatusSetting.getSetting();
        null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, T.getActivityFromCustomStatus)(t));
        let n = h.default.getActivities();
        e.push(...n);
        let i = O.default.getStream();
        null != i && e.push({
            type: R.ActivityTypes.STREAMING,
            ...i
        });
        let r = new Set,
            a = new Set;
        d().forEach(L, t => {
            null != t.application_id && (r.add(t.name), a.add(t.application_id), e.push(t))
        }), E.default.getSelfEmbeddedActivities().forEach(t => {
            var n;
            let {
                applicationId: i
            } = t;
            if (a.has(i)) return;
            let r = null === (n = I.default.getApplication(i)) || void 0 === n ? void 0 : n.name;
            e.push({
                type: R.ActivityTypes.PLAYING,
                name: null != r ? r : C.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                application_id: i,
                flags: R.ActivityFlags.EMBEDDED
            })
        });
        let s = f.default.getVisibleGame(),
            o = null != s && null != s.name && r.has(s.name),
            u = null != s && s.isLauncher,
            _ = p.default.getCurrentUserActiveStream();
        null != s && null != s.name && !(o || u && !(null != _)) && e.push({
            type: R.ActivityTypes.PLAYING,
            name: s.name,
            application_id: s.id,
            timestamps: {
                start: s.start
            }
        });
        let c = A.default.getActivity();
        null != c && e.push({
            type: R.ActivityTypes.LISTENING,
            ...c
        });
        let N = S.default.getCurrentHangStatus();
        if (null != N) {
            let t = S.default.getCustomHangStatus();
            e.push({
                type: R.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: N,
                details: null == t ? void 0 : t.status,
                emoji: null == t ? void 0 : t.emoji
            })
        }!l()(g, e) && (g = e)
    }
    class D extends(i = _.default.Store) {
        initialize() {
            this.waitFor(f.default, E.default, O.default, p.default, A.default, N.default, S.default), this.syncWith([h.default, S.default], () => v())
        }
        getActivities() {
            return g
        }
        getPrimaryActivity() {
            return g[0]
        }
        getApplicationActivity(e) {
            return this.findActivity(t => t.application_id === e)
        }
        getCustomStatusActivity() {
            return this.findActivity(e => e.type === R.ActivityTypes.CUSTOM_STATUS)
        }
        findActivity(e) {
            return g.find(e)
        }
        getApplicationActivities() {
            return L
        }
    }
    s = "LocalActivityStore", (a = "displayName") in(r = D) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new D(c.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                localActivities: t
            } = e;
            L = {
                ...t
            }, v()
        },
        START_SESSION: function() {
            L = {}, v()
        },
        LOCAL_ACTIVITY_UPDATE: function(e) {
            let {
                socketId: t,
                activity: n
            } = e;
            if (l()(L[t], n)) return !1;
            null != n ? L[t] = n : delete L[t], v()
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                socketId: t
            } = e;
            delete L[t], v()
        },
        RUNNING_GAMES_CHANGE: v,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: v,
        SPOTIFY_PLAYER_STATE: v,
        SPOTIFY_PLAYER_PLAY: v,
        STREAMING_UPDATE: v,
        USER_CONNECTIONS_UPDATE: v,
        STREAM_START: v,
        STREAM_STOP: v,
        USER_SETTINGS_PROTO_UPDATE: v,
        EMBEDDED_ACTIVITY_OPEN: v,
        EMBEDDED_ACTIVITY_CLOSE: v,
        UPDATE_HANG_STATUS: v
    })
}