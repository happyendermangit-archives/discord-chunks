function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("216948"),
        o = n("941504");
    t.default = {
        MENTION_EVERYONE: function() {
            return {
                test: "everyone",
                text: "@everyone",
                description: o.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
            }
        },
        MENTION_HERE: function() {
            return {
                test: "here",
                text: "@here",
                description: o.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
            }
        },
        LAUNCHABLE_APPLICATIONS: function() {
            return r.default.launchableApplicationViewItems
        }
    }
}