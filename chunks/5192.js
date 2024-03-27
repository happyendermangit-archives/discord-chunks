function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getNickname: function() {
            return u
        },
        useName: function() {
            return _
        }
    });
    var i = n("442837"),
        r = n("592125"),
        s = n("271383"),
        a = n("699516"),
        o = n("51144"),
        l = n("689938");

    function u(e, t, n) {
        if (null == n) return null;
        if (null != e) return s.default.getNick(e, n.id);
        if (null != t) {
            let e = r.default.getChannel(t);
            if (null == e ? void 0 : e.isPrivate()) return a.default.getNickname(n.id)
        }
        return null
    }

    function d(e, t, n) {
        var i;
        return null == n ? l.default.Messages.UNKNOWN_USER : null !== (i = u(e, t, n)) && void 0 !== i ? i : o.default.getName(n)
    }

    function _(e, t, n) {
        return (0, i.useStateFromStores)([s.default, r.default, a.default], () => d(e, t, n))
    }
    t.default = {
        getNickname: u,
        getName: d,
        useName: _
    }
}