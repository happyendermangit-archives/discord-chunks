function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InteractionStatusMessage: function() {
            return C
        },
        getFailedContent: function() {
            return S
        }
    });
    var l = n("470079"),
        a = n("803997"),
        u = n.n(a),
        o = n("207561"),
        r = n("898511"),
        i = n("784184"),
        s = n("764047"),
        c = n("644896"),
        d = n("900060"),
        p = n("707907"),
        E = n("281767"),
        m = n("941504"),
        f = n("973843");

    function T(e) {
        return {
            text: e,
            icon: l.createElement(i.Dots, {
                className: f.icon,
                dotRadius: 3.5,
                themed: !0
            })
        }
    }

    function S(e) {
        return {
            text: null != e ? e : m.default.Messages.APPLICATION_COMMAND_FAILED,
            color: "text-danger",
            icon: l.createElement(p.default, {
                width: 16,
                height: 16,
                className: u()(f.icon, f.errorIcon)
            })
        }
    }

    function C(e) {
        var t = e.className,
            n = e.icon,
            a = e.text,
            o = e.color;
        return l.createElement("div", {
            className: u()(f.wrapper, t)
        }, n, l.createElement(i.Text, {
            variant: "text-md/normal",
            color: o,
            scaleFontToUserSetting: !0
        }, a))
    }
    t.default = l.memo(function(e) {
        var t = e.message,
            n = e.className,
            a = e.component,
            u = (0, o.useForceUpdate)(),
            i = (0, r.useStateFromStores)([c.default], function() {
                return c.default.getInteraction(t)
            }, [t]);
        l.useEffect(function() {
            var e = null;
            if (t.hasFlag(E.MessageFlags.LOADING) && null != i) {
                var n = (0, d.getInteractionTimeoutTimestamp)(t.id) - Date.now();
                n > 0 && (e = setTimeout(function() {
                    return u()
                }, 1e3 + n))
            }
            return function() {
                clearTimeout(e)
            }
        }, [u, i, t]);
        var p = null;
        if (null == a) p = function(e, t) {
            switch ((0, d.getInteractionStatusViewState)(t, e)) {
                case d.InteractionStatusViewState.SENDING:
                    return T(m.default.Messages.APPLICATION_COMMAND_SENDING);
                case d.InteractionStatusViewState.CREATED:
                    return T(m.default.Messages.APPLICATION_COMMAND_WAITING.format({
                        applicationName: t.author.username
                    }));
                case d.InteractionStatusViewState.TIMED_OUT:
                    return S(m.default.Messages.APPLICATION_COMMAND_TIMED_OUT);
                case d.InteractionStatusViewState.FAILED:
                    return S(t.interactionError)
            }
        }(i, t);
        else {
            var f = (0, s.getActionRowErrorText)(i, t, a);
            null != f && (p = S(f))
        }
        if (null == p) return null;
        var _ = p.text,
            y = p.icon,
            N = p.color;
        return l.createElement(C, {
            icon: y,
            text: _,
            className: n,
            color: N
        })
    })
}