function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("499237"),
        a = n("692547"),
        o = n("835473"),
        l = n("443487"),
        u = n("43205"),
        d = n("371991"),
        _ = n("55935"),
        c = n("689938"),
        E = n("40803");
    t.default = r.memo(function(e) {
        var t, n, I, T;
        let {
            activity: f
        } = e, S = null === (t = (0, o.useGetOrFetchApplication)(null == f ? void 0 : f.application_id)) || void 0 === t ? void 0 : t.getIconURL(128), h = null !== (T = null !== (I = null === (n = f.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== I ? I : f.created_at) && void 0 !== T ? T : 0, [A, m] = r.useState(Date.now()), {
            seconds: N,
            minutes: p,
            hours: O
        } = (0, _.diffAsUnits)(h, A);
        return (0, i.jsxs)("div", {
            className: E.cardContainer,
            children: [(0, i.jsx)(u.ContentImage, {
                src: S,
                size: 48
            }), (0, i.jsxs)(l.CardInfoSection, {
                children: [(0, i.jsx)(l.CardTitle, {
                    children: c.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYING_GAME.format({
                        gameName: f.name
                    })
                }), null != h && (0, i.jsxs)("div", {
                    className: E.playtimeContainer,
                    children: [(0, i.jsx)(s.GameControllerIcon, {
                        width: 12,
                        height: 12,
                        color: a.default.colors.STATUS_POSITIVE
                    }), (0, i.jsx)(d.ActiveTimestampFromDuration, {
                        startTime: h,
                        seconds: N,
                        minutes: p,
                        hours: O,
                        now: A,
                        setNow: m,
                        textColor: "status-positive"
                    })]
                })]
            })]
        })
    })
}