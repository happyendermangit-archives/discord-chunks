function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        asap: function() {
            return s
        }
    });
    var r = n("576225"),
        a = n("897025");
    let i = new r.AsapQueue,
        o = new a.TaskFactory(i.registerPendingError);

    function s(e) {
        i.enqueueTask(o.create(e))
    }
}