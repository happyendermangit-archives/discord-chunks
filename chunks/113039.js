function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getContent: function() {
            return E
        },
        memoizeMessageProps: function() {
            return S
        }
    });
    var a = n("735250"),
        r = n("470079"),
        i = n("803997"),
        s = n.n(i),
        l = n("653603"),
        o = n.n(l),
        u = n("902704"),
        c = n("453687"),
        d = n("534761"),
        m = n("981631"),
        f = n("689938"),
        g = n("931093"),
        p = n("50182");

    function E(e, t) {
        return e.type === m.MessageTypes.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(m.MessageFlags.SOURCE_MESSAGE_DELETED) ? f.default.Messages.SOURCE_MESSAGE_DELETED : t
    }

    function S(e, t) {
        var n, a;
        let {
            message: r
        } = t, {
            message: i
        } = e;
        return (0, u.default)(e, t, ["message"]) && r.content === i.content && r.state === i.state && (null === (n = r.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = i.editedTimestamp) || void 0 === a ? void 0 : a.toString())
    }
    t.default = r.memo(function(e) {
        var t;
        let {
            className: n,
            message: i,
            children: l,
            content: u,
            onUpdate: S,
            contentRef: A
        } = e, h = i.isEdited(), I = i.state === m.MessageStates.SEND_FAILED, T = i.state === m.MessageStates.SENDING, y = i.isCommandType(), M = null === (t = i.editedTimestamp) || void 0 === t ? void 0 : t.toString(), v = r.useRef(!1);
        return r.useLayoutEffect(() => {
            v.current ? null != S && S() : v.current = !0
        }, [S, i.content, u, M, l]), (0, a.jsxs)("div", {
            id: (0, c.getMessageContentId)(i),
            ref: A,
            className: s()(n, g.markup, {
                [p.messageContent]: !0,
                [p.isSending]: T && !y,
                [p.markupRtl]: "rtl" === o()(i.content),
                [p.isFailed]: I
            }),
            children: [null != l ? l : E(i, u), h && null != i.editedTimestamp && (0, a.jsxs)(a.Fragment, {
                children: [" ", (0, a.jsx)(d.default, {
                    timestamp: i.editedTimestamp,
                    isEdited: !0,
                    isInline: !1,
                    children: (0, a.jsxs)("span", {
                        className: p.edited,
                        children: ["(", f.default.Messages.MESSAGE_EDITED, ")"]
                    })
                })]
            })]
        })
    }, S)
}