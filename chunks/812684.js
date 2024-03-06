function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getActionRowErrorText: function() {
            return f
        },
        createComponents: function() {
            return function e(t, n) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    {
                        includeEmojiSrc: o
                    } = a;
                return t.map((t, T) => {
                    var f, C, _, N, L, y;
                    if (!S(t.type)) return null;
                    let O = i.concat(T);
                    switch (t.type) {
                        case u.ComponentType.ACTION_ROW:
                            let v = null != t.components ? e(t.components, n, l, a, O) : void 0;
                            return {
                                type: u.ComponentType.ACTION_ROW, indices: O, components: v
                            };
                        case u.ComponentType.BUTTON:
                            if (E.includes(n) && null != t.custom_id && p.test(t.custom_id) && !(0, d.default)(l)) return null;
                            let I = null != t.emoji ? m(t.emoji, o) : void 0;
                            return {
                                type: u.ComponentType.BUTTON, customId: t.custom_id, style: t.style, disabled: t.disabled, url: t.url, label: t.label, emoji: I, indices: O, applicationId: n
                            };
                        case u.ComponentType.STRING_SELECT:
                            return {
                                type: u.ComponentType.STRING_SELECT, customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
                                    type: s.SelectOptionType.STRING,
                                    label: e.label,
                                    value: e.value,
                                    default: e.default,
                                    description: e.description,
                                    emoji: null != e.emoji ? m(e.emoji, o) : void 0
                                })), placeholder: null !== (f = t.placeholder) && void 0 !== f ? f : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, applicationId: n
                            };
                        case u.ComponentType.INPUT_TEXT:
                            return {
                                type: t.type, style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: t.required, minLength: t.min_length, maxLength: t.max_length, indices: O
                            };
                        case u.ComponentType.USER_SELECT:
                            return {
                                type: u.ComponentType.USER_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (C = t.placeholder) && void 0 !== C ? C : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                            };
                        case u.ComponentType.ROLE_SELECT:
                            return {
                                type: u.ComponentType.ROLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (_ = t.placeholder) && void 0 !== _ ? _ : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                            };
                        case u.ComponentType.MENTIONABLE_SELECT:
                            return {
                                type: u.ComponentType.MENTIONABLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (N = t.placeholder) && void 0 !== N ? N : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                            };
                        case u.ComponentType.CHANNEL_SELECT:
                            return {
                                type: u.ComponentType.CHANNEL_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (L = t.placeholder) && void 0 !== L ? L : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, channelTypes: t.channel_types, defaultValues: t.default_values, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l, null !== (y = t.channel_types) && void 0 !== y ? y : [])
                            };
                        default:
                            return null
                    }
                }).filter(e => null != e)
            }
        }
    });
    var l = n("917351"),
        a = n.n(l),
        u = n("798609"),
        i = n("3765"),
        o = n("315102"),
        s = n("192112"),
        r = n("704257"),
        d = n("988878"),
        c = n("782340");
    let E = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
        p = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
        m = (e, t) => ({
            id: e.id,
            name: e.name,
            animated: e.animated,
            src: t && null != e.id ? o.default.getEmojiURL({
                id: e.id,
                animated: e.animated || !1,
                size: 48
            }) : void 0
        }),
        T = e => (null == e ? void 0 : e.errorCode) === 429 ? c.default.Messages.INTERACTION_RATE_LIMITED : c.default.Messages.APPLICATION_COMMAND_FAILED,
        f = (e, t, n) => {
            let l = (null == e ? void 0 : e.data.interactionType) === u.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === i.InteractionState.FAILED ? e.data.indices : null;
            if (null != l && a.isEqual(l.slice(0, l.length - 1), n.indices)) {
                var o;
                return null !== (o = null == t ? void 0 : t.interactionError) && void 0 !== o ? o : T(e)
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