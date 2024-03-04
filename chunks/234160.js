function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createDragDropActions: function() {
            return u
        }
    });
    var r = n("10098"),
        i = n("935452"),
        o = n("139184"),
        s = n("574119"),
        a = n("111526"),
        c = n("897345");

    function u(e) {
        return {
            beginDrag: (0, r.createBeginDrag)(e),
            publishDragSource: (0, i.createPublishDragSource)(e),
            hover: (0, o.createHover)(e),
            drop: (0, s.createDrop)(e),
            endDrag: (0, a.createEndDrag)(e)
        }
    }
    n.es(c, t)
}