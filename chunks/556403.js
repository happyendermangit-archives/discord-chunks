function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertToFakeGuildEvent: function() {
            return d
        },
        getInitialGuildEventData: function() {
            return _
        },
        isEditingEvent: function() {
            return l
        },
        recurrenceRuleFromServer: function() {
            return f
        },
        recurrenceRuleToServer: function() {
            return c
        }
    });
    var r, o, i = n("217014"),
        a = n("934198"),
        u = n("888447"),
        s = n("713653");

    function l(e) {
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

    function f(e) {
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
    }(r = o || (o = {})).CHANNEL_SELECTOR = "ChannelSelector", r.DETAILS = "Details", r.PREVIEW = "Preview";

    function d(e, t, n) {
        var r = e.name,
            o = e.description,
            a = e.privacyLevel,
            u = e.channelId,
            l = e.scheduledStartTime,
            f = e.scheduledEndTime,
            d = e.entityType,
            _ = e.entityMetadata,
            E = e.image,
            p = e.recurrenceRule,
            m = e.eventExceptions;
        return {
            id: null != n ? n : s.FAKE_EVENT_ID,
            name: r,
            description: null != o ? o : null,
            privacy_level: a,
            scheduled_start_time: l,
            scheduled_end_time: f,
            entity_type: d,
            entity_metadata: null != _ ? _ : null,
            image: null != E ? E : void 0,
            channel_id: u,
            guild_id: t,
            creator_id: i.default.getId(),
            status: s.GuildScheduledEventStatus.SCHEDULED,
            recurrence_rule: c(p),
            guild_scheduled_event_exceptions: m.map(function(e) {
                return {
                    event_exception_id: e.eventExceptionId,
                    event_id: e.eventId,
                    guild_id: e.guildId,
                    scheduled_start_time: e.scheduledStartTime,
                    scheduled_end_time: e.scheduledEndTime,
                    is_canceled: e.isCanceled
                }
            })
        }
    }

    function _(e, t) {
        var n, r, o, i, l, c, d, _, E = {
            name: null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : "",
            privacyLevel: null !== (o = null == e ? void 0 : e.privacy_level) && void 0 !== o ? o : s.GuildScheduledEventPrivacyLevel.GUILD_ONLY,
            description: null !== (i = null == e ? void 0 : e.description) && void 0 !== i ? i : "",
            scheduledStartTime: null !== (l = null == e ? void 0 : e.scheduled_start_time) && void 0 !== l ? l : (0, u.getInitialEventStartDate)().toISOString(),
            entityType: null !== (c = null == e ? void 0 : e.entity_type) && void 0 !== c ? c : s.GuildScheduledEventEntityTypes.NONE,
            entityMetadata: null !== (d = null == e ? void 0 : e.entity_metadata) && void 0 !== d ? d : void 0,
            channelId: null == e ? void 0 : e.channel_id,
            creatorId: null == e ? void 0 : e.creator_id,
            image: null == e ? void 0 : e.image,
            scheduledEndTime: null == e ? void 0 : e.scheduled_end_time,
            recurrenceRule: f(null == e ? void 0 : e.recurrence_rule),
            eventExceptions: (null !== (_ = null == e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== _ ? _ : []).map(function(e) {
                return {
                    eventExceptionId: e.event_exception_id,
                    eventId: e.event_id,
                    guildId: e.guild_id,
                    scheduledStartTime: e.scheduled_start_time,
                    scheduledEndTime: e.scheduled_end_time,
                    isCanceled: e.is_canceled
                }
            })
        };
        if (null != (n = e) && "id" in n && (null == e ? void 0 : e.entity_type) === s.GuildScheduledEventEntityTypes.EXTERNAL) {
            var p = (0, a.getLocationFromEvent)(e);
            null != p && (E.entityMetadata = {
                location: p
            })
        } else null == E.channelId && null != t && (E.channelId = t.id, t.isGuildStageVoice() ? E.entityType = s.GuildScheduledEventEntityTypes.STAGE_INSTANCE : t.isGuildVoice() && (E.entityType = s.GuildScheduledEventEntityTypes.VOICE));
        return E
    }
}