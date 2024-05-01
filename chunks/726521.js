function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showReportModalForDiscoverableGuild: function() {
            return c
        },
        showReportModalForFirstDM: function() {
            return S
        },
        showReportModalForGuildDirectoryEntry: function() {
            return E
        },
        showReportModalForGuildScheduledEvent: function() {
            return f
        },
        showReportModalForInappropriateConversationSafetyAlert: function() {
            return O
        },
        showReportModalForMessage: function() {
            return I
        },
        showReportModalForStageChannel: function() {
            return T
        },
        showReportModalForUser: function() {
            return A
        },
        showUnauthenticatedReportModalForMessage: function() {
            return N
        },
        showUnauthenticatedReportModalForUser: function() {
            return m
        },
        submitHamReportForFirstDM: function() {
            return h
        },
        submitReportForInappropriateConversationSafetyAlert: function() {
            return p
        }
    });
    var i = n("367907"),
        r = n("427679"),
        a = n("23750"),
        s = n("598077"),
        o = n("595044"),
        l = n("82554"),
        u = n("185625"),
        d = n("443599"),
        _ = n("981631");

    function c(e, t) {
        R(l.ReportNames.GUILD_DISCOVERY, {
            guild_id: e.id
        }), (0, d.showReportModal)({
            name: l.ReportNames.GUILD_DISCOVERY,
            record: e
        }, {}, t)
    }

    function E(e, t) {
        R(l.ReportNames.GUILD_DIRECTORY_ENTRY, {
            channel_id: e.channelId,
            guild_id: e.guildId
        }), (0, d.showReportModal)({
            name: l.ReportNames.GUILD_DIRECTORY_ENTRY,
            record: e
        }, {}, t)
    }

    function I(e, t) {
        R(l.ReportNames.MESSAGE, {
            message_id: e.id,
            channel_id: e.channel_id
        });
        let n = (0, o.shouldShowFraudMenuVariant)();
        (0, d.showReportModal)({
            name: l.ReportNames.MESSAGE,
            record: e
        }, {
            variant: n ? "4" : void 0
        }, t)
    }

    function T(e, t) {
        let n = r.default.getStageInstanceByChannel(e.id);
        null != n && (R(l.ReportNames.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id
        }), (0, d.showReportModal)({
            name: l.ReportNames.STAGE_CHANNEL,
            record: n
        }, {}, t))
    }

    function f(e, t) {
        var n;
        R(l.ReportNames.GUILD_SCHEDULED_EVENT, {
            guild_scheduled_event_id: e.id,
            guild_id: e.guild_id,
            channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
        }), (0, d.showReportModal)({
            name: l.ReportNames.GUILD_SCHEDULED_EVENT,
            record: e
        }, {}, t)
    }

    function S(e, t) {
        R(l.ReportNames.FIRST_DM, {
            message_id: e.id,
            channel_id: e.channel_id
        }), (0, d.showReportModal)({
            name: l.ReportNames.FIRST_DM,
            record: e
        }, {}, t, void 0, !1)
    }
    async function h(e, t) {
        try {
            await (0, u.submitHeadlessReport)({
                name: l.ReportNames.FIRST_DM,
                record: e
            }, {
                variant: "_first_dm_ham_v1"
            }), null == t || t()
        } catch {}
    }

    function A(e, t, n) {
        R(l.ReportNames.USER, {
            reported_user_id: e.id
        }), (0, d.showReportModal)({
            name: l.ReportNames.USER,
            record: e,
            contextualGuildId: t
        }, {}, n, void 0, !1)
    }

    function m(e, t) {
        let n = new s.default({});
        R(l.UnauthenticatedReportNames.USER, {
            reported_user_id: n.id
        }), (0, d.showReportModal)({
            name: l.UnauthenticatedReportNames.USER,
            record: n
        }, {}, t, void 0, !1, !1, e)
    }

    function N(e, t) {
        let n = new a.default({});
        R(l.UnauthenticatedReportNames.MESSAGE, {
            message_id: void 0,
            channel_id: void 0
        }), (0, d.showReportModal)({
            name: l.UnauthenticatedReportNames.MESSAGE,
            record: n
        }, {}, t, void 0, !1, !1, e)
    }
    async function p(e, t, n) {
        try {
            await (0, u.submitHeadlessReport)({
                name: l.ReportNames.MESSAGE,
                record: e
            }, {
                variant: "safety_alerts_headless_v1"
            }), null == t || t()
        } catch {
            null == n || n()
        }
    }

    function O(e, t) {
        R(l.ReportNames.MESSAGE, {
            message_id: e.id,
            channel_id: e.channel_id
        }), (0, d.showReportModal)({
            name: l.ReportNames.MESSAGE,
            record: e
        }, {
            variant: "safety_alerts_v1"
        }, t)
    }

    function R(e, t) {
        i.default.trackWithMetadata(_.AnalyticEvents.IAR_MODAL_OPEN, {
            report_type: e,
            ...t
        })
    }
}