function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileCustomStatusBubble: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("596454"),
        l = n("788307"),
        u = n("228168"),
        d = n("660762");

    function _(e) {
        let {
            statusActivity: t,
            profileType: n,
            animate: r = !0,
            hideTooltip: _ = !1
        } = e, {
            emoji: c
        } = t, E = null != c, I = null != t.state && "" !== t.state ? t.state : null, T = null != I && I.length > 0;
        if (!E && !T) return null;
        let f = T ? Math.floor(I.length / 34) + 1 : 1,
            S = () => E ? !T || T && 1 === f ? (0, i.jsx)(l.ActivityEmoji, {
                className: d.singleLineStatusEmoji,
                emoji: c,
                animate: r,
                hideTooltip: _
            }) : (0, i.jsx)(o.default, {
                className: d.multiLineStatusEmoji,
                emojiId: c.id,
                emojiName: c.name,
                animated: !!c.animated
            }) : null,
            h = () => T ? (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                className: d.statusText,
                children: I
            }) : null,
            A = s()(d.positionStyle, {
                [d.biteSize]: n === u.UserProfileTypes.BITE_SIZE,
                [d.fullSize]: n === u.UserProfileTypes.FULL_SIZE
            }),
            m = s()(d.statusBubbleOuter, {
                [d.statusBubbleSingleLineWithEmojiShape]: 1 === f && E,
                [d.statusBubbleSingleLineTextOnlyShape]: 1 === f && !E,
                [d.statusBubbleMultiLineShape]: f > 1,
                [d.statusBubbleOuterMaxLine]: f >= 3
            }),
            N = s()(d.statusBubble, {
                [d.statusBubbleSingleLineWithEmojiShape]: 1 === f && E,
                [d.statusBubbleSingleLineTextOnlyShape]: 1 === f && !E,
                [d.statusBubbleMultiLineShape]: f > 1,
                [d.statusBubbleSingleLineWithEmoji]: 1 === f && E,
                [d.statusBubbleSingleLineTextOnly]: 1 === f && !E,
                [d.statusBubbleMultiLinePadding]: f > 1 && f < 3,
                [d.statusBubbleMaxLinePadding]: f >= 3
            });
        if (n === u.UserProfileTypes.FULL_SIZE) return (0, i.jsx)("div", {
            className: A,
            children: (0, i.jsx)("div", {
                className: m,
                children: (0, i.jsxs)("span", {
                    className: N,
                    children: [S(), h()]
                })
            })
        });
        let p = s()({
            [d.statusBubbleSingleLineWithEmojiBottomMargin]: 1 === f && E,
            [d.statusBubbleSingleLineTextOnlyBottomMargin]: 1 === f && !E,
            [d.statusBubbleMultiLineMaxLineBottomMargin]: f > 1
        });
        return (0, i.jsx)("div", {
            className: p,
            children: (0, i.jsx)("div", {
                className: A,
                children: (0, i.jsx)("div", {
                    className: m,
                    children: (0, i.jsxs)("span", {
                        className: N,
                        children: [S(), h()]
                    })
                })
            })
        })
    }
}