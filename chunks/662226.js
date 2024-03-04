function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        asap: function() {
            return a
        }
    });
    var r = n("576225"),
        i = n("897025");
    let o = new r.AsapQueue,
        s = new i.TaskFactory(o.registerPendingError);

    function a(e) {
        o.enqueueTask(s.create(e))
    }
}