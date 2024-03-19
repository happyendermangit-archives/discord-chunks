function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEditingEvent: function() {
            return E
        },
        recurrenceRuleToServer: function() {
            return c
        },
        recurrenceRuleFromServer: function() {
            return s
        },
        convertToFakeGuildEvent: function() {
            return _
        },
        getInitialGuildEventData: function() {
            return o
        }
    });
    var l, d, u = n("271938"),
        i = n("841363"),
        a = n("822516"),
        r = n("745049");

    function E(e) {
        return !!(null == e ? void 0 : e.id)
    }

    function c(e) {
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
    }(l = d || (d = {})).CHANNEL_SELECTOR = "ChannelSelector", l.DETAILS = "Details", l.PREVIEW = "Preview";

    function _(e, t, n) {
        let {
            name: l,
            description: d,
            privacyLevel: i,
            channelId: a,
            scheduledStartTime: E,
            scheduledEndTime: s,
            entityType: _,
            entityMetadata: o,
            image: y,
            recurrenceRule: v,
            eventExceptions: p
        } = e;
        return {
            id: null != n ? n : r.FAKE_EVENT_ID,
            name: l,
            description: null != d ? d : null,
            privacy_level: i,
            scheduled_start_time: E,
            scheduled_end_time: s,
            entity_type: _,
            entity_metadata: null != o ? o : null,
            image: null != y ? y : void 0,
            channel_id: a,
            guild_id: t,
            creator_id: u.default.getId(),
            status: r.GuildScheduledEventStatus.SCHEDULED,
            recurrence_rule: c(v),
            guild_scheduled_event_exceptions: p.map(e => ({
                event_exception_id: e.eventExceptionId,
                event_id: e.eventId,
                guild_id: e.guildId,
                scheduled_start_time: e.scheduledStartTime,
                scheduled_end_time: e.scheduledEndTime,
                is_canceled: e.isCanceled
            }))
        }
    }

    function o(e, t) {
        var n, l, d, u, E, c, _, o;
        let y = {
            name: null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : "",
            privacyLevel: null !== (l = null == e ? void 0 : e.privacy_level) && void 0 !== l ? l : r.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
            description: null !== (d = null == e ? void 0 : e.description) && void 0 !== d ? d : "",
            scheduledStartTime: null !== (u = null == e ? void 0 : e.scheduled_start_time) && void 0 !== u ? u : (0, a.getInitialEventStartDate)().toISOString(),
            entityType: null !== (E = null == e ? void 0 : e.entity_type) && void 0 !== E ? E : r.GuildScheduledEventEntityTypes.NONE,
            entityMetadata: null !== (c = null == e ? void 0 : e.entity_metadata) && void 0 !== c ? c : void 0,
            channelId: null == e ? void 0 : e.channel_id,
            creatorId: null == e ? void 0 : e.creator_id,
            image: null == e ? void 0 : e.image,
            scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
            recurrenceRule: s(null == e ? void 0 : e.recurrence_rule),
            eventExceptions: (null !== (_ = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== _ ? _ : []).map(e => ({
                eventExceptionId: e.event_exception_id,
                eventId: e.event_id,
                guildId: e.guild_id,
                scheduledStartTime: e.scheduled_start_time,
                scheduledEndTime: e.scheduled_end_time,
                isCanceled: e.is_canceled
            }))
        };
        if (null != (o = e) && "id" in o && (null == e ? void 0 : e.entity_type) === r.GuildScheduledEventEntityTypes.EXTERNAL) {
            let t = (0, i.getLocationFromEvent)(e);
            null != t && (y.entityMetadata = {
                location: t
            })
        } else null == y.channelId && null != t && (y.channelId = t.id, t.isGuildStageVoice() ? y.entityType = r.GuildScheduledEventEntityTypes.STAGE_INSTANCE : t.isGuildVoice() && (y.entityType = r.GuildScheduledEventEntityTypes.VOICE));
        return y
    }
}