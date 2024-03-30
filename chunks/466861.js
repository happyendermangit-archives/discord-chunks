function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        getAllMessageIdsFromFeedItem: function() {
            return s
        },
        getAllMessagesFromFeedItem: function() {
            return u
        }
    });
    var r = n("193695"),
        o = n("162677");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e) {
        switch (e.type) {
            case r.GuildFeedItemTypes.MESSAGE:
            case r.GuildFeedItemTypes.FORUM_POST:
                return e.message;
            case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return e.messages[e.messages.length - 1].message;
            case r.GuildFeedItemTypes.CONVERSATION:
                return e.root.messages[e.root.messages.length - 1];
            default:
                (0, o.assertNever)(e)
        }
    }

    function u(e) {
        switch (e.type) {
            case r.GuildFeedItemTypes.MESSAGE:
            case r.GuildFeedItemTypes.FORUM_POST:
                return new Set([e.message]);
            case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                return new Set(e.messages.map(function(e) {
                    return e.message
                }));
            case r.GuildFeedItemTypes.CONVERSATION:
                return new Set(function e(t) {
                    var n, r = t.children.map(function(t) {
                        return e(t)
                    });
                    return [t.messages].concat(function(e) {
                        if (Array.isArray(e)) return i(e)
                    }(n = r) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                        }
                    }(n) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).flat()
                }(e.root));
            default:
                (0, o.assertNever)(e)
        }
    }

    function s(e) {
        return new Set(Array.from(u(e)).map(function(e) {
            return e.id
        }))
    }
}