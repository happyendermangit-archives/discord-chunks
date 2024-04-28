function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUPPORTED_ACTIVITY_TYPES: function() {
            return S
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("499237"),
        a = n("1385"),
        o = n("692547"),
        l = n("835473"),
        u = n("443487"),
        d = n("43205"),
        _ = n("371991"),
        c = n("81063"),
        E = n("55935"),
        I = n("981631"),
        T = n("689938"),
        f = n("992781");
    let S = new Set([I.ActivityTypes.PLAYING, I.ActivityTypes.LISTENING]);
    t.default = r.memo(function(e) {
        var t, n, S, h;
        let {
            activity: A
        } = e, {
            assets: m,
            application_id: N
        } = A, p = null === (t = (0, l.useGetOrFetchApplication)(N)) || void 0 === t ? void 0 : t.getIconURL(128), O = (0, c.getAssetImage)(N, null == m ? void 0 : m.large_image, 128), R = null !== (h = null !== (S = null === (n = A.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== S ? S : A.created_at) && void 0 !== h ? h : 0, [C, g] = r.useState(Date.now()), {
            seconds: L,
            minutes: D,
            hours: v
        } = (0, E.diffAsUnits)(R, C), {
            Icon: M,
            title: y,
            iconColor: P,
            textColor: U
        } = function(e) {
            switch (e.type) {
                case I.ActivityTypes.PLAYING:
                    return {
                        Icon: s.GameControllerIcon, title: T.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
                            gameName: e.name
                        }), iconColor: o.default.colors.STATUS_POSITIVE, textColor: "status-positive"
                    };
                case I.ActivityTypes.LISTENING:
                    var t;
                    return {
                        Icon: a.RecordPlayerIcon, title: T.default.Messages.USER_PROFILE_ACTIVITY_LISTENING_TO.format({
                            name: null !== (t = e.state) && void 0 !== t ? t : e.name
                        }), iconColor: o.default.colors.TEXT_SECONDARY, textColor: "text-secondary"
                    };
                default:
                    return {
                        Icon: s.GameControllerIcon, title: T.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
                            gameName: e.name
                        }), iconColor: o.default.colors.STATUS_POSITIVE, textColor: "status-positive"
                    }
            }
        }(A);
        return (0, i.jsxs)("div", {
            className: f.cardContainer,
            children: [(0, i.jsx)(d.ContentImage, {
                src: null != p ? p : O,
                size: 48
            }), (0, i.jsxs)(u.CardInfoSection, {
                children: [(0, i.jsx)(u.CardTitle, {
                    children: y
                }), null != R && (0, i.jsxs)("div", {
                    className: f.playtimeContainer,
                    children: [(0, i.jsx)(M, {
                        width: 12,
                        height: 12,
                        color: P
                    }), (0, i.jsx)(_.ActiveTimestampFromDuration, {
                        startTime: R,
                        seconds: L,
                        minutes: D,
                        hours: v,
                        now: C,
                        setNow: g,
                        textColor: U
                    })]
                })]
            })]
        })
    })
}