function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileCustomStatusBubble: function() {
            return E
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("596454"),
        u = n("788307"),
        d = n("393903"),
        _ = n("228168"),
        c = n("336428");

    function E(e) {
        let {
            statusActivity: t,
            profileType: n,
            animate: s = !0,
            hideTooltip: E = !1
        } = e, [I, T] = r.useState(1), f = r.useCallback(e => {
            var t;
            if (null == e) return;
            let n = e.getBoundingClientRect(),
                i = parseFloat(null !== (t = window.getComputedStyle(e).getPropertyValue("line-height")) && void 0 !== t ? t : "0");
            T(Math.floor(n.height / i))
        }, []), S = (0, d.useResizeObserver)(f), {
            emoji: h
        } = t, A = null != h, m = null != t.state && "" !== t.state ? t.state : null, N = null != m && m.length > 0;
        if (!A && !N) return null;
        let p = () => A ? N ? (0, i.jsx)(l.default, {
                className: c.statusEmojiInline,
                emojiId: h.id,
                emojiName: h.name,
                animated: !!h.animated
            }) : (0, i.jsx)(u.ActivityEmoji, {
                className: c.statusEmojiOnly,
                emoji: h,
                animate: s,
                hideTooltip: E
            }) : null,
            O = () => N ? (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                className: c.statusText,
                children: m
            }) : null,
            R = a()(c.positionStyle, {
                [c.biteSize]: n === _.UserProfileTypes.BITE_SIZE,
                [c.fullSize]: n === _.UserProfileTypes.FULL_SIZE
            }),
            C = a()(c.statusBubbleOuter, {
                [c.statusBubbleSingleLineEmojiOnlyShape]: 1 === I && !N,
                [c.statusBubbleSingleLineWithTextShape]: 1 === I && N,
                [c.statusBubbleMultiLineShape]: I > 1,
                [c.statusBubbleOuterMaxLine]: I >= 3
            }),
            g = a()(c.statusBubble, {
                [c.statusBubbleSingleLineEmojiOnlyShape]: 1 === I && !N,
                [c.statusBubbleSingleLineWithTextShape]: 1 === I && N,
                [c.statusBubbleMultiLineShape]: I > 1,
                [c.statusBubbleSingleLineEmojiOnly]: 1 === I && !N,
                [c.statusBubbleSingleLineWithText]: 1 === I && N,
                [c.statusBubbleMultiLinePadding]: I > 1 && I < 3,
                [c.statusBubbleMaxLinePadding]: I >= 3
            });
        if (n === _.UserProfileTypes.FULL_SIZE) return (0, i.jsx)("div", {
            className: R,
            children: (0, i.jsx)("div", {
                className: C,
                children: (0, i.jsx)("span", {
                    className: g,
                    children: (0, i.jsxs)("div", {
                        ref: S,
                        children: [p(), O()]
                    })
                })
            })
        });
        let L = a()({
            [c.statusBubbleSingleLineEmojiOnlyBottomMargin]: 1 === I && !N,
            [c.statusBubbleSingleLineWithTextBottomMargin]: 1 === I && N,
            [c.statusBubbleMultiLineMaxLineBottomMargin]: I > 1
        });
        return (0, i.jsx)("div", {
            className: L,
            children: (0, i.jsx)("div", {
                className: R,
                children: (0, i.jsx)("div", {
                    className: C,
                    children: (0, i.jsx)("span", {
                        className: g,
                        children: (0, i.jsxs)("div", {
                            ref: S,
                            children: [p(), O()]
                        })
                    })
                })
            })
        })
    }
}