function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("627445"),
        o = n.n(r),
        u = n("446674"),
        d = n("77078"),
        c = n("450911"),
        f = n("54239"),
        m = n("819689"),
        p = n("850391"),
        h = n("884351"),
        E = n("42203"),
        g = n("27618"),
        S = n("158998"),
        C = n("718422"),
        T = n("49111"),
        v = n("782340"),
        I = n("925063");

    function _(e) {
        let {
            user: t,
            autoFocus: n = !1,
            onClose: a,
            className: r,
            inputClassName: _
        } = e, N = i.useRef(null), A = (0, u.useStateFromStores)([g.default], () => g.default.isBlocked(t.id)), x = i.useCallback(e => {
            if ("Enter" === e.key) {
                e.preventDefault(), o(null != N.current, "Keypress on Input when not mounted");
                let n = N.current.value.trim();
                return (0, C.applyChatRestrictions)({
                    type: p.ChatInputTypes.NORMAL,
                    content: n,
                    channel: null
                }).then(e => {
                    let {
                        valid: l
                    } = e;
                    l && (c.default.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
                        let t = E.default.getChannel(e);
                        o(null != t, "Newly created PrivateChannel is null"), m.default.sendMessage(t.id, h.default.parse(t, n)), (0, f.popLayer)()
                    }), null == a || a())
                }), !0
            }
            e.which === T.KeyboardKeys.SPACE && e.stopPropagation()
        }, [a, t]), y = A ? v.default.Messages.QUICK_DM_BLOCKED : v.default.Messages.QUICK_DM_USER.format({
            name: S.default.getName(t)
        });
        return (0, l.jsx)(d.TextInput, {
            className: r,
            inputClassName: s(_, I.input),
            inputRef: N,
            autoFocus: n,
            placeholder: y,
            "aria-label": y,
            onKeyPress: x,
            disabled: A
        })
    }
}