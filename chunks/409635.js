function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transitionToChannel: function() {
            return c
        },
        transitionToMessage: function() {
            return _
        },
        transitionToThread: function() {
            return f
        },
        transitionToThreadMessage: function() {
            return d
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("651820"),
        a = n("733374"),
        u = n("935741"),
        s = n("163291"),
        l = n("281767");

    function c(e, t, n) {
        var r = u.default.getChannel(e);
        if (null != r) {
            var o = (0, a.getGuildIdForGenericRedirect)(r);
            i.default.preload(r.guild_id, r.id), (0, s.transitionTo)(l.Routes.CHANNEL(o, r.id), t, n)
        }
    }

    function f(e, t, n) {
        o()(null != e.parent_id, "Thread must have a parent ID.");
        var r = (0, a.getGuildIdForGenericRedirect)(e);
        (0, s.transitionTo)(l.Routes.CHANNEL(r, e.id), n, t)
    }

    function d(e, t, n, r) {
        o()(null != e.parent_id, "Thread must have a parent ID.");
        var i = (0, a.getGuildIdForGenericRedirect)(e);
        (0, s.transitionTo)(l.Routes.CHANNEL(i, e.id, t), r, n)
    }

    function _(e, t, n, r) {
        var o = u.default.getChannel(e);
        if (null != o) {
            var i = (0, a.getGuildIdForGenericRedirect)(o);
            (0, s.transitionTo)(l.Routes.CHANNEL(i, o.id, t), n, r)
        }
    }
}