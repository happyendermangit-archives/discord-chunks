function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        performAutocomplete: function() {
            return h
        },
        setActiveCommand: function() {
            return E
        },
        setPreferredCommandId: function() {
            return p
        },
        updateApplicationGuildCommandPermissions: function() {
            return I
        },
        updateOptionStates: function() {
            return m
        },
        updateOptionValidationStates: function() {
            return y
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("967888"),
        a = n("629815"),
        u = n("29570"),
        s = n("217014"),
        l = n("523018"),
        c = n("314653"),
        f = n("861272"),
        d = n("281767");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        var t = e.channelId,
            n = e.command,
            r = e.section,
            i = e.location,
            u = e.initialValues,
            s = e.triggerSection,
            l = e.queryLength;
        null != n && o()(n.inputType !== f.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), a.default.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: r,
            initialValues: u,
            location: i,
            triggerSection: s,
            queryLength: l
        })
    }

    function p(e, t) {
        a.default.dispatch({
            type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
            channelId: e,
            commandId: t
        })
    }

    function m(e, t) {
        a.default.dispatch({
            type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
            channelId: e,
            changedOptionStates: t
        })
    }

    function y(e, t) {
        m(e, Object.fromEntries(Object.entries(t).map(function(e) {
            var t, n, r = (n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t = e) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }());
            return [r[0], {
                lastValidationResult: r[1]
            }]
        })))
    }

    function I(e, t, n, r) {
        return i.HTTP.put({
            body: {
                permissions: r
            },
            url: d.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
        })
    }

    function h(e, t, n) {
        o()(null != t.autocomplete, "Missing autocomplete context");
        var r, f = t.autocomplete,
            _ = f.query,
            E = f.name,
            p = l.default.fromTimestamp(Date.now());
        a.default.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: p,
            channelId: t.channel.id,
            query: _,
            name: E
        }), null == c.default.getAutocompleteChoices(t.channel.id, E, _) && i.HTTP.post({
            url: d.Endpoints.INTERACTIONS,
            body: {
                type: u.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                application_id: e.applicationId,
                guild_id: null === (r = t.guild) || void 0 === r ? void 0 : r.id,
                channel_id: t.channel.id,
                session_id: s.default.getSessionId(),
                data: n,
                nonce: p
            },
            timeout: 3e3
        }).catch(function() {
            a.default.dispatch({
                type: "INTERACTION_FAILURE",
                nonce: p
            })
        })
    }
}