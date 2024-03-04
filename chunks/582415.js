function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStreamerActivity: function() {
            return l
        },
        getStreamerApplication: function() {
            return u
        },
        useGetStreamApplication: function() {
            return c
        }
    });
    var i = n("446674"),
        s = n("233736"),
        r = n("824563"),
        a = n("49111");

    function o(e) {
        return e.type === a.ActivityTypes.PLAYING
    }

    function l(e, t) {
        var n;
        return null != e ? (n = e.ownerId, t.findActivity(n, o)) : null
    }

    function u(e, t) {
        if (null == e) return null;
        let n = l(e, t);
        return null == n ? null : {
            id: n.application_id,
            name: n.name
        }
    }

    function d(e, t) {
        return e === t || null != e && null != t && (0, s.default)(e, t)
    }

    function c(e) {
        return (0, i.useStateFromStores)([r.default], () => u(e, r.default), [e], d)
    }
}