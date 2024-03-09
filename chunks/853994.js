function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMAILS_SUBSECTION: function() {
            return i
        },
        EmailCategories: function() {
            return a
        },
        MarketingEmailCategories: function() {
            return r
        },
        EmailCategoriesList: function() {
            return u
        }
    });
    var s, a, l = n("782340");
    let i = "emails";
    (s = a || (a = {})).COMMUNICATION = "communication", s.SOCIAL = "social", s.TIPS = "tips", s.RECOMMENDATIONS_AND_EVENTS = "recommendations_and_events", s.UPDATES_AND_ANNOUNCEMENTS = "updates_and_announcements", s.FAMILY_CENTER_DIGEST = "family_center_digest";
    let r = ["tips", "recommendations_and_events", "updates_and_announcements"],
        u = [{
            category: "communication",
            label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
            subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION_SUBLABEL
        }, {
            category: "social",
            label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
            subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL_SUBLABEL
        }, {
            category: "updates_and_announcements",
            label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
            subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS_SUBLABEL
        }, {
            category: "tips",
            label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
            subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS_SUBLABEL
        }, {
            category: "recommendations_and_events",
            label: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
            subLabel: () => l.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS_SUBLABEL
        }]
}