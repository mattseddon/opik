/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as OpikApi from "../index";

export interface ProjectDetailed {
    id?: string;
    name: string;
    description?: string;
    createdAt?: Date;
    createdBy?: string;
    lastUpdatedAt?: Date;
    lastUpdatedBy?: string;
    lastUpdatedTraceAt?: Date;
    feedbackScores?: OpikApi.FeedbackScoreAverageDetailed[];
    duration?: OpikApi.PercentageValuesDetailed;
    totalEstimatedCost?: number;
    usage?: Record<string, number>;
}
