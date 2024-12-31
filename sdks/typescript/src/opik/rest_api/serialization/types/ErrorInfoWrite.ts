/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const ErrorInfoWrite: core.serialization.ObjectSchema<serializers.ErrorInfoWrite.Raw, OpikApi.ErrorInfoWrite> =
    core.serialization.object({
        exceptionType: core.serialization.property("exception_type", core.serialization.string()),
        message: core.serialization.string().optional(),
        traceback: core.serialization.string(),
    });

export declare namespace ErrorInfoWrite {
    interface Raw {
        exception_type: string;
        message?: string | null;
        traceback: string;
    }
}
