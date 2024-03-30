function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BOT_MENTION_COMMAND_REGEX: function() {
            return o
        },
        PREFIX_COMMAND_REGEX: function() {
            return r
        }
    });
    var r = RegExp("^(?:(?:(?:[A-Za-z!$%?;+.=\\-~]{1,2})[@#>]{1,3})|(?:(?:[A-Za-z]{1,2})?(?:~|[!$%?;+.=-]{1,3})))[A-Za-z]", "u"),
        o = RegExp("^<@!?(\\d+)>", "u")
}