function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSeasonalGiftingBody: function() {
            return m
        },
        default: function() {
            return h
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("394846"),
        s = n("77078"),
        r = n("841792"),
        o = n("599110"),
        u = n("49111"),
        d = n("994428"),
        c = n("782340"),
        f = n("554584");

    function m(e) {
        return e || !(a.isMobile || a.isTablet) ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : c.default.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
    }

    function p(e) {
        let {
            onComplete: t,
            onDMCheckItOutClick: d,
            isDM: p
        } = e;
        i.useEffect(() => {
            o.default.track(u.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
                type: "holiday_gifting_tip"
            })
        }, []);
        let h = i.useMemo(() => [() => n.el("540902").then(n.t.bind(n, "540902", 19)), () => n.el("915604").then(n.t.bind(n, "915604", 19)), () => n.el("166505").then(n.t.bind(n, "166505", 19))], []),
            E = p || !(a.isMobile || a.isTablet),
            g = E ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : c.default.Messages.SEASONAL_GIFTING_POPUP_HEADER,
            C = E ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : c.default.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
        return (0, l.jsxs)("div", {
            className: f.container,
            children: [(0, l.jsx)(r.default, {
                className: f.image,
                animationData: h
            }), (0, l.jsxs)("div", {
                className: f.body,
                children: [(0, l.jsx)(s.Heading, {
                    className: f.text,
                    variant: "heading-sm/semibold",
                    children: g
                }), (0, l.jsx)(s.Text, {
                    className: f.text,
                    variant: "text-sm/normal",
                    children: m(p)
                })]
            }), (0, l.jsxs)("div", {
                className: f.dmButtonContainer,
                children: [(0, l.jsx)(s.Button, {
                    className: f.dmButton,
                    look: s.Button.Looks.FILLED,
                    color: s.Button.Colors.BRAND,
                    onClick: () => t(),
                    children: c.default.Messages.GOT_IT
                }), (0, l.jsx)(s.Button, {
                    className: f.dmButton,
                    look: s.Button.Looks.INVERTED,
                    color: s.Button.Colors.BRAND,
                    onClick: () => d(),
                    children: C
                })]
            }), (0, l.jsx)("div", {
                className: f.pointer
            })]
        })
    }

    function h(e) {
        let {
            onComplete: t,
            onDMCheckItOutClick: n,
            markAsDismissed: i,
            isDM: a
        } = e;
        return (0, l.jsx)(s.Popout, {
            spacing: 0,
            shouldShow: !0,
            position: "top",
            align: "center",
            renderPopout: e => (0, l.jsx)(p, {
                ...e,
                onComplete: () => {
                    t(), i(d.ContentDismissActionType.USER_DISMISS)
                },
                onDMCheckItOutClick: () => {
                    n(), t(), i(d.ContentDismissActionType.TAKE_ACTION)
                },
                isDM: a
            }),
            onRequestClose: () => void 0,
            closeOnScroll: !1,
            ignoreModalClicks: !0,
            children: () => (0, l.jsx)("div", {
                className: f.popoutTarget
            })
        })
    }
}