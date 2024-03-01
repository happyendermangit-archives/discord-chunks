function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("917351"),
        a = n.n(l),
        o = n("77078"),
        r = n("450911"),
        s = n("819689"),
        u = n("798609"),
        d = n("679653"),
        c = n("27618"),
        p = n("697218"),
        f = n("524768"),
        m = n("317041"),
        _ = n("49111"),
        I = n("782340");

    function C(e) {
        switch (e) {
            case _.ChannelTextAreaIntegrations.GIF.title:
            case _.ChannelTextAreaIntegrations.TENOR.title:
                return I.default.Messages.COMMAND_GIPHY_DESCRIPTION;
            default:
                return ""
        }
    }
    let T = [...a(_.ChannelTextAreaIntegrations).values().map(e => ({
        id: e.commandId,
        name: e.command,
        displayName: e.command,
        type: u.ApplicationCommandType.CHAT,
        inputType: f.ApplicationCommandInputType.BUILT_IN_INTEGRATION,
        applicationId: m.BuiltInSectionId.BUILT_IN,
        get description() {
            return C(e.title)
        },
        get displayDescription() {
            return C(e.title)
        },
        options: e.type === _.ChannelTextAreaIntegrationTypes.GIF ? [{
            name: "query",
            displayName: "query",
            type: u.ApplicationCommandOptionType.STRING,
            get description() {
                return I.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
            },
            get displayDescription() {
                return I.default.Messages.COMMAND_GIPHY_QUERY_DESCRIPTION
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
        inputType: f.ApplicationCommandInputType.BUILT_IN,
        applicationId: m.BuiltInSectionId.BUILT_IN,
        get description() {
            return I.default.Messages.LEAVE_GROUP_DM
        },
        get displayDescription() {
            return I.default.Messages.LEAVE_GROUP_DM
        },
        options: [{
            name: "silent",
            displayName: "silent",
            type: u.ApplicationCommandOptionType.BOOLEAN,
            get description() {
                return I.default.Messages.LEAVE_GROUP_DM_SILENTLY_COMMAND_OPTION
            },
            get displayDescription() {
                return I.default.Messages.LEAVE_GROUP_DM_SILENTLY
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
            var n, l;
            let {
                channel: a
            } = t, u = (0, d.computeChannelName)(a, p.default, c.default), f = I.default.Messages.LEAVE_GROUP_DM_TITLE.format({
                name: u
            }), m = I.default.Messages.LEAVE_GROUP_DM_BODY.format({
                name: u
            }), _ = null !== (l = null === (n = e.find(e => "silent" === e.name)) || void 0 === n ? void 0 : n.value) && void 0 !== l && l;
            async function C() {
                try {
                    await r.default.closePrivateChannel(a.id, void 0, _)
                } catch (e) {
                    s.default.sendBotMessage(a.id, I.default.Messages.LEAVE_GROUP_DM_ERROR)
                }
            }
            a.isManaged() && (f = I.default.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({
                name: u
            }), m = I.default.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({
                name: u
            })), (0, o.openModal)(e => (0, i.jsx)(o.ConfirmModal, {
                header: f,
                confirmText: I.default.Messages.LEAVE_GROUP_DM,
                cancelText: I.default.Messages.CANCEL,
                onConfirm: C,
                ...e,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: m
                })
            }))
        }
    }];
    var A = T
}