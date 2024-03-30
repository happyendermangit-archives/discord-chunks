function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getContent: function() {
            return y
        },
        memoizeMessageProps: function() {
            return b
        }
    });
    var r = n("470079"),
        a = n("803997"),
        o = n.n(a),
        i = n("653603"),
        l = n.n(i),
        s = n("252546"),
        c = n("555572"),
        u = n("276781"),
        d = n("281767"),
        f = n("941504"),
        m = n("931093"),
        p = n("50182");

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e, t) {
        return e.type === d.MessageTypes.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(d.MessageFlags.SOURCE_MESSAGE_DELETED) ? f.default.Messages.SOURCE_MESSAGE_DELETED : t
    }

    function b(e, t) {
        var n, r, a = t.message,
            o = e.message;
        return (0, s.default)(e, t, ["message"]) && a.content === o.content && a.state === o.state && (null === (n = a.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (r = o.editedTimestamp) || void 0 === r ? void 0 : r.toString())
    }
    t.default = r.memo(function(e) {
        var t, n, a = e.className,
            i = e.message,
            s = e.children,
            b = e.content,
            E = e.onUpdate,
            v = e.contentRef,
            O = i.isEdited(),
            S = i.state === d.MessageStates.SEND_FAILED,
            h = i.state === d.MessageStates.SENDING,
            I = i.isCommandType(),
            A = null === (t = i.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
            T = r.useRef(!1);
        return r.useLayoutEffect(function() {
            T.current ? null != E && E() : T.current = !0
        }, [E, i.content, b, A, s]), r.createElement("div", {
            id: (0, c.getMessageContentId)(i),
            ref: v,
            className: o()(a, m.markup, (g(n = {}, p.messageContent, !0), g(n, p.isSending, h && !I), g(n, p.markupRtl, "rtl" === l()(i.content)), g(n, p.isFailed, S), n))
        }, null != s ? s : y(i, b), O && null != i.editedTimestamp && r.createElement(r.Fragment, null, " ", r.createElement(u.default, {
            timestamp: i.editedTimestamp,
            isEdited: !0,
            isInline: !1
        }, r.createElement("span", {
            className: p.edited
        }, "(", f.default.Messages.MESSAGE_EDITED, ")"))))
    }, b)
}