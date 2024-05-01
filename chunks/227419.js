function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("392711"),
        a = n.n(r),
        s = n("481060"),
        o = n("493683"),
        l = n("904245"),
        u = n("911969"),
        d = n("933557"),
        _ = n("699516"),
        c = n("594174"),
        E = n("895924"),
        I = n("689079"),
        T = n("981631"),
        f = n("689938");

    function S(e) {
        switch (e) {
            case T.ChannelTextAreaIntegrations.GIF.title:
            case T.ChannelTextAreaIntegrations.TENOR.title:
                return f.default.Messages.COMMAND_GIPHY_DESCRIPTION;
            default:
                return ""
        }
    }
    let h = [...a()(T.ChannelTextAreaIntegrations).values().map(e => ({
        id: e.commandId,
        name: e.command,
        displayName: e.command,
        type: u.ApplicationCommandType.CHAT,
        inputType: E.ApplicationCommandInputType.BUILT_IN_INTEGRATION,
        applicationId: I.BuiltInSectionId.BUILT_IN,
        get description() {
            return S(e.title)
        },
        get displayDescription() {
            return S(e.title)
        },
        options: e.type === T.ChannelTextAreaIntegrationTypes.GIF ? [{
            name: "query",
            displayName: "query",
            type: u.ApplicationCommandOptionType.STRING,
            get description() {
                return f.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
            },
            get displayDescription() {
                return f.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
            },
            required: !0
        }] : [],
        integrationType: e.type,
        integrationTitle: e.title
    })).value(), {
        id: "-15",
        name: "leave",
        displayName: "leave",
        type: u.ApplicationCommandType.CHAT,
        inputType: E.ApplicationCommandInputType.BUILT_IN,
        applicationId: I.BuiltInSectionId.BUILT_IN,
        get description() {
            return f.default.Messages.LEAVE_GROUP_DM
        },
        get displayDescription() {
            return f.default.Messages.LEAVE_GROUP_DM
        },
        options: [{
            name: "silent",
            displayName: "silent",
            type: u.ApplicationCommandOptionType.BOOLEAN,
            get description() {
                return f.default.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
            },
            get displayDescription() {
                return f.default.Messages.LEAVE_GROUP_DM_SILENTLY
            },
            required: !1
        }],
        predicate: e => {
            let {
                channel: t
            } = e;
            return t.isGroupDM()
        },
        execute: (e, t) => {
            var n, r;
            let {
                channel: a
            } = t, u = (0, d.computeChannelName)(a, c.default, _.default), E = f.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                name: u
            }), I = f.default.Messages.LEAVE_GROUP_DM_BODY.format({
                name: u
            }), T = null !== (r = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== r && r;
            async function S() {
                try {
                    await o.default.closePrivateChannel(a.id, void 0, T)
                } catch (e) {
                    l.default.sendBotMessage(a.id, f.default.Messages.LEAVE_GROUP_DM_ERROR)
                }
            }
            a.isManaged() && (E = f.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                name: u
            }), I = f.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                name: u
            })), (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
                header: E,
                confirmText: f.default.Messages.LEAVE_GROUP_DM,
                cancelText: f.default.Messages.CANCEL,
                onConfirm: S,
                ...e,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: I
                })
            }))
        }
    }];
    t.default = h
}