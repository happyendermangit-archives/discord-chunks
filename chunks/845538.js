function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        },
        getSeasonalGiftingBody: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("873546"),
        a = n("481060"),
        o = n("326413"),
        l = n("626135"),
        u = n("981631"),
        d = n("921944"),
        _ = n("689938"),
        c = n("659877");

    function E(e) {
        return e || !(s.isMobile || s.isTablet) ? _.default.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : _.default.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
    }

    function I(e) {
        let {
            onComplete: t,
            onDMCheckItOutClick: d,
            isDM: I
        } = e;
        r.useEffect(() => {
            l.default.track(u.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
                type: "holiday_gifting_tip"
            })
        }, []);
        let T = r.useMemo(() => [() => n.e("36278").then(n.t.bind(n, "268147", 19)), () => n.e("66902").then(n.t.bind(n, "7171", 19)), () => n.e("99694").then(n.t.bind(n, "55562", 19))], []),
            f = I || !(s.isMobile || s.isTablet),
            S = f ? _.default.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : _.default.Messages.SEASONAL_GIFTING_POPUP_HEADER,
            h = f ? _.default.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : _.default.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
        return (0, i.jsxs)("div", {
            className: c.container,
            children: [(0, i.jsx)(o.default, {
                className: c.image,
                animationData: T
            }), (0, i.jsxs)("div", {
                className: c.body,
                children: [(0, i.jsx)(a.Heading, {
                    className: c.text,
                    variant: "heading-sm/semibold",
                    children: S
                }), (0, i.jsx)(a.Text, {
                    className: c.text,
                    variant: "text-sm/normal",
                    children: E(I)
                })]
            }), (0, i.jsxs)("div", {
                className: c.dmButtonContainer,
                children: [(0, i.jsx)(a.Button, {
                    className: c.dmButton,
                    look: a.Button.Looks.FILLED,
                    color: a.Button.Colors.BRAND,
                    onClick: () => t(),
                    children: _.default.Messages.GOT_IT
                }), (0, i.jsx)(a.Button, {
                    className: c.dmButton,
                    look: a.Button.Looks.INVERTED,
                    color: a.Button.Colors.BRAND,
                    onClick: () => d(),
                    children: h
                })]
            }), (0, i.jsx)("div", {
                className: c.pointer
            })]
        })
    }

    function T(e) {
        let {
            onComplete: t,
            onDMCheckItOutClick: n,
            markAsDismissed: r,
            isDM: s
        } = e;
        return (0, i.jsx)(a.Popout, {
            spacing: 0,
            shouldShow: !0,
            position: "top",
            align: "center",
            renderPopout: e => (0, i.jsx)(I, {
                ...e,
                onComplete: () => {
                    t(), r(d.ContentDismissActionType.USER_DISMISS)
                },
                onDMCheckItOutClick: () => {
                    n(), t(), r(d.ContentDismissActionType.TAKE_ACTION)
                },
                isDM: s
            }),
            onRequestClose: () => void 0,
            closeOnScroll: !1,
            ignoreModalClicks: !0,
            children: () => (0, i.jsx)("div", {
                className: c.popoutTarget
            })
        })
    }
}