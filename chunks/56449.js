function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMessagesFromGuildFeedFetch: function() {
            return s
        },
        getThreadsFromGuildFeedFetch: function() {
            return l
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
        return function(e) {
            if (Array.isArray(e)) return i(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(e) {
        var t = e.children.map(function(e) {
            return u(e)
        });
        return [e.messages.map(function(e) {
            return e.message
        })].concat(a(t)).flat()
    }

    function s(e) {
        return e.results.items.flatMap(function(e) {
            switch (e.type) {
                case r.GuildFeedItemTypes.MESSAGE:
                case r.GuildFeedItemTypes.FORUM_POST:
                    return [e.message];
                case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    return e.messages.map(function(e) {
                        return e.message
                    });
                case r.GuildFeedItemTypes.CONVERSATION:
                    return u(e.root);
                default:
                    (0, o.assertNever)(e)
            }
        }).filter(o.isNotNullish)
    }

    function l(e) {
        return e.results.items.flatMap(function(e) {
            var t = [];
            switch (e.type) {
                case r.GuildFeedItemTypes.MESSAGE:
                    t.push(e.message.thread);
                    break;
                case r.GuildFeedItemTypes.FORUM_POST:
                    t.push(e.message.thread, e.thread);
                    break;
                case r.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    t.push.apply(t, a(e.messages.map(function(e) {
                        return e.message.thread
                    })));
                    break;
                case r.GuildFeedItemTypes.CONVERSATION:
                    t.push.apply(t, a(u(e.root).map(function(e) {
                        return e.thread
                    })));
                    break;
                default:
                    (0, o.assertNever)(e)
            }
            return t
        }).filter(o.isNotNullish)
    }
}