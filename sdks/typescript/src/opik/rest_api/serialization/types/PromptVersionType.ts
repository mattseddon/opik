/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const PromptVersionType: core.serialization.Schema<
    serializers.PromptVersionType.Raw,
    OpikApi.PromptVersionType
> = core.serialization.enum_(["mustache", "jinja2"]);

export declare namespace PromptVersionType {
    export type Raw = "mustache" | "jinja2";
}
