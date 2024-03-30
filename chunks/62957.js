function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getNickname: function() {
            return l
        },
        useName: function() {
            return f
        }
    });
    var r = n("898511"),
        o = n("935741"),
        i = n("957808"),
        a = n("776982"),
        u = n("830567"),
        s = n("941504");

    function l(e, t, n) {
        if (null == n) return null;
        if (null != e) return i.default.getNick(e, n.id);
        if (null != t) {
            var r = o.default.getChannel(t);
            if (null == r ? void 0 : r.isPrivate()) return a.default.getNickname(n.id)
        }
        return null
    }

    function c(e, t, n) {
        var r;
        return null == n ? s.default.Messages.UNKNOWN_USER : null !== (r = l(e, t, n)) && void 0 !== r ? r : u.default.getName(n)
    }

    function f(e, t, n) {
        return (0, r.useStateFromStores)([i.default, o.default, a.default], function() {
            return c(e, t, n)
        })
    }
    t.default = {
        getNickname: l,
        getName: c,
        useName: f
    }
}