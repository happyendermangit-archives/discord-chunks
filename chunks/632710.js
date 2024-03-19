function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("627445"),
        r = n.n(s),
        o = n("118810"),
        u = n("446674"),
        d = n("77078"),
        c = n("86621"),
        f = n("376556"),
        p = n("118033"),
        m = n("42203"),
        h = n("697218"),
        x = n("800762"),
        E = n("145131"),
        y = n("313873"),
        g = n("429928"),
        S = n("36539"),
        C = n("698372"),
        I = n("770370"),
        _ = n("667618"),
        T = n("865677"),
        v = n("15874"),
        N = n("774713"),
        A = n("510788"),
        O = n("756731"),
        R = n("762806"),
        M = n("438278"),
        k = n("898481"),
        L = n("49111"),
        b = n("279453"),
        P = (0, c.default)(e => {
            let t, {
                    activity: n,
                    user: l,
                    applicationStream: s,
                    className: c,
                    guildId: P,
                    channelId: j,
                    source: U,
                    color: D = d.Button.Colors.WHITE,
                    look: w = d.Button.Looks.OUTLINED,
                    type: F,
                    onAction: G,
                    isEmbedded: B = !1
                } = e,
                H = (0, C.default)(),
                V = (0, u.useStateFromStores)([h.default], () => {
                    let e = h.default.getCurrentUser();
                    return r(null != e, "UserActivityActions: currentUser cannot be undefined"), e
                }),
                K = F === y.Types.PROFILE || F === y.Types.PROFILE_V2,
                W = F === y.Types.STREAM_PREVIEW || null != s,
                Y = (0, g.default)(n),
                z = (0, p.isStageActivity)(n),
                Z = K ? E.default.Align.END : E.default.Align.STRETCH,
                J = Y || W ? E.default.Direction.HORIZONTAL : E.default.Direction.VERTICAL,
                q = (null == n ? void 0 : n.type) === L.ActivityTypes.HANG_STATUS,
                X = (0, u.useStateFromStores)([x.default, m.default], () => {
                    var e;
                    return q ? m.default.getChannel(null === (e = x.default.getVoiceStateForUser(l.id)) || void 0 === e ? void 0 : e.channelId) : null
                });
            if ((0, S.default)(n)) t = [(0, i.jsx)(I.default, {
                look: w,
                color: D,
                platform: f.default.get(L.PlatformTypes.XBOX)
            }, "ConnectPlatformActivityButton")];
            else if ((null == n ? void 0 : n.platform) != null && [L.ActivityGamePlatforms.PS4, L.ActivityGamePlatforms.PS5].includes(n.platform)) t = [(0, i.jsx)(I.default, {
                look: w,
                color: D,
                platform: f.default.get(L.PlatformTypes.PLAYSTATION)
            }, "ConnectPlatformActivityButton")];
            else if (Y) {
                let e = (0, i.jsx)(R.default, {
                        activity: n,
                        user: l,
                        color: D,
                        look: w,
                        guildId: P,
                        channelId: j,
                        source: U
                    }, "spotify-activity-sync-button"),
                    a = (0, i.jsx)(O.default, {
                        activity: n,
                        user: l,
                        color: D,
                        look: w,
                        guildId: P,
                        channelId: j,
                        source: U
                    }, "spotify-activity-play-button");
                t = [a, e]
            } else if (z) {
                let e = (0, p.unpackStageChannelParty)(n);
                null != e && (t = [(0, i.jsx)(N.default, {
                    guildId: e.guildId,
                    channelId: e.channelId,
                    color: D,
                    look: w,
                    isProfile: K
                }, e.channelId)])
            } else if (W) {
                let e = (0, i.jsx)(k.default, {
                    isCurrentUser: V.id === l.id,
                    color: D,
                    look: w,
                    applicationStream: s
                }, "watch-button");
                t = [e]
            } else if (q && null != X) {
                let e = (0, i.jsx)(v.default, {
                    color: D,
                    look: w,
                    hangStatusChannel: X
                }, "hang-status-button");
                t = [e]
            } else {
                let e = (0, i.jsx)(M.default, {
                        activity: n,
                        color: D,
                        look: w
                    }, "watch-button"),
                    a = (0, i.jsx)(T.default, {
                        activity: n,
                        currentEmbeddedApplication: H,
                        user: l,
                        isCurrentUser: V.id === l.id,
                        color: D,
                        look: w,
                        isEmbedded: B
                    }, "join-activity-button"),
                    s = (0, i.jsx)(A.default, {
                        activity: n,
                        user: l,
                        color: D,
                        look: w
                    }, "notify-button"),
                    r = (0, i.jsx)(_.default, {
                        user: l,
                        color: D,
                        look: w,
                        activity: n
                    }, "custom-activity-button");
                if (null == a && null == s && null == e && null == r) return null;
                t = [a, s, e, r]
            }
            let Q = J === E.default.Direction.VERTICAL;
            return (0, i.jsx)(E.default, {
                grow: 0,
                align: Z,
                direction: J,
                wrap: Q ? E.default.Wrap.WRAP : E.default.Wrap.NO_WRAP,
                className: a(c, b.buttonsWrapper, Q ? b.vertical : b.horizontal),
                onClick: function(e) {
                    (0, o.isElement)(e.target) && "BUTTON" === e.target.nodeName && (null == G || G())
                },
                children: t
            })
        })
}