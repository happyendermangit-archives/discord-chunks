function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createDragDropActions: function() {
            return l
        }
    });
    var r = n("10098"),
        a = n("935452"),
        i = n("139184"),
        o = n("574119"),
        s = n("111526"),
        c = n("897345");

    function l(e) {
        return {
            beginDrag: (0, r.createBeginDrag)(e),
            publishDragSource: (0, a.createPublishDragSource)(e),
            hover: (0, i.createHover)(e),
            drop: (0, o.createDrop)(e),
            endDrag: (0, s.createEndDrag)(e)
        }
    }
    n.es(c, t)
}