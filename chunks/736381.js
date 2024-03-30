function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        decodeStreamKey: function() {
            return u
        },
        encodeStreamKey: function() {
            return s
        },
        isStreamKey: function() {
            return a
        }
    });
    var r = n("367965");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e) {
        return null != e && (e.startsWith(r.StreamTypes.GUILD) || e.startsWith(r.StreamTypes.CALL))
    }

    function u(e) {
        var t = e.split(":"),
            n = t[0];
        switch (n) {
            case r.StreamTypes.GUILD:
                var o = i(t, 4);
                return {
                    streamType: o[0], guildId: o[1], channelId: o[2], ownerId: o[3]
                };
            case r.StreamTypes.CALL:
                var a = i(t, 3);
                return {
                    streamType: a[0], channelId: a[1], ownerId: a[2]
                };
            default:
                throw Error("Unknown stream type ".concat(n))
        }
    }

    function s(e) {
        var t = e.streamType,
            n = e.guildId,
            o = e.channelId,
            i = e.ownerId;
        switch (t) {
            case r.StreamTypes.GUILD:
                return [t, n, o, i].join(":");
            case r.StreamTypes.CALL:
                return [t, o, i].join(":");
            default:
                throw Error("Unknown stream type ".concat(t))
        }
    }
}