function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showReportModalForDiscoverableGuild: function() {
            return m
        },
        showReportModalForFirstDM: function() {
            return v
        },
        showReportModalForGuildDirectoryEntry: function() {
            return _
        },
        showReportModalForGuildScheduledEvent: function() {
            return h
        },
        showReportModalForInappropriateConversationSafetyAlert: function() {
            return T
        },
        showReportModalForMessage: function() {
            return f
        },
        showReportModalForStageChannel: function() {
            return E
        },
        showReportModalForUser: function() {
            return x
        },
        showUnauthenticatedReportModalForMessage: function() {
            return N
        },
        showUnauthenticatedReportModalForUser: function() {
            return p
        },
        submitHamReportForFirstDM: function() {
            return R
        },
        submitReportForInappropriateConversationSafetyAlert: function() {
            return g
        }
    });
    var a = n("367907"),
        l = n("427679"),
        r = n("23750"),
        s = n("598077"),
        i = n("595044"),
        d = n("82554"),
        o = n("185625"),
        u = n("443599"),
        c = n("981631");

    function m(e, t) {
        I(d.ReportNames.GUILD_DISCOVERY, {
            guild_id: e.id
        }), (0, u.showReportModal)({
            name: d.ReportNames.GUILD_DISCOVERY,
            record: e
        }, {}, t)
    }

    function _(e, t) {
        I(d.ReportNames.GUILD_DIRECTORY_ENTRY, {
            channel_id: e.channelId,
            guild_id: e.guildId
        }), (0, u.showReportModal)({
            name: d.ReportNames.GUILD_DIRECTORY_ENTRY,
            record: e
        }, {}, t)
    }

    function f(e, t) {
        I(d.ReportNames.MESSAGE, {
            message_id: e.id,
            channel_id: e.channel_id
        });
        let n = (0, i.shouldShowFraudMenuVariant)();
        (0, u.showReportModal)({
            name: d.ReportNames.MESSAGE,
            record: e
        }, {
            variant: n ? "4" : void 0
        }, t)
    }

    function E(e, t) {
        let n = l.default.getStageInstanceByChannel(e.id);
        null != n && (I(d.ReportNames.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id
        }), (0, u.showReportModal)({
            name: d.ReportNames.STAGE_CHANNEL,
            record: n
        }, {}, t))
    }

    function h(e, t) {
        var n;
        I(d.ReportNames.GUILD_SCHEDULED_EVENT, {
            guild_scheduled_event_id: e.id,
            guild_id: e.guild_id,
            channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
        }), (0, u.showReportModal)({
            name: d.ReportNames.GUILD_SCHEDULED_EVENT,
            record: e
        }, {}, t)
    }

    function v(e, t) {
        I(d.ReportNames.FIRST_DM, {
            message_id: e.id,
            channel_id: e.channel_id
        }), (0, u.showReportModal)({
            name: d.ReportNames.FIRST_DM,
            record: e
        }, {}, t, void 0, !1)
    }
    async function R(e, t) {
        try {
            await (0, o.submitHeadlessReport)({
                name: d.ReportNames.FIRST_DM,
                record: e
            }, {
                variant: "_first_dm_ham_v1"
            }), null == t || t()
        } catch {}
    }

    function x(e, t, n) {
        I(d.ReportNames.USER, {
            reported_user_id: e.id
        }), (0, u.showReportModal)({
            name: d.ReportNames.USER,
            record: e,
            contextualGuildId: t
        }, {}, n, void 0, !1)
    }

    function p(e, t) {
        let n = new s.default({});
        I(d.UnauthenticatedReportNames.USER, {
            reported_user_id: n.id
        }), (0, u.showReportModal)({
            name: d.UnauthenticatedReportNames.USER,
            record: n
        }, {}, t, void 0, !1, !1, e)
    }

    function N(e, t) {
        let n = new r.default({});
        I(d.UnauthenticatedReportNames.MESSAGE, {
            message_id: void 0,
            channel_id: void 0
        }), (0, u.showReportModal)({
            name: d.UnauthenticatedReportNames.MESSAGE,
            record: n
        }, {}, t, void 0, !1, !1, e)
    }
    async function g(e, t, n) {
        try {
            await (0, o.submitHeadlessReport)({
                name: d.ReportNames.MESSAGE,
                record: e
            }, {
                variant: "safety_alerts_headless_v1"
            }), null == t || t()
        } catch {
            null == n || n()
        }
    }

    function T(e, t) {
        I(d.ReportNames.MESSAGE, {
            message_id: e.id,
            channel_id: e.channel_id
        }), (0, u.showReportModal)({
            name: d.ReportNames.MESSAGE,
            record: e
        }, {
            variant: "safety_alerts_v1"
        }, t)
    }

    function I(e, t) {
        a.default.trackWithMetadata(c.AnalyticEvents.IAR_MODAL_OPEN, {
            report_type: e,
            ...t
        })
    }
}