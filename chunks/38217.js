function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        },
        deserializeChannel: function() {
            return s
        },
        deserializeChannelEntries: function() {
            return a
        }
    }), n("47120");
    var i = n("149765");

    function r(e) {
        for (let {
                permissionOverwrites_: t
            }
            of e)
            if (null != t)
                for (let e in t) {
                    let n = t[e];
                    n.allow = i.deserialize(n.allow), n.deny = i.deserialize(n.deny)
                }
    }

    function a(e) {
        for (let [t, n] of e) r(n)
    }

    function s(e) {
        let {
            permissionOverwrites_: t
        } = e;
        if (null != t)
            for (let e in t) {
                let n = t[e];
                n.allow = i.deserialize(n.allow), n.deny = i.deserialize(n.deny)
            }
        return e
    }
}