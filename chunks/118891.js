function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        APPLICATION_COMMAND_PERMISSIONS_LIMIT: function() {
            return _
        },
        APPLICATION_USER_INSTALL_BETA_USER_LIMIT: function() {
            return y
        },
        AUTOCOMPLETE_OPTION_DEBOUNCE_TIME: function() {
            return m
        },
        BOOLEAN_CHOICES: function() {
            return l
        },
        BuiltInSectionId: function() {
            return o
        },
        CONTEXT_MENU_COMMANDS_QUERY_LIMIT: function() {
            return p
        },
        DISCOVERY_COMMANDS_FRECENCY_LIMIT: function() {
            return f
        },
        DISCOVERY_COMMANDS_QUERY_LIMIT: function() {
            return c
        },
        FALSE_OPTION_NAME: function() {
            return s
        },
        MAX_SUBCOMMAND_LEVEL: function() {
            return E
        },
        SUB_COMMAND_KEY_SEPARATOR: function() {
            return d
        },
        TRUE_OPTION_NAME: function() {
            return u
        },
        getValidationErrorText: function() {
            return I
        }
    });
    var r, o, i = n("29570"),
        a = n("941504"),
        u = "True",
        s = "False",
        l = [{
            name: u,
            displayName: u,
            value: "true"
        }, {
            name: s,
            displayName: s,
            value: "false"
        }];
    (r = o || (o = {})).BUILT_IN = "-1", r.FRECENCY = "-2";
    var c = 10,
        f = 5,
        d = "\0",
        _ = 100,
        E = 3,
        p = 10,
        m = 500;
    Object.freeze([]), Object.freeze([]);
    var y = 25;

    function I(e) {
        if (null != e.choices) return a.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
        switch (e.type) {
            case i.ApplicationCommandOptionType.BOOLEAN:
                return a.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
            case i.ApplicationCommandOptionType.CHANNEL:
                return a.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
            case i.ApplicationCommandOptionType.INTEGER:
                return a.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
            case i.ApplicationCommandOptionType.NUMBER:
                return a.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
            case i.ApplicationCommandOptionType.ROLE:
                return a.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
            case i.ApplicationCommandOptionType.USER:
                return a.default.Messages.COMMAND_VALIDATION_USER_ERROR;
            case i.ApplicationCommandOptionType.MENTIONABLE:
                return a.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
            default:
                return a.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
        }
    }
}