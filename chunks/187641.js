function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DnDProvider: function() {
            return _
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("626326"),
        r = n("192523"),
        a = n("819855"),
        o = n("57406"),
        l = n("999888");
    let u = (0, r.createTransition)("keydown", e => !!(0, l.isDragTrigger)(e) && (e.preventDefault(), !0)),
        d = (0, r.createTransition)("mousedown", e => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, o.toggleDndMode)(!1), !0)),
        c = {
            backends: [{
                id: "html5",
                backend: s.HTML5Backend,
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
                    announcer: a.AccessibilityAnnouncer
                },
                preview: !0,
                transition: u
            }]
        };

    function _(e) {
        let {
            children: t
        } = e;
        return (0, i.jsx)(r.DndProvider, {
            options: c,
            children: t
        })
    }
}