function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileCustomStatusBubble: function() {
            return m
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("264539"),
        u = n("481060"),
        d = n("596454"),
        _ = n("788307"),
        c = n("393903"),
        E = n("594174"),
        I = n("221292"),
        T = n("228168"),
        f = n("981631"),
        S = n("689938"),
        h = n("336428");
    let A = "text-sm/medium";

    function m(e) {
        let {
            statusActivity: t,
            profileType: a,
            user: m,
            onClose: N,
            animate: p = !0,
            hideTooltip: O = !1
        } = e, R = {
            location: {
                page: f.AnalyticsPages.USER_PROFILE,
                section: a === T.UserProfileTypes.BITE_SIZE ? f.AnalyticsSections.PROFILE_POPOUT : f.AnalyticsSections.PROFILE_MODAL
            }
        }, C = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentUser()), g = (null == m ? void 0 : m.id) === (null == C ? void 0 : C.id), [L, v] = r.useState(1), {
            emoji: D
        } = null != t ? t : {}, M = null != D, y = (null == t ? void 0 : t.state) != null && "" !== t.state ? t.state : null, P = null != y && y.length > 0, U = M || P, b = !U && g, G = r.useCallback(e => {
            var t;
            if (null == e) return;
            let n = e.getBoundingClientRect(),
                i = parseFloat(null !== (t = window.getComputedStyle(e).getPropertyValue("line-height")) && void 0 !== t ? t : "0");
            v(Math.floor(n.height / i))
        }, []), w = (0, c.useResizeObserver)(G);
        if (!g && !U) return null;
        let B = () => M ? P ? (0, i.jsx)(d.default, {
                className: h.statusEmojiInline,
                emojiId: D.id,
                emojiName: D.name,
                animated: !!D.animated
            }) : (0, i.jsx)(_.ActivityEmoji, {
                className: h.statusEmojiOnly,
                emoji: D,
                animate: p,
                hideTooltip: O
            }) : null,
            k = () => P ? (0, i.jsx)(u.Text, {
                variant: A,
                className: h.statusText,
                children: y
            }) : null,
            V = () => {
                (0, I.trackUserProfileAction)({
                    action: "PRESS_SET_CUSTOM_STATUS"
                }), null == N || N(), (0, u.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("47484")]).then(n.bind(n, "211065"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        sourceAnalyticsContext: R
                    })
                })
            },
            x = () => U || !g ? null : (0, i.jsxs)(u.Clickable, {
                onClick: V,
                className: h.content,
                children: [(0, i.jsx)(l.CirclePlusIcon, {
                    className: h.addStatusIcon,
                    colorClass: h.addStatusIconColor
                }), (0, i.jsx)(u.Text, {
                    variant: A,
                    className: h.addStatusPrompt,
                    children: S.default.Messages.USER_SETTINGS_ADD_STATUS
                })]
            }),
            F = () => {
                let e = s()({
                    [h.content]: M && !P || L < 2,
                    [h.contentOverflow]: L >= 2
                });
                return (0, i.jsxs)("div", {
                    className: e,
                    ref: w,
                    children: [B(), k()]
                })
            },
            H = s()(h.positionStyle, {
                [h.biteSize]: a === T.UserProfileTypes.BITE_SIZE,
                [h.fullSize]: a === T.UserProfileTypes.FULL_SIZE
            }),
            Y = s()(h.statusBubbleOuter, {
                [h.statusBubbleShape]: 1 === L && !P && M || L > 1,
                [h.statusBubbleSingleLineWithTextShape]: 1 === L && P || b,
                [h.biteSize]: a === T.UserProfileTypes.BITE_SIZE,
                [h.fullSize]: a === T.UserProfileTypes.FULL_SIZE
            }),
            j = s()(h.statusBubble, {
                [h.statusBubbleShape]: 1 === L && !P && M || L > 1,
                [h.statusBubbleSingleLineWithTextShape]: 1 === L && P || b,
                [h.statusBubbleEmojiOnlyPadding]: M && !P,
                [h.statusBubbleWithTextPadding]: P || b,
                [h.statusBubbleWithTextMinWidth]: P,
                [h.statusBubbleCopyStatusCursor]: U,
                [h.statusBubbleAddStatusCursor]: b
            });
        if (a === T.UserProfileTypes.FULL_SIZE) return (0, i.jsx)("div", {
            className: H,
            children: (0, i.jsx)("div", {
                className: Y,
                children: (0, i.jsxs)("span", {
                    className: j,
                    children: [x(), F()]
                })
            })
        });
        let W = s()({
            [h.statusBubbleEmojiOnlyBottomMargin]: M && !P,
            [h.statusBubbleMultiLineBottomMargin]: L > 1 && P
        });
        return (0, i.jsx)("div", {
            className: W,
            children: (0, i.jsx)("div", {
                className: H,
                children: (0, i.jsx)("div", {
                    className: Y,
                    children: (0, i.jsxs)("span", {
                        className: j,
                        children: [x(), F()]
                    })
                })
            })
        })
    }
}