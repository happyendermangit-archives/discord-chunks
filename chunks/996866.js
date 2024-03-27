function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSpotifyPlayAction: function() {
            return S
        },
        useSpotifySyncAction: function() {
            return C
        },
        useSpotifyJoinAction: function() {
            return T
        }
    }), n("222007");
    var i = n("884691"),
        l = n("446674"),
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
        x = n("450484");
    let E = 30 * o.default.Millis.SECOND;

    function y(e) {
        let {
            currentUserTrackId: t,
            syncingWithUser: n,
            syncingWithParty: l
        } = e, [r, o] = i.useState(!1), [u] = i.useState(() => new a.Timeout), d = (0, s.default)(t);
        i.useEffect(() => {
            r && (t !== d || n || l) && (o(!1), u.stop())
        }, [t, d, n, l, r, u]);
        let c = i.useCallback(() => {
                o(!0), u.start(E, () => o(!1))
            }, [u]),
            f = i.useCallback(() => {
                o(!1), u.stop()
            }, [u]);
        return i.useEffect(() => () => u.stop(), [u]), {
            loading: r,
            startLoading: c,
            clearLoading: f
        }
    }

    function g(e, t) {
        return (0, l.useStateFromStoresObject)([d.default, r.default], () => (0, m.default)(d.default, r.default, t, e), [e, t])
    }

    function S(e, t, n) {
        let l = g(e, t),
            {
                notPlayable: a,
                isCurrentUser: s,
                playingSameTrack: r
            } = l,
            {
                loading: o,
                startLoading: u,
                clearLoading: d
            } = y(l),
            m = i.useCallback(() => {
                u(), (0, h.default)(l, x.SpotifyActionTypes.USER_ACTIVITY_PLAY, n).catch(d)
            }, [l, n, u, d]);
        return {
            label: (0, c.default)(l, x.SpotifyActionTypes.USER_ACTIVITY_PLAY),
            tooltip: (0, f.default)(l, x.SpotifyActionTypes.USER_ACTIVITY_PLAY),
            disabled: !o && (s || a || r),
            loading: o,
            onClick: m,
            spotifyData: l
        }
    }

    function C(e, t, n, l) {
        let a = null != l ? l : u.default.getName(t),
            s = g(e, t),
            {
                syncingWithUser: r,
                syncingWithParty: o,
                isCurrentUser: d
            } = s,
            {
                loading: m,
                startLoading: h,
                clearLoading: E
            } = y(s),
            S = i.useCallback(() => {
                h(), (0, p.default)(s, x.SpotifyActionTypes.USER_ACTIVITY_SYNC, n).catch(E)
            }, [s, n, h, E]);
        return {
            label: (0, c.default)(s, x.SpotifyActionTypes.USER_ACTIVITY_SYNC),
            tooltip: (0, f.default)(s, x.SpotifyActionTypes.USER_ACTIVITY_SYNC, a),
            disabled: !m && (d || r || o),
            loading: m,
            onClick: S,
            spotifyData: s
        }
    }

    function T(e, t, n) {
        let l = g(e, t),
            {
                notPlayable: a,
                syncingWithUser: s,
                syncingWithParty: r,
                isCurrentUser: o
            } = l,
            {
                loading: u,
                startLoading: d,
                clearLoading: m
            } = y(l),
            h = i.useCallback(() => {
                d(), (0, p.default)(l, x.SpotifyActionTypes.EMBED_SYNC, n).catch(m)
            }, [l, n, d, m]);
        return {
            label: (0, c.default)(l, x.SpotifyActionTypes.EMBED_SYNC),
            tooltip: (0, f.default)(l, x.SpotifyActionTypes.EMBED_SYNC),
            disabled: !u && (o || s || r || a),
            loading: u,
            onClick: h,
            spotifyData: l
        }
    }
}