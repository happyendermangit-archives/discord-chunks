function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertToFakeGuildEvent: function() {
            return c
        },
        getInitialGuildEventData: function() {
            return E
        },
        isEditingEvent: function() {
            return u
        },
        recurrenceRuleFromServer: function() {
            return _
        },
        recurrenceRuleToServer: function() {
            return d
        }
    });
    var i, r, s = n("314897"),
        a = n("230900"),
        o = n("854698"),
        l = n("765305");

    function u(e) {
        return !!(null == e ? void 0 : e.id)
    }

    function d(e) {
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

    function _(e) {
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
    }(i = r || (r = {})).CHANNEL_SELECTOR = "ChannelSelector", i.DETAILS = "Details", i.PREVIEW = "Preview";

    function c(e, t, n) {
        let {
            name: i,
            description: r,
            privacyLevel: a,
            channelId: o,
            scheduledStartTime: u,
            scheduledEndTime: _,
            entityType: c,
            entityMetadata: E,
            image: I,
            recurrenceRule: T,
            eventExceptions: f
        } = e;
        return {
            id: null != n ? n : l.FAKE_EVENT_ID,
            name: i,
            description: null != r ? r : null,
            privacy_level: a,
            scheduled_start_time: u,
            scheduled_end_time: _,
            entity_type: c,
            entity_metadata: null != E ? E : null,
            image: null != I ? I : void 0,
            channel_id: o,
            guild_id: t,
            creator_id: s.default.getId(),
            status: l.GuildScheduledEventStatus.SCHEDULED,
            recurrence_rule: d(T),
            guild_scheduled_event_exceptions: f.map(e => ({
                event_exception_id: e.eventExceptionId,
                event_id: e.eventId,
                guild_id: e.guildId,
                scheduled_start_time: e.scheduledStartTime,
                scheduled_end_time: e.scheduledEndTime,
                is_canceled: e.isCanceled
            }))
        }
    }

    function E(e, t) {
        var n, i, r, s, u, d, c, E;
        let I = {
            name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : "",
            privacyLevel: null !== (i = null == e ? void 0 : e.privacy_level) && void 0 !== i ? i : l.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
            description: null !== (r = null == e ? void 0 : e.description) && void 0 !== r ? r : "",
            scheduledStartTime: null !== (s = null == e ? void 0 : e.scheduled_start_time) && void 0 !== s ? s : (0, o.getInitialEventStartDate)().toISOString(),
            entityType: null !== (u = null == e ? void 0 : e.entity_type) && void 0 !== u ? u : l.GuildScheduledEventEntityTypes.NONE,
            entityMetadata: null !== (d = null == e ? void 0 : e.entity_metadata) && void 0 !== d ? d : void 0,
            channelId: null == e ? void 0 : e.channel_id,
            creatorId: null == e ? void 0 : e.creator_id,
            image: null == e ? void 0 : e.image,
            scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
            recurrenceRule: _(null == e ? void 0 : e.recurrence_rule),
            eventExceptions: (null !== (c = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== c ? c : []).map(e => ({
                eventExceptionId: e.event_exception_id,
                eventId: e.event_id,
                guildId: e.guild_id,
                scheduledStartTime: e.scheduled_start_time,
                scheduledEndTime: e.scheduled_end_time,
                isCanceled: e.is_canceled
            }))
        };
        if (null != (E = e) && "id" in E && (null == e ? void 0 : e.entity_type) === l.GuildScheduledEventEntityTypes.EXTERNAL) {
            let t = (0, a.getLocationFromEvent)(e);
            null != t && (I.entityMetadata = {
                location: t
            })
        } else null == I.channelId && null != t && (I.channelId = t.id, t.isGuildStageVoice() ? I.entityType = l.GuildScheduledEventEntityTypes.STAGE_INSTANCE : t.isGuildVoice() && (I.entityType = l.GuildScheduledEventEntityTypes.VOICE));
        return I
    }
}