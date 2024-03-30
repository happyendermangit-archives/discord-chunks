function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useActualStageSpeakerCount: function() {
            return d
        },
        useSortedRequestToSpeakParticipants: function() {
            return f
        },
        useStageParticipants: function() {
            return l
        },
        useStageParticipantsCount: function() {
            return c
        }
    });
    var r = n("898511"),
        o = n("671339"),
        i = n("711334"),
        a = n("991160");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
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
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e, t) {
        return s((0, r.useStateFromStores)([i.default], function() {
            return [i.default.getMutableParticipants(e, t), i.default.getParticipantsVersion(e)]
        }, [e, t], o.isVersionEqual), 1)[0]
    }

    function c(e, t) {
        return (0, r.useStateFromStores)([i.default], function() {
            return i.default.getParticipantCount(e, t)
        }, [e, t])
    }

    function f(e) {
        return s((0, r.useStateFromStores)([i.default], function() {
            return [i.default.getMutableRequestToSpeakParticipants(e), i.default.getRequestToSpeakParticipantsVersion(e)]
        }, [e], o.isVersionEqual), 1)[0]
    }

    function d(e) {
        return (0, r.useStateFromStores)([i.default], function() {
            return i.default.getMutableParticipants(e, a.StageChannelParticipantNamedIndex.SPEAKER).filter(function(e) {
                return e.type === a.StageChannelParticipantTypes.VOICE
            }).length
        }, [e])
    }
}