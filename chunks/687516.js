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
            return _
        }
    });
    var i = n("442837"),
        r = n("902704"),
        a = n("158776"),
        s = n("981631");

    function o(e) {
        return e.type === s.ActivityTypes.PLAYING
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
        return e === t || null != e && null != t && (0, r.default)(e, t)
    }

    function _(e) {
        return (0, i.useStateFromStores)([a.default], () => u(e, a.default), [e], d)
    }
}