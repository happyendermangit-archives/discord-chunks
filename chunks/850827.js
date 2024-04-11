function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("512722"),
        o = n.n(a),
        l = n("374470"),
        u = n("442837"),
        d = n("481060"),
        _ = n("730749"),
        c = n("726542"),
        E = n("750154"),
        I = n("592125"),
        T = n("594174"),
        f = n("979651"),
        S = n("285952"),
        A = n("543595"),
        h = n("503438"),
        m = n("802856"),
        N = n("952561"),
        O = n("606925"),
        p = n("719216"),
        R = n("429589"),
        C = n("276149"),
        g = n("636245"),
        L = n("697761"),
        D = n("611459"),
        v = n("544671"),
        M = n("757182"),
        y = n("910424"),
        P = n("981631"),
        U = n("581178");
    t.default = (0, _.default)(e => {
        let t, {
                activity: n,
                user: r,
                applicationStream: a,
                className: _,
                guildId: b,
                channelId: G,
                source: w,
                color: k = d.Button.Colors.WHITE,
                look: B = d.Button.Looks.OUTLINED,
                type: V,
                onAction: F,
                isEmbedded: x = !1
            } = e,
            H = (0, N.default)(),
            Y = (0, u.useStateFromStores)([T.default], () => {
                let e = T.default.getCurrentUser();
                return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
            }),
            j = V === A.Types.PROFILE || V === A.Types.PROFILE_V2,
            W = V === A.Types.STREAM_PREVIEW || null != a,
            K = (0, h.default)(n),
            z = (0, E.isStageActivity)(n),
            X = j ? S.default.Align.END : S.default.Align.STRETCH,
            Q = K || W ? S.default.Direction.HORIZONTAL : S.default.Direction.VERTICAL,
            q = (null == n ? void 0 : n.type) === P.ActivityTypes.HANG_STATUS,
            J = (0, u.useStateFromStores)([f.default, I.default], () => {
                var e;
                return q ? I.default.getChannel(null === (e = f.default.getVoiceStateForUser(r.id)) || void 0 === e ? void 0 : e.channelId) : null
            });
        if ((0, m.default)(n)) t = [(0, i.jsx)(O.default, {
            look: B,
            color: k,
            platform: c.default.get(P.PlatformTypes.XBOX)
        }, "ConnectPlatformActivityButton")];
        else if ((null == n ? void 0 : n.platform) != null && [P.ActivityGamePlatforms.PS4, P.ActivityGamePlatforms.PS5].includes(n.platform)) t = [(0, i.jsx)(O.default, {
            look: B,
            color: k,
            platform: c.default.get(P.PlatformTypes.PLAYSTATION)
        }, "ConnectPlatformActivityButton")];
        else if (K) {
            let e = (0, i.jsx)(v.default, {
                activity: n,
                user: r,
                color: k,
                look: B,
                guildId: b,
                channelId: G,
                source: w
            }, "spotify-activity-sync-button");
            t = [(0, i.jsx)(D.default, {
                activity: n,
                user: r,
                color: k,
                look: B,
                guildId: b,
                channelId: G,
                source: w
            }, "spotify-activity-play-button"), e]
        } else if (z) {
            let e = (0, E.unpackStageChannelParty)(n);
            null != e && (t = [(0, i.jsx)(g.default, {
                guildId: e.guildId,
                channelId: e.channelId,
                color: k,
                look: B,
                isProfile: j
            }, e.channelId)])
        } else if (W) t = [(0, i.jsx)(y.default, {
            isCurrentUser: Y.id === r.id,
            color: k,
            look: B,
            applicationStream: a
        }, "watch-button")];
        else if (q && null != J) t = [(0, i.jsx)(C.default, {
            color: k,
            look: B,
            hangStatusChannel: J
        }, "hang-status-button")];
        else {
            let e = (0, i.jsx)(M.default, {
                    activity: n,
                    color: k,
                    look: B
                }, "watch-button"),
                s = (0, i.jsx)(R.default, {
                    activity: n,
                    currentEmbeddedApplication: H,
                    user: r,
                    isCurrentUser: Y.id === r.id,
                    color: k,
                    look: B,
                    isEmbedded: x
                }, "join-activity-button"),
                a = (0, i.jsx)(L.default, {
                    activity: n,
                    user: r,
                    color: k,
                    look: B
                }, "notify-button"),
                o = (0, i.jsx)(p.default, {
                    user: r,
                    color: k,
                    look: B,
                    activity: n
                }, "custom-activity-button");
            if (null == s && null == a && null == e && null == o) return null;
            t = [s, a, e, o]
        }
        let Z = Q === S.default.Direction.VERTICAL;
        return (0, i.jsx)(S.default, {
            grow: 0,
            align: X,
            direction: Q,
            wrap: Z ? S.default.Wrap.WRAP : S.default.Wrap.NO_WRAP,
            className: s()(_, U.buttonsWrapper, Z ? U.vertical : U.horizontal),
            onClick: function(e) {
                (0, l.isElement)(e.target) && "BUTTON" === e.target.nodeName && (null == F || F())
            },
            children: t
        })
    })
}