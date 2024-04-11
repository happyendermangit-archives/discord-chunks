function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSpotifyJoinAction: function() {
            return O
        },
        useSpotifyPlayAction: function() {
            return m
        },
        useSpotifySyncAction: function() {
            return N
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("846519"),
        a = n("110924"),
        o = n("314897"),
        l = n("70956"),
        u = n("51144"),
        d = n("768419"),
        _ = n("300020"),
        c = n("456190"),
        E = n("239470"),
        I = n("894344"),
        T = n("203777"),
        f = n("616922");
    let S = 30 * l.default.Millis.SECOND;

    function A(e) {
        let {
            currentUserTrackId: t,
            syncingWithUser: n,
            syncingWithParty: r
        } = e, [o, l] = i.useState(!1), [u] = i.useState(() => new s.Timeout), d = (0, a.default)(t);
        i.useEffect(() => {
            o && (t !== d || n || r) && (l(!1), u.stop())
        }, [t, d, n, r, o, u]);
        let _ = i.useCallback(() => {
                l(!0), u.start(S, () => l(!1))
            }, [u]),
            c = i.useCallback(() => {
                l(!1), u.stop()
            }, [u]);
        return i.useEffect(() => () => u.stop(), [u]), {
            loading: o,
            startLoading: _,
            clearLoading: c
        }
    }

    function h(e, t) {
        return (0, r.useStateFromStoresObject)([d.default, o.default], () => (0, E.default)(d.default, o.default, t, e), [e, t])
    }

    function m(e, t, n) {
        let r = h(e, t),
            {
                notPlayable: s,
                isCurrentUser: a,
                playingSameTrack: o
            } = r,
            {
                loading: l,
                startLoading: u,
                clearLoading: d
            } = A(r),
            E = i.useCallback(() => {
                u(), (0, T.default)(r, f.SpotifyActionTypes.USER_ACTIVITY_PLAY, n).catch(d)
            }, [r, n, u, d]);
        return {
            label: (0, _.default)(r, f.SpotifyActionTypes.USER_ACTIVITY_PLAY),
            tooltip: (0, c.default)(r, f.SpotifyActionTypes.USER_ACTIVITY_PLAY),
            disabled: !l && (a || s || o),
            loading: l,
            onClick: E,
            spotifyData: r
        }
    }

    function N(e, t, n, r) {
        let s = null != r ? r : u.default.getName(t),
            a = h(e, t),
            {
                syncingWithUser: o,
                syncingWithParty: l,
                isCurrentUser: d
            } = a,
            {
                loading: E,
                startLoading: T,
                clearLoading: S
            } = A(a),
            m = i.useCallback(() => {
                T(), (0, I.default)(a, f.SpotifyActionTypes.USER_ACTIVITY_SYNC, n).catch(S)
            }, [a, n, T, S]);
        return {
            label: (0, _.default)(a, f.SpotifyActionTypes.USER_ACTIVITY_SYNC),
            tooltip: (0, c.default)(a, f.SpotifyActionTypes.USER_ACTIVITY_SYNC, s),
            disabled: !E && (d || o || l),
            loading: E,
            onClick: m,
            spotifyData: a
        }
    }

    function O(e, t, n) {
        let r = h(e, t),
            {
                notPlayable: s,
                syncingWithUser: a,
                syncingWithParty: o,
                isCurrentUser: l
            } = r,
            {
                loading: u,
                startLoading: d,
                clearLoading: E
            } = A(r),
            T = i.useCallback(() => {
                d(), (0, I.default)(r, f.SpotifyActionTypes.EMBED_SYNC, n).catch(E)
            }, [r, n, d, E]);
        return {
            label: (0, _.default)(r, f.SpotifyActionTypes.EMBED_SYNC),
            tooltip: (0, c.default)(r, f.SpotifyActionTypes.EMBED_SYNC),
            disabled: !u && (l || a || o || s),
            loading: u,
            onClick: T,
            spotifyData: r
        }
    }
}