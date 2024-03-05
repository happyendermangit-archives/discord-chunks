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
            return h
        }
    });
    var a = n("37983"),
        i = n("884691"),
        r = n("414456"),
        s = n.n(r),
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
        let {
            asPartialPreview: n = !1
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (e.isPoll() && n) {
            var a, i, r;
            return null !== (r = null === (i = e.poll) || void 0 === i ? void 0 : null === (a = i.question) || void 0 === a ? void 0 : a.text) && void 0 !== r ? r : ""
        }
        if (e.isPoll()) return "";
        if (e.type === m.MessageTypes.VOICE_HANGOUT_INVITE) return "";
        return e.hasFlag(m.MessageFlags.SOURCE_MESSAGE_DELETED) ? f.default.Messages.SOURCE_MESSAGE_DELETED : t
    }

    function A(e, t) {
        var n, a;
        let {
            message: i
        } = t, {
            message: r
        } = e;
        return (0, u.default)(e, t, ["message"]) && i.content === r.content && i.state === r.state && (null === (n = i.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = r.editedTimestamp) || void 0 === a ? void 0 : a.toString())
    }
    var h = i.memo(function(e) {
        var t;
        let {
            className: n,
            message: r,
            children: l,
            content: u,
            onUpdate: A,
            contentRef: h,
            asPartialPreview: S
        } = e, I = r.isEdited(), T = r.state === m.MessageStates.SEND_FAILED, y = r.state === m.MessageStates.SENDING, M = r.isCommandType(), v = null === (t = r.editedTimestamp) || void 0 === t ? void 0 : t.toString(), x = i.useRef(!1);
        return i.useLayoutEffect(() => {
            x.current ? null != A && A() : x.current = !0
        }, [A, r.content, u, v, l]), (0, a.jsxs)("div", {
            id: (0, c.getMessageContentId)(r),
            ref: h,
            className: s(n, g.markup, {
                [p.messageContent]: !0,
                [p.isSending]: y && !M,
                [p.markupRtl]: "rtl" === o(r.content),
                [p.isFailed]: T
            }),
            children: [null != l ? l : E(r, u, {
                asPartialPreview: S
            }), I && null != r.editedTimestamp && (0, a.jsxs)(a.Fragment, {
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