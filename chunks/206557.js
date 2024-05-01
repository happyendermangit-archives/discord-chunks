function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DnDProvider: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("979714"),
        a = n("499123"),
        s = n("780384"),
        o = n("79320"),
        l = n("600795");
    let u = (0, a.createTransition)("keydown", e => !!(0, l.isDragTrigger)(e) && (e.preventDefault(), !0)),
        d = (0, a.createTransition)("mousedown", e => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, o.toggleDndMode)(!1), !0)),
        _ = {
            backends: [{
                id: "html5",
                backend: r.HTML5Backend,
                transition: d
            }, {
                id: "keyboard",
                backend: l.default,
                context: {
                    window,
                    document
                },
                options: {
                    onDndModeChanged: o.toggleDndMode,
                    announcer: s.AccessibilityAnnouncer
                },
                preview: !0,
                transition: u
            }]
        };

    function c(e) {
        let {
            children: t
        } = e;
        return (0, i.jsx)(a.DndProvider, {
            options: _,
            children: t
        })
    }
}