function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getNickname: function() {
            return u
        },
        useName: function() {
            return c
        },
        default: function() {
            return f
        }
    });
    var i = n("446674"),
        s = n("42203"),
        r = n("26989"),
        a = n("27618"),
        o = n("158998"),
        l = n("782340");

    function u(e, t, n) {
        if (null == n) return null;
        if (null != e) return r.default.getNick(e, n.id);
        if (null != t) {
            let e = s.default.getChannel(t);
            if (null == e ? void 0 : e.isPrivate()) return a.default.getNickname(n.id)
        }
        return null
    }

    function d(e, t, n) {
        var i;
        return null == n ? l.default.Messages.UNKNOWN_USER : null !== (i = u(e, t, n)) && void 0 !== i ? i : o.default.getName(n)
    }

    function c(e, t, n) {
        return (0, i.useStateFromStores)([r.default, s.default, a.default], () => d(e, t, n))
    }
    var f = {
        getNickname: u,
        getName: d,
        useName: c
    }
}