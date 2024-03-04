function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragDropManager: function() {
            return s
        }
    });
    var r = n("884691"),
        i = n("900255"),
        o = n("388588");

    function s() {
        var e = (0, r.useContext)(o.DndContext).dragDropManager;
        return (0, i.invariant)(null != e, "Expected drag drop context"), e
    }
}