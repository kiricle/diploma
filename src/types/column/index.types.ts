interface Column {
    id: number;
    order: number;
    title: string;
    tasks: Task[];
    projectId: number;
}

type CreateColumn = Pick<Column, 'projectId' | 'title'>;

type CreateColumnForm = Pick<Column, 'title'>;

type UpdateColumn = Pick<Column, 'id' | 'projectId' | 'title'>;

type UpdateColumnForm = Pick<Column, 'title'>;

type DeleteColumn = Pick<Column, 'id' | 'projectId'>;

interface ChangeColumnOrder {
    id: number;
    newOrder: number;
} 