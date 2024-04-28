function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getContent: function() {
            return f
        },
        memoizeMessageProps: function() {
            return S
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("653603"),
        l = n.n(o),
        u = n("902704"),
        d = n("453687"),
        _ = n("534761"),
        c = n("981631"),
        E = n("689938"),
        I = n("946278"),
        T = n("822545");

    function f(e, t) {
        return e.type === c.MessageTypes.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(c.MessageFlags.SOURCE_MESSAGE_DELETED) ? E.default.Messages.SOURCE_MESSAGE_DELETED : t
    }

    function S(e, t) {
        var n, i;
        let {
            message: r
        } = t, {
            message: s
        } = e;
        return (0, u.default)(e, t, ["message"]) && r.content === s.content && r.state === s.state && (null === (n = r.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (i = s.editedTimestamp) || void 0 === i ? void 0 : i.toString())
    }
    t.default = r.memo(function(e) {
        var t;
        let {
            className: n,
            message: s,
            children: o,
            content: u,
            onUpdate: S,
            contentRef: h
        } = e, A = s.isEdited(), m = s.state === c.MessageStates.SEND_FAILED, N = s.state === c.MessageStates.SENDING, p = s.isCommandType(), O = null === (t = s.editedTimestamp) || void 0 === t ? void 0 : t.toString(), R = r.useRef(!1);
        return r.useLayoutEffect(() => {
            R.current ? null != S && S() : R.current = !0
        }, [S, s.content, u, O, o]), (0, i.jsxs)("div", {
            id: (0, d.getMessageContentId)(s),
            ref: h,
            className: a()(n, I.markup, {
                [T.messageContent]: !0,
                [T.isSending]: N && !p,
                [T.markupRtl]: "rtl" === l()(s.content),
                [T.isFailed]: m
            }),
            children: [null != o ? o : f(s, u), A && null != s.editedTimestamp && (0, i.jsxs)(i.Fragment, {
                children: [" ", (0, i.jsx)(_.default, {
                    timestamp: s.editedTimestamp,
                    isEdited: !0,
                    isInline: !1,
                    children: (0, i.jsxs)("span", {
                        className: T.edited,
                        children: ["(", E.default.Messages.MESSAGE_EDITED, ")"]
                    })
                })]
            })]
        })
    }, S)
}