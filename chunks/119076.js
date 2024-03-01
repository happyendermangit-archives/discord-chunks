function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragDropManager: function() {
            return o
        }
    });
    var r = n("884691"),
        a = n("900255"),
        i = n("388588");

    function o() {
        var e = (0, r.useContext)(i.DndContext).dragDropManager;
        return (0, a.invariant)(null != e, "Expected drag drop context"), e
    }
}