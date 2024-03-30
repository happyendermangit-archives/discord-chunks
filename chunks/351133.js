function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("911969"),
        r = n("465343"),
        s = n("706454"),
        a = n("117530"),
        o = n("174212"),
        l = n("456007"),
        u = n("581364"),
        d = n("689079"),
        _ = n("689938");
    let c = {
            [i.ApplicationCommandOptionType.SUB_COMMAND]: () => ({
                success: !1
            }),
            [i.ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({
                success: !1
            }),
            [i.ApplicationCommandOptionType.STRING]: (e, t, n) => {
                var r, s, a;
                let l = null === (r = function(e) {
                    switch (e.type) {
                        case "emoji":
                            return e.surrogate;
                        case "text":
                            return e.text
                    }
                }(e)) || void 0 === r ? void 0 : r.trim();
                if (t.autocomplete) {
                    let e = o.default.getAutocompleteLastChoices(n, t.name);
                    null != e && (l = String(null !== (a = null === (s = e.find(e => e.name === l)) || void 0 === s ? void 0 : s.value) && void 0 !== a ? a : l))
                }
                return null == t.choices || null != l && t.choices.map(e => e.displayName).includes(l) ? t.type === i.ApplicationCommandOptionType.STRING && (void 0 !== t.minLength || void 0 !== t.maxLength) ? void 0 !== l ? function(e, t, n) {
                    if (void 0 !== t.minLength && e.length < t.minLength || void 0 !== t.maxLength && e.length > t.maxLength) {
                        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength) return {
                            success: !1,
                            error: n.exactRangeErrorMessage.format({
                                value: T(t.minLength)
                            })
                        };
                        if (void 0 !== t.maxLength && void 0 !== t.minLength) return {
                            success: !1,
                            error: n.rangeErrorMessage.format({
                                minimum: T(t.minLength),
                                maximum: T(t.maxLength)
                            })
                        };
                        else if (void 0 !== t.minLength) return {
                            success: !1,
                            error: n.minErrorMessage.format({
                                minimum: T(t.minLength)
                            })
                        };
                        else if (void 0 !== t.maxLength) return {
                            success: !1,
                            error: n.maxErrorMessage.format({
                                maximum: T(t.maxLength)
                            })
                        }
                    }
                    return {
                        success: !0
                    }
                }(l, t, {
                    exactRangeErrorMessage: _.default.Messages.COMMAND_VALIDATION_STRING_EXACT_RANGE_ERROR,
                    rangeErrorMessage: _.default.Messages.COMMAND_VALIDATION_STRING_RANGE_ERROR,
                    minErrorMessage: _.default.Messages.COMMAND_VALIDATION_STRING_MINIMUM_ERROR,
                    maxErrorMessage: _.default.Messages.COMMAND_VALIDATION_STRING_MAXIMUM_ERROR
                }) : {
                    success: !0
                } : {
                    success: !0
                } : {
                    success: !1
                }
            },
            [i.ApplicationCommandOptionType.BOOLEAN]: e => {
                if ("text" !== e.type) return {
                    success: !1
                };
                let t = e.text.trim();
                return {
                    success: d.BOOLEAN_CHOICES.map(e => e.displayName.toLowerCase()).includes(t.toLowerCase())
                }
            },
            [i.ApplicationCommandOptionType.INTEGER]: (e, t, n) => {
                if ("text" !== e.type || t.type !== i.ApplicationCommandOptionType.INTEGER) return {
                    success: !1
                };
                let r = e.text.trim();
                if (0 === r.length) return {
                    success: !1
                };
                if (null != t.choices) return t.choices.map(e => e.displayName).includes(r) ? {
                    success: !0
                } : {
                    success: !1
                };
                let a = o.default.getAutocompleteLastChoices(n, t.name);
                if (null != a && a.map(e => e.displayName).includes(r)) return {
                    success: !0
                };
                let u = Number(l.normalizeNumericString(s.default.locale, r));
                return !isNaN(u) && Number.isInteger(u) && Number.isSafeInteger(u) ? I(u, t, _.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, _.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, _.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR) : {
                    success: !1
                }
            },
            [i.ApplicationCommandOptionType.NUMBER]: (e, t, n) => {
                if ("text" !== e.type || t.type !== i.ApplicationCommandOptionType.NUMBER) return {
                    success: !1
                };
                let r = e.text.trim();
                if (0 === r.length) return {
                    success: !1
                };
                if (null != t.choices) return t.choices.map(e => e.displayName).includes(r) ? {
                    success: !0
                } : {
                    success: !1
                };
                let a = o.default.getAutocompleteLastChoices(n, t.name);
                if (null != a && a.map(e => e.displayName).includes(r)) return {
                    success: !0
                };
                let u = Number(l.normalizeNumericString(s.default.locale, r));
                return isNaN(u) || u > Number.MAX_SAFE_INTEGER || u < Number.MIN_SAFE_INTEGER ? {
                    success: !1
                } : I(u, t, _.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, _.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, _.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR)
            },
            [i.ApplicationCommandOptionType.USER]: (e, t, n, i) => {
                if ("text" !== e.type) return {
                    success: "userMention" === e.type
                };
                {
                    if ((0, u.isSnowflake)(e.text)) return {
                        success: !0
                    };
                    let t = (0, r.resolveApplicationCommandOption)(e.text, i, n, {
                        allowRoles: !1
                    });
                    return {
                        success: (null == t ? void 0 : t.type) === "userMention"
                    }
                }
            },
            [i.ApplicationCommandOptionType.CHANNEL]: (e, t, n, i) => {
                if ("text" !== e.type) return {
                    success: "channelMention" === e.type
                };
                {
                    if ((0, u.isSnowflake)(e.text)) return {
                        success: !0
                    };
                    let t = (0, r.resolveApplicationCommandOption)(e.text, i, n);
                    return {
                        success: (null == t ? void 0 : t.type) === "channelMention"
                    }
                }
            },
            [i.ApplicationCommandOptionType.ROLE]: (e, t, n, i) => {
                if ("text" !== e.type) return {
                    success: E(e)
                };
                {
                    if ((0, u.isSnowflake)(e.text)) return {
                        success: !0
                    };
                    let t = (0, r.resolveApplicationCommandOption)(e.text, i, n, {
                        allowUsers: !1
                    });
                    return {
                        success: (null == t ? void 0 : t.type) === "roleMention"
                    }
                }
            },
            [i.ApplicationCommandOptionType.MENTIONABLE]: (e, t, n, i) => {
                if ("text" !== e.type) return {
                    success: "userMention" === e.type || E(e)
                };
                {
                    if ((0, u.isSnowflake)(e.text)) return {
                        success: !0
                    };
                    let t = (0, r.resolveApplicationCommandOption)(e.text, i, n);
                    return {
                        success: null != t && ("userMention" === t.type || E(t))
                    }
                }
            },
            [i.ApplicationCommandOptionType.ATTACHMENT]: (e, t, n, i, r) => {
                if ("text" !== e.type) return {
                    success: !1
                };
                let s = a.default.getUpload(n, t.name, (0, u.getCommandAttachmentDraftType)(r));
                return {
                    success: null != s && s.filename === e.text
                }
            }
        },
        E = e => "roleMention" === e.type || "textMention" === e.type && "@everyone" === e.text;

    function I(e, t, n, i, r) {
        if (null != t.minValue && e < t.minValue || null != t.maxValue && e > t.maxValue) {
            if (null != t.maxValue && null != t.minValue) return {
                success: !1,
                error: n.format({
                    minimum: T(t.minValue),
                    maximum: T(t.maxValue)
                })
            };
            if (null != t.minValue) return {
                success: !1,
                error: i.format({
                    minimum: T(t.minValue)
                })
            };
            else if (null != t.maxValue) return {
                success: !1,
                error: r.format({
                    maximum: T(t.maxValue)
                })
            }
        }
        return {
            success: !0
        }
    }

    function T(e) {
        return e.toLocaleString(_.default.getLocale(), {
            useGrouping: !1
        })
    }
    t.default = c
}