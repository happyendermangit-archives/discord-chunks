function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("499237"),
        a = n("846519"),
        o = n("692547"),
        l = n("481060"),
        u = n("835473"),
        d = n("43205"),
        _ = n("55935"),
        c = n("506071"),
        E = n("689938"),
        I = n("40803");
    let T = e => {
            let {
                startTime: t
            } = e, [n, s] = r.useState(Date.now()), o = (0, c.useIsWindowFocused)(), u = r.useMemo(() => {
                let {
                    hours: e
                } = (0, _.diffAsUnits)(t, n);
                return e > 0 ? 3e5 : 1e3
            }, [t, n]);
            r.useEffect(() => {
                let e = new a.Interval;
                return e.start(u, () => {
                    s(Date.now())
                }), !o && e.stop(), () => e.stop()
            }, [u, o]);
            let d = r.useMemo(() => f(t, n), [t, n]);
            return (0, i.jsx)(l.Text, {
                variant: "text-xs/normal",
                className: I.playtimeText,
                tabularNumbers: !0,
                children: d
            })
        },
        f = (e, t) => {
            let {
                seconds: n,
                minutes: i,
                hours: r
            } = (0, _.diffAsUnits)(e, t);

            function s(e) {
                return String(e).padStart(2, "0")
            }
            return E.default.Messages.USER_PROFILE_ACTIVE_PLAYING_TIMESTAMP.format({
                hours: r,
                minutes: r > 0 ? s(i) : i,
                seconds: s(n)
            })
        };
    t.default = r.memo(function(e) {
        var t, n, r;
        let {
            activity: a
        } = e, _ = null === (t = (0, u.useGetOrFetchApplication)(null == a ? void 0 : a.application_id)) || void 0 === t ? void 0 : t.getIconURL(128), c = null !== (r = null === (n = a.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== r ? r : a.created_at;
        return (0, i.jsxs)("div", {
            className: I.cardContainer,
            children: [(0, i.jsx)(d.ContentImage, {
                src: _,
                size: 40,
                className: I.contentImage
            }), (0, i.jsxs)("div", {
                className: I.infoContainer,
                children: [(0, i.jsx)(l.Heading, {
                    variant: "heading-sm/normal",
                    color: "text-secondary",
                    className: I.title,
                    children: E.default.Messages.USER_PROFILE_FORMATTED_PLAYING_GAME.format({
                        renderGameNameHook: (e, t) => (0, i.jsx)(l.Heading, {
                            variant: "heading-sm/semibold",
                            color: "text-secondary",
                            className: I.activityName,
                            children: a.name
                        }, t)
                    })
                }), null != c && (0, i.jsxs)("div", {
                    className: I.playtimeContainer,
                    children: [(0, i.jsx)(s.GameControllerIcon, {
                        width: 12,
                        height: 12,
                        color: o.default.colors.STATUS_POSITIVE
                    }), (0, i.jsx)(T, {
                        startTime: c
                    })]
                })]
            })]
        })
    })
}