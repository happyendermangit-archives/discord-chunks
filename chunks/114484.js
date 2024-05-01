function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InteractionStatusMessage: function() {
            return A
        },
        getFailedContent: function() {
            return h
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("207561"),
        l = n("442837"),
        u = n("481060"),
        d = n("292419"),
        _ = n("282397"),
        c = n("188597"),
        E = n("759231"),
        I = n("981631"),
        T = n("689938"),
        f = n("566475");

    function S(e) {
        return {
            text: e,
            icon: (0, i.jsx)(u.Dots, {
                className: f.icon,
                dotRadius: 3.5,
                themed: !0
            })
        }
    }

    function h(e) {
        return {
            text: null != e ? e : T.default.Messages.APPLICATION_COMMAND_FAILED,
            color: "text-danger",
            icon: (0, i.jsx)(E.default, {
                width: 16,
                height: 16,
                className: s()(f.icon, f.errorIcon)
            })
        }
    }

    function A(e) {
        let {
            className: t,
            icon: n,
            text: r,
            color: a
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(f.wrapper, t),
            children: [n, (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                color: a,
                scaleFontToUserSetting: !0,
                children: r
            })]
        })
    }
    t.default = r.memo(function(e) {
        let {
            message: t,
            className: n,
            component: a
        } = e, s = (0, o.useForceUpdate)(), u = (0, l.useStateFromStores)([_.default], () => _.default.getInteraction(t), [t]);
        r.useEffect(() => {
            let e = null;
            if (t.hasFlag(I.MessageFlags.LOADING) && null != u) {
                let n = (0, c.getInteractionTimeoutTimestamp)(t.id) - Date.now();
                n > 0 && (e = setTimeout(() => s(), 1e3 + n))
            }
            return () => {
                clearTimeout(e)
            }
        }, [s, u, t]);
        let E = null;
        if (null == a) E = function(e, t) {
            switch ((0, c.getInteractionStatusViewState)(t, e)) {
                case c.InteractionStatusViewState.SENDING:
                    return S(T.default.Messages.APPLICATION_COMMAND_SENDING);
                case c.InteractionStatusViewState.CREATED:
                    return S(T.default.Messages.APPLICATION_COMMAND_WAITING.format({
                        applicationName: t.author.username
                    }));
                case c.InteractionStatusViewState.TIMED_OUT:
                    return h(T.default.Messages.APPLICATION_COMMAND_TIMED_OUT);
                case c.InteractionStatusViewState.FAILED:
                    return h(t.interactionError)
            }
        }(u, t);
        else {
            let e = (0, d.getLayoutComponentErrorText)(u, t, a);
            null != e && (E = h(e))
        }
        if (null == E) return null;
        let {
            text: f,
            icon: m,
            color: N
        } = E;
        return (0, i.jsx)(A, {
            icon: m,
            text: f,
            className: n,
            color: N
        })
    })
}