export interface SqlEditorProps{
    onRun: (sql: string) => void;
    className?: string
    id_query?: string
    sql?: string
    value?: string
    onChange?: (value: string) => void
}