function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLayoutComponentErrorText: function() {
            return c
        },
        transformComponents: function() {
            return I
        }
    }), n("47120");
    var i = n("911969"),
        r = n("622449"),
        s = n("768494"),
        a = n("768581"),
        o = n("823379"),
        l = n("280501"),
        u = n("689938");
    let d = (e, t) => ({
            id: e.id,
            name: e.name,
            animated: e.animated,
            src: t && null != e.id ? a.default.getEmojiURL({
                id: e.id,
                animated: e.animated || !1,
                size: 48
            }) : void 0
        }),
        _ = e => (null == e ? void 0 : e.errorCode) === 429 ? u.default.Messages.INTERACTION_RATE_LIMITED : u.default.Messages.APPLICATION_COMMAND_FAILED,
        c = (e, t, n) => {
            let s = (null == e ? void 0 : e.data.interactionType) === i.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === r.InteractionState.FAILED ? e.data.componentId : null;
            if (null != (null != s ? function(e, t) {
                    if (e.type === i.ComponentType.ACTION_ROW) {
                        var n;
                        return null !== (n = e.components.find(e => e.id === t)) && void 0 !== n ? n : null
                    }
                }(n, s) : null)) {
                var a;
                return null !== (a = null == t ? void 0 : t.interactionError) && void 0 !== a ? a : _(e)
            }
        },
        E = e => {
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
                case i.ComponentType.MEDIA_GALLERY:
                case i.ComponentType.SEPARATOR:
                    return !0
            }
        };

    function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.map((e, n) => (function e(t, n, r) {
            var a, _, c, I, f, S, h, A;
            if (!E(t.type)) return null;
            let {
                includeEmojiSrc: m
            } = n;
            switch (t.type) {
                case i.ComponentType.ACTION_ROW: {
                    let s = t.components.map((t, i) => (function(t, i) {
                        let s = e(t, n, [...r, i]);
                        return null == s ? null : s
                    })(t, i)).filter(o.isNotNullish);
                    return {
                        type: i.ComponentType.ACTION_ROW,
                        id: T(r),
                        components: s
                    }
                }
                case i.ComponentType.BUTTON: {
                    let e = null != t.emoji ? d(t.emoji, m) : void 0;
                    return {
                        type: i.ComponentType.BUTTON,
                        id: T(r),
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
                        type: i.ComponentType.STRING_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
                            type: l.SelectOptionType.STRING,
                            label: e.label,
                            value: e.value,
                            default: e.default,
                            description: e.description,
                            emoji: null != e.emoji ? d(e.emoji, m) : void 0
                        })), placeholder: null !== (a = t.placeholder) && void 0 !== a ? a : u.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values
                    };
                case i.ComponentType.INPUT_TEXT:
                    return {
                        type: t.type, id: T(r), style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: null !== (_ = t.required) && void 0 !== _ && _, minLength: t.min_length, maxLength: t.max_length
                    };
                case i.ComponentType.USER_SELECT:
                    return {
                        type: i.ComponentType.USER_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (c = t.placeholder) && void 0 !== c ? c : u.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
                    };
                case i.ComponentType.ROLE_SELECT:
                    return {
                        type: i.ComponentType.ROLE_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (I = t.placeholder) && void 0 !== I ? I : u.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
                    };
                case i.ComponentType.MENTIONABLE_SELECT:
                    return {
                        type: i.ComponentType.MENTIONABLE_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (f = t.placeholder) && void 0 !== f ? f : u.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values
                    };
                case i.ComponentType.CHANNEL_SELECT:
                    return {
                        type: i.ComponentType.CHANNEL_SELECT, id: T(r), customId: t.custom_id, disabled: t.disabled, placeholder: null !== (S = t.placeholder) && void 0 !== S ? S : u.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, channelTypes: t.channel_types, defaultValues: t.default_values
                    };
                case i.ComponentType.TEXT:
                    return {
                        type: i.ComponentType.TEXT, id: T(r), items: t.items
                    };
                case i.ComponentType.MEDIA_GALLERY:
                    return {
                        type: i.ComponentType.MEDIA_GALLERY, id: T(r), items: t.items.map(e => ({
                            media: (0, s.toUnfurledMediaItem)(e.media),
                            description: e.description,
                            spoiler: e.spoiler
                        }))
                    };
                case i.ComponentType.SEPARATOR:
                    return {
                        type: i.ComponentType.SEPARATOR, id: T(r), divider: null === (h = t.divider) || void 0 === h || h, spacing: null !== (A = t.spacing) && void 0 !== A ? A : i.SeparatorSpacingSize.SMALL
                    };
                default:
                    return null
            }
        })(e, t, [n])).filter(e => null != e)
    }

    function T(e) {
        return (0, l.asComponentId)(e.join(","))
    }
}