function(e, s, a) {
    "use strict";
    a.r(s), a.d(s, {
        default: function() {
            return n
        }
    });
    var t = a("58346"),
        l = a("689938");

    function n(e) {
        switch (e) {
            case t.InternalTemplateCodes.CLASSROOM:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CLASSROOM, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CLASSROOM, nameLabel: l.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CLASSROOM, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CLASSROOM, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.LOCAL_COMMUNITIES:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LOCAL_COMMUNITIES, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LOCAL_COMMUNITIES, nameLabel: l.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_LOCAL_COMMUNITIES, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_LOCAL_COMMUNITIES, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.CREATORS_HOBBIES:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATORS_HOBBIES, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATORS_HOBBIES, nameLabel: l.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATORS_HOBBIES, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATORS_HOBBIES, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.GLOBAL_COMMUNITIES:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GLOBAL_COMMUNITIES, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GLOBAL_COMMUNITIES, nameLabel: l.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_GLOBAL_COMMUNITIES, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_GLOBAL_COMMUNITIES, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.FRIENDS_FAMILY:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_FRIENDS_FAMILY, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_FRIENDS_FAMILY, nameLabel: l.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_FRIENDS_FAMILY, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_FRIENDS_FAMILY, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.STUDY_GROUPS:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_STUDY_GROUPS, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_STUDY_GROUPS, nameLabel: l.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_STUDY_GROUPS, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_STUDY_GROUPS, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.CREATE_FROM_SCRATCH:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATE_FROM_SCRATCH, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATE_FROM_SCRATCH, nameLabel: l.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATE_FROM_SCRATCH, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATE_FROM_SCRATCH, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.CAMPUS_CLUBS:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CAMPUS_CLUBS, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CAMPUS_CLUBS, nameLabel: l.default.Messages.FORM_LABEL_SERVER_NAME, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CAMPUS_CLUBS, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.LEAGUE_CLUBS:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LEAGUE_CLUBS, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LEAGUE_CLUBS, nameLabel: l.default.Messages.FORM_LABEL_SERVER_NAME, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: l.default.Messages.DISCORD_NAME
                };
            case t.InternalTemplateCodes.GITHUB_HACKATHON:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GITHUB_HACKATHON, description: l.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GITHUB_HACKATHON, nameLabel: l.default.Messages.FORM_LABEL_SERVER_NAME, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: "GitHub Education"
                };
            default:
                return {
                    header: l.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD, nameLabel: l.default.Messages.FORM_LABEL_SERVER_NAME, terms: l.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: l.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT
                }
        }
    }
}