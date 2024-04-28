function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("411104"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("493683"),
        o = n("904245"),
        l = n("906732"),
        u = n("541716"),
        d = n("752305"),
        _ = n("893718"),
        c = n("957730"),
        E = n("592125"),
        I = n("51144"),
        T = n("838440"),
        f = n("785717"),
        S = n("689938"),
        h = n("112147");
    let A = async e => {
        let {
            userId: t,
            content: n,
            location: i
        } = e, {
            valid: r,
            failureReason: s
        } = await (0, T.applyChatRestrictions)({
            type: u.ChatInputTypes.NORMAL,
            content: n,
            channel: null
        });
        if (!r) throw Error(s);
        let l = await a.default.openPrivateChannel(t, !1, !1, i),
            d = E.default.getChannel(l);
        if (null == d) throw Error("Failed to open private channel");
        let _ = c.default.parse(d, n);
        return o.default.sendMessage(d.id, _)
    };

    function m(e) {
        let {
            user: t,
            channelId: n,
            onClose: a
        } = e, {
            newestAnalyticsLocation: o
        } = (0, l.default)(), {
            trackUserProfileAction: c
        } = (0, f.useUserProfileAnalyticsContext)(), T = (0, s.useStateFromStores)([E.default], () => E.default.getChannel(n)), [m, N] = r.useState(""), [p, O] = r.useState((0, d.toRichValue)(m)), R = r.useRef(!1);
        return null == T ? null : (0, i.jsx)(_.default, {
            innerClassName: h.inner,
            editorClassName: h.editor,
            type: u.ChatInputTypes.USER_PROFILE,
            placeholder: S.default.Messages.QUICK_DM_USER.format({
                name: I.default.getName(t)
            }),
            channel: T,
            textValue: m,
            richValue: p,
            onChange: (e, t, n) => {
                t !== m && (N(t), O(n))
            },
            focused: R.current,
            onFocus: () => {
                R.current = !0
            },
            onBlur: () => {
                R.current = !1
            },
            onSubmit: async e => {
                let {
                    value: n
                } = e;
                try {
                    return c({
                        action: "SEND_DIRECT_MESSAGE"
                    }), await A({
                        userId: t.id,
                        content: n.trim(),
                        location: o
                    }), null == a || a(), {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                } catch {
                    return {
                        shouldClear: !1,
                        shouldRefocus: !1
                    }
                }
            }
        })
    }
}