function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transitionToChannel: function() {
            return d
        },
        transitionToThread: function() {
            return c
        },
        transitionToThreadMessage: function() {
            return f
        },
        transitionToMessage: function() {
            return _
        }
    });
    var i = n("627445"),
        s = n.n(i),
        r = n("450911"),
        a = n("565298"),
        o = n("42203"),
        l = n("393414"),
        u = n("49111");

    function d(e, t, n) {
        let i = o.default.getChannel(e);
        if (null == i) return;
        let s = (0, a.getGuildIdForGenericRedirect)(i);
        r.default.preload(i.guild_id, i.id), (0, l.transitionTo)(u.Routes.CHANNEL(s, i.id), t, n)
    }

    function c(e, t, n) {
        s(null != e.parent_id, "Thread must have a parent ID.");
        let i = (0, a.getGuildIdForGenericRedirect)(e);
        (0, l.transitionTo)(u.Routes.CHANNEL(i, e.id), n, t)
    }

    function f(e, t, n, i) {
        s(null != e.parent_id, "Thread must have a parent ID.");
        let r = (0, a.getGuildIdForGenericRedirect)(e);
        (0, l.transitionTo)(u.Routes.CHANNEL(r, e.id, t), i, n)
    }

    function _(e, t, n, i) {
        let s = o.default.getChannel(e);
        if (null == s) return;
        let r = (0, a.getGuildIdForGenericRedirect)(s);
        (0, l.transitionTo)(u.Routes.CHANNEL(r, s.id, t), n, i)
    }
}