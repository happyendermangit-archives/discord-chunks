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
        a = n("120356"),
        s = n.n(a),
        o = n("653603"),
        l = n.n(o),
        u = n("902704"),
        d = n("453687"),
        _ = n("534761"),
        c = n("981631"),
        E = n("689938"),
        I = n("990291"),
        T = n("904335");

    function f(e, t) {
        return e.type === c.MessageTypes.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(c.MessageFlags.SOURCE_MESSAGE_DELETED) ? E.default.Messages.SOURCE_MESSAGE_DELETED : t
    }

    function S(e, t) {
        var n, i;
        let {
            message: r
        } = t, {
            message: a
        } = e;
        return (0, u.default)(e, t, ["message"]) && r.content === a.content && r.state === a.state && (null === (n = r.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (i = a.editedTimestamp) || void 0 === i ? void 0 : i.toString())
    }
    t.default = r.memo(function(e) {
        var t;
        let {
            className: n,
            message: a,
            children: o,
            content: u,
            onUpdate: S,
            contentRef: h
        } = e, A = a.isEdited(), m = a.state === c.MessageStates.SEND_FAILED, N = a.state === c.MessageStates.SENDING, p = a.isCommandType(), O = null === (t = a.editedTimestamp) || void 0 === t ? void 0 : t.toString(), R = r.useRef(!1);
        return r.useLayoutEffect(() => {
            R.current ? null != S && S() : R.current = !0
        }, [S, a.content, u, O, o]), (0, i.jsxs)("div", {
            id: (0, d.getMessageContentId)(a),
            ref: h,
            className: s()(n, I.markup, {
                [T.messageContent]: !0,
                [T.isSending]: N && !p,
                [T.markupRtl]: "rtl" === l()(a.content),
                [T.isFailed]: m
            }),
            children: [null != o ? o : f(a, u), A && null != a.editedTimestamp && (0, i.jsxs)(i.Fragment, {
                children: [" ", (0, i.jsx)(_.default, {
                    timestamp: a.editedTimestamp,
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