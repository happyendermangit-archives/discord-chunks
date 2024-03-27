function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("490983"),
        r = n("689938");
    t.default = {
        MENTION_EVERYONE: () => ({
            test: "everyone",
            text: "@everyone",
            description: r.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
        }),
        MENTION_HERE: () => ({
            test: "here",
            text: "@here",
            description: r.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
        }),
        LAUNCHABLE_APPLICATIONS: () => i.default.launchableApplicationViewItems
    }
}