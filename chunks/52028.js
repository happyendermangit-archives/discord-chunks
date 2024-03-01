function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("424973"), n("222007");
    var s = n("714617"),
        i = n.n(s),
        r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        d = n("913144"),
        u = n("191225"),
        l = n("299285"),
        f = n("225772"),
        _ = n("161454"),
        c = n("32346"),
        g = n("925880"),
        m = n("662285"),
        h = n("845579"),
        v = n("374363"),
        E = n("373469"),
        p = n("848872"),
        y = n("49111"),
        T = n("782340");
    let C = [],
        I = {};

    function S() {
        let e = [],
            t = h.CustomStatusSetting.getSetting();
        null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, f.default)(t));
        let n = g.default.getActivities();
        e.push(...n);
        let s = p.default.getStream();
        null != s && e.push({
            type: y.ActivityTypes.STREAMING,
            ...s
        });
        let r = new Set,
            o = new Set;
        a.forEach(I, t => {
            null != t.application_id && (r.add(t.name), o.add(t.application_id), e.push(t))
        }), u.default.getSelfEmbeddedActivities().forEach(t => {
            var n;
            let {
                applicationId: s
            } = t;
            if (o.has(s)) return;
            let i = null === (n = l.default.getApplication(s)) || void 0 === n ? void 0 : n.name;
            e.push({
                type: y.ActivityTypes.PLAYING,
                name: null != i ? i : T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                application_id: s,
                flags: y.ActivityFlags.EMBEDDED
            })
        });
        let d = _.default.getVisibleGame(),
            v = null != d && null != d.name && r.has(d.name),
            S = null != d && d.isLauncher,
            A = E.default.getCurrentUserActiveStream();
        null != d && null != d.name && !(v || S && !(null != A)) && e.push({
            type: y.ActivityTypes.PLAYING,
            name: d.name,
            application_id: d.id,
            timestamps: {
                start: d.start
            }
        });
        let D = m.default.getActivity();
        null != D && e.push({
            type: y.ActivityTypes.LISTENING,
            ...D
        });
        let N = c.default.getCurrentHangStatus();
        if (null != N) {
            let t = c.default.getCustomHangStatus();
            e.push({
                type: y.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: N,
                details: null == t ? void 0 : t.status,
                emoji: null == t ? void 0 : t.emoji
            })
        }!i(C, e) && (C = e)
    }
    class A extends o.default.Store {
        initialize() {
            this.waitFor(_.default, u.default, p.default, E.default, m.default, v.default, c.default), this.syncWith([g.default, c.default], () => S())
        }
        getActivities() {
            return C
        }
        getPrimaryActivity() {
            return C[0]
        }
        getApplicationActivity(e) {
            return this.findActivity(t => t.application_id === e)
        }
        getCustomStatusActivity() {
            return this.findActivity(e => e.type === y.ActivityTypes.CUSTOM_STATUS)
        }
        findActivity(e) {
            return C.find(e)
        }
        getApplicationActivities() {
            return I
        }
    }
    A.displayName = "LocalActivityStore";
    var D = new A(d.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                localActivities: t
            } = e;
            I = {
                ...t
            }, S()
        },
        START_SESSION: function() {
            I = {}, S()
        },
        LOCAL_ACTIVITY_UPDATE: function(e) {
            let {
                socketId: t,
                activity: n
            } = e;
            if (i(I[t], n)) return !1;
            null != n ? I[t] = n : delete I[t], S()
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                socketId: t
            } = e;
            delete I[t], S()
        },
        RUNNING_GAMES_CHANGE: S,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: S,
        SPOTIFY_PLAYER_STATE: S,
        SPOTIFY_PLAYER_PLAY: S,
        STREAMING_UPDATE: S,
        USER_CONNECTIONS_UPDATE: S,
        STREAM_START: S,
        STREAM_STOP: S,
        USER_SETTINGS_PROTO_UPDATE: S,
        EMBEDDED_ACTIVITY_OPEN: S,
        EMBEDDED_ACTIVITY_CLOSE: S,
        UPDATE_HANG_STATUS: S
    })
}