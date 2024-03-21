function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("424973"), n("222007");
    var i = n("714617"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144"),
        u = n("191225"),
        d = n("299285"),
        c = n("225772"),
        _ = n("161454"),
        f = n("32346"),
        E = n("925880"),
        h = n("662285"),
        g = n("845579"),
        m = n("374363"),
        p = n("373469"),
        S = n("848872"),
        T = n("49111"),
        v = n("782340");
    let I = [],
        A = {};

    function C() {
        let e = [],
            t = g.CustomStatusSetting.getSetting();
        null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, c.getActivityFromCustomStatus)(t));
        let n = E.default.getActivities();
        e.push(...n);
        let i = S.default.getStream();
        null != i && e.push({
            type: T.ActivityTypes.STREAMING,
            ...i
        });
        let r = new Set,
            o = new Set;
        a.forEach(A, t => {
            null != t.application_id && (r.add(t.name), o.add(t.application_id), e.push(t))
        }), u.default.getSelfEmbeddedActivities().forEach(t => {
            var n;
            let {
                applicationId: i
            } = t;
            if (o.has(i)) return;
            let s = null === (n = d.default.getApplication(i)) || void 0 === n ? void 0 : n.name;
            e.push({
                type: T.ActivityTypes.PLAYING,
                name: null != s ? s : v.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                application_id: i,
                flags: T.ActivityFlags.EMBEDDED
            })
        });
        let l = _.default.getVisibleGame(),
            m = null != l && null != l.name && r.has(l.name),
            C = null != l && l.isLauncher,
            y = p.default.getCurrentUserActiveStream();
        null != l && null != l.name && !(m || C && !(null != y)) && e.push({
            type: T.ActivityTypes.PLAYING,
            name: l.name,
            application_id: l.id,
            timestamps: {
                start: l.start
            }
        });
        let N = h.default.getActivity();
        null != N && e.push({
            type: T.ActivityTypes.LISTENING,
            ...N
        });
        let R = f.default.getCurrentHangStatus();
        if (null != R) {
            let t = f.default.getCustomHangStatus();
            e.push({
                type: T.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: R,
                details: null == t ? void 0 : t.status,
                emoji: null == t ? void 0 : t.emoji
            })
        }!s(I, e) && (I = e)
    }
    class y extends o.default.Store {
        initialize() {
            this.waitFor(_.default, u.default, S.default, p.default, h.default, m.default, f.default), this.syncWith([E.default, f.default], () => C())
        }
        getActivities() {
            return I
        }
        getPrimaryActivity() {
            return I[0]
        }
        getApplicationActivity(e) {
            return this.findActivity(t => t.application_id === e)
        }
        getCustomStatusActivity() {
            return this.findActivity(e => e.type === T.ActivityTypes.CUSTOM_STATUS)
        }
        findActivity(e) {
            return I.find(e)
        }
        getApplicationActivities() {
            return A
        }
    }
    y.displayName = "LocalActivityStore";
    var N = new y(l.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                localActivities: t
            } = e;
            A = {
                ...t
            }, C()
        },
        START_SESSION: function() {
            A = {}, C()
        },
        LOCAL_ACTIVITY_UPDATE: function(e) {
            let {
                socketId: t,
                activity: n
            } = e;
            if (s(A[t], n)) return !1;
            null != n ? A[t] = n : delete A[t], C()
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                socketId: t
            } = e;
            delete A[t], C()
        },
        RUNNING_GAMES_CHANGE: C,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: C,
        SPOTIFY_PLAYER_STATE: C,
        SPOTIFY_PLAYER_PLAY: C,
        STREAMING_UPDATE: C,
        USER_CONNECTIONS_UPDATE: C,
        STREAM_START: C,
        STREAM_STOP: C,
        USER_SETTINGS_PROTO_UPDATE: C,
        EMBEDDED_ACTIVITY_OPEN: C,
        EMBEDDED_ACTIVITY_CLOSE: C,
        UPDATE_HANG_STATUS: C
    })
}