function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setActiveCommand: function() {
            return _
        },
        setPreferredCommandId: function() {
            return h
        },
        updateOptionStates: function() {
            return E
        },
        updateOptionValidationStates: function() {
            return g
        },
        updateApplicationGuildCommandPermissions: function() {
            return m
        },
        querySearchManager: function() {
            return p
        },
        performAutocomplete: function() {
            return S
        },
        fetchCommand: function() {
            return v
        },
        fetchCommands: function() {
            return T
        },
        fetchCommandsForApplication: function() {
            return I
        },
        updateRegistry: function() {
            return C
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
        f = n("49111");

    function _(e) {
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

    function h(e, t) {
        a.default.dispatch({
            type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
            channelId: e,
            commandId: t
        })
    }

    function E(e, t) {
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
        E(e, n)
    }

    function m(e, t, n, i) {
        return r.default.put({
            body: {
                permissions: i
            },
            url: f.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
        })
    }
    let p = (e, t, n, i, s) => {
        a.default.dispatch({
            type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
            context: e,
            query: t,
            limit: n,
            commandType: i,
            applicationId: s
        })
    };

    function S(e, t, n) {
        var i;
        s(null != t.autocomplete, "Missing autocomplete context");
        let {
            query: c,
            name: _
        } = t.autocomplete, h = u.default.fromTimestamp(Date.now());
        a.default.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: h,
            channelId: t.channel.id,
            query: c,
            name: _
        }), null == d.default.getAutocompleteChoices(t.channel.id, _, c) && r.default.post({
            url: f.Endpoints.INTERACTIONS,
            body: {
                type: o.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                application_id: e.applicationId,
                guild_id: null === (i = t.guild) || void 0 === i ? void 0 : i.id,
                channel_id: t.channel.id,
                session_id: l.default.getSessionId(),
                data: n,
                nonce: h
            },
            timeout: 3e3
        }).catch(() => {
            a.default.dispatch({
                type: "INTERACTION_FAILURE",
                nonce: h
            })
        })
    }

    function v(e, t, n) {
        a.default.dispatch({
            type: "APPLICATION_COMMAND_FETCH",
            channelId: t,
            commandId: n,
            guildId: e
        })
    }

    function T(e, t, n) {
        a.default.dispatch({
            type: "APPLICATION_COMMANDS_FETCH",
            channelId: t,
            commandIds: n,
            guildId: e
        })
    }

    function I(e) {
        let {
            guildId: t,
            channelId: n,
            applicationId: i
        } = e;
        a.default.dispatch({
            type: "APPLICATION_COMMANDS_FETCH_FOR_APPLICATION",
            channelId: n,
            guildId: t,
            applicationId: i
        })
    }

    function C(e, t, n) {
        a.default.dispatch({
            type: "APPLICATION_COMMAND_REGISTRY_UPDATE",
            applications: t,
            commands: e,
            channelId: n
        })
    }
}