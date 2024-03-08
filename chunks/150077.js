function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSeasonalGiftingBody: function() {
            return p
        },
        default: function() {
            return h
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("394846"),
        s = n("77078"),
        r = n("841792"),
        o = n("599110"),
        u = n("49111"),
        d = n("994428"),
        c = n("782340"),
        f = n("554584");

    function p(e) {
        return e || !(a.isMobile || a.isTablet) ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : c.default.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
    }

    function m(e) {
        let {
            onComplete: t,
            onDMCheckItOutClick: d,
            isDM: m
        } = e;
        l.useEffect(() => {
            o.default.track(u.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
                type: "holiday_gifting_tip"
            })
        }, []);
        let h = l.useMemo(() => [() => n.el("540902").then(n.t.bind(n, "540902", 19)), () => n.el("915604").then(n.t.bind(n, "915604", 19)), () => n.el("166505").then(n.t.bind(n, "166505", 19))], []),
            x = m || !(a.isMobile || a.isTablet),
            E = x ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : c.default.Messages.SEASONAL_GIFTING_POPUP_HEADER,
            y = x ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : c.default.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
        return (0, i.jsxs)("div", {
            className: f.container,
            children: [(0, i.jsx)(r.default, {
                className: f.image,
                animationData: h
            }), (0, i.jsxs)("div", {
                className: f.body,
                children: [(0, i.jsx)(s.Heading, {
                    className: f.text,
                    variant: "heading-sm/semibold",
                    children: E
                }), (0, i.jsx)(s.Text, {
                    className: f.text,
                    variant: "text-sm/normal",
                    children: p(m)
                })]
            }), (0, i.jsxs)("div", {
                className: f.dmButtonContainer,
                children: [(0, i.jsx)(s.Button, {
                    className: f.dmButton,
                    look: s.Button.Looks.FILLED,
                    color: s.Button.Colors.BRAND,
                    onClick: () => t(),
                    children: c.default.Messages.GOT_IT
                }), (0, i.jsx)(s.Button, {
                    className: f.dmButton,
                    look: s.Button.Looks.INVERTED,
                    color: s.Button.Colors.BRAND,
                    onClick: () => d(),
                    children: y
                })]
            }), (0, i.jsx)("div", {
                className: f.pointer
            })]
        })
    }

    function h(e) {
        let {
            onComplete: t,
            onDMCheckItOutClick: n,
            markAsDismissed: l,
            isDM: a
        } = e;
        return (0, i.jsx)(s.Popout, {
            spacing: 0,
            shouldShow: !0,
            position: "top",
            align: "center",
            renderPopout: e => (0, i.jsx)(m, {
                ...e,
                onComplete: () => {
                    t(), l(d.ContentDismissActionType.USER_DISMISS)
                },
                onDMCheckItOutClick: () => {
                    n(), t(), l(d.ContentDismissActionType.TAKE_ACTION)
                },
                isDM: a
            }),
            onRequestClose: () => void 0,
            closeOnScroll: !1,
            ignoreModalClicks: !0,
            children: () => (0, i.jsx)("div", {
                className: f.popoutTarget
            })
        })
    }
}