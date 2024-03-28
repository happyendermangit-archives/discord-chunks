function(t, e, i) {
    "use strict";
    i.r(e);
    var l = i("735250");
    i("470079");
    var r = i("803997"),
        a = i.n(r),
        n = i("481060"),
        s = i("50182");
    e.default = function(t) {
        let {
            className: e,
            compact: i = !1,
            contentOnly: r = !1,
            zalgo: o = !0,
            disableInteraction: d = !1,
            childrenRepliedMessage: c,
            childrenExecutedCommand: h,
            childrenHeader: u,
            childrenSystemMessage: f,
            childrenButtons: x,
            childrenMessageContent: m,
            childrenAccessories: g,
            messageRef: j,
            focusProps: w = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: p,
            isSystemMessage: v,
            hasReply: C,
            ...N
        } = t, y = (0, l.jsx)(n.FocusRing, {
            ...w,
            children: (0, l.jsxs)("div", {
                className: a()(e, {
                    [s.wrapper]: !0,
                    [s.contentOnly]: r,
                    [s.compact]: i,
                    [s.cozy]: !i,
                    [s.zalgo]: o,
                    [s.hasThread]: p,
                    [s.isSystemMessage]: v,
                    [s.hasReply]: C
                }),
                ref: j,
                ...N,
                role: "article",
                children: [c, h, (0, l.jsxs)("div", {
                    className: s.contents,
                    children: [f, u, null == f && m]
                }), g, null != x ? (0, l.jsx)("div", {
                    className: s.buttonContainer,
                    children: x
                }) : null]
            })
        });
        return d ? (0, l.jsx)(n.FocusBlock, {
            children: y
        }) : y
    }
}