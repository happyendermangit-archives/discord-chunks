function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isStreamKey: function() {
            return r
        },
        decodeStreamKey: function() {
            return s
        },
        encodeStreamKey: function() {
            return a
        }
    }), n("222007"), n("70102");
    var i = n("706530");

    function r(e) {
        return null != e && (e.startsWith(i.StreamTypes.GUILD) || e.startsWith(i.StreamTypes.CALL))
    }

    function s(e) {
        let t = e.split(":"),
            n = t[0];
        switch (n) {
            case i.StreamTypes.GUILD: {
                let [e, n, i, r] = t;
                return {
                    streamType: e,
                    guildId: n,
                    channelId: i,
                    ownerId: r
                }
            }
            case i.StreamTypes.CALL: {
                let [e, n, i] = t;
                return {
                    streamType: e,
                    channelId: n,
                    ownerId: i
                }
            }
            default:
                throw Error("Unknown stream type ".concat(n))
        }
    }

    function a(e) {
        let {
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: s
        } = e;
        switch (t) {
            case i.StreamTypes.GUILD:
                return [t, n, r, s].join(":");
            case i.StreamTypes.CALL:
                return [t, r, s].join(":");
            default:
                throw Error("Unknown stream type ".concat(t))
        }
    }
}