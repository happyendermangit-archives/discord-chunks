function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setActiveCommand: function() {
            return f
        },
        setPreferredCommandId: function() {
            return E
        },
        updateOptionStates: function() {
            return h
        },
        updateOptionValidationStates: function() {
            return g
        },
        updateApplicationGuildCommandPermissions: function() {
            return m
        },
        performAutocomplete: function() {
            return p
        }
    }), n("222007");
    var i = n("627445"),
        s = n.n(i),
        r = n("872717"),
        a = n("913144"),
        o = n("798609"),
        l = n("271938"),
        u = n("299039"),
        d = n("246598"),
        c = n("524768"),
        _ = n("49111");

    function f(e) {
        let {
            channelId: t,
            command: n,
            section: i,
            location: r,
            initialValues: o,
            triggerSection: l,
            queryLength: u
        } = e;
        null != n && s(n.inputType !== c.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), a.default.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: i,
            initialValues: o,
            location: r,
            triggerSection: l,
            queryLength: u
        })
    }

    function E(e, t) {
        a.default.dispatch({
            type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
            channelId: e,
            commandId: t
        })
    }

    function h(e, t) {
        a.default.dispatch({
            type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
            channelId: e,
            changedOptionStates: t
        })
    }

    function g(e, t) {
        let n = Object.fromEntries(Object.entries(t).map(e => {
            let [t, n] = e;
            return [t, {
                lastValidationResult: n
            }]
        }));
        h(e, n)
    }

    function m(e, t, n, i) {
        return r.HTTP.put({
            body: {
                permissions: i
            },
            url: _.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
        })
    }

    function p(e, t, n) {
        var i;
        s(null != t.autocomplete, "Missing autocomplete context");
        let {
            query: c,
            name: f
        } = t.autocomplete, E = u.default.fromTimestamp(Date.now());
        a.default.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: E,
            channelId: t.channel.id,
            query: c,
            name: f
        }), null == d.default.getAutocompleteChoices(t.channel.id, f, c) && r.HTTP.post({
            url: _.Endpoints.INTERACTIONS,
            body: {
                type: o.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                application_id: e.applicationId,
                guild_id: null === (i = t.guild) || void 0 === i ? void 0 : i.id,
                channel_id: t.channel.id,
                session_id: l.default.getSessionId(),
                data: n,
                nonce: E
            },
            timeout: 3e3
        }).catch(() => {
            a.default.dispatch({
                type: "INTERACTION_FAILURE",
                nonce: E
            })
        })
    }
}