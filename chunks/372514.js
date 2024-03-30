function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("898511"),
        l = n("784184"),
        c = n("651820"),
        f = n("78928"),
        d = n("443458"),
        _ = n("398975"),
        E = n("261535"),
        p = n("935741"),
        m = n("776982"),
        y = n("830567"),
        I = n("992289"),
        h = n("281767"),
        O = n("941504"),
        T = n("726286");

    function S(e) {
        var t = e.user,
            n = e.autoFocus,
            o = e.className,
            a = e.inputClassName,
            S = e.onSend,
            v = r.useRef(null),
            g = (0, s.useStateFromStores)([m.default], function() {
                return m.default.isBlocked(t.id)
            }),
            A = r.useCallback(function(e) {
                if ("Enter" === e.key) {
                    e.preventDefault(), u()(null != v.current, "Keypress on Input when not mounted");
                    var n = v.current.value.trim();
                    return (0, I.applyChatRestrictions)({
                        type: _.ChatInputTypes.NORMAL,
                        content: n,
                        channel: null
                    }).then(function(e) {
                        e.valid && (c.default.openPrivateChannel(t.id, !1, !1, "Quick Message Input").then(function(e) {
                            var t = p.default.getChannel(e);
                            u()(null != t, "Newly created PrivateChannel is null"), d.default.sendMessage(t.id, E.default.parse(t, n)), (0, f.popLayer)()
                        }), null == S || S())
                    }), !0
                }
                e.which === h.KeyboardKeys.SPACE && e.stopPropagation()
            }, [t, S]),
            b = g ? O.default.Messages.QUICK_DM_BLOCKED : O.default.Messages.QUICK_DM_USER.format({
                name: y.default.getName(t)
            });
        return r.createElement(l.TextInput, {
            className: o,
            inputClassName: i()(a, T.input),
            inputRef: v,
            autoFocus: void 0 !== n && n,
            placeholder: b,
            "aria-label": b,
            onKeyPress: A,
            disabled: g
        })
    }
}