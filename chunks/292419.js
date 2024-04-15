function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createComponents: function() {
            return function e(t, n) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    {
                        includeEmojiSrc: o
                    } = r;
                return t.map((t, T) => {
                    var f, h, A, m, N, p;
                    if (!S(t.type)) return null;
                    let O = a.concat(T);
                    switch (t.type) {
                        case s.ComponentType.ACTION_ROW:
                            let R = null != t.components ? e(t.components, n, i, r, O) : void 0;
                            return {
                                type: s.ComponentType.ACTION_ROW, indices: O, components: R
                            };
                        case s.ComponentType.BUTTON:
                            if (c.includes(n) && null != t.custom_id && E.test(t.custom_id) && !(0, d.default)(i)) return null;
                            let C = null != t.emoji ? I(t.emoji, o) : void 0;
                            return {
                                type: s.ComponentType.BUTTON, customId: t.custom_id, style: t.style, disabled: t.disabled, url: t.url, label: t.label, emoji: C, indices: O, applicationId: n
                            };
                        case s.ComponentType.STRING_SELECT:
                            return {
                                type: s.ComponentType.STRING_SELECT, customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
                                    type: l.SelectOptionType.STRING,
                                    label: e.label,
                                    value: e.value,
                                    default: e.default,
                                    description: e.description,
                                    emoji: null != e.emoji ? I(e.emoji, o) : void 0
                                })), placeholder: null !== (f = t.placeholder) && void 0 !== f ? f : _.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, applicationId: n
                            };
                        case s.ComponentType.INPUT_TEXT:
                            return {
                                type: t.type, style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: t.required, minLength: t.min_length, maxLength: t.max_length, indices: O
                            };
                        case s.ComponentType.USER_SELECT:
                            return {
                                type: s.ComponentType.USER_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (h = t.placeholder) && void 0 !== h ? h : _.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, u.getSnowflakeSelectDefaultValues)(t.default_values, i)
                            };
                        case s.ComponentType.ROLE_SELECT:
                            return {
                                type: s.ComponentType.ROLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (A = t.placeholder) && void 0 !== A ? A : _.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, u.getSnowflakeSelectDefaultValues)(t.default_values, i)
                            };
                        case s.ComponentType.MENTIONABLE_SELECT:
                            return {
                                type: s.ComponentType.MENTIONABLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (m = t.placeholder) && void 0 !== m ? m : _.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, u.getSnowflakeSelectDefaultValues)(t.default_values, i)
                            };
                        case s.ComponentType.CHANNEL_SELECT:
                            return {
                                type: s.ComponentType.CHANNEL_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (N = t.placeholder) && void 0 !== N ? N : _.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, channelTypes: t.channel_types, defaultValues: t.default_values, applicationId: n, selectedOptions: (0, u.getSnowflakeSelectDefaultValues)(t.default_values, i, null !== (p = t.channel_types) && void 0 !== p ? p : [])
                            };
                        default:
                            return null
                    }
                }).filter(e => null != e)
            }
        },
        getActionRowErrorText: function() {
            return f
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("911969"),
        a = n("622449"),
        o = n("768581"),
        l = n("280501"),
        u = n("811654"),
        d = n("978578"),
        _ = n("689938");
    let c = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
        E = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
        I = (e, t) => ({
            id: e.id,
            name: e.name,
            animated: e.animated,
            src: t && null != e.id ? o.default.getEmojiURL({
                id: e.id,
                animated: e.animated || !1,
                size: 48
            }) : void 0
        }),
        T = e => (null == e ? void 0 : e.errorCode) === 429 ? _.default.Messages.INTERACTION_RATE_LIMITED : _.default.Messages.APPLICATION_COMMAND_FAILED,
        f = (e, t, n) => {
            let i = (null == e ? void 0 : e.data.interactionType) === s.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === a.InteractionState.FAILED ? e.data.indices : null;
            if (null != i && r().isEqual(i.slice(0, i.length - 1), n.indices)) {
                var o;
                return null !== (o = null == t ? void 0 : t.interactionError) && void 0 !== o ? o : T(e)
            }
        },
        S = e => {
            switch (e) {
                case s.ComponentType.ACTION_ROW:
                case s.ComponentType.BUTTON:
                case s.ComponentType.STRING_SELECT:
                case s.ComponentType.INPUT_TEXT:
                case s.ComponentType.USER_SELECT:
                case s.ComponentType.ROLE_SELECT:
                case s.ComponentType.MENTIONABLE_SELECT:
                case s.ComponentType.CHANNEL_SELECT:
                    return !0
            }
        }
}