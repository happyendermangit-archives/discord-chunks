function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return o
        }
    });
    var l = i("37983");
    i("884691");
    var r = i("414456"),
        a = i.n(r),
        n = i("77078"),
        s = i("356296"),
        o = function(t) {
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
                    className: a(e, {
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