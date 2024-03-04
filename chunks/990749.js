function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DnDKeyboardHelpBar: function() {
            return _
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("907002"),
        a = n("446674"),
        o = n("533979"),
        l = n("577776"),
        u = n("206230"),
        d = n("57406"),
        c = n("782340"),
        f = n("725599");

    function _() {
        let e = [{
                keybinds: ["Spacebar", "Enter"],
                name: c.default.Messages.DND_OPERATION_LABEL_DROP
            }, {
                keybinds: ["up", "down"],
                name: c.default.Messages.DND_OPERATION_LABEL_MOVE
            }, {
                keybinds: ["ESC"],
                name: c.default.Messages.DND_OPERATION_LABEL_CANCEL
            }],
            t = (0, a.useStateFromStores)([u.default], () => u.default.useReducedMotion),
            n = (0, d.useDndMode)(),
            _ = (0, r.useTransition)(n, {
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
                config: r.config.stiff
            });
        return _((t, n) => n ? (0, i.jsx)("div", {
            className: f.positioner,
            children: (0, i.jsx)(r.animated.div, {
                className: f.container,
                style: t,
                children: e.map((t, n) => {
                    let {
                        keybinds: r,
                        name: a
                    } = t;
                    return (0, i.jsxs)(s.Fragment, {
                        children: [(0, i.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            className: f.bindName,
                            children: a
                        }), r.map(e => (0, i.jsx)(o.KeyCombo, {
                            shortcut: e,
                            className: f.shortcut
                        }, e)), n < e.length - 1 ? (0, i.jsx)("span", {
                            className: f.separator
                        }) : null]
                    }, a)
                })
            })
        }) : null)
    }
}