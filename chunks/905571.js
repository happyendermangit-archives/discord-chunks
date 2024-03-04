function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("577427"),
        s = n("782340"),
        r = {
            MENTION_EVERYONE: () => ({
                test: "everyone",
                text: "@everyone",
                description: s.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
            }),
            MENTION_HERE: () => ({
                test: "here",
                text: "@here",
                description: s.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
            }),
            LAUNCHABLE_APPLICATIONS: () => i.default.launchableApplicationViewItems
        }
}