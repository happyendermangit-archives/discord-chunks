function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragDropManager: function() {
            return o
        }
    });
    var r = n("470079"),
        i = n("573654"),
        a = n("329909");

    function o() {
        var e = (0, r.useContext)(a.DndContext).dragDropManager;
        return (0, i.invariant)(null != e, "Expected drag drop context"), e
    }
}