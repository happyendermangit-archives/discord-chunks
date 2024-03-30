function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return l
        }
    });
    var n = a("243547"),
        r = a("941504");

    function l(e) {
        switch (e) {
            case n.InternalTemplateCodes.CLASSROOM:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CLASSROOM, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CLASSROOM, nameLabel: r.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CLASSROOM, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CLASSROOM, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.LOCAL_COMMUNITIES:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LOCAL_COMMUNITIES, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LOCAL_COMMUNITIES, nameLabel: r.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_LOCAL_COMMUNITIES, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_LOCAL_COMMUNITIES, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.CREATORS_HOBBIES:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATORS_HOBBIES, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATORS_HOBBIES, nameLabel: r.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATORS_HOBBIES, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATORS_HOBBIES, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.GLOBAL_COMMUNITIES:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GLOBAL_COMMUNITIES, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GLOBAL_COMMUNITIES, nameLabel: r.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_GLOBAL_COMMUNITIES, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_GLOBAL_COMMUNITIES, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.FRIENDS_FAMILY:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_FRIENDS_FAMILY, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_FRIENDS_FAMILY, nameLabel: r.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_FRIENDS_FAMILY, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_FRIENDS_FAMILY, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.STUDY_GROUPS:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_STUDY_GROUPS, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_STUDY_GROUPS, nameLabel: r.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_STUDY_GROUPS, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_STUDY_GROUPS, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.CREATE_FROM_SCRATCH:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATE_FROM_SCRATCH, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATE_FROM_SCRATCH, nameLabel: r.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATE_FROM_SCRATCH, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATE_FROM_SCRATCH, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.CAMPUS_CLUBS:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CAMPUS_CLUBS, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CAMPUS_CLUBS, nameLabel: r.default.Messages.FORM_LABEL_SERVER_NAME, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CAMPUS_CLUBS, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.LEAGUE_CLUBS:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LEAGUE_CLUBS, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LEAGUE_CLUBS, nameLabel: r.default.Messages.FORM_LABEL_SERVER_NAME, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: r.default.Messages.DISCORD_NAME
                };
            case n.InternalTemplateCodes.GITHUB_HACKATHON:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GITHUB_HACKATHON, description: r.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GITHUB_HACKATHON, nameLabel: r.default.Messages.FORM_LABEL_SERVER_NAME, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: "GitHub Education"
                };
            default:
                return {
                    header: r.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD, nameLabel: r.default.Messages.FORM_LABEL_SERVER_NAME, terms: r.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: r.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT
                }
        }
    }
}