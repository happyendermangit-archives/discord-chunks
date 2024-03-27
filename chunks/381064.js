function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        asap: function() {
            return s
        }
    });
    var r = n("96280"),
        i = n("240481");
    let a = new r.AsapQueue,
        o = new i.TaskFactory(a.registerPendingError);

    function s(e) {
        a.enqueueTask(o.create(e))
    }
}