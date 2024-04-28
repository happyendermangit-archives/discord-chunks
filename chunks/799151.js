function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DnDKeyboardHelpBar: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("513715"),
        a = n("442837"),
        o = n("710593"),
        l = n("993365"),
        u = n("607070"),
        d = n("79320"),
        _ = n("689938"),
        c = n("689085");

    function E() {
        let e = [{
                keybinds: ["Spacebar", "Enter"],
                name: _.default.Messages.DND_OPERATION_LABEL_DROP
            }, {
                keybinds: ["up", "down"],
                name: _.default.Messages.DND_OPERATION_LABEL_MOVE
            }, {
                keybinds: ["ESC"],
                name: _.default.Messages.DND_OPERATION_LABEL_CANCEL
            }],
            t = (0, a.useStateFromStores)([u.default], () => u.default.useReducedMotion),
            n = (0, d.useDndMode)();
        return (0, s.useTransition)(n, {
            enter: {
                from: {
                    opacity: 0,
                    y: t ? 0 : 80
                },
                to: {
                    opacity: 1,
                    y: 0
                }
            },
            leave: {
                opacity: 0,
                y: t ? 0 : 80
            },
            config: s.config.stiff
        })((t, n) => n ? (0, i.jsx)("div", {
            className: c.positioner,
            children: (0, i.jsx)(s.animated.div, {
                className: c.container,
                style: t,
                children: e.map((t, n) => {
                    let {
                        keybinds: s,
                        name: a
                    } = t;
                    return (0, i.jsxs)(r.Fragment, {
                        children: [(0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            className: c.bindName,
                            children: a
                        }), s.map(e => (0, i.jsx)(o.KeyCombo, {
                            shortcut: e,
                            className: c.shortcut
                        }, e)), n < e.length - 1 ? (0, i.jsx)("span", {
                            className: c.separator
                        }) : null]
                    }, a)
                })
            })
        }) : null)
    }
}