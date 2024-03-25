function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getContent: function() {
            return E
        },
        memoizeMessageProps: function() {
            return A
        },
        default: function() {
            return S
        }
    });
    var a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        i = n.n(r),
        l = n("717837"),
        o = n.n(l),
        u = n("233736"),
        c = n("865343"),
        d = n("587904"),
        m = n("49111"),
        f = n("782340"),
        g = n("919163"),
        p = n("356296");

    function E(e, t) {
        return e.type === m.MessageTypes.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(m.MessageFlags.SOURCE_MESSAGE_DELETED) ? f.default.Messages.SOURCE_MESSAGE_DELETED : t
    }

    function A(e, t) {
        var n, a;
        let {
            message: s
        } = t, {
            message: r
        } = e;
        return (0, u.default)(e, t, ["message"]) && s.content === r.content && s.state === r.state && (null === (n = s.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = r.editedTimestamp) || void 0 === a ? void 0 : a.toString())
    }
    var S = s.memo(function(e) {
        var t;
        let {
            className: n,
            message: r,
            children: l,
            content: u,
            onUpdate: A,
            contentRef: S
        } = e, h = r.isEdited(), I = r.state === m.MessageStates.SEND_FAILED, T = r.state === m.MessageStates.SENDING, y = r.isCommandType(), M = null === (t = r.editedTimestamp) || void 0 === t ? void 0 : t.toString(), x = s.useRef(!1);
        return s.useLayoutEffect(() => {
            x.current ? null != A && A() : x.current = !0
        }, [A, r.content, u, M, l]), (0, a.jsxs)("div", {
            id: (0, c.getMessageContentId)(r),
            ref: S,
            className: i(n, g.markup, {
                [p.messageContent]: !0,
                [p.isSending]: T && !y,
                [p.markupRtl]: "rtl" === o(r.content),
                [p.isFailed]: I
            }),
            children: [null != l ? l : E(r, u), h && null != r.editedTimestamp && (0, a.jsxs)(a.Fragment, {
                children: [" ", (0, a.jsx)(d.default, {
                    timestamp: r.editedTimestamp,
                    isEdited: !0,
                    isInline: !1,
                    children: (0, a.jsxs)("span", {
                        className: p.edited,
                        children: ["(", f.default.Messages.MESSAGE_EDITED, ")"]
                    })
                })]
            })]
        })
    }, A)
}