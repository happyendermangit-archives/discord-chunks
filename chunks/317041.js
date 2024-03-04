function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TRUE_OPTION_NAME: function() {
            return o
        },
        FALSE_OPTION_NAME: function() {
            return l
        },
        BOOLEAN_CHOICES: function() {
            return u
        },
        BuiltInSectionId: function() {
            return s
        },
        DISCOVERY_COMMANDS_QUERY_LIMIT: function() {
            return d
        },
        DISCOVERY_COMMANDS_FRECENCY_LIMIT: function() {
            return c
        },
        DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: function() {
            return f
        },
        SUB_COMMAND_KEY_SEPARATOR: function() {
            return _
        },
        APPLICATION_COMMAND_PERMISSIONS_LIMIT: function() {
            return h
        },
        MAX_SUBCOMMAND_LEVEL: function() {
            return E
        },
        CONTEXT_MENU_COMMANDS_QUERY_LIMIT: function() {
            return g
        },
        AUTOCOMPLETE_OPTION_DEBOUNCE_TIME: function() {
            return m
        },
        getValidationErrorText: function() {
            return p
        }
    });
    var i, s, r = n("798609"),
        a = n("782340");
    let o = "True",
        l = "False",
        u = [{
            name: o,
            displayName: o,
            value: "true"
        }, {
            name: l,
            displayName: l,
            value: "false"
        }];
    (i = s || (s = {})).BUILT_IN = "-1", i.FRECENCY = "-2";
    let d = 10,
        c = 5,
        f = 25,
        _ = "\x00",
        h = 100,
        E = 3,
        g = 10,
        m = 500;

    function p(e) {
        if (null != e.choices) return a.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
        switch (e.type) {
            case r.ApplicationCommandOptionType.BOOLEAN:
                return a.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
            case r.ApplicationCommandOptionType.CHANNEL:
                return a.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
            case r.ApplicationCommandOptionType.INTEGER:
                return a.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
            case r.ApplicationCommandOptionType.NUMBER:
                return a.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
            case r.ApplicationCommandOptionType.ROLE:
                return a.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
            case r.ApplicationCommandOptionType.USER:
                return a.default.Messages.COMMAND_VALIDATION_USER_ERROR;
            case r.ApplicationCommandOptionType.MENTIONABLE:
                return a.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
            default:
                return a.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
        }
    }
    Object.freeze([]), Object.freeze([])
}