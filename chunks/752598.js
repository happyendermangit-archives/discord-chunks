function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getInteractionTimeoutTimestamp: function() {
            return m
        },
        executeMessageComponentInteraction: function() {
            return p
        },
        executePrimaryEntryPointInteraction: function() {
            return S
        },
        handleInteractionResponse: function() {
            return T
        },
        InteractionStatusViewState: function() {
            return i
        },
        getInteractionStatusViewState: function() {
            return I
        },
        canRetryInteractionData: function() {
            return C
        }
    }), n("222007");
    var i, s, r = n("872717"),
        a = n("913144"),
        o = n("819689"),
        l = n("798609"),
        u = n("263024"),
        d = n("271938"),
        c = n("299039"),
        f = n("274800"),
        _ = n("809810"),
        h = n("3765"),
        E = n("606981"),
        g = n("49111");

    function m(e) {
        return null == e || "" === e || Number.isNaN(e) ? Date.now() : c.default.extractTimestamp(e) + 9e5
    }
    let p = async e => {
        let {
            componentType: t,
            messageId: n,
            messageFlags: i,
            customId: s,
            indices: a,
            applicationId: o,
            channelId: h,
            guildId: E,
            localState: m
        } = e, p = c.default.fromTimestamp(Date.now());
        if (!_.default.canQueueInteraction(n, p)) return;
        await u.default.unarchiveThreadIfNecessary(h), (0, f.addQueued)(p, {
            messageId: n,
            data: {
                interactionType: l.InteractionTypes.MESSAGE_COMPONENT,
                customId: s,
                indices: a
            },
            onFailure: (e, t) => v(h, e, t)
        }), null != m && (0, f.queueInteractionComponentState)(n, p, m, a);
        let S = {
            type: l.InteractionTypes.MESSAGE_COMPONENT,
            nonce: p,
            guild_id: E,
            channel_id: h,
            message_flags: i,
            message_id: n,
            application_id: o,
            session_id: d.default.getSessionId(),
            data: {
                component_type: t,
                custom_id: s,
                ... function(e) {
                    if (null == e) return null;
                    if (e.type === l.ComponentType.STRING_SELECT || e.type === l.ComponentType.INPUT_TEXT) return e;
                    let t = e.selectedOptions.map(e => e.value);
                    return {
                        type: e.type,
                        values: t
                    }
                }(m)
            }
        };
        await r.default.post({
            url: g.Endpoints.INTERACTIONS,
            body: S,
            timeout: 3e3
        }, e => {
            T(p, h, E, e)
        })
    }, S = async e => {
        let {
            applicationId: t,
            channelId: n,
            guildId: i
        } = e, s = c.default.fromTimestamp(Date.now()), a = {
            type: l.InteractionTypes.APPLICATION_COMMAND,
            nonce: s,
            guild_id: i,
            channel_id: n,
            application_id: t,
            session_id: d.default.getSessionId(),
            data: {
                type: l.ApplicationCommandType.PRIMARY_ENTRY_POINT
            }
        };
        await r.default.post({
            url: g.Endpoints.INTERACTIONS,
            body: a,
            timeout: 3e3
        }, e => {
            T(s, n, null != i ? i : null, e)
        })
    }, v = (e, t, n) => {
        null == n && null != t && o.default.sendClydeError(e, t)
    }, T = (e, t, n, i) => {
        if (!i.ok) {
            if (!i.hasErr) {
                var s;
                if (i.status >= 400 && i.status < 500 && i.body) {
                    if (i.body.code === g.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                        let s = (0, E.getFirstSkemaError)(i.body.errors);
                        null != s && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === s.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === s.code) && a.default.dispatch({
                            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                            channelId: t,
                            guildId: n
                        }), (0, f.setFailed)(e, void 0, null == s ? void 0 : s.message);
                        return
                    }(0, f.setFailed)(e, void 0, i.body.message);
                    return
                }(0, f.setFailed)(e, null === (s = i.body) || void 0 === s ? void 0 : s.code);
                return
            }(0, f.setFailed)(e)
        }
    };
    (s = i || (i = {}))[s.SENDING = 0] = "SENDING", s[s.CREATED = 1] = "CREATED", s[s.FAILED = 2] = "FAILED", s[s.TIMED_OUT = 3] = "TIMED_OUT";
    let I = (e, t) => {
        var n;
        let i = null == t ? void 0 : t.state,
            s = e.state === g.MessageStates.SENT && m(e.id) < Date.now();
        let r = e.state === g.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : c.default.extractTimestamp(n) + 3e3) < Date.now(),
            a = (null == t ? void 0 : t.data.interactionType) === l.InteractionTypes.APPLICATION_COMMAND,
            o = e.isCommandType();
        if (a && i === h.InteractionState.QUEUED || o && e.state === g.MessageStates.SENDING && null != t) return 0;
        if (a && i === h.InteractionState.CREATED || e.hasFlag(g.MessageFlags.LOADING) && !s) return 1;
        if (null != e.interaction && e.hasFlag(g.MessageFlags.LOADING) && s) return 3;
        else if (null != e.interaction && !e.hasFlag(g.MessageFlags.LOADING) && r) return 3;
        else if (o && e.state === g.MessageStates.SEND_FAILED) return 2
    };

    function C(e) {
        let t = e.options;
        for (;
            (null == t ? void 0 : t.length) === 1 && (t[0].type === l.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === l.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
        for (let e of null != t ? t : [])
            if (e.type === l.ApplicationCommandOptionType.ATTACHMENT) return !1;
        return !0
    }
}