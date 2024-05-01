function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("904335");
    t.default = function(e) {
        let {
            className: t,
            compact: n = !1,
            contentOnly: r = !1,
            zalgo: l = !0,
            disableInteraction: u = !1,
            childrenRepliedMessage: d,
            childrenExecutedCommand: _,
            childrenHeader: c,
            childrenSystemMessage: E,
            childrenButtons: I,
            childrenMessageContent: T,
            childrenAccessories: f,
            messageRef: S,
            focusProps: h = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: A,
            isSystemMessage: m,
            hasReply: N,
            ...p
        } = e, O = (0, i.jsx)(a.FocusRing, {
            ...h,
            children: (0, i.jsxs)("div", {
                className: s()(t, {
                    [o.wrapper]: !0,
                    [o.contentOnly]: r,
                    [o.compact]: n,
                    [o.cozy]: !n,
                    [o.zalgo]: l,
                    [o.hasThread]: A,
                    [o.isSystemMessage]: m,
                    [o.hasReply]: N
                }),
                ref: S,
                ...p,
                role: "article",
                children: [d, _, (0, i.jsxs)("div", {
                    className: o.contents,
                    children: [E, c, null == E && T]
                }), f, null != I ? (0, i.jsx)("div", {
                    className: o.buttonContainer,
                    children: I
                }) : null]
            })
        });
        return u ? (0, i.jsx)(a.FocusBlock, {
            children: O
        }) : O
    }
}