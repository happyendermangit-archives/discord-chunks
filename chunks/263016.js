function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createDragDropActions: function() {
            return c
        }
    });
    var r = n("59973"),
        i = n("202373"),
        a = n("556532"),
        o = n("509883"),
        s = n("713011"),
        u = n("964742");

    function c(e) {
        return {
            beginDrag: (0, r.createBeginDrag)(e),
            publishDragSource: (0, i.createPublishDragSource)(e),
            hover: (0, a.createHover)(e),
            drop: (0, o.createDrop)(e),
            endDrag: (0, s.createEndDrag)(e)
        }
    }
    n.es(u, t)
}