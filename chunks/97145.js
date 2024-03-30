function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        IGNORE_ANALYTICS_BREADCRUMB_EVENTS: function() {
            return o
        },
        filterThrottle: function() {
            return a
        }
    });
    var I = e("981631");
    let o = [I.AnalyticEvents.START_SPEAKING, I.AnalyticEvents.START_LISTENING, I.AnalyticEvents.APP_OPENED, I.AnalyticEvents.NOTIFICATION_CLICKED, I.AnalyticEvents.EXPERIMENT_USER_TRIGGERED, I.AnalyticEvents.EXPERIMENT_DM_TRIGGERED, I.AnalyticEvents.EXPERIMENT_GUILD_TRIGGERED];

    function a(_) {
        let {
            maxBudgetMinute: E,
            maxBudgetHour: e
        } = _, I = {
            minute: {
                slot: 0,
                budgetUsed: 0
            },
            hour: {
                slot: 0,
                budgetUsed: 0
            }
        };
        return () => {
            let _ = Date.now(),
                o = Math.round(_ / 1e3 / 60),
                a = Math.round(_ / 1e3 / 60 / 60);
            return I.minute.slot !== o && (I.minute.slot = o, I.minute.budgetUsed = 0), I.hour.slot !== a && (I.hour.slot = a, I.hour.budgetUsed = 0), !!(I.minute.budgetUsed < E) && (I.minute.budgetUsed++, !!(I.hour.budgetUsed < e)) && (I.hour.budgetUsed++, !0)
        }
    }
}