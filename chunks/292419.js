function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLayoutComponentErrorText: function() {
            return _
        },
        transformComponents: function() {
            return E
        }
    }), n("47120");
    var i = n("911969"),
        r = n("622449"),
        s = n("768581"),
        a = n("823379"),
        o = n("280501"),
        l = n("689938");
    let u = (e, t) => ({
            id: e.id,
            name: e.name,
            animated: e.animated,
            src: t && null != e.id ? s.default.getEmojiURL({
                id: e.id,
                animated: e.animated || !1,
                size: 48
            }) : void 0
        }),
        d = e => (null == e ? void 0 : e.errorCode) === 429 ? l.default.Messages.INTERACTION_RATE_LIMITED : l.default.Messages.APPLICATION_COMMAND_FAILED,
        _ = (e, t, n) => {
            let s = (null == e ? void 0 : e.data.interactionType) === i.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === r.InteractionState.FAILED ? e.data.componentId : null;
            if (null != (null != s ? function(e, t) {
                    if (e.type === i.ComponentType.ACTION_ROW) {
                        var n;
                        return null !== (n = e.components.find(e => e.id === t)) && void 0 !== n ? n : null
                    }
                }(n, s) : null)) {
                var a;
                return null !== (a = null == t ? void 0 : t.interactionError) && void 0 !== a ? a : d(e)
            }
        },
        c = e => {
            switch (e) {
                case i.ComponentType.ACTION_ROW:
                case i.ComponentType.BUTTON:
                case i.ComponentType.STRING_SELECT:
                case i.ComponentType.INPUT_TEXT:
                case i.ComponentType.USER_SELECT:
                case i.ComponentType.ROLE_SELECT:
                case i.ComponentType.MENTIONABLE_SELECT:
                case i.ComponentType.CHANNEL_SELECT:
                case i.ComponentType.TEXT:
                    return !0
            }
        };

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.map((e, n) => (function e(t, n, r) {
            var s, d, _, E, T, f;
            if (!c(t.type)) return null;
            let {
                includeEmojiSrc: S
            } = n;
            switch (t.type) {
                case i.ComponentType.ACTION_ROW: {
                    let s = t.components.map((t, i) => (function(t, i) {
                        let s = e(t, n, [...r, i]);
                        return null == s ? null : s
                    })(t, i)).filter(a.isNotNullish);
                    return {
                        type: i.ComponentType.ACTION_ROW,
                        id: I(r),
                        components: s
                    }
                }
                case i.ComponentType.BUTTON: {
                    let e = null != t.emoji ? u(t.emoji, S) : void 0;
                    return {
                        type: i.ComponentType.BUTTON,
                        id: I(r),
                        customId: t.custom_id,
                        style: t.style,
                        disabled: t.disabled,
                        url: t.url,
                        label: t.label,
                        emoji: e
                    }
                }
                case i.ComponentType.STRING_SELECT:
                    return {
                        type: i.ComponentType.STRING_SELECT, id: I(r), customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
                            type: o.SelectOptionType.STRING,
                            label: e.label,
                            value: e.value,
                            default: e.default,
                            description: e.description,
                            emoji: null != e.emoji ? u(e.emoji, S) : void 0
                        })), placeholder: null !== (s = t.placeholder) && void 0 !== s ? s : l.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values
                    };
                case i.ComponentType.INPUT_TEXT:
                    return {
                        type: t.type, id: I(r), style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: null !== (d = t.required) && void 0 !== d && d, minLength: t.min_length, maxLength: t.max_length
                    };
                case i.ComponentType.USER_SELECT:
                    return {
                        type: i.ComponentType.USER_SELECT, id: I(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (_ = t.placeholder) && void 0 !== _ ? _ : l.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
                    };
                case i.ComponentType.ROLE_SELECT:
                    return {
                        type: i.ComponentType.ROLE_SELECT, id: I(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (E = t.placeholder) && void 0 !== E ? E : l.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
                    };
                case i.ComponentType.MENTIONABLE_SELECT:
                    return {
                        type: i.ComponentType.MENTIONABLE_SELECT, id: I(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (T = t.placeholder) && void 0 !== T ? T : l.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
                    };
                case i.ComponentType.CHANNEL_SELECT:
                    return {
                        type: i.ComponentType.CHANNEL_SELECT, id: I(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (f = t.placeholder) && void 0 !== f ? f : l.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, channelTypes: t.channel_types, defaultValues: t.default_values
                    };
                case i.ComponentType.TEXT:
                    return {
                        type: i.ComponentType.TEXT, id: I(r), items: t.items
                    };
                default:
                    return null
            }
        })(e, t, [n])).filter(e => null != e)
    }

    function I(e) {
        return (0, o.asComponentId)(e.join(","))
    }
}