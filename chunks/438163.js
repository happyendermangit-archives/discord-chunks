function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileCustomStatusBubble: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("596454"),
        l = n("788307"),
        u = n("181196");

    function d(e) {
        let {
            positionStyle: t,
            statusActivity: n,
            animate: r = !0,
            hideTooltip: d = !1
        } = e, {
            emoji: _
        } = n, c = null != _, E = null != n.state && "" !== n.state ? n.state : null, I = null != E && E.length > 0;
        if (!c && !I) return null;
        let T = I ? Math.floor(E.length / 30) + 1 : 1,
            f = s()({
                [u.maxLinePositioningOffset]: T >= 3
            }),
            S = s()(u.statusBubbleOutline, t, {
                [u.statusBubbleSingleLineShape]: 1 === T,
                [u.statusBubbleMultiLineShape]: T > 1,
                [u.statusBubbleOutlineMaxLinePadding]: T >= 3
            }),
            h = s()(u.statusBubble, {
                [u.statusBubbleSingleLineEmojiOnly]: c && !I,
                [u.statusBubbleSingleLineTextOrMixed]: 1 === T && I,
                [u.statusBubbleMultiLinePadding]: T > 1 && T < 3,
                [u.statusBubbleMaxLinePadding]: T >= 3,
                [u.statusBubbleSingleLineShape]: 1 === T,
                [u.statusBubbleMultiLineShape]: T > 1
            });
        return (0, i.jsx)("div", {
            className: f,
            children: (0, i.jsx)("div", {
                className: S,
                children: (0, i.jsxs)("span", {
                    className: h,
                    children: [c ? I ? (0, i.jsx)(o.default, {
                        className: u.inlineStatusEmoji,
                        emojiId: _.id,
                        emojiName: _.name,
                        animated: !!_.animated
                    }) : (0, i.jsx)(l.ActivityEmoji, {
                        className: u.soloStatusEmoji,
                        emoji: _,
                        animate: r,
                        hideTooltip: d
                    }) : null, I ? (0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        className: u.statusText,
                        children: E
                    }) : null]
                })
            })
        })
    }
}