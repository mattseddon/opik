import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import { EvaluatorsRule } from "@/types/automations";
import { CellContext } from "@tanstack/react-table";
import AddEditRuleDialog from "@/components/pages-shared/automations/AddEditRuleDialog/AddEditRuleDialog";
import ConfirmDialog from "@/components/shared/ConfirmDialog/ConfirmDialog";
import useRulesBatchDeleteMutation from "@/api/automations/useRulesBatchDeleteMutation";
import CellWrapper from "@/components/shared/DataTableCells/CellWrapper";

const RuleRowActionsCell: React.FC<CellContext<EvaluatorsRule, unknown>> = (
  context,
) => {
  const resetKeyRef = useRef(0);
  const rule = context.row.original;
  const [open, setOpen] = useState<boolean | number>(false);

  const { mutate } = useRulesBatchDeleteMutation();

  const deleteRuleHandler = useCallback(() => {
    mutate({
      ids: [rule.id],
    });
  }, [rule.id, mutate]);

  return (
    <CellWrapper
      metadata={context.column.columnDef.meta}
      tableMetadata={context.table.options.meta}
      className="justify-end p-0"
    >
      <AddEditRuleDialog
        key={`add-${resetKeyRef.current}`}
        projectId={rule.project_id}
        rule={rule}
        open={open === 2}
        setOpen={setOpen}
      />
      <ConfirmDialog
        key={`delete-${resetKeyRef.current}`}
        open={open === 1}
        setOpen={setOpen}
        onConfirm={deleteRuleHandler}
        title={`Delete ${rule.name}`}
        description="Are you sure you want to delete this rule?"
        confirmText="Delete rule"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="minimal" size="icon" className="-mr-2.5 ">
            <span className="sr-only">Actions menu</span>
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-52"
          onClick={(event) => event.stopPropagation()}
        >
          <DropdownMenuItem
            onClick={() => {
              setOpen(2);
              resetKeyRef.current = resetKeyRef.current + 1;
            }}
          >
            <Pencil className="mr-2 size-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOpen(1);
              resetKeyRef.current = resetKeyRef.current + 1;
            }}
          >
            <Trash className="mr-2 size-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </CellWrapper>
  );
};

export default RuleRowActionsCell;
