function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        InteractionStatusMessage: function() {
            return _
        },
        getFailedContent: function() {
            return C
        }
    });
    var n = l("735250"),
        a = l("470079"),
        u = l("803997"),
        i = l.n(u),
        s = l("207561"),
        o = l("442837"),
        r = l("481060"),
        d = l("292419"),
        c = l("282397"),
        E = l("188597"),
        p = l("759231"),
        T = l("981631"),
        m = l("689938"),
        f = l("973843");

    function S(e) {
        return {
            text: e,
            icon: (0, n.jsx)(r.Dots, {
                className: f.icon,
                dotRadius: 3.5,
                themed: !0
            })
        }
    }

    function C(e) {
        return {
            text: null != e ? e : m.default.Messages.APPLICATION_COMMAND_FAILED,
            color: "text-danger",
            icon: (0, n.jsx)(p.default, {
                width: 16,
                height: 16,
                className: i()(f.icon, f.errorIcon)
            })
        }
    }

    function _(e) {
        let {
            className: t,
            icon: l,
            text: a,
            color: u
        } = e;
        return (0, n.jsxs)("div", {
            className: i()(f.wrapper, t),
            children: [l, (0, n.jsx)(r.Text, {
                variant: "text-md/normal",
                color: u,
                scaleFontToUserSetting: !0,
                children: a
            })]
        })
    }
    t.default = a.memo(function(e) {
        let {
            message: t,
            className: l,
            component: u
        } = e, i = (0, s.useForceUpdate)(), r = (0, o.useStateFromStores)([c.default], () => c.default.getInteraction(t), [t]);
        a.useEffect(() => {
            let e = null;
            if (t.hasFlag(T.MessageFlags.LOADING) && null != r) {
                let l = (0, E.getInteractionTimeoutTimestamp)(t.id) - Date.now();
                l > 0 && (e = setTimeout(() => i(), 1e3 + l))
            }
            return () => {
                clearTimeout(e)
            }
        }, [i, r, t]);
        let p = null;
        if (null == u) p = function(e, t) {
            switch ((0, E.getInteractionStatusViewState)(t, e)) {
                case E.InteractionStatusViewState.SENDING:
                    return S(m.default.Messages.APPLICATION_COMMAND_SENDING);
                case E.InteractionStatusViewState.CREATED:
                    return S(m.default.Messages.APPLICATION_COMMAND_WAITING.format({
                        applicationName: t.author.username
                    }));
                case E.InteractionStatusViewState.TIMED_OUT:
                    return C(m.default.Messages.APPLICATION_COMMAND_TIMED_OUT);
                case E.InteractionStatusViewState.FAILED:
                    return C(t.interactionError)
            }
        }(r, t);
        else {
            let e = (0, d.getActionRowErrorText)(r, t, u);
            null != e && (p = C(e))
        }
        if (null == p) return null;
        let {
            text: f,
            icon: N,
            color: L
        } = p;
        return (0, n.jsx)(_, {
            icon: N,
            text: f,
            className: l,
            color: L
        })
    })
}