function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStreamerActivity: function() {
            return s
        },
        getStreamerApplication: function() {
            return l
        },
        useGetStreamApplication: function() {
            return f
        }
    });
    var r = n("898511"),
        o = n("252546"),
        i = n("868447"),
        a = n("281767");

    function u(e) {
        return e.type === a.ActivityTypes.PLAYING
    }

    function s(e, t) {
        var n;
        return null != e ? (n = e.ownerId, t.findActivity(n, u)) : null
    }

    function l(e, t) {
        if (null == e) return null;
        var n = s(e, t);
        return null == n ? null : {
            id: n.application_id,
            name: n.name
        }
    }

    function c(e, t) {
        return e === t || null != e && null != t && (0, o.default)(e, t)
    }

    function f(e) {
        return (0, r.useStateFromStores)([i.default], function() {
            return l(e, i.default)
        }, [e], c)
    }
}