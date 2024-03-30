function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGuildIdsToFetchSoundsFor: function() {
            return c
        },
        useGuildIdsToFetchSoundsFor: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("306912"),
        a = n("523018"),
        u = n("452700");

    function s(e, t) {
        return a.default.keys(e).filter(function(e) {
            return null == t.get(e)
        })
    }

    function l() {
        var e = (0, o.useStateFromStores)([i.default], function() {
                return i.default.getGuilds()
            }),
            t = (0, o.useStateFromStores)([u.default], function() {
                return u.default.getSounds()
            });
        return (0, r.useMemo)(function() {
            return s(e, t)
        }, [e, t])
    }

    function c() {
        return s(i.default.getGuilds(), u.default.getSounds())
    }
}