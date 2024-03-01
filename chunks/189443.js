function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEditingEvent: function() {
            return c
        },
        recurrenceRuleToServer: function() {
            return E
        },
        recurrenceRuleFromServer: function() {
            return s
        },
        convertToFakeGuildEvent: function() {
            return o
        },
        getInitialGuildEventData: function() {
            return _
        }
    });
    var u, l, r = n("271938"),
        d = n("841363"),
        i = n("822516"),
        a = n("745049");

    function c(e) {
        return !!(null == e ? void 0 : e.id)
    }

    function E(e) {
        var t, n;
        return null == e ? null : {
            start: e.start,
            end: e.end,
            frequency: e.frequency,
            interval: e.interval,
            by_weekday: e.byWeekday,
            by_n_weekday: e.byNWeekday,
            by_month: e.byMonth,
            by_month_day: (null !== (n = null === (t = e.byMonthDay) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 ? e.byMonthDay : null,
            by_year_day: e.byYearDay,
            count: e.count
        }
    }

    function s(e) {
        return null == e ? null : {
            start: new Date(e.start).toISOString(),
            end: null != e.end ? new Date(e.end).toISOString() : null,
            frequency: e.frequency,
            interval: e.interval,
            byWeekday: e.by_weekday,
            byNWeekday: e.by_n_weekday,
            byMonth: e.by_month,
            byMonthDay: e.by_month_day,
            byYearDay: e.by_year_day,
            count: e.count
        }
    }(u = l || (l = {})).CHANNEL_SELECTOR = "ChannelSelector", u.DETAILS = "Details", u.PREVIEW = "Preview";

    function o(e, t, n) {
        let {
            name: u,
            description: l,
            privacyLevel: d,
            channelId: i,
            scheduledStartTime: c,
            scheduledEndTime: s,
            entityType: o,
            entityMetadata: _,
            image: y,
            recurrenceRule: R,
            eventExceptions: v
        } = e;
        return {
            id: null != n ? n : a.FAKE_EVENT_ID,
            name: u,
            description: null != l ? l : null,
            privacy_level: d,
            scheduled_start_time: c,
            scheduled_end_time: s,
            entity_type: o,
            entity_metadata: null != _ ? _ : null,
            image: null != y ? y : void 0,
            channel_id: i,
            guild_id: t,
            creator_id: r.default.getId(),
            status: a.GuildScheduledEventStatus.SCHEDULED,
            recurrence_rule: E(R),
            guild_scheduled_event_exceptions: v.map(e => ({
                event_exception_id: e.eventExceptionId,
                event_id: e.eventId,
                guild_id: e.guildId,
                scheduled_start_time: e.scheduledStartTime,
                scheduled_end_time: e.scheduledEndTime,
                is_canceled: e.isCanceled
            }))
        }
    }

    function _(e, t) {
        var n, u, l, r, c, E, o, _;
        let y = {
            name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : "",
            privacyLevel: null !== (u = null == e ? void 0 : e.privacy_level) && void 0 !== u ? u : a.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
            description: null !== (l = null == e ? void 0 : e.description) && void 0 !== l ? l : "",
            scheduledStartTime: null !== (r = null == e ? void 0 : e.scheduled_start_time) && void 0 !== r ? r : (0, i.getInitialEventStartDate)().toISOString(),
            entityType: null !== (c = null == e ? void 0 : e.entity_type) && void 0 !== c ? c : a.GuildScheduledEventEntityTypes.NONE,
            entityMetadata: null !== (E = null == e ? void 0 : e.entity_metadata) && void 0 !== E ? E : void 0,
            channelId: null == e ? void 0 : e.channel_id,
            creatorId: null == e ? void 0 : e.creator_id,
            image: null == e ? void 0 : e.image,
            scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
            recurrenceRule: s(null == e ? void 0 : e.recurrence_rule),
            eventExceptions: (null !== (o = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== o ? o : []).map(e => ({
                eventExceptionId: e.event_exception_id,
                eventId: e.event_id,
                guildId: e.guild_id,
                scheduledStartTime: e.scheduled_start_time,
                scheduledEndTime: e.scheduled_end_time,
                isCanceled: e.is_canceled
            }))
        };
        if (null != (_ = e) && "id" in _ && (null == e ? void 0 : e.entity_type) === a.GuildScheduledEventEntityTypes.EXTERNAL) {
            let t = (0, d.getLocationFromEvent)(e);
            null != t && (y.entityMetadata = {
                location: t
            })
        } else null == y.channelId && null != t && (y.channelId = t.id, t.isGuildStageVoice() ? y.entityType = a.GuildScheduledEventEntityTypes.STAGE_INSTANCE : t.isGuildVoice() && (y.entityType = a.GuildScheduledEventEntityTypes.VOICE));
        return y
    }
}