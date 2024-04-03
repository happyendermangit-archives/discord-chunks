function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMAILS_SUBSECTION: function() {
            return r
        },
        EmailCategories: function() {
            return a
        },
        EmailCategoriesList: function() {
            return s
        },
        MarketingEmailCategories: function() {
            return i
        }
    });
    var l, a, u = n("689938");
    let r = "emails";
    (l = a || (a = {})).COMMUNICATION = "communication", l.SOCIAL = "social", l.TIPS = "tips", l.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events", l.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements", l.FAMILY_CENTER_DIGEST = "family_center_digest";
    let i = ["tips", "recommendations_and_events", "updates_and_announcements"],
        s = [{
            category: "communication",
            label: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
            subLabel: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION_SUBLABEL
        }, {
            category: "social",
            label: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
            subLabel: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL_SUBLABEL
        }, {
            category: "updates_and_announcements",
            label: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
            subLabel: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS_SUBLABEL
        }, {
            category: "tips",
            label: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
            subLabel: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS_SUBLABEL
        }, {
            category: "recommendations_and_events",
            label: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
            subLabel: () => u.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS_SUBLABEL
        }]
}