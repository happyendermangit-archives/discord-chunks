function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("29570"),
        i = n("119578"),
        a = n("225098"),
        u = n("158201"),
        s = n("314653"),
        l = n("169850"),
        c = n("653754"),
        f = n("118891"),
        d = n("941504");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var E = (_(r = {}, o.ApplicationCommandOptionType.SUB_COMMAND, function() {
            return {
                success: !1
            }
        }), _(r, o.ApplicationCommandOptionType.SUB_COMMAND_GROUP, function() {
            return {
                success: !1
            }
        }), _(r, o.ApplicationCommandOptionType.STRING, function(e, t, n) {
            var r = null === (i = function(e) {
                switch (e.type) {
                    case "emoji":
                        return e.surrogate;
                    case "text":
                        return e.text
                }
            }(e)) || void 0 === i ? void 0 : i.trim();
            if (t.autocomplete) {
                var i, a, u, l = s.default.getAutocompleteLastChoices(n, t.name);
                null != l && (r = String(null !== (u = null === (a = l.find(function(e) {
                    return e.name === r
                })) || void 0 === a ? void 0 : a.value) && void 0 !== u ? u : r))
            }
            return null == t.choices || null != r && t.choices.map(function(e) {
                return e.displayName
            }).includes(r) ? t.type === o.ApplicationCommandOptionType.STRING && (void 0 !== t.minLength || void 0 !== t.maxLength) ? void 0 !== r ? function(e, t, n) {
                if (void 0 !== t.minLength && e.length < t.minLength || void 0 !== t.maxLength && e.length > t.maxLength) {
                    if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength) return {
                        success: !1,
                        error: n.exactRangeErrorMessage.format({
                            value: y(t.minLength)
                        })
                    };
                    if (void 0 !== t.maxLength && void 0 !== t.minLength) return {
                        success: !1,
                        error: n.rangeErrorMessage.format({
                            minimum: y(t.minLength),
                            maximum: y(t.maxLength)
                        })
                    };
                    else if (void 0 !== t.minLength) return {
                        success: !1,
                        error: n.minErrorMessage.format({
                            minimum: y(t.minLength)
                        })
                    };
                    else if (void 0 !== t.maxLength) return {
                        success: !1,
                        error: n.maxErrorMessage.format({
                            maximum: y(t.maxLength)
                        })
                    }
                }
                return {
                    success: !0
                }
            }(r, t, {
                exactRangeErrorMessage: d.default.Messages.COMMAND_VALIDATION_STRING_EXACT_RANGE_ERROR,
                rangeErrorMessage: d.default.Messages.COMMAND_VALIDATION_STRING_RANGE_ERROR,
                minErrorMessage: d.default.Messages.COMMAND_VALIDATION_STRING_MINIMUM_ERROR,
                maxErrorMessage: d.default.Messages.COMMAND_VALIDATION_STRING_MAXIMUM_ERROR
            }) : {
                success: !0
            } : {
                success: !0
            } : {
                success: !1
            }
        }), _(r, o.ApplicationCommandOptionType.BOOLEAN, function(e) {
            if ("text" !== e.type) return {
                success: !1
            };
            var t = e.text.trim();
            return {
                success: f.BOOLEAN_CHOICES.map(function(e) {
                    return e.displayName.toLowerCase()
                }).includes(t.toLowerCase())
            }
        }), _(r, o.ApplicationCommandOptionType.INTEGER, function(e, t, n) {
            if ("text" !== e.type || t.type !== o.ApplicationCommandOptionType.INTEGER) return {
                success: !1
            };
            var r = e.text.trim();
            if (0 === r.length) return {
                success: !1
            };
            if (null != t.choices) return t.choices.map(function(e) {
                return e.displayName
            }).includes(r) ? {
                success: !0
            } : {
                success: !1
            };
            var i = s.default.getAutocompleteLastChoices(n, t.name);
            if (null != i && i.map(function(e) {
                    return e.displayName
                }).includes(r)) return {
                success: !0
            };
            var u = Number(l.normalizeNumericString(a.default.locale, r));
            return !isNaN(u) && Number.isInteger(u) && Number.isSafeInteger(u) ? m(u, t, d.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, d.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, d.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR) : {
                success: !1
            }
        }), _(r, o.ApplicationCommandOptionType.NUMBER, function(e, t, n) {
            if ("text" !== e.type || t.type !== o.ApplicationCommandOptionType.NUMBER) return {
                success: !1
            };
            var r = e.text.trim();
            if (0 === r.length) return {
                success: !1
            };
            if (null != t.choices) return t.choices.map(function(e) {
                return e.displayName
            }).includes(r) ? {
                success: !0
            } : {
                success: !1
            };
            var i = s.default.getAutocompleteLastChoices(n, t.name);
            if (null != i && i.map(function(e) {
                    return e.displayName
                }).includes(r)) return {
                success: !0
            };
            var u = Number(l.normalizeNumericString(a.default.locale, r));
            return isNaN(u) || u > Number.MAX_SAFE_INTEGER || u < Number.MIN_SAFE_INTEGER ? {
                success: !1
            } : m(u, t, d.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, d.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, d.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR)
        }), _(r, o.ApplicationCommandOptionType.USER, function(e, t, n, r) {
            if ("text" !== e.type) return {
                success: "userMention" === e.type
            };
            if ((0, c.isSnowflake)(e.text)) return {
                success: !0
            };
            var o = (0, i.resolveApplicationCommandOption)(e.text, r, n, {
                allowRoles: !1
            });
            return {
                success: (null == o ? void 0 : o.type) === "userMention"
            }
        }), _(r, o.ApplicationCommandOptionType.CHANNEL, function(e, t, n, r) {
            if ("text" !== e.type) return {
                success: "channelMention" === e.type
            };
            if ((0, c.isSnowflake)(e.text)) return {
                success: !0
            };
            var o = (0, i.resolveApplicationCommandOption)(e.text, r, n);
            return {
                success: (null == o ? void 0 : o.type) === "channelMention"
            }
        }), _(r, o.ApplicationCommandOptionType.ROLE, function(e, t, n, r) {
            if ("text" !== e.type) return {
                success: p(e)
            };
            if ((0, c.isSnowflake)(e.text)) return {
                success: !0
            };
            var o = (0, i.resolveApplicationCommandOption)(e.text, r, n, {
                allowUsers: !1
            });
            return {
                success: (null == o ? void 0 : o.type) === "roleMention"
            }
        }), _(r, o.ApplicationCommandOptionType.MENTIONABLE, function(e, t, n, r) {
            if ("text" !== e.type) return {
                success: "userMention" === e.type || p(e)
            };
            if ((0, c.isSnowflake)(e.text)) return {
                success: !0
            };
            var o = (0, i.resolveApplicationCommandOption)(e.text, r, n);
            return {
                success: null != o && ("userMention" === o.type || p(o))
            }
        }), _(r, o.ApplicationCommandOptionType.ATTACHMENT, function(e, t, n, r, o) {
            if ("text" !== e.type) return {
                success: !1
            };
            var i = u.default.getUpload(n, t.name, (0, c.getCommandAttachmentDraftType)(o));
            return {
                success: null != i && i.filename === e.text
            }
        }), r),
        p = function(e) {
            return "roleMention" === e.type || "textMention" === e.type && "@everyone" === e.text
        };

    function m(e, t, n, r, o) {
        if (null != t.minValue && e < t.minValue || null != t.maxValue && e > t.maxValue) {
            if (null != t.maxValue && null != t.minValue) return {
                success: !1,
                error: n.format({
                    minimum: y(t.minValue),
                    maximum: y(t.maxValue)
                })
            };
            if (null != t.minValue) return {
                success: !1,
                error: r.format({
                    minimum: y(t.minValue)
                })
            };
            else if (null != t.maxValue) return {
                success: !1,
                error: o.format({
                    maximum: y(t.maxValue)
                })
            }
        }
        return {
            success: !0
        }
    }

    function y(e) {
        return e.toLocaleString(d.default.getLocale(), {
            useGrouping: !1
        })
    }
    t.default = E
}