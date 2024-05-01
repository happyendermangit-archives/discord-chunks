function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transitionToChannel: function() {
            return d
        },
        transitionToMessage: function() {
            return E
        },
        transitionToThread: function() {
            return _
        },
        transitionToThreadMessage: function() {
            return c
        }
    });
    var i = n("512722"),
        r = n.n(i),
        a = n("493683"),
        s = n("727429"),
        o = n("592125"),
        l = n("703656"),
        u = n("981631");

    function d(e, t, n) {
        let i = o.default.getChannel(e);
        if (null == i) return;
        let r = (0, s.getGuildIdForGenericRedirect)(i);
        a.default.preload(i.guild_id, i.id), (0, l.transitionTo)(u.Routes.CHANNEL(r, i.id), t, n)
    }

    function _(e, t, n) {
        r()(null != e.parent_id, "Thread must have a parent ID.");
        let i = (0, s.getGuildIdForGenericRedirect)(e);
        (0, l.transitionTo)(u.Routes.CHANNEL(i, e.id), n, t)
    }

    function c(e, t, n, i) {
        r()(null != e.parent_id, "Thread must have a parent ID.");
        let a = (0, s.getGuildIdForGenericRedirect)(e);
        (0, l.transitionTo)(u.Routes.CHANNEL(a, e.id, t), i, n)
    }

    function E(e, t, n, i) {
        let r = o.default.getChannel(e);
        if (null == r) return;
        let a = (0, s.getGuildIdForGenericRedirect)(r);
        (0, l.transitionTo)(u.Routes.CHANNEL(a, r.id, t), n, i)
    }
}