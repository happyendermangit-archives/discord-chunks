function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("627445"),
        o = n.n(r),
        u = n("446674"),
        d = n("77078"),
        c = n("450911"),
        f = n("54239"),
        p = n("819689"),
        m = n("850391"),
        h = n("884351"),
        x = n("42203"),
        E = n("27618"),
        y = n("158998"),
        g = n("718422"),
        S = n("49111"),
        C = n("782340"),
        I = n("925063");

    function T(e) {
        let {
            user: t,
            autoFocus: n = !1,
            onClose: a,
            className: r,
            inputClassName: T
        } = e, _ = l.useRef(null), v = (0, u.useStateFromStores)([E.default], () => E.default.isBlocked(t.id)), N = l.useCallback(e => {
            if ("Enter" === e.key) {
                e.preventDefault(), o(null != _.current, "Keypress on Input when not mounted");
                let n = _.current.value.trim();
                return (0, g.applyChatRestrictions)({
                    type: m.ChatInputTypes.NORMAL,
                    content: n,
                    channel: null
                }).then(e => {
                    let {
                        valid: i
                    } = e;
                    i && (c.default.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(e => {
                        let t = x.default.getChannel(e);
                        o(null != t, "Newly created PrivateChannel is null"), p.default.sendMessage(t.id, h.default.parse(t, n)), (0, f.popLayer)()
                    }), null == a || a())
                }), !0
            }
            e.which === S.KeyboardKeys.SPACE && e.stopPropagation()
        }, [a, t]), A = v ? C.default.Messages.QUICK_DM_BLOCKED : C.default.Messages.QUICK_DM_USER.format({
            name: y.default.getName(t)
        });
        return (0, i.jsx)(d.TextInput, {
            className: r,
            inputClassName: s(T, I.input),
            inputRef: _,
            autoFocus: n,
            placeholder: A,
            "aria-label": A,
            onKeyPress: N,
            disabled: v
        })
    }
}