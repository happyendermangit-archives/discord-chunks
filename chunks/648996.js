function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("512722"),
        l = n.n(o),
        u = n("442837"),
        d = n("481060"),
        _ = n("493683"),
        c = n("37234"),
        E = n("904245"),
        I = n("541716"),
        T = n("957730"),
        f = n("592125"),
        S = n("699516"),
        h = n("51144"),
        A = n("838440"),
        m = n("981631"),
        N = n("689938"),
        p = n("760");

    function O(e) {
        let {
            user: t,
            autoFocus: n = !1,
            className: s,
            inputClassName: o,
            onSend: O
        } = e, R = r.useRef(null), C = (0, u.useStateFromStores)([S.default], () => S.default.isBlocked(t.id)), g = r.useCallback(e => {
            if ("Enter" === e.key) {
                e.preventDefault(), l()(null != R.current, "Keypress on Input when not mounted");
                let n = R.current.value.trim();
                return (0, A.applyChatRestrictions)({
                    type: I.ChatInputTypes.NORMAL,
                    content: n,
                    channel: null
                }).then(e => {
                    let {
                        valid: i
                    } = e;
                    i && (_.default.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
                        let t = f.default.getChannel(e);
                        l()(null != t, "Newly created PrivateChannel is null"), E.default.sendMessage(t.id, T.default.parse(t, n)), (0, c.popLayer)()
                    }), null == O || O())
                }), !0
            }
            e.which === m.KeyboardKeys.SPACE && e.stopPropagation()
        }, [t, O]), L = C ? N.default.Messages.QUICK_DM_BLOCKED : N.default.Messages.QUICK_DM_USER.format({
            name: h.default.getName(t)
        });
        return (0, i.jsx)(d.TextInput, {
            className: s,
            inputClassName: a()(o, p.input),
            inputRef: R,
            autoFocus: n,
            placeholder: L,
            "aria-label": L,
            onKeyPress: g,
            disabled: C
        })
    }
}