function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("627445"),
        r = n.n(s),
        o = n("118810"),
        u = n("446674"),
        d = n("77078"),
        c = n("86621"),
        f = n("376556"),
        m = n("118033"),
        p = n("42203"),
        h = n("697218"),
        E = n("800762"),
        g = n("145131"),
        C = n("313873"),
        S = n("429928"),
        T = n("36539"),
        v = n("698372"),
        I = n("770370"),
        _ = n("667618"),
        N = n("865677"),
        A = n("15874"),
        x = n("774713"),
        y = n("510788"),
        O = n("756731"),
        R = n("762806"),
        M = n("438278"),
        L = n("898481"),
        P = n("49111"),
        b = n("279453"),
        j = (0, c.default)(e => {
            let t, {
                    activity: n,
                    user: i,
                    applicationStream: s,
                    className: c,
                    guildId: j,
                    channelId: U,
                    source: D,
                    color: k = d.Button.Colors.WHITE,
                    look: w = d.Button.Looks.OUTLINED,
                    type: F,
                    onAction: G,
                    isEmbedded: B = !1
                } = e,
                H = (0, v.default)(),
                V = (0, u.useStateFromStores)([h.default], () => {
                    let e = h.default.getCurrentUser();
                    return r(null != e, "UserActivityActions: currentUser cannot be undefined"), e
                }),
                K = F === C.Types.PROFILE || F === C.Types.PROFILE_V2,
                W = F === C.Types.STREAM_PREVIEW || null != s,
                Y = (0, S.default)(n),
                z = (0, m.isStageActivity)(n),
                Z = K ? g.default.Align.END : g.default.Align.STRETCH,
                J = Y || W ? g.default.Direction.HORIZONTAL : g.default.Direction.VERTICAL,
                q = (null == n ? void 0 : n.type) === P.ActivityTypes.HANG_STATUS,
                X = (0, u.useStateFromStores)([E.default, p.default], () => {
                    var e;
                    return q ? p.default.getChannel(null === (e = E.default.getVoiceStateForUser(i.id)) || void 0 === e ? void 0 : e.channelId) : null
                });
            if ((0, T.default)(n)) t = [(0, l.jsx)(I.default, {
                look: w,
                color: k,
                platform: f.default.get(P.PlatformTypes.XBOX)
            }, "ConnectPlatformActivityButton")];
            else if ((null == n ? void 0 : n.platform) != null && [P.ActivityGamePlatforms.PS4, P.ActivityGamePlatforms.PS5].includes(n.platform)) t = [(0, l.jsx)(I.default, {
                look: w,
                color: k,
                platform: f.default.get(P.PlatformTypes.PLAYSTATION)
            }, "ConnectPlatformActivityButton")];
            else if (Y) {
                let e = (0, l.jsx)(R.default, {
                        activity: n,
                        user: i,
                        color: k,
                        look: w,
                        guildId: j,
                        channelId: U,
                        source: D
                    }, "spotify-activity-sync-button"),
                    a = (0, l.jsx)(O.default, {
                        activity: n,
                        user: i,
                        color: k,
                        look: w,
                        guildId: j,
                        channelId: U,
                        source: D
                    }, "spotify-activity-play-button");
                t = [a, e]
            } else if (z) {
                let e = (0, m.unpackStageChannelParty)(n);
                null != e && (t = [(0, l.jsx)(x.default, {
                    guildId: e.guildId,
                    channelId: e.channelId,
                    color: k,
                    look: w,
                    isProfile: K
                }, e.channelId)])
            } else if (W) {
                let e = (0, l.jsx)(L.default, {
                    isCurrentUser: V.id === i.id,
                    color: k,
                    look: w,
                    applicationStream: s
                }, "watch-button");
                t = [e]
            } else if (q && null != X) {
                let e = (0, l.jsx)(A.default, {
                    color: k,
                    look: w,
                    hangStatusChannel: X
                }, "hang-status-button");
                t = [e]
            } else {
                let e = (0, l.jsx)(M.default, {
                        activity: n,
                        color: k,
                        look: w
                    }, "watch-button"),
                    a = (0, l.jsx)(N.default, {
                        activity: n,
                        currentEmbeddedApplication: H,
                        user: i,
                        isCurrentUser: V.id === i.id,
                        color: k,
                        look: w,
                        isEmbedded: B
                    }, "join-activity-button"),
                    s = (0, l.jsx)(y.default, {
                        activity: n,
                        user: i,
                        color: k,
                        look: w
                    }, "notify-button"),
                    r = (0, l.jsx)(_.default, {
                        user: i,
                        color: k,
                        look: w,
                        activity: n
                    }, "custom-activity-button");
                if (null == a && null == s && null == e && null == r) return null;
                t = [a, s, e, r]
            }
            let Q = J === g.default.Direction.VERTICAL;
            return (0, l.jsx)(g.default, {
                grow: 0,
                align: Z,
                direction: J,
                wrap: Q ? g.default.Wrap.WRAP : g.default.Wrap.NO_WRAP,
                className: a(c, b.buttonsWrapper, Q ? b.vertical : b.horizontal),
                onClick: function(e) {
                    (0, o.isElement)(e.target) && "BUTTON" === e.target.nodeName && (null == G || G())
                },
                children: t
            })
        })
}