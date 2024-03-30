function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("188104"),
        l = n("898511"),
        c = n("784184"),
        f = n("690036"),
        d = n("386823"),
        _ = n("705064"),
        E = n("935741"),
        p = n("208454"),
        m = n("665863"),
        y = n("143953"),
        I = n("783479"),
        h = n("157941"),
        O = n("99406"),
        T = n("580845"),
        S = n("756112"),
        v = n("418420"),
        g = n("227951"),
        A = n("154637"),
        b = n("909082"),
        N = n("760112"),
        R = n("296149"),
        C = n("230100"),
        P = n("178340"),
        D = n("322638"),
        L = n("281767"),
        M = n("581178");
    t.default = (0, f.default)(function(e) {
        var t, n = e.activity,
            o = e.user,
            a = e.applicationStream,
            f = e.className,
            U = e.guildId,
            w = e.channelId,
            k = e.source,
            G = e.color,
            B = void 0 === G ? c.Button.Colors.WHITE : G,
            j = e.look,
            F = void 0 === j ? c.Button.Looks.OUTLINED : j,
            V = e.type,
            H = e.onAction,
            x = e.isEmbedded,
            Y = (0, T.default)(),
            W = (0, l.useStateFromStores)([p.default], function() {
                var e = p.default.getCurrentUser();
                return u()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
            }),
            K = V === I.Types.PROFILE || V === I.Types.PROFILE_V2,
            z = V === I.Types.STREAM_PREVIEW || null != a,
            X = (0, h.default)(n),
            q = (0, _.isStageActivity)(n),
            Q = K ? y.default.Align.END : y.default.Align.STRETCH,
            J = X || z ? y.default.Direction.HORIZONTAL : y.default.Direction.VERTICAL,
            Z = (null == n ? void 0 : n.type) === L.ActivityTypes.HANG_STATUS,
            $ = (0, l.useStateFromStores)([m.default, E.default], function() {
                var e;
                return Z ? E.default.getChannel(null === (e = m.default.getVoiceStateForUser(o.id)) || void 0 === e ? void 0 : e.channelId) : null
            });
        if ((0, O.default)(n)) t = [r.createElement(S.default, {
            key: "ConnectPlatformActivityButton",
            look: F,
            color: B,
            platform: d.default.get(L.PlatformTypes.XBOX)
        })];
        else if ((null == n ? void 0 : n.platform) != null && [L.ActivityGamePlatforms.PS4, L.ActivityGamePlatforms.PS5].includes(n.platform)) t = [r.createElement(S.default, {
            key: "ConnectPlatformActivityButton",
            look: F,
            color: B,
            platform: d.default.get(L.PlatformTypes.PLAYSTATION)
        })];
        else if (X) {
            var ee = r.createElement(C.default, {
                key: "spotify-activity-sync-button",
                activity: n,
                user: o,
                color: B,
                look: F,
                guildId: U,
                channelId: w,
                source: k
            });
            t = [r.createElement(R.default, {
                key: "spotify-activity-play-button",
                activity: n,
                user: o,
                color: B,
                look: F,
                guildId: U,
                channelId: w,
                source: k
            }), ee]
        } else if (q) {
            var et = (0, _.unpackStageChannelParty)(n);
            null != et && (t = [r.createElement(b.default, {
                key: et.channelId,
                guildId: et.guildId,
                channelId: et.channelId,
                color: B,
                look: F,
                isProfile: K
            })])
        } else if (z) t = [r.createElement(D.default, {
            isCurrentUser: W.id === o.id,
            key: "watch-button",
            color: B,
            look: F,
            applicationStream: a
        })];
        else if (Z && null != $) t = [r.createElement(A.default, {
            key: "hang-status-button",
            color: B,
            look: F,
            hangStatusChannel: $
        })];
        else {
            var en = r.createElement(P.default, {
                    key: "watch-button",
                    activity: n,
                    color: B,
                    look: F
                }),
                er = r.createElement(g.default, {
                    activity: n,
                    currentEmbeddedApplication: Y,
                    key: "join-activity-button",
                    user: o,
                    isCurrentUser: W.id === o.id,
                    color: B,
                    look: F,
                    isEmbedded: void 0 !== x && x
                }),
                eo = r.createElement(N.default, {
                    key: "notify-button",
                    activity: n,
                    user: o,
                    color: B,
                    look: F
                }),
                ei = r.createElement(v.default, {
                    key: "custom-activity-button",
                    user: o,
                    color: B,
                    look: F,
                    activity: n
                });
            if (null == er && null == eo && null == en && null == ei) return null;
            t = [er, eo, en, ei]
        }
        var ea = J === y.default.Direction.VERTICAL;
        return r.createElement(y.default, {
            grow: 0,
            align: Q,
            direction: J,
            wrap: ea ? y.default.Wrap.WRAP : y.default.Wrap.NO_WRAP,
            className: i()(f, M.buttonsWrapper, ea ? M.vertical : M.horizontal),
            onClick: function(e) {
                (0, s.isElement)(e.target) && "BUTTON" === e.target.nodeName && (null == H || H())
            }
        }, t)
    })
}