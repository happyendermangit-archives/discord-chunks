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
            return I
        },
        updateApplicationGuildCommandPermissions: function() {
            return S
        },
        updateOptionStates: function() {
            return T
        },
        updateOptionValidationStates: function() {
            return f
        }
    }), n("47120");
    var i = n("512722"),
        r = n.n(i),
        a = n("544891"),
        s = n("570140"),
        o = n("911969"),
        l = n("314897"),
        u = n("709054"),
        d = n("174212"),
        _ = n("895924"),
        c = n("981631");

    function E(e) {
        let {
            channelId: t,
            command: n,
            section: i,
            location: a,
            initialValues: o,
            triggerSection: l,
            queryLength: u
        } = e;
        null != n && r()(n.inputType !== _.ApplicationCommandInputType.PLACEHOLDER, "command should not be placeholder"), s.default.dispatch({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: n,
            section: i,
            initialValues: o,
            location: a,
            triggerSection: l,
            queryLength: u
        })
    }

    function I(e, t) {
        s.default.dispatch({
            type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
            channelId: e,
            commandId: t
        })
    }

    function T(e, t) {
        s.default.dispatch({
            type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
            channelId: e,
            changedOptionStates: t
        })
    }

    function f(e, t) {
        T(e, Object.fromEntries(Object.entries(t).map(e => {
            let [t, n] = e;
            return [t, {
                lastValidationResult: n
            }]
        })))
    }

    function S(e, t, n, i) {
        return a.HTTP.put({
            body: {
                permissions: i
            },
            url: c.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n)
        })
    }

    function h(e, t, n) {
        var i;
        r()(null != t.autocomplete, "Missing autocomplete context");
        let {
            query: _,
            name: E
        } = t.autocomplete, I = u.default.fromTimestamp(Date.now());
        s.default.dispatch({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST",
            nonce: I,
            channelId: t.channel.id,
            query: _,
            name: E
        }), null == d.default.getAutocompleteChoices(t.channel.id, E, _) && a.HTTP.post({
            url: c.Endpoints.INTERACTIONS,
            body: {
                type: o.InteractionTypes.APPLICATION_COMMAND_AUTOCOMPLETE,
                application_id: e.applicationId,
                guild_id: null === (i = t.guild) || void 0 === i ? void 0 : i.id,
                channel_id: t.channel.id,
                session_id: l.default.getSessionId(),
                data: n,
                nonce: I
            },
            timeout: 3e3
        }).catch(() => {
            s.default.dispatch({
                type: "INTERACTION_FAILURE",
                nonce: I
            })
        })
    }
}