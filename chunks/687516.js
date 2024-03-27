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
        s = n("158776"),
        a = n("981631");

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
        return e === t || null != e && null != t && (0, r.default)(e, t)
    }

    function _(e) {
        return (0, i.useStateFromStores)([s.default], () => u(e, s.default), [e], d)
    }
}