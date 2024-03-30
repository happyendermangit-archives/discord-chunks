function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createComponents: function() {
            return function e(t, n) {
                var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    r = a.includeEmojiSrc;
                return t.map(function(t, f) {
                    if (!T(t.type)) return null;
                    var S, C, _, y, N, v, L = o.concat(f);
                    switch (t.type) {
                        case u.ComponentType.ACTION_ROW:
                            var I = null != t.components ? e(t.components, n, l, a, L) : void 0;
                            return {
                                type: u.ComponentType.ACTION_ROW, indices: L, components: I
                            };
                        case u.ComponentType.BUTTON:
                            if (p.includes(n) && null != t.custom_id && E.test(t.custom_id) && !(0, c.default)(l)) return null;
                            var O = null != t.emoji ? m(t.emoji, r) : void 0;
                            return {
                                type: u.ComponentType.BUTTON, customId: t.custom_id, style: t.style, disabled: t.disabled, url: t.url, label: t.label, emoji: O, indices: L, applicationId: n
                            };
                        case u.ComponentType.STRING_SELECT:
                            return {
                                type: u.ComponentType.STRING_SELECT, customId: t.custom_id, disabled: t.disabled, options: t.options.map(function(e) {
                                    return {
                                        type: i.SelectOptionType.STRING,
                                        label: e.label,
                                        value: e.value,
                                        default: e.default,
                                        description: e.description,
                                        emoji: null != e.emoji ? m(e.emoji, r) : void 0
                                    }
                                }), placeholder: null !== (S = t.placeholder) && void 0 !== S ? S : d.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: L, applicationId: n
                            };
                        case u.ComponentType.INPUT_TEXT:
                            return {
                                type: t.type, style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: t.required, minLength: t.min_length, maxLength: t.max_length, indices: L
                            };
                        case u.ComponentType.USER_SELECT:
                            return {
                                type: u.ComponentType.USER_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (C = t.placeholder) && void 0 !== C ? C : d.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: L, applicationId: n, selectedOptions: (0, s.getSnowflakeSelectDefaultValues)(t.default_values, l)
                            };
                        case u.ComponentType.ROLE_SELECT:
                            return {
                                type: u.ComponentType.ROLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (_ = t.placeholder) && void 0 !== _ ? _ : d.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: L, applicationId: n, selectedOptions: (0, s.getSnowflakeSelectDefaultValues)(t.default_values, l)
                            };
                        case u.ComponentType.MENTIONABLE_SELECT:
                            return {
                                type: u.ComponentType.MENTIONABLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (y = t.placeholder) && void 0 !== y ? y : d.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: L, applicationId: n, selectedOptions: (0, s.getSnowflakeSelectDefaultValues)(t.default_values, l)
                            };
                        case u.ComponentType.CHANNEL_SELECT:
                            return {
                                type: u.ComponentType.CHANNEL_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (N = t.placeholder) && void 0 !== N ? N : d.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: L, channelTypes: t.channel_types, defaultValues: t.default_values, applicationId: n, selectedOptions: (0, s.getSnowflakeSelectDefaultValues)(t.default_values, l, null !== (v = t.channel_types) && void 0 !== v ? v : [])
                            };
                        default:
                            return null
                    }
                }).filter(function(e) {
                    return null != e
                })
            }
        },
        getActionRowErrorText: function() {
            return f
        }
    });
    var l = n("392711"),
        a = n.n(l),
        u = n("29570"),
        o = n("142642"),
        r = n("299529"),
        i = n("162074"),
        s = n("36363"),
        c = n("179239"),
        d = n("941504"),
        p = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
        E = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
        m = function(e, t) {
            return {
                id: e.id,
                name: e.name,
                animated: e.animated,
                src: t && null != e.id ? r.default.getEmojiURL({
                    id: e.id,
                    animated: e.animated || !1,
                    size: 48
                }) : void 0
            }
        },
        f = function(e, t, n) {
            var l, r, i = (null == e ? void 0 : e.data.interactionType) === u.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === o.InteractionState.FAILED ? e.data.indices : null;
            if (null != i && a().isEqual(i.slice(0, i.length - 1), n.indices)) {
                ;
                return null !== (r = null == t ? void 0 : t.interactionError) && void 0 !== r ? r : (null == (l = e) ? void 0 : l.errorCode) === 429 ? d.default.Messages.INTERACTION_RATE_LIMITED : d.default.Messages.APPLICATION_COMMAND_FAILED
            }
        },
        T = function(e) {
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