function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        APPLICATION_COMMAND_PERMISSIONS_LIMIT: function() {
            return E
        },
        APPLICATION_USER_INSTALL_BETA_USER_LIMIT: function() {
            return S
        },
        AUTOCOMPLETE_OPTION_DEBOUNCE_TIME: function() {
            return f
        },
        BOOLEAN_CHOICES: function() {
            return u
        },
        BuiltInSectionId: function() {
            return r
        },
        CONTEXT_MENU_COMMANDS_QUERY_LIMIT: function() {
            return T
        },
        DISCOVERY_COMMANDS_FRECENCY_LIMIT: function() {
            return _
        },
        DISCOVERY_COMMANDS_QUERY_LIMIT: function() {
            return d
        },
        FALSE_OPTION_NAME: function() {
            return l
        },
        MAX_SUBCOMMAND_LEVEL: function() {
            return I
        },
        SUB_COMMAND_KEY_SEPARATOR: function() {
            return c
        },
        TRUE_OPTION_NAME: function() {
            return o
        },
        getValidationErrorText: function() {
            return h
        }
    });
    var i, r, a = n("911969"),
        s = n("689938");
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
    (i = r || (r = {})).BUILT_IN = "-1", i.FRECENCY = "-2";
    let d = 10,
        _ = 5,
        c = "\0",
        E = 100,
        I = 3,
        T = 10,
        f = 500;
    Object.freeze([]), Object.freeze([]);
    let S = 25;

    function h(e) {
        if (null != e.choices) return s.default.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
        switch (e.type) {
            case a.ApplicationCommandOptionType.BOOLEAN:
                return s.default.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
            case a.ApplicationCommandOptionType.CHANNEL:
                return s.default.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
            case a.ApplicationCommandOptionType.INTEGER:
                return s.default.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
            case a.ApplicationCommandOptionType.NUMBER:
                return s.default.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
            case a.ApplicationCommandOptionType.ROLE:
                return s.default.Messages.COMMAND_VALIDATION_ROLE_ERROR;
            case a.ApplicationCommandOptionType.USER:
                return s.default.Messages.COMMAND_VALIDATION_USER_ERROR;
            case a.ApplicationCommandOptionType.MENTIONABLE:
                return s.default.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
            default:
                return s.default.Messages.COMMAND_VALIDATION_GENERAL_ERROR
        }
    }
}