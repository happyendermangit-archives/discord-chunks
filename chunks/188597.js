function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InteractionStatusViewState: function() {
            return i
        },
        canRetryInteractionData: function() {
            return O
        },
        executeMessageComponentInteraction: function() {
            return h
        },
        executePrimaryEntryPointInteraction: function() {
            return A
        },
        getInteractionStatusViewState: function() {
            return p
        },
        getInteractionTimeoutTimestamp: function() {
            return S
        },
        handleInteractionResponse: function() {
            return N
        }
    }), n("47120");
    var i, r, a = n("544891"),
        s = n("570140"),
        o = n("904245"),
        l = n("911969"),
        u = n("346479"),
        d = n("314897"),
        _ = n("709054"),
        c = n("603721"),
        E = n("282397"),
        I = n("622449"),
        T = n("96989"),
        f = n("981631");

    function S(e) {
        return null == e || "" === e || Number.isNaN(e) ? Date.now() : _.default.extractTimestamp(e) + 9e5
    }
    let h = async e => {
        let {
            componentType: t,
            messageId: n,
            messageFlags: i,
            customId: r,
            componentId: s,
            applicationId: o,
            channelId: I,
            guildId: T,
            localState: S
        } = e, h = _.default.fromTimestamp(Date.now());
        if (!E.default.canQueueInteraction(n, h)) return;
        await u.default.unarchiveThreadIfNecessary(I), (0, c.addQueued)(h, {
            messageId: n,
            data: {
                interactionType: l.InteractionTypes.MESSAGE_COMPONENT,
                customId: r,
                componentId: s
            },
            onFailure: (e, t) => m(I, e, t)
        }), null != S && (0, c.queueInteractionComponentState)(n, h, S, s);
        let A = {
            type: l.InteractionTypes.MESSAGE_COMPONENT,
            nonce: h,
            guild_id: T,
            channel_id: I,
            message_flags: i,
            message_id: n,
            application_id: o,
            session_id: d.default.getSessionId(),
            data: {
                component_type: t,
                custom_id: r,
                ... function(e) {
                    if (null == e) return null;
                    if (e.type === l.ComponentType.STRING_SELECT || e.type === l.ComponentType.INPUT_TEXT) return e;
                    let t = e.selectedOptions.map(e => e.value);
                    return {
                        type: e.type,
                        values: t
                    }
                }(S)
            }
        };
        await a.HTTP.post({
            url: f.Endpoints.INTERACTIONS,
            body: A,
            timeout: 3e3
        }, e => {
            N(h, I, T, e)
        })
    }, A = async e => {
        let {
            applicationId: t,
            channelId: n,
            guildId: i,
            command: r
        } = e, s = _.default.fromTimestamp(Date.now()), o = null == r ? {
            type: l.ApplicationCommandType.PRIMARY_ENTRY_POINT
        } : {
            application_id: t,
            name: r.name,
            type: r.type,
            version: r.version,
            id: r.id
        }, u = {
            type: l.InteractionTypes.APPLICATION_COMMAND,
            nonce: s,
            guild_id: i,
            channel_id: n,
            application_id: t,
            session_id: d.default.getSessionId(),
            data: o
        };
        await a.HTTP.post({
            url: f.Endpoints.INTERACTIONS,
            body: u,
            timeout: 3e3
        }, e => {
            N(s, n, null != i ? i : null, e)
        })
    }, m = (e, t, n) => {
        null == n && null != t && o.default.sendClydeError(e, t)
    }, N = (e, t, n, i) => {
        if (!i.ok) {
            if (!i.hasErr) {
                var r;
                if (i.status >= 400 && i.status < 500 && i.body) {
                    if (i.body.code === f.AbortCodes.INVALID_FORM_BODY && i.body.errors) {
                        let r = (0, T.getFirstSkemaError)(i.body.errors);
                        null != r && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === r.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === r.code) && s.default.dispatch({
                            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                            channelId: t,
                            guildId: n
                        }), (0, c.setFailed)(e, void 0, null == r ? void 0 : r.message);
                        return
                    }(0, c.setFailed)(e, void 0, i.body.message);
                    return
                }(0, c.setFailed)(e, null === (r = i.body) || void 0 === r ? void 0 : r.code);
                return
            }(0, c.setFailed)(e)
        }
    };
    (r = i || (i = {}))[r.SENDING = 0] = "SENDING", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED", r[r.TIMED_OUT = 3] = "TIMED_OUT", r[r.EPHEMERAL_SUCCESS = 4] = "EPHEMERAL_SUCCESS";
    let p = (e, t) => {
        var n;
        let i = null == t ? void 0 : t.state,
            r = e.state === f.MessageStates.SENT && S(e.id) < Date.now();
        let a = e.state === f.MessageStates.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : _.default.extractTimestamp(n) + 3e3) < Date.now(),
            s = (null == t ? void 0 : t.data.interactionType) === l.InteractionTypes.APPLICATION_COMMAND,
            o = e.isCommandType();
        if (s && i === I.InteractionState.QUEUED || o && e.state === f.MessageStates.SENDING && null != t) return 0;
        if (s && i === I.InteractionState.CREATED || e.hasFlag(f.MessageFlags.LOADING) && !r) return 1;
        if (null != e.interaction && e.hasFlag(f.MessageFlags.LOADING) && r) return 3;
        else if (null != e.interaction && !e.hasFlag(f.MessageFlags.LOADING) && a) return 3;
        else if (o && e.state === f.MessageStates.SEND_FAILED) return 2;
        else if (null != e.interaction && e.hasFlag(f.MessageFlags.EPHEMERAL)) return 4
    };

    function O(e) {
        let t = e.options;
        for (;
            (null == t ? void 0 : t.length) === 1 && (t[0].type === l.ApplicationCommandOptionType.SUB_COMMAND_GROUP || t[0].type === l.ApplicationCommandOptionType.SUB_COMMAND);) t = t[0].options;
        for (let e of null != t ? t : [])
            if (e.type === l.ApplicationCommandOptionType.ATTACHMENT) return !1;
        return !0
    }
}