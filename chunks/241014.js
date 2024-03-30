function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DnDProvider: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("979714"),
        i = n("499123"),
        a = n("751848"),
        u = n("972063"),
        s = n("57711"),
        l = (0, i.createTransition)("keydown", function(e) {
            return !!(0, s.isDragTrigger)(e) && (e.preventDefault(), !0)
        }),
        c = (0, i.createTransition)("mousedown", function(e) {
            return -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, u.toggleDndMode)(!1), !0)
        }),
        f = {
            backends: [{
                id: "html5",
                backend: o.HTML5Backend,
                transition: c
            }, {
                id: "keyboard",
                backend: s.default,
                context: {
                    window: window,
                    document: document
                },
                options: {
                    onDndModeChanged: u.toggleDndMode,
                    announcer: a.AccessibilityAnnouncer
                },
                preview: !0,
                transition: l
            }]
        };

    function d(e) {
        var t = e.children;
        return r.createElement(i.DndProvider, {
            options: f
        }, t)
    }
}