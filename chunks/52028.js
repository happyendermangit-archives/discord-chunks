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
        f = n("161454"),
        _ = n("32346"),
        h = n("925880"),
        E = n("662285"),
        g = n("845579"),
        m = n("374363"),
        p = n("373469"),
        S = n("848872"),
        v = n("49111"),
        T = n("782340");
    let I = [],
        C = {};

    function A() {
        let e = [],
            t = g.CustomStatusSetting.getSetting();
        null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, c.getActivityFromCustomStatus)(t));
        let n = h.default.getActivities();
        e.push(...n);
        let i = S.default.getStream();
        null != i && e.push({
            type: v.ActivityTypes.STREAMING,
            ...i
        });
        let r = new Set,
            o = new Set;
        a.forEach(C, t => {
            null != t.application_id && (r.add(t.name), o.add(t.application_id), e.push(t))
        }), u.default.getSelfEmbeddedActivities().forEach(t => {
            var n;
            let {
                applicationId: i
            } = t;
            if (o.has(i)) return;
            let s = null === (n = d.default.getApplication(i)) || void 0 === n ? void 0 : n.name;
            e.push({
                type: v.ActivityTypes.PLAYING,
                name: null != s ? s : T.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                application_id: i,
                flags: v.ActivityFlags.EMBEDDED
            })
        });
        let l = f.default.getVisibleGame(),
            m = null != l && null != l.name && r.has(l.name),
            A = null != l && l.isLauncher,
            y = p.default.getCurrentUserActiveStream();
        null != l && null != l.name && !(m || A && !(null != y)) && e.push({
            type: v.ActivityTypes.PLAYING,
            name: l.name,
            application_id: l.id,
            timestamps: {
                start: l.start
            }
        });
        let N = E.default.getActivity();
        null != N && e.push({
            type: v.ActivityTypes.LISTENING,
            ...N
        });
        let R = _.default.getCurrentHangStatus();
        if (null != R) {
            let t = _.default.getCustomHangStatus();
            e.push({
                type: v.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: R,
                details: null == t ? void 0 : t.status,
                emoji: null == t ? void 0 : t.emoji
            })
        }!s(I, e) && (I = e)
    }
    class y extends o.default.Store {
        initialize() {
            this.waitFor(f.default, u.default, S.default, p.default, E.default, m.default, _.default), this.syncWith([h.default, _.default], () => A())
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
            return this.findActivity(e => e.type === v.ActivityTypes.CUSTOM_STATUS)
        }
        findActivity(e) {
            return I.find(e)
        }
        getApplicationActivities() {
            return C
        }
    }
    y.displayName = "LocalActivityStore";
    var N = new y(l.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                localActivities: t
            } = e;
            C = {
                ...t
            }, A()
        },
        START_SESSION: function() {
            C = {}, A()
        },
        LOCAL_ACTIVITY_UPDATE: function(e) {
            let {
                socketId: t,
                activity: n
            } = e;
            if (s(C[t], n)) return !1;
            null != n ? C[t] = n : delete C[t], A()
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                socketId: t
            } = e;
            delete C[t], A()
        },
        RUNNING_GAMES_CHANGE: A,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: A,
        SPOTIFY_PLAYER_STATE: A,
        SPOTIFY_PLAYER_PLAY: A,
        STREAMING_UPDATE: A,
        USER_CONNECTIONS_UPDATE: A,
        STREAM_START: A,
        STREAM_STOP: A,
        USER_SETTINGS_PROTO_UPDATE: A,
        EMBEDDED_ACTIVITY_OPEN: A,
        EMBEDDED_ACTIVITY_CLOSE: A,
        UPDATE_HANG_STATUS: A
    })
}