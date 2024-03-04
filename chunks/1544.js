function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        deserializeChannelEntries: function() {
            return r
        },
        deserializeChannel: function() {
            return a
        }
    }), n("222007");
    var i = n("316693");

    function s(e) {
        for (let {
                permissionOverwrites_: t
            }
            of e)
            if (null != t)
                for (let e in t) {
                    let n = t[e];
                    n.allow = i.default.deserialize(n.allow), n.deny = i.default.deserialize(n.deny)
                }
    }

    function r(e) {
        for (let [t, n] of e) s(n)
    }

    function a(e) {
        let {
            permissionOverwrites_: t
        } = e;
        if (null != t)
            for (let e in t) {
                let n = t[e];
                n.allow = i.default.deserialize(n.allow), n.deny = i.default.deserialize(n.deny)
            }
        return e
    }
}