function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DnDKeyboardHelpBar: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("718017"),
        i = n("898511"),
        a = n("66722"),
        u = n("135983"),
        s = n("622780"),
        l = n("972063"),
        c = n("941504"),
        f = n("305895");

    function d() {
        var e = [{
                keybinds: ["Spacebar", "Enter"],
                name: c.default.Messages.DND_OPERATION_LABEL_DROP
            }, {
                keybinds: ["up", "down"],
                name: c.default.Messages.DND_OPERATION_LABEL_MOVE
            }, {
                keybinds: ["ESC"],
                name: c.default.Messages.DND_OPERATION_LABEL_CANCEL
            }],
            t = (0, i.useStateFromStores)([s.default], function() {
                return s.default.useReducedMotion
            }),
            n = (0, l.useDndMode)();
        return (0, o.useTransition)(n, {
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
            config: o.config.stiff
        })(function(t, n) {
            return n ? r.createElement("div", {
                className: f.positioner
            }, r.createElement(o.animated.div, {
                className: f.container,
                style: t
            }, e.map(function(t, n) {
                var o = t.keybinds,
                    i = t.name;
                return r.createElement(r.Fragment, {
                    key: i
                }, r.createElement(u.Text, {
                    variant: "text-md/semibold",
                    className: f.bindName
                }, i), o.map(function(e) {
                    return r.createElement(a.KeyCombo, {
                        key: e,
                        shortcut: e,
                        className: f.shortcut
                    })
                }), n < e.length - 1 ? r.createElement("span", {
                    className: f.separator
                }) : null)
            }))) : null
        })
    }
}