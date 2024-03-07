function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSpotifyPlayAction: function() {
            return T
        },
        useSpotifySyncAction: function() {
            return v
        },
        useSpotifyJoinAction: function() {
            return I
        }
    }), n("222007");
    var l = n("884691"),
        i = n("446674"),
        a = n("862337"),
        s = n("84339"),
        r = n("271938"),
        o = n("718517"),
        u = n("158998"),
        d = n("662285"),
        c = n("782911"),
        f = n("629414"),
        m = n("53887"),
        p = n("486150"),
        h = n("555759"),
        E = n("450484");
    let g = 30 * o.default.Millis.SECOND;

    function S(e) {
        let {
            currentUserTrackId: t,
            syncingWithUser: n,
            syncingWithParty: i
        } = e, [r, o] = l.useState(!1), [u] = l.useState(() => new a.Timeout), d = (0, s.default)(t);
        l.useEffect(() => {
            r && (t !== d || n || i) && (o(!1), u.stop())
        }, [t, d, n, i, r, u]);
        let c = l.useCallback(() => {
                o(!0), u.start(g, () => o(!1))
            }, [u]),
            f = l.useCallback(() => {
                o(!1), u.stop()
            }, [u]);
        return l.useEffect(() => () => u.stop(), [u]), {
            loading: r,
            startLoading: c,
            clearLoading: f
        }
    }

    function C(e, t) {
        return (0, i.useStateFromStoresObject)([d.default, r.default], () => (0, m.default)(d.default, r.default, t, e), [e, t])
    }

    function T(e, t, n) {
        let i = C(e, t),
            {
                notPlayable: a,
                isCurrentUser: s,
                playingSameTrack: r
            } = i,
            {
                loading: o,
                startLoading: u,
                clearLoading: d
            } = S(i),
            m = l.useCallback(() => {
                u(), (0, h.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_PLAY, n).catch(d)
            }, [i, n, u, d]);
        return {
            label: (0, c.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_PLAY),
            tooltip: (0, f.default)(i, E.SpotifyActionTypes.USER_ACTIVITY_PLAY),
            disabled: !o && (s || a || r),
            loading: o,
            onClick: m,
            spotifyData: i
        }
    }

    function v(e, t, n, i) {
        let a = null != i ? i : u.default.getName(t),
            s = C(e, t),
            {
                syncingWithUser: r,
                syncingWithParty: o,
                isCurrentUser: d
            } = s,
            {
                loading: m,
                startLoading: h,
                clearLoading: g
            } = S(s),
            T = l.useCallback(() => {
                h(), (0, p.default)(s, E.SpotifyActionTypes.USER_ACTIVITY_SYNC, n).catch(g)
            }, [s, n, h, g]);
        return {
            label: (0, c.default)(s, E.SpotifyActionTypes.USER_ACTIVITY_SYNC),
            tooltip: (0, f.default)(s, E.SpotifyActionTypes.USER_ACTIVITY_SYNC, a),
            disabled: !m && (d || r || o),
            loading: m,
            onClick: T,
            spotifyData: s
        }
    }

    function I(e, t, n) {
        let i = C(e, t),
            {
                notPlayable: a,
                syncingWithUser: s,
                syncingWithParty: r,
                isCurrentUser: o
            } = i,
            {
                loading: u,
                startLoading: d,
                clearLoading: m
            } = S(i),
            h = l.useCallback(() => {
                d(), (0, p.default)(i, E.SpotifyActionTypes.EMBED_SYNC, n).catch(m)
            }, [i, n, d, m]);
        return {
            label: (0, c.default)(i, E.SpotifyActionTypes.EMBED_SYNC),
            tooltip: (0, f.default)(i, E.SpotifyActionTypes.EMBED_SYNC),
            disabled: !u && (o || s || r || a),
            loading: u,
            onClick: h,
            spotifyData: i
        }
    }
}