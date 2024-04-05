function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        createComponents: function() {
            return function e(t, l) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    {
                        includeEmojiSrc: s
                    } = a;
                return t.map((t, m) => {
                    var f, C, _, N, L, y;
                    if (!S(t.type)) return null;
                    let O = i.concat(m);
                    switch (t.type) {
                        case u.ComponentType.ACTION_ROW:
                            let I = null != t.components ? e(t.components, l, n, a, O) : void 0;
                            return {
                                type: u.ComponentType.ACTION_ROW, indices: O, components: I
                            };
                        case u.ComponentType.BUTTON:
                            if (E.includes(l) && null != t.custom_id && p.test(t.custom_id) && !(0, d.default)(n)) return null;
                            let A = null != t.emoji ? T(t.emoji, s) : void 0;
                            return {
                                type: u.ComponentType.BUTTON, customId: t.custom_id, style: t.style, disabled: t.disabled, url: t.url, label: t.label, emoji: A, indices: O, applicationId: l
                            };
                        case u.ComponentType.STRING_SELECT:
                            return {
                                type: u.ComponentType.STRING_SELECT, customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
                                    type: o.SelectOptionType.STRING,
                                    label: e.label,
                                    value: e.value,
                                    default: e.default,
                                    description: e.description,
                                    emoji: null != e.emoji ? T(e.emoji, s) : void 0
                                })), placeholder: null !== (f = t.placeholder) && void 0 !== f ? f : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, applicationId: l
                            };
                        case u.ComponentType.INPUT_TEXT:
                            return {
                                type: t.type, style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: t.required, minLength: t.min_length, maxLength: t.max_length, indices: O
                            };
                        case u.ComponentType.USER_SELECT:
                            return {
                                type: u.ComponentType.USER_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (C = t.placeholder) && void 0 !== C ? C : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: l, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, n)
                            };
                        case u.ComponentType.ROLE_SELECT:
                            return {
                                type: u.ComponentType.ROLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (_ = t.placeholder) && void 0 !== _ ? _ : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: l, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, n)
                            };
                        case u.ComponentType.MENTIONABLE_SELECT:
                            return {
                                type: u.ComponentType.MENTIONABLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (N = t.placeholder) && void 0 !== N ? N : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: l, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, n)
                            };
                        case u.ComponentType.CHANNEL_SELECT:
                            return {
                                type: u.ComponentType.CHANNEL_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (L = t.placeholder) && void 0 !== L ? L : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, channelTypes: t.channel_types, defaultValues: t.default_values, applicationId: l, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, n, null !== (y = t.channel_types) && void 0 !== y ? y : [])
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
    var n = l("392711"),
        a = l.n(n),
        u = l("911969"),
        i = l("622449"),
        s = l("768581"),
        o = l("280501"),
        r = l("811654"),
        d = l("978578"),
        c = l("689938");
    let E = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
        p = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
        T = (e, t) => ({
            id: e.id,
            name: e.name,
            animated: e.animated,
            src: t && null != e.id ? s.default.getEmojiURL({
                id: e.id,
                animated: e.animated || !1,
                size: 48
            }) : void 0
        }),
        m = e => (null == e ? void 0 : e.errorCode) === 429 ? c.default.Messages.INTERACTION_RATE_LIMITED : c.default.Messages.APPLICATION_COMMAND_FAILED,
        f = (e, t, l) => {
            let n = (null == e ? void 0 : e.data.interactionType) === u.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === i.InteractionState.FAILED ? e.data.indices : null;
            if (null != n && a().isEqual(n.slice(0, n.length - 1), l.indices)) {
                var s;
                return null !== (s = null == t ? void 0 : t.interactionError) && void 0 !== s ? s : m(e)
            }
        },
        S = e => {
            switch (e) {
                case u.ComponentType.ACTION_ROW:
                case u.ComponentType.BUTTON:
                case u.ComponentType.STRING_SELECT:
                case u.ComponentType.INPUT_TEXT:
                case u.ComponentType.USER_SELECT:
                case u.ComponentType.ROLE_SELECT:
                case u.ComponentType.MENTIONABLE_SELECT:
                case u.ComponentType.CHANNEL_SELECT:
                    return !0
            }
        }
}